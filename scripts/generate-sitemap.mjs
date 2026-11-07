import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const articlesPath = path.resolve(__dirname, '../src/articlesData.json');
const sitemapPath = path.resolve(__dirname, '../public/sitemap.xml');

const articles = JSON.parse(fs.readFileSync(articlesPath, 'utf-8'));

const pages = [
  { loc: 'https://ermeion.gr/', changefreq: 'weekly', priority: '1.0' },
  { loc: 'https://ermeion.gr/ypiresies', changefreq: 'monthly', priority: '0.8' },
  { loc: 'https://ermeion.gr/ypiresies/mckenzie', changefreq: 'monthly', priority: '0.8' },
  { loc: 'https://ermeion.gr/ypiresies/tecar', changefreq: 'monthly', priority: '0.8' },
  { loc: 'https://ermeion.gr/ypiresies/spine-pain', changefreq: 'monthly', priority: '0.8' },
  { loc: 'https://ermeion.gr/ypiresies/exercise', changefreq: 'monthly', priority: '0.8' },
  { loc: 'https://ermeion.gr/arthra', changefreq: 'weekly', priority: '0.9' },
];

articles.forEach((a) => {
  pages.push({
    loc: `https://ermeion.gr/arthra/${a.slug}`,
    changefreq: 'monthly',
    priority: '0.7',
  });
});

const today = new Date().toISOString().split('T')[0];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>${p.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

fs.writeFileSync(sitemapPath, xml);
console.log(`[sitemap] Generated public/sitemap.xml with ${pages.length} URLs.`);

