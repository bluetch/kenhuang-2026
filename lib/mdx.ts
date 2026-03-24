import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Article } from "data/articles";

const CONTENT_DIR = path.join(process.cwd(), "content/articles");

/**
 * Returns metadata for all MDX articles (frontmatter only, no content).
 * Shape matches data/articles.ts entries so they can be merged.
 */
export function getMdxArticles(): Article[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => /\.mdx?$/.test(f) && !f.startsWith("_"))
    .map((filename) => {
      const slug = filename.replace(/\.mdx?$/, "");
      const raw = fs.readFileSync(path.join(CONTENT_DIR, filename), "utf8");
      const { data } = matter(raw);
      return { ...data, url: `articles/${slug}` } as Article;
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

/**
 * Returns frontmatter + raw MDX content for a single article.
 * Returns null if the file doesn't exist.
 */
export function getMdxArticle(slug: string): { frontmatter: Record<string, any>; content: string } | null {
  for (const ext of [".mdx", ".md"]) {
    const filePath = path.join(CONTENT_DIR, `${slug}${ext}`);
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, "utf8");
      const { data: frontmatter, content } = matter(raw);
      return { frontmatter, content };
    }
  }
  return null;
}

/**
 * Returns all slugs for use in getStaticPaths.
 */
export function getMdxSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => /\.mdx?$/.test(f) && !f.startsWith("_"))
    .map((f) => f.replace(/\.mdx?$/, ""));
}
