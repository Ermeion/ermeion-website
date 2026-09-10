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

interface McKenziePageProps {
  onNavigate: (hash: string) => void;
}

export default function McKenziePage({ onNavigate }: McKenziePageProps) {
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

        <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center flex flex-col items-center">
          {/* Centered Column */}
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-[#004aad] uppercase tracking-wider mb-6">
              <Activity className="w-3.5 h-3.5" />
              Υπηρεσίες / Μέθοδος McKenzie
            </div>
            
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6">
              Μέθοδος McKenzie
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed mb-8 max-w-3xl">
              Η Μέθοδος McKenzie ή γνωστή και ως Μηχανική Διάγνωση & Θεραπεία (Mechanical Diagnosis and Therapy – MDT) είναι μια επιστημονικά τεκμηριωμένη φυσικοθεραπευτική προσέγγιση αξιολόγησης και διαχείρισης του μυοσκελετικού πόνου.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
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
        </div>
      </section>


      {/* 3. Core Philosophy & Mechanical Concept Section */}
      <section id="philosophy" className="py-20 bg-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#004aad] mb-6">
              Η Φιλοσοφία της Μεθόδου
            </h2>
            <div className="h-1 w-20 bg-[#0082c8] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Diagram Column - McKenzie Philosophy Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-3xl border border-slate-100 shadow-md">
                <img 
                  src="https://dcmekuaqoafogwlgnugs.supabase.co/storage/v1/object/public/Services/McKenzie.webp" 
                  alt="Η Φιλοσοφία της Μεθόδου McKenzie" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Narrative text block */}
            <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2 text-left">
              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-slate-700 font-light leading-relaxed border-l-4 border-[#0082c8] pl-6 py-1">
                  Η μέθοδος έχει σχεδιαστεί για να αναγνωρίζει την αιτία του πόνου, να οδηγεί σε στοχευμένη θεραπεία και να παρέχει εργαλεία αυτοδιαχείρισης, ενδυναμώνοντας το άτομο να ανακτήσει τον έλεγχο της λειτουργικότητας και της ποιότητας ζωής του.
                </p>
                <div className="h-px bg-slate-100 w-full my-6" />
                <p className="text-lg text-slate-600 font-light leading-relaxed">
                  Ο κύριος στόχος της Μεθόδου McKenzie είναι να ελαχιστοποιήσει την ανάγκη για παθητική θεραπεία, να δώσει στον ασθενή αυτονομία και αυτοπεποίθηση στην αντιμετώπιση του προβλήματος και να μειώσει τον κίνδυνο υποτροπών.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Trust & Credentials Section */}
      <section id="credentials" className="py-20 bg-[#f8fafc] border-t border-b border-slate-100 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#004aad] mb-6">
              Αξιολόγηση & Κλινική Εμπειρία
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Επιστημονική προσέγγιση που βασίζεται στα διεθνή πρότυπα του Ινστιτούτου McKenzie.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left side: Practitioner Quote Card */}
            <div className="lg:col-span-7 flex">
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg shadow-slate-100 flex flex-col justify-between w-full relative overflow-hidden">
                {/* Decorative background visual */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/40 rounded-bl-full -z-0" />
                
                <div className="relative z-10 flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#004aad]">
                      <Award className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-800">Ιωάννης Μιχαηλίδης</h4>
                      <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Cred. MDT Therapist</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6 text-slate-600 font-light text-base leading-relaxed text-left">
                    <p>
                      Στο ΕΡΜΕΙΟΝ, εφαρμόζουμε τη Μέθοδο McKenzie γνωστή και ως Μηχανική Διάγνωση και Θεραπεία, η οποια μας βοηθά να κατανοήσουμε καλύτερα την μηχανική των αρθρώσεων. 
                      Βρίσκω ότι το 70-80% των ορθοπεδικών παθήσεων ανήκουν σε αυτή την κατηγορία. Εάν η διάγνωση δεν είναι ένα μηχανικό πρόβλημα άρθρωσης, μπορούμε να κάνουμε με περισσότερη βεβαιότητα μια ξεχωριστή διάγνωση και να εφαρμόσουμε την αντίστοιχη θεραπεία.
                    </p>
                    <p>
                      Η μέθοδος McKenzie μας προσφέρει μια πιο ολοκληρωμένη κατανόηση του μυοσκελετικού συστήματος, που υποστηρίζω ότι οι περισσότεροι κλινικοί δεν διαθέτουν. Αναγνωρίζοντας ότι η μηχανική των αρθρώσεων, παίζει καθοριστικό ρόλο στην υγεία του μυοσκελετικού συστήματος, χωρίς να βασίζεται στο κλασικό παθοανατομικό μοντέλο. 
                      Με άλλα λόγια, πρέπει να διερευνούμε τη φυσιολογία και όχι απλώς να κατηγορούμε την ανατομία, ακόμα και αν οι εξειδικευμένες απεικονιστικές εξετάσεις (MRI, X-RAY κλπ) δείχνουν ότι η ανατομία (δίσκοι, σύνδεσμοι, μηνίσκοι, χόνδρος κλπ) δεν είναι τέλεια.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Benefits Card List */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              
              {/* Credentials text intro header */}
              <div className="bg-[#e0f2fe]/40 border border-blue-100 rounded-3xl p-6 text-left flex items-start gap-4">
                <div className="p-2 bg-white rounded-xl text-[#004aad] shadow-sm flex-shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-slate-800 text-sm font-semibold leading-relaxed">
                    Είμαι πιστοποιημένος θεραπευτής McKenzie (Cred. MDT), και σας διασφαλίζω ότι θα λάβετε φροντίδα με διεθνώς ελεγμένα πρότυπα ποιότητας.
                  </p>
                </div>
              </div>

              {/* Guarantees/Benefits List */}
              <div className="flex-1 flex flex-col gap-4">
                
                {/* Card 1 */}
                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 text-left flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 group-hover:bg-blue-100 text-[#004aad] transition-colors flex-shrink-0 flex items-center justify-center">
                    <FileCheck2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-slate-700 text-sm font-medium leading-relaxed">
                      Η αξιολόγησή σας γίνεται με αυστηρά πρωτόκολλα τεκμηριωμένης πρακτικής.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 text-left flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 group-hover:bg-blue-100 text-[#004aad] transition-colors flex-shrink-0 flex items-center justify-center">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-slate-700 text-sm font-medium leading-relaxed">
                      Η θεραπεία είναι στοχευμένη και εξατομικευμένη, με σαφή αποτελέσματα ήδη από τις πρώτες συνεδρίες.
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 text-left flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 group-hover:bg-blue-100 text-[#004aad] transition-colors flex-shrink-0 flex items-center justify-center">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-slate-700 text-sm font-medium leading-relaxed">
                      Σας προσφέρω στρατηγικές πρόληψης και αυτοδιαχείρισης, ακόμα και σε χρόνιες ή πολύπλοκες περιπτώσεις.
                    </p>
                  </div>
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
                  <Activity className="w-5 h-5" />
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
            Ξεκινήστε με μια αξιολόγηση McKenzie σήμερα
          </h2>
          <p className="text-slate-600 font-light mb-8 max-w-lg mx-auto">
            Βρείτε την αιτία του πόνου σας και αποκτήστε τα κατάλληλα εργαλεία για μόνιμη ανακούφιση.
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
              href="tel:+30210000000" // Placeholder phone, or fallback to homepage contacts
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
