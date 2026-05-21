import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { SiteLayout } from "components/SiteLayout";
import { getMdxArticle, getMdxSlugs } from "lib/mdx";
import { GetStaticPaths, GetStaticProps } from "next";

interface MdxArticlePageProps {
  frontmatter: Record<string, any>;
  mdxSource: MDXRemoteSerializeResult;
}

export default function MdxArticlePage({ frontmatter, mdxSource }: MdxArticlePageProps) {
  return (
    <SiteLayout title={frontmatter.name} description={frontmatter.desc}>
      {/* Hero image — heroImg for article header, img for list thumbnail */}
      {(frontmatter.heroImg || frontmatter.img) && (
        <div className="h-80 w-full overflow-hidden bg-[#efe7de] lg:h-96">
          <img
            src={frontmatter.heroImg || frontmatter.img}
            alt={frontmatter.name}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="mx-auto max-w-3xl px-6 py-16 lg:py-20">
        {/* Meta header */}
        <div className="mb-10 space-y-3">
          {frontmatter.category?.length > 0 && (
            <div className="flex gap-2">
              {frontmatter.category.map((cat: string) => (
                <span
                  key={cat}
                  className="rounded-full border px-3 py-1 text-[9px] font-bold uppercase"
                  style={{
                    fontFamily: "Space Mono, monospace",
                    color: "#7a685a",
                    borderColor: "#dfd2c5",
                    background: "#fff7ef",
                  }}
                >
                  {cat}
                </span>
              ))}
            </div>
          )}
          <h1
            className="leading-tight"
            style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
              color: "#1d2636",
              fontWeight: 700,
            }}
          >
            {frontmatter.name}
          </h1>
          {frontmatter.date && (
            <p className="text-[10px]" style={{ fontFamily: "Space Mono, monospace", color: "#8b8178" }}>
              {String(frontmatter.date).replace(/(\d{4})(\d{2})(\d{2})/, "$1.$2.$3")}
            </p>
          )}
        </div>

        {/* MDX content */}
        <div className="article-prose leading-relaxed">
          <MDXRemote {...mdxSource} />
        </div>
      </div>
    </SiteLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getMdxSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const article = getMdxArticle(slug);
  if (!article) return { notFound: true };

  const mdxSource = await serialize(article.content);
  return {
    props: {
      frontmatter: article.frontmatter,
      mdxSource,
    },
  };
}
