import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, BookOpen, Sparkles, PhoneCall } from 'lucide-react';
import { articles } from './articles';
import SEO from './components/SEO';

export default function ArticlesIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Όλα τα άρθρα' },
    { id: 'pathiseis-spondylikis-stilis-lekanis', label: 'Παθήσεις Σπονδυλικής Στήλης & Λεκάνης' },
    { id: 'pathiseis-kato-akrou', label: 'Παθήσεις Κάτω Άκρου' },
    { id: 'pathiseis-ano-akrou', label: 'Παθήσεις Άνω Άκρου' },
    { id: 'pathiseis-kefalis', label: 'Παθήσεις Κεφαλής' },
  ];

  const filteredArticles =
    selectedCategory === 'all'
      ? articles
      : articles.filter((a) => a.categorySlug === selectedCategory);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <SEO
        title="Άρθρα & Παθήσεις"
        description="Ενημερωτικά επιστημονικά άρθρα για παθήσεις σπονδυλικής στήλης, λεκάνης, οσφυαλγία, αυχεναλγία, οστεοπόρωση, κήλη δίσκου και μεθόδους αποκατάστασης από το Ερμείον στη Θεσσαλονίκη."
        canonicalPath="/arthra"
      />

      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#0F1E36] via-[#1E3A8A] to-[#1E3A8A] text-white py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-blue-200 text-xs font-semibold uppercase tracking-wider mb-4 border border-white/15">
            <BookOpen className="w-4 h-4" />
            Επιστημονική Ενημέρωση
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Άρθρα & Παθήσεις
          </h1>
          <p className="max-w-2xl mx-auto text-blue-100 text-base md:text-lg leading-relaxed">
            Μάθετε περισσότερα για τις αιτίες, τα συμπτώματα και τη σύγχρονη φυσικοθεραπευτική αντιμετώπιση των συχνότερων μυοσκελετικών παθήσεων.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-200">
          <span className="text-sm font-semibold text-slate-500 mr-2">Κατηγορίες:</span>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#1E3A8A] text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            {categories.find((c) => c.id === selectedCategory)?.label || 'Όλα τα άρθρα'}
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Εξειδικευμένες πληροφορίες και τεκμηριωμένη προσέγγιση αντιμετώπισης ({filteredArticles.length} άρθρα).
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((art) => (
            <div
              key={art.slug}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:border-[#1E3A8A]/50"
            >
              <div className="p-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#1E3A8A] bg-blue-50 px-2.5 py-1 rounded-md inline-block mb-3">
                  {art.category}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#1E3A8A] transition-colors leading-snug">
                  {art.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed line-clamp-4">
                  {art.excerpt}
                </p>
              </div>

              <div className="px-6 py-4 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between">
                <Link
                  to={`/arthra/${art.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1E3A8A] hover:text-[#162a65] transition-colors"
                >
                  Διαβάστε περισσότερα
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-16 bg-[#1E3A8A] text-white rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <div className="inline-flex items-center gap-2 text-blue-200 text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              Εξατομικευμενη Αξιολογηση
            </div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
              Αντιμετωπίζετε κάποιο από τα παραπάνω συμπτώματα;
            </h3>
            <p className="text-blue-100 text-sm md:text-base mt-2 max-w-xl">
              Κλείστε άμεσα ραντεβού για αξιολόγηση και στοχευμένη θεραπεία στο φυσικοθεραπευτήριο Ερμείον στη Θεσσαλονίκη.
            </p>
          </div>
          <a
            href="tel:2310940100"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-[#1E3A8A] font-bold text-sm transition-all whitespace-nowrap shadow-lg active:scale-95"
          >
            <PhoneCall className="w-4 h-4" />
            231 094 0100
          </a>
        </div>
      </div>
    </div>
  );
}
