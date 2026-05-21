import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SiteLayout } from "components/SiteLayout";
import { articles as allArticles, Article } from "data/articles";
import { portfolio as allPortfolio, PortfolioItem } from "data/portfolio";
import { getMdxArticles } from "lib/mdx";
import { GetStaticProps } from "next";

function dateFormat(d: string | number) {
  const s = String(d);
  if (s.length === 8) return `${s.slice(0, 4)}.${s.slice(4, 6)}.${s.slice(6, 8)}`;
  return s;
}

const CURRENT_BUILD_ASSET = "/images/home/toy-factory/animation.gif";

const FILTERS = [
  { key: "all", label: "All missions" },
  { key: "design", label: "Product design" },
  { key: "frontend", label: "Web archive" },
];

const HOME_STYLE = `
  @keyframes heroGlow {
    0% { transform: translate3d(0, 0, 0) scale(1); opacity: 0.45; }
    50% { transform: translate3d(0, -16px, 0) scale(1.04); opacity: 0.7; }
    100% { transform: translate3d(0, 0, 0) scale(1); opacity: 0.45; }
  }

  @keyframes blinkLine {
    0%, 100% { opacity: 0.35; }
    50% { opacity: 0.8; }
  }
`;

interface HomeProps {
  articles: Article[];
  portfolio: PortfolioItem[];
}

export default function Home({ articles, portfolio }: HomeProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const featuredWork = useMemo(() => {
    const sorted = [...portfolio].sort((a, b) => (a.date > b.date ? -1 : 1));
    if (activeFilter === "all") return sorted.slice(0, 4);
    return sorted.filter((item) => item.category.includes(activeFilter)).slice(0, 4);
  }, [activeFilter, portfolio]);

  const featuredArticles = useMemo(() => {
    const curated = articles.filter((item) => !item.category.includes("camino"));
    return curated.slice(0, 3);
  }, [articles]);

  return (
    <SiteLayout
      title="Ken Huang — Indie Game Developer with a Product Designer's Eye"
      description="Indie game developer and product designer building playful systems, clearer interactions, and small worlds with personality."
    >
      <style>{HOME_STYLE}</style>

      <div className="bg-[#f7f1e8] text-[#1d2636]">
        <section className="relative overflow-hidden px-6 pb-20 pt-28 md:px-8 lg:px-10 lg:pb-28 lg:pt-32">
          <div
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              backgroundImage:
                "linear-gradient(rgba(31,58,95,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(31,58,95,0.06) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-[28rem]"
            style={{
              background:
                "radial-gradient(circle at 18% 18%, rgba(232,111,81,0.20), transparent 34%), radial-gradient(circle at 78% 22%, rgba(121,184,160,0.22), transparent 28%), radial-gradient(circle at 56% 0%, rgba(216,170,82,0.18), transparent 30%)",
              animation: "heroGlow 9s ease-in-out infinite",
            }}
          />

          <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:items-center">
            <div className="max-w-3xl">
              <h1
                className="max-w-4xl text-[clamp(3.4rem,7vw,6.8rem)] leading-[1.02] tracking-[-0.05em]"
                style={{ fontFamily: "Syne, sans-serif", fontWeight: 700 }}
              >
                New indie
                <br />
                game developer.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#5f6675] md:text-xl">
                Still making things that need feel, timing, and a point of view.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-[#fff7f1] transition-transform hover:-translate-y-0.5"
                  style={{
                    background: "#1f3a5f",
                    boxShadow: "0 14px 32px rgba(31,58,95,0.18)",
                  }}
                >
                  See selected work
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="https://www.threads.com/@noa.tzu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium text-[#1f3a5f] transition-colors hover:bg-[#fff8f2]"
                  style={{ borderColor: "#cfc2b3" }}
                >
                  View my dev log
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[40rem]">
              <div
                className="absolute left-[6%] top-[7%] h-28 w-28 rounded-full blur-3xl"
                style={{ background: "rgba(232,111,81,0.22)" }}
              />
              <div
                className="absolute bottom-[12%] right-[8%] h-32 w-32 rounded-full blur-3xl"
                style={{ background: "rgba(121,184,160,0.22)" }}
              />

              <div
                className="relative overflow-hidden rounded-[2.2rem] bg-[#fffaf4] px-4 py-6 shadow-[0_24px_80px_rgba(61,49,38,0.12)] md:px-6"
              >
                <div className="flex items-center justify-between px-2">
                  <div>
                    <p
                      className="text-[10px] uppercase tracking-[0.22em] text-[#927e6d]"
                      style={{ fontFamily: '"Press Start 2P", monospace' }}
                    >
                      Current build
                    </p>
                    <p className="mt-2 text-[clamp(1.9rem,3.2vw,3rem)] text-[#1f3a5f]" style={{ fontFamily: "Syne, sans-serif", fontWeight: 700 }}>
                      Toy Factory
                    </p>
                  </div>
                  <div className="rounded-full bg-[#fff3ea] px-3 py-1 text-xs text-[#a06049]">
                    開發中
                  </div>
                </div>

                <div className="relative mt-5 overflow-hidden rounded-[1.8rem] bg-[#efe5d7] px-4 py-5 md:px-6 md:py-6">
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.88), rgba(247,241,232,0.54)), radial-gradient(circle at top right, rgba(31,58,95,0.10), transparent 42%)",
                    }}
                  />
                  <div className="relative">
                    <img
                      src={CURRENT_BUILD_ASSET}
                      alt="Toy Factory animated pixel art concept"
                      className="mx-auto w-full max-w-[44rem]"
                      style={{ imageRendering: "pixelated" }}
                    />
                    <p className="mt-5 text-center text-sm tracking-[0.01em] text-[#5d6674] md:text-base">
                      Developing a toy-making game about keeping a tiny factory line alive.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:px-8 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p
                  className="text-[10px] uppercase tracking-[0.22em] text-[#8f7d6f]"
                  style={{ fontFamily: '"Press Start 2P", monospace' }}
                >
                  Selected work
                </p>
                <h2
                  className="mt-4 text-[clamp(2.4rem,5vw,4.8rem)] leading-[0.95] tracking-[-0.05em]"
                  style={{ fontFamily: "Syne, sans-serif", fontWeight: 700 }}
                >
                  Selected work, shipped with taste.
                </h2>
              </div>

              <div className="flex flex-wrap gap-2">
                {FILTERS.map((filter) => {
                  const isActive = activeFilter === filter.key;
                  return (
                    <button
                      key={filter.key}
                      onClick={() => setActiveFilter(filter.key)}
                      className="rounded-full border px-4 py-2 text-sm transition-all"
                      style={{
                        borderColor: isActive ? "#1f3a5f" : "#d6cabd",
                        background: isActive ? "#1f3a5f" : "#fffaf4",
                        color: isActive ? "#fffaf4" : "#6b625a",
                      }}
                    >
                      {filter.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              {featuredWork.map((item, index) => (
                <Link
                  key={item.url}
                  href={item.url}
                  className={`group relative overflow-hidden rounded-[1.8rem] border border-[#ddd1c4] bg-[#fffdf8] transition-transform duration-300 hover:-translate-y-1 ${
                    index % 2 === 1 ? "lg:translate-y-8" : ""
                  }`}
                  style={{ boxShadow: "0 18px 60px rgba(73, 54, 36, 0.08)" }}
                >
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-[#eee2d5] bg-[#f1ebe3]">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <div
                      className="absolute left-4 top-4 rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.18em]"
                      style={{
                        fontFamily: '"Press Start 2P", monospace',
                        borderColor: "rgba(255,255,255,0.7)",
                        background: "rgba(29,38,54,0.72)",
                        color: "#fff7f1",
                      }}
                    >
                      Quest {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm text-[#8a7c6f]">{item.company}</p>
                        <h3 className="mt-2 text-2xl leading-tight text-[#1d2636]" style={{ fontFamily: "Syne, sans-serif", fontWeight: 700 }}>
                          {item.name}
                        </h3>
                      </div>
                      <ArrowUpRight className="mt-1 text-[#1f3a5f] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" size={18} />
                    </div>

                    <p className="mt-4 text-base leading-7 text-[#5f6675]">{item.desc}</p>

                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      {item.category.map((category) => (
                        <span
                          key={category}
                          className="rounded-full border border-[#dfd2c5] bg-[#fff7ef] px-3 py-1 text-xs uppercase tracking-[0.16em] text-[#7a685a]"
                        >
                          {category}
                        </span>
                      ))}
                      <span className="text-sm text-[#8b8178]">{item.date}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#1f3a5f]"
              >
                Browse the full archive
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:px-8 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p
                  className="text-[10px] uppercase tracking-[0.22em] text-[#8f7d6f]"
                  style={{ fontFamily: '"Press Start 2P", monospace' }}
                >
                  Writing & thinking
                </p>
                <h2
                  className="mt-4 text-[clamp(2.2rem,4.8vw,4.2rem)] leading-[0.98] tracking-[-0.05em]"
                  style={{ fontFamily: "Syne, sans-serif", fontWeight: 700 }}
                >
                  Notes on craft, systems, and things worth making.
                </h2>
              </div>

              <Link href="/articles" className="inline-flex items-center gap-2 text-sm font-medium text-[#1f3a5f]">
                Read more
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {featuredArticles.map((article) => {
                const isExternal = /^https?:\/\//.test(article.url);
                const card = (
                  <article className="group h-full overflow-hidden rounded-[1.6rem] border border-[#ddd0c2] bg-[#fffdf8] transition-transform duration-300 hover:-translate-y-1">
                    <div className="aspect-[16/10] overflow-hidden bg-[#efe7de]">
                      <img
                        src={article.img}
                        alt={article.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-xs uppercase tracking-[0.18em] text-[#9a8676]">
                        {article.category.join(" / ")} · {dateFormat(article.date)}
                      </p>
                      <h3 className="mt-3 text-xl leading-tight text-[#1d2636]" style={{ fontFamily: "Syne, sans-serif", fontWeight: 700 }}>
                        {article.name}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-[#636b79]">{article.desc}</p>
                    </div>
                  </article>
                );

                if (isExternal) {
                  return (
                    <a key={article.url} href={article.url} target="_blank" rel="noopener noreferrer" className="block">
                      {card}
                    </a>
                  );
                }

                return (
                  <Link key={article.url} href={`/${article.url}`} className="block">
                    {card}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

      </div>
    </SiteLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const mdxArticles = getMdxArticles();
  const mdxUrls = new Set(mdxArticles.map((item) => item.url));
  const articles: Article[] = [
    ...mdxArticles,
    ...allArticles.filter((item) => !mdxUrls.has(item.url)),
  ].sort((a, b) => (a.date > b.date ? -1 : 1));

  return { props: { articles, portfolio: allPortfolio } };
};
