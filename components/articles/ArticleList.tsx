import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SiteLayout } from "components/SiteLayout";
import { Article } from "data/articles";

function dateFormat(d: number | string): string {
  const s = String(d);
  if (s.length === 8) return `${s.slice(0, 4)}.${s.slice(4, 6)}.${s.slice(6, 8)}`;
  return s;
}

interface ArticleListProps {
  articles: Article[];
}

export default function ArticleList({ articles }: ArticleListProps) {
  const [activeFilter, setActiveFilter] = useState("all");
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const q = router.query?.type;
    if (q) setActiveFilter(q as string);
  }, [router.isReady, router.query]);

  const categories = useMemo(() => {
    const cats = new Set<string>();
    articles.forEach((item) => item.category?.forEach((category) => cats.add(category)));
    return Array.from(cats).sort();
  }, [articles]);

  const data = useMemo(() => {
    const sorted = [...articles].sort((a, b) => (a.date > b.date ? -1 : 1));
    if (activeFilter === "all") return sorted;
    return sorted.filter((item) => item.category?.includes(activeFilter));
  }, [activeFilter, articles]);

  return (
    <SiteLayout
      title="Writing — Ken Huang"
      description="Notes on frontend craft, product thinking, and a few side quests."
    >
      <div className="bg-[#f7f1e8] text-[#1d2636]">
        <section className="px-6 pb-14 pt-28 md:px-8 lg:px-10 lg:pb-16 lg:pt-32">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p
                  className="text-[10px] uppercase tracking-[0.22em] text-[#8f7d6f]"
                  style={{ fontFamily: '"Press Start 2P", monospace' }}
                >
                  Writing
                </p>
                <h1
                  className="mt-4 text-[clamp(3rem,7vw,6rem)] leading-[0.92] tracking-[-0.05em]"
                  style={{ fontFamily: "Syne, sans-serif", fontWeight: 700 }}
                >
                  Notes on craft,
                  <br />
                  systems, and side quests.
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5f6675]">
                  Frontend, product, travel, and whatever else was worth writing down before it disappeared.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {[{ id: "all", label: "All posts" }, ...categories.map((category) => ({ id: category, label: category }))].map((filter) => {
                  const isActive = activeFilter === filter.id;
                  return (
                    <button
                      key={filter.id}
                      onClick={() => setActiveFilter(filter.id)}
                      className="rounded-full border px-4 py-2 text-sm capitalize transition-all"
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
          </div>
        </section>

        <section className="px-6 pb-20 md:px-8 lg:px-10 lg:pb-28">
          <div className="mx-auto max-w-7xl space-y-4">
            {data.map((item, index) => {
              const isExternal = item.url.startsWith("http");
              const content = (
                <article className="group flex items-center gap-4 rounded-[1.4rem] border border-[#ddd1c4] bg-[#fffdf8] p-4 transition-transform duration-300 hover:-translate-y-1">
                  <div className="hidden h-16 w-20 overflow-hidden rounded-[0.9rem] bg-[#efe7de] sm:block">
                    <img src={item.img} alt={item.name} className="h-full w-full object-cover" loading="lazy" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs uppercase tracking-[0.16em] text-[#8b8178]">
                      {String(index + 1).padStart(2, "0")} · {dateFormat(item.date)} · {item.category.join(" / ")}
                    </p>
                    <h2 className="mt-2 line-clamp-2 text-xl leading-tight text-[#1d2636] transition-colors group-hover:text-[#1f3a5f]" style={{ fontFamily: "Syne, sans-serif", fontWeight: 700 }}>
                      {item.name}
                    </h2>
                    <p className="mt-3 line-clamp-2 text-sm leading-7 text-[#5f6675]">{item.desc}</p>
                  </div>
                  {isExternal ? (
                    <ArrowUpRight size={16} className="flex-shrink-0 text-[#1f3a5f]" />
                  ) : (
                    <ArrowRight size={16} className="flex-shrink-0 text-[#1f3a5f]" />
                  )}
                </article>
              );

              if (isExternal) {
                return (
                  <a key={item.url} href={item.url} target="_blank" rel="noopener noreferrer" className="block">
                    {content}
                  </a>
                );
              }

              return (
                <Link key={item.url} href={`/${item.url}`} className="block">
                  {content}
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
