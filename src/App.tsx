import { useState, useEffect, useRef } from 'react';
import {
  useScroll,
  useTransform,
  motion,
} from 'framer-motion';
import { ChevronRight, ChevronLeft, Menu, X, CalendarCheck } from 'lucide-react';

// Navbar Component
function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMenu = () => setMobileOpen(false);

  const navLinks = [
    { href: '#services', label: 'Υπηρεσίες' },
    { href: '#process', label: 'Διαδικασία' },
    { href: '#testimonials', label: 'Αξιολογήσεις' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between px-4 md:px-8 py-2">
        {/* Logo */}
        <img src="/ermeion-logo1.webp" alt="Ερμείον" style={{ height: '72px' }} className="w-auto object-contain" />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-semibold transition-all duration-300 hover:opacity-80"
              style={{ color: '#000095' }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <button
          className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-lg text-base font-semibold text-white transition-all duration-300 hover:opacity-90"
          style={{ backgroundColor: '#000095' }}
        >
          Κλείστε Ραντεβού
        </button>

        {/* Mobile: CTA + Hamburger Row */}
        <div className="md:hidden flex items-center gap-2">
          <button
            className="px-4 py-2 rounded-lg text-sm font-semibold text-white"
            style={{ backgroundColor: '#000095' }}
          >
            Κράτηση 
          </button>
          <button
            className="p-2 rounded-lg transition-colors"
            style={{ color: '#000095' }}
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col px-4 pb-6 gap-1 bg-white">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-3 text-base font-semibold border-b border-gray-100 transition-all duration-200 hover:opacity-70"
              style={{ color: '#000095' }}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <button
            className="mt-4 w-full py-3 rounded-lg text-base font-semibold text-white transition-all duration-300 hover:opacity-90"
            style={{ backgroundColor: '#000095' }}
            onClick={closeMenu}
          >
            Κλείστε Ραντεβού
          </button>
        </div>
      </div>
    </nav>
  );
}

// Hero Section Component
function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-start md:items-center justify-start md:justify-center overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        style={{ backgroundColor: '#000095' }}
      >
        <source
          src="https://dcmekuaqoafogwlgnugs.supabase.co/storage/v1/object/public/Ermeion-Hero-Section-Video/Manual-Therapy.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/60 to-black/50" />

      {/* Desktop: Left-Aligned Content + Right Badge */}
      {/* Mobile: Vertical Stack Above Fold */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-12 pt-12 pb-6 md:py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-16">
        {/* Left: Text + CTA */}
        <div className="flex flex-col md:max-w-[850px]">
          {/* Title */}
          <h1
            className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6 md:mb-7"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}
          >
            Βραβευμένη & Πιστοποιημένη Φυσικοθεραπεία για Πόνους, Τραυματισμούς και Αποκατάσταση.
          </h1>

          {/* Subtitle */}
          <p
            className="text-sm sm:text-base md:text-lg text-white/90 mb-6 md:mb-7"
            style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}
          >
            Από πόνους στη μέση, στον αυχένα και τους ώμους έως τραυματισμούς στο ισχίο, το γόνατο, τον αστράγαλο και αθλητικούς τραυματισμούς, εντοπίζουμε την αιτία και σας παρέχουμε ένα <b>σαφές πλάνο αποκατάστασης.</b>
          </p>

          {/* Value Proposition Checkmarks */}
          <ul className="flex flex-col gap-2 md:gap-2.5 mb-7 md:mb-7">
            {[
              '10+ χρόνια εμπειρίας',
              'Συμβεβλημένος με ΕΟΠΥΥ',
              'Αποδεκτές όλες οι ιδιωτικές ασφαλιστικές',
              'Κράτηση σε λιγότερο από 1 λεπτό',
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-white text-sm md:text-base font-bold">
                <span className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: '#000095' }}>
                  &#10003;
                </span>
                <span style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>{item}</span>
              </li>
            ))}
          </ul>

          {/* Main CTA */}
          <button
            className="flex items-center justify-center gap-2 w-full md:w-fit px-12 py-4 rounded-xl text-base md:text-lg font-bold text-white transition-all duration-300 shadow-lg hover:scale-[1.02]"
            style={{ backgroundColor: '#000095' }}
          >
            <CalendarCheck className="w-5 h-5" />
            Κλείστε Ραντεβού
          </button>
        </div>

        {/* Right: Google Review Badge (Desktop) / Centered Below CTA (Mobile) */}
        <div className="flex justify-center md:justify-end mt-7 md:mt-0 md:shrink-0">
          <div
            className="bg-white rounded-2xl px-5 py-4 md:px-6 md:py-5 shadow-xl flex flex-col items-center text-center w-[190px] md:w-[240px]"
            style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.25)' }}
          >
            {/* Google Logo */}
            <svg width="32" height="32" viewBox="0 0 48 48" className="mb-1">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.34-8.16 2.34-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
            </svg>
            {/* 5 Gold Stars */}
            <div className="flex items-center gap-0.5 mb-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5" fill="#FBBC05" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
            {/* Rating Text */}
            <p className="text-sm md:text-base font-semibold" style={{ color: '#000095' }}>
              5 · Βάσει 913+ αξιολογήσεων
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Insurance Carousel Section Component
function InsuranceCarouselSection() {
  const logos = [
    { src: 'https://dcmekuaqoafogwlgnugs.supabase.co/storage/v1/object/public/Assurance-companies/Allianz-logo.webp', alt: 'Allianz' },
    { src: 'https://dcmekuaqoafogwlgnugs.supabase.co/storage/v1/object/public/Assurance-companies/ERGO-logo.webp', alt: 'ERGO' },
    { src: 'https://dcmekuaqoafogwlgnugs.supabase.co/storage/v1/object/public/Assurance-companies/ethniki-asfalistiki-logo.webp', alt: 'Εθνική Ασφαλιστική' },
    { src: 'https://dcmekuaqoafogwlgnugs.supabase.co/storage/v1/object/public/Assurance-companies/eurolife_logo.webp', alt: 'Eurolife' },
    { src: 'https://dcmekuaqoafogwlgnugs.supabase.co/storage/v1/object/public/Assurance-companies/Generali_group-logo.webp', alt: 'Generali' },
    { src: 'https://dcmekuaqoafogwlgnugs.supabase.co/storage/v1/object/public/Assurance-companies/groupama-logo.webp', alt: 'Groupama' },
    { src: 'https://dcmekuaqoafogwlgnugs.supabase.co/storage/v1/object/public/Assurance-companies/Interamerican-logo.webp', alt: 'Interamerican' },
    { src: 'https://dcmekuaqoafogwlgnugs.supabase.co/storage/v1/object/public/Assurance-companies/interlife-logo.webp', alt: 'Interlife' },
    { src: 'https://dcmekuaqoafogwlgnugs.supabase.co/storage/v1/object/public/Assurance-companies/MetLife-logo.webp', alt: 'MetLife' },
    { src: 'https://dcmekuaqoafogwlgnugs.supabase.co/storage/v1/object/public/Assurance-companies/NN_Group-logo.webp', alt: 'NN Group' },
  ];

  const doubled = [...logos, ...logos];

  return (
    <section className="bg-white py-14 md:py-20">
      {/* Heading */}
      <p
        className="text-center text-xs sm:text-sm font-extrabold tracking-[0.25em] mb-10 md:mb-14 px-4"
        style={{ color: '#71788f' }}
      >
        ΔΕΚΤΕΣ ΟΛΕΣ ΟΙ ΑΣΦΑΛΙΣΤΙΚΕΣ
      </p>

      {/* Carousel */}
      <div
        className="relative overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        }}
      >
        <div className="insurance-track">
          {doubled.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center shrink-0 px-8 md:px-12"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-8 sm:h-10 w-auto object-contain"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Why Ermeion Section Component
function WhyErmeionSection() {
  const checklistItems = [
    'Πόνο στη μέση, ισχιαλγία και νευροπαθητικό πόνο',
    'Πόνο στον αυχένα, στους ώμους και προβλήματα στάσης σώματος',
    'Τραυματισμούς στο γόνατο, το ισχίο, τον αστράγαλο και τραυματισμούς από τρέξιμο',
    'Πόνο στον καρπό, τον αγκώνα και το χέρι, καθώς και κακώσεις από επαναλαμβανόμενες κινήσεις',
    'Αθλητικούς τραυματισμούς, ενοχλήσεις από την άσκηση στο γυμναστήριο και μυϊκή δυσκαμψία',
    'Μετεγχειρητική φυσικοθεραπεία και μακροχρόνια αποκατάσταση',
  ];

  return (
    <section className="bg-white py-16 md:py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

        {/* Left Column */}
        <div className="w-full lg:w-[55%] flex flex-col">
          {/* Headline */}
          <h2 className="text-2xl sm:text-4xl md:text-4xl font-extrabold leading-tight mb-8">
            <span style={{ color: '#000095' }}>2000+ Θεσσαλονικείς</span>
            <span className="text-gray-900"> έχουν εμπιστευτεί τη φυσικοθεραπεία στο ΕΡΜΕΙΟΝ για ανακούφιση από τον πόνο, αποκατάσταση τραυματισμών και αποθεραπεία.</span>
          </h2>

          {/* Subheading */}
          <h3
            className="text-base sm:text-lg font-bold mb-5"
            style={{ color: '#000095' }}
          >
            Μπορεί η φυσικοθεραπεία να με βοηθήσει πραγματικά;
          </h3>

          {/* Body paragraphs */}
          <div className="flex flex-col gap-4 mb-8">
            <p className="text-sm sm:text-sm md:text-base leading-relaxed" style={{ color: '#3d3d3d' }}>
              Αυτό εξαρτάται από τη σωστή αξιολόγηση, θεραπεία και πλάνο.
            </p>
            <p className="text-sm sm:text-sm md:text-base leading-relaxed" style={{ color: '#3d3d3d' }}>
              Στο ΕΡΜΕΙΟΝ δεν επικεντρωνόμαστε απλώς στο σημείο που πονάει και ελπίζουμε για το καλύτερο. Ο φυσικοθεραπευτής σας θα αξιολογήσει τι προκαλεί τα συμπτώματά σας, θα σας το εξηγήσει με σαφήνεια, θα εφαρμόσει χειροθεραπεία όπου κρίνεται σκόπιμο και θα δημιουργήσει ένα πρόγραμμα αποκατάστασης προσαρμοσμένο στο σώμα, τους στόχους και τον τρόπο ζωής σας.
            </p>
            <p className="text-sm sm:text-sm md:text-base leading-relaxed" style={{ color: '#3d3d3d' }}>
              Η φυσικοθεραπεία μπορεί να βοηθήσει στην αντιμετώπιση του πόνου, δυσκαμψίας, τραυματισμών, μετεγχειρητικής αποκατάστασης και των προβλημάτων κίνησης σε ολόκληρο το σώμα, όχι μόνο στον πόνο της μέσης ή του γόνατος.
            </p>
          </div>

          {/* Checklist header */}
          <p className="text-base sm:text-sm font-bold text-gray-900 mb-5">
            Συχνά βοηθάμε ασθενείς με:
          </p>

          {/* Checklist */}
          <ul className="flex flex-col gap-3 mb-10 lg:mb-10">
            {checklistItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ backgroundColor: '#000095' }}
                >
                  &#10003;
                </span>
                <span className="text-sm sm:text-sm font-bold text-gray-900 leading-snug">{item}</span>
              </li>
            ))}
          </ul>

          {/* Mobile: image + below-image block */}
          <div className="lg:hidden flex flex-col gap-6 mb-8">
            <img
              src="https://dcmekuaqoafogwlgnugs.supabase.co/storage/v1/object/public/John/john-ermeion.webp"
              alt="Γιάννης Ερμείον Φυσικοθεραπευτής"
              className="w-full rounded-2xl object-cover"
              style={{ aspectRatio: '4/3' }}
            />
            <div>
              <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-3">
                Πιστεύετε ότι ίσως δεν χρειάζεστε φυσικοθεραπεία;
              </h4>
              <p className="text-sm sm:text-sm md:text-base leading-relaxed" style={{ color: '#3d3d3d' }}>
                Αυτός είναι ακριβώς ο λόγος που γίνεται το πρώτο σας ραντεβού. Αν η φυσικοθεραπεία είναι η κατάλληλη επιλογή για εσάς, θα σας εξηγήσουμε το πλάνο. Αν δεν χρειάζεστε συνεχιζόμενη θεραπεία, θα σας το πούμε ξεκάθαρα.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <button
            className="flex items-center justify-center gap-2 w-full lg:w-fit px-8 py-4 rounded-xl text-sm sm:text-base font-bold text-white transition-all duration-300 hover:opacity-90"
            style={{ backgroundColor: '#000095' }}
          >
            <CalendarCheck className="w-5 h-5 shrink-0" />
            Κλείστε Ραντεβού
          </button>
        </div>

        {/* Right Column — desktop only */}
        <div className="hidden lg:flex w-full lg:w-[45%] flex-col gap-6 sticky top-24 self-start">
          <img
            src="https://dcmekuaqoafogwlgnugs.supabase.co/storage/v1/object/public/John/john-ermeion.webp"
            alt="Γιάννης Ερμείον Φυσικοθεραπευτής"
            className="w-full rounded-2xl object-cover"
            style={{ aspectRatio: '4/3' }}
          />
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-3">
              Πιστεύετε ότι ίσως δεν χρειάζεστε φυσικοθεραπεία;
            </h4>
            <p className="text-sm sm:text-sm leading-relaxed" style={{ color: '#3d3d3d' }}>
              Αυτός είναι ακριβώς ο λόγος που γίνεται το πρώτο σας ραντεβού. Αν η φυσικοθεραπεία είναι η κατάλληλη επιλογή για εσάς, θα σας εξηγήσουμε το πλάνο θεραπείας. Αν δεν χρειάζεστε συνεχιζόμενη θεραπεία, θα σας το πούμε ξεκάθαρα.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

// Timeline Section Component
interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

function Timeline({ data }: { data: TimelineEntry[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      id="process"
      className="w-full bg-white md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2
          className="text-3xl md:text-4xl font-extrabold mb-4 max-w-4xl"
          style={{ color: '#000095' }}
        >
          Ένα Ολοκληρωμένο Σύστημα Ανάρρωσης
        </h2>
        <p
          className="text-sm md:text-base max-w-xl"
          style={{ color: '#71788f' }}
        >
          Κάθε θεραπευτικό πλάνο ενσωματώνει πέντε βασικούς πυλώνες για τη διασφάλιση αποτελεσμάτων με διάρκεια και τη βέλτιστη αποκατάσταση της κίνησης.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white flex items-center justify-center shadow-md">
                <div
                  className="h-4 w-4 rounded-full p-2"
                  style={{ backgroundColor: '#000095' }}
                />
              </div>
              <h3
                className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold"
                style={{ color: '#000095' }}
              >
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3
                className="md:hidden block text-2xl mb-4 text-left font-bold"
                style={{ color: '#000095' }}
              >
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + 'px',
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-gray-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
              backgroundColor: '#000095',
            }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

// Process Section Component
function ProcessSection() {
  const processSteps: TimelineEntry[] = [
    {
      title: 'Αξιολόγηση',
      content: (
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h4
            className="font-bold text-xl mb-3"
            style={{ color: '#000095' }}
          >
            Ολοκληρωμένη Αξιολόγηση
          </h4>
          <p
            className="text-base leading-relaxed mb-4"
            style={{ color: '#71788f' }}
          >
            Ξεκινάμε με μια ενδελεχή αξιολόγηση διάρκειας 60 λεπτών, ώστε να κατανοήσουμε το ιστορικό του πόνου σας, τους περιορισμούς στην κίνηση και τους παράγοντες του τρόπου ζωής σας. Θα ολοκληρώσετε τη συνεδρία έχοντας σαφή εικόνα για τα αίτια των συμπτωμάτων σας.
          </p>
          <div
            className="inline-block px-4 py-2 rounded-lg text-sm font-medium"
            style={{ backgroundColor: '#eaf0f7', color: '#000095' }}
          >
            Δυνατότητα κράτησης online 24/7
          </div>
        </div>
      ),
    },
    {
      title: 'Πλάνο',
      content: (
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h4
            className="font-bold text-xl mb-3"
            style={{ color: '#000095' }}
          >
            Εξατομικευμένο Πλάνο Θεραπείας
          </h4>
          <p
            className="text-base leading-relaxed mb-4"
            style={{ color: '#71788f' }}
          >
            Με βάση τη διάγνωση μας, δημιουργούμε ένα εξατομικευμένο πλάνο αποκατάστασης με συγκεκριμένους στόχους και χρονοδιαγράμματα. Εξηγούμε κάθε βήμα, ώστε να κατανοείτε ακριβώς τι να περιμένετε και πώς θα μετράμε την πρόοδο.
          </p>
          <div className="flex flex-wrap gap-2">
            <span
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{ backgroundColor: '#eaf0f7', color: '#000095' }}
            >
              Λεπτομερής ιστορικό
            </span>
            <span
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{ backgroundColor: '#eaf0f7', color: '#000095' }}
            >
              Κλινική εξέταση
            </span>
            <span
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{ backgroundColor: '#eaf0f7', color: '#000095' }}
            >
              Εκτίμηση βημάτων
            </span>
          </div>
        </div>
      ),
    },
    {
      title: 'Θεραπεία',
      content: (
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h4
            className="font-bold text-xl mb-3"
            style={{ color: '#000095' }}
          >
            θεραπεία & Άσκηση
          </h4>
          <p
            className="text-base leading-relaxed mb-4"
            style={{ color: '#71788f' }}
          >
            Κάθε συνεδρία συνδυάζει τεχνικές χειροθεραπείας με καθοδηγούμενες ασκήσεις, σχεδιασμένες για την αποκατάσταση της κινητικότητας, την ενδυνάμωση και την αντιμετώπιση της βασικής αιτίας του πόνου σας. Προσαρμόζουμε το πρόγραμμά σας καθώς σημειώνετε πρόοδο.
          </p>
          <div
            className="inline-block px-4 py-2 rounded-lg text-sm font-medium"
            style={{ backgroundColor: '#eaf0f7', color: '#000095' }}
          >
            Εξατομικευμένο πρόγραμμα για εσάς
          </div>
        </div>
      ),
    },
    {
      title: 'Πρόοδος',
      content: (
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h4
            className="font-bold text-xl mb-3"
            style={{ color: '#000095' }}
          >
            Μετρήσιμες βελτιώσεις
          </h4>
          <p
            className="text-base leading-relaxed mb-4"
            style={{ color: '#71788f' }}
          >
            Παρακολουθούμε την πρόοδό σας με αντικειμενικές μετρήσεις σε κάθε συνεδρία. Θα διαπιστώσετε απτές βελτιώσεις στην κινητικότητα, τη δύναμη και τα επίπεδα πόνου. Χωρίς εικασίες — μόνο σαφή στοιχεία για την αποκατάστασή σας.
          </p>
          <div
            className="inline-block px-4 py-2 rounded-lg text-sm font-medium"
            style={{ backgroundColor: '#eaf0f7', color: '#000095' }}
          >
            Σαφής ανάλυση προόδου
          </div>
        </div>
      ),
    },
    {
      title: 'Πρόληψη',
      content: (
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h4
            className="font-bold text-xl mb-3"
            style={{ color: '#000095' }}
          >
            Πρόληψη και Ανεξαρτησία
          </h4>
          <p
            className="text-base leading-relaxed mb-4"
            style={{ color: '#71788f' }}
          >
            Αφού αναρρώσετε, σας εφοδιάζουμε με τις γνώσεις και τις ασκήσεις που απαιτούνται για την πρόληψη μελλοντικών προβλημάτων. Στόχος μας είναι να σας βοηθήσουμε να επιστρέψετε στις δραστηριότητες που αγαπάτε, με αυτοπεποίθηση και ανεξαρτησία.
          </p>
          <div className="flex flex-wrap gap-2">
            <span
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{ backgroundColor: '#eaf0f7', color: '#000095' }}
            >
              Ασκήσεις συντήρησης
            </span>
            <span
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{ backgroundColor: '#eaf0f7', color: '#000095' }}
            >
              Συμβουλές ergonomics
            </span>
            <span
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{ backgroundColor: '#eaf0f7', color: '#000095' }}
            >
              Πρόγραμμα πρόληψης
            </span>
          </div>
        </div>
      ),
    },
  ];

  return <Timeline data={processSteps} />;
}

// Why Choose Ermeion Section Component
const trustPoints = [
  {
    number: '1',
    title: 'Δεν θεραπεύουμε το σύμπτωμα, βρίσκουμε την αιτία.',
    body: 'Πριν από κάθε θεραπεία, γίνεται πλήρης αξιολόγηση. Θα μάθετε ακριβώς τι φταίει, γιατί συνέβη, και τι πρέπει να κάνετε — Στόχος μας η ανάρρωση σας.',
  },
  {
    number: '2',
    title: 'Πιστοποιημένες τεχνικές που δεν βρίσκετε παντού.',
    body: 'McKenzie MDT, PNF, Mulligan Concept — μεθόδους υψηλού επιπέδου, εφαρμοσμένες με 10+ χρόνια πρακτικής εμπειρίας σε πραγματικούς ασθενείς, με εξαιρετικά αποτελέσματα.',
  },
  {
    number: '3',
    title: 'Οι περισσότερες 5★ αξιολογήσεις στη Θεσσαλονίκη.',
    body: 'Το ΕΡΜΕΙΟΝ έχει τις περισσότερες 5 αστέρων αξιολογήσεις στη Θεσσαλονίκη και οι ασθενείς μας σας λένε γιατί. Εσείς επιλέγετε.',
  },
];

function WhyChooseSection() {
  return (
    <section className="py-24 px-6 md:px-16 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2
            className="text-3xl md:text-4xl font-extrabold mb-3 leading-tight"
            style={{ color: '#000095' }}
          >
            Γιατί να επιλέξετε το ΕΡΜΕΙΟΝ
          </h2>
          <p className="text-sm uppercase tracking-widest font-semibold" style={{ color: '#71788f' }}>
            Τρεις λόγοι που μας εμπιστεύονται οι ασθενείς μας.
          </p>
        </div>

        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200">
          {trustPoints.map((point) => (
            <div key={point.number} className="bg-white px-8 py-10 md:px-10 md:py-12 flex flex-col gap-6">
              {/* Number */}
              <span
                className="text-5xl font-extrabold leading-none select-none"
                style={{ color: '#eaf0f7' }}
              >
                {point.number}
              </span>
              {/* Divider */}
              <div className="w-10 h-0.5" style={{ backgroundColor: '#000095' }} />
              {/* Title */}
              <h3
                className="text-lg font-bold leading-snug"
                style={{ color: '#000095' }}
              >
                {point.title}
              </h3>
              {/* Body */}
              <p
                className="text-sm leading-relaxed flex-1"
                style={{ color: '#71788f' }}
              >
                {point.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials Section Component
const SQRT_5000 = Math.sqrt(5000);

const testimonialsData = [
  {
    tempId: 0,
    testimonial: "Ο Γιάννης είναι ένας εξαιρετικά καταρτισμένος επαγγελματίας. Με βοήθησε να ξεπεράσω το πρόβλημα με τη μέση μου. Ήταν παρών καθ'όλη τη διάρκεια της συνεδρίας και την προσάρμοζε κάθε φορά στις ανάγκες που είχα..",
    by: "Μαρία Μεταξά",
    imgSrc: "https://lh3.googleusercontent.com/a-/ALV-UjUgZltsIxQABh7ryvFBldW5CIqvF87g23eMcCPN0EEaUub68G8=w72-h72-p-rp-mo-br100",
  },
  {
    tempId: 1,
    testimonial: "Εξειδικευμένος άνθρωπος με βοήθησε πολύ να αντιμετωπίσω τις ζαλάδες μου με την ενδυνάμωση της αυχενικής μου μοίρας. Αλλά και όχι μόνο σε οποιοδήποτε προβληματισμό μου και πιθανό τραυματισμό ήταν εκεί να με βοηθήσει και να μου δείξει τρόπους…",
    by: "Ιορδάνης Καραγιάννης",
    imgSrc: "https://lh3.googleusercontent.com/a-/ALV-UjXcgyGgnRUP12O-3TDMpQNvn-2yT6vm2VG-BqJCo2ZVMaZVLaAl=w72-h72-p-rp-mo-br100",
  },
  {
    tempId: 2,
    testimonial: "Εξαιρετικός επαγγελματίας! Ο Γιάννης δείχνει πραγματικό ενδιαφέρον για τον ασθενή, εξηγεί με απλό τρόπο κάθε στάδιο της θεραπείας και προσαρμόζει τις ασκήσεις στις ανάγκες του. Από την πρώτη κιόλας συνεδρία έβγαλα το κολάρο που φορούσα σχεδόν μήνα. Τον συστήνω ανεπιφύλακτα!",
    by: "Νίκη Ντανάκα",
    imgSrc: "https://lh3.googleusercontent.com/a-/ALV-UjX4dd3cHH5dwQ8NI_7tTCTXRIlGZPWJzS-Esv2LuZB0rYG0apU=w72-h72-p-rp-mo-ba12-br100",
  },
  {
    tempId: 3,
    testimonial: "Ο Γιάννης είναι εξαιρετικός και ως επαγγελματίας αλλά και σαν άνθρωπος. Με βοήθησε με το πολυετές πρόβλημα στους ώμους μέσα σε λίγες μόνο συνεδρίες και έχει καταφέρει να κάνει κάτι που συνήθως βαριέμαι πολύ ευχάριστο.",
    by: "Παντελής Μανίκας",
    imgSrc: "https://lh3.googleusercontent.com/a-/ALV-UjXLI3KlEu3CBmYDHF4Nu6h0GebsAQ9RvtcPj59ocgwN1i3dBs6q=w72-h72-p-rp-mo-br100",
  },
  {
    tempId: 4,
    testimonial: "Είχα αρκετά μεγάλο πρόβλημα με τα γόνατα, επισκέφτηκα ένα άλλο φυσικοθεραπευτήριο κ δεν είχα καμία εξέλιξη. Με τον Γιάννη μέσα σε ένα πολύ μικρό διάστημα μπορέσαμε να ξανά επανέλθω με επιτυχία στον χορό μου κ τον ευχαριστώ πολύ ❤️",
    by: "Φένια Δημοπούλου",
    imgSrc: "https://lh3.googleusercontent.com/a/ACg8ocJ3aJ1dv-sXzqkvBZwU7s7FkH186KgnWRr5SE9jTA71GNw4RA=w72-h72-p-rp-mo-br100",
  },
  {
    tempId: 5,
    testimonial: "Μετά από έναν σοβαρό τραυματισμό ο ορθοπεδικός μου σύστησε τον Γιάννη και άμεσα κατάλαβα ότι ήταν η καλύτερη επιλογή!!! Άριστος επαγγελματίας με πολύ καλή γνώση πάνω στο αντικείμενο, πλήρως εξοπλισμένος χώρος, δουλεύει στοχευμένα και μεθοδικά! Τον συστήνω ανεπιφύλακτα 👌🏽",
    by: "Κατερίνα Παρίση",
    imgSrc: "https://lh3.googleusercontent.com/a-/ALV-UjUhVM2_kI7UCxLrYnU4YOaq3fFIuaiGjABr790IeFT1AFar37Pc=w72-h72-p-rp-mo-br100",
  },
  {
    tempId: 6,
    testimonial: "Πρώτη φορά χρειάστηκε να πάω σε φυσικοθεραπευτήριο. Τελικά, δεν είναι τυχαία τα 5αρια. Άψογος επαγγελματίας, γνώστης του αντικειμένου. Από την πρώτη συνεδρία ανακουφίστηκε το πρόβλημα στο γόνατο. Ο χώρος πλήρως εξοπλισμένος με σύγχρονα μηχανήματα.",
    by: "Ευαγγελία Δροσάκη",
    imgSrc: "https://lh3.googleusercontent.com/a/ACg8ocId6ZoYQ_4pMpMVKyWZVU4m4wNrQWU28-O8SoHWUvhk0_7fEA=w72-h72-p-rp-mo-ba12-br100",
  },
  {
    tempId: 7,
    testimonial: "Πολύ καθαρό περιβάλλον, ευχάριστες θεραπείες με θετική ενέργεια και επαγγελματισμό. Το συστήνω ανεπιφύλακτα σε όποιον θέλει να γίνει καλά — εγώ με την αποθεραπεία στο γόνατό μου έμεινα κάτι παραπάνω από ευχαριστημένος.",
    by: "Θεόδωρος Τσιτιρίδης",
    imgSrc: "https://lh3.googleusercontent.com/a-/ALV-UjXwuKSAMi8t4azb1XuECUZrcnsiCF98F_jaKpU0hOSETpfdkTs=w72-h72-p-rp-mo-br100",
  },
  {
    tempId: 8,
    testimonial: "Πονούσα τρομερά πίσω στην πλάτη από τραυματισμό στην δουλειά μου. Ο Γιάννης με βοήθησε πάρα πολύ και μετά από ελάχιστες επισκέψεις ένιωσα πολύ καλύτερα και μου έμαθε να κάνω μόνος μου ασκήσεις McKenzie στο σπίτι. Ευχαριστώ πολύ για την βοήθεια.",
    by: "Γιώργος Μαδεμτζίδης",
    imgSrc: "https://lh3.googleusercontent.com/a-/ALV-UjVCRUH4uclOekkSSOKQUXLDt7pWkbWVW6KRSapQr6xpYY92HExYPg=w72-h72-p-rp-mo-ba12-br100",
  },
  {
    tempId: 9,
    testimonial: "Ο Γιάννης ασχολείται εξατομικευμένα με τον ασθενή ανάλογα με το πρόβλημα του. Στόχος του είναι ο εντοπισμός και η διόρθωση των πραγματικών αιτιών πόνου με την καλύτερη και ασφαλέστερη μέθοδο. Σε ευχαριστώ θερμά 🌹!!!!",
    by: "Ελένη",
    imgSrc: "https://lh3.googleusercontent.com/a/ACg8ocLigyKCFUWoVIWC9e5qtjmhqefc3LUSSG5Es0Ye9zAeiilh2g=w72-h72-p-rp-mo-ba12-br100",
  },
  {
    tempId: 10,
    testimonial: "Εξαιρετικός φυσικοθεραπευτής ο Γιάννης, πήγα με μουδιασμένο χέρι και πρόβλημα στον αυχένα — σε μια μόνο επίσκεψη είδα απίστευτη βελτίωση. Μαγικά χέρια θα έλεγα και με τις ασκήσεις που μου έδειξε έγινα τελείως καλά!!!",
    by: "Κωνσταντίνα",
    imgSrc: "https://lh3.googleusercontent.com/a/ACg8ocLeRootj3ykCXY4cpglTed2DjhufpVxquJonp6JJ5x5YQHZLA=w72-h72-p-rp-mo-br100",
  },
  {
    tempId: 11,
    testimonial: "Πολύ θετική εμπειρία συνολικά. Η φυσικοθεραπεία είχε άμεσα αποτελέσματα, κάτι που δεν είναι δεδομένο. Το περιβάλλον άνετο, η επικοινωνία φιλική αλλά επαγγελματική. Σε ευχαριστώ πολύ για όλα Γιάννη 🙏🏽",
    by: "Χριστίνα Μ.",
    imgSrc: "https://lh3.googleusercontent.com/a-/ALV-UjVWDncUQHnnHuQ1A87Zw0RRoKKmtdIrA0bpuzTsvjqE5u5NqPyn=w72-h72-p-rp-mo-br100",
  },
];

function TestimonialsSection() {
  const [cardDims, setCardDims] = useState({ width: 360, height: 280 });
  const [isMobile, setIsMobile] = useState(false);
  const [list, setList] = useState(testimonialsData);

  useEffect(() => {
    const update = () => {
      const isDesktop = window.matchMedia('(min-width: 640px)').matches;
      setIsMobile(!isDesktop);
      setCardDims(isDesktop ? { width: 360, height: 320 } : { width: 300, height: 300 });
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const handleMove = (steps: number) => {
    const newList = [...list];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setList(newList);
  };

  return (
    <section id="testimonials" className="py-24 px-6 md:px-16" style={{ backgroundColor: '#eaf0f7' }}>
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-10">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3" style={{ color: '#000095' }}>
              Τι λένε οι ασθενείς μας
            </h2>
            <p className="text-base md:text-lg max-w-xl" style={{ color: '#71788f' }}>
              Διαβάστε τις εμπειρίες των ασθενών μας και πώς τους βοηθήσαμε να ανακάμψουν.
            </p>
          </div>
          {/* Google Trust Badge */}
          <div className="flex items-center gap-3 bg-white rounded-2xl px-5 py-3 shadow-sm border border-gray-100 w-fit shrink-0">
            <svg width="26" height="26" viewBox="0 0 48 48" aria-label="Google">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.34-8.16 2.34-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
            </svg>
            <div>
              <div className="flex items-center gap-0.5 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4" fill="#FBBC05" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-xs font-bold" style={{ color: '#000095' }}>5/5 · 913+ κριτικές</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stagger Carousel */}
      <div className="relative w-full overflow-hidden" style={{ height: isMobile ? 500 : 620 }}>
        {list.map((t, index) => {
          const position = list.length % 2
            ? index - (list.length + 1) / 2
            : index - list.length / 2;
          const isCenter = position === 0;
          const translateY = isMobile
            ? (isCenter ? -40 : position % 2 ? 8 : -12)
            : (isCenter ? -65 : position % 2 ? 15 : -15);
          return (
            <div
              key={t.tempId}
              onClick={() => handleMove(position)}
              className="absolute left-1/2 top-1/2 cursor-pointer border-2 p-6 sm:p-8 transition-all duration-500 ease-in-out"
              style={{
                width: cardDims.width,
                height: cardDims.height,
                clipPath: 'polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)',
                transform: `translate(-50%, -50%) translateX(${(cardDims.width / 1.5) * position}px) translateY(${translateY}px) rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)`,
                zIndex: isCenter ? 10 : 0,
                backgroundColor: isCenter ? '#000095' : '#ffffff',
                borderColor: isCenter ? '#000095' : '#dce5ef',
                boxShadow: isCenter ? '0px 8px 0px 4px #c7d2e8' : 'none',
              }}
            >
              <span
                className="absolute block origin-top-right rotate-45"
                style={{ right: -2, top: 48, width: SQRT_5000, height: 2, backgroundColor: '#dce5ef' }}
              />
              <img
                src={t.imgSrc}
                alt={t.by}
                className="mb-3 h-12 w-12 rounded-full object-cover object-top"
                style={{ boxShadow: '3px 3px 0px #ffffff' }}
              />
              <div className="max-h-[75%] overflow-y-auto pr-1">
                <p
                  className="text-xs sm:text-sm font-medium leading-relaxed"
                  style={{ color: isCenter ? '#ffffff' : '#000095' }}
                >
                  "{t.testimonial}"
                </p>
              </div>
              <p
                className="absolute bottom-6 left-6 right-6 text-xs sm:text-sm italic font-semibold tracking-wide"
                style={{ color: isCenter ? 'rgba(255,255,255,0.8)' : '#71788f' }}
              >
                — {t.by}
              </p>
            </div>
          );
        })}

        {/* Navigation Buttons */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          <button
            onClick={() => handleMove(-1)}
            className="flex h-12 w-12 items-center justify-center border-2 transition-all duration-200 hover:border-[#000095]"
            style={{ backgroundColor: '#ffffff', borderColor: '#dce5ef', color: '#000095' }}
            aria-label="Προηγούμενη κριτική"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => handleMove(1)}
            className="flex h-12 w-12 items-center justify-center border-2 transition-all duration-200 hover:border-[#000095]"
            style={{ backgroundColor: '#ffffff', borderColor: '#dce5ef', color: '#000095' }}
            aria-label="Επόμενη κριτική"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-8">
        <a
          href="#"
          className="px-8 py-3 rounded-lg font-semibold border-2 transition-all duration-300 hover:text-white"
          style={{ borderColor: '#000095', color: '#000095' }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#000095')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          Δείτε όλες τις κριτικές μας
        </a>
      </div>
    </section>
  );
}



// FAQ Section Component
const faqItems = [
  {
    id: 'faq-1',
    question: 'Δέχεστε παραπεμπτικό από τον ΕΟΠΥΥ;',
    answer:
      'Ναι, δεχόμαστε παραπεμπτικό από τον ΕΟΠΥΥ. Αυτό σημαίνει ότι μπορείτε να πραγματοποιήσετε τις συνεδρίες σας κάνοντας χρήση του ασφαλιστικού σας ταμείου και προσκομίζοντας το αντίστοιχο ηλεκτρονικό παραπεμπτικό. Λάβετε υπόψη ότι η ισχύς του παραπεμπτικού πρέπει να εκτελεστεί εντός του χρονικού ορίου που αναγράφεται σε αυτό (συνήθως 15 ημέρες από την ημερομηνία έκδοσής του από τον γιατρό).',
  },
  {
    id: 'faq-2',
    question: 'Θα βοηθήσει όντως η φυσικοθεραπεία το πρόβλημα μου;',
    answer:
      'Ναι, η φυσικοθεραπεία υποστηρίζεται από επιστημονικές έρευνες και χρησιμοποιείται ευρέως για πόνους σε μύες, αρθρώσεις και νεύρα, συμπεριλαμβανομένου του πόνου στην πλάτη/μέση, της ισχιαλγίας, του αυχενικού πόνου, των αθλητικών τραυματισμών και της μετεγχειρητικής αποκατάστασης. Στην ΕΡΜΕΙΟΝ, πρόκειται για ιδιωτική φυσικοθεραπεία και όχι κάτι γενικό. Αυτό σημαίνει περισσότερο χρόνο, περισσότερη πρακτική θεραπεία και ένα πλάνο δομημένο γύρω από το σώμα και τους στόχους σας. Συνδυάζουμε βαθιά, αποτελεσματική πρακτική θεραπεία με εξειδικευμένη αποκατάσταση. Δεν δίνουμε απλώς φυλλάδια με ασκήσεις, αντιμετωπίζουμε το πρόβλημα σωστά και σας εξηγούμε τι πρέπει να κάνετε στη συνέχεια.',
  },
  {
    id: 'faq-3',
    question: 'Αντιμετωπίζετε το δικό μου πρόβλημα ή πόνο; Αντιμετωπίζετε τη δική μου πάθηση;',
    answer:
      'Αντιμετωπίζουμε καθημερινούς πόνους, αθλητικούς τραυματισμούς, σύνθετα περιστατικά και μετεγχειρητική αποκατάσταση, συμπεριλαμβανομένων του πόνου στην πλάτη/μέση και της ισχιαλγίας, του πόνου στον αυχένα και τον ώμο, τραυματισμών στο γόνατο και από το τρέξιμο, τραυματισμών στο γυμναστήριο, καθώς και της συνεχιζόμενης μυϊκής δυσκαμψίας και έντασης. Μπορείτε να μάθετε περισσότερα για τον τρόπο με τον οποίο αξιολογούμε και αντιμετωπίζουμε αυτά τα ζητήματα στη σελίδα μας για τη φυσικοθεραπεία. Κατέχω πτυχίο Φυσικοθεραπείας από το Διεθνές Πανεπιστήμιο της Ελλάδος και πτυχίο Επιστήμης Φυσικής Αγωγής και Αθλητισμού από το Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης. Είμαι πιστοποιημένος στη Μηχανική Διάγνωση και Θεραπεία (Μέθοδος McKenzie MDT), στην Ιδιοδεκτική Νευρομυϊκή Διευκόλυνση (PNF – προχωρημένο επίπεδο) και στη Χειροθεραπεία κατά το Mulligan Concept.',
  },
  {
    id: 'faq-4',
    question: 'Πόσες συνεδρίες θα χρειαστώ;',
    answer:
      'Ο αριθμός των επισκέψεων που θα χρειαστούν εξαρτάται από τη διάγνωση και τις πληροφορίες που συλλέγονται από την αξιολόγηση και τις επόμενες επισκέψεις, αλλά ο μέσος όρος είναι 6. Ένας από τους στόχους μου είναι να δώσω τη δυνατότητα στους ασθενείς να θεραπεύουν τον εαυτό τους και οι επισκέψεις μειώνονται όσο το δυνατόν περισσότερο. Με αυτό κατά νου, ο αριθμός των απαραίτητων επισκέψεων βασίζεται επίσης στο πόσο συνεπείς μπορούν να είναι οι ασθενείς με το προβλεπόμενο πλάνο. Εάν η φυσικοθεραπεία δεν είναι η καλύτερη επιλογή για την επίλυση μιας διαταραχής, αυτό καθορίζεται μέσω προοδευτικών δοκιμών που συνήθως δεν υπερβαίνουν τις 5 επισκέψεις.',
  },
  {
    id: 'faq-5',
    question: 'Τι συμβαίνει σε μια συνεδρία θεραπείας στο ΕΡΜΕΙΟΝ; Θα πονέσω; Είναι ασφαλές;',
    answer:
      'Οι συνεδρίες φυσικοθεραπείας είναι ασφαλείς, επαγγελματικές και βασίζονται στην προσωπική επαφή, συνδυάζοντας μια σωστή αξιολόγηση με πρακτική θεραπεία (μασάζ, χειροθεραπεία και κινητοποίηση αρθρώσεων) και σαφείς συμβουλές αποκατάστασης. Κάποιες κινήσεις προσφέρουν αυτό τον «καλό πόνο» που αγαπούν οι πελάτες μας, αλλά η θεραπεία είναι πάντα ελεγχόμενη, επεξηγημένη και μέσα στα δικά σας όρια. Δεν θα σας αφήσουμε μόνο με ένα φυλλάδιο ασκήσεων. Θα φύγετε γνωρίζοντας τι ευθύνεται, γιατί συνέβη και τι πρέπει να κάνετε στη συνέχεια.',
  },
  {
    id: 'faq-6',
    question: 'Δέχεστε ιδιωτική ασφάλιση υγείας;',
    answer: 'Ναι, δεχόμαστε όλες τις ιδιωτικές ασφαλιστικές εταιρείες υγείας.',
  },
  {
    id: 'faq-7',
    question: 'Πόσο γρήγορα μπορείτε να με δείτε;',
    answer:
      'Οι περισσότεροι ασθενείς μπορούν να κλείσουν ραντεβού για φυσικοθεραπεία πολύ γρήγορα, καθώς συχνά υπάρχουν διαθέσιμα ραντεβού για την ίδια ημέρα ή την ίδια εβδομάδα. Η online κράτηση διαρκεί λιγότερο από 60 δευτερόλεπτα, διευκολύνοντάς σας να βρείτε μια ώρα που ταιριάζει στο πρόγραμμα σας.',
  },
];

function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="faq" className="py-32 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="mx-auto flex max-w-3xl flex-col text-left md:text-center">
          <h2 className="mb-3 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl text-gray-900">
            Συχνές Ερωτήσεις
          </h2>
          <p className="text-gray-500 lg:text-lg">
            Βρείτε απαντήσεις στις πιο συχνές ερωτήσεις σχετικά με τη φυσικοθεραπεία, τα ραντεβού, τον ΕΟΠΥΥ και τη διαδικασία αποκατάστασης στο ΕΡΜΕΙΟΝ.
          </p>
        </div>

        {/* Accordion */}
        <div className="mx-auto w-full lg:max-w-3xl divide-y divide-gray-200 border-t border-b border-gray-200">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id}>
                <button
                  className="w-full flex items-center justify-between gap-4 py-5 text-left transition-opacity duration-200 hover:opacity-60 focus:outline-none"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-gray-900 sm:py-1 lg:py-2 lg:text-lg">
                    {item.question}
                  </span>
                  <span className="shrink-0 text-gray-400 transition-transform duration-300" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? '600px' : '0px', opacity: isOpen ? 1 : 0 }}
                >
                  <div className="pb-5 sm:mb-1 lg:mb-2">
                    <p className="text-gray-500 lg:text-lg leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Final CTA Section Component
const guaranteeItems = [
  'Λεπτομερής αξιολόγηση και ειλικρινής εκτίμηση',
  'Θεραπευτική προσέγγιση βασισμένη σε επιστημονικά δεδομένα (evidence-based)',
  'Σαφής επικοινωνία και ενημέρωση',
  'Μετρήσιμη παρακολούθηση της προόδου',
];

function FinalCTASection() {
  return (
    <section className="py-24 px-6 md:px-16 bg-white">
      <div
        className="max-w-4xl mx-auto rounded-3xl px-8 py-16 md:px-16 md:py-20 text-center shadow-2xl"
        style={{ backgroundColor: '#000095' }}
      >
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div
            className="flex items-center justify-center w-20 h-20 rounded-full ring-4"
            style={{ backgroundColor: 'rgba(255,255,255,0.12)', ringColor: 'rgba(255,255,255,0.2)' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <polyline points="9 12 11 14 15 10" />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">
          Η Εγγύηση ΕΡΜΕΙΟΝ
        </h2>

        {/* Subtext */}
        <p
          className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-12"
          style={{ color: 'rgba(234,240,247,0.85)' }}
        >
          Η ανάρρωσή σας είναι η δέσμευσή μας. Εάν αισθάνεστε ότι δεν σημειώνετε ουσιαστική πρόοδο μετά από τρεις συνεδρίες, θα συνεργαστούμε μαζί σας για να προσαρμόσουμε το θεραπευτικό σας πλάνο χωρίς κανένα επιπλέον κόστος.
        </p>

        {/* Checklist grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12 text-left">
          {guaranteeItems.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span
                className="mt-0.5 flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full"
                style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span className="text-white font-medium text-sm md:text-base leading-snug">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Button */}
        <button
          className="px-10 py-4 rounded-xl font-bold text-base md:text-lg transition-all duration-300 hover:opacity-90 active:scale-95 shadow-lg"
          style={{ backgroundColor: '#ffffff', color: '#000095' }}
        >
          ΤΕΛΟΣ ΣΤΟΝ ΠΟΝΟ
        </button>

        {/* Small print */}
        <p
          className="text-sm mt-5"
          style={{ color: 'rgba(234,240,247,0.55)' }}
        >
          Περιορισμένη διαθεσιμότητα. Νέα ραντεβού κάθε εβδομάδα.
        </p>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  const navLinks = [
    { label: 'Αρχική', href: '#' },
    { label: 'Υπηρεσίες', href: '#services' },
    { label: 'Μαρτυρίες', href: '#testimonials' },
    { label: 'Συχνές Ερωτήσεις', href: '#faq' },
    { label: 'Επικοινωνία', href: '#contact' },
  ];

  return (
    <footer style={{ backgroundColor: '#0d0d1a' }}>
      {/* Main footer body */}
      <div className="max-w-6xl mx-auto px-6 md:px-16 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand column */}
        <div className="flex flex-col gap-5">
          <div>
            <img src="/ermeion-logo-white.webp" alt="Ερμείον" style={{ height: '48px' }} className="w-auto object-contain" />
            <p className="text-sm mt-3 leading-relaxed" style={{ color: '#ffffff' }}>
              Ιδιωτικό φυσικοθεραπευτήριο στη Θεσσαλονίκη. Εξειδικευμένη αποκατάσταση, αποδεδειγμένα αποτελέσματα.
            </p>
          </div>

          {/* Contact details */}
          <div className="flex flex-col gap-3 text-sm" style={{ color: '#ffffff' }}>
            <div className="flex items-center gap-2.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#5b8cff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>Θεσσαλονίκη</span>
            </div>
            <div className="flex items-center gap-2.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#5b8cff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.6 1.26h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.67A16 16 0 0 0 15.91 16.5l.77-.77a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>210 000 0000</span>
            </div>
            <div className="flex items-center gap-2.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#5b8cff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <span>info@ermeion.gr</span>
            </div>
            <div className="flex items-start gap-2.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#5b8cff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span>Δευτ–Παρ: 09:00–21:00<br />Σάββατο: 09:00–15:00</span>
            </div>
          </div>
        </div>

        {/* Navigation column */}
        <div>
          <p className="text-xs uppercase tracking-widest font-semibold mb-5" style={{ color: '#5b8cff' }}>Σελίδες</p>
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm transition-colors duration-200"
                  style={{ color: '#ffffff' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#5b8cff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services column */}
        <div>
          <p className="text-xs uppercase tracking-widest font-semibold mb-5" style={{ color: '#5b8cff' }}>Υπηρεσίες</p>
          <ul className="flex flex-col gap-3 text-sm" style={{ color: '#ffffff' }}>
            {['Αξιολόγηση & Διάγνωση', 'Χειροθεραπεία', 'Μέθοδος McKenzie MDT', 'PNF – Νευρομυϊκή Διευκόλυνση', 'Mulligan Concept', 'Αθλητική Αποκατάσταση', 'Μετεγχειρητική Αποκατάσταση'].map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-16 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: '#ffffff' }}>
            © {new Date().getFullYear()} ΕΡΜΕΙΟΝ Φυσικοθεραπευτήριο. Με επιφύλαξη παντός δικαιώματος.
          </p>
          {/* Social icons */}
          <div className="flex items-center gap-4">
            {[
              { label: 'Instagram', path: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2z' },
              { label: 'Facebook', path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
              { label: 'LinkedIn', path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' },
            ].map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="transition-colors duration-200"
                style={{ color: '#ffffff' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#5b8cff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main App Component
function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <InsuranceCarouselSection />
      <WhyErmeionSection />
      <TestimonialsSection />
      <ProcessSection />
      <WhyChooseSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}

export default App;
