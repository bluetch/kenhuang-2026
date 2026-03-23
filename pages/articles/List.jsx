import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SiteLayout } from "components/SiteLayout";
import { fetcher } from "utils";

function dateFormat(d) {
  const s = String(d);
  if (s.length === 8) return `${s.slice(0, 4)}.${s.slice(4, 6)}.${s.slice(6, 8)}`;
  return s;
}

const CAT_COLOR = {
  camino: "text-game-pink border-game-pink",
  frontend: "text-game-blue border-game-blue",
};

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const router = useRouter();

  useEffect(() => {
    fetcher("/api/articles", { setState: setArticles });
  }, []);

  useEffect(() => {
    if (!router.isReady) return;
    const q = router.query?.type;
    if (q) setActiveFilter(q);
  }, [router.isReady, router.query]);

  const data = useMemo(() => {
    const sorted = [...articles].sort((a, b) => (a.date > b.date ? -1 : 1));
    if (activeFilter === "all") return sorted;
    return sorted.filter((item) => item.category.includes(activeFilter));
  }, [activeFilter, articles]);

  return (
    <SiteLayout
      title="Quest Log — Ken Huang"
      description="Articles by Ken Huang on frontend engineering, product design, and travel."
    >
      {/* Header */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 border-b-2 border-dark bg-paper"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,0,110,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <p className="text-xs text-game-pink font-bold tracking-widest uppercase mb-2" style={{ fontFamily: "Space Mono, monospace" }}>
                ◆ QUEST LOG
              </p>
              <h1
                className="text-dark leading-none"
                style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 900 }}
              >
                Writing
              </h1>
            </div>
            <div className="bg-white border-2 border-dark px-5 py-3">
              <p className="text-xs text-text-muted" style={{ fontFamily: "Space Mono, monospace" }}>
                QUESTS LOGGED: <span className="text-dark font-bold">{data.length}</span>
              </p>
            </div>
          </div>

          {/* Filters */}
          <div className="flex gap-0 mt-10 border-2 border-dark w-fit">
            {[
              { id: "all", label: "ALL QUESTS" },
              { id: "camino", label: "CAMINO" },
              { id: "frontend", label: "FRONTEND" },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-5 py-2.5 text-xs font-bold tracking-widest uppercase border-r-2 border-dark last:border-r-0 transition-all duration-150 ${
                  activeFilter === f.id ? "bg-dark text-white" : "bg-white text-text-muted hover:bg-paper-warm"
                }`}
                style={{ fontFamily: "Space Mono, monospace" }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Article list */}
      <section className="py-16 bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="border-2 border-dark">
            {data.map((item, i) => {
              const isExternal = item.url.startsWith("http");
              const cat = item.category[0] || "";
              return (
                <Link
                  key={item.url}
                  href={item.url}
                  target={isExternal ? "_blank" : "_self"}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 p-4 border-b-2 border-dark last:border-b-0 bg-white hover:bg-dark transition-all duration-150"
                >
                  {/* Number */}
                  <span
                    className="text-xs text-text-faint group-hover:text-gray-500 w-8 flex-shrink-0 font-mono"
                    style={{ fontFamily: "Space Mono, monospace" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Thumbnail */}
                  <div className="w-14 h-12 overflow-hidden border-2 border-paper-border group-hover:border-gray-700 flex-shrink-0 hidden sm:block">
                    <img src={item.img} alt="" className="w-full h-full object-cover" loading="lazy" />
                  </div>

                  {/* Cat tag */}
                  {cat && (
                    <span
                      className={`text-[9px] font-bold uppercase border px-2 py-0.5 flex-shrink-0 group-hover:border-gray-600 group-hover:text-gray-400 ${CAT_COLOR[cat] || "text-dark border-dark"}`}
                      style={{ fontFamily: "Space Mono, monospace" }}
                    >
                      {cat}
                    </span>
                  )}

                  {/* Title */}
                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-dark group-hover:text-white transition-colors font-semibold line-clamp-1 text-sm"
                      style={{ fontFamily: "DM Sans, sans-serif" }}
                    >
                      {item.name}
                    </h3>
                  </div>

                  {/* Date */}
                  <span
                    className="text-[10px] text-text-faint group-hover:text-gray-500 font-mono hidden md:block flex-shrink-0"
                    style={{ fontFamily: "Space Mono, monospace" }}
                  >
                    {dateFormat(item.date)}
                  </span>

                  {/* Arrow */}
                  {isExternal
                    ? <ArrowUpRight size={14} className="text-text-faint group-hover:text-white flex-shrink-0 transition-colors" />
                    : <ArrowRight size={14} className="text-text-faint group-hover:text-white flex-shrink-0 transition-colors" />
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
