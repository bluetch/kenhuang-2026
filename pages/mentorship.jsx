import Image from "next/image";
import { ArrowUpRight, Check, Zap, Star, Shield, Trophy } from "lucide-react";
import { SiteLayout } from "components/SiteLayout";
import { Button } from "components/ui/button";
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
    color: "border-game-blue",
    headerColor: "bg-game-blue",
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
    color: "border-game-yellow",
    headerColor: "bg-game-yellow",
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
    color: "border-game-pink",
    headerColor: "bg-game-pink",
    icon: "🏆",
    perks: ["Long-term planning", "Leadership coaching", "Salary negotiation", "Network building", "Senior-level review", "On-demand support"],
  },
];

const benefits = [
  { num: "01", icon: "🔧", name: "Tools", desc: "Get up to speed with Figma, HTML/CSS/JS, and modern design tooling." },
  { num: "02", icon: "📁", name: "Portfolio Review", desc: "Improve presentation and storytelling so your portfolio stands out." },
  { num: "03", icon: "🎯", name: "Career Coach", desc: "Plan mid- to long-term goals with direction from real experience." },
  { num: "04", icon: "🎭", name: "Mock Interview", desc: "Simulate real interview scenarios, sharpen your skills and confidence." },
];

const mentorStyle = [
  { icon: "🔥", name: "Authenticity", desc: "No sugar-coated critiques. Honest feedback because I care about your growth." },
  { icon: "🙏", name: "Humility", desc: "Design is a moving target — I am learning every day alongside you." },
  { icon: "⚖️", name: "Equality", desc: "You're more than a mentee — you're an industry peer." },
  { icon: "🔍", name: "Transparency", desc: "I share what I've learned and point you toward useful resources openly." },
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
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 border-b-2 border-dark bg-paper"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,183,0,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="bg-game-yellow border-2 border-dark px-3 py-1">
                    <span className="text-dark font-bold text-xs" style={{ fontFamily: "Space Mono, monospace" }}>
                      🎓 MENTOR PROGRAM
                    </span>
                  </div>
                </div>
                <h1
                  className="text-dark leading-none"
                  style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 900 }}
                >
                  Level Up
                  <br />
                  <span className="text-game-blue">Your Career.</span>
                </h1>
              </div>
              <div className="space-y-3 text-text-muted" style={{ fontFamily: "DM Sans, sans-serif" }}>
                <p>Self-taught designer with years in multinational organizations. I deeply understand the challenges product design learners face.</p>
                <p>In the past 3 years, helped 50+ designers from 10+ countries achieve their career goals.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="mailto:bluetch@gmail.com">
                  <Button size="lg" style={{ fontFamily: "Space Mono, monospace" }}>
                    ▶ CONTACT ME <ArrowUpRight size={16} />
                  </Button>
                </a>
                <a href="#programs">
                  <Button variant="outline" size="lg" style={{ fontFamily: "Space Mono, monospace" }}>
                    VIEW PROGRAMS
                  </Button>
                </a>
              </div>
              <p className="text-xs text-text-faint font-mono" style={{ fontFamily: "Space Mono, monospace" }}>
                bluetch@gmail.com
              </p>
            </div>

            <div className="border-2 border-dark shadow-pixel-lg overflow-hidden">
              {/* HUD header */}
              <div className="bg-dark px-4 py-2 flex justify-between items-center">
                <span className="text-game-yellow text-xs font-mono" style={{ fontFamily: "Space Mono, monospace" }}>MENTOR STATS</span>
                <div className="flex gap-3 text-xs font-mono text-gray-400" style={{ fontFamily: "Space Mono, monospace" }}>
                  <span className="text-game-green">50+ MENTEES</span>
                  <span className="text-game-blue">10+ COUNTRIES</span>
                </div>
              </div>
              <Image src={mentorshipHero} alt="Ken mentorship" className="w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ PROGRAMS ══════════ */}
      <section id="programs" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs text-game-blue font-bold tracking-widest uppercase mb-2" style={{ fontFamily: "Space Mono, monospace" }}>◆ SELECT YOUR BUILD</p>
          <h2 className="text-dark mb-2" style={{ fontFamily: "Syne, sans-serif", fontSize: "2.5rem", fontWeight: 800 }}>Programs</h2>
          <p className="text-text-muted mb-12" style={{ fontFamily: "DM Sans, sans-serif" }}>Choose the program that fits your current level.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programs.map((program) => (
              <div
                key={program.name}
                className={`relative border-2 border-dark flex flex-col overflow-hidden ${program.highlight ? "shadow-pixel-yellow" : "shadow-pixel"} hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-150`}
              >
                {program.highlight && (
                  <div className="absolute -top-[1px] left-4 bg-game-yellow border-2 border-dark border-t-0 px-3 py-0.5">
                    <span className="text-[9px] font-bold text-dark" style={{ fontFamily: "Space Mono, monospace" }}>★ POPULAR</span>
                  </div>
                )}

                {/* Header */}
                <div className={`${program.headerColor} border-b-2 border-dark px-5 py-4`}>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{program.icon}</span>
                    <span className="text-white/80 text-xs font-mono" style={{ fontFamily: "Space Mono, monospace" }}>
                      {program.sessions} SESSIONS
                    </span>
                  </div>
                  <h3 className="font-bold text-white mt-2" style={{ fontFamily: "Orbitron, monospace", fontSize: "0.9rem" }}>
                    {program.name.toUpperCase()}
                  </h3>
                  <p className="text-white/70 text-xs mt-0.5" style={{ fontFamily: "Space Mono, monospace" }}>{program.nameZh}</p>
                </div>

                {/* Body */}
                <div className="p-5 bg-paper flex-1 flex flex-col gap-4">
                  {/* Price */}
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-dark" style={{ fontFamily: "Orbitron, monospace" }}>
                      {program.price.toLocaleString()}
                    </span>
                    <span className="text-xs text-text-muted" style={{ fontFamily: "Space Mono, monospace" }}>
                      {program.unit}
                    </span>
                  </div>

                  <p className="text-sm text-text-muted leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif" }}>
                    {program.desc}
                  </p>

                  <ul className="space-y-2 flex-1">
                    {program.perks.map((perk) => (
                      <li key={perk} className="flex items-center gap-2 text-sm text-dark" style={{ fontFamily: "DM Sans, sans-serif" }}>
                        <Check size={12} className="text-game-green flex-shrink-0" />
                        {perk}
                      </li>
                    ))}
                  </ul>

                  <a href="mailto:bluetch@gmail.com">
                    <Button
                      variant={program.highlight ? "yellow" : "outline"}
                      className="w-full"
                      style={{ fontFamily: "Space Mono, monospace" }}
                    >
                      BOOK SESSION
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ BENEFITS ══════════ */}
      <section className="py-24 border-t-2 border-dark bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs text-game-green font-bold tracking-widest uppercase mb-2" style={{ fontFamily: "Space Mono, monospace" }}>◆ POWER-UPS INCLUDED</p>
          <h2 className="text-dark mb-12" style={{ fontFamily: "Syne, sans-serif", fontSize: "2.5rem", fontWeight: 800 }}>Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((b) => (
              <div key={b.name} className="bg-white border-2 border-dark p-6 shadow-pixel hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-150 flex gap-5">
                <div className="text-3xl flex-shrink-0">{b.icon}</div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] text-game-blue font-mono" style={{ fontFamily: "Space Mono, monospace" }}>{b.num}</span>
                    <h3 className="font-bold text-dark" style={{ fontFamily: "Syne, sans-serif", fontSize: "1rem" }}>{b.name}</h3>
                  </div>
                  <p className="text-sm text-text-muted" style={{ fontFamily: "DM Sans, sans-serif" }}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ MENTOR STYLE ══════════ */}
      <section className="py-24 border-t-2 border-dark bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs text-game-pink font-bold tracking-widest uppercase mb-2" style={{ fontFamily: "Space Mono, monospace" }}>◆ PLAY STYLE</p>
          <h2 className="text-dark mb-12" style={{ fontFamily: "Syne, sans-serif", fontSize: "2.5rem", fontWeight: 800 }}>How I Mentor</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-dark">
            {mentorStyle.map((s, i) => (
              <div key={s.name} className="border-r-2 border-dark last:border-r-0 p-6 space-y-3 hover:bg-paper-warm transition-colors">
                <div className="text-3xl">{s.icon}</div>
                <h3 className="font-bold text-dark" style={{ fontFamily: "Syne, sans-serif", fontSize: "1rem", fontWeight: 700 }}>{s.name}</h3>
                <p className="text-sm text-text-muted" style={{ fontFamily: "DM Sans, sans-serif" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CLIENT LOGOS ══════════ */}
      <section className="py-16 border-t-2 border-dark bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-xs text-text-muted tracking-widest uppercase mb-10 font-mono" style={{ fontFamily: "Space Mono, monospace" }}>
            MENTORED DESIGNERS FROM
          </p>
          <div className="grid grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {clientLogos.map((logo) => (
              <div key={logo.alt} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-200 opacity-50 hover:opacity-100">
                <img src={logo.src} alt={logo.alt} className="max-h-8 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="py-24 border-t-2 border-dark bg-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center space-y-8">
          <div className="bg-game-yellow border-2 border-white inline-block px-4 py-1">
            <p className="text-dark text-xs font-mono font-bold" style={{ fontFamily: "Space Mono, monospace" }}>
              ★ FIRST SESSION FREE ★
            </p>
          </div>
          <h2
            className="text-white"
            style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, lineHeight: 1 }}
          >
            First session is{" "}
            <span className="text-game-yellow">on me.</span>
          </h2>
          <p className="text-gray-400 max-w-md mx-auto" style={{ fontFamily: "DM Sans, sans-serif" }}>
            Thinking about mentorship? Let&apos;s talk. The introductory call is free.
          </p>
          <a href="mailto:bluetch@gmail.com">
            <Button size="lg" variant="yellow" style={{ fontFamily: "Space Mono, monospace" }}>
              ▶ INTRODUCE YOURSELF
              <ArrowUpRight size={16} />
            </Button>
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
