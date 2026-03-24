import Content from "components/articles/ArticleList";
import { articles } from "data/articles";
import { getMdxArticles } from "lib/mdx";
import { GetStaticProps } from "next";
import { Article } from "data/articles";

export default Content;

export const getStaticProps: GetStaticProps = async () => {
  const mdxArticles = getMdxArticles();
  // MDX articles take precedence: if a slug exists in both, use the MDX version
  const mdxUrls = new Set(mdxArticles.map((a) => a.url));
  const merged: Article[] = [
    ...mdxArticles,
    ...articles.filter((a) => !mdxUrls.has(a.url)),
  ].sort((a, b) => (a.date > b.date ? -1 : 1));
  return { props: { articles: merged } };
}
