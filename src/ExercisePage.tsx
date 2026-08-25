import { 
  ArrowRight, 
  ShieldCheck, 
  Target, 
  Award,
  Sparkles,
  Zap,
  Activity,
  Compass,
  FileCheck2,
  CalendarCheck,
  Dumbbell
} from 'lucide-react';

interface ExercisePageProps {
  onNavigate: (hash: string) => void;
}

export default function ExercisePage({ onNavigate }: ExercisePageProps) {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navbarHeight = 90; // accounting for main navbar
      const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#f8fafc] text-slate-800 min-h-screen font-sans selection:bg-[#e0f2fe] selection:text-[#004aad]">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-white pt-24 pb-16 md:pt-32 md:pb-24 border-b border-slate-100">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-[#e0f2fe] to-transparent rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-t from-blue-50 to-transparent rounded-full filter blur-2xl translate-y-1/3 -translate-x-1/4" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-[#004aad] uppercase tracking-wider mb-6">
              <Dumbbell className="w-3.5 h-3.5" />
              Υπηρεσίες / Θεραπευτική Άσκηση
            </div>
            
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6">
              Θεραπευτική Άσκηση
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed mb-8">
              Είναι ένα από τα πιο ισχυρά θεραπευτικά εργαλεία για την αποκατάσταση, την πρόληψη και τη διατήρηση της λειτουργικότητας. Στο ΕΡΜΕΙΟΝ, η θεραπευτική άσκηση, δεν είναι απλώς γυμναστική, είναι μια επιστημονικά σχεδιασμένη παρέμβαση για κάθε άτομο ξεχωριστά. Προσαρμόζεται σε κάθε θεραπεία ανάλογα με την επαναξιολόγηση και την συμπεριφορά των συμπτωμάτων.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://cal.eu/ermeion/physiotherapy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#004aad] hover:bg-[#003884] text-white text-base font-semibold shadow-lg shadow-blue-500/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Κλείστε Ραντεβού
                <CalendarCheck className="w-5 h-5 ml-2.5" />
              </a>
              <button
                onClick={() => scrollToSection('philosophy')}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-base font-semibold transition-all duration-300"
              >
                Μάθετε Περισσότερα
              </button>
            </div>
          </div>

          {/* Right Column - Exercise Alignment Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 overflow-hidden rounded-3xl border border-slate-100 shadow-xl shadow-slate-100">
              <img 
                src="https://dcmekuaqoafogwlgnugs.supabase.co/storage/v1/object/public/Services/therapeftiki-askisi.webp" 
                alt="Θεραπευτική Άσκηση" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Background elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-50 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-slate-100 rounded-full -z-10" />
          </div>
        </div>
      </section>


      {/* 3. Core Philosophy & Mechanical Concept Section (Objectives & Foundations) */}
      <section id="philosophy" className="py-20 bg-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#004aad] mb-6">
              Στόχοι & Σχεδιασμός της Άσκησης
            </h2>
            <div className="h-1 w-20 bg-[#0082c8] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            
            {/* Left Box: Targets */}
            <div className="bg-[#f8fafc] border border-slate-100 rounded-3xl p-8 text-left flex flex-col justify-between hover:shadow-lg transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#004aad] flex items-center justify-center mb-6">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Θεραπευτικοί Στόχοι</h3>
                <p className="text-base text-slate-600 font-light leading-relaxed">
                  Η θεραπευτική άσκηση στοχεύει: στη μείωση του πόνου, τη βελτίωση της αντοχής και της λειτουργικότητας, μέσω της στοχευμένης ενδυνάμωσης και στην πρόληψη υποτροπών.
                </p>
              </div>
            </div>

            {/* Right Box: Foundations */}
            <div className="bg-[#f8fafc] border border-slate-100 rounded-3xl p-8 text-left flex flex-col justify-between hover:shadow-lg transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#004aad] flex items-center justify-center mb-6">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Βάση Σχεδιασμού</h3>
                <p className="text-base text-slate-600 font-light leading-relaxed">
                  Σχεδιάζεται πάντα με βάση: την κλινική εικόνα του κάθε ατόμου ξεχωριστά, τις δυνατότητες και τους περιορισμούς του, τις ανάγκες της καθημερινότητάς του και τους προσωπικούς του στόχους.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Indications Grid */}
      <section id="indications" className="py-20 bg-[#f8fafc] border-t border-b border-slate-100 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#004aad] mb-6">
              Ενδείξεις Θεραπευτικής Άσκησης
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              Ενδείκνυται για:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-left flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#004aad] flex items-center justify-center flex-shrink-0">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <p className="text-slate-700 text-sm font-medium leading-relaxed">
                  Μυοσκελετικές παθήσεις όπως οσφυαλγία, αυχενικό σύνδρομο, τενοντοπάθειες κλπ
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-left flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#004aad] flex items-center justify-center flex-shrink-0">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-slate-700 text-sm font-medium leading-relaxed">
                  Μετεγχειρητική αποκατάσταση
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-left flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#004aad] flex items-center justify-center flex-shrink-0">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <p className="text-slate-700 text-sm font-medium leading-relaxed">
                  Αποκατάσταση μετά από τραυματισμούς
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-left flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#004aad] flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-slate-700 text-sm font-medium leading-relaxed">
                  Οστεοαρθρίτιδα, ρευματοειδής αρθρίτιδα και εκφυλιστικές παθήσεις
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-left flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#004aad] flex items-center justify-center flex-shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <p className="text-slate-700 text-sm font-medium leading-relaxed">
                  Αυτοάνοσα νοσήματα που επηρεάζουν το μυοσκελετικό
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-left flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#004aad] flex items-center justify-center flex-shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-slate-700 text-sm font-medium leading-relaxed">
                  Ενίσχυση σωματικής ικανότητας σε χρόνιο πόνο ή καθιστικό τρόπο ζωής
                </p>
              </div>
            </div>

            {/* Card 7 */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-left flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#004aad] flex items-center justify-center flex-shrink-0">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-slate-700 text-sm font-medium leading-relaxed">
                  Πρόληψη πτώσεων σε ηλικιωμένους
                </p>
              </div>
            </div>

            {/* Card 8 */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-left flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#004aad] flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-slate-700 text-sm font-medium leading-relaxed">
                  Αθλητική αποκατάσταση και επανένταξη στη δραστηριότητα
                </p>
              </div>
            </div>

            {/* Card 9 */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-left flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#004aad] flex items-center justify-center flex-shrink-0">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <p className="text-slate-700 text-sm font-medium leading-relaxed">
                  Σακχαρώδης διαβήτης
                </p>
              </div>
            </div>

            {/* Card 10 */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-left flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#004aad] flex items-center justify-center flex-shrink-0">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <p className="text-slate-700 text-sm font-medium leading-relaxed">
                  Οστεοπόρωση
                </p>
              </div>
            </div>

            {/* Card 11 */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-left flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#004aad] flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-slate-700 text-sm font-medium leading-relaxed">
                  Παχυσαρκία
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Related Services Cross-Links */}
      <section id="related" className="py-20 bg-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Άλλες Υπηρεσίες Αποκατάστασης
            </h2>
            <p className="text-slate-500 font-light">
              Εξερευνήστε τις συμπληρωματικές θεραπείες που προσφέρουμε στο Ερμείον.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* McKenzie card */}
            <div 
              onClick={() => onNavigate('#mckenzie')}
              className="bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between text-left group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 group-hover:bg-blue-100 text-[#004aad] transition-colors flex items-center justify-center mb-4">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Μέθοδος McKenzie</h3>
                <p className="text-sm text-slate-500 font-light mb-4">
                  Επιστημονικά τεκμηριωμένη φυσικοθεραπευτική προσέγγιση αξιολόγησης και αυτοδιαχείρισης.
                </p>
              </div>
              <div className="text-sm font-semibold text-[#004aad] flex items-center gap-1 group-hover:gap-2 transition-all">
                Περισσότερα <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Tecar card */}
            <div 
              onClick={() => onNavigate('#tecar')}
              className="bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between text-left group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 group-hover:bg-blue-100 text-[#004aad] transition-colors flex items-center justify-center mb-4">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">TECAR Therapy</h3>
                <p className="text-sm text-slate-500 font-light mb-4">
                  Στοχευμένη θεραπεία με ραδιοσυχνότητες για ταχεία ανακούφιση και κυτταρική ανάπλαση.
                </p>
              </div>
              <div className="text-sm font-semibold text-[#004aad] flex items-center gap-1 group-hover:gap-2 transition-all">
                Περισσότερα <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Spine Pain Card */}
            <div 
              onClick={() => onNavigate('#spine-pain')}
              className="bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between text-left group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 group-hover:bg-blue-100 text-[#004aad] transition-colors flex items-center justify-center mb-4">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Θεραπεία & Πρόληψη Σπονδυλικού Πόνου</h3>
                <p className="text-sm text-slate-500 font-light mb-4">
                  Εξειδικευμένοι χειρισμοί και καθοδήγηση για την αντιμετώπιση του πόνου στη μέση και τον αυχένα.
                </p>
              </div>
              <div className="text-sm font-semibold text-[#004aad] flex items-center gap-1 group-hover:gap-2 transition-all">
                Περισσότερα <ArrowRight className="w-4 h-4" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. End of Page CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
            Ξεκινήστε το Θεραπευτικό σας Πρόγραμμα
          </h2>
          <p className="text-slate-600 font-light mb-8 max-w-lg mx-auto">
            Επαναφέρετε τη λειτουργικότητα του σώματός σας με επιστημονική καθοδήγηση.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://cal.eu/ermeion/physiotherapy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#004aad] hover:bg-[#003884] text-white text-base font-semibold shadow-lg shadow-blue-500/10 hover:shadow-xl transition-all duration-300"
            >
              Κλείστε Ραντεβού Online
            </a>
            <a
              href="tel:+30210000000"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-base font-semibold transition-all duration-300"
            >
              Επικοινωνήστε Τηλεφωνικώς
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
