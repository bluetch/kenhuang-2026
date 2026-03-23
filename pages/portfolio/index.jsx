import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteLayout } from "components/SiteLayout";
import { fetcher } from "utils";

export default function Portfolio() {
  const [portfolio, setPortfolio] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");

  const data = useMemo(() => {
    const sorted = [...portfolio].sort((a, b) => (a.date > b.date ? -1 : 1));
    if (activeFilter === "all") return sorted;
    return sorted.filter((item) => item.category.includes(activeFilter));
  }, [activeFilter, portfolio]);

  useEffect(() => {
    fetcher("/api/portfolio", { setState: setPortfolio });
  }, []);

  const CAT_COLORS = { design: "bg-game-pink text-white", frontend: "bg-game-blue text-white" };

  return (
    <SiteLayout
      title="Mission Log — Ken Huang"
      description="Selected product design and frontend engineering projects by Ken Huang."
    >
      {/* Header */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 border-b-2 border-dark bg-paper"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(67,97,238,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <p className="text-xs text-game-blue font-bold tracking-widest uppercase mb-2" style={{ fontFamily: "Space Mono, monospace" }}>
                ◆ MISSION LOG
              </p>
              <h1
                className="text-dark leading-none"
                style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 900 }}
              >
                Selected Work
              </h1>
            </div>
            <div className="bg-white border-2 border-dark px-5 py-3">
              <p className="text-xs text-text-muted" style={{ fontFamily: "Space Mono, monospace" }}>
                MISSIONS COMPLETE: <span className="text-dark font-bold">{data.length}</span>
              </p>
            </div>
          </div>

          {/* Filter */}
          <div className="flex gap-0 mt-10 border-2 border-dark w-fit">
            {["all", "design", "frontend"].map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2.5 text-xs font-bold tracking-widest uppercase border-r-2 border-dark last:border-r-0 transition-all duration-150 ${
                  activeFilter === f ? "bg-dark text-white" : "bg-white text-text-muted hover:bg-paper-warm"
                }`}
                style={{ fontFamily: "Space Mono, monospace" }}
              >
                {f === "all" ? "ALL" : f === "design" ? "DESIGN" : "CODE"}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 lg:py-24 bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((item, i) => (
              <Link
                key={item.url}
                href={item.url}
                className="group bg-white border-2 border-dark shadow-pixel hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-150 overflow-hidden flex flex-col"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-[16/10] bg-paper-warm border-b-2 border-dark">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Mission badge */}
                  <div className="absolute top-3 left-3 bg-dark text-white px-2 py-0.5 text-[9px] font-mono border border-white" style={{ fontFamily: "Space Mono, monospace" }}>
                    MISSION {String(i + 1).padStart(2, "0")}
                  </div>
                  {/* Category chips */}
                  <div className="absolute top-3 right-3 flex gap-1">
                    {item.category.map((cat) => (
                      <span key={cat} className={`text-[9px] font-bold px-2 py-0.5 ${CAT_COLORS[cat] || "bg-dark text-white"}`} style={{ fontFamily: "Space Mono, monospace" }}>
                        {cat.toUpperCase()}
                      </span>
                    ))}
                  </div>
                  {/* Hover CTA */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 bg-game-blue border-2 border-white flex items-center justify-center scale-75 group-hover:scale-100 transition-transform">
                      <ArrowUpRight size={20} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col gap-3">
                  <div className="flex-1">
                    <h3
                      className="font-bold text-dark group-hover:text-game-blue transition-colors"
                      style={{ fontFamily: "Syne, sans-serif", fontSize: "1rem", fontWeight: 700 }}
                    >
                      {item.name}
                    </h3>
                    <p className="text-sm text-text-muted mt-1 line-clamp-2" style={{ fontFamily: "DM Sans, sans-serif" }}>
                      {item.desc}
                    </p>
                  </div>
                  <p className="text-[10px] text-text-faint font-mono border-t border-paper-border pt-3" style={{ fontFamily: "Space Mono, monospace" }}>
                    {item.company} · {item.date}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
