import { useState, useEffect } from 'react';
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
  const [activeSection, setActiveSection] = useState('philosophy');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['philosophy', 'indications', 'related'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navbarHeight = 150; // accounting for main navbar + sticky subnav
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

          {/* Right Column - Custom Movement Path / ROM Visualizer */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 bg-slate-50 border border-slate-100 rounded-3xl p-6 shadow-xl shadow-slate-100">
              <div className="w-full h-64 md:h-80 bg-white rounded-2xl border border-slate-100 flex items-center justify-center p-4 relative overflow-hidden">
                
                {/* SVG Motion Path/ROM Grid */}
                <svg viewBox="0 0 200 200" className="w-full h-full text-slate-300 max-h-72">
                  {/* Grid overlay */}
                  <g className="stroke-slate-100 stroke-[0.5]" strokeDasharray="3 3">
                    <line x1="100" y1="0" x2="100" y2="200" />
                    <line x1="0" y1="100" x2="200" y2="100" />
                  </g>
                  
                  {/* Range of motion dynamic arc */}
                  <path d="M40,100 A60,60 0 0,1 160,100" fill="none" stroke="#e2e8f0" strokeWidth="6" strokeLinecap="round" />
                  <path d="M40,100 A60,60 0 0,1 130,50" fill="none" stroke="#004aad" strokeWidth="6" strokeLinecap="round" strokeDasharray="500" strokeDashoffset="100" />
                  
                  {/* Angle indicator lines */}
                  <line x1="100" y1="100" x2="130" y2="50" stroke="#0082c8" strokeWidth="1.5" strokeDasharray="3 3" />
                  <line x1="100" y1="100" x2="40" y2="100" stroke="#0082c8" strokeWidth="1.5" />
                  
                  {/* Joint center node */}
                  <circle cx="100" cy="100" r="8" fill="#1e293b" />
                  <circle cx="100" cy="100" r="4" fill="#004aad" />
                  
                  {/* Active target handle (pulled up by user action) */}
                  <g transform="translate(130, 50)" className="cursor-pointer">
                    <circle cx="0" cy="0" r="10" fill="#004aad" />
                    <circle cx="0" cy="0" r="4" fill="white" />
                  </g>
                  
                  {/* Range degree labels */}
                  <text x="145" y="45" className="fill-[#004aad] text-[10px] font-bold">120° ROM</text>
                  <text x="35" y="120" className="fill-slate-400 text-[8px] font-semibold">0° (EXTENSION)</text>
                </svg>

                {/* Floating clinical tag */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm border border-slate-100 rounded-xl p-3 shadow-md flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-50 text-[#004aad]">
                    <Target className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-semibold text-slate-800">Προοδευτική Επιβάρυνση</p>
                    <p className="text-[10px] text-slate-500">Επιστημονικός Σχεδιασμός ROM</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-50 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-slate-100 rounded-full -z-10" />
          </div>
        </div>
      </section>

      {/* 2. Sticky Subnav Bar */}
      <div className="sticky top-[72px] md:top-[88px] z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 py-3.5 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-center gap-1.5 md:gap-4 overflow-x-auto whitespace-nowrap">
          <button
            onClick={() => scrollToSection('philosophy')}
            className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold tracking-wide uppercase transition-all duration-300 ${
              activeSection === 'philosophy' 
                ? 'bg-blue-50 text-[#004aad] border border-blue-200' 
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Στόχοι & Σχεδιασμός
          </button>
          <button
            onClick={() => scrollToSection('indications')}
            className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold tracking-wide uppercase transition-all duration-300 ${
              activeSection === 'indications' 
                ? 'bg-blue-50 text-[#004aad] border border-blue-200' 
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Ενδείξεις
          </button>
          <button
            onClick={() => scrollToSection('related')}
            className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold tracking-wide uppercase transition-all duration-300 ${
              activeSection === 'related' 
                ? 'bg-blue-50 text-[#004aad] border border-blue-200' 
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Άλλες Υπηρεσίες
          </button>
        </div>
      </div>

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
