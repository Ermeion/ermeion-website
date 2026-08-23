import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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

interface TecarPageProps {
  onNavigate: (hash: string) => void;
}

export default function TecarPage({ onNavigate }: TecarPageProps) {
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
              <Zap className="w-3.5 h-3.5" />
              Υπηρεσίες / TECAR Therapy
            </div>
            
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6">
              TECAR Therapy
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed mb-8">
              Στοχευμένες Ραδιοσυχνότητες.
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

          {/* Right Column - Thermal Transfer Visualizer */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 bg-slate-50 border border-slate-100 rounded-3xl p-6 shadow-xl shadow-slate-100">
              <div className="w-full h-64 md:h-80 bg-white rounded-2xl border border-slate-100 flex items-center justify-center p-4 relative overflow-hidden">
                
                {/* Custom Thermal Energy SVG Graphic */}
                <svg viewBox="0 0 200 200" className="w-full h-full text-slate-300 max-h-72">
                  <defs>
                    <radialGradient id="thermal-glow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#f97316" stopOpacity="0.3" />
                      <stop offset="50%" stopColor="#004aad" stopOpacity="0.1" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  
                  {/* Energy Wave Rings */}
                  <g className="stroke-[#0082c8] stroke-[0.75] fill-none">
                    <circle cx="100" cy="100" r="80" strokeDasharray="3 3" />
                    <circle cx="100" cy="100" r="60" />
                    <circle cx="100" cy="100" r="40" strokeDasharray="2 2" />
                    <circle cx="100" cy="100" r="20" />
                  </g>
                  
                  {/* Deep Thermal Glow Overlay */}
                  <circle cx="100" cy="100" r="70" fill="url(#thermal-glow)" />

                  {/* Active Electrode Node Illustration */}
                  <g transform="translate(100, 100)">
                    {/* Outer handle */}
                    <circle cx="0" cy="0" r="14" fill="#1e293b" />
                    {/* Metal Contact */}
                    <circle cx="0" cy="0" r="10" fill="#cbd5e1" />
                    {/* Core energy emission node */}
                    <circle cx="0" cy="0" r="6" fill="#f97316" className="animate-pulse" />
                  </g>
                  
                  {/* Cellular Network background dots */}
                  <g fill="#004aad" opacity="0.15">
                    <circle cx="50" cy="50" r="2" />
                    <circle cx="150" cy="50" r="2" />
                    <circle cx="40" cy="120" r="2" />
                    <circle cx="160" cy="120" r="2" />
                    <circle cx="80" cy="160" r="2" />
                    <circle cx="120" cy="160" r="2" />
                  </g>
                </svg>

                {/* Floating clinical tag */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm border border-slate-100 rounded-xl p-3 shadow-md flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-50 text-orange-500">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-semibold text-slate-800">Ενεργειακή Κυτταρική Ανάπλαση</p>
                    <p className="text-[10px] text-slate-500">BTL High-Frequency Tech</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-50 rounded-2xl -z-10" />
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
            Η Θεραπεία
          </button>
          <button
            onClick={() => scrollToSection('indications')}
            className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold tracking-wide uppercase transition-all duration-300 ${
              activeSection === 'indications' 
                ? 'bg-blue-50 text-[#004aad] border border-blue-200' 
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Οξείες Φάσεις & Ενδείξεις
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

      {/* 3. Core Philosophy & Mechanism Section */}
      <section id="philosophy" className="py-20 bg-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#004aad] mb-6">
              Η Φιλοσοφία της Θεραπείας
            </h2>
            <div className="h-1 w-20 bg-[#0082c8] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Diagram Column - Radiofrequency heat penetration visualizer */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative p-8 bg-[#f8fafc] border border-slate-100 rounded-3xl overflow-hidden shadow-inner">
                <div className="w-full aspect-square bg-white border border-slate-100 rounded-2xl flex items-center justify-center p-6 relative">
                  
                  {/* Custom tissue layer gradient grid */}
                  <div className="w-full h-full flex flex-col justify-between">
                    <div className="h-10 w-full bg-slate-100/50 rounded flex items-center justify-center text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
                      Δέρμα / Skin Layer
                    </div>
                    <div className="h-20 w-full bg-orange-50 border border-orange-100/30 rounded relative flex items-center justify-center overflow-hidden">
                      {/* Radiating heat ripples */}
                      <span className="absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent animate-pulse" />
                      <span className="text-[10px] text-orange-700 font-semibold uppercase tracking-wider z-10">
                        Εν τω βάθει Υπερθερμία / Deep Heat
                      </span>
                    </div>
                    <div className="h-12 w-full bg-blue-50/50 rounded flex items-center justify-center text-[10px] text-blue-700 font-semibold uppercase tracking-wider">
                      Κυτταρική Ανάπλαση / Cell Recovery
                    </div>
                  </div>
                  
                </div>
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
                  <h4 className="text-lg font-bold text-slate-800 mb-3">Μηχανισμός Δράσης</h4>
                  <p className="text-base text-slate-600 font-light leading-relaxed">
                    To TECAR παράγει ένα υψηλής συχνότητας ηλεκτρομαγνητικό πεδίο που διεισδύει στο ανθρώπινο σώμα και προκαλεί εν τω βάθη υπερθερμία ώστε να ανακουφίσει το μυϊκό πόνο και τα σημεία πυροδότησής του αλλά και να βοηθήσει στην ταχύτερη αναγέννηση και επούλωση των μυών. Οι στοχευμένες ραδιοσυχνότητες χρησιμοποιούνται και για θεραπείες χωρίς θερμότητα για την αντιμετώπιση οιδημάτων σε οξεία φάση.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Focus Areas & Indications (Acute Phases Card Grid) */}
      <section id="indications" className="py-20 bg-[#f8fafc] border-t border-b border-slate-100 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#004aad] mb-6">
              Οξείες Φάσεις & Ενδείξεις
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              Στο ΕΡΜΕΙΟΝ, διαθέτουμε εξοπλισμό τελευταίας τεχνολογίας από την BTL, ο όποιος είναι ο σύμμαχός μας, σε οξείες φάσεις όπως:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-left flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-orange-50 group-hover:bg-orange-100 text-orange-500 transition-colors flex items-center justify-center mb-6">
                  <FileCheck2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-800 mb-2">Μετεγχειρητική Αποκατάσταση</h4>
                <p className="text-sm text-slate-600 font-light leading-relaxed">
                  Μετά από χειρουργεία μηνίσκου, πρόσθιου χιαστού, μερικής δισκεκτομής κλπ
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-left flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-orange-50 group-hover:bg-orange-100 text-orange-500 transition-colors flex items-center justify-center mb-6">
                  <Activity className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-800 mb-2">Οσφυαλγία</h4>
                <p className="text-sm text-slate-600 font-light leading-relaxed">
                  Οξεία οσφυαλγία
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-left flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-orange-50 group-hover:bg-orange-100 text-orange-500 transition-colors flex items-center justify-center mb-6">
                  <Compass className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-800 mb-2">Αυχενικός Πόνος</h4>
                <p className="text-sm text-slate-600 font-light leading-relaxed">
                  Αυχεναλγία
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-left flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-orange-50 group-hover:bg-orange-100 text-orange-500 transition-colors flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-800 mb-2">Μυϊκοί Τραυματισμοί</h4>
                <p className="text-sm text-slate-600 font-light leading-relaxed">
                  Μυϊκές θλάσεις
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
            Ξεκινήστε τη θεραπεία TECAR σήμερα
          </h2>
          <p className="text-slate-600 font-light mb-8 max-w-lg mx-auto">
            Επιταχύνετε την αποκατάσταση των ιστών σας με την τεχνολογία BTL.
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
