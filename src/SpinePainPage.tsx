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
  CalendarCheck
} from 'lucide-react';

interface SpinePainPageProps {
  onNavigate: (hash: string) => void;
}

export default function SpinePainPage({ onNavigate }: SpinePainPageProps) {
  const [activeSection, setActiveSection] = useState('indications');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['indications', 'practices', 'related'];
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
              <Activity className="w-3.5 h-3.5" />
              Υπηρεσίες / Θεραπεία & Πρόληψη Σπονδυλικού Πόνου
            </div>
            
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6">
              Θεραπεία & Πρόληψη Σπονδυλικού Πόνου
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed mb-8">
              Στο ΕΡΜΕΙΟΝ, αντιμετωπίζουμε αντιμετωπίζουμε τον σπονδυλικό πόνο με τρόπο σύγχρονο, εξατομικευμένο και βασισμένο σε επιστημονικά τεκμηριωμένες πρακτικές.
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
                onClick={() => scrollToSection('indications')}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-base font-semibold transition-all duration-300"
              >
                Μάθετε Περισσότερα
              </button>
            </div>
          </div>

          {/* Right Column - Styled Spine Graphic and Postural Lines */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 bg-slate-50 border border-slate-100 rounded-3xl p-6 shadow-xl shadow-slate-100">
              <div className="w-full h-64 md:h-80 bg-white rounded-2xl border border-slate-100 flex items-center justify-center p-4 relative overflow-hidden">
                
                {/* SVG Anatomy Postural Spine Alignment */}
                <svg viewBox="0 0 200 200" className="w-full h-full text-slate-300 max-h-72">
                  <g className="stroke-slate-100 stroke-[0.5]" strokeDasharray="4 4">
                    <line x1="100" y1="0" x2="100" y2="200" />
                    <line x1="0" y1="100" x2="200" y2="100" />
                  </g>
                  
                  {/* Dynamic Posture Spine Column */}
                  <g fill="none" strokeWidth="2.5">
                    {/* Spine Curves */}
                    <path d="M100,20 Q105,45 100,70 T100,120 Q92,150 100,180" className="stroke-slate-200" />
                    
                    {/* Vertebral Alignment nodes with highlight on stress points */}
                    <circle cx="100" cy="30" r="4" fill="white" className="stroke-[#0082c8]" />
                    <circle cx="102.5" cy="50" r="4" fill="white" className="stroke-[#0082c8]" />
                    <circle cx="101" cy="70" r="4" fill="white" className="stroke-[#0082c8]" />
                    <circle cx="100" cy="90" r="4" fill="white" className="stroke-[#0082c8]" />
                    {/* Herniated / Stress Areas (Lumbar/Thoracic) highlighted in orange */}
                    <circle cx="98" cy="115" r="5" fill="#f97316" className="stroke-[#004aad] stroke-[1]" />
                    <circle cx="96" cy="135" r="5" fill="#f97316" className="stroke-[#004aad] stroke-[1]" />
                    <circle cx="95.5" cy="155" r="4.5" fill="white" className="stroke-[#004aad]" />
                    <circle cx="100" cy="175" r="4.5" fill="white" className="stroke-[#004aad]" />
                  </g>
                  
                  {/* Force Distribution arrows representing decompression */}
                  <g className="stroke-[#004aad] stroke-[1.5] fill-none">
                    <path d="M75,115 L75,135" markerEnd="url(#decompression-down)" />
                    <path d="M75,135 L75,115" markerEnd="url(#decompression-up)" />
                    <text x="65" y="105" className="fill-[#004aad] text-[8px] font-bold font-mono">DECOMPRESSION</text>
                  </g>
                  
                  <defs>
                    <marker id="decompression-down" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
                      <path d="M 0 0 L 10 5 L 0 10 z" fill="#004aad" />
                    </marker>
                    <marker id="decompression-up" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
                      <path d="M 0 0 L 10 5 L 0 10 z" fill="#004aad" />
                    </marker>
                  </defs>
                </svg>

                {/* Floating clinical tag */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm border border-slate-100 rounded-xl p-3 shadow-md flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-50 text-[#004aad]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-semibold text-slate-800">Σπονδυλική Αποσυμπίεση</p>
                    <p className="text-[10px] text-slate-500">Πρόληψη & Διαχείριση Φορτίων</p>
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
            onClick={() => scrollToSection('practices')}
            className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold tracking-wide uppercase transition-all duration-300 ${
              activeSection === 'practices' 
                ? 'bg-blue-50 text-[#004aad] border border-blue-200' 
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Επιστημονικές Πρακτικές
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

      {/* 3. Indications Section (Who it is for - Card Grid) */}
      <section id="indications" className="py-20 bg-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#004aad] mb-6">
              Ενδείξεις Σπονδυλικού Πόνου
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              Η φυσικοθεραπεία ενδείκνυται σε άτομα με:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-[#f8fafc] border border-slate-100 rounded-3xl p-8 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-left flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 group-hover:bg-blue-100 text-[#004aad] transition-colors flex items-center justify-center mb-6">
                  <Activity className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-3">Οσφυαλγία</h4>
                <p className="text-sm text-slate-600 font-light leading-relaxed">
                  Οσφυαλγία (πόνος στη μέση) — με ή χωρίς ισχιαλγία και νευρολογικό έλλειμμα
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#f8fafc] border border-slate-100 rounded-3xl p-8 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-left flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 group-hover:bg-blue-100 text-[#004aad] transition-colors flex items-center justify-center mb-6">
                  <Compass className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-3">Αθλητικός Πόνος</h4>
                <p className="text-sm text-slate-600 font-light leading-relaxed">
                  Πόνο στη μέση ή τον αυχένα κατά την διάρκεια ασκήσεων ή παλιών τραυματισμών στο γυμναστήριο.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#f8fafc] border border-slate-100 rounded-3xl p-8 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-left flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 group-hover:bg-blue-100 text-[#004aad] transition-colors flex items-center justify-center mb-6">
                  <Activity className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-3">Αυχεναλγία</h4>
                <p className="text-sm text-slate-600 font-light leading-relaxed">
                  Αυχεναλγία (πόνος στον αυχένα) — με ή χωρίς πόνο στον ώμο/χέρι και νευρολογικό έλλειμμα
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-[#f8fafc] border border-slate-100 rounded-3xl p-8 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-left flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 group-hover:bg-blue-100 text-[#004aad] transition-colors flex items-center justify-center mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-3">Θωρακικός Πόνος</h4>
                <p className="text-sm text-slate-600 font-light leading-relaxed">
                  Θωρακικό πόνο
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-[#f8fafc] border border-slate-100 rounded-3xl p-8 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-left flex flex-col justify-between group col-span-1 md:col-span-2 lg:col-span-1">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 group-hover:bg-blue-100 text-[#004aad] transition-colors flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-3">Κήλες & Εκφυλιστικές Αλλοιώσεις</h4>
                <p className="text-sm text-slate-600 font-light leading-relaxed">
                  Επώδυνες κήλες μεσοσπονδυλίου δίσκου ή άλλες εκφυλιστικές αλλοιώσεις
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Practices Applied Section */}
      <section id="practices" className="py-20 bg-[#f8fafc] border-t border-b border-slate-100 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#004aad] mb-6">
              Επιστημονικές Πρακτικές
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              Εφαρμόζουμε επιστημονικά τεκμηριωμένες πρακτικές όπως:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left practices list */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              
              {/* Practice 1 */}
              <div className="bg-white border border-slate-100 rounded-2xl p-6 text-left flex items-start gap-4 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#004aad] flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-800 mb-1">Μηχανική Διάγνωση & Θεραπεία</h4>
                  <p className="text-sm text-slate-600 font-light leading-relaxed">
                    Mέθοδος McKenzie - Μηχανική διάγνωση και θεραπεία
                  </p>
                </div>
              </div>

              {/* Practice 2 */}
              <div className="bg-white border border-slate-100 rounded-2xl p-6 text-left flex items-start gap-4 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#004aad] flex items-center justify-center flex-shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-800 mb-1">Προοδευτική Φόρτιση</h4>
                  <p className="text-sm text-slate-600 font-light leading-relaxed">
                    Σταδιακή έκθεση στα φορτία και τις δραστηριότητες
                  </p>
                </div>
              </div>

              {/* Practice 3 */}
              <div className="bg-white border border-slate-100 rounded-2xl p-6 text-left flex items-start gap-4 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#004aad] flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-800 mb-1">Κινητικός Έλεγχος</h4>
                  <p className="text-sm text-slate-600 font-light leading-relaxed">
                    Νευρομυϊκή επανεκπαίδευση
                  </p>
                </div>
              </div>

              {/* Practice 4 */}
              <div className="bg-white border border-slate-100 rounded-2xl p-6 text-left flex items-start gap-4 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#004aad] flex items-center justify-center flex-shrink-0">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-800 mb-1">Πρόληψη & Αυτονομία</h4>
                  <p className="text-sm text-slate-600 font-light leading-relaxed">
                    Στρατηγικές αυτοδιαχείρισης και πρόληψης υποτροπών
                  </p>
                </div>
              </div>

            </div>

            {/* Right clinical technology quote card */}
            <div className="lg:col-span-5 flex">
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-md flex flex-col justify-between text-left relative overflow-hidden w-full">
                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50/50 rounded-bl-full -z-0" />
                
                <div className="relative z-10 flex-1 flex flex-col justify-center">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center mb-6">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 mb-4">Ηλεκτροθεραπεία & Ραδιοσυχνότητες</h4>
                  <p className="text-slate-600 font-light text-base leading-relaxed">
                    Και όταν ενδείκνυται, συνήθως στην οξεία φάση, χρησιμοποιούμε θεραπευτικά φυσικά μέσα ηλεκτροθεραπείας όπως TECAR - στοχευμένες ραδιοσυχνότητες.
                  </p>
                </div>
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

            {/* Exercise Card */}
            <div 
              onClick={() => onNavigate('#exercise')}
              className="bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between text-left group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 group-hover:bg-blue-100 text-[#004aad] transition-colors flex items-center justify-center mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Θεραπευτική Άσκηση</h3>
                <p className="text-sm text-slate-500 font-light mb-4">
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

      {/* 6. End of Page CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
            Απαλλαγείτε από τον Σπονδυλικό Πόνο
          </h2>
          <p className="text-slate-600 font-light mb-8 max-w-lg mx-auto">
            Σχεδιάστε το δικό σας εξατομικευμένο πλάνο αποκατάστασης σήμερα.
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
