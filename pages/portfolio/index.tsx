import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SiteLayout } from "components/SiteLayout";
import { portfolio as allPortfolio, PortfolioItem } from "data/portfolio";
import { GetStaticProps } from "next";

const FILTERS = [
  { id: "all", label: "All work" },
  { id: "design", label: "Product design" },
  { id: "frontend", label: "Frontend" },
];

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
      title="Work — Ken Huang"
      description="Selected product design and frontend work by Ken Huang."
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
                  Work
                </p>
                <h1
                  className="mt-4 text-[clamp(3rem,7vw,6rem)] leading-[0.92] tracking-[-0.05em]"
                  style={{ fontFamily: "Syne, sans-serif", fontWeight: 700 }}
                >
                  Selected work,
                  <br />
                  shipped with taste.
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5f6675]">
                  Product systems, growth surfaces, internal tools, and design work that had to survive real use.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {FILTERS.map((filter) => {
                  const isActive = activeFilter === filter.id;
                  return (
                    <button
                      key={filter.id}
                      onClick={() => setActiveFilter(filter.id)}
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
          </div>
        </section>

        <section className="px-6 pb-20 md:px-8 lg:px-10 lg:pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-5 lg:grid-cols-2">
              {data.map((item, index) => (
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
                        <h2 className="mt-2 text-2xl leading-tight text-[#1d2636]" style={{ fontFamily: "Syne, sans-serif", fontWeight: 700 }}>
                          {item.name}
                        </h2>
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
              <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-[#1f3a5f]">
                Back to home
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: { portfolio: allPortfolio } };
};
