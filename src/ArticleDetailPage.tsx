import { useParams, Link, Navigate } from 'react-router-dom';
import { Tag, PhoneCall, ArrowLeft, ExternalLink } from 'lucide-react';
import { getArticleBySlug, articles } from './articles';
import SEO from './components/SEO';

export default function ArticleDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return <Navigate to="/arthra" replace />;
  }

  // Related articles from same category, excluding current
  const relatedArticles = articles
    .filter((a) => a.categorySlug === article.categorySlug && a.slug !== article.slug)
    .slice(0, 3);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline: article.title,
    description: article.excerpt,
    url: `https://ermeion.gr/arthra/${article.slug}`,
    image: 'https://ermeion.gr/og-image.jpg',
    inLanguage: 'el-GR',
    about: {
      '@type': 'MedicalCondition',
      name: article.title,
    },
    author: {
      '@type': 'MedicalOrganization',
      name: 'Ερμείον Φυσικοθεραπεία',
      url: 'https://ermeion.gr',
    },
    publisher: {
      '@type': 'MedicalOrganization',
      name: 'Ερμείον Φυσικοθεραπεία',
      url: 'https://ermeion.gr',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ermeion.gr/ermeion-main-logo.svg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://ermeion.gr/arthra/${article.slug}`,
    },
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <SEO
        title={article.title}
        description={article.excerpt}
        canonicalPath={`/arthra/${article.slug}`}
        ogType="article"
        schemaData={articleSchema}
      />

      {/* Breadcrumb & Navigation */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between text-xs md:text-sm text-slate-500">
          <Link
            to="/arthra"
            className="inline-flex items-center gap-1.5 text-[#1E3A8A] hover:text-[#162a65] font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Πίσω σε όλα τα άρθρα
          </Link>
          <span className="hidden sm:inline bg-blue-50 text-[#1E3A8A] px-2.5 py-1 rounded-md font-medium text-xs">
            {article.category}
          </span>
        </div>
      </div>

      {/* Main Article Container */}
      <article className="max-w-4xl mx-auto px-4 md:px-8 py-10 md:py-14">
        {/* Header */}
        <header className="mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1E3A8A] mb-3 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            <Tag className="w-3.5 h-3.5" />
            {article.category}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            {article.title}
          </h1>
          <div className="flex items-center gap-4 text-xs md:text-sm text-slate-500 pb-6 border-b border-slate-200">
            <span>Φυσικοθεραπευτήριο Ερμείον</span>
            <span>•</span>
            <span>Επιστημονική Ομάδα Ερμείον</span>
          </div>
        </header>

        {/* Article Body - Rendered verbatim */}
        <div className="bg-white rounded-3xl p-6 md:p-12 border border-slate-200/80 shadow-sm space-y-6 text-slate-700 leading-relaxed text-base md:text-lg">
          {article.sections.map((sec, idx) => {
            if (sec.type === 'p') {
              return (
                <p key={idx} className="text-slate-700 leading-relaxed">
                  {sec.text}
                </p>
              );
            }
            if (sec.type === 'h2') {
              return (
                <h2
                  key={idx}
                  className="text-2xl md:text-3xl font-bold text-slate-900 pt-6 pb-2 border-b border-slate-100 tracking-tight"
                >
                  {sec.text}
                </h2>
              );
            }
            if (sec.type === 'h3') {
              return (
                <h3
                  key={idx}
                  className="text-xl md:text-2xl font-bold text-slate-900 pt-4 pb-1 tracking-tight"
                >
                  {sec.text}
                </h3>
              );
            }
            if (sec.type === 'h4') {
              return (
                <h4 key={idx} className="text-lg md:text-xl font-semibold text-slate-900 pt-2">
                  {sec.text}
                </h4>
              );
            }
            if (sec.type === 'list' && sec.items) {
              return (
                <ul key={idx} className="space-y-2.5 my-4 pl-2">
                  {sec.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#1E3A8A] mt-2.5 flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              );
            }
            return null;
          })}

          {/* Source Link Section */}
          {article.sourceUrl && (
            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-sm text-slate-500">
              <span className="font-semibold text-slate-700">Πηγή:</span>
              <a
                href={article.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#1E3A8A] hover:underline font-medium"
              >
                {article.sourceName || article.sourceUrl}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>

        {/* Appointment CTA Box */}
        <div className="mt-12 bg-blue-50/70 border border-blue-100 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Χρειάζεστε εξατομικευμένη αντιμετώπιση;
            </h3>
            <p className="text-slate-600 text-sm mt-1 max-w-md">
              Επικοινωνήστε μαζί μας για να συζητήσουμε τα συμπτώματά σας και να σχεδιάσουμε το κατάλληλο θεραπευτικό πλάνο.
            </p>
          </div>
          <a
            href="tel:2310940100"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#1E3A8A] hover:bg-[#162a65] text-white font-semibold text-sm transition-all whitespace-nowrap shadow-sm active:scale-95"
          >
            <PhoneCall className="w-4 h-4" />
            231 094 0100
          </a>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="mt-16 pt-10 border-t border-slate-200">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">
              Σχετικά Άρθρα στην ίδια κατηγορία
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/arthra/${rel.slug}`}
                  className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-[#1E3A8A]/50 shadow-sm hover:shadow transition-all group flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-[#1E3A8A] transition-colors line-clamp-2">
                      {rel.title}
                    </h3>
                    <p className="text-slate-500 text-xs line-clamp-3 leading-relaxed">
                      {rel.excerpt}
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-[#1E3A8A] mt-4 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    Περισσότερα →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
