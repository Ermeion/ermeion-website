import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Target, Zap, Activity, Dumbbell } from 'lucide-react';

interface ServicesPageProps {
  onNavigate?: (path: string) => void;
}

export default function ServicesPage({}: ServicesPageProps) {
  const services = [
    {
      id: 'mckenzie',
      title: 'Μέθοδος McKenzie (MDT)',
      tagline: 'Μηχανική Διάγνωση & Θεραπεία',
      description: 'Εξειδικευμένη προσέγγιση αξιολόγησης και θεραπείας για τον πόνο στην πλάτη, τον αυχένα και τις αρθρώσεις. Εστιάζει στην αυτοδιαχείριση και την πρόληψη υποτροπών.',
      path: '/ypiresies/McKenzie',
      icon: Target,
      badge: 'Πιστοποιημένος Θεραπευτής',
    },
    {
      id: 'spine-pain',
      title: 'Πρόληψη & Θεραπεία Σπονδυλικού Πόνου',
      tagline: 'Οσφυαλγία, Αυχεναλγία & Κήλες',
      description: 'Ολοκληρωμένη φροντίδα για οξείες και χρόνιες παθήσεις της σπονδυλικής στήλης. Εξατομικευμένα θεραπευτικά πρωτόκολλα για άμεση ανακούφιση και αποκατάσταση.',
      path: '/ypiresies/spine-pain',
      icon: Activity,
      badge: 'Εξειδικευμένη Φροντίδα',
    },
    {
      id: 'exercise',
      title: 'Θεραπευτική Άσκηση',
      tagline: 'Ενδυνάμωση & Λειτουργική Αποκατάσταση',
      description: 'Στοχευμένα προγράμματα θεραπευτικής γυμναστικής σχεδιασμένα για την αποκατάσταση της κινητικότητας, της δύναμης και της σταθερότητας του σώματος.',
      path: '/ypiresies/exercise',
      icon: Dumbbell,
      badge: 'Εξατομικευμένο Πρόγραμμα',
    },
    {
      id: 'tecar',
      title: 'Tecar Therapy',
      tagline: 'Στοχευμένη Ραδιοσυχνότητα',
      description: 'Προηγμένη τεχνολογία μεταφοράς ενέργειας που επιταχύνει τη φυσική διαδικασία αναγέννησης των ιστών, μειώνει τη φλεγμονή και ανακουφίζει από τον πόνο.',
      path: '/ypiresies/tecar',
      icon: Zap,
      badge: 'Σύγχρονη Τεχνολογία',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-12 pb-24 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header section */}
        <div className="max-w-3xl mx-auto text-center mb-16 pt-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-[#004aad] text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#004aad] animate-pulse"></span>
            Εξειδικευμένες Υπηρεσίες
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Οι Υπηρεσίες Μας
          </h1>
          <p className="text-slate-600 text-lg md:text-xl font-normal leading-relaxed">
            Στο φυσικοθεραπευτήριο ΕΡΜΕΙΟΝ προσφέρουμε σύγχρονες, επιστημονικά τεκμηριωμένες υπηρεσίες αποκατάστασης προσαρμοσμένες στις δικές σας ανάγκες.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service) => {
            return (
              <Link
                key={service.id}
                to={service.path}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1"
              >
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 group-hover:text-[#004aad] transition-colors mb-2">
                    {service.title}
                  </h2>
                  <p className="text-sm font-semibold text-[#004aad] mb-4">
                    {service.tagline}
                  </p>
                  <p className="text-slate-600 text-base leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[#004aad] font-bold text-sm group-hover:translate-x-1 transition-transform">
                  <span>Μάθετε Περισσότερα</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA section */}
        <div className="mt-16 bg-[#004aad] rounded-3xl p-8 md:p-12 text-white text-center shadow-xl">
          <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
            Έχετε ερωτήσεις για τις θεραπείες μας;
          </h3>
          <p className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto mb-8">
            Επικοινωνήστε μαζί μας για να συζητήσουμε το πρόβλημά σας και να προγραμματίσουμε την πρώτη σας αξιολόγηση.
          </p>
          <a
            href="tel:+306988404234"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white text-[#004aad] font-extrabold text-base shadow-lg hover:bg-blue-50 transition-all active:scale-95"
          >
            <Phone className="w-5 h-5 shrink-0" />
            Καλέστε στο 6988 404234
          </a>
        </div>

      </div>
    </div>
  );
}
