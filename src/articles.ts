export interface ArticleSection {
  type: 'h2' | 'h3' | 'h4' | 'p' | 'list';
  text?: string;
  items?: string[];
}

export interface Article {
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  excerpt: string;
  sourceUrl?: string;
  sourceName?: string;
  sections: ArticleSection[];
}

import articlesJson from './articlesData.json';

export const articles: Article[] = articlesJson as Article[];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  return articles.filter((a) => a.categorySlug === categorySlug);
}
