import { useState, useRef } from 'react';
import { ArrowRight, Play, Pause, Maximize } from 'lucide-react';

interface McKenziePageProps {
  onNavigate: (hash: string) => void;
}

export default function McKenziePage({ onNavigate }: McKenziePageProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showControls, setShowControls] = useState(true);

  const togglePlay = (e?: React.MouseEvent | React.TouchEvent) => {
    if (e) e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleFullscreen = (e?: React.MouseEvent | React.TouchEvent) => {
    if (e) e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if ((video as any).webkitEnterFullscreen) {
      (video as any).webkitEnterFullscreen();
    } else if (video.requestFullscreen) {
      video.requestFullscreen().catch(() => {});
    } else if ((video as any).webkitRequestFullscreen) {
      (video as any).webkitRequestFullscreen();
    } else if ((video as any).msRequestFullscreen) {
      (video as any).msRequestFullscreen();
    }
  };

  return (
    <div className="bg-white text-slate-800 min-h-screen font-sans selection:bg-[#e0f2fe] selection:text-[#004aad]">
      
      {/* ========================================================================= */}
      {/* 1. MOBILE ONLY HERO (Full-width video on top, text & CTA underneath)       */}
      {/* ========================================================================= */}
      <div className="block lg:hidden">
        {/* Full-width Video Banner */}
        <div
          className="relative w-full aspect-[16/9] bg-slate-950 select-none overflow-hidden"
          onClick={() => setShowControls((prev) => !prev)}
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="https://dcmekuaqoafogwlgnugs.supabase.co/storage/v1/object/public/Services/McKenzie.webp"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onClick={togglePlay}
            className="w-full h-full object-cover cursor-pointer"
          >
            <source
              src="https://dcmekuaqoafogwlgnugs.supabase.co/storage/v1/object/public/McKenzie-video/McKenzie-therapy.mp4"
              type="video/mp4"
            />
            Το πρόγραμμα περιήγησής σας δεν υποστηρίζει την αναπαραγωγή βίντεο.
          </video>

          {/* Minimal Controls */}
          <div
            className={`absolute inset-0 pointer-events-none transition-opacity duration-300 flex flex-col justify-between p-3.5 ${
              showControls ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleFullscreen}
                onTouchEnd={handleFullscreen}
                className="pointer-events-auto flex items-center justify-center w-10 h-10 rounded-full bg-black/60 active:bg-black text-white backdrop-blur-md border border-white/20 shadow-lg"
                title="Πλήρης οθόνη"
                aria-label="Πλήρης οθόνη"
              >
                <Maximize className="w-5 h-5 text-white" />
              </button>
            </div>
            <div className="flex justify-start">
              <button
                type="button"
                onClick={togglePlay}
                onTouchEnd={togglePlay}
                className="pointer-events-auto inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/95 text-[#004aad] font-semibold text-xs shadow-xl backdrop-blur-md"
                aria-label={isPlaying ? 'Παύση' : 'Αναπαραγωγή'}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-4 h-4 fill-current" />
                    <span>Παύση</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current" />
                    <span>Αναπαραγωγή</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Text and CTA Underneath on Mobile */}
        <div className="px-5 pt-8 pb-14 text-center border-b border-slate-100 bg-white">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#004aad] text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#004aad] animate-pulse"></span>
            Υπηρεσίες / Μέθοδος McKenzie
          </div>
          
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4">
            Μέθοδος McKenzie
          </h1>
          
          <p className="text-base text-slate-700 font-normal leading-relaxed mb-6">
            Η Μέθοδος McKenzie ή γνωστή και ως Μηχανική Διάγνωση & Θεραπεία (Mechanical Diagnosis and Therapy – MDT) είναι μια επιστημονικά τεκμηριωμένη φυσικοθεραπευτική προσέγγιση αξιολόγησης και διαχείρισης του μυοσκελετικού πόνου.
          </p>

          <a
            href="tel:+306988404234"
            className="w-full inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-[#004aad] hover:bg-[#003884] text-white text-base font-bold shadow-md active:scale-95 text-center"
          >
            Κλείστε Ραντεβού
          </a>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. DESKTOP ONLY HERO (Original Split Hero: Text Left, Video Right)         */}
      {/* ========================================================================= */}
      <section className="hidden lg:block relative overflow-hidden bg-gradient-to-b from-slate-50/70 via-white to-white pt-24 pb-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Headline, Description & CTA */}
            <div className="col-span-6 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#004aad] text-xs font-bold uppercase tracking-wider mb-5">
                <span className="w-2 h-2 rounded-full bg-[#004aad] animate-pulse"></span>
                Υπηρεσίες / Μέθοδος McKenzie
              </div>
              
              <h1 className="text-4xl xl:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6">
                Μέθοδος McKenzie
              </h1>
              
              <p className="text-lg xl:text-xl text-slate-700 font-normal leading-relaxed mb-8 max-w-xl">
                Η Μέθοδος McKenzie ή γνωστή και ως Μηχανική Διάγνωση & Θεραπεία (Mechanical Diagnosis and Therapy – MDT) είναι μια επιστημονικά τεκμηριωμένη φυσικοθεραπευτική προσέγγιση αξιολόγησης και διαχείρισης του μυοσκελετικού πόνου.
              </p>

              <a
                href="tel:+306988404234"
                className="inline-flex items-center justify-center px-9 py-4 rounded-xl bg-[#004aad] hover:bg-[#003884] text-white text-lg font-bold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 text-center"
              >
                Κλείστε Ραντεβού
              </a>
            </div>

            {/* Right Column: Video Container */}
            <div className="col-span-6 w-full">
              <div
                className="relative group overflow-hidden rounded-3xl shadow-xl border border-gray-200/80 bg-slate-950 aspect-[16/9] w-full select-none"
                onClick={() => setShowControls((prev) => !prev)}
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="https://dcmekuaqoafogwlgnugs.supabase.co/storage/v1/object/public/Services/McKenzie.webp"
                  className="w-full h-full object-cover"
                >
                  <source
                    src="https://dcmekuaqoafogwlgnugs.supabase.co/storage/v1/object/public/McKenzie-video/McKenzie-therapy.mp4"
                    type="video/mp4"
                  />
                  Το πρόγραμμα περιήγησής σας δεν υποστηρίζει την αναπαραγωγή βίντεο.
                </video>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Core Philosophy & Mechanical Concept Section */}
      <section id="philosophy" className="py-20 bg-white scroll-mt-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#004aad] mb-4">
              Η Φιλοσοφία της Μεθόδου
            </h2>
            <div className="h-1 w-20 bg-[#0082c8] mx-auto rounded-full mb-6" />
            <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
              Μια προσέγγιση σχεδιασμένη να αναγνωρίζει την πραγματική αιτία του πόνου και να ενδυναμώνει τον ασθενή.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Card 1 */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#004aad] flex items-center justify-center font-bold text-xl mb-6">
                  01
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
                  Στοχευμένη Διάγνωση & Θεραπεία
                </h3>
                <p className="text-slate-700 text-base md:text-lg leading-relaxed">
                  Η μέθοδος έχει σχεδιαστεί για να αναγνωρίζει τη μηχανική αιτία του πόνου, να οδηγεί σε στοχευμένη θεραπεία και να παρέχει εργαλεία αυτοδιαχείρισης, ενδυναμώνοντας το άτομο να ανακτήσει τον έλεγχο της λειτουργικότητάς του.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#004aad] flex items-center justify-center font-bold text-xl mb-6">
                  02
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
                  Αυτονομία & Ελαχιστοποίηση Υποτροπών
                </h3>
                <p className="text-slate-700 text-base md:text-lg leading-relaxed">
                  Ο κύριος στόχος είναι να ελαχιστοποιήσει την ανάγκη για παθητική θεραπεία, να δώσει στον ασθενή αυτονομία και αυτοπεποίθηση στην αντιμετώπιση του προβλήματος και να μειώσει δραστικά τον κίνδυνο μελλοντικών υποτροπών.
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
            <p className="text-slate-700 max-w-xl mx-auto text-lg font-normal">
              Επιστημονική προσέγγιση που βασίζεται στα διεθνή πρότυπα του Ινστιτούτου McKenzie.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left side: Practitioner Quote & Reflection (Enlarged High-Readability Text) */}
            <div className="lg:col-span-7 text-left">
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900">Ιωάννης Μιχαηλίδης</h3>
                <p className="text-sm md:text-base text-[#004aad] font-bold uppercase tracking-wider mt-1.5 inline-block">Cred. MDT Therapist</p>
              </div>
              
              <div className="space-y-6 text-slate-700 font-normal text-lg md:text-xl leading-relaxed">
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

            {/* Right side: Benefits & Commitments (Enlarged Text & Clear Hierarchy) */}
            <div className="lg:col-span-5 text-left space-y-8">
              
              {/* Credentials Statement */}
              <div>
                <p className="text-slate-900 text-lg md:text-xl font-semibold leading-relaxed">
                  Είμαι πιστοποιημένος θεραπευτής McKenzie (Cred. MDT), και σας διασφαλίζω ότι θα λάβετε φροντίδα με διεθνώς ελεγμένα πρότυπα ποιότητας.
                </p>
              </div>

              <div className="h-px bg-slate-200 w-full" />

              {/* Guarantees/Benefits List */}
              <div className="space-y-8">
                <div>
                  <h4 className="text-base md:text-lg font-bold text-[#004aad] uppercase tracking-wider mb-2">Τεκμηριωμένη Πρακτική</h4>
                  <p className="text-slate-700 text-base md:text-lg font-normal leading-relaxed">
                    Η αξιολόγησή σας γίνεται με αυστηρά πρωτόκολλα τεκμηριωμένης πρακτικής.
                  </p>
                </div>

                <div>
                  <h4 className="text-base md:text-lg font-bold text-[#004aad] uppercase tracking-wider mb-2">Εξατομικευμένη Θεραπεία</h4>
                  <p className="text-slate-700 text-base md:text-lg font-normal leading-relaxed">
                    Η θεραπεία είναι στοχευμένη και εξατομικευμένη, με σαφή αποτελέσματα ήδη από τις πρώτες συνεδρίες.
                  </p>
                </div>

                <div>
                  <h4 className="text-base md:text-lg font-bold text-[#004aad] uppercase tracking-wider mb-2">Πρόληψη & Αυτοδιαχείριση</h4>
                  <p className="text-slate-700 text-base md:text-lg font-normal leading-relaxed">
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
            <p className="text-slate-600 font-normal text-lg">
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
            Ξεκινήστε με μια αξιολόγηση McKenzie σήμερα
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
