import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
}

const DEFAULT_TITLE = 'Ερμείον — Σύγχρονη Φυσικοθεραπεία στη Θεσσαλονίκη';
const DEFAULT_DESCRIPTION =
  'Ιδιωτικό φυσικοθεραπευτήριο στη Θεσσαλονίκη (Παπάφη 92). Εξειδικευμένη αποκατάσταση, Μέθοδος McKenzie, Tecar Therapy & Θεραπευτική Άσκηση. Χωρίς παραπεμπτικό. Χωρίς αναμονή.';
const BASE_URL = (import.meta.env.VITE_SITE_URL || 'https://ermeion.gr').replace(/\/$/, '');

export default function SEO({ title, description, canonicalPath }: SEOProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Update Title
    const finalTitle = title ? `${title} | Ερμείον Φυσικοθεραπεία` : DEFAULT_TITLE;
    document.title = finalTitle;

    // 2. Update Meta Description
    const finalDesc = description || DEFAULT_DESCRIPTION;
    let descTag = document.querySelector('meta[name="description"]');
    if (descTag) {
      descTag.setAttribute('content', finalDesc);
    }

    // 3. Update OG Title & Description
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', finalTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', finalDesc);

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', finalTitle);

    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', finalDesc);

    // 4. Update Canonical Link & OG URL
    const targetPath = canonicalPath || pathname;
    const finalUrl = `${BASE_URL}${targetPath === '/' ? '' : targetPath}`;

    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag) {
      canonicalTag.setAttribute('href', finalUrl);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', finalUrl);
    }
  }, [title, description, canonicalPath, pathname]);

  return null;
}

