import { ArrowRight } from 'lucide-react';

interface TecarPageProps {
  onNavigate: (hash: string) => void;
}

export default function TecarPage({ onNavigate }: TecarPageProps) {
  return (
    <div className="bg-white text-slate-800 min-h-screen font-sans selection:bg-[#e0f2fe] selection:text-[#004aad]">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-white pt-24 pb-16 md:pt-32 md:pb-24 border-b border-slate-100">
        <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center flex flex-col items-center">
          <div className="flex flex-col items-center text-center">
            <div className="text-xs font-semibold text-[#004aad] uppercase tracking-wider mb-6">
              Υπηρεσίες / TECAR Therapy
            </div>
            
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6">
              TECAR Therapy
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed mb-8 max-w-3xl">
              Στοχευμένες Ραδιοσυχνότητες.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+306988404234"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#004aad] hover:bg-[#003884] text-white text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Κλείστε Ραντεβού
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Philosophy & Mechanism Section */}
      <section id="philosophy" className="py-20 bg-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#004aad] mb-6">
              Η Φιλοσοφία της Θεραπείας
            </h2>
            <div className="h-1 w-20 bg-[#0082c8] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Image Column */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
                <img 
                  src="https://dcmekuaqoafogwlgnugs.supabase.co/storage/v1/object/public/Services/TECAR.webp" 
                  alt="Η Φιλοσοφία της Θεραπείας Tecar" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Narrative text block */}
            <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2 text-left">
              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-slate-700 font-light leading-relaxed border-l-4 border-[#0082c8] pl-6 py-1">
                  Η θεραπεία TECAR είναι ουσιαστικά ο συνδυασμός της ικανότητας του θεραπευτή στους χειρισμούς και της επιλεκτικής στόχευσης ιστού με ραδιοσυχνότητες.
                </p>
                <div className="h-px bg-slate-100 w-full my-6" />
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-3">Μηχανισμός Δράσης</h4>
                  <p className="text-base text-slate-600 font-light leading-relaxed">
                    To TECAR παράγει ένα υψηλής συχνότητας ηλεκτρομαγνητικό πεδίο που διεισδύει στο ανθρώπινο σώμα και προκαλεί εν τω βάθη υπερθερμία ώστε να ανακουφίσει το μυϊκό πόνο και τα σημεία πυροδότησής του αλλά και να βοηθήσει στην ταχύτερη αναγέννηση και επούλωση των μυών. Οι στοχευμένες ραδιοσυχνότητες χρησιμοποιούνται και για θεραπείες χωρίς θερμότητα για την αντιμετώπιση οιδημάτων σε οξεία φάση.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Focus Areas & Indications (Clean Unboxed Layout) */}
      <section id="indications" className="py-20 bg-[#fafbfc] border-t border-b border-slate-100 scroll-mt-28">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#004aad] mb-4">
              Οξείες Φάσεις & Ενδείξεις
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-base font-light leading-relaxed">
              Στο ΕΡΜΕΙΟΝ, διαθέτουμε εξοπλισμό τελευταίας τεχνολογίας από την BTL, ο όποιος είναι ο σύμμαχός μας, σε οξείες φάσεις όπως:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 text-left">
            
            {/* Indication 1 */}
            <div className="border-l-2 border-blue-100 pl-4">
              <h4 className="text-base font-bold text-slate-900 mb-2">Μετεγχειρητική Αποκατάσταση</h4>
              <p className="text-sm text-slate-600 font-light leading-relaxed">
                Μετά από χειρουργεία μηνίσκου, πρόσθιου χιαστού, μερικής δισκεκτομής κλπ
              </p>
            </div>

            {/* Indication 2 */}
            <div className="border-l-2 border-blue-100 pl-4">
              <h4 className="text-base font-bold text-slate-900 mb-2">Οσφυαλγία</h4>
              <p className="text-sm text-slate-600 font-light leading-relaxed">
                Οξεία οσφυαλγία
              </p>
            </div>

            {/* Indication 3 */}
            <div className="border-l-2 border-blue-100 pl-4">
              <h4 className="text-base font-bold text-slate-900 mb-2">Αυχενικός Πόνος</h4>
              <p className="text-sm text-slate-600 font-light leading-relaxed">
                Αυχεναλγία
              </p>
            </div>

            {/* Indication 4 */}
            <div className="border-l-2 border-blue-100 pl-4">
              <h4 className="text-base font-bold text-slate-900 mb-2">Μυϊκοί Τραυματισμοί</h4>
              <p className="text-sm text-slate-600 font-light leading-relaxed">
                Μυϊκές θλάσεις
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
            <p className="text-slate-500 font-light text-base">
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
                <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-[#004aad] transition-colors">Μέθοδος McKenzie</h3>
                <p className="text-sm text-slate-600 font-light mb-4 leading-relaxed">
                  Επιστημονικά τεκμηριωμένη φυσικοθεραπευτική προσέγγιση αξιολόγησης και αυτοδιαχείρισης.
                </p>
              </div>
              <div className="text-sm font-semibold text-[#004aad] flex items-center gap-1 group-hover:gap-2 transition-all">
                Περισσότερα <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Spine Pain */}
            <div 
              onClick={() => onNavigate('#spine-pain')}
              className="p-6 rounded-2xl hover:bg-slate-50 transition-all duration-200 cursor-pointer flex flex-col justify-between group border border-transparent hover:border-slate-100"
            >
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-[#004aad] transition-colors">Θεραπεία & Πρόληψη Σπονδυλικού Πόνου</h3>
                <p className="text-sm text-slate-600 font-light mb-4 leading-relaxed">
                  Εξειδικευμένοι χειρισμοί και καθοδήγηση για την αντιμετώπιση του πόνου στη μέση και τον αυχένα.
                </p>
              </div>
              <div className="text-sm font-semibold text-[#004aad] flex items-center gap-1 group-hover:gap-2 transition-all">
                Περισσότερα <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Exercise */}
            <div 
              onClick={() => onNavigate('#exercise')}
              className="p-6 rounded-2xl hover:bg-slate-50 transition-all duration-200 cursor-pointer flex flex-col justify-between group border border-transparent hover:border-slate-100"
            >
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-[#004aad] transition-colors">Θεραπευτική Άσκηση</h3>
                <p className="text-sm text-slate-600 font-light mb-4 leading-relaxed">
                  Εξατομικευμένα θεραπευτικά προγράμματα εκγύμνασης για την πλήρη μυοσκελετική αποκατάσταση.
                </p>
              </div>
              <div className="text-sm font-semibold text-[#004aad] flex items-center gap-1 group-hover:gap-2 transition-all">
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
            Ξεκινήστε τη θεραπεία TECAR σήμερα
          </h2>
          <p className="text-slate-600 font-light mb-8 max-w-lg mx-auto">
            Επιταχύνετε την αποκατάσταση των ιστών σας με την τεχνολογία BTL.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+306988404234"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#004aad] hover:bg-[#003884] text-white text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300"
            >
              Κλείστε Ραντεβού Online
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
