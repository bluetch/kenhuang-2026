import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SiteLayout } from "components/SiteLayout";
import { Badge } from "components/ui/badge";
import { Button } from "components/ui/button";
import { Separator } from "components/ui/separator";
import { fetcher } from "utils";

function dateFormat(d) {
  const s = String(d);
  if (s.length === 8) {
    return `${s.slice(0, 4)}.${s.slice(4, 6)}.${s.slice(6, 8)}`;
  }
  return s;
}

const stats = [
  { value: "15+", label: "Years of experience" },
  { value: "50+", label: "Mentor sessions" },
  { value: "10", label: "Countries worked with" },
  { value: "6", label: "Companies" },
];

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    fetcher("/api/articles", { setState: setArticles });
    fetcher("/api/portfolio", { setState: setPortfolio });
  }, []);

  const featuredWork = useMemo(() => {
    const sorted = [...portfolio].sort((a, b) => (a.date > b.date ? -1 : 1));
    if (activeFilter === "all") return sorted.slice(0, 4);
    return sorted.filter((p) => p.category.includes(activeFilter)).slice(0, 4);
  }, [portfolio, activeFilter]);

  const featuredArticles = useMemo(() => {
    return [...articles].sort((a, b) => (a.date > b.date ? -1 : 1)).slice(0, 5);
  }, [articles]);

  return (
    <SiteLayout
      title="Ken Huang — Product Designer & Frontend Developer"
      description="Product designer and frontend developer based in Taipei, Taiwan. 15+ years crafting digital experiences for Shopee, Trend Micro, and more."
    >
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
        {/* Background grid lines */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Lime accent blob */}
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(197,241,53,0.06) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 w-full">
          <div className="max-w-5xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8 animate-fade-up">
              <span
                className="text-xs tracking-widest uppercase text-lime"
                style={{ fontFamily: "JetBrains Mono, monospace" }}
              >
                Ken Huang
              </span>
              <span className="text-ink-muted">—</span>
              <span
                className="text-xs tracking-widest uppercase text-cream-muted"
                style={{ fontFamily: "JetBrains Mono, monospace" }}
              >
                Taipei, Taiwan
              </span>
            </div>

            {/* Main headline */}
            <h1
              className="animate-fade-up delay-100 text-balance"
              style={{
                fontFamily: "Fraunces, serif",
                fontSize: "clamp(3.5rem, 8vw, 7rem)",
                fontWeight: 400,
                lineHeight: 0.95,
                letterSpacing: "-0.03em",
                color: "#F2EDE4",
              }}
            >
              Designer who
              <br />
              <em style={{ fontStyle: "italic", color: "#C5F135" }}>builds,</em>
              <br />
              Developer who
              <br />
              <em style={{ fontStyle: "italic", color: "#C5F135" }}>designs.</em>
            </h1>

            <p
              className="mt-8 text-lg text-cream-muted max-w-xl leading-relaxed animate-fade-up delay-200"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              I craft digital experiences from pixel to production — product
              thinking, UX research, and frontend engineering, all in one.
            </p>

            <div className="flex flex-wrap gap-4 mt-10 animate-fade-up delay-300">
              <Link href="/portfolio">
                <Button size="lg">
                  View my work
                  <ArrowRight size={16} />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg">
                  About me
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-800">
          <span
            className="text-xs text-cream-faint tracking-widest uppercase"
            style={{ fontFamily: "JetBrains Mono, monospace" }}
          >
            Scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-cream-faint to-transparent" />
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-ink-border py-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="space-y-1">
                <p
                  style={{
                    fontFamily: "Fraunces, serif",
                    fontSize: "2.5rem",
                    fontWeight: 500,
                    color: "#C5F135",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-xs text-cream-muted tracking-wide uppercase"
                  style={{ fontFamily: "JetBrains Mono, monospace" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div className="flex items-start gap-6">
              <span
                className="text-xs text-cream-faint mt-1"
                style={{ fontFamily: "JetBrains Mono, monospace" }}
              >
                01
              </span>
              <h2
                style={{
                  fontFamily: "Fraunces, serif",
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                  color: "#F2EDE4",
                  lineHeight: 1,
                }}
              >
                Selected Work
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm text-cream-muted hover:text-lime transition-colors group"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              View all projects
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Filter tabs */}
          <div className="flex gap-1 mb-10 border-b border-ink-border">
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

          {/* Work grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredWork.map((item, i) => (
              <Link
                key={item.url}
                href={item.url}
                className="group relative overflow-hidden border border-ink-border hover:border-ink-muted transition-all duration-300 bg-ink-surface"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Image */}
                <div className="overflow-hidden aspect-[16/9] bg-ink-elevated">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="p-6 flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      {item.category.map((cat) => (
                        <Badge key={cat} variant="default" className="text-[10px]">
                          {cat}
                        </Badge>
                      ))}
                    </div>
                    <h3
                      style={{ fontFamily: "Fraunces, serif", fontWeight: 500, fontSize: "1.2rem", color: "#F2EDE4" }}
                    >
                      {item.name}
                    </h3>
                    <p className="text-sm text-cream-muted line-clamp-2" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                      {item.desc}
                    </p>
                  </div>
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 border border-ink-border flex items-center justify-center group-hover:border-lime group-hover:text-lime transition-all duration-200">
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                </div>

                {/* Company tag */}
                <div className="px-6 pb-4">
                  <span
                    className="text-xs text-cream-faint"
                    style={{ fontFamily: "JetBrains Mono, monospace" }}
                  >
                    {item.company} · {item.date}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About strip */}
      <section className="py-24 border-y border-ink-border bg-ink-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-6">
                <span className="text-xs text-cream-faint mt-1" style={{ fontFamily: "JetBrains Mono, monospace" }}>02</span>
                <h2
                  style={{
                    fontFamily: "Fraunces, serif",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    fontWeight: 400,
                    letterSpacing: "-0.02em",
                    color: "#F2EDE4",
                    lineHeight: 1.1,
                  }}
                >
                  Bridging design
                  <br />
                  <em style={{ color: "#C5F135", fontStyle: "italic" }}>& engineering</em>
                </h2>
              </div>
              <p className="text-cream-muted leading-relaxed max-w-md" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                Since 2005, I have enjoyed turning complex problems into
                simple, beautiful and intuitive products. Over 15 years across
                6 companies in APAC and Europe — from Shopee to Trend Micro.
              </p>
              <div className="flex gap-4">
                <Link href="/about">
                  <Button variant="outline">
                    Read my story
                    <ArrowRight size={14} />
                  </Button>
                </Link>
                <a href="/mentorship">
                  <Button variant="ghost">Mentorship</Button>
                </a>
              </div>
            </div>

            {/* Skills grid */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Product Design", items: ["UX Research", "Figma", "Design Systems", "Prototyping"] },
                { label: "Frontend Dev", items: ["React / Next.js", "TypeScript", "Tailwind CSS", "Node.js"] },
                { label: "Leadership", items: ["Mentorship", "Team Lead", "Career Coach", "50+ Sessions"] },
              ].map((skill) => (
                <div key={skill.label} className="border border-ink-border p-4 space-y-3 hover:border-ink-muted transition-colors">
                  <p
                    className="text-[10px] tracking-widest uppercase text-lime"
                    style={{ fontFamily: "JetBrains Mono, monospace" }}
                  >
                    {skill.label}
                  </p>
                  <ul className="space-y-1.5">
                    {skill.items.map((item) => (
                      <li key={item} className="text-xs text-cream-muted" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Writing */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div className="flex items-start gap-6">
              <span className="text-xs text-cream-faint mt-1" style={{ fontFamily: "JetBrains Mono, monospace" }}>03</span>
              <h2
                style={{
                  fontFamily: "Fraunces, serif",
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                  color: "#F2EDE4",
                  lineHeight: 1,
                }}
              >
                Writing
              </h2>
            </div>
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 text-sm text-cream-muted hover:text-lime transition-colors group"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              All articles
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="space-y-0">
            {featuredArticles.map((item, i) => {
              const isExternal = item.url.startsWith("http");
              return (
                <Link
                  key={item.url}
                  href={item.url}
                  target={isExternal ? "_blank" : "_self"}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="group flex items-start gap-6 py-6 border-b border-ink-border hover:bg-ink-surface transition-colors duration-200 px-4 -mx-4"
                >
                  <span
                    className="text-xs text-cream-faint mt-1 w-6 flex-shrink-0 pt-0.5"
                    style={{ fontFamily: "JetBrains Mono, monospace" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-center gap-2 mb-1">
                      {item.category.slice(0, 2).map((cat) => (
                        <Badge key={cat} variant="outline" className="text-[9px]">
                          {cat}
                        </Badge>
                      ))}
                    </div>
                    <h3
                      className="text-cream group-hover:text-lime transition-colors duration-200 line-clamp-2"
                      style={{ fontFamily: "Fraunces, serif", fontSize: "1rem", fontWeight: 500 }}
                    >
                      {item.name}
                    </h3>
                  </div>
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 border-t border-ink-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2
            style={{
              fontFamily: "Fraunces, serif",
              fontSize: "clamp(3rem, 7vw, 6rem)",
              fontWeight: 400,
              letterSpacing: "-0.03em",
              lineHeight: 0.95,
              color: "#F2EDE4",
            }}
          >
            Let&apos;s build
            <br />
            <em style={{ color: "#C5F135", fontStyle: "italic" }}>something</em>
            <br />
            together.
          </h2>
          <p className="mt-6 text-cream-muted max-w-sm mx-auto" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
            Available for design consulting, frontend projects, and mentorship sessions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-10">
            <a href="mailto:bluetch@gmail.com">
              <Button size="lg">
                Get in touch
                <ArrowUpRight size={16} />
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/bluetch/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg">
                LinkedIn
                <ArrowUpRight size={14} />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
