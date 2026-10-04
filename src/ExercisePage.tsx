import { ArrowRight, Phone } from 'lucide-react';

interface ExercisePageProps {
  onNavigate: (hash: string) => void;
}

export default function ExercisePage({ onNavigate }: ExercisePageProps) {
  return (
    <div className="bg-white text-slate-800 min-h-screen font-sans selection:bg-[#e0f2fe] selection:text-[#004aad]">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-white pt-24 pb-16 md:pt-32 md:pb-24 border-b border-slate-100">
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="text-sm font-bold text-[#004aad] uppercase tracking-wider mb-6">
              Υπηρεσίες / Θεραπευτική Άσκηση
            </div>
            
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6">
              Θεραπευτική Άσκηση
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-700 font-normal leading-relaxed mb-8">
              Είναι ένα από τα πιο ισχυρά θεραπευτικά εργαλεία για την αποκατάσταση, την πρόληψη και τη διατήρηση της λειτουργικότητας. Στο ΕΡΜΕΙΟΝ, η θεραπευτική άσκηση, δεν είναι απλώς γυμναστική, είναι μια επιστημονικά σχεδιασμένη παρέμβαση για κάθε άτομο ξεχωριστά. Προσαρμόζεται σε κάθε θεραπεία ανάλογα με την επαναξιολόγηση και την συμπεριφορά των συμπτωμάτων.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+306988404234"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#004aad] hover:bg-[#003884] text-white text-lg font-bold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5 shrink-0" />
                Κλείστε Ραντεβού
              </a>
            </div>
          </div>

          {/* Right Column - Exercise Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
              <img 
                src="https://dcmekuaqoafogwlgnugs.supabase.co/storage/v1/object/public/Services/therapeftiki-askisi.webp" 
                alt="Θεραπευτική Άσκηση" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Philosophy Section (Objectives & Foundations - Enlarged Unboxed text design) */}
      <section id="philosophy" className="py-20 bg-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#004aad] mb-6">
              Στόχοι & Σχεδιασμός της Άσκησης
            </h2>
            <div className="h-1 w-20 bg-[#0082c8] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start text-left">
            
            {/* Left Block: Targets */}
            <div className="border-l-4 border-[#0082c8] pl-6 py-2">
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">Θεραπευτικοί Στόχοι</h3>
              <p className="text-lg md:text-xl text-slate-700 font-normal leading-relaxed">
                Η θεραπευτική άσκηση στοχεύει: στη μείωση του πόνου, τη βελτίωση της αντοχής και της λειτουργικότητας, μέσω της στοχευμένης ενδυνάμωσης και στην πρόληψη υποτροπών.
              </p>
            </div>

            {/* Right Block: Foundations */}
            <div className="border-l-4 border-[#0082c8] pl-6 py-2">
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">Βάση Σχεδιασμού</h3>
              <p className="text-lg md:text-xl text-slate-700 font-normal leading-relaxed">
                Σχεδιάζεται πάντα με βάση: την κλινική εικόνα του κάθε ατόμου ξεχωριστά, τις δυνατότητες και τους περιορισμούς του, τις ανάγκες της καθημερινότητάς του και τους προσωπικούς του στόχους.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Indications Section (Clean Enlarged Grid) */}
      <section id="indications" className="py-20 bg-[#fafbfc] border-t border-b border-slate-100 scroll-mt-28">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#004aad] mb-4">
              Ενδείξεις Θεραπευτικής Άσκησης
            </h2>
            <p className="text-slate-700 max-w-2xl mx-auto text-lg md:text-xl font-normal leading-relaxed">
              Ενδείκνυται για:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 text-left">
            
            {/* Indication 1 */}
            <div className="border-l-4 border-blue-200 pl-4">
              <p className="text-slate-800 text-base md:text-lg font-medium leading-relaxed">
                Μυοσκελετικές παθήσεις όπως οσφυαλγία, αυχενικό σύνδρομο, τενοντοπάθειες κλπ
              </p>
            </div>

            {/* Indication 2 */}
            <div className="border-l-4 border-blue-200 pl-4">
              <p className="text-slate-800 text-base md:text-lg font-medium leading-relaxed">
                Μετεγχειρητική αποκατάσταση
              </p>
            </div>

            {/* Indication 3 */}
            <div className="border-l-4 border-blue-200 pl-4">
              <p className="text-slate-800 text-base md:text-lg font-medium leading-relaxed">
                Αποκατάσταση μετά από τραυματισμούς
              </p>
            </div>

            {/* Indication 4 */}
            <div className="border-l-4 border-blue-200 pl-4">
              <p className="text-slate-800 text-base md:text-lg font-medium leading-relaxed">
                Οστεοαρθρίτιδα, ρευματοειδής αρθρίτιδα και εκφυλιστικές παθήσεις
              </p>
            </div>

            {/* Indication 5 */}
            <div className="border-l-4 border-blue-200 pl-4">
              <p className="text-slate-800 text-base md:text-lg font-medium leading-relaxed">
                Αυτοάνοσα νοσήματα που επηρεάζουν το μυοσκελετικό
              </p>
            </div>

            {/* Indication 6 */}
            <div className="border-l-4 border-blue-200 pl-4">
              <p className="text-slate-800 text-base md:text-lg font-medium leading-relaxed">
                Ενίσχυση σωματικής ικανότητας σε χρόνιο πόνο ή καθιστικό τρόπο ζωής
              </p>
            </div>

            {/* Indication 7 */}
            <div className="border-l-4 border-blue-200 pl-4">
              <p className="text-slate-800 text-base md:text-lg font-medium leading-relaxed">
                Πρόληψη πτώσεων σε ηλικιωμένους
              </p>
            </div>

            {/* Indication 8 */}
            <div className="border-l-4 border-blue-200 pl-4">
              <p className="text-slate-800 text-base md:text-lg font-medium leading-relaxed">
                Αθλητική αποκατάσταση και επανένταξη στη δραστηριότητα
              </p>
            </div>

            {/* Indication 9 */}
            <div className="border-l-4 border-blue-200 pl-4">
              <p className="text-slate-800 text-base md:text-lg font-medium leading-relaxed">
                Σακχαρώδης διαβήτης
              </p>
            </div>

            {/* Indication 10 */}
            <div className="border-l-4 border-blue-200 pl-4">
              <p className="text-slate-800 text-base md:text-lg font-medium leading-relaxed">
                Οστεοπόρωση
              </p>
            </div>

            {/* Indication 11 */}
            <div className="border-l-4 border-blue-200 pl-4">
              <p className="text-slate-800 text-base md:text-lg font-medium leading-relaxed">
                Παχυσαρκία
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

            {/* Spine Pain */}
            <div 
              onClick={() => onNavigate('#spine-pain')}
              className="p-6 rounded-2xl hover:bg-slate-50 transition-all duration-200 cursor-pointer flex flex-col justify-between group border border-transparent hover:border-slate-100"
            >
              <div>
                <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2 group-hover:text-[#004aad] transition-colors">Θεραπεία & Πρόληψη Σπονδυλικού Πόνου</h3>
                <p className="text-base text-slate-700 font-normal mb-4 leading-relaxed">
                  Εξειδικευμένοι χειρισμοί και καθοδήγηση για την αντιμετώπιση του πόνου στη μέση και τον αυχένα.
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
            Ξεκινήστε το Θεραπευτικό σας Πρόγραμμα
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+302310940100"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#004aad] hover:bg-[#003884] text-white text-lg font-bold shadow-md hover:shadow-lg transition-all duration-300"
            >
              <Phone className="w-5 h-5 shrink-0" />
              Κλείστε Ραντεβού
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
