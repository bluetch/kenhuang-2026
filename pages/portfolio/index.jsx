import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteLayout } from "components/SiteLayout";
import { Badge } from "components/ui/badge";
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

  return (
    <SiteLayout
      title="Work — Ken Huang"
      description="Selected product design and frontend engineering projects by Ken Huang."
    >
      {/* Page header */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 border-b border-ink-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="space-y-4">
              <p
                className="text-xs tracking-widest uppercase text-lime"
                style={{ fontFamily: "JetBrains Mono, monospace" }}
              >
                Portfolio
              </p>
              <h1
                style={{
                  fontFamily: "Fraunces, serif",
                  fontSize: "clamp(3rem, 6vw, 5rem)",
                  fontWeight: 400,
                  letterSpacing: "-0.03em",
                  lineHeight: 0.95,
                  color: "#F2EDE4",
                }}
              >
                Selected Work
              </h1>
            </div>
            <p
              className="text-cream-muted max-w-xs leading-relaxed"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              {data.length} projects across product design
              and frontend engineering.
            </p>
          </div>

          {/* Filter */}
          <div className="flex gap-1 mt-10 border-b border-ink-border">
            {["all", "design", "frontend"].map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-3 text-xs tracking-widest uppercase border-b-2 -mb-[2px] transition-all duration-200 ${
                  activeFilter === f
                    ? "border-lime text-lime"
                    : "border-transparent text-cream-muted hover:text-cream"
                }`}
                style={{ fontFamily: "JetBrains Mono, monospace" }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Work grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((item, i) => (
              <Link
                key={item.url}
                href={item.url}
                className="group relative overflow-hidden border border-ink-border hover:border-ink-muted transition-all duration-300 bg-ink-surface flex flex-col"
              >
                {/* Image */}
                <div className="overflow-hidden aspect-[16/10] bg-ink-elevated flex-shrink-0">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2 flex-wrap">
                        {item.category.map((cat) => (
                          <Badge key={cat} variant="default" className="text-[9px]">
                            {cat}
                          </Badge>
                        ))}
                      </div>
                      <div className="w-7 h-7 border border-ink-border flex items-center justify-center group-hover:border-lime group-hover:text-lime transition-all duration-200 flex-shrink-0">
                        <ArrowUpRight size={12} />
                      </div>
                    </div>
                    <h3
                      className="group-hover:text-lime transition-colors duration-200"
                      style={{ fontFamily: "Fraunces, serif", fontWeight: 500, fontSize: "1.1rem", color: "#F2EDE4", lineHeight: 1.3 }}
                    >
                      {item.name}
                    </h3>
                    <p
                      className="text-sm text-cream-muted line-clamp-2 leading-relaxed"
                      style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                  <p
                    className="text-xs text-cream-faint"
                    style={{ fontFamily: "JetBrains Mono, monospace" }}
                  >
                    {item.company} · {item.date}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {data.length === 0 && (
            <div className="py-24 text-center">
              <p className="text-cream-muted" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                No projects found.
              </p>
            </div>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
