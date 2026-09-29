import { ArrowRight } from 'lucide-react';

interface McKenziePageProps {
  onNavigate: (hash: string) => void;
}

export default function McKenziePage({ onNavigate }: McKenziePageProps) {
  return (
    <div className="bg-white text-slate-800 min-h-screen font-sans selection:bg-[#e0f2fe] selection:text-[#004aad]">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-white pt-24 pb-16 md:pt-32 md:pb-24 border-b border-slate-100">
        <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center flex flex-col items-center">
          <div className="flex flex-col items-center text-center">
            <div className="text-xs font-semibold text-[#004aad] uppercase tracking-wider mb-6">
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
                href="tel:+306988404234"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#004aad] hover:bg-[#003884] text-white text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Κλείστε Ραντεβού
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Philosophy & Mechanical Concept Section */}
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
              <div className="relative overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
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

      {/* 3. Trust & Credentials Section */}
      <section id="credentials" className="py-20 bg-[#fafbfc] border-t border-b border-slate-100 scroll-mt-28">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#004aad] mb-4">
              Αξιολόγηση & Κλινική Εμπειρία
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto text-base font-light">
              Επιστημονική προσέγγιση που βασίζεται στα διεθνή πρότυπα του Ινστιτούτου McKenzie.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left side: Practitioner Quote & Reflection (Unboxed text design) */}
            <div className="lg:col-span-7 text-left">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-800">Ιωάννης Μιχαηλίδης</h3>
                <p className="text-xs text-[#004aad] font-semibold uppercase tracking-wider mt-1">Cred. MDT Therapist</p>
              </div>
              
              <div className="space-y-5 text-slate-600 font-light text-base leading-relaxed">
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

            {/* Right side: Benefits & Commitments (Unboxed clean list) */}
            <div className="lg:col-span-5 text-left space-y-8">
              
              {/* Credentials Statement */}
              <div>
                <p className="text-slate-800 text-base font-medium leading-relaxed">
                  Είμαι πιστοποιημένος θεραπευτής McKenzie (Cred. MDT), και σας διασφαλίζω ότι θα λάβετε φροντίδα με διεθνώς ελεγμένα πρότυπα ποιότητας.
                </p>
              </div>

              <div className="h-px bg-slate-200 w-full" />

              {/* Guarantees/Benefits List */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-[#004aad] uppercase tracking-wider mb-1">Τεκμηριωμένη Πρακτική</h4>
                  <p className="text-slate-600 text-sm font-light leading-relaxed">
                    Η αξιολόγησή σας γίνεται με αυστηρά πρωτόκολλα τεκμηριωμένης πρακτικής.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-[#004aad] uppercase tracking-wider mb-1">Εξατομικευμένη Θεραπεία</h4>
                  <p className="text-slate-600 text-sm font-light leading-relaxed">
                    Η θεραπεία είναι στοχευμένη και εξατομικευμένη, με σαφή αποτελέσματα ήδη από τις πρώτες συνεδρίες.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-[#004aad] uppercase tracking-wider mb-1">Πρόληψη & Αυτοδιαχείριση</h4>
                  <p className="text-slate-600 text-sm font-light leading-relaxed">
                    Σας προσφέρω στρατηγικές πρόληψης και αυτοδιαχείρισης, ακόμα και σε χρόνιες ή πολύπλοκες περιπτώσεις.
                  </p>
                </div>
              </div>

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
            
            {/* Tecar */}
            <div 
              onClick={() => onNavigate('#tecar')}
              className="p-6 rounded-2xl hover:bg-slate-50 transition-all duration-200 cursor-pointer flex flex-col justify-between group border border-transparent hover:border-slate-100"
            >
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-[#004aad] transition-colors">TECAR Therapy</h3>
                <p className="text-sm text-slate-600 font-light mb-4 leading-relaxed">
                  Στοχευμένη θεραπεία με ραδιοσυχνότητες για ταχεία ανακούφιση και κυτταρική ανάπλαση.
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
            Ξεκινήστε με μια αξιολόγηση McKenzie σήμερα
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+306988404234"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#004aad] hover:bg-[#003884] text-white text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300"
            >
              Κλείστε Ραντεβού
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
