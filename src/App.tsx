import { useState, useEffect, useRef, createContext, useContext, forwardRef, useCallback } from 'react';
import {
  useScroll,
  useTransform,
  motion,
  useInView,
} from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronRight, ChevronLeft, ChevronDown, Activity, Bone, Brain, Heart, Scissors, Target, Menu, X, CalendarCheck } from 'lucide-react';

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
        <img src="/logo.png" alt="Ερμείον" style={{ height: '72px' }} className="w-auto object-contain" />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-semibold transition-all duration-300 hover:opacity-80"
              style={{ color: '#17236a' }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <button
          className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-lg text-base font-semibold text-white transition-all duration-300 hover:opacity-90"
          style={{ backgroundColor: '#17236a' }}
        >
          Κλείστε Ραντεβού
        </button>

        {/* Mobile: CTA + Hamburger Row */}
        <div className="md:hidden flex items-center gap-2">
          <button
            className="px-4 py-2 rounded-lg text-sm font-semibold text-white"
            style={{ backgroundColor: '#17236a' }}
          >
            &#128197; Κράτηση
          </button>
          <button
            className="p-2 rounded-lg transition-colors"
            style={{ color: '#17236a' }}
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
              style={{ color: '#17236a' }}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <button
            className="mt-4 w-full py-3 rounded-lg text-base font-semibold text-white transition-all duration-300 hover:opacity-90"
            style={{ backgroundColor: '#17236a' }}
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
        style={{ backgroundColor: '#17236a' }}
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
        <div className="flex flex-col md:max-w-[550px]">
          {/* Title */}
          <h1
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight mb-2 md:mb-7"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}
          >
            Βραβευμένη & Πιστοποιημένη Φυσικοθεραπεία για Πόνους, Τραυματισμούς και Αποκατάσταση.
          </h1>

          {/* Subtitle */}
          <p
            className="text-sm sm:text-base md:text-base text-white/90 mb-3 md:mb-7"
            style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}
          >
            Από πόνους στη μέση, στον αυχένα και τους ώμους έως τραυματισμούς στο ισχίο, το γόνατο, τον αστράγαλο και αθλητικούς τραυματισμούς, εντοπίζουμε την αιτία και σας παρέχουμε ένα σαφές πλάνο αποκατάστασης.
          </p>

          {/* Value Proposition Checkmarks */}
          <ul className="flex flex-col gap-1.5 md:gap-2.5 mb-4 md:mb-7">
            {[
              '15+ χρόνια εμπειρίας',
              'Συμβεβλημένος με ΕΟΠΥΥ',
              'Αποδεκτές όλες οι ιδιωτικές ασφαλιστικές',
              'Κράτηση σε λιγότερο από 1 λεπτό',
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-white text-sm md:text-base font-bold">
                <span className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: '#17236a' }}>
                  &#10003;
                </span>
                <span style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>{item}</span>
              </li>
            ))}
          </ul>

          {/* Main CTA */}
          <button
            className="flex items-center justify-center gap-2 w-full md:w-fit px-8 py-4 rounded-xl text-base md:text-lg font-bold text-white transition-all duration-300 shadow-lg hover:scale-[1.02]"
            style={{ backgroundColor: '#17236a' }}
          >
            <CalendarCheck className="w-5 h-5" />
            Κλείστε Δωρεάν Συμβουλευτική
          </button>
        </div>

        {/* Right: Google Review Badge (Desktop) / Centered Below CTA (Mobile) */}
        <div className="flex justify-center md:justify-end mt-1 md:mt-0 md:shrink-0">
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
            <p className="text-sm md:text-base font-semibold" style={{ color: '#17236a' }}>
              4.9 · Βάσει 915+ αξιολογήσεων
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Services Section Component
function ServicesSection() {
  const services = [
    { title: 'Μυοσκελετική Φυσικοθεραπεία', seed: 'myo123' },
    { title: 'Αθλητική Αποκατάσταση', seed: 'sport456' },
    { title: 'Θεραπεία Αυχένα & Μέσης', seed: 'spine789' },
    { title: 'Νευρολογική Αποκατάσταση', seed: 'neuro321' },
    { title: 'Αποκατάσταση Μετά Χειρουργείο', seed: 'surgery654' },
    { title: 'Dry Needling', seed: 'needle987' },
  ];

  return (
    <section
      id="services"
      className="py-24 px-6 md:px-16"
      style={{ backgroundColor: '#eaf0f7' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
        {/* Left Column */}
        <div>
          <h2
            className="text-3xl md:text-4xl font-extrabold leading-tight mb-4"
            style={{ color: '#17236a' }}
          >
            Η κατάλληλη θεραπεία για αυτό που αντιμετωπίζεις εσύ — όχι ένα γενικό πρόγραμμα.
          </h2>
          <h3
            className="text-lg font-medium mb-4"
            style={{ color: '#71788f' }}
          >
            Κάθε πρόβλημα είναι διαφορετικό. Η προσέγγισή μας, το ίδιο.
          </h3>
          <p
            className="text-base leading-relaxed mb-8"
            style={{ color: '#71788f' }}
          >
            Από χρόνιο πόνο στη μέση μέχρι αποκατάσταση μετά από τραυματισμό — αξιολογούμε πρώτα, θεραπεύουμε μετά. Δεν ξεκινάμε συνεδρίες χωρίς να ξέρουμε ακριβώς τι χρειάζεσαι.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button
              className="px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: '#17236a' }}
            >
              Κλείστε Ραντεβού
            </button>
            <button
              className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-[#17236a] hover:text-white"
              style={{
                backgroundColor: 'transparent',
                border: '2px solid #17236a',
                color: '#17236a',
              }}
            >
              Μάθετε Περισσότερα
            </button>
          </div>
        </div>

        {/* Right Column - Services Grid */}
        <div className="grid grid-cols-2 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl h-48 transition-all duration-300 hover:scale-[1.03] cursor-pointer"
              style={{
                backgroundImage: `url(https://picsum.photos/seed/${service.seed}/400/300)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div
                className="absolute inset-0"
                style={{ backgroundColor: 'rgba(23, 35, 106, 0.55)' }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-center text-sm px-2">
                {service.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Service Carousel Section Component
type CarouselApi = NonNullable<ReturnType<typeof useEmblaCarousel>[1]>;
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];
type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: 'horizontal' | 'vertical';
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />');
  }
  return context;
}

const Carousel = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = 'horizontal',
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === 'horizontal' ? 'x' : 'y',
      },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const onSelect = useCallback((api: CarouselApi) => {
      if (!api) return;
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = useCallback(() => {
      api?.scrollNext();
    }, [api]);

    const handleKeyDown = useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === 'ArrowRight') {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );

    useEffect(() => {
      if (!api || !setApi) return;
      setApi(api);
    }, [api, setApi]);

    useEffect(() => {
      if (!api) return;
      onSelect(api);
      api.on('reInit', onSelect);
      api.on('select', onSelect);
      return () => {
        api?.off('select', onSelect);
      };
    }, [api, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation,
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={`relative ${className || ''}`}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  }
);
Carousel.displayName = 'Carousel';

const CarouselContent = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();
  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={`flex ${orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col'} ${className || ''}`}
        {...props}
      />
    </div>
  );
});
CarouselContent.displayName = 'CarouselContent';

const CarouselItem = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();
  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={`min-w-0 shrink-0 grow-0 basis-full ${orientation === 'horizontal' ? 'pl-4' : 'pt-4'} ${className || ''}`}
      {...props}
    />
  );
});
CarouselItem.displayName = 'CarouselItem';

const CarouselNext = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { scrollNext, canScrollNext } = useCarousel();
  return (
    <button
      ref={ref}
      className={`absolute h-12 w-12 rounded-full right-2 top-1/2 -translate-y-1/2 bg-white/20 border-0 hover:bg-white/40 text-white transition-all duration-300 flex items-center justify-center shadow-lg disabled:opacity-50 disabled:cursor-not-allowed ${className || ''}`}
      onClick={scrollNext}
      disabled={!canScrollNext}
      {...props}
    >
      <ChevronRight className="h-6 w-6" />
      <span className="sr-only">Next slide</span>
    </button>
  );
});
CarouselNext.displayName = 'CarouselNext';

// Service Card with dropdown
interface Service {
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: React.ElementType;
  gradient: string;
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      className="relative flex flex-col justify-between overflow-hidden rounded-3xl p-8 h-[420px]"
      style={{ background: service.gradient }}
    >
      {/* Card Content */}
      <div className="z-10 flex flex-col items-start text-left">
        <span className="mb-4 text-sm font-mono text-white/60">
          ( {service.number} )
        </span>
        <service.icon className="mb-4 h-12 w-12 text-white" />
      </div>
      <div className="z-10">
        <h3 className="mb-2 text-lg font-semibold uppercase tracking-wider text-white">
          {service.title}
        </h3>
        <p className="text-sm text-white/80 mb-4">{service.shortDescription}</p>

        {/* Dropdown Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
        >
          <span>{isExpanded ? 'Λιγότερα' : 'Περισσότερα'}</span>
          <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
        </button>

        {/* Expandable Content */}
        <div
          className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}
        >
          <p className="text-sm text-white/70 leading-relaxed">{service.fullDescription}</p>
        </div>
      </div>

      {/* Subtle overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
    </motion.div>
  );
}

function ServiceCarouselSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services: Service[] = [
    {
      number: '01',
      title: 'Μυοσκελετική Φυσικοθεραπεία',
      shortDescription: 'Αντιμετώπιση πόνου και δυσλειτουργίας μυών, ιστών και αρθρώσεων.',
      fullDescription: 'Χρησιμοποιούμε τεχνικές χειροθεραπείας, μαλάξεις και θεραπευτικές ασκήσεις για την ανακούφιση από πόνο, την βελτίωση της κινητικότητας και την ανάκαμψη μετά από τραυματισμούς.',
      icon: Activity,
      gradient: 'linear-gradient(135deg, #17236a 0%, #2d4bb8 100%)',
    },
    {
      number: '02',
      title: 'Αθλητική Αποκατάσταση',
      shortDescription: 'Επιστροφή στη δράση πιο γρήγορα και ασφαλώς μετά από αθλητικό τραυματισμό.',
      fullDescription: 'Εξειδικευμένο πρόγραμμα για αθλητές που περιλαμβάνει λειτουργική αποκατάσταση, ενδυνάμωση και προοδευτική επιστροφή στον αθλητισμό με μέτρηση φυσιολογικών παραμέτρων.',
      icon: Target,
      gradient: 'linear-gradient(135deg, #1a4568 0%, #347d9c 100%)',
    },
    {
      number: '03',
      title: 'Θεραπεία Αυχένα & Μέσης',
      shortDescription: 'Εξειδικευμένη αντιμετώπιση για προβλήματα αυχενικής και οσφύος.',
      fullDescription: 'Συνδυασμός χειροθεραπείας, μηχανικής έλξης, θεραπευτικών ασκήσεων και εργονομικής καθοδήγησης για μόνιμη λύση σε χρόνιους πόνους αυχένα και μέσης.',
      icon: Bone,
      gradient: 'linear-gradient(135deg, #2d4a3e 0%, #4a7c6a 100%)',
    },
    {
      number: '04',
      title: 'Νευρολογική Αποκατάσταση',
      shortDescription: 'Εξειδικευμένη θεραπεία για νευρολογικά περιστατικά.',
      fullDescription: 'Προγράμματα αποκατάστασης για ασθενείς με εγκεφαλικά επεισόδια, σκλήρυνση κατά πλάκας,帕arkinson και άλλα νευρολογικά προβλήματα με εξατομικευμένη προσέγγιση.',
      icon: Brain,
      gradient: 'linear-gradient(135deg, #4a3f5c 0%, #6b5b7a 100%)',
    },
    {
      number: '05',
      title: 'Μετεγχειρητική Αποκατάσταση',
      shortDescription: 'Ασφαλής και αποτελεσματική ανάρρωση μετά από χειρουργείο.',
      fullDescription: 'Συντονισμένη αποκατάσταση μετά από ορθοπεδικές επεμβάσεις (ACL, μηνίσκος, αντικατάσταση ισχίου γόνατος) με σταδιακή αύξηση φορτίου και λειτουργικότητα.',
      icon: Heart,
      gradient: 'linear-gradient(135deg, #6b3a3a 0%, #9c5252 100%)',
    },
    {
      number: '06',
      title: 'Dry Needling',
      shortDescription: 'Στοχευμένη θεραπεία για μυοπεριαρθρικά σημεία πόνου.',
      fullDescription: 'Χρήση λεπτών βελονών για την απελευθέρωση trigger points και τη μείωση μυϊκής έντασης. Ιδανικό για χρόνια μυοσκελετικά σύνδρομα και αθλητικούς τραυματισμούς.',
      icon: Scissors,
      gradient: 'linear-gradient(135deg, #3f4a5c 0%, #5a6b82 100%)',
    },
  ];

  return (
    <section id="services-carousel" className="py-24 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto mb-12">
        <h2
          className="text-3xl md:text-4xl font-extrabold mb-4"
          style={{ color: '#17236a' }}
        >
          Οι υπηρεσίες μας — εξειδικευμένες για την ανάγκη σου
        </h2>
        <p
          className="text-base md:text-lg max-w-xl"
          style={{ color: '#71788f' }}
        >
          Κάθε υπηρεσία σχεδιάστηκε με στόχο την αποτελεσματική λύση — όχι την αορίστου διάρκειας θεραπεία.
        </p>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4">
        <Carousel
          ref={ref}
          opts={{
            align: 'start',
            loop: true,
          }}
          className="relative"
        >
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ staggerChildren: 0.1 }}
          >
            <CarouselContent>
              {services.map((service, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <ServiceCard service={service} index={index} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </motion.div>
          <CarouselNext />
        </Carousel>
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
          style={{ color: '#17236a' }}
        >
          Το ταξίδι της ανάρρωσής σας
        </h2>
        <p
          className="text-sm md:text-base max-w-xl"
          style={{ color: '#71788f' }}
        >
          Μια σαφής πορεία, βήμα προς βήμα, από την πρώτη σας συνεδρία έως τη μόνιμη ανάρρωση.
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
                  style={{ backgroundColor: '#17236a' }}
                />
              </div>
              <h3
                className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold"
                style={{ color: '#17236a' }}
              >
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3
                className="md:hidden block text-2xl mb-4 text-left font-bold"
                style={{ color: '#17236a' }}
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
              backgroundColor: '#17236a',
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
            style={{ color: '#17236a' }}
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
            style={{ backgroundColor: '#eaf0f7', color: '#17236a' }}
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
            style={{ color: '#17236a' }}
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
              style={{ backgroundColor: '#eaf0f7', color: '#17236a' }}
            >
              Λεπτομερής ιστορικό
            </span>
            <span
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{ backgroundColor: '#eaf0f7', color: '#17236a' }}
            >
              Κλινική εξέταση
            </span>
            <span
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{ backgroundColor: '#eaf0f7', color: '#17236a' }}
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
            style={{ color: '#17236a' }}
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
            style={{ backgroundColor: '#eaf0f7', color: '#17236a' }}
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
            style={{ color: '#17236a' }}
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
            style={{ backgroundColor: '#eaf0f7', color: '#17236a' }}
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
            style={{ color: '#17236a' }}
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
              style={{ backgroundColor: '#eaf0f7', color: '#17236a' }}
            >
              Ασκήσεις συντήρησης
            </span>
            <span
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{ backgroundColor: '#eaf0f7', color: '#17236a' }}
            >
              Συμβουλές ergonomics
            </span>
            <span
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{ backgroundColor: '#eaf0f7', color: '#17236a' }}
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
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3" style={{ color: '#17236a' }}>
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
              <p className="text-xs font-bold" style={{ color: '#17236a' }}>5/5 · 913+ κριτικές</p>
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
                backgroundColor: isCenter ? '#17236a' : '#ffffff',
                borderColor: isCenter ? '#17236a' : '#dce5ef',
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
                  style={{ color: isCenter ? '#ffffff' : '#17236a' }}
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
            className="flex h-12 w-12 items-center justify-center border-2 transition-all duration-200 hover:border-[#17236a]"
            style={{ backgroundColor: '#ffffff', borderColor: '#dce5ef', color: '#17236a' }}
            aria-label="Προηγούμενη κριτική"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => handleMove(1)}
            className="flex h-12 w-12 items-center justify-center border-2 transition-all duration-200 hover:border-[#17236a]"
            style={{ backgroundColor: '#ffffff', borderColor: '#dce5ef', color: '#17236a' }}
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
          style={{ borderColor: '#17236a', color: '#17236a' }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#17236a')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          Δείτε όλες τις κριτικές μας
        </a>
      </div>
    </section>
  );
}



// FAQ Section Component
function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Χρειάζομαι παραπεμπτικό από γιατρό για να κάνω φυσικοθεραπεία;',
      a: 'Όχι. Μπορείτε να κλείσετε ραντεβού απευθείας στο Ερμείον χωρίς παραπεμπτικό. Αν θεωρήσουμε ότι χρειάζεστε επιπλέον ιατρική γνωμάτευση, θα σας το πούμε εμείς.',
    },
    {
      q: 'Πόσες συνεδρίες χρειάζονται συνήθως;',
      a: 'Εξαρτάται από το πρόβλημα. Οι περισσότερες οξείες παθήσεις βελτιώνονται σε 4–8 συνεδρίες. Σε χρόνια προβλήματα ή μετεγχειρητική αποκατάσταση, το πλάνο μπορεί να είναι μεγαλύτερο. Σε κάθε περίπτωση, σας λέμε την εκτίμησή μας από την πρώτη συνεδρία.',
    },
    {
      q: 'Καλύπτεται η φυσικοθεραπεία από τον ΕΟΠΥΥ;',
      a: 'Ναι, υπό προϋποθέσεις. Ο ΕΟΠΥΥ καλύπτει συγκεκριμένες παθήσεις με παραπεμπτικό από ιατρό που συμμετέχει στο σύστημα. Επικοινωνήστε μαζί μας και θα σας εξηγήσουμε τι ισχύει για την περίπτωσή σας.',
    },
    {
      q: 'Πονάει η φυσικοθεραπεία;',
      a: 'Δεν πρέπει να πονάει. Μπορεί να υπάρχει μια αίσθηση πίεσης ή κόπωσης, ιδιαίτερα στις πρώτες συνεδρίες — αλλά ποτέ οξύς πόνος. Αν κάτι σας ενοχλεί, μας το λέτε και σταματάμε αμέσως.',
    },
    {
      q: 'Τι γίνεται στην πρώτη συνεδρία;',
      a: 'Η πρώτη συνεδρία είναι πάντα αξιολόγηση. Σας ακούμε, εξετάζουμε το πρόβλημα και — αν είναι κατάλληλο — ξεκινάμε και την πρώτη θεραπεία. Φύγετε ξέροντας ακριβώς τι συμβαίνει και ποιο είναι το επόμενο βήμα.',
    },
    {
      q: 'Πού βρίσκεστε και ποιες είναι οι ώρες λειτουργίας;',
      a: 'Το ιατρείο Ερμείον βρίσκεται στη [ΔΙΕΥΘΥΝΣΗ]. Δεχόμαστε Δευτέρα–Παρασκευή 09:00–21:00 και Σάββατο 09:00–15:00. Υπάρχει χώρος στάθμευσης.',
    },
  ];

  return (
    <section
      id="faq"
      className="py-24 px-6 md:px-16 bg-white"
    >
      {/* Header */}
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h2
          className="text-3xl md:text-4xl font-extrabold mb-4"
          style={{ color: '#17236a' }}
        >
          Έχετε απορίες; Εδώ είναι οι πιο συχνές ερωτήσεις.
        </h2>
        <p style={{ color: '#71788f' }}>
          Αν δεν βρείτε αυτό που ψάχνετε, καλέστε μας απευθείας.
        </p>
      </div>

      {/* Accordion */}
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 py-5">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            >
              <span
                className="font-bold text-base"
                style={{ color: '#17236a' }}
              >
                {faq.q}
              </span>
              <span
                className="text-xl font-bold transition-all duration-300"
                style={{ color: '#17236a' }}
              >
                {openIndex === index ? '−' : '+'}
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? 'max-h-96 opacity-100 mt-3'
                  : 'max-h-0 opacity-0'
              }`}
            >
              <p
                className="text-sm leading-relaxed"
                style={{ color: '#71788f' }}
              >
                {faq.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Final CTA Section Component
function FinalCTASection() {
  return (
    <section
      className="py-24 px-6"
      style={{ backgroundColor: '#17236a' }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
          Ο πόνος δεν φεύγει μόνος του — αλλά υπάρχει λύση.
        </h2>
        <p
          className="text-lg font-medium mb-10"
          style={{ color: '#eaf0f7' }}
        >
          Κλείστε ραντεβού σήμερα και ξεκινήστε με μια πλήρη αξιολόγηση.
        </p>
        <button
          className="px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:opacity-90"
          style={{ backgroundColor: '#ffffff', color: '#17236a' }}
        >
          Κλείστε Ραντεβού Τώρα →
        </button>
        <p
          className="text-sm mt-6 opacity-70"
          style={{ color: '#eaf0f7' }}
        >
          Δεν χρειάζεστε παραπεμπτικό · Άμεση επικοινωνία · Πρώτη αξιολόγηση 45'
        </p>
      </div>
    </section>
  );
}

// Main App Component
function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ServiceCarouselSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
}

export default App;
