import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SiteLayout } from "components/SiteLayout";
import { CharacterSelector } from "components/CharacterSelector";
import { articles as allArticles } from "data/articles";
import { portfolio as allPortfolio } from "data/portfolio";
import { getMdxArticles } from "lib/mdx";

function dateFormat(d) {
  const s = String(d);
  if (s.length === 8) return `${s.slice(0, 4)}.${s.slice(4, 6)}.${s.slice(6, 8)}`;
  return s;
}


// Terminal line component
function TermLine({ prefix = ">", text, color = "#4D9EFF", delay = 0 }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <div
      className="flex items-start gap-2 transition-all duration-300"
      style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(8px)" }}
    >
      <span className="flex-shrink-0" style={{ fontFamily: "Space Mono, monospace", fontSize: "12px", color }}>
        {prefix}
      </span>
      <span className="text-[#D0E4FF] text-xs leading-relaxed" style={{ fontFamily: "Space Mono, monospace" }}>
        {text}
      </span>
    </div>
  );
}

const CAT_COLORS = {
  design: { border: "#FFD60A", glow: "rgba(255,214,10,0.4)" },
  frontend: { border: "#7BBFFF", glow: "rgba(123,191,255,0.4)" },
  camino: { border: "#FFD60A", glow: "rgba(255,214,10,0.3)" },
  other: { border: "#A78BFA", glow: "rgba(167,139,250,0.3)" },
};

export default function Home({ articles, portfolio }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setBooted(true), 200);
    return () => clearTimeout(t);
  }, []);

  const featuredWork = useMemo(() => {
    const sorted = [...portfolio].sort((a, b) => (a.date > b.date ? -1 : 1));
    if (activeFilter === "all") return sorted.slice(0, 6);
    return sorted.filter((p) => p.category.includes(activeFilter)).slice(0, 6);
  }, [portfolio, activeFilter]);

  const featuredArticles = useMemo(() => {
    return [...articles].sort((a, b) => (a.date > b.date ? -1 : 1)).slice(0, 6);
  }, [articles]);

  return (
    <SiteLayout
      title="KEN HUANG — Product Designer & Indie Dev"
      description="Product designer, frontend developer & amateur game dev based in Taipei, Taiwan."
    >

      {/* ══════════════════════════════════════
          HERO — BOOT SCREEN
      ══════════════════════════════════════ */}
      <section
        className="min-h-screen relative overflow-hidden flex items-center pt-14"
        style={{ background: "#0D1533" }}
      >
        {/* Pixel grid background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(77,158,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(77,158,255,0.04) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Scanline overlay */}
        <div className="scanlines absolute inset-0 pointer-events-none" />

        {/* Moving scan beam */}
        <div className="scan-beam" />

        {/* Corner HUD brackets */}
        <div className="absolute top-20 left-6 w-6 h-6 border-t-2 border-l-2 border-[#4D9EFF] opacity-60" />
        <div className="absolute top-20 right-6 w-6 h-6 border-t-2 border-r-2 border-[#4D9EFF] opacity-60" />
        <div className="absolute bottom-10 left-6 w-6 h-6 border-b-2 border-l-2 border-[#4D9EFF] opacity-60" />
        <div className="absolute bottom-10 right-6 w-6 h-6 border-b-2 border-r-2 border-[#4D9EFF] opacity-60" />

        {/* Status indicator */}
        <div className="absolute top-[72px] left-1/2 -translate-x-1/2 flex items-center gap-2 border border-[#243570] bg-[#0D1533]/90 px-4 py-1.5">
          <span className="w-1.5 h-1.5 bg-[#4D9EFF] rounded-full animate-pulse" />
          <span className="text-[10px] text-[#4D9EFF]" style={{ fontFamily: "Space Mono, monospace" }}>
            PLAYER_1 · ONLINE · LV 15
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* ── LEFT: Profile ── */}
            <div
              className="space-y-8"
              style={{ opacity: booted ? 1 : 0, transform: booted ? "none" : "translateY(20px)", transition: "all 0.6s ease" }}
            >
              {/* Boot sequence */}
              <div className="space-y-1.5 font-mono border-l-2 border-[#4D9EFF]/30 pl-4">
                <TermLine prefix="$" text="init kenhuang.profile --mode=indie_dev" delay={100} />
                <TermLine prefix=">" text="LOADING: product_designer.exe ......... OK" color="#4D9EFF" delay={400} />
                <TermLine prefix=">" text="LOADING: frontend_dev.exe ............. OK" color="#7BBFFF" delay={700} />
                <TermLine prefix=">" text="LOADING: game_dev_amateur.exe ......... OK" color="#FFD60A" delay={1000} />
                <TermLine prefix="#" text="BOOT COMPLETE. WELCOME TO TAIPEI." color="#FFD60A" delay={1300} />
              </div>

              {/* Main title */}
              <div className="space-y-3">
                <h1
                  className="leading-none text-neon-pulse"
                  style={{
                    fontFamily: "VT323, monospace",
                    fontSize: "clamp(4rem, 10vw, 8rem)",
                    color: "#4D9EFF",
                    textShadow: "0 0 20px rgba(77,158,255,0.5), 0 0 40px rgba(77,158,255,0.2)",
                    lineHeight: 0.9,
                  }}
                >
                  KEN
                  <br />
                  HUANG
                </h1>
                <div className="flex items-center gap-3">
                  <span
                    className="text-[#FFD60A] text-sm"
                    style={{ fontFamily: "Space Mono, monospace" }}
                  >
                    ▸ PRODUCT DESIGNER × FRONTEND DEV × AMATEUR INDIE DEV
                  </span>
                </div>
              </div>


              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                {["🎮 Game Dev", "🎨 Designer", "💻 Frontend", "✈️ Taipei TW"].map((b) => (
                  <span
                    key={b}
                    className="text-[10px] text-[#6880AA] border border-[#243570] bg-[#142040] px-3 py-1"
                    style={{ fontFamily: "Space Mono, monospace" }}
                  >
                    {b}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-3">
                <Link href="/portfolio">
                  <button
                    className="px-6 py-3 text-xs font-bold tracking-widest uppercase transition-all duration-150"
                    style={{
                      fontFamily: "Space Mono, monospace",
                      background: "#4D9EFF",
                      color: "#0D1533",
                      border: "2px solid #4D9EFF",
                      boxShadow: "4px 4px 0 0 #2468CC",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translate(2px,2px)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "4px 4px 0 0 #2468CC"; e.currentTarget.style.transform = "none"; }}
                  >
                    ▶ VIEW WORK
                  </button>
                </Link>
                <a href="mailto:bluetch@gmail.com">
                  <button
                    className="px-6 py-3 text-xs font-bold tracking-widest uppercase transition-all duration-150"
                    style={{
                      fontFamily: "Space Mono, monospace",
                      background: "transparent",
                      color: "#4D9EFF",
                      border: "2px solid #4D9EFF",
                      boxShadow: "4px 4px 0 0 #4D9EFF",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translate(2px,2px)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "4px 4px 0 0 #4D9EFF"; e.currentTarget.style.transform = "none"; }}
                  >
                    CONTACT ME
                  </button>
                </a>
              </div>
            </div>

            {/* ── RIGHT: Character Selector ── */}
            <div
              className="flex justify-center"
              style={{ opacity: booted ? 1 : 0, transform: booted ? "none" : "translateX(20px)", transition: "all 0.8s 0.3s ease" }}
            >
              <CharacterSelector size={330} />
            </div>

          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
          <p className="text-[9px] text-[#6880AA] animate-blink" style={{ fontFamily: "Space Mono, monospace" }}>
            ▼ SCROLL
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          MARQUEE BAND
      ══════════════════════════════════════ */}
      <section
        className="border-y overflow-hidden py-3"
        style={{ borderColor: "#243570", background: "#0B1220" }}
      >
        <div className="flex overflow-hidden">
          <div className="flex gap-10 animate-marquee whitespace-nowrap">
            {[
              { text: "15+ YRS EXP", color: "#4D9EFF" },
              { text: "SHOPEE DLS LEAD", color: "#FFD60A" },
              { text: "50+ MENTEES", color: "#7BBFFF" },
              { text: "20+ COUNTRIES", color: "#FFD60A" },
              { text: "REACT / NEXT.JS", color: "#4D9EFF" },
              { text: "AMATEUR GAME DEV", color: "#FFD60A" },
              { text: "TAIPEI TAIWAN", color: "#7BBFFF" },
              { text: "800KM CAMINO", color: "#FFD60A" },
              { text: "15+ YRS EXP", color: "#4D9EFF" },
              { text: "SHOPEE DLS LEAD", color: "#FFD60A" },
              { text: "50+ MENTEES", color: "#7BBFFF" },
              { text: "20+ COUNTRIES", color: "#FFD60A" },
              { text: "REACT / NEXT.JS", color: "#4D9EFF" },
              { text: "AMATEUR GAME DEV", color: "#FFD60A" },
              { text: "TAIPEI TAIWAN", color: "#7BBFFF" },
              { text: "800KM CAMINO", color: "#FFD60A" },
            ].map((item, i) => (
              <span
                key={i}
                className="text-xs font-bold tracking-widest"
                style={{ fontFamily: "Space Mono, monospace", color: item.color }}
              >
                {item.text}
                <span className="mx-5 text-[#243570]">◆</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WORK — // SHIPPED.LOG
      ══════════════════════════════════════ */}
      <section className="py-20 lg:py-28" style={{ background: "#0D1533" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div>
              <p
                className="mb-1"
                style={{ fontFamily: "VT323, monospace", fontSize: "1rem", color: "#4D9EFF", letterSpacing: "0.2em" }}
              >
                // SHIPPED.LOG
              </p>
              <h2
                className="leading-none"
                style={{ fontFamily: "VT323, monospace", fontSize: "clamp(3rem, 7vw, 5rem)", color: "#D0E4FF", lineHeight: 1 }}
              >
                SELECTED WORK
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="text-[11px] tracking-widest uppercase border-b border-[#4D9EFF] pb-0.5 transition-all hover:text-[#4D9EFF]"
              style={{ fontFamily: "Space Mono, monospace", color: "#6880AA" }}
            >
              ALL PROJECTS →
            </Link>
          </div>

          {/* Filter tabs */}
          <div className="flex gap-0 mb-10 border border-[#243570] w-fit">
            {["all", "design", "frontend"].map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className="px-5 py-2 text-[10px] font-bold tracking-widest uppercase border-r border-[#243570] last:border-r-0 transition-all duration-150"
                style={{
                  fontFamily: "Space Mono, monospace",
                  background: activeFilter === f ? "#4D9EFF" : "transparent",
                  color: activeFilter === f ? "#0D1533" : "#6880AA",
                }}
              >
                {f === "all" ? "ALL" : f === "design" ? "DESIGN" : "CODE"}
              </button>
            ))}
          </div>

          {/* Work grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredWork.map((item, i) => {
              const cat = item.category[0] || "";
              const colors = CAT_COLORS[cat] || { border: "#243570", glow: "rgba(36,53,112,0.4)" };
              return (
                <Link
                  key={item.url}
                  href={item.url}
                  className="group block overflow-hidden transition-all duration-150"
                  style={{
                    background: "#142040",
                    border: `2px solid #243570`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = colors.border;
                    e.currentTarget.style.boxShadow = `4px 4px 0 0 ${colors.border}`;
                    e.currentTarget.style.transform = "translate(-2px,-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#243570";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "none";
                  }}
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-[#243570]">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Dark overlay */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{ background: "rgba(13,21,51,0.1)" }}
                    />
                    {/* Mission number */}
                    <div
                      className="absolute top-2 left-2 px-2 py-0.5 text-[9px] font-mono"
                      style={{ background: "#0D1533", color: "#4D9EFF", border: "1px solid #4D9EFF", fontFamily: "Space Mono, monospace" }}
                    >
                      #{String(i + 1).padStart(2, "0")}
                    </div>
                    {/* Category chip */}
                    <div className="absolute top-2 right-2 flex gap-1">
                      {item.category.map((c) => (
                        <span
                          key={c}
                          className="text-[8px] font-bold px-2 py-0.5"
                          style={{
                            fontFamily: "Space Mono, monospace",
                            color: CAT_COLORS[c]?.border || "#D0E4FF",
                            background: "#0D1533",
                            border: `1px solid ${CAT_COLORS[c]?.border || "#243570"}`,
                          }}
                        >
                          {c.toUpperCase()}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-4">
                    <h3
                      className="font-bold mb-1 transition-colors group-hover:text-[#D0E4FF]"
                      style={{ fontFamily: "Syne, sans-serif", fontSize: "0.9rem", color: "#B0C4DE" }}
                    >
                      {item.name}
                    </h3>
                    <p
                      className="text-xs line-clamp-2 mb-3"
                      style={{ fontFamily: "DM Sans, sans-serif", color: "#8898BB" }}
                    >
                      {item.desc}
                    </p>
                    <p
                      className="text-[9px]"
                      style={{ fontFamily: "Space Mono, monospace", color: "#6880AA" }}
                    >
                      {item.company} · {item.date}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ABOUT — CHAR PROFILE PANEL
      ══════════════════════════════════════ */}
      <section
        className="py-20 border-y"
        style={{ background: "#0B1220", borderColor: "#243570" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left */}
            <div className="space-y-6">
              <div>
                <p className="text-[10px] tracking-widest uppercase mb-2" style={{ fontFamily: "Space Mono, monospace", color: "#FFD60A" }}>
                  // CHARACTER.INFO
                </p>
                <h2
                  className="leading-none mb-4"
                  style={{ fontFamily: "VT323, monospace", fontSize: "clamp(3rem, 6vw, 4.5rem)", color: "#D0E4FF", lineHeight: 0.95 }}
                >
                  DESIGNER WHO BUILDS.
                  <br />
                  <span style={{ color: "#7BBFFF" }}>DEV WHO DESIGNS.</span>
                </h2>
                <p className="text-sm leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif", color: "#8898BB" }}>
                  Since 2005, turning complex problems into simple, beautiful, and intuitive products.
                  15+ years across APAC and Europe — from Shopee to Trend Micro. Now building indie games on weekends.
                </p>
              </div>

              {/* Stat grid */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: "15+", label: "YEARS EXP", color: "#7BBFFF" },
                  { value: "6", label: "COMPANIES", color: "#FFD60A" },
                  { value: "50+", label: "MENTEES", color: "#FFD60A" },
                  { value: "20", label: "COUNTRIES", color: "#4D9EFF" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="p-4"
                    style={{ background: "#142040", border: "1px solid #243570" }}
                  >
                    <p
                      className="leading-none mb-1"
                      style={{ fontFamily: "VT323, monospace", fontSize: "2.5rem", color: s.color }}
                    >
                      {s.value}
                    </p>
                    <p className="text-[9px] tracking-widest uppercase" style={{ fontFamily: "Space Mono, monospace", color: "#8898BB" }}>
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>

              <Link href="/about">
                <button
                  className="px-6 py-2.5 text-[10px] font-bold tracking-widest uppercase transition-all duration-150"
                  style={{
                    fontFamily: "Space Mono, monospace",
                    border: "2px solid #243570",
                    color: "#6880AA",
                    background: "transparent",
                    boxShadow: "3px 3px 0 0 #243570",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#4D9EFF"; e.currentTarget.style.color = "#4D9EFF"; e.currentTarget.style.boxShadow = "3px 3px 0 0 #4D9EFF"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#243570"; e.currentTarget.style.color = "#6880AA"; e.currentTarget.style.boxShadow = "3px 3px 0 0 #243570"; }}
                >
                  ▶ FULL PROFILE
                </button>
              </Link>
            </div>

            {/* Right: Skill tree */}
            <div className="space-y-3">
              <p className="text-[10px] tracking-widest mb-4" style={{ fontFamily: "Space Mono, monospace", color: "#4D9EFF" }}>
                // SKILL_TREE.JSON
              </p>
              {[
                { cat: "DESIGN", color: "#FFD60A", skills: ["Product Thinking", "UX Research", "Figma", "Design Systems", "Prototyping"] },
                { cat: "FRONTEND", color: "#7BBFFF", skills: ["React / Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Git"] },
                { cat: "GAME DEV", color: "#4D9EFF", skills: ["Godot 4", "GDScript", "Pixel Art", "Game Design", "itch.io"] },
                { cat: "MENTOR", color: "#FFD60A", skills: ["Career Coaching", "Portfolio Review", "Mock Interview"] },
              ].map((group) => (
                <div
                  key={group.cat}
                  className="p-4"
                  style={{ background: "#142040", border: "1px solid #243570", borderLeft: `3px solid ${group.color}` }}
                >
                  <p
                    className="text-[10px] font-bold tracking-widest mb-3"
                    style={{ fontFamily: "Space Mono, monospace", color: group.color }}
                  >
                    {group.cat}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[9px] px-2 py-1"
                        style={{
                          fontFamily: "Space Mono, monospace",
                          background: "#1A2D5A",
                          color: "#8898BB",
                          border: "1px solid #2E4070",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          DEVLOG — // WRITING
      ══════════════════════════════════════ */}
      <section className="py-20" style={{ background: "#0D1533" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div>
              <p
                className="mb-1"
                style={{ fontFamily: "VT323, monospace", fontSize: "1rem", color: "#FFD60A", letterSpacing: "0.2em" }}
              >
                // DEVLOG.MD
              </p>
              <h2
                className="leading-none"
                style={{ fontFamily: "VT323, monospace", fontSize: "clamp(3rem, 7vw, 5rem)", color: "#D0E4FF", lineHeight: 1 }}
              >
                WRITING
              </h2>
            </div>
            <Link
              href="/articles"
              className="text-[11px] tracking-widest uppercase border-b pb-0.5 transition-colors hover:text-[#FFD60A]"
              style={{ fontFamily: "Space Mono, monospace", color: "#6880AA", borderColor: "#FFD60A" }}
            >
              ALL POSTS →
            </Link>
          </div>

          <div className="border border-[#243570]">
            {featuredArticles.map((item, i) => {
              const isExternal = item.url.startsWith("http");
              const cat = item.category[0] || "";
              const catColor = CAT_COLORS[cat]?.border || "#6880AA";
              return (
                <Link
                  key={item.url}
                  href={item.url}
                  target={isExternal ? "_blank" : "_self"}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-3 px-4 py-3 border-b border-[#243570] last:border-b-0 transition-all duration-150"
                  style={{ background: "#142040", borderLeft: "2px solid transparent" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "#1A2D5A"; e.currentTarget.style.borderLeftColor = catColor; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "#142040"; e.currentTarget.style.borderLeftColor = "transparent"; }}
                >
                  {/* Number */}
                  <span
                    className="text-[10px] w-6 flex-shrink-0"
                    style={{ fontFamily: "Space Mono, monospace", color: "#6880AA" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Thumbnail */}
                  <div className="w-10 h-8 overflow-hidden flex-shrink-0 hidden sm:block border border-[#243570]">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>

                  {/* Cat tag */}
                  {cat && (
                    <span
                      className="text-[8px] font-bold uppercase px-2 py-0.5 flex-shrink-0 border"
                      style={{
                        fontFamily: "Space Mono, monospace",
                        color: catColor,
                        borderColor: catColor,
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
                      style={{
                        fontFamily: "DM Sans, sans-serif",
                        color: "#B0C4DE",
                      }}
                    >
                      <span className="group-hover:text-[#D0E4FF] transition-colors">{item.name}</span>
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
                    ? <ArrowUpRight size={13} style={{ color: "#6880AA" }} className="group-hover:text-[#4D9EFF] flex-shrink-0 transition-colors" />
                    : <ArrowRight size={13} style={{ color: "#6880AA" }} className="group-hover:text-[#4D9EFF] flex-shrink-0 transition-colors" />
                  }
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA — GAME OVER SCREEN
      ══════════════════════════════════════ */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: "#0B1220", borderTop: "1px solid #243570" }}
      >
        {/* Grid bg */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(77,158,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(77,158,255,0.02) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center space-y-8">
          <div
            className="inline-block px-4 py-1.5 text-[10px] font-bold"
            style={{ fontFamily: "Space Mono, monospace", background: "#FFD60A", color: "#0D1533", border: "2px solid #CCA800" }}
          >
            ★ FIRST SESSION FREE ★
          </div>

          <h2
            className="leading-none"
            style={{ fontFamily: "VT323, monospace", fontSize: "clamp(3rem, 8vw, 6rem)", color: "#D0E4FF", lineHeight: 0.95 }}
          >
            WANNA WORK
            <br />
            <span style={{ color: "#4D9EFF", textShadow: "0 0 20px rgba(77,158,255,0.4)" }}>TOGETHER?</span>
          </h2>

          <p className="text-sm" style={{ fontFamily: "DM Sans, sans-serif", color: "#8898BB" }}>
            Open to freelance collaborations, mentorship, and interesting projects. First conversation is always free.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:bluetch@gmail.com">
              <button
                className="px-8 py-3 text-[11px] font-bold tracking-widest uppercase transition-all duration-150"
                style={{
                  fontFamily: "Space Mono, monospace",
                  background: "#4D9EFF",
                  color: "#0D1533",
                  border: "2px solid #4D9EFF",
                  boxShadow: "4px 4px 0 0 #2468CC",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translate(2px,2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "4px 4px 0 0 #2468CC"; e.currentTarget.style.transform = "none"; }}
              >
                ▶ INSERT COIN
              </button>
            </a>
{/* MENTORSHIP link hidden
            <Link href="/mentorship">
              <button
                className="px-8 py-3 text-[11px] font-bold tracking-widest uppercase transition-all duration-150"
                style={{
                  fontFamily: "Space Mono, monospace",
                  background: "transparent",
                  color: "#FFD60A",
                  border: "2px solid #FFD60A",
                  boxShadow: "4px 4px 0 0 #CCA800",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translate(2px,2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "4px 4px 0 0 #CCA800"; e.currentTarget.style.transform = "none"; }}
              >
                MENTORSHIP
              </button>
            </Link>
*/}
          </div>

          <p className="text-[10px]" style={{ fontFamily: "Space Mono, monospace", color: "#8898BB" }}>
            bluetch@gmail.com
          </p>
        </div>
      </section>

    </SiteLayout>
  );
}

export async function getStaticProps() {
  const mdxArticles = getMdxArticles();
  const mdxUrls = new Set(mdxArticles.map((a) => a.url));
  const articles = [
    ...mdxArticles,
    ...allArticles.filter((a) => !mdxUrls.has(a.url)),
  ].sort((a, b) => (a.date > b.date ? -1 : 1));
  return { props: { articles, portfolio: allPortfolio } };
}
