import { useState, useEffect, useRef } from 'react';
import {
  useScroll,
  useTransform,
  motion,
  AnimatePresence,
} from 'framer-motion';
import { ChevronRight, ChevronLeft, ChevronDown, Menu, X, CalendarCheck, Zap, PhoneCall, Clock, Compass, Target, ShieldCheck, CalendarDays, ClipboardCheck, Shield, ClipboardEdit, Dumbbell } from 'lucide-react';
import McKenziePage from './McKenziePage';
import TecarPage from './TecarPage';
import SpinePainPage from './SpinePainPage';
import ExercisePage from './ExercisePage';

// Navbar Component
function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileAccordionOpen, setMobileAccordionOpen] = useState(false);

  const closeMenu = () => {
    setMobileOpen(false);
    setMobileAccordionOpen(false);
  };

  const navLinks = [
    { href: '#process', label: 'Διαδικασία' },
    { href: '#about-owner', label: 'Γνωρίστε με' },
    { href: '#testimonials', label: 'Αξιολογήσεις' },
    { href: '#faq', label: 'FAQ' },
  ];

  const servicesList = [
    { label: 'Μέθοδος McKenzie', href: '#mckenzie' },
    { label: 'Tecar Therapy', href: '#tecar' },
    { label: 'Θεραπεία & Πρόληψη Σπονδυλικού Πόνου', href: '#spine-pain' },
    { label: 'Θεραπευτική Άσκηση', href: '#exercise' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between px-4 md:px-8 py-2">
        {/* Logo */}
        <a href="#" className="flex items-center" onClick={() => closeMenu()}>
          <img src="/ermeion-main-logo.svg" alt="Ερμείον" style={{ height: '72px' }} className="w-auto object-contain" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {/* Services Hover Link */}
          <div 
            className="relative py-4"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-base font-semibold transition-all duration-300 hover:opacity-80 cursor-pointer"
              style={{ color: '#004aad' }}
            >
              Υπηρεσίες
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-2 w-64 bg-white rounded-2xl border border-gray-100 shadow-xl py-3 z-50 backdrop-blur-md"
                >
                  {servicesList.map((service) => (
                    <a
                      key={service.href}
                      href={service.href}
                      onClick={() => setDropdownOpen(false)}
                      className="block px-5 py-2.5 text-sm font-semibold text-gray-700 hover:text-[#004aad] hover:bg-gray-50 transition-all duration-200"
                    >
                      {service.label}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-semibold transition-all duration-300 hover:opacity-80"
              style={{ color: '#004aad' }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="https://cal.eu/ermeion/physiotherapy"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-lg text-base font-semibold text-white transition-all duration-300 hover:opacity-90"
          style={{ backgroundColor: '#004aad' }}
        >
          Κλείστε Ραντεβού
        </a>

        {/* Mobile: CTA + Hamburger Row */}
        <div className="md:hidden flex items-center gap-2">
          <button
            className="px-4 py-2 rounded-lg text-sm font-semibold text-white"
            style={{ backgroundColor: '#004aad' }}
          >
            Κράτηση 
          </button>
          <button
            className="p-2 rounded-lg transition-colors"
            style={{ color: '#004aad' }}
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
          mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col px-4 pb-6 gap-1 bg-white">
          {/* Services Accordion item */}
          <div className="border-b border-gray-100 py-3">
            <button
              onClick={() => setMobileAccordionOpen(!mobileAccordionOpen)}
              className="flex items-center justify-between w-full text-base font-semibold text-left transition-all duration-200"
              style={{ color: '#004aad' }}
            >
              <span>Υπηρεσίες</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileAccordionOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 flex flex-col gap-1 pl-4 ${mobileAccordionOpen ? 'max-h-60 mt-2 opacity-100' : 'max-h-0 opacity-0'}`}>
              {servicesList.map((service) => (
                <a
                  key={service.href}
                  href={service.href}
                  className="py-2.5 text-sm font-semibold text-gray-600 hover:text-[#004aad] border-b border-gray-50 last:border-0"
                  onClick={closeMenu}
                >
                  {service.label}
                </a>
              ))}
            </div>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-3 text-base font-semibold border-b border-gray-100 transition-all duration-200 hover:opacity-70"
              style={{ color: '#004aad' }}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://cal.eu/ermeion/physiotherapy"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 w-full py-3 rounded-lg text-base font-semibold text-white transition-all duration-300 hover:opacity-90"
            style={{ backgroundColor: '#004aad' }}
            onClick={closeMenu}
          >
            Κλείστε Ραντεβού
          </a>
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
        style={{ backgroundColor: '#004aad' }}
      >
        <source
          src="https://dcmekuaqoafogwlgnugs.supabase.co/storage/v1/object/public/Ermeion-Hero-Section-Video/ERMEION%20VIDEO.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/70 to-black/60" />

      {/* Desktop: Left-Aligned Content + Right Badge */}
      {/* Mobile: Vertical Stack Above Fold */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-12 pt-16 pb-10 md:py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-16">
        {/* Left: Text + CTA */}
        <div className="flex flex-col md:max-w-[850px]">
          {/* Title */}
          <h1
            className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white leading-tight mb-8 md:mb-7"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}
          >
            Εξειδικευμένο Κέντρο Φυσικοθεραπείας για Μυοσκελετικούς Πόνους στην Θεσσαλονίκη.
          </h1>

          {/* Value Proposition Checkmarks */}
          <ul className="flex flex-col gap-3 md:gap-2.5 mb-10 md:mb-7">
            {[
              'Εξειδίκευση στη σπονδυλική στήλη',
              'Πιστοποιημένος McKenzie',
              '10+ χρόνια εμπειρίας',
              'Συμβεβλημένος με ΕΟΠΥΥ',
              'Αποδεκτές όλες οι ιδιωτικές ασφαλιστικές',
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-white text-sm md:text-base font-bold">
                <span className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: '#004aad' }}>
                  &#10003;
                </span>
                <span style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>{item}</span>
              </li>
            ))}
          </ul>

          {/* Main CTA */}
          <div className="flex flex-col items-center md:items-start gap-3 w-full md:w-fit">
            <a
              href="https://cal.eu/ermeion/physiotherapy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full md:w-fit px-12 py-4 rounded-xl text-base md:text-lg font-bold text-white transition-all duration-300 shadow-lg hover:scale-[1.02]"
              style={{ backgroundColor: '#004aad' }}
            >
              <CalendarCheck className="w-5 h-5" />
              Κλείστε Ραντεβού
            </a>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-xs md:text-sm text-white/70 font-medium text-center md:text-left">
              <span>Δίπλα σε στάσεις λεωφορείων και μετρό</span>
            </div>
          </div>
        </div>

        {/* Right: Google Review Badge (Desktop) / Centered Below CTA (Mobile) */}
        <div className="flex justify-center md:justify-end mt-10 md:mt-0 md:shrink-0">
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
            <p className="text-sm md:text-base font-semibold" style={{ color: '#004aad' }}>
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
        style={{ color: '#1f2937' }}
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
    'Χρόνιο πόνο στη μέση, οσφυαλγία και δισκοκήλες',
    'Τραυματισμό στο γόνατο, στο ισχίο ή στον αστράγαλο',
    'Αθλητικούς τραυματισμούς (sports rehab) και δυσκαμψία',
    'Πόνο στον αυχένα, στους ώμους και προβλήματα στάσης σώματος',
    'Τενοντοπάθειες, τραυματισμό στροφικού πετάλου και ρήξη υπερακανθίου',
    'Πόνο στον καρπό, στον αγκώνα, στο χέρι και κακώσεις από επαναλαμβανόμενες κινήσεις',
  ];

  return (
    <section className="bg-white py-16 md:py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

        {/* Left Column */}
        <div className="w-full lg:w-[55%] flex flex-col">
          {/* Headline */}
          <h2 className="text-2xl sm:text-4xl md:text-4xl font-extrabold leading-tight mb-8">
            <span style={{ color: '#004aad' }}>2000+ Θεσσαλονικείς</span>
            <span className="text-gray-900"> έχουν εμπιστευτεί τη φυσικοθεραπεία στο ΕΡΜΕΙΟΝ για ανακούφιση από τον πόνο, αποκατάσταση τραυματισμών και αποθεραπεία.</span>
          </h2>

          {/* Checklist header */}
          <p className="text-base sm:text-sm font-bold text-gray-900 mb-5">
            Βοηθάμε ασθενείς με:
          </p>

          {/* Checklist */}
          <ul className="flex flex-col gap-3 mb-10 lg:mb-10">
            {checklistItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ backgroundColor: '#004aad' }}
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
          </div>

          {/* CTA Button */}
          <a
            href="https://cal.eu/ermeion/physiotherapy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full lg:w-fit px-8 py-4 rounded-xl text-sm sm:text-base font-bold text-white transition-all duration-300 hover:opacity-90"
            style={{ backgroundColor: '#004aad' }}
          >
            <CalendarCheck className="w-5 h-5 shrink-0" />
            Κλείστε Ραντεβού
          </a>
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
            <p className="text-sm sm:text-sm leading-relaxed font-medium" style={{ color: '#3d3d3d' }}>
              Αυτός είναι ακριβώς ο λόγος που γίνεται το πρώτο σας ραντεβού. Αν η φυσικοθεραπεία είναι η κατάλληλη επιλογή για εσάς, θα σας εξηγήσουμε το πλάνο θεραπείας. Αν δεν χρειάζεστε συνεχιζόμενη θεραπεία, θα σας το πούμε ξεκάθαρα.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

// Certificates Carousel Section
function CertificatesCarouselSection() {
  const certificates = [
    { src: 'https://dcmekuaqoafogwlgnugs.supabase.co/storage/v1/object/public/certificates/APTH-logo.webp', alt: 'APTH' },
    { src: 'https://dcmekuaqoafogwlgnugs.supabase.co/storage/v1/object/public/certificates/dipae-logo.webp', alt: 'DIPAE' },
    { src: 'https://dcmekuaqoafogwlgnugs.supabase.co/storage/v1/object/public/certificates/ipnfa-mainlogo.webp', alt: 'IPNFA' },
    { src: 'https://dcmekuaqoafogwlgnugs.supabase.co/storage/v1/object/public/certificates/mckenzie-2.webp', alt: 'McKenzie MDT' },
    { src: 'https://dcmekuaqoafogwlgnugs.supabase.co/storage/v1/object/public/certificates/mulligan-concept-logo.webp', alt: 'Mulligan Concept' },
    { src: 'https://dcmekuaqoafogwlgnugs.supabase.co/storage/v1/object/public/certificates/psf-logo2.webp', alt: 'PSF' },
  ];

  const doubled = [...certificates, ...certificates];

  return (
    <section className="bg-white border-t border-gray-100 py-14 md:py-20">
      <p
        className="text-center text-xs sm:text-sm font-extrabold tracking-[0.25em] mb-10 md:mb-14 px-4"
        style={{ color: '#1f2937' }}
      >
        ΠΙΣΤΟΠΟΙΗΣΕΙΣ & ΕΞΕΙΔΙΚΕΥΣΕΙΣ
      </p>

      <div
        className="relative overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        }}
      >
        <div className="insurance-track">
          {doubled.map((cert, i) => (
            <div
              key={i}
              className="flex items-center justify-center shrink-0 px-8 md:px-12"
            >
              <img
                src={cert.src}
                alt={cert.alt}
                className="h-28 sm:h-32 w-40 sm:w-48 object-contain"
                draggable={false}
              />
            </div>
          ))}
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
          className="text-4xl md:text-6xl font-extrabold mb-4 max-w-4xl"
          style={{ color: '#004aad' }}
        >
          Μέθοδος ΜcKenzie
        </h2>
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
                  style={{ backgroundColor: '#004aad' }}
                />
              </div>
              <h3
                className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold"
                style={{ color: '#004aad' }}
              >
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3
                className="md:hidden block text-2xl mb-4 text-left font-bold"
                style={{ color: '#004aad' }}
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
              backgroundColor: '#004aad',
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
          <div className="flex items-center gap-3 mb-3">
            <span
              className="flex items-center justify-center w-9 h-9 rounded-full text-white shrink-0"
              style={{ backgroundColor: '#004aad' }}
            >
              <ClipboardEdit className="w-5 h-5" />
            </span>
          </div>
          <p
            className="text-base leading-relaxed mb-4"
            style={{ color: '#1f2937' }}
          >
            Η πρώτη επίσκεψη περιλαμβάνει τη λήψη λεπτομερούς ιστορικού. Μετά θα προχωρήσουμε στη κλινική εξέταση, όπου θα εκτελείτε συγκεκριμένες ασκήσεις ή/και θα μένετε σε συγκεκριμένες θέσεις. Οι αλλαγές των συμπτωμάτων και του εύρους κίνησης, θα μου παρέχουν τις πληροφορίες για την κατάταξη του προβλήματος σας.
          </p>
          <div className="flex flex-wrap gap-2">
            <span
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{ backgroundColor: '#eaf0f7', color: '#004aad' }}
            >
              Λήψη ιστορικού
            </span>
            <span
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{ backgroundColor: '#eaf0f7', color: '#004aad' }}
            >
              Κλινική εξέταση
            </span>
            <span
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{ backgroundColor: '#eaf0f7', color: '#004aad' }}
            >
              Δοκιμαστικές κινήσεις
            </span>
          </div>
        </div>
      ),
    },
    {
      title: 'Κατάταξη',
      content: (
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <div className="flex items-center gap-3 mb-3">
            <span
              className="flex items-center justify-center w-9 h-9 rounded-full text-white shrink-0"
              style={{ backgroundColor: '#004aad' }}
            >
              <ClipboardCheck className="w-5 h-5" />
            </span>
          </div>
          <p
            className="text-base leading-relaxed mb-4"
            style={{ color: '#1f2937' }}
          >
            Κάθε σύνδρομο αντιμετωπίζεται, σύμφωνα με τη μοναδική φύση του, με ειδικές μηχανικές διαδικασίες, συμπεριλαμβανομένων των επαναλαμβανόμενων κινήσεων και των παρατεταμένων θέσεων.
          </p>
          <div className="flex flex-wrap gap-2">
            <span
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{ backgroundColor: '#eaf0f7', color: '#004aad' }}
            >
              Μηχανική διάγνωση
            </span>
            <span
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{ backgroundColor: '#eaf0f7', color: '#004aad' }}
            >
              Ταξινόμηση συνδρόμου
            </span>
            <span
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{ backgroundColor: '#eaf0f7', color: '#004aad' }}
            >
              Εξατομικευμένη προσέγγιση
            </span>
          </div>
        </div>
      ),
    },
    {
      title: 'Θεραπεία',
      content: (
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <div className="flex items-center gap-3 mb-3">
            <span
              className="flex items-center justify-center w-9 h-9 rounded-full text-white shrink-0"
              style={{ backgroundColor: '#004aad' }}
            >
              <Dumbbell className="w-5 h-5" />
            </span>
          </div>
          <p
            className="text-base leading-relaxed mb-3"
            style={{ color: '#1f2937' }}
          >
            Χρησιμοποιώντας τα στοιχεία της αξιολόγησης:
          </p>
          <ul className="flex flex-col gap-2 mb-3">
            <li className="flex items-start gap-2 text-base leading-relaxed" style={{ color: '#1f2937' }}>
              <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#004aad' }} />
              <span>Θα σας δώσω ειδικές ασκήσεις και συμβουλές σχετικά με τη στάση σώματος και τους επιβαρυντικούς παράγοντες.</span>
            </li>
            <li className="flex items-start gap-2 text-base leading-relaxed" style={{ color: '#1f2937' }}>
              <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#004aad' }} />
              <span>Αν χρειαστεί, θα εφαρμόσω τεχνικές Manual Therapy - Χειροθεραπεία</span>
            </li>
            <li className="flex items-start gap-2 text-base leading-relaxed" style={{ color: '#1f2937' }}>
              <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#004aad' }} />
              <span>Με τη σωστή αυτοθεραπεία και τη δική σας ενεργή συμμετοχή, εξοικονομούμε χρόνο και χρήμα.</span>
            </li>
          </ul>
          <p
            className="text-base leading-relaxed mb-4"
            style={{ color: '#1f2937' }}
          >
            Στόχος είναι το καλύτερο αποτέλεσμα με τις λιγότερες δυνατές συνεδρίες, μέσω της κατάλληλης καθοδήγησης.
          </p>
          <div className="flex flex-wrap gap-2">
            <span
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{ backgroundColor: '#eaf0f7', color: '#004aad' }}
            >
              Ειδικές ασκήσεις
            </span>
            <span
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{ backgroundColor: '#eaf0f7', color: '#004aad' }}
            >
              Manual Therapy
            </span>
            <span
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{ backgroundColor: '#eaf0f7', color: '#004aad' }}
            >
              Καθοδήγηση
            </span>
          </div>
        </div>
      ),
    },
    {
      title: 'Πρόληψη',
      content: (
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <div className="flex items-center gap-3 mb-3">
            <span
              className="flex items-center justify-center w-9 h-9 rounded-full text-white shrink-0"
              style={{ backgroundColor: '#004aad' }}
            >
              <Shield className="w-5 h-5" />
            </span>
          </div>
          <p
            className="text-base leading-relaxed mb-4"
            style={{ color: '#1f2937' }}
          >
            Μαθαίνοντας πώς να αντιμετωπίζετε μόνος/μόνη σας το τρέχον πρόβλημα, μπορείτε να μάθετε και πώς να ελαχιστοποιήσετε τον κίνδυνο υποτροπής. Επίσης σε περίπτωση υποτροπής μπορείτε πλέον να ασχοληθείτε εγκαίρως με τα συμπτώματα και να έχετε τον έλεγχο της θεραπείας, ακίνδυνα και αποτελεσματικά. Τα υποτροπιάζοντα προβλήματα είναι πιθανότερο να προληφθούν μέσω της αυτοθεραπείας παρά μέσω μιας παθητικής φροντίδας.
          </p>
          <div className="flex flex-wrap gap-2">
            <span
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{ backgroundColor: '#eaf0f7', color: '#004aad' }}
            >
              Αυτοθεραπεία
            </span>
            <span
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{ backgroundColor: '#eaf0f7', color: '#004aad' }}
            >
              Πρόληψη υποτροπής
            </span>
            <span
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{ backgroundColor: '#eaf0f7', color: '#004aad' }}
            >
              Έλεγχος συμπτωμάτων
            </span>
          </div>
        </div>
      ),
    },
  ];

  return <Timeline data={processSteps} />;
}

function AboutOwnerSection() {
  return (
    <section id="about-owner" className="py-20 md:py-28 bg-gray-50 border-t border-gray-100 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 md:px-16">
        <div className="flex flex-col lg:grid lg:grid-cols-5 lg:grid-rows-2 gap-12 lg:gap-16 lg:items-start">
          {/* Left: Content (part 1) — subtitle, heading, intro paragraph */}
          <div className="w-full lg:col-span-3 lg:col-start-1 lg:row-start-1 order-1">
            <span
              className="text-xs md:text-sm font-bold uppercase tracking-widest block mb-3"
              style={{ color: '#3d3d3d' }}
            >
              Ο Φυσικοθεραπευτής μας
            </span>
            <h2
              className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight"
            >
              <span style={{ color: '#004aad', textShadow: '0 2px 8px rgba(0,74,173,0.25)' }}>Ιωάννης Μιχαηλίδης</span>
              <span className="text-gray-900">, PT, BSc, BSc, Cert. MDT, IPNFA Advanced</span>
            </h2>
            <p className="text-base md:text-lg text-gray-800 mb-6 leading-relaxed">
              Ονομάζομαι Ιωάννης Μιχαηλίδης, ιδιοκτήτης και υπεύθυνος φυσικοθεραπευτής του ΕΡΜΕΙΟΝ. Κατέχω πτυχίο Φυσικοθεραπείας από το ΔΙ.ΠΑ.Ε. και πτυχίο Τ.Ε.Φ.Α.Α. του ΑΠΘ, πιστοποιημένος θεραπευτής McKenzie MDT, IPNFA (advance), και Manual Therapy Mulligan Concept.
            </p>
          </div>

          {/* Image + membership note — on mobile appears after intro paragraph, on desktop spans right column */}
          <div className="w-full lg:col-span-2 lg:col-start-4 lg:row-start-1 lg:row-span-2 lg:self-center order-2 flex justify-center">
            <div className="relative w-full max-w-[340px] md:max-w-[380px]">
              {/* Decorative background shape */}
              <div 
                className="absolute -inset-4 rounded-2xl opacity-10 blur-xl"
                style={{ backgroundColor: '#004aad' }}
              />
              <img
                src="https://dcmekuaqoafogwlgnugs.supabase.co/storage/v1/object/public/ABOUT/giannis.webp"
                alt="Ιωάννης Μιχαηλίδης - Φυσικοθεραπευτής ΕΡΜΕΙΟΝ"
                className="relative z-10 w-full aspect-[4/5] object-cover rounded-2xl shadow-xl border-4 border-white transition-transform duration-500 hover:scale-[1.02] mx-auto"
              />
              <p className="relative z-10 mt-4 text-center text-sm font-bold" style={{ color: '#3d3d3d' }}>
                Μέλος του Πανελλήνιου Συλλόγου Φυσικοθεραπευτών
              </p>
            </div>
          </div>

          {/* Left: Content (part 2) — remaining paragraph + specializations */}
          <div className="w-full lg:col-span-3 lg:col-start-1 lg:row-start-2 order-3">
            <p className="text-base md:text-lg text-gray-800 mb-8 leading-relaxed">
              Παραμένω ενημερωμένος για τις εξελίξεις στον τομέα μου και οι ασθενείς μου συχνά βλέπουν αποτελέσματα που η ‘συμβατική’ φυσικοθεραπεία δεν έχει καταφέρει να επιτύχει.
            </p>
            
            {/* Specialization List */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-xl border border-gray-200/60 shadow-sm">
                <h4 className="font-bold text-sm mb-1" style={{ color: '#004aad' }}>Cred.MDT</h4>
                <p className="text-xs text-gray-800 leading-relaxed">
                  Αντιμετώπιση πόνου σπονδυλικής στήλης & περιφερειακών αρθρώσεων.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200/60 shadow-sm">
                <h4 className="font-bold text-sm mb-1" style={{ color: '#004aad' }}>Μέθοδος IPNFA</h4>
                <p className="text-xs text-gray-800 leading-relaxed">
                  Αντιμετώπιση νευρολογικών παθήσεων & μετεγχειρητική αποκατάσταση.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200/60 shadow-sm">
                <h4 className="font-bold text-sm mb-1" style={{ color: '#004aad' }}>Mulligan Concept</h4>
                <p className="text-xs text-gray-800 leading-relaxed">
                  Manual Therapy και ήπιοι κινητοποιητικοί χειρισμοί για άμεση ανακούφιση.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Why Choose Us Section Component
function WhyChooseUsSection() {
  const differentiators = [
    {
      badge: "Ταχύτητα",
      title: "3x Γρηγορότερη Επίτευξη Στόχων",
      description: "Φτάσε τον στόχο σου 3x φορές γρηγορότερα χωρίς να χρειαστεί να εγκαταλείψεις τον ενεργό τρόπο ζωής σου.",
      icon: Zap,
      highlight: true,
    },
    {
      badge: "Υποστήριξη",
      title: "24/7 Επικοινωνία & Υποστήριξη",
      description: "Είμαστε δίπλα σου όποτε μας χρειαστείς μέσω τηλεφώνου, μηνυμάτων (SMS/Viber) και email.",
      icon: PhoneCall,
      highlight: false,
    },
    {
      badge: "Εξατομίκευση",
      title: "1 Ώρα Ατομικής Συνεδρίας",
      description: "Κάθε συνεδρία περιλαμβάνει μία ολόκληρη ώρα εξειδικευμένης φυσικοθεραπείας με εμένα προσωπικά.",
      icon: Clock,
      highlight: false,
    },
    {
      badge: "Υποδομές",
      title: "100 τ.μ. Χώρος Ατομικής Θεραπείας",
      description: "Ένας υπερσύγχρονος, άνετος και πλήρως εξοπλισμένος χώρος αφιερωμένος αποκλειστικά στη δική σου αποκατάσταση.",
      icon: Compass,
      highlight: false,
    },
    {
      badge: "Αξιολόγηση",
      title: "Εστίαση στη Ρίζα του Προβλήματος",
      description: "Δεν αντιμετωπίζουμε απλώς τα συμπτώματα. Αναλύουμε σε βάθος για να βρούμε την πραγματική αιτία του πόνου.",
      icon: Target,
      highlight: false,
    },
    {
      badge: "Αποτέλεσμα",
      title: "Αποτελέσματα Μέσω Ενδυνάμωσης",
      description: "Δίνουμε έμφαση στην ενδυνάμωση και την σωστή εκτέλεση των ασκήσεων.",
      icon: ShieldCheck,
      highlight: false,
    },
    {
      badge: "Ευελιξία",
      title: "Εξοικονόμηση Χρόνου",
      description: "Δεσμεύομαι εξαιρετικά αποτελέσματα ακόμη και μία φορά την εβδομάδα φυσικοθεραπεία.",
      icon: CalendarDays,
      highlight: false,
    },
  ];

  return (
    <section id="why-choose-us-details" className="py-20 md:py-28 bg-gray-50 border-t border-b border-gray-100 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 md:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="text-xs md:text-sm font-bold uppercase tracking-widest block mb-3"
            style={{ color: '#004aad' }}
          >
            Γιατί να επιλέξετε το ΕΡΜΕΙΟΝ
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight text-gray-900">
            Η διαφορά μας στην πράξη
          </h2>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
            Σχεδιάσαμε μια εμπειρία φυσικοθεραπείας που σέβεται τον χρόνο σας και εστιάζει στη ρίζα του προβλήματος.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, idx) => {
            const IconComponent = item.icon;
            
            if (item.highlight) {
              return (
                <div 
                  key={idx}
                  className="col-span-1 md:col-span-2 lg:col-span-2 relative overflow-hidden rounded-3xl p-8 md:p-10 shadow-lg border border-transparent transition-all duration-300 hover:scale-[1.01] hover:shadow-xl flex flex-col justify-between text-white"
                  style={{ 
                    background: 'linear-gradient(135deg, #004aad 0%, #002d6a 100%)'
                  }}
                >
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none" />
                  
                  <div>
                    <span className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-6">
                      {item.badge}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-extrabold mb-4 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-2xl">
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="mt-8 flex items-center justify-between">
                    <span className="text-sm font-semibold text-white/70">Μάθετε πώς δουλεύουμε &rarr;</span>
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-8 border border-gray-200/60 shadow-sm transition-all duration-300 hover:scale-[1.01] hover:shadow-md hover:border-gray-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-block bg-gray-100 text-gray-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: '#eaf0f7', color: '#004aad' }}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-800 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
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
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3" style={{ color: '#004aad' }}>
              Τι λένε οι ασθενείς μας
            </h2>
            <p className="text-base md:text-lg max-w-xl" style={{ color: '#1f2937' }}>
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
              <p className="text-xs font-bold" style={{ color: '#004aad' }}>5/5 · 913+ κριτικές</p>
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
                backgroundColor: isCenter ? '#004aad' : '#ffffff',
                borderColor: isCenter ? '#004aad' : '#dce5ef',
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
                  style={{ color: isCenter ? '#ffffff' : '#004aad' }}
                >
                  "{t.testimonial}"
                </p>
              </div>
              <p
                className="absolute bottom-6 left-6 right-6 text-xs sm:text-sm italic font-semibold tracking-wide"
                style={{ color: isCenter ? 'rgba(255,255,255,0.8)' : '#1f2937' }}
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
            className="flex h-12 w-12 items-center justify-center border-2 transition-all duration-200 hover:border-[#004aad]"
            style={{ backgroundColor: '#ffffff', borderColor: '#dce5ef', color: '#004aad' }}
            aria-label="Προηγούμενη κριτική"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => handleMove(1)}
            className="flex h-12 w-12 items-center justify-center border-2 transition-all duration-200 hover:border-[#004aad]"
            style={{ backgroundColor: '#ffffff', borderColor: '#dce5ef', color: '#004aad' }}
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
          style={{ borderColor: '#004aad', color: '#004aad' }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#004aad')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          Δείτε όλες τις κριτικές μας
        </a>
      </div>
    </section>
  );
}

const officeImages = [
  {
    url: "https://dcmekuaqoafogwlgnugs.supabase.co/storage/v1/object/public/Office%20images/grafeio.webp",
    alt: "Γραφείο υποδοχής και αξιολόγησης"
  },
  {
    url: "https://dcmekuaqoafogwlgnugs.supabase.co/storage/v1/object/public/Office%20images/gym.webp",
    alt: "Χώρος θεραπευτικής άσκησης και αποκατάστασης"
  },
  {
    url: "https://dcmekuaqoafogwlgnugs.supabase.co/storage/v1/object/public/Office%20images/gym2.webp",
    alt: "Εξοπλισμός θεραπευτικής εκγύμνασης"
  },
  {
    url: "https://dcmekuaqoafogwlgnugs.supabase.co/storage/v1/object/public/Office%20images/office3.webp",
    alt: "Σύγχρονος εξοπλισμός φυσικοθεραπείας"
  },
  {
    url: "https://dcmekuaqoafogwlgnugs.supabase.co/storage/v1/object/public/Office%20images/office4.webp",
    alt: "Λεπτομέρεια χώρου θεραπείας"
  },
  {
    url: "https://dcmekuaqoafogwlgnugs.supabase.co/storage/v1/object/public/Office%20images/therapy-office.webp",
    alt: "Δωμάτιο Θεραπείας / Ηλεκτροθεραπείας"
  }
];

function OfficeCarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % officeImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + officeImages.length) % officeImages.length);
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="py-24 px-6 md:px-16 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <h2
            className="text-3xl md:text-4xl font-extrabold mb-3 leading-tight"
            style={{ color: '#004aad' }}
          >
            Ο Χώρος Θεραπείας
          </h2>
          <p className="text-sm md:text-base uppercase tracking-widest font-semibold" style={{ color: '#1f2937' }}>
            Ένας σύγχρονος, πλήρως εξοπλισμένος και φιλόξενος χώρος σχεδιασμένος για τη δική σας άνεση και αποκατάσταση.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative overflow-hidden rounded-2xl shadow-xl border border-gray-100"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Slides Track */}
          <div className="relative aspect-[16/10] md:aspect-[21/9] w-full overflow-hidden bg-gray-50">
            <motion.div
              className="flex h-full w-full cursor-grab active:cursor-grabbing"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                const swipeThreshold = 50;
                if (info.offset.x < -swipeThreshold) {
                  nextSlide();
                } else if (info.offset.x > swipeThreshold) {
                  prevSlide();
                }
              }}
            >
              {officeImages.map((img, idx) => (
                <div key={idx} className="h-full w-full shrink-0 select-none">
                  <img
                    src={img.url}
                    alt={img.alt}
                    className="h-full w-full object-cover pointer-events-none"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Controls - Left */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/80 backdrop-blur-md border border-gray-200/50 shadow-lg transition-all duration-300 hover:bg-[#004aad] hover:text-white"
            style={{ color: '#004aad' }}
            aria-label="Προηγούμενη εικόνα"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Navigation Controls - Right */}
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/80 backdrop-blur-md border border-gray-200/50 shadow-lg transition-all duration-300 hover:bg-[#004aad] hover:text-white"
            style={{ color: '#004aad' }}
            aria-label="Επόμενη εικόνα"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Bottom Indicators & Alt Text Overlay */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 pt-12 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <span className="text-white font-medium text-sm md:text-base tracking-wide select-none drop-shadow-md">
              {officeImages[currentIndex].alt}
            </span>
            <div className="flex gap-2.5">
              {officeImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'w-8 bg-white' : 'w-2.5 bg-white/40 hover:bg-white/70'
                  }`}
                  aria-label={`Μετάβαση στην εικόνα ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
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
      'Ναι, δεχόμαστε παραπεμπτικό από τον ΕΟΠΥΥ. Αυτό σημαίνει ότι μπορείτε να πραγματοποιήσετε τις συνεδρίες σας κάνοντας χρήση του ασφαλιστικού σας ταμείου και προσκομίζοντας το αντίστοιχο παραπεμπτικό. Λάβετε υπόψη ότι η ισχύς του παραπεμπτικού είναι συνήθως 60 ημέρες.',
  },
  {
    id: 'faq-2',
    question: 'Πώς διαφέρει η συνεργασία μαζί σας σε σύγκριση με άλλους φυσικοθεραπευτές;',
    answer:
      'Η φροντίδα ξεκινά με τη λήψη ενός συγκεκριμένου λεκτικού ιστορικού. Όσον αφορά το λεκτικό ιστορικό, οι ερωτήσεις που κάνω μπορεί να διαφέρουν από εκείνες άλλων επαγγελματιών. Το δεύτερο μέρος είναι η φυσική εξέταση· η μεγαλύτερη διαφορά εδώ είναι ότι μπορεί επίσης να εξετάσω μέρη του σώματος που είναι απομακρυσμένα από την περιοχή των παραπόνων. Το τρίτο μέρος της ορθοπεδικής μου αξιολόγησης είναι αυτό που διαφέρει περισσότερο. Ενώ χρησιμοποιώ σύντομα ειδικά ορθοπεδικά τεστ (όπως τεστ μηνίσκου) και μπορεί να προτείνω απεικονιστικές εξετάσεις, το τεστ στο οποίο βασίζομαι περισσότερο είναι το τεστ επαναλαμβανόμενων κινήσεων του McKenzie. Εδώ, ο ασθενής εκτελεί επαναλαμβανόμενες κινήσεις στο φυσικοθεραπευτήριο και στο σπίτι, καθώς αξιολογώ την επίδραση της συγκεκριμένης κίνησης στα συμπτώματα και τα ευρήματα της φυσικής εξέτασης από το δεύτερο μέρος. Στις περισσότερες περιπτώσεις, το πρόγραμμα στο σπίτι περιλαμβάνει την εκτέλεση μιας κίνησης περίπου κάθε 2 με 3 ώρες. Οι επόμενες επισκέψεις ακολουθούν παρόμοιο μοτίβο με την αρχική επίσκεψη, καθώς συνεχίζουμε να αξιολογούμε τις επιδράσεις των συγκεκριμένων κινήσεων όπως απαιτείται, καθορίζοντας τελικά τη διάγνωση και συνεπώς ποια θεραπεία είναι πιο αποτελεσματική για τον συγκεκριμένο ασθενή.',
  },
  {
    id: 'faq-3',
    question: 'Τι είναι η Μηχανική Διάγνωση και Θεραπεία (ΜΔΘ - McKenzie);',
    answer:
      'Η Μηχανική Διάγνωση και Θεραπεία (γνωστή και ως ΜΔΘ ή μέθοδος McKenzie) είναι ουσιαστικά μια κατανόηση της μηχανικής των αρθρώσεων. Οι φυσικοθεραπευτές που γνωρίζουν και είναι πιστοποιημένοι στην ΜΔΘ μπορούν να διαπιστώσουν ότι η πάθηση ενός ασθενούς είναι ένα μηχανικό πρόβλημα της άρθρωσης που μπορεί να διορθωθεί με 1-2 κινήσεις. Βρίσκω ότι το 70-80% των ορθοπεδικών παθήσεων ανήκουν σε αυτή την κατηγορία. Εάν η διάγνωση δεν είναι ένα μηχανικό πρόβλημα άρθρωσης, μπορούμε να κάνουμε με περισσότερη βεβαιότητα μια ξεχωριστή διάγνωση και να εφαρμόσουμε την αντίστοιχη θεραπεία. Η ΜΔΘ μου προσφέρει μια πιο ολοκληρωμένη κατανόηση του μυοσκελετικού συστήματος, που υποστηρίζω ότι οι περισσότεροι κλινικοί ιατροί δεν διαθέτουν. Δηλαδή, αναγνωρίζοντας ότι η μηχανική των αρθρώσεων παίζει καθοριστικό ρόλο στην υγεία του μυοσκελετικού συστήματος – όχι μόνο οι δομές όπως τα οστά, οι συσταλτοί ιστοί όπως οι τένοντες και οι μύες, τα νεύρα, ή οι μαλακοί ιστοί όπως οι σύνδεσμοι, οι μηνίσκοι ή ο χόνδρος. Με άλλα λόγια, πρέπει να διερευνούμε τη φυσιολογία και όχι απλώς να κατηγορούμε την ανατομία, ακόμα και αν οι εξειδικευμένες απεικονιστικές εξετάσεις (MRI, X-RAY κλπ) δείχνουν ότι η ανατομία δεν είναι τέλεια.',
  },
  {
    id: 'faq-4',
    question: 'Πόσες συνεδρίες θα χρειαστώ;',
    answer:
      'Ο αριθμός των επισκέψεων που θα χρειαστούν εξαρτάται από τη διάγνωση και τις πληροφορίες που συλλέγονται από την αξιολόγηση και τις επόμενες επισκέψεις, αλλά ο μέσος όρος είναι 6. Ένας από τους στόχους μου είναι να δώσω τη δυνατότητα στους ασθενείς να θεραπεύουν τον εαυτό τους και οι επισκέψεις μειώνονται όσο το δυνατόν περισσότερο. Με αυτό κατά νου, ο αριθμός των απαραίτητων επισκέψεων βασίζεται επίσης στο πόσο συνεπείς μπορούν να είναι οι ασθενείς με το προβλεπόμενο πρόγραμμα. Εάν η φυσικοθεραπεία δεν είναι η καλύτερη επιλογή για την επίλυση μιας διαταραχής, αυτό καθορίζεται μέσω προοδευτικών δοκιμών που συνήθως δεν υπερβαίνουν τις πέντε επισκέψεις.',
  },
  {
    id: 'faq-5',
    question: 'Πόσο καιρό χρειάζεται για να νιώσω καλύτερα;;',
    answer:
      'Όπως και με την παραπάνω ερώτηση, αυτό μπορεί να απαντηθεί καλύτερα μόλις μπορέσω να καθορίσω μια διάγνωση. Μπορεί να διαφέρει σημαντικά. Μερικές φορές μια διαταραχή αντιστρέφεται σε μία εβδομάδα. Από την άλλη πλευρά, σε περίπτωση που ένας ασθενής έχει συμπτώματα για πολλούς μήνες ή χρόνια, στην περίπτωση ορισμένων διαγνώσεων ή στην περίπτωση έλλειψης συνέπειας, η αναμενόμενη διάρκεια μπορεί να είναι μήνες. Σε αυτές τις περιπτώσεις, οι επισκέψεις γίνονται πιο αραιές και πραγματοποιούνται σε διαστήματα βάσει της αναγκαιότητας.',
  },
  {
    id: 'faq-6',
    question: 'Θα έχω ασκήσεις για το σπίτι;',
    answer: 'Φυσικά! Οι περισσότεροι, όχι όλοι, ασθενείς θα χρειαστεί να εκτελούν μία κίνηση τουλάχιστον 6 φορές την ημέρα (χωρίς να μοιράζω τυποποιημένες ασκήσεις σε Α4 κόλλα). Συνήθως διαρκεί 1-2 λεπτά. Στις περισσότερες περιπτώσεις, θα σας δοθούν οδηγίες για να κάνετε χρήσιμες αλλαγές στη στάση του σώματος στην καθημερινή σας ζωή, οι οποίες περιλαμβάνουν κυρίως την προσαρμογή του τρόπου που κάθεστε, αλλά μπορεί να περιλαμβάνουν και άλλες καταστάσεις. Για την δική σας ευκολία μπορούμε, με το κινητό σας, να βγάλουμε βίντεο για να θυμάστε εύκολα τα τιπς και την άσκηση που θα χρειαστεί να εκτελέσετε.',
  },
  {
    id: 'faq-7',
    question: 'Θα πονέσω στην θεραπεία;',
    answer:
      'Όχι απαραίτητα! Αν και σε ορισμένες περιπτώσεις ο πόνος μπορεί να μας καθοδηγεί προς τη σωστή θεραπευτική προσέγγιση, στις περισσότερες περιπτώσεις ο πόνος μειώνεται καθώς η θεραπεία προχωρά, και τα συμπτώματα βελτιώνονται σημαντικά.',
  },
  {
    id: 'faq-8',
    question: 'Μπορώ να πληρώσω με κάρτα ή IRIS;',
    answer: 'Ναι. Διαθέτω POS και έχω ενεργοποιημένο το IRIS payments.',
  },
  {
    id: 'faq-9',
    question: 'Κάνετε online Φυσικοθεραπείες;',
    answer:
      'Έχω πραγματοποιήσει online θεραπείες με επιτυχία. Έχει τις προκλήσεις του, αλλά συνήθως ξεπερνιούνται. Τα τεστ με τις επαναλαμβανόμενες κίνησεις βασίζονται στην ενεργή κίνηση και έτσι, αυτή η μέθοδος είναι κατάλληλη για βιντεοκλήσεις. Αν και οι επισκέψεις δια ζώσης προσφέρουν μια πιο προσωπική εμπειρία και είναι η προτίμηση μου όταν υπάρχει επιλογή, οι βιντεοκλήσεις είναι συνήθως εξίσου αποτελεσματικές, αλλά όχι πάντα.',
  },
  {
    id: 'faq-10',
    question: 'Τα Σαββατοκύριακα εργάζεστε;',
    answer:
      'Εκτός από τις κανονικές ώρες εργασίας, μπορώ να δω ασθενείς και τα Σαββατοκύριακα αν είναι πραγματική ανάγκη.',
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
          <p className="text-gray-800 lg:text-lg">
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
                  <span className="font-bold text-gray-900 sm:py-1 lg:py-2 lg:text-lg">
                    {item.question}
                  </span>
                  <span className="shrink-0 text-gray-700 transition-transform duration-300" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
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
                    <p className="text-gray-800 lg:text-lg leading-relaxed">
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
  'Λεπτομερής αξιολόγηση',
  'Επιστημονική προσέγγιση',
  'Σαφής επικοινωνία',
  'Μετρήσιμη πρόοδος',
];

function FinalCTASection() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32 w-full text-center bg-gradient-to-br from-[#003882] via-[#004aad] to-[#001f4d] scroll-mt-20">
      {/* Custom Styles for Keyframe Animations */}
      <style>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer-hover:hover .shimmer-slide {
          animation: shimmer 1.5s infinite;
        }
      `}</style>

      {/* Subtle background glow effect */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none opacity-20 blur-[100px]"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(0,74,173,0) 70%)' }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center">
        {/* Subtitle / Category */}

        {/* Dynamic & Persuasive Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight max-w-3xl">
          Η ΕΓΓΥΗΣΗ ΕΡΜΕΙΟΝ
        </h2>

        <p className="text-lg md:text-xl text-[#eaefeb] opacity-90 max-w-2xl mb-10 leading-relaxed font-light">
          Κάντε το πρώτο βήμα σήμερα για να ανακτήσετε την ελευθερία κινήσεών σας με ένα εξατομικευμένο πλάνο αποκατάστασης.
        </p>

        {/* Benefits Grid */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-12 max-w-3xl">
          {guaranteeItems.map((item, i) => (
            <div 
              key={i} 
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md bg-white/5"
            >
              <span className="w-2 h-2 rounded-full bg-[#38bdf8]" />
              <span className="text-white font-medium text-sm md:text-base">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Pulsing Animated Button */}
        <div className="relative group">
          {/* Button Outer Glow wrapper */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl blur-lg opacity-45 group-hover:opacity-80 transition duration-1000 group-hover:duration-200 animate-pulse" />
          
          <a
            href="#contact"
            className="relative flex items-center gap-3 px-12 py-5 rounded-xl font-extrabold text-lg md:text-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-2xl overflow-hidden bg-white text-[#004aad] animate-shimmer-hover"
          >
            {/* Shimmer overlay effect */}
            <span className="shimmer-slide absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full" />
            
            <CalendarCheck className="w-6 h-6" />
            ΚΛΕΙΣΤΕ ΡΑΝΤΕΒΟΥ
          </a>
        </div>

      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  const navLinks = [
    { label: 'Αρχική', href: '#' },
    { label: 'Υπηρεσίες', href: '#mckenzie' },
    { label: 'Γνωρίστε με', href: '#about-owner' },
    { label: 'Αξιολογήσεις', href: '#testimonials' },
    { label: 'Συχνές Ερωτήσεις', href: '#faq' },
    { label: 'Επικοινωνία', href: '#contact' },
  ];

  const openingHours = [
    { day: 'Δευτέρα', hours: '9 π.μ.–2 μ.μ., 4–9 μ.μ.' },
    { day: 'Τρίτη', hours: '9 π.μ.–2 μ.μ., 4–9 μ.μ.' },
    { day: 'Τετάρτη', hours: '9 π.μ.–2 μ.μ., 4–9 μ.μ.' },
    { day: 'Πέμπτη', hours: '9 π.μ.–2 μ.μ., 4–9 μ.μ.' },
    { day: 'Παρασκευή', hours: '9 π.μ.–2 μ.μ., 4–8 μ.μ.' },
    { day: 'Σάββατο', hours: 'Κλειστά' },
    { day: 'Κυριακή', hours: 'Κλειστά' },
  ];

  const socials = [
    { label: 'Instagram', href: 'https://www.instagram.com/ermeionphysio/', path: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2z' },
    { label: 'Facebook', href: 'https://www.facebook.com/ErmeionPhysio', path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
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
            <div className="flex items-start gap-2.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#5b8cff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>Παπάφη 92, Θεσσαλονίκη, 544 53</span>
            </div>
            <div className="flex items-center gap-2.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#5b8cff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.6 1.26h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.67A16 16 0 0 0 15.91 16.5l.77-.77a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <a href="tel:2310940100" className="transition-colors duration-200 hover:underline" style={{ color: '#ffffff' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#5b8cff')} onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}>231 094 0100</a>
            </div>
            <div className="flex items-center gap-2.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#5b8cff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.6 1.26h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.67A16 16 0 0 0 15.91 16.5l.77-.77a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <a href="tel:6988404234" className="transition-colors duration-200 hover:underline" style={{ color: '#ffffff' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#5b8cff')} onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}>698 840 4234</a>
            </div>
            <div className="flex items-center gap-2.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#5b8cff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <a href="mailto:ermeion@outlook.com" className="transition-colors duration-200 hover:underline" style={{ color: '#ffffff' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#5b8cff')} onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}>ermeion@outlook.com</a>
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

        {/* Opening hours column */}
        <div>
          <p className="text-xs uppercase tracking-widest font-semibold mb-5" style={{ color: '#5b8cff' }}>Ωράριο Λειτουργίας</p>
          <ul className="flex flex-col gap-2 text-sm" style={{ color: '#ffffff' }}>
            {openingHours.map((entry) => (
              <li key={entry.day} className="flex flex-col gap-0.5">
                <span className="font-semibold">{entry.day}</span>
                <span className={entry.hours === 'Κλειστά' ? 'opacity-70' : 'opacity-90'}>{entry.hours}</span>
              </li>
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
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
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
  const [currentPage, setCurrentPage] = useState<'home' | 'mckenzie' | 'tecar' | 'spine-pain' | 'exercise'>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#mckenzie') {
        setCurrentPage('mckenzie');
        window.scrollTo({ top: 0, behavior: 'instant' as any });
      } else if (hash === '#tecar') {
        setCurrentPage('tecar');
        window.scrollTo({ top: 0, behavior: 'instant' as any });
      } else if (hash === '#spine-pain') {
        setCurrentPage('spine-pain');
        window.scrollTo({ top: 0, behavior: 'instant' as any });
      } else if (hash === '#exercise') {
        setCurrentPage('exercise');
        window.scrollTo({ top: 0, behavior: 'instant' as any });
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      {currentPage === 'home' ? (
        <>
          <HeroSection />
          <InsuranceCarouselSection />
          <WhyErmeionSection />
          <TestimonialsSection />
          <ProcessSection />
          <AboutOwnerSection />
          <CertificatesCarouselSection />
          <WhyChooseUsSection />
          <OfficeCarouselSection />
          <FAQSection />
          <FinalCTASection />
        </>
      ) : currentPage === 'mckenzie' ? (
        <McKenziePage onNavigate={(hash) => { window.location.hash = hash; }} />
      ) : currentPage === 'tecar' ? (
        <TecarPage onNavigate={(hash) => { window.location.hash = hash; }} />
      ) : currentPage === 'spine-pain' ? (
        <SpinePainPage onNavigate={(hash) => { window.location.hash = hash; }} />
      ) : (
        <ExercisePage onNavigate={(hash) => { window.location.hash = hash; }} />
      )}
      <Footer />
    </div>
  );
}

export default App;
