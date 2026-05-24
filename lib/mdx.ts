import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Article } from "data/articles";

const CONTENT_DIR = path.join(process.cwd(), "content/articles");
const ARTICLE_EXTENSIONS = [".mdx", ".md", ".msx"];

function isArticleFile(filePath: string): boolean {
  return ARTICLE_EXTENSIONS.some((ext) => filePath.endsWith(ext));
}

function walkArticleFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];

  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      return walkArticleFiles(fullPath);
    }

    if (entry.name.startsWith("_") || !isArticleFile(entry.name)) {
      return [];
    }

    return [fullPath];
  });
}

function toSlug(filePath: string): string {
  return path.basename(filePath).replace(/\.(mdx|md|msx)$/, "");
}

function extractPlainText(content: string): string {
  return content
    .replace(/^---[\s\S]*?---/, "")
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/[#>*`_-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function fallbackDesc(content: string): string {
  return extractPlainText(content);
}

function normalizeFrontmatter<T extends Record<string, any>>(frontmatter: T, content: string): T {
  const desc = typeof frontmatter.desc === "string" ? frontmatter.desc.trim() : "";

  return {
    ...frontmatter,
    desc: desc || fallbackDesc(content),
  };
}

/**
 * Returns metadata for all MDX articles (frontmatter only, no content).
 * Shape matches data/articles.ts entries so they can be merged.
 */
export function getMdxArticles(): Article[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  return walkArticleFiles(CONTENT_DIR)
    .map((filePath) => {
      const slug = toSlug(filePath);
      const raw = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(raw);
      return { ...normalizeFrontmatter(data, content), url: `articles/${slug}` } as Article;
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

/**
 * Returns frontmatter + raw MDX content for a single article.
 * Returns null if the file doesn't exist.
 */
export function getMdxArticle(slug: string): { frontmatter: Record<string, any>; content: string } | null {
  const filePath = walkArticleFiles(CONTENT_DIR).find((candidate) => toSlug(candidate) === slug);
  if (filePath) {
    const raw = fs.readFileSync(filePath, "utf8");
    const { data: frontmatter, content } = matter(raw);
    return { frontmatter: normalizeFrontmatter(frontmatter, content), content };
  }

  return null;
}

/**
 * Returns all slugs for use in getStaticPaths.
 */
export function getMdxSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return walkArticleFiles(CONTENT_DIR).map(toSlug);
}
