import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Pause, Maximize, Phone } from 'lucide-react';

interface ExercisePageProps {
  onNavigate: (hash: string) => void;
}

export default function ExercisePage({ onNavigate }: ExercisePageProps) {
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showControls, setShowControls] = useState(true);

  const togglePlay = (isDesktop = false, e?: React.MouseEvent | React.TouchEvent) => {
    if (e) e.stopPropagation();
    const vid = isDesktop ? desktopVideoRef.current : mobileVideoRef.current;
    if (!vid) return;
    if (vid.paused) {
      vid.play();
      setIsPlaying(true);
    } else {
      vid.pause();
      setIsPlaying(false);
    }
  };

  const handleFullscreen = (isDesktop = false, e?: React.MouseEvent | React.TouchEvent) => {
    if (e) e.stopPropagation();
    const vid = isDesktop ? desktopVideoRef.current : mobileVideoRef.current;
    if (!vid) return;

    if ((vid as any).webkitEnterFullscreen) {
      (vid as any).webkitEnterFullscreen();
    } else if (vid.requestFullscreen) {
      vid.requestFullscreen().catch(() => {});
    } else if ((vid as any).webkitRequestFullscreen) {
      (vid as any).webkitRequestFullscreen();
    } else if ((vid as any).msRequestFullscreen) {
      (vid as any).msRequestFullscreen();
    }
  };

  useEffect(() => {
    const syncPlayState = () => {
      const vid = desktopVideoRef.current || mobileVideoRef.current;
      if (vid) {
        setIsPlaying(!vid.paused);
      }
    };

    document.addEventListener('fullscreenchange', syncPlayState);
    document.addEventListener('webkitfullscreenchange', syncPlayState);

    const mVid = mobileVideoRef.current;
    const dVid = desktopVideoRef.current;
    if (mVid) mVid.addEventListener('webkitendfullscreen', syncPlayState);
    if (dVid) dVid.addEventListener('webkitendfullscreen', syncPlayState);

    return () => {
      document.removeEventListener('fullscreenchange', syncPlayState);
      document.removeEventListener('webkitfullscreenchange', syncPlayState);
      if (mVid) mVid.removeEventListener('webkitendfullscreen', syncPlayState);
      if (dVid) dVid.removeEventListener('webkitendfullscreen', syncPlayState);
    };
  }, []);

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
            ref={mobileVideoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            className="w-full h-full object-cover"
          >
            <source
              src="https://dcmekuaqoafogwlgnugs.supabase.co/storage/v1/object/public/Therapeytiki-askisi/therapeytiki-askisi.mp4"
              type="video/mp4"
            />
            Το πρόγραμμα περιήγησής σας δεν υποστηρίζει την αναπαραγωγή βίντεο.
          </video>

          {/* Minimal Controls */}
          <div
            className={`absolute inset-0 pointer-events-none transition-opacity duration-300 flex flex-col justify-between p-3.5 ${
              !isPlaying || showControls ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="flex justify-end">
              <button
                type="button"
                onClick={(e) => handleFullscreen(false, e)}
                className="pointer-events-auto flex items-center justify-center w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 active:bg-black text-white backdrop-blur-md border border-white/20 shadow-lg"
                title="Πλήρης οθόνη"
                aria-label="Πλήρης οθόνη"
              >
                <Maximize className="w-5 h-5 text-white" />
              </button>
            </div>
            <div className="flex justify-start">
              <button
                type="button"
                onClick={(e) => togglePlay(false, e)}
                className="pointer-events-auto inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/95 hover:bg-white active:bg-white/80 text-[#004aad] font-semibold text-xs shadow-xl backdrop-blur-md transition-all active:scale-95"
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
            Υπηρεσίες / Θεραπευτική Άσκηση
          </div>
          
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4">
            Θεραπευτική Άσκηση
          </h1>
          
          <p className="text-base text-slate-700 font-normal leading-relaxed mb-6">
            Είναι ένα από τα πιο ισχυρά θεραπευτικά εργαλεία για την αποκατάσταση, την πρόληψη και τη διατήρηση της λειτουργικότητας. Στο ΕΡΜΕΙΟΝ, η θεραπευτική άσκηση, δεν είναι απλώς γυμναστική, είναι μια επιστημονικά σχεδιασμένη παρέμβαση για κάθε άτομο ξεχωριστά. Προσαρμόζεται σε κάθε θεραπεία ανάλογα με την επαναξιολόγηση και την συμπεριφορά των συμπτωμάτων.
          </p>

          <a
            href="tel:+302310940100"
            className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#004aad] hover:bg-[#003884] text-white text-base font-bold shadow-md active:scale-95 text-center"
          >
            <Phone className="w-4 h-4 shrink-0" />
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
                Υπηρεσίες / Θεραπευτική Άσκηση
              </div>
              
              <h1 className="text-4xl xl:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6">
                Θεραπευτική Άσκηση
              </h1>
              
              <p className="text-lg xl:text-xl text-slate-700 font-normal leading-relaxed mb-8 max-w-xl">
                Είναι ένα από τα πιο ισχυρά θεραπευτικά εργαλεία για την αποκατάσταση, την πρόληψη και τη διατήρηση της λειτουργικότητας. Στο ΕΡΜΕΙΟΝ, η θεραπευτική άσκηση, δεν είναι απλώς γυμναστική, είναι μια επιστημονικά σχεδιασμένη παρέμβαση για κάθε άτομο ξεχωριστά. Προσαρμόζεται σε κάθε θεραπεία ανάλογα με την επαναξιολόγηση και την συμπεριφορά των συμπτωμάτων.
              </p>

              <a
                href="tel:+302310940100"
                className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-xl bg-[#004aad] hover:bg-[#003884] text-white text-lg font-bold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 text-center"
              >
                <Phone className="w-5 h-5 shrink-0" />
                Κλείστε Ραντεβού
              </a>
            </div>

            {/* Right Column: Video Container with Interactive Controls */}
            <div className="col-span-6 w-full">
              <div
                className="relative group overflow-hidden rounded-3xl shadow-xl border border-gray-200/80 bg-slate-950 aspect-[16/9] w-full select-none"
              >
                <video
                  ref={desktopVideoRef}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  className="w-full h-full object-cover"
                >
                  <source
                    src="https://dcmekuaqoafogwlgnugs.supabase.co/storage/v1/object/public/Therapeytiki-askisi/therapeytiki-askisi.mp4"
                    type="video/mp4"
                  />
                  Το πρόγραμμα περιήγησής σας δεν υποστηρίζει την αναπαραγωγή βίντεο.
                </video>

                {/* Desktop Interactive Hover Controls Overlay */}
                <div
                  className={`absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-black/30 transition-opacity duration-300 flex flex-col justify-between p-5 ${
                    !isPlaying ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}
                >
                  {/* Top Right: Fullscreen Button */}
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={(e) => handleFullscreen(true, e)}
                      className="pointer-events-auto flex items-center justify-center w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 active:bg-black text-white backdrop-blur-md border border-white/20 shadow-lg transition-transform active:scale-90"
                      title="Πλήρης οθόνη"
                      aria-label="Πλήρης οθόνη"
                    >
                      <Maximize className="w-5 h-5 text-white" />
                    </button>
                  </div>

                  {/* Bottom Left: Play/Pause Button */}
                  <div className="flex justify-start">
                    <button
                      type="button"
                      onClick={(e) => togglePlay(true, e)}
                      className="pointer-events-auto inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/95 hover:bg-white active:bg-white/80 text-[#004aad] font-semibold text-xs shadow-xl backdrop-blur-md transition-all active:scale-95"
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
            <Link 
              to="/ypiresies/McKenzie"
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
            </Link>

            {/* Tecar */}
            <Link 
              to="/ypiresies/tecar"
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
            </Link>

            {/* Spine Pain */}
            <Link 
              to="/ypiresies/spine-pain"
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
            </Link>

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
