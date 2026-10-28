import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Cookie, X, SlidersHorizontal } from 'lucide-react';
import {
  getSavedConsent,
  saveConsent,
  initGoogleConsentMode,
  triggerOpenCookieSettings,
} from '../utils/analytics';

export const openCookieSettings = triggerOpenCookieSettings;

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    initGoogleConsentMode();

    const saved = getSavedConsent();
    if (saved) {
      setAnalyticsEnabled(saved.analytics);
      return;
    }

    // Εμφάνιση αφού ο χρήστης κατέβει τα πρώτα 2 sections (~550px)
    const handleScroll = () => {
      if (window.scrollY > 550) {
        setVisible(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    if (window.scrollY > 550) {
      setVisible(true);
    } else {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Listener για άνοιγμα των ρυθμίσεων (π.χ. από το link στο footer)
    const handleReopen = () => {
      const saved = getSavedConsent();
      setAnalyticsEnabled(saved ? saved.analytics : false);
      setShowDetails(true);
      setVisible(true);
    };

    window.addEventListener('ermeion:open-cookie-settings', handleReopen);
    return () => {
      window.removeEventListener('ermeion:open-cookie-settings', handleReopen);
    };
  }, []);

  const handleAcceptAll = () => {
    setAnalyticsEnabled(true);
    saveConsent(true);
    setVisible(false);
    setShowDetails(false);
  };

  const handleRejectOptional = () => {
    setAnalyticsEnabled(false);
    saveConsent(false);
    setVisible(false);
    setShowDetails(false);
  };

  const handleSaveCustom = () => {
    saveConsent(analyticsEnabled);
    setVisible(false);
    setShowDetails(false);
  };

  if (!visible) return null;

  return (
    <AnimatePresence>
      {/* Modal Αναλυτικών Ρυθμίσεων (όταν πατηθεί "Ρυθμίσεις") */}
      {showDetails && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/45 backdrop-blur-sm"
            onClick={() => setShowDetails(false)}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-10"
          >
            {/* Modal Header */}
            <div className="px-5 py-4 bg-gradient-to-r from-slate-900 via-slate-800 to-[#004aad] text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-white/10 text-white">
                  <SlidersHorizontal className="w-4 h-4 text-blue-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">Προτιμήσεις Cookies</h3>
                  <p className="text-[11px] text-blue-100/80">Ερμείον Φυσικοθεραπεία</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowDetails(false)}
                className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Κλείσιμο"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 space-y-4 max-h-[60vh] overflow-y-auto text-xs sm:text-sm text-gray-700">
              <p className="text-xs text-gray-500 leading-relaxed">
                Επιλέξτε ποιες κατηγορίες cookies επιτρέπετε να χρησιμοποιούνται κατά την περιήγησή σας.
              </p>

              {/* Necessary Cookies */}
              <div className="p-3.5 rounded-xl border border-gray-100 bg-slate-50 flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <Shield className="w-4 h-4 text-emerald-600" />
                    <span className="font-semibold text-gray-900 text-xs sm:text-sm">Απολύτως Απαραίτητα</span>
                    <span className="text-[10px] font-medium bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">
                      Πάντα ενεργά
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Τεχνικά απαραίτητα για την ασφαλή και ομαλή λειτουργία του ιστοτόπου.
                  </p>
                </div>
                <div className="pt-1">
                  <div className="w-9 h-5 bg-emerald-500 rounded-full flex items-center justify-end px-0.5 opacity-80 cursor-not-allowed">
                    <div className="w-4 h-4 bg-white rounded-full shadow" />
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="p-3.5 rounded-xl border border-gray-200 hover:border-blue-200 transition-colors flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <Cookie className="w-4 h-4 text-[#004aad]" />
                    <span className="font-semibold text-gray-900 text-xs sm:text-sm">Στατιστικά / Analytics</span>
                    <span className="text-[10px] font-medium bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                      Προαιρετικά
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Ανώνυμες μετρήσεις επισκεψιμότητας (Google Analytics) για τη βελτίωση του ιστοτόπου.
                  </p>
                </div>
                <div className="pt-1">
                  <button
                    type="button"
                    role="switch"
                    aria-checked={analyticsEnabled}
                    onClick={() => setAnalyticsEnabled(!analyticsEnabled)}
                    className={`w-10 h-5 rounded-full transition-colors relative focus:outline-none ${
                      analyticsEnabled ? 'bg-[#004aad]' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform shadow-sm ${
                        analyticsEnabled ? 'translate-x-5' : 'translate-x-0.5'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="p-3.5 bg-gray-50 border-t border-gray-100 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={handleSaveCustom}
                className="px-3.5 py-2 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition-all"
              >
                Αποθήκευση επιλογών
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#004aad] rounded-lg hover:bg-[#003988] transition-all shadow-sm"
              >
                Αποδοχή όλων
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Sticky Bottom Bar (Μικρό, διακριτικό, κολλημένο στο κάτω μέρος) */}
      {!showDetails && (
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed bottom-0 inset-x-0 z-[100] bg-white/95 backdrop-blur-md border-t border-gray-200/90 shadow-[0_-4px_25px_rgba(0,0,0,0.08)] py-3 px-4 sm:px-6"
        >
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6">
            {/* Κείμενο */}
            <p className="text-xs sm:text-[13px] text-gray-700 leading-snug text-center md:text-left">
              Χρησιμοποιούμε cookies για να βελτιώσουμε την εμπειρία σας στον ιστότοπό μας. Πλοηγούμενοι σε αυτόν τον ιστότοπο, συμφωνείτε με τη χρήση των cookies.
            </p>

            {/* Κουμπιά: Ρυθμίσεις, Όχι, Ναι */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setShowDetails(true)}
                className="px-2.5 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-900 underline underline-offset-2 transition-colors cursor-pointer"
              >
                Ρυθμίσεις
              </button>
              <button
                type="button"
                onClick={handleRejectOptional}
                className="px-3.5 py-1.5 text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 active:scale-[0.98] rounded-lg transition-all cursor-pointer"
              >
                Όχι
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="px-4 py-1.5 text-xs font-semibold text-white bg-[#004aad] hover:bg-[#003988] active:scale-[0.98] shadow-sm rounded-lg transition-all cursor-pointer"
              >
                Ναι
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
