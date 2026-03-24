import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteLayout } from "components/SiteLayout";
import { portfolio as allPortfolio, PortfolioItem } from "data/portfolio";
import { GetStaticProps } from "next";

const CAT_COLORS = {
  design: { border: "#FFD60A", bg: "rgba(255,214,10,0.15)", text: "#FFD60A" },
  frontend: { border: "#7BBFFF", bg: "rgba(0,207,255,0.15)", text: "#7BBFFF" },
};

interface PortfolioPageProps {
  portfolio: PortfolioItem[];
}

export default function Portfolio({ portfolio }: PortfolioPageProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const data = useMemo(() => {
    const sorted = [...portfolio].sort((a, b) => (a.date > b.date ? -1 : 1));
    if (activeFilter === "all") return sorted;
    return sorted.filter((item) => item.category.includes(activeFilter));
  }, [activeFilter, portfolio]);

  return (
    <SiteLayout
      title="Mission Log — Ken Huang"
      description="Selected product design and frontend engineering projects by Ken Huang."
    >
      {/* Header */}
      <section
        className="pt-28 pb-14 lg:pt-36 lg:pb-16 relative"
        style={{
          background: "#0B1220",
          borderBottom: "1px solid #243570",
          backgroundImage: "linear-gradient(rgba(0,207,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,207,255,0.02) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <p className="text-[10px] tracking-widest uppercase mb-2" style={{ fontFamily: "Space Mono, monospace", color: "#7BBFFF" }}>
                // MISSION.LOG
              </p>
              <h1
                className="leading-none"
                style={{ fontFamily: "VT323, monospace", fontSize: "clamp(4rem, 8vw, 7rem)", color: "#D0E4FF", lineHeight: 0.95 }}
              >
                SELECTED
                <br />
                <span style={{ color: "#7BBFFF" }}>WORK</span>
              </h1>
            </div>
            <div
              className="px-5 py-3"
              style={{ background: "#142040", border: "1px solid #243570" }}
            >
              <p className="text-[10px]" style={{ fontFamily: "Space Mono, monospace", color: "#6880AA" }}>
                MISSIONS COMPLETE:{" "}
                <span style={{ color: "#7BBFFF" }}>{data.length}</span>
              </p>
            </div>
          </div>

          {/* Filter */}
          <div className="flex gap-0 mt-8 border border-[#243570] w-fit">
            {[
              { id: "all", label: "ALL" },
              { id: "design", label: "DESIGN" },
              { id: "frontend", label: "CODE" },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className="px-5 py-2.5 text-[10px] font-bold tracking-widest uppercase border-r border-[#243570] last:border-r-0 transition-all duration-150"
                style={{
                  fontFamily: "Space Mono, monospace",
                  background: activeFilter === f.id ? "#7BBFFF" : "transparent",
                  color: activeFilter === f.id ? "#0D1533" : "#6880AA",
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 lg:py-20" style={{ background: "#0D1533" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((item, i) => (
              <Link
                key={item.url}
                href={item.url}
                className="group overflow-hidden flex flex-col transition-all duration-150"
                style={{ background: "#142040", border: "2px solid #243570" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#7BBFFF";
                  e.currentTarget.style.boxShadow = "4px 4px 0 0 #7BBFFF";
                  e.currentTarget.style.transform = "translate(-2px,-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#243570";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "none";
                }}
              >
                {/* Image */}
                <div
                  className="relative overflow-hidden aspect-[16/10] border-b border-[#243570]"
                  style={{ background: "#1A2D5A" }}
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Semi-transparent dark overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: "rgba(13,21,51,0.08)" }}
                  />
                  {/* Mission badge */}
                  <div
                    className="absolute top-2 left-2 px-2 py-0.5 text-[9px] font-mono"
                    style={{ background: "#0D1533", color: "#7BBFFF", border: "1px solid #7BBFFF", fontFamily: "Space Mono, monospace" }}
                  >
                    MISSION {String(i + 1).padStart(2, "0")}
                  </div>
                  {/* Category chips */}
                  <div className="absolute top-2 right-2 flex gap-1">
                    {item.category.map((cat) => (
                      <span
                        key={cat}
                        className="text-[8px] font-bold px-2 py-0.5"
                        style={{
                          fontFamily: "Space Mono, monospace",
                          color: CAT_COLORS[cat]?.text || "#D0E4FF",
                          background: "#0D1533",
                          border: `1px solid ${CAT_COLORS[cat]?.border || "#243570"}`,
                        }}
                      >
                        {cat.toUpperCase()}
                      </span>
                    ))}
                  </div>
                  {/* Hover CTA */}
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: "rgba(0,207,255,0.08)" }}
                  >
                    <div
                      className="w-10 h-10 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform"
                      style={{ background: "#7BBFFF", border: "2px solid #0D1533" }}
                    >
                      <ArrowUpRight size={18} color="#0D1533" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col gap-2">
                  <div className="flex-1">
                    <h3
                      className="font-bold mb-1 transition-colors"
                      style={{ fontFamily: "Syne, sans-serif", fontSize: "0.95rem", color: "#B0C4DE" }}
                    >
                      {item.name}
                    </h3>
                    <p
                      className="text-xs line-clamp-2"
                      style={{ fontFamily: "DM Sans, sans-serif", color: "#8898BB" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                  <p
                    className="text-[9px] pt-2 border-t border-[#243570]"
                    style={{ fontFamily: "Space Mono, monospace", color: "#8898BB" }}
                  >
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

export const getStaticProps: GetStaticProps = async () => {
  return { props: { portfolio: allPortfolio } };
}
