import { ReactNode } from "react";
import { Layout } from "components/Layout";
import { getArticleMeta } from "data/articles";

interface ArticleLayoutProps {
  url: string;
  children: ReactNode;
}

/**
 * Wrapper for article pages. Pulls title + description from data/articles.ts
 * by URL so article pages don't hardcode their own metadata.
 */
export function ArticleLayout({ url, children }: ArticleLayoutProps) {
  const meta = getArticleMeta(url);
  return (
    <Layout title={meta?.name} description={meta?.desc}>
      {children}
    </Layout>
  );
}
