import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

interface ServicesPageProps {
  onNavigate?: (path: string) => void;
}

export default function ServicesPage({}: ServicesPageProps) {
  const services = [
    {
      id: 'mckenzie',
      title: 'Μέθοδος McKenzie (MDT)',
      description: 'Η Μέθοδος McKenzie ή γνωστή και ως Μηχανική Διάγνωση & Θεραπεία είναι μια επιστημονικά τεκμηριωμένη φυσικοθεραπευτική προσέγγιση αξιολόγησης και διαχείρισης του μυοσκελετικού πόνου.',
      path: '/ypiresies/McKenzie',
    },
    {
      id: 'spine-pain',
      title: 'Πρόληψη & Θεραπεία Σπονδυλικού Πόνου',
      description: 'Στο ΕΡΜΕΙΟΝ, αντιμετωπίζουμε τον σπονδυλικό πόνο με τρόπο σύγχρονο, εξατομικευμένο και βασισμένο σε επιστημονικά τεκμηριωμένες πρακτικές.',
      path: '/ypiresies/spine-pain',
    },
    {
      id: 'exercise',
      title: 'Θεραπευτική Άσκηση',
      description: 'Στο ΕΡΜΕΙΟΝ, η θεραπευτική άσκηση, δεν είναι απλώς γυμναστική, είναι μια επιστημονικά σχεδιασμένη παρέμβαση για κάθε άτομο ξεχωριστά. Προσαρμόζεται σε κάθε θεραπεία ανάλογα με την επαναξιολόγηση και την συμπεριφορά των συμπτωμάτων.',
      path: '/ypiresies/exercise',
    },
    {
      id: 'tecar',
      title: 'Tecar Therapy',
      description: 'Στο ΕΡΜΕΙΟΝ, η θεραπευτική άσκηση, δεν είναι απλώς γυμναστική, είναι μια επιστημονικά σχεδιασμένη παρέμβαση για κάθε άτομο ξεχωριστά. Προσαρμόζεται σε κάθε θεραπεία ανάλογα με την επαναξιολόγηση και την συμπεριφορά των συμπτωμάτων.',
      path: '/ypiresies/tecar',
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
                  <h2 className="text-2xl font-bold text-[#004aad] mb-4">
                    {service.title}
                  </h2>
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
            href="tel:+302310940100"
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
