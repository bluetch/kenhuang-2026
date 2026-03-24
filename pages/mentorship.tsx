import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { SiteLayout } from "components/SiteLayout";
import mentorshipHero from "public/images/mentorship/mentorship_hero.jpg";

const programs = [
  {
    name: "Job Sprint",
    nameZh: "求職衝刺方案",
    sessions: 3,
    price: 1000,
    unit: "TWD / session",
    desc: "Targeted resume, portfolio, and interview strategy to maximize your job search success rate.",
    highlight: false,
    color: "#7BBFFF",
    icon: "🚀",
    perks: ["Portfolio critique", "Resume optimization", "Mock interview", "Interview strategy"],
  },
  {
    name: "Goal Achievement",
    nameZh: "目標實踐方案",
    sessions: 6,
    price: 900,
    unit: "TWD / session",
    desc: "Set measurable goals and build a step-by-step plan to reach your ideal state as a designer.",
    highlight: true,
    color: "#FFD60A",
    icon: "⭐",
    perks: ["Goal setting framework", "Monthly check-ins", "Design critique", "Career roadmap", "Resource curation"],
  },
  {
    name: "Career Coaching",
    nameZh: "職涯教練方案",
    sessions: 12,
    price: 800,
    unit: "TWD / session",
    desc: "Long-term career vision planning, helping you advance at work and achieve professional goals.",
    highlight: false,
    color: "#4D9EFF",
    icon: "🏆",
    perks: ["Long-term planning", "Leadership coaching", "Salary negotiation", "Network building", "Senior-level review", "On-demand support"],
  },
];

const benefits = [
  { num: "01", icon: "🔧", name: "Tools", desc: "Get up to speed with Figma, HTML/CSS/JS, and modern design tooling.", color: "#7BBFFF" },
  { num: "02", icon: "📁", name: "Portfolio Review", desc: "Improve presentation and storytelling so your portfolio stands out.", color: "#FFD60A" },
  { num: "03", icon: "🎯", name: "Career Coach", desc: "Plan mid- to long-term goals with direction from real experience.", color: "#4D9EFF" },
  { num: "04", icon: "🎭", name: "Mock Interview", desc: "Simulate real interview scenarios, sharpen your skills and confidence.", color: "#FFD60A" },
];

const mentorStyle = [
  { icon: "🔥", name: "Authenticity", desc: "No sugar-coated critiques. Honest feedback because I care about your growth.", color: "#FF3E3E" },
  { icon: "🙏", name: "Humility", desc: "Design is a moving target — I am learning every day alongside you.", color: "#4D9EFF" },
  { icon: "⚖️", name: "Equality", desc: "You're more than a mentee — you're an industry peer.", color: "#7BBFFF" },
  { icon: "🔍", name: "Transparency", desc: "I share what I've learned and point you toward useful resources openly.", color: "#FFD60A" },
];

const clientLogos = [
  { src: "/images/mentorship/facebook_logo.png", alt: "Facebook" },
  { src: "/images/mentorship/benq_logo.png", alt: "BenQ" },
  { src: "/images/mentorship/shopee_logo.png", alt: "Shopee" },
  { src: "/images/mentorship/tsmc_logo.png", alt: "TSMC" },
  { src: "/images/mentorship/seagroup_logo.png", alt: "Sea Group" },
  { src: "/images/mentorship/trendmicro_logo.png", alt: "Trend Micro" },
  { src: "/images/mentorship/alibaba_logo.png", alt: "Alibaba" },
  { src: "/images/mentorship/google_logo.png", alt: "Google" },
];

export default function Mentorship() {
  return (
    <SiteLayout
      title="Mentor Program — Ken Huang"
      description="1:1 mentorship with Ken Huang for designers and frontend engineers."
    >
      {/* ══════════ HERO ══════════ */}
      <section
        className="pt-28 pb-20 lg:pt-36 lg:pb-24 relative"
        style={{
          background: "#0B1220",
          borderBottom: "1px solid #243570",
          backgroundImage: "linear-gradient(rgba(255,224,0,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,224,0,0.02) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-3">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1"
                  style={{ background: "#FFD60A", border: "2px solid #CCA800" }}
                >
                  <span className="text-[#0D1533] font-bold text-[10px]" style={{ fontFamily: "Space Mono, monospace" }}>
                    🎓 MENTOR PROGRAM
                  </span>
                </div>
                <h1
                  className="leading-none"
                  style={{ fontFamily: "VT323, monospace", fontSize: "clamp(3.5rem, 8vw, 6rem)", color: "#D0E4FF", lineHeight: 0.95 }}
                >
                  LEVEL UP
                  <br />
                  <span style={{ color: "#FFD60A", textShadow: "0 0 20px rgba(255,224,0,0.4)" }}>YOUR CAREER.</span>
                </h1>
              </div>
              <div className="space-y-3" style={{ fontFamily: "DM Sans, sans-serif" }}>
                <p className="text-sm" style={{ color: "#8898BB" }}>Self-taught designer with years in multinational organizations. I deeply understand the challenges product design learners face.</p>
                <p className="text-sm" style={{ color: "#8898BB" }}>In the past 3 years, helped 50+ designers from 20+ countries achieve their career goals.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  className="px-6 py-3 text-[10px] font-bold tracking-widest uppercase transition-all duration-150"
                  style={{
                    fontFamily: "Space Mono, monospace",
                    background: "#FFD60A",
                    color: "#0D1533",
                    border: "2px solid #FFD60A",
                    boxShadow: "4px 4px 0 0 #CCA800",
                  }}
                  onClick={() => window.location.href = "mailto:bluetch@gmail.com"}
                  onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translate(2px,2px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "4px 4px 0 0 #CCA800"; e.currentTarget.style.transform = "none"; }}
                >
                  ▶ CONTACT ME <ArrowUpRight size={12} className="inline" />
                </button>
                <a href="#programs">
                  <button
                    className="px-6 py-3 text-[10px] font-bold tracking-widest uppercase transition-all duration-150"
                    style={{
                      fontFamily: "Space Mono, monospace",
                      background: "transparent",
                      color: "#FFD60A",
                      border: "2px solid #FFD60A",
                      boxShadow: "4px 4px 0 0 #CCA800",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,214,10,0.08)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translate(2px,2px)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.boxShadow = "4px 4px 0 0 #CCA800"; e.currentTarget.style.transform = "none"; }}
                  >
                    VIEW PROGRAMS
                  </button>
                </a>
              </div>
              <p className="text-[10px]" style={{ fontFamily: "Space Mono, monospace", color: "#8898BB" }}>bluetch@gmail.com</p>
            </div>

            <div
              style={{ border: "2px solid #FFD60A", boxShadow: "0 0 20px rgba(255,224,0,0.15), 6px 6px 0 0 #CCA800" }}
            >
              {/* HUD header */}
              <div
                className="px-4 py-2 flex justify-between items-center"
                style={{ background: "#FFD60A", borderBottom: "2px solid #CCA800" }}
              >
                <span className="text-[#0D1533] text-[10px] font-mono font-bold" style={{ fontFamily: "Space Mono, monospace" }}>MENTOR STATS</span>
                <div className="flex gap-3 text-[10px] font-mono text-[#0D1533]" style={{ fontFamily: "Space Mono, monospace" }}>
                  <span>50+ MENTEES</span>
                  <span>20+ COUNTRIES</span>
                </div>
              </div>
              <div className="crt-portrait">
                <Image src={mentorshipHero} alt="Ken mentorship" className="w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ PROGRAMS ══════════ */}
      <section id="programs" className="py-20" style={{ background: "#0D1533" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[10px] tracking-widest uppercase mb-2" style={{ fontFamily: "Space Mono, monospace", color: "#FFD60A" }}>
            // SELECT_BUILD
          </p>
          <h2
            className="leading-none mb-3"
            style={{ fontFamily: "VT323, monospace", fontSize: "clamp(3rem, 6vw, 4rem)", color: "#D0E4FF" }}
          >
            PROGRAMS
          </h2>
          <p className="text-sm mb-12" style={{ fontFamily: "DM Sans, sans-serif", color: "#8898BB" }}>
            Choose the program that fits your current level.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {programs.map((program) => (
              <div
                key={program.name}
                className="flex flex-col transition-all duration-150"
                style={{
                  background: "#142040",
                  border: `2px solid ${program.highlight ? program.color : "#243570"}`,
                  boxShadow: program.highlight ? `0 0 20px ${program.color}25, 4px 4px 0 0 ${program.color}` : "4px 4px 0 0 #243570",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = program.color; e.currentTarget.style.boxShadow = `4px 4px 0 0 ${program.color}`; e.currentTarget.style.transform = "translate(-2px,-2px)"; }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = program.highlight ? program.color : "#243570";
                  e.currentTarget.style.boxShadow = program.highlight ? `0 0 20px ${program.color}25, 4px 4px 0 0 ${program.color}` : "4px 4px 0 0 #243570";
                  e.currentTarget.style.transform = "none";
                }}
              >
                {/* Top badge row — same height on all cards to keep icon row aligned */}
                <div
                  className="px-5 py-1.5 flex items-center justify-center"
                  style={{ background: program.highlight ? program.color : `${program.color}18` }}
                >
                  {program.highlight
                    ? <span className="text-[8px] font-bold text-[#0D1533]" style={{ fontFamily: "Space Mono, monospace" }}>★ POPULAR</span>
                    : <span className="text-[8px]" style={{ fontFamily: "Space Mono, monospace", color: `${program.color}70` }}>◆ {program.name.toUpperCase()}</span>
                  }
                </div>

                {/* Header */}
                <div
                  className="px-5 pt-5 pb-4"
                  style={{ borderBottom: `1px solid ${program.color}30` }}
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className="text-3xl leading-none">{program.icon}</span>
                    <span
                      className="text-[9px] px-2 py-0.5 mt-0.5"
                      style={{
                        fontFamily: "Space Mono, monospace",
                        color: program.color,
                        border: `1px solid ${program.color}60`,
                        background: `${program.color}12`,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {program.sessions} SESSIONS
                    </span>
                  </div>
                  <h3
                    className="font-bold mb-0.5"
                    style={{ fontFamily: "Space Mono, monospace", fontSize: "0.85rem", color: program.color }}
                  >
                    {program.name.toUpperCase()}
                  </h3>
                  <p className="text-[10px]" style={{ fontFamily: "Space Mono, monospace", color: "#6880AA" }}>{program.nameZh}</p>
                </div>

                {/* Price */}
                <div
                  className="px-5 py-4 flex items-baseline gap-1.5"
                  style={{ borderBottom: `1px solid #243570` }}
                >
                  <span
                    className="leading-none"
                    style={{ fontFamily: "VT323, monospace", fontSize: "3.2rem", color: program.color }}
                  >
                    {program.price.toLocaleString()}
                  </span>
                  <span className="text-[10px]" style={{ fontFamily: "Space Mono, monospace", color: "#6880AA" }}>
                    {program.unit}
                  </span>
                </div>

                {/* Body */}
                <div className="px-5 pt-4 pb-5 flex-1 flex flex-col gap-4">
                  <p className="text-sm leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif", color: "#8898BB" }}>
                    {program.desc}
                  </p>

                  <ul className="space-y-2.5 flex-1">
                    {program.perks.map((perk) => (
                      <li key={perk} className="flex items-center gap-2.5 text-[13px]" style={{ fontFamily: "DM Sans, sans-serif", color: "#8898BB" }}>
                        <Check size={10} style={{ color: program.color, flexShrink: 0 }} />
                        {perk}
                      </li>
                    ))}
                  </ul>

                  <a href="mailto:bluetch@gmail.com" className="block mt-2">
                    <button
                      className="w-full py-3 text-[10px] font-bold tracking-widest uppercase transition-all duration-150"
                      style={{
                        fontFamily: "Space Mono, monospace",
                        background: program.highlight ? program.color : "transparent",
                        color: program.highlight ? "#0D1533" : program.color,
                        border: `2px solid ${program.color}`,
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = program.color; e.currentTarget.style.color = "#0D1533"; }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = program.highlight ? program.color : "transparent";
                        e.currentTarget.style.color = program.highlight ? "#0D1533" : program.color;
                      }}
                    >
                      BOOK SESSION
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ BENEFITS ══════════ */}
      <section
        className="py-20 border-t"
        style={{ background: "#0B1220", borderColor: "#243570" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[10px] tracking-widest uppercase mb-2" style={{ fontFamily: "Space Mono, monospace", color: "#4D9EFF" }}>
            // POWER_UPS
          </p>
          <h2
            className="leading-none mb-12"
            style={{ fontFamily: "VT323, monospace", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#D0E4FF" }}
          >
            BENEFITS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((b) => (
              <div
                key={b.name}
                className="p-5 flex gap-5 transition-all duration-150"
                style={{
                  background: "#142040",
                  border: "1px solid #243570",
                  borderLeft: `3px solid ${b.color}`,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `4px 4px 0 0 ${b.color}`; e.currentTarget.style.transform = "translate(-2px,-2px)"; e.currentTarget.style.borderColor = `${b.color}60`; e.currentTarget.style.borderLeftColor = b.color; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; e.currentTarget.style.borderColor = "#243570"; e.currentTarget.style.borderLeftColor = b.color; }}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-xl"
                  style={{ background: `${b.color}18`, border: `1px solid ${b.color}40` }}
                >
                  {b.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1.5">
                    <span className="text-[9px] font-bold" style={{ fontFamily: "Space Mono, monospace", color: `${b.color}90` }}>{b.num}</span>
                    <h3 className="font-bold" style={{ fontFamily: "Syne, sans-serif", fontSize: "0.95rem", color: "#D0E4FF" }}>{b.name}</h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif", color: "#8898BB" }}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ MENTOR STYLE ══════════ */}
      <section
        className="py-20 border-t"
        style={{ background: "#0D1533", borderColor: "#243570" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[10px] tracking-widest uppercase mb-2" style={{ fontFamily: "Space Mono, monospace", color: "#FFD60A" }}>
            // PLAY_STYLE
          </p>
          <h2
            className="leading-none mb-12"
            style={{ fontFamily: "VT323, monospace", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#D0E4FF" }}
          >
            HOW I MENTOR
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {mentorStyle.map((s) => (
              <div
                key={s.name}
                className="p-6 space-y-4 transition-all duration-150"
                style={{
                  background: "#142040",
                  border: "1px solid #243570",
                  borderTop: `3px solid ${s.color}`,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#1A2D5A"; e.currentTarget.style.boxShadow = `4px 4px 0 0 ${s.color}60`; e.currentTarget.style.transform = "translate(-2px,-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#142040"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center text-xl"
                  style={{ background: `${s.color}18`, border: `1px solid ${s.color}40` }}
                >
                  {s.icon}
                </div>
                <h3 className="font-bold" style={{ fontFamily: "Syne, sans-serif", fontSize: "1rem", color: s.color }}>
                  {s.name}
                </h3>
                <p className="text-sm leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif", color: "#8898BB" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CLIENT LOGOS ══════════ */}
      <section
        className="py-14 border-t"
        style={{ background: "#0B1220", borderColor: "#243570" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p
            className="text-center text-[10px] tracking-widest uppercase mb-8"
            style={{ fontFamily: "Space Mono, monospace", color: "#6880AA" }}
          >
            MENTORED DESIGNERS FROM
          </p>
          <div className="grid grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {clientLogos.map((logo) => (
              <div
                key={logo.alt}
                className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-200 opacity-30 hover:opacity-80"
              >
                <img src={logo.src} alt={logo.alt} className="max-h-8 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: "#0B1220", borderTop: "1px solid #243570" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(255,224,0,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,224,0,0.02) 1px, transparent 1px)",
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
            style={{ fontFamily: "VT323, monospace", fontSize: "clamp(3rem, 8vw, 5.5rem)", color: "#D0E4FF", lineHeight: 0.95 }}
          >
            FIRST SESSION IS{" "}
            <span style={{ color: "#FFD60A", textShadow: "0 0 20px rgba(255,224,0,0.4)" }}>ON ME.</span>
          </h2>

          <p className="text-sm" style={{ fontFamily: "DM Sans, sans-serif", color: "#8898BB" }}>
            Thinking about mentorship? Let&apos;s talk. The introductory call is free.
          </p>

          <a href="mailto:bluetch@gmail.com">
            <button
              className="px-8 py-3 text-[11px] font-bold tracking-widest uppercase transition-all duration-150"
              style={{
                fontFamily: "Space Mono, monospace",
                background: "#FFD60A",
                color: "#0D1533",
                border: "2px solid #FFD60A",
                boxShadow: "4px 4px 0 0 #CCA800",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translate(2px,2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "4px 4px 0 0 #CCA800"; e.currentTarget.style.transform = "none"; }}
            >
              ▶ INTRODUCE YOURSELF <ArrowUpRight size={14} className="inline" />
            </button>
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
