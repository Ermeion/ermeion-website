// Google Analytics & Cookie Consent Helper

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_ID || '';

const CONSENT_STORAGE_KEY = 'ermeion_cookie_consent';

export interface CookiePreferences {
  necessary: boolean; // Always true
  analytics: boolean;
  timestamp: string;
}

/**
 * Initialize default Google Consent Mode v2 before any scripts load.
 * Default is 'denied' until the user gives explicit consent.
 */
export function initGoogleConsentMode() {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };

  // Default consent state: denied
  window.gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    wait_for_update: 500,
  });

  // Check if consent was already given previously
  const stored = getSavedConsent();
  if (stored) {
    applyConsent(stored.analytics);
  }
}

/**
 * Retrieve saved consent from localStorage
 */
export function getSavedConsent(): CookiePreferences | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

/**
 * Save user cookie preferences
 */
export function saveConsent(analyticsGranted: boolean) {
  const prefs: CookiePreferences = {
    necessary: true,
    analytics: analyticsGranted,
    timestamp: new Date().toISOString(),
  };

  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(prefs));
  } catch (e) {
    console.error('Failed to save cookie consent to localStorage', e);
  }

  applyConsent(analyticsGranted);
}

/**
 * Update Google Consent Mode and load GA script if granted and ID exists
 */
export function applyConsent(analyticsGranted: boolean) {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('consent', 'update', {
    analytics_storage: analyticsGranted ? 'granted' : 'denied',
  });

  if (analyticsGranted && GA_MEASUREMENT_ID) {
    loadGoogleAnalytics(GA_MEASUREMENT_ID);
  }
}

/**
 * Dynamically inject Google Analytics tag only after consent is granted
 */
function loadGoogleAnalytics(measurementId: string) {
  const scriptId = 'google-analytics-script';
  if (document.getElementById(scriptId)) return;

  const script = document.createElement('script');
  script.id = scriptId;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  if (window.gtag) {
    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      anonymize_ip: true,
      cookie_flags: 'SameSite=None;Secure',
    });
  }
}

/**
 * Helper event to reopen the cookie settings modal from anywhere (e.g. footer)
 */
export function triggerOpenCookieSettings() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('ermeion:open-cookie-settings'));
  }
}

