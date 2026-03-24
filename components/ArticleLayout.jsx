import { Layout } from "components/Layout";
import { getArticleMeta } from "data/articles";

/**
 * Wrapper for article pages. Pulls title + description from data/articles.js
 * by URL so article pages don't hardcode their own metadata.
 */
export function ArticleLayout({ url, children }) {
  const meta = getArticleMeta(url);
  return (
    <Layout title={meta?.name} description={meta?.desc}>
      {children}
    </Layout>
  );
}
