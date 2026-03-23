import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SiteLayout } from "components/SiteLayout";
import { Badge } from "components/ui/badge";
import { fetcher } from "utils";

function dateFormat(d) {
  const s = String(d);
  if (s.length === 8) {
    return `${s.slice(0, 4)}.${s.slice(4, 6)}.${s.slice(6, 8)}`;
  }
  return s;
}

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

  const filters = ["all", "camino", "frontend"];

  return (
    <SiteLayout
      title="Writing — Ken Huang"
      description="Articles by Ken Huang on frontend engineering, product design, and travel."
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
                Writing
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
                Articles
              </h1>
            </div>
            <p
              className="text-cream-muted max-w-xs leading-relaxed"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              {data.length} articles on design, engineering,
              and life on the road.
            </p>
          </div>

          {/* Filter */}
          <div className="flex gap-1 mt-10 border-b border-ink-border">
            {filters.map((f) => (
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

      {/* Article list */}
      <section className="py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-0">
            {data.map((item, i) => {
              const isExternal = item.url.startsWith("http");
              return (
                <Link
                  key={item.url}
                  href={item.url}
                  target={isExternal ? "_blank" : "_self"}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="group flex items-start gap-6 py-6 border-b border-ink-border hover:bg-ink-surface transition-colors duration-200 px-4 -mx-4"
                >
                  {/* Index number */}
                  <span
                    className="text-xs text-cream-faint w-8 flex-shrink-0 pt-1"
                    style={{ fontFamily: "JetBrains Mono, monospace" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Thumbnail */}
                  <div className="w-16 h-16 flex-shrink-0 overflow-hidden border border-ink-border bg-ink-elevated hidden sm:block">
                    <img
                      src={item.img}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0 space-y-1.5">
                    <div className="flex items-center gap-2">
                      {item.category.slice(0, 2).map((cat) => (
                        <Badge key={cat} variant="outline" className="text-[9px]">
                          {cat}
                        </Badge>
                      ))}
                    </div>
                    <h3
                      className="text-cream group-hover:text-lime transition-colors duration-200 line-clamp-2"
                      style={{
                        fontFamily: "Fraunces, serif",
                        fontSize: "1rem",
                        fontWeight: 500,
                        lineHeight: 1.4,
                      }}
                    >
                      {item.name}
                    </h3>
                    <p
                      className="text-xs text-cream-muted line-clamp-1 hidden md:block"
                      style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                    >
                      {item.desc}
                    </p>
                  </div>

                  {/* Meta */}
                  <div className="flex items-center gap-4 flex-shrink-0 mt-1">
                    <span
                      className="text-xs text-cream-faint hidden sm:block"
                      style={{ fontFamily: "JetBrains Mono, monospace" }}
                    >
                      {dateFormat(item.date)}
                    </span>
                    {isExternal ? (
                      <ArrowUpRight size={14} className="text-cream-faint group-hover:text-lime transition-colors" />
                    ) : (
                      <ArrowRight size={14} className="text-cream-faint group-hover:text-lime transition-colors" />
                    )}
                  </div>
                </Link>
              );
            })}
          </div>

          {data.length === 0 && (
            <div className="py-24 text-center">
              <p className="text-cream-muted" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                No articles found.
              </p>
            </div>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
