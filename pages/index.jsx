import { useEffect, useMemo, useState, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Zap, Shield, Star, Trophy, Sword } from "lucide-react";
import { SiteLayout } from "components/SiteLayout";
import { Badge } from "components/ui/badge";
import { Button } from "components/ui/button";
import { fetcher } from "utils";
import dynamic from "next/dynamic";

const ParticleCanvas = dynamic(
  () => import("components/ParticleCanvas").then((m) => m.ParticleCanvas),
  { ssr: false }
);

function dateFormat(d) {
  const s = String(d);
  if (s.length === 8) return `${s.slice(0, 4)}.${s.slice(4, 6)}.${s.slice(6, 8)}`;
  return s;
}

// XP Bar component
function XPBar({ label, value, max, color = "bg-game-blue", delay = 0 }) {
  const [filled, setFilled] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setFilled(true), 800 + delay);
    return () => clearTimeout(t);
  }, [delay]);
  const pct = Math.round((value / max) * 100);
  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center">
        <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest" style={{ fontFamily: "Space Mono, monospace" }}>
          {label}
        </span>
        <span className="text-[10px] font-mono text-dark font-bold" style={{ fontFamily: "Space Mono, monospace" }}>
          {value}/{max}
        </span>
      </div>
      <div className="h-3 bg-paper-warm border-2 border-dark overflow-hidden">
        <div
          className={`h-full ${color} transition-all duration-1000 ease-out`}
          style={{ width: filled ? `${pct}%` : "0%", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.4)" }}
        />
      </div>
    </div>
  );
}

// Stat block
function StatBlock({ icon: Icon, value, label, color }) {
  return (
    <div className={`border-2 border-dark p-4 bg-white shadow-pixel hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-150 group`}>
      <div className={`w-8 h-8 ${color} border-2 border-dark flex items-center justify-center mb-2`}>
        <Icon size={14} className="text-white" />
      </div>
      <p className="text-2xl font-bold text-dark" style={{ fontFamily: "Orbitron, monospace" }}>{value}</p>
      <p className="text-xs text-text-muted uppercase tracking-wider mt-1" style={{ fontFamily: "Space Mono, monospace" }}>{label}</p>
    </div>
  );
}

// Achievement badge
function Achievement({ icon, label, earned = true }) {
  return (
    <div className={`flex items-center gap-2 px-3 py-2 border-2 ${earned ? "border-game-yellow bg-game-yellow/10 shadow-pixel-yellow" : "border-paper-muted bg-paper-warm opacity-50"}`}>
      <span className="text-lg">{icon}</span>
      <span className="text-xs font-mono uppercase tracking-wide text-dark" style={{ fontFamily: "Space Mono, monospace" }}>{label}</span>
    </div>
  );
}

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [showHUD, setShowHUD] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    fetcher("/api/articles", { setState: setArticles });
    fetcher("/api/portfolio", { setState: setPortfolio });
    const t = setTimeout(() => setShowHUD(true), 300);
    return () => clearTimeout(t);
  }, []);

  const featuredWork = useMemo(() => {
    const sorted = [...portfolio].sort((a, b) => (a.date > b.date ? -1 : 1));
    if (activeFilter === "all") return sorted.slice(0, 4);
    return sorted.filter((p) => p.category.includes(activeFilter)).slice(0, 4);
  }, [portfolio, activeFilter]);

  const featuredArticles = useMemo(() => {
    return [...articles].sort((a, b) => (a.date > b.date ? -1 : 1)).slice(0, 6);
  }, [articles]);

  return (
    <SiteLayout
      title="KEN HUANG — Product Designer & Frontend Developer"
      description="Product designer and frontend developer based in Taipei, Taiwan. 15+ years crafting digital experiences."
    >
      {/* ══════════════════════════════════════
          HERO — GAME START SCREEN
      ══════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="min-h-screen relative overflow-hidden flex items-center pt-16 bg-paper"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(67,97,238,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      >
        {/* Canvas particle background */}
        <div className="absolute inset-0">
          <ParticleCanvas />
        </div>

        {/* Corner decorations — game HUD corners */}
        <div className="absolute top-20 left-6 w-8 h-8 border-t-2 border-l-2 border-game-blue" />
        <div className="absolute top-20 right-6 w-8 h-8 border-t-2 border-r-2 border-game-blue" />
        <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-game-blue" />
        <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-game-blue" />

        {/* Player tag */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-2 bg-dark text-white px-4 py-1.5 border-2 border-dark text-xs font-mono" style={{ fontFamily: "Space Mono, monospace" }}>
            <span className="w-2 h-2 bg-game-green rounded-full animate-pulse" />
            PLAYER 1 · ONLINE
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Main content */}
            <div className="space-y-8">
              {/* Game label */}
              <div
                className={`transition-all duration-500 ${showHUD ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                <span
                  className="text-xs text-game-blue font-bold tracking-widest uppercase"
                  style={{ fontFamily: "Space Mono, monospace" }}
                >
                  — SELECT YOUR HERO —
                </span>
              </div>

              {/* Main title */}
              <div
                className={`space-y-2 transition-all duration-700 delay-100 ${showHUD ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              >
                <h1
                  className="leading-none text-dark glitch"
                  data-text="KEN HUANG"
                  style={{
                    fontFamily: "Orbitron, monospace",
                    fontSize: "clamp(2.8rem, 7vw, 6rem)",
                    fontWeight: 900,
                    letterSpacing: "-0.02em",
                  }}
                >
                  KEN HUANG
                </h1>
                <div className="flex items-center gap-3">
                  <div className="h-0.5 w-8 bg-game-blue" />
                  <p
                    className="text-dark font-semibold"
                    style={{
                      fontFamily: "Syne, sans-serif",
                      fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
                    }}
                  >
                    Product Designer × Frontend Dev
                  </p>
                </div>
              </div>

              {/* XP Bars */}
              <div
                className={`space-y-3 bg-white border-2 border-dark p-5 shadow-pixel transition-all duration-700 delay-200 ${showHUD ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              >
                <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest mb-3" style={{ fontFamily: "Space Mono, monospace" }}>
                  ▸ CHARACTER STATS
                </p>
                <XPBar label="Design XP" value={15} max={15} color="bg-game-blue" delay={0} />
                <XPBar label="Code XP" value={13} max={15} color="bg-game-pink" delay={150} />
                <XPBar label="Mentor XP" value={8} max={10} color="bg-game-yellow" delay={300} />
                <XPBar label="Level" value={99} max={99} color="bg-game-green" delay={450} />
              </div>

              {/* CTA buttons */}
              <div
                className={`flex flex-wrap gap-3 transition-all duration-700 delay-300 ${showHUD ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              >
                <Link href="/portfolio">
                  <Button size="lg" className="font-game" style={{ fontFamily: "Space Mono, monospace" }}>
                    ▶ VIEW WORK
                    <ArrowRight size={16} />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" size="lg" style={{ fontFamily: "Space Mono, monospace" }}>
                    CHARACTER INFO
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right: Character card */}
            <div
              className={`transition-all duration-700 delay-200 ${showHUD ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
            >
              <div className="bg-white border-2 border-dark shadow-pixel-lg relative">
                {/* Card header */}
                <div className="bg-dark px-6 py-3 flex justify-between items-center">
                  <span className="text-white font-bold text-xs tracking-widest" style={{ fontFamily: "Space Mono, monospace" }}>
                    PLAYER CARD
                  </span>
                  <span className="text-game-yellow text-xs font-mono" style={{ fontFamily: "Space Mono, monospace" }}>
                    LVL 99
                  </span>
                </div>

                {/* Avatar + info */}
                <div className="p-6 flex items-start gap-6">
                  <div className="relative">
                    <div className="w-24 h-24 border-2 border-dark overflow-hidden flex-shrink-0">
                      <img
                        src="/images/about/kenhuang_avatar.png"
                        alt="Ken Huang"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Level badge */}
                    <div className="absolute -bottom-2 -right-2 w-7 h-7 bg-game-yellow border-2 border-dark flex items-center justify-center">
                      <Star size={12} className="text-dark" fill="currentColor" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="font-bold text-sm text-dark" style={{ fontFamily: "Orbitron, monospace" }}>KEN HUANG</p>
                    <p className="text-xs text-game-blue font-semibold uppercase" style={{ fontFamily: "Space Mono, monospace" }}>
                      UX ENGINEER
                    </p>
                    <p className="text-xs text-text-muted" style={{ fontFamily: "Space Mono, monospace" }}>
                      CLASS: Designer / Dev
                      <br />
                      ORIGIN: Taipei, TW
                      <br />
                      EXP: 15+ Years
                    </p>
                  </div>
                </div>

                {/* Abilities */}
                <div className="px-6 pb-4 space-y-2">
                  <p className="text-[10px] text-text-muted uppercase tracking-widest mb-3" style={{ fontFamily: "Space Mono, monospace" }}>
                    ▸ ABILITIES
                  </p>
                  {[
                    { name: "Product Thinking", icon: "🧠", value: 95 },
                    { name: "React / Next.js", icon: "⚛️", value: 90 },
                    { name: "Figma / Design", icon: "🎨", value: 92 },
                    { name: "Mentorship", icon: "🎓", value: 88 },
                  ].map((ability) => (
                    <div key={ability.name} className="flex items-center gap-3">
                      <span className="text-sm w-5">{ability.icon}</span>
                      <span className="text-xs text-dark flex-1" style={{ fontFamily: "Space Mono, monospace" }}>
                        {ability.name}
                      </span>
                      <div className="flex gap-0.5">
                        {Array.from({ length: 10 }).map((_, i) => (
                          <div
                            key={i}
                            className={`w-2.5 h-2 border border-dark ${i < Math.round(ability.value / 10) ? "bg-game-blue" : "bg-paper-warm"}`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Achievements */}
                <div className="border-t-2 border-dark px-6 py-4">
                  <p className="text-[10px] text-text-muted uppercase tracking-widest mb-3" style={{ fontFamily: "Space Mono, monospace" }}>
                    ▸ ACHIEVEMENTS
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["🏆 Shopee DLS", "🌍 10 Countries", "👟 800km Camino", "🎓 50+ Mentees"].map((a) => (
                      <span key={a} className="text-[10px] bg-game-yellow/20 border border-game-yellow px-2 py-0.5 text-dark" style={{ fontFamily: "Space Mono, monospace" }}>
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
          <p className="text-[10px] text-text-muted font-mono animate-blink" style={{ fontFamily: "Space Mono, monospace" }}>
            SCROLL TO EXPLORE
          </p>
          <div className="w-px h-8 bg-game-blue" />
        </div>
      </section>

      {/* ══════════════════════════════════════
          STATS STRIP
      ══════════════════════════════════════ */}
      <section className="border-y-2 border-dark bg-dark py-6 overflow-hidden">
        {/* Scrolling marquee */}
        <div className="flex overflow-hidden">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {[
              "15+ YEARS EXP",
              "★ SHOPEE DLS",
              "50+ MENTOR SESSIONS",
              "10 COUNTRIES",
              "REACT / NEXT.JS",
              "PRODUCT DESIGN",
              "TAIPEI TAIWAN",
              "800KM CAMINO",
              "15+ YEARS EXP",
              "★ SHOPEE DLS",
              "50+ MENTOR SESSIONS",
              "10 COUNTRIES",
              "REACT / NEXT.JS",
              "PRODUCT DESIGN",
              "TAIPEI TAIWAN",
              "800KM CAMINO",
            ].map((item, i) => (
              <span
                key={i}
                className={`text-sm font-bold tracking-widest ${i % 4 === 0 ? "text-game-blue" : i % 4 === 1 ? "text-game-pink" : i % 4 === 2 ? "text-game-yellow" : "text-game-green"}`}
                style={{ fontFamily: "Space Mono, monospace" }}
              >
                {item}
                <span className="mx-6 text-gray-600">◆</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SELECTED WORK — MISSION LOG
      ══════════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div className="space-y-2">
              <p className="text-xs text-game-blue font-bold tracking-widest uppercase" style={{ fontFamily: "Space Mono, monospace" }}>
                ◆ MISSION LOG
              </p>
              <h2
                className="text-dark leading-none"
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  fontWeight: 800,
                }}
              >
                Selected Work
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-semibold text-game-blue hover:text-dark transition-colors group border-b-2 border-game-blue pb-0.5"
              style={{ fontFamily: "Space Mono, monospace" }}
            >
              VIEW ALL MISSIONS
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Filter tabs */}
          <div className="flex gap-0 mb-10 border-2 border-dark w-fit">
            {["all", "design", "frontend"].map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 text-xs font-bold tracking-widest uppercase transition-all duration-150 border-r-2 border-dark last:border-r-0 ${
                  activeFilter === f
                    ? "bg-dark text-white"
                    : "bg-white text-text-muted hover:bg-paper-warm"
                }`}
                style={{ fontFamily: "Space Mono, monospace" }}
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
                className="group block bg-white border-2 border-dark shadow-pixel hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-150 overflow-hidden"
              >
                {/* Mission number badge */}
                <div className="relative overflow-hidden aspect-[16/9] bg-paper-warm">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Mission overlay */}
                  <div className="absolute top-3 left-3">
                    <div className="bg-dark text-white px-2 py-1 text-[10px] font-mono border border-white" style={{ fontFamily: "Space Mono, monospace" }}>
                      MISSION {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>
                  {/* Category badges */}
                  <div className="absolute top-3 right-3 flex gap-1">
                    {item.category.map((cat) => (
                      <span
                        key={cat}
                        className={`px-2 py-0.5 text-[9px] font-bold border ${cat === "design" ? "bg-game-pink text-white border-game-pink" : "bg-game-blue text-white border-game-blue"}`}
                        style={{ fontFamily: "Space Mono, monospace" }}
                      >
                        {cat.toUpperCase()}
                      </span>
                    ))}
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-game-blue/0 group-hover:bg-game-blue/10 transition-all duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 bg-game-blue border-2 border-white flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                      <ArrowUpRight size={20} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3
                    className="text-dark font-bold mb-2 group-hover:text-game-blue transition-colors"
                    style={{ fontFamily: "Syne, sans-serif", fontSize: "1.1rem", fontWeight: 700 }}
                  >
                    {item.name}
                  </h3>
                  <p className="text-sm text-text-muted line-clamp-2 mb-3" style={{ fontFamily: "DM Sans, sans-serif" }}>
                    {item.desc}
                  </p>
                  <p className="text-[10px] text-text-faint font-mono" style={{ fontFamily: "Space Mono, monospace" }}>
                    {item.company} · {item.date}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ABOUT — CHARACTER PROFILE
      ══════════════════════════════════════ */}
      <section className="py-24 border-t-2 border-dark bg-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div className="space-y-8">
              <div className="space-y-2">
                <p className="text-xs text-game-blue font-bold tracking-widest uppercase" style={{ fontFamily: "Space Mono, monospace" }}>
                  ◆ CHARACTER PROFILE
                </p>
                <h2
                  className="text-white leading-none"
                  style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}
                >
                  Designer who builds.
                  <br />
                  <span className="text-game-blue">Developer who designs.</span>
                </h2>
              </div>
              <p className="text-gray-400 leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif" }}>
                Since 2005, turning complex problems into simple, beautiful, and
                intuitive products. 15+ years across APAC and Europe — from Shopee
                to Trend Micro.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Sword, value: "15+", label: "Years EXP", color: "bg-game-blue" },
                  { icon: Shield, value: "6", label: "Companies", color: "bg-game-pink" },
                  { icon: Trophy, value: "50+", label: "Mentees", color: "bg-game-yellow" },
                  { icon: Zap, value: "10", label: "Countries", color: "bg-game-green" },
                ].map((s) => (
                  <div key={s.label} className="bg-gray-900 border-2 border-gray-700 p-4 hover:border-game-blue transition-colors">
                    <div className={`w-7 h-7 ${s.color} flex items-center justify-center mb-2`}>
                      <s.icon size={13} className="text-white" />
                    </div>
                    <p className="text-xl font-bold text-white" style={{ fontFamily: "Orbitron, monospace" }}>{s.value}</p>
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider" style={{ fontFamily: "Space Mono, monospace" }}>{s.label}</p>
                  </div>
                ))}
              </div>
              <Link href="/about">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-dark" style={{ fontFamily: "Space Mono, monospace" }}>
                  VIEW FULL PROFILE
                  <ArrowRight size={14} />
                </Button>
              </Link>
            </div>

            {/* Right: Skill tree */}
            <div className="space-y-4">
              <p className="text-xs text-game-blue font-bold tracking-widest uppercase mb-6" style={{ fontFamily: "Space Mono, monospace" }}>
                ◆ SKILL TREE
              </p>
              {[
                { cat: "DESIGN", color: "bg-game-pink", skills: ["Product Thinking", "UX Research", "Figma", "Design Systems", "Prototyping"] },
                { cat: "FRONTEND", color: "bg-game-blue", skills: ["React / Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Git / CI/CD"] },
                { cat: "LEADERSHIP", color: "bg-game-yellow", skills: ["Mentorship", "Team Lead", "Career Coach", "Portfolio Review"] },
              ].map((group) => (
                <div key={group.cat} className="bg-gray-900 border-2 border-gray-700 p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`w-2 h-4 ${group.color}`} />
                    <p className="text-xs font-bold text-white tracking-widest" style={{ fontFamily: "Space Mono, monospace" }}>
                      {group.cat}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] bg-gray-800 text-gray-300 border border-gray-700 px-2 py-1"
                        style={{ fontFamily: "Space Mono, monospace" }}
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
          WRITING — QUEST LOG
      ══════════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div className="space-y-2">
              <p className="text-xs text-game-pink font-bold tracking-widest uppercase" style={{ fontFamily: "Space Mono, monospace" }}>
                ◆ QUEST LOG
              </p>
              <h2
                className="text-dark leading-none"
                style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800 }}
              >
                Writing
              </h2>
            </div>
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 text-sm font-semibold text-game-pink hover:text-dark transition-colors border-b-2 border-game-pink pb-0.5"
              style={{ fontFamily: "Space Mono, monospace" }}
            >
              ALL QUESTS
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="space-y-0 border-2 border-dark">
            {featuredArticles.map((item, i) => {
              const isExternal = item.url.startsWith("http");
              return (
                <Link
                  key={item.url}
                  href={item.url}
                  target={isExternal ? "_blank" : "_self"}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 p-4 border-b-2 border-dark last:border-b-0 bg-white hover:bg-game-blue hover:text-white transition-all duration-150"
                >
                  <span
                    className="text-xs font-mono text-text-faint group-hover:text-white/60 w-6 flex-shrink-0"
                    style={{ fontFamily: "Space Mono, monospace" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-12 h-10 overflow-hidden border border-paper-border group-hover:border-white/30 flex-shrink-0 hidden sm:block">
                    <img src={item.img} alt="" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      {item.category.slice(0, 1).map((cat) => (
                        <span key={cat} className="text-[9px] font-mono text-game-blue group-hover:text-white/70 uppercase" style={{ fontFamily: "Space Mono, monospace" }}>
                          [{cat}]
                        </span>
                      ))}
                    </div>
                    <h3
                      className="text-dark group-hover:text-white transition-colors line-clamp-1 font-semibold text-sm"
                      style={{ fontFamily: "DM Sans, sans-serif" }}
                    >
                      {item.name}
                    </h3>
                  </div>
                  <div className="flex-shrink-0 text-xs text-text-faint group-hover:text-white/60 font-mono hidden md:block" style={{ fontFamily: "Space Mono, monospace" }}>
                    {dateFormat(item.date)}
                  </div>
                  {isExternal
                    ? <ArrowUpRight size={14} className="flex-shrink-0 text-text-faint group-hover:text-white transition-colors" />
                    : <ArrowRight size={14} className="flex-shrink-0 text-text-faint group-hover:text-white transition-colors" />}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA — GAME OVER / CONTINUE?
      ══════════════════════════════════════ */}
      <section className="py-24 lg:py-32 border-t-2 border-dark bg-paper relative overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(67,97,238,0.06) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="bg-dark border-2 border-dark inline-block px-4 py-1">
              <p className="text-game-yellow text-xs font-mono flicker" style={{ fontFamily: "Space Mono, monospace" }}>
                ★ READY TO COLLABORATE? ★
              </p>
            </div>
            <h2
              className="text-dark"
              style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 900, lineHeight: 1 }}
            >
              Let&apos;s build
              <br />
              <span className="text-game-blue">something</span>
              <br />
              together.
            </h2>
            <p className="text-text-muted" style={{ fontFamily: "DM Sans, sans-serif" }}>
              Available for design consulting, frontend projects, and mentorship.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="mailto:bluetch@gmail.com">
                <Button size="lg" style={{ fontFamily: "Space Mono, monospace" }}>
                  ▶ CONTACT ME
                  <ArrowUpRight size={16} />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/bluetch/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" style={{ fontFamily: "Space Mono, monospace" }}>
                  LINKEDIN
                  <ArrowUpRight size={14} />
                </Button>
              </a>
              <Link href="/mentorship">
                <Button variant="yellow" size="lg" style={{ fontFamily: "Space Mono, monospace" }}>
                  MENTORSHIP
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
