import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, Shield, X, SlidersHorizontal } from 'lucide-react';
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
    // Initialize consent mode defaults immediately
    initGoogleConsentMode();

    const saved = getSavedConsent();
    if (!saved) {
      // Show banner after brief delay
      const timer = setTimeout(() => {
        setVisible(true);
      }, 700);
      return () => clearTimeout(timer);
    } else {
      setAnalyticsEnabled(saved.analytics);
    }
  }, []);

  useEffect(() => {
    // Listener for reopen event (e.g. from footer)
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
      <div className="fixed inset-0 z-[100] pointer-events-none flex items-end sm:items-end justify-center p-3 sm:p-6">
        {/* Backdrop for details modal */}
        {showDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm pointer-events-auto"
            onClick={() => setShowDetails(false)}
          />
        )}

        {/* Detailed Preferences Modal */}
        {showDetails ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="pointer-events-auto w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden relative z-10"
          >
            {/* Header */}
            <div className="px-6 py-5 bg-gradient-to-r from-slate-900 via-slate-800 to-[#004aad] text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-white/10 text-white">
                  <SlidersHorizontal className="w-5 h-5 text-blue-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg">Προτιμήσεις Cookies</h3>
                  <p className="text-xs text-blue-100/80">Ερμείον Φυσικοθεραπεία</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowDetails(false)}
                className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Κλείσιμο"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6 space-y-5 max-h-[65vh] overflow-y-auto text-sm text-gray-700">
              <p className="text-xs leading-relaxed text-gray-500">
                Στο <strong>Ερμείον</strong> σεβόμαστε τα προσωπικά σας δεδομένα. Επιλέξτε ποιες κατηγορίες cookies επιτρέπετε να χρησιμοποιούνται κατά την περιήγησή σας.
              </p>

              {/* Necessary Cookies */}
              <div className="p-4 rounded-xl border border-gray-100 bg-slate-50/70 flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-emerald-600" />
                    <span className="font-semibold text-gray-900">Απολύτως Απαραίτητα</span>
                    <span className="text-[11px] font-medium bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">
                      Πάντα ενεργά
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Είναι τεχνικά απαραίτητα για την ασφαλή σύνδεση και την ομαλή λειτουργία της ιστοσελίδας. Δεν μπορούν να απενεργοποιηθούν.
                  </p>
                </div>
                <div className="pt-1">
                  <div className="w-10 h-6 bg-emerald-500 rounded-full flex items-center justify-end px-1 opacity-80 cursor-not-allowed">
                    <div className="w-4 h-4 bg-white rounded-full shadow" />
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="p-4 rounded-xl border border-gray-200 hover:border-blue-200 transition-colors flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Cookie className="w-4 h-4 text-[#004aad]" />
                    <span className="font-semibold text-gray-900">Στατιστικά / Analytics</span>
                    <span className="text-[11px] font-medium bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                      Προαιρετικά
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Μας βοηθούν να κατανοούμε ανώνυμα πώς αλληλεπιδρούν οι επισκέπτες με τον ιστότοπο (μέσω Google Analytics), επιτρέποντάς μας να βελτιώνουμε το περιεχόμενο και τις υπηρεσίες μας.
                  </p>
                </div>
                <div className="pt-1">
                  <button
                    type="button"
                    role="switch"
                    aria-checked={analyticsEnabled}
                    onClick={() => setAnalyticsEnabled(!analyticsEnabled)}
                    className={`w-11 h-6 rounded-full transition-colors relative focus:outline-none focus:ring-2 focus:ring-[#004aad]/30 ${
                      analyticsEnabled ? 'bg-[#004aad]' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform shadow-md ${
                        analyticsEnabled ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>

              <div className="text-[11px] text-gray-400">
                * Δεν χρησιμοποιούμε διαφημιστικά cookies ή trackers τρίτων για προσωποποιημένη διαφήμιση.
              </div>
            </div>

            {/* Actions */}
            <div className="p-4 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={handleSaveCustom}
                className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-100 active:scale-[0.98] transition-all"
              >
                Αποθήκευση επιλογών
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-white bg-[#004aad] rounded-xl hover:bg-[#003988] active:scale-[0.98] shadow-sm transition-all"
              >
                Αποδοχή όλων
              </button>
            </div>
          </motion.div>
        ) : (
          /* Floating Banner (Default compact view) */
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="pointer-events-auto w-full max-w-4xl bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.18)] border border-gray-200/80 p-5 sm:p-6"
          >
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
              {/* Text info */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#004aad] flex items-center justify-center shrink-0 mt-0.5">
                  <Cookie className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold text-sm sm:text-base text-gray-900">
                    Ενημέρωση για τα Cookies & Απόρρητο
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-2xl">
                    Χρησιμοποιούμε cookies για να διασφαλίσουμε τη σωστή λειτουργία του ιστοτόπου μας και, με τη συγκατάθεσή σας, ανώνυμα στατιστικά (Google Analytics) για τη βελτίωση της εμπειρίας σας. Δεν χρησιμοποιούμε εμπορικά cookies διαφήμισης.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 w-full lg:w-auto justify-end shrink-0">
                <button
                  type="button"
                  onClick={() => setShowDetails(true)}
                  className="px-3 py-2 text-xs font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-colors"
                >
                  Ρυθμίσεις
                </button>
                <button
                  type="button"
                  onClick={handleRejectOptional}
                  className="flex-1 sm:flex-none px-4 py-2.5 text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 active:scale-[0.98] rounded-xl transition-all"
                >
                  Μόνο απαραίτητα
                </button>
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="flex-1 sm:flex-none px-5 py-2.5 text-xs font-semibold text-white bg-[#004aad] hover:bg-[#003988] active:scale-[0.98] shadow-md shadow-blue-900/10 rounded-xl transition-all"
                >
                  Αποδοχή όλων
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
}
