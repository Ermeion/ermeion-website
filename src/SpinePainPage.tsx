import { ArrowRight } from 'lucide-react';

interface SpinePainPageProps {
  onNavigate: (hash: string) => void;
}

export default function SpinePainPage({ onNavigate }: SpinePainPageProps) {
  return (
    <div className="bg-white text-slate-800 min-h-screen font-sans selection:bg-[#e0f2fe] selection:text-[#004aad]">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-white pt-24 pb-16 md:pt-32 md:pb-24 border-b border-slate-100">
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="text-sm font-bold text-[#004aad] uppercase tracking-wider mb-6">
              Υπηρεσίες / Θεραπεία & Πρόληψη Σπονδυλικού Πόνου
            </div>
            
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6">
              Θεραπεία & Πρόληψη Σπονδυλικού Πόνου
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-700 font-normal leading-relaxed mb-8">
              Στο ΕΡΜΕΙΟΝ, αντιμετωπίζουμε τον σπονδυλικό πόνο με τρόπο σύγχρονο, εξατομικευμένο και βασισμένο σε επιστημονικά τεκμηριωμένες πρακτικές.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+306988404234"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#004aad] hover:bg-[#003884] text-white text-lg font-bold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Κλείστε Ραντεβού
              </a>
            </div>
          </div>

          {/* Right Column - Styled Spine Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
              <img 
                src="https://dcmekuaqoafogwlgnugs.supabase.co/storage/v1/object/public/Services/spine.webp" 
                alt="Θεραπεία & Πρόληψη Σπονδυλικού Πόνου" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Indications Section (Who it is for - Enlarged High-Readability Layout) */}
      <section id="indications" className="py-20 bg-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#004aad] mb-4">
              Βοηθάμε καθημερινά άτομα με:
            </h2>
            <p className="text-slate-700 max-w-2xl mx-auto text-lg md:text-xl font-normal leading-relaxed">
              Η φυσικοθεραπεία ενδείκνυται σε άτομα με:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 text-left">
            
            {/* Indication 1 */}
            <div className="border-l-4 border-blue-200 pl-5">
              <h4 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-2">Οσφυαλγία</h4>
              <p className="text-base md:text-lg text-slate-700 font-normal leading-relaxed">
                Πόνο στην μέση, με ή χωρίς ισχιαλγία και νευρολογικό έλλειμμα.
              </p>
            </div>

            {/* Indication 2 */}
            <div className="border-l-4 border-blue-200 pl-5">
              <h4 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-2">Αθλητικούς Τραυματισμούς</h4>
              <p className="text-base md:text-lg text-slate-700 font-normal leading-relaxed">
                Πόνο στον αυχένα ή την μέση κατά την διάρκεια των δραστηριοτήτων/αθλημάτων ή ασκήσεων στο γυμναστήριο.
              </p>
            </div>

            {/* Indication 3 */}
            <div className="border-l-4 border-blue-200 pl-5">
              <h4 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-2">Αυχεναλγία</h4>
              <p className="text-base md:text-lg text-slate-700 font-normal leading-relaxed">
                Πόνο στον αυχένα, με ή χωρίς πόνο στον ώμο/χέρι και νευρολογικό έλλειμμα.
              </p>
            </div>

            {/* Indication 4 */}
            <div className="border-l-4 border-blue-200 pl-5">
              <h4 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-2">Θωρακικός Πόνος</h4>
              <p className="text-base md:text-lg text-slate-700 font-normal leading-relaxed">
                Πόνο στην πλάτη, δυσκαμψία και προβλήματα στην κίνηση της.
              </p>
            </div>

            {/* Indication 5 */}
            <div className="border-l-4 border-blue-200 pl-5 col-span-1 md:col-span-2 lg:col-span-1">
              <h4 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-2">Κήλες & Εκφυλιστικές Αλλοιώσεις</h4>
              <p className="text-base md:text-lg text-slate-700 font-normal leading-relaxed">
                Επώδυνες κήλες, χειρουργεία δισκεκτομής και εκφυλιστικές αλλοιώσεις.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Practices Applied Section (Enlarged Text Layout) */}
      <section id="practices" className="py-20 bg-[#fafbfc] border-t border-b border-slate-100 scroll-mt-28">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#004aad] mb-4">
              Εφαρμόζουμε επιστημονικά τεκμηριωμένες πρακτικές όπως:
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left practices list */}
            <div className="lg:col-span-7 flex flex-col space-y-8 text-left">
              
              {/* Practice 1 */}
              <div>
                <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Μηχανική Διάγνωση & Θεραπεία</h4>
                <p className="text-base md:text-lg text-slate-700 font-normal leading-relaxed">
                  Mέθοδος McKenzie - Μηχανική διάγνωση και θεραπεία
                </p>
              </div>

              {/* Practice 2 */}
              <div>
                <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Προοδευτική Φόρτιση</h4>
                <p className="text-base md:text-lg text-slate-700 font-normal leading-relaxed">
                  Σταδιακή έκθεση στα φορτία και τις δραστηριότητες
                </p>
              </div>

              {/* Practice 3 */}
              <div>
                <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Κινητικός Έλεγχος</h4>
                <p className="text-base md:text-lg text-slate-700 font-normal leading-relaxed">
                  Νευρομυϊκή επανεκπαίδευση
                </p>
              </div>

              {/* Practice 4 */}
              <div>
                <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Πρόληψη & Αυτονομία</h4>
                <p className="text-base md:text-lg text-slate-700 font-normal leading-relaxed">
                  Στρατηγικές αυτοδιαχείρισης και πρόληψης υποτροπών
                </p>
              </div>

            </div>

            {/* Right clinical technology note */}
            <div className="lg:col-span-5 text-left border-l-4 border-slate-200 pl-6 lg:pl-8 py-2">
              <h4 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-3">Ηλεκτροθεραπεία - TECAR</h4>
              <p className="text-slate-700 font-normal text-lg md:text-xl leading-relaxed">
                Όταν ενδείκνυται, και ιδιαίτερα σε οξεία φάση, χρησιμοποιούμε τα φυσικά μέσα ηλεκτροθεραπείας - TECAR, για την άμεση ανακούφιση των συμπτωμάτων.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Related Services Cross-Links */}
      <section id="related" className="py-20 bg-white scroll-mt-28">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              Άλλες Υπηρεσίες Αποκατάστασης
            </h2>
            <p className="text-slate-600 font-normal text-lg">
              Εξερευνήστε τις συμπληρωματικές θεραπείες που προσφέρουμε στο Ερμείον.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            
            {/* McKenzie */}
            <div 
              onClick={() => onNavigate('#mckenzie')}
              className="p-6 rounded-2xl hover:bg-slate-50 transition-all duration-200 cursor-pointer flex flex-col justify-between group border border-transparent hover:border-slate-100"
            >
              <div>
                <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2 group-hover:text-[#004aad] transition-colors">Μέθοδος McKenzie</h3>
                <p className="text-base text-slate-700 font-normal mb-4 leading-relaxed">
                  Επιστημονικά τεκμηριωμένη φυσικοθεραπευτική προσέγγιση αξιολόγησης και αυτοδιαχείρισης.
                </p>
              </div>
              <div className="text-base font-bold text-[#004aad] flex items-center gap-1 group-hover:gap-2 transition-all">
                Περισσότερα <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Tecar */}
            <div 
              onClick={() => onNavigate('#tecar')}
              className="p-6 rounded-2xl hover:bg-slate-50 transition-all duration-200 cursor-pointer flex flex-col justify-between group border border-transparent hover:border-slate-100"
            >
              <div>
                <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2 group-hover:text-[#004aad] transition-colors">TECAR Therapy</h3>
                <p className="text-base text-slate-700 font-normal mb-4 leading-relaxed">
                  Στοχευμένη θεραπεία με ραδιοσυχνότητες για ταχεία ανακούφιση και κυτταρική ανάπλαση.
                </p>
              </div>
              <div className="text-base font-bold text-[#004aad] flex items-center gap-1 group-hover:gap-2 transition-all">
                Περισσότερα <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Exercise */}
            <div 
              onClick={() => onNavigate('#exercise')}
              className="p-6 rounded-2xl hover:bg-slate-50 transition-all duration-200 cursor-pointer flex flex-col justify-between group border border-transparent hover:border-slate-100"
            >
              <div>
                <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2 group-hover:text-[#004aad] transition-colors">Θεραπευτική Άσκηση</h3>
                <p className="text-base text-slate-700 font-normal mb-4 leading-relaxed">
                  Εξατομικευμένα θεραπευτικά προγράμματα εκγύμνασης για την πλήρη μυοσκελετική αποκατάσταση.
                </p>
              </div>
              <div className="text-base font-bold text-[#004aad] flex items-center gap-1 group-hover:gap-2 transition-all">
                Περισσότερα <ArrowRight className="w-4 h-4" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. End of Page CTA */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
            Απαλλαγείτε από τον Σπονδυλικό Πόνο
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+306988404234"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#004aad] hover:bg-[#003884] text-white text-lg font-bold shadow-md hover:shadow-lg transition-all duration-300"
            >
              Κλείστε Ραντεβού
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
