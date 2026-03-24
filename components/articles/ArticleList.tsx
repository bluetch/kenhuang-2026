import { useEffect, useState, useMemo } from "react";
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

const CAT_COLOR: Record<string, { border: string; text: string }> = {
  camino: { border: "#FFD60A", text: "#FFD60A" },
  frontend: { border: "#7BBFFF", text: "#7BBFFF" },
  other: { border: "#A78BFA", text: "#A78BFA" },
};

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
    articles.forEach((item) => item.category?.forEach((c) => cats.add(c)));
    return Array.from(cats).sort();
  }, [articles]);

  const data = useMemo(() => {
    const sorted = [...articles].sort((a, b) => (a.date > b.date ? -1 : 1));
    if (activeFilter === "all") return sorted;
    return sorted.filter((item) => item.category?.includes(activeFilter));
  }, [activeFilter, articles]);

  return (
    <SiteLayout
      title="Devlog — Ken Huang"
      description="Articles by Ken Huang on frontend engineering, product design, and travel."
    >
      {/* Header */}
      <section
        className="pt-28 pb-14 lg:pt-36 lg:pb-16 relative"
        style={{
          background: "#0B1220",
          borderBottom: "1px solid #243570",
          backgroundImage: "radial-gradient(circle, rgba(255,214,10,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <p className="text-[10px] tracking-widest uppercase mb-2" style={{ fontFamily: "Space Mono, monospace", color: "#FFD60A" }}>
                // DEVLOG.MD
              </p>
              <h1
                className="leading-none"
                style={{ fontFamily: "VT323, monospace", fontSize: "clamp(4rem, 8vw, 7rem)", color: "#D0E4FF", lineHeight: 0.95 }}
              >
                WRITING
              </h1>
            </div>
            <div
              className="px-5 py-3"
              style={{ background: "#142040", border: "1px solid #243570" }}
            >
              <p className="text-[10px]" style={{ fontFamily: "Space Mono, monospace", color: "#6880AA" }}>
                POSTS LOGGED:{" "}
                <span style={{ color: "#FFD60A" }}>{data.length}</span>
              </p>
            </div>
          </div>

          {/* Filters */}
          <div className="flex gap-0 mt-8 border border-[#243570] w-fit">
            {[{ id: "all", label: "ALL POSTS" }, ...categories.map((c) => ({ id: c, label: c }))].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className="px-5 py-2.5 text-[10px] font-bold tracking-widest uppercase border-r border-[#243570] last:border-r-0 transition-all duration-150"
                style={{
                  fontFamily: "Space Mono, monospace",
                  background: activeFilter === f.id ? (CAT_COLOR[f.id]?.border ?? "#FFD60A") : "transparent",
                  color: activeFilter === f.id ? "#0D1533" : "#6880AA",
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Article list */}
      <section className="py-16" style={{ background: "#0D1533" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="border border-[#243570]">
            {data.map((item, i) => {
              const isExternal = item.url.startsWith("http");
              const cat = item.category?.[0] || "";
              const catStyle = CAT_COLOR[cat] || { border: "#6880AA", text: "#6880AA" };
              return (
                <Link
                  key={item.url}
                  href={item.url}
                  target={isExternal ? "_blank" : "_self"}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 px-4 py-3 border-b border-[#243570] last:border-b-0 transition-all duration-150"
                  style={{ background: "#142040", borderLeft: "2px solid transparent" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#1A2D5A";
                    e.currentTarget.style.borderLeftColor = catStyle.border;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#142040";
                    e.currentTarget.style.borderLeftColor = "transparent";
                  }}
                >
                  {/* Number */}
                  <span
                    className="text-[10px] w-7 flex-shrink-0"
                    style={{ fontFamily: "Space Mono, monospace", color: "#6880AA" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Thumbnail */}
                  <div className="w-12 h-10 overflow-hidden border border-[#243570] flex-shrink-0 hidden sm:block">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>

                  {/* Cat tag */}
                  {cat && (
                    <span
                      className="text-[8px] font-bold uppercase border px-2 py-0.5 flex-shrink-0"
                      style={{
                        fontFamily: "Space Mono, monospace",
                        color: catStyle.text,
                        borderColor: catStyle.border,
                        background: "transparent",
                      }}
                    >
                      {cat}
                    </span>
                  )}

                  {/* Title */}
                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-sm font-semibold line-clamp-1 transition-colors"
                      style={{ fontFamily: "DM Sans, sans-serif", color: "#B0C4DE" }}
                    >
                      <span className="group-hover:text-[#D0E4FF] transition-colors">
                        {item.name}
                      </span>
                    </h3>
                  </div>

                  {/* Date */}
                  <span
                    className="text-[9px] hidden md:block flex-shrink-0"
                    style={{ fontFamily: "Space Mono, monospace", color: "#6880AA" }}
                  >
                    {dateFormat(item.date)}
                  </span>

                  {/* Arrow */}
                  {isExternal
                    ? <ArrowUpRight size={13} className="flex-shrink-0 text-[#6880AA] group-hover:text-[#4D9EFF] transition-colors" />
                    : <ArrowRight size={13} className="flex-shrink-0 text-[#6880AA] group-hover:text-[#4D9EFF] transition-colors" />
                  }
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
