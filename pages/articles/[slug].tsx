import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { MediaPreview } from "components/MediaPreview";
import { SiteLayout } from "components/SiteLayout";
import { getMdxArticle, getMdxSlugs } from "lib/mdx";
import { GetStaticPaths, GetStaticProps } from "next";

interface MdxArticlePageProps {
  frontmatter: Record<string, any>;
  mdxSource: MDXRemoteSerializeResult;
}

export default function MdxArticlePage({ frontmatter, mdxSource }: MdxArticlePageProps) {
  const mdxComponents = {
    MediaPreview,
  };

  return (
    <SiteLayout title={frontmatter.name} description={frontmatter.desc}>
      <div className="bg-[#f7f1e8] text-[#1d2636]">
        {/* Hero image — heroImg for article header, img for list thumbnail */}
        {(frontmatter.heroImg || frontmatter.img) && (
          <section className="px-6 pt-24 md:px-8 lg:px-10 lg:pt-28">
            <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-[#ddd1c4] bg-[#efe7de] shadow-[0_24px_80px_rgba(61,49,38,0.10)]">
              <div className="h-80 w-full overflow-hidden lg:h-96">
                <img
                  src={frontmatter.heroImg || frontmatter.img}
                  alt={frontmatter.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </section>
        )}

        <section className="px-6 pb-20 pt-10 md:px-8 lg:px-10 lg:pb-28 lg:pt-12">
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#ddd1c4] bg-[#fffdf8] p-6 shadow-[0_24px_80px_rgba(61,49,38,0.10)] md:p-8 lg:p-10">
            {/* Meta header */}
            <div className="mb-10 space-y-3 border-b border-[#ebe1d6] pb-8">
              {frontmatter.category?.length > 0 && (
                <div className="flex flex-wrap gap-2">
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
                  fontSize: "clamp(2rem, 5vw, 3.2rem)",
                  color: "#1d2636",
                  fontWeight: 700,
                }}
              >
                {frontmatter.name}
              </h1>
              {frontmatter.desc && (
                <p className="max-w-2xl text-base leading-8 text-[#5f6675]">
                  {frontmatter.desc}
                </p>
              )}
              {frontmatter.date && (
                <p className="text-[10px]" style={{ fontFamily: "Space Mono, monospace", color: "#8b8178" }}>
                  {String(frontmatter.date).replace(/(\d{4})(\d{2})(\d{2})/, "$1.$2.$3")}
                </p>
              )}
            </div>

            {/* MDX content */}
            <div className="article-prose leading-relaxed">
              <MDXRemote {...mdxSource} components={mdxComponents} />
            </div>
          </div>
        </section>
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
