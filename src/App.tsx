import { useState, useEffect, useRef, createContext, useContext, forwardRef, useCallback } from 'react';
import {
  useScroll,
  useTransform,
  motion,
  useInView,
} from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronRight, ChevronDown, Activity, Bone, Brain, Heart, Scissors, Target, Menu, X } from 'lucide-react';

// Navbar Component
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileOpen(false);

  const navLinks = [
    { href: '#services', label: 'Υπηρεσίες' },
    { href: '#process', label: 'Διαδικασία' },
    { href: '#why-us', label: 'Αξιολογήσεις' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled || mobileOpen ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-8 py-1">
          {/* Logo */}
          <img src="/logo.png" alt="Ερμείον" style={{ height: '76px' }} className="w-auto object-contain" />

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
            className="hidden md:block px-6 py-2.5 rounded-lg text-base font-semibold text-white transition-all duration-300 hover:opacity-90"
            style={{ backgroundColor: '#17236a' }}
          >
            Κλείστε Ραντεβού
          </button>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: '#17236a' }}
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col px-6 pb-6 gap-1 bg-white">
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
    </>
  );
}

// Hero Section Component
function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        style={{
          backgroundColor: '#17236a',
        }}
      >
        <source
          src="https://dcmekuaqoafogwlgnugs.supabase.co/storage/v1/object/public/Ermeion-Hero-Section-Video/Manual-Therapy.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-[700px] text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Αν ο πόνος σε εμποδίζει να ζεις όπως θέλεις — εδώ βρίσκεις τη λύση.
        </h1>
        <h2
          className="text-lg md:text-xl font-medium mb-10"
          style={{ color: '#eaf0f7' }}
        >
          Εξατομικευμένη & επιστημονικά τεκμηριωμένη φυσιοθεραπεία που αντιμετωπίζει την πραγματική αιτία του προβλήματος σας.
        </h2>
        <div className="flex flex-row justify-center gap-4 flex-wrap">
          <button
            className="px-8 py-3 rounded-lg font-bold text-base transition-all duration-300 hover:opacity-90"
            style={{ backgroundColor: '#ffffff', color: '#17236a' }}
          >
            Κλείστε Ραντεβού Τώρα
          </button>
          <button
            className="px-8 py-3 rounded-lg font-bold text-base transition-all duration-300 hover:bg-white hover:text-[#17236a]"
            style={{
              backgroundColor: 'transparent',
              border: '2px solid #ffffff',
              color: '#ffffff',
            }}
          >
            Δείτε τις Υπηρεσίες μας
          </button>
        </div>
        <p
          className="text-sm mt-6 opacity-80"
          style={{ color: '#eaf0f7' }}
        >
          Πρώτη αξιολόγηση 45 λεπτά — φύγετε ξέροντας τι ακριβώς συμβαίνει.
        </p>
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
                style={{ color: '#71788f' }}
              >
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3
                className="md:hidden block text-2xl mb-4 text-left font-bold"
                style={{ color: '#71788f' }}
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
      title: 'Βήμα 1',
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
      title: 'Βήμα 2',
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
      title: 'Βήμα 3',
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
      title: 'Βήμα 4',
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
      title: 'Βήμα 5',
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

// Why Us Section Component
function WhyUsSection() {
  const reasons = [
    {
      emoji: '🔍',
      title: 'Αξιολόγηση πριν από οτιδήποτε άλλο',
      desc: 'Η πρώτη συνεδρία είναι πάντα αξιολόγηση. Βρίσκουμε την αιτία — όχι μόνο το σύμπτωμα — πριν ξεκινήσουμε οποιαδήποτε θεραπεία.',
    },
    {
      emoji: '📋',
      title: 'Εξατομικευμένο πλάνο θεραπείας',
      desc: 'Δεν υπάρχει ένα πρόγραμμα για όλους. Σου λέμε πόσες συνεδρίες χρειάζονται και τι να περιμένεις σε κάθε βήμα.',
    },
    {
      emoji: '📊',
      title: 'Αποτελέσματα που μετράς',
      desc: 'Βλέπεις διαφορά. Οι περισσότεροι ασθενείς μας παρατηρούν βελτίωση εντός των πρώτων 3 συνεδριών.',
    },
    {
      emoji: '✓',
      title: 'Δεν χρειάζεσαι παραπεμπτικό',
      desc: 'Μπορείς να κλείσεις ραντεβού απευθείας, χωρίς να χρειαστεί να επισκεφθείς πρώτα γιατρό.',
    },
  ];

  return (
    <section
      id="why-us"
      className="relative py-24 px-6 md:px-16"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/physio/1600/900)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark Overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(23, 35, 106, 0.72)' }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Top Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Γιατί οι ασθενείς μας επιστρέφουν — και μας προτείνουν
          </h2>
          <h3
            className="text-lg font-medium mb-4"
            style={{ color: '#eaf0f7' }}
          >
            Δεν αρκεί να περνάει ο πόνος. Θέλουμε να μη γυρίσει.
          </h3>
          <p
            className="text-base opacity-80"
            style={{ color: '#eaf0f7' }}
          >
            Αυτά είναι τα τέσσερα πράγματα που κάνουν τη διαφορά στο Ερμείον.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md"
            >
              <div className="flex gap-4 items-start">
                <span className="text-3xl">{reason.emoji}</span>
                <div>
                  <h4
                    className="font-bold text-lg mb-2"
                    style={{ color: '#17236a' }}
                  >
                    {reason.title}
                  </h4>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: '#71788f' }}
                  >
                    {reason.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex justify-center gap-4 flex-wrap">
          <button
            className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-white hover:text-[#17236a]"
            style={{
              backgroundColor: 'transparent',
              border: '2px solid #ffffff',
              color: '#ffffff',
            }}
          >
            Μάθετε Περισσότερα για εμάς
          </button>
          <button
            className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:opacity-90"
            style={{ backgroundColor: '#ffffff', color: '#17236a' }}
          >
            Κλείστε Ραντεβού
          </button>
        </div>
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
      <WhyUsSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
}

export default App;
