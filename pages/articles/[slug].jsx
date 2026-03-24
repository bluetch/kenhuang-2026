import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { SiteLayout } from "components/SiteLayout";
import { getMdxArticle, getMdxSlugs } from "lib/mdx";

export default function MdxArticlePage({ frontmatter, mdxSource }) {
  return (
    <SiteLayout title={frontmatter.name} description={frontmatter.desc}>
      {/* Hero image — heroImg for article header, img for list thumbnail */}
      {(frontmatter.heroImg || frontmatter.img) && (
        <div className="h-80 lg:h-96 w-full overflow-hidden" style={{ background: "#0B1220" }}>
          <img
            src={frontmatter.heroImg || frontmatter.img}
            alt={frontmatter.name}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="max-w-3xl mx-auto px-6 py-16 lg:py-20">
        {/* Meta header */}
        <div className="mb-10 space-y-3">
          {frontmatter.category?.length > 0 && (
            <div className="flex gap-2">
              {frontmatter.category.map((cat) => (
                <span
                  key={cat}
                  className="text-[9px] font-bold uppercase px-2 py-0.5 border"
                  style={{
                    fontFamily: "Space Mono, monospace",
                    color: cat === "camino" ? "#FFD60A" : "#7BBFFF",
                    borderColor: cat === "camino" ? "#FFD60A" : "#7BBFFF",
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
              color: "#D0E4FF",
              fontWeight: 700,
            }}
          >
            {frontmatter.name}
          </h1>
          {frontmatter.date && (
            <p className="text-[10px]" style={{ fontFamily: "Space Mono, monospace", color: "#6880AA" }}>
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

export async function getStaticPaths() {
  const slugs = getMdxSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const article = getMdxArticle(params.slug);
  if (!article) return { notFound: true };

  const mdxSource = await serialize(article.content);
  return {
    props: {
      frontmatter: article.frontmatter,
      mdxSource,
    },
  };
}
