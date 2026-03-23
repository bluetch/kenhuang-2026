import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { SiteLayout } from "components/SiteLayout";
import { Badge } from "components/ui/badge";
import { Button } from "components/ui/button";
import { Separator } from "components/ui/separator";
import mentorshipHero from "public/images/mentorship/mentorship_hero.jpg";

const programs = [
  {
    name: "求職衝刺方案",
    nameEn: "Job Sprint",
    sessions: 3,
    price: 1000,
    unit: "TWD / session",
    desc: "針對你的履歷、作品集和面試策略進行改善，提高求職成功率。",
    descEn: "Targeted resume, portfolio, and interview strategy to maximize your job search success rate.",
    highlight: false,
    perks: ["Portfolio critique", "Resume optimization", "Mock interview", "Interview strategy"],
  },
  {
    name: "目標實踐方案",
    nameEn: "Goal Achievement",
    sessions: 6,
    price: 900,
    unit: "TWD / session",
    desc: "設定目標並逐步實現，持續自我成長，達到理想狀態。",
    descEn: "Set measurable goals and build a step-by-step plan to reach your ideal state as a designer.",
    highlight: true,
    perks: ["Goal setting framework", "Monthly check-ins", "Design critique", "Career roadmap", "Resource curation"],
  },
  {
    name: "職涯教練方案",
    nameEn: "Career Coaching",
    sessions: 12,
    price: 800,
    unit: "TWD / session",
    desc: "長期職涯願景規劃，幫助你在工作中有更好的表現。",
    descEn: "Long-term career vision planning, helping you advance at work and achieve your professional goals.",
    highlight: false,
    perks: ["Long-term planning", "Leadership coaching", "Salary negotiation", "Network building", "Senior-level review", "On-demand support"],
  },
];

const benefits = [
  {
    name: "Tools",
    desc: "Get up to speed with Figma, HTML/CSS/JS, and modern design tooling for product roles.",
  },
  {
    name: "Portfolio Review",
    desc: "Improve presentation and storytelling of your work so your portfolio tells a compelling story.",
  },
  {
    name: "Career Coach",
    desc: "Plan your mid- to long-term goals with suggested direction and guidance from real experience.",
  },
  {
    name: "Mock Interview",
    desc: "Simulate real interview scenarios, sharpen your answering skills, and build confidence.",
  },
];

const mentorStyle = [
  { name: "Authenticity", desc: "No sugar-coated critiques. Honest feedback because I care about your growth." },
  { name: "Humility", desc: "Design is a moving target — I am learning every day alongside you." },
  { name: "Equality", desc: "You are more than a mentee. You are a designer and industry peer." },
  { name: "Transparency", desc: "I point you toward useful resources and share my own design journey openly." },
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
      title="Mentorship — Ken Huang"
      description="1:1 mentorship with Ken Huang for designers and frontend engineers. Portfolio reviews, career coaching, and interview prep."
    >
      {/* Hero */}
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 border-b border-ink-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <p
                  className="text-xs tracking-widest uppercase text-lime"
                  style={{ fontFamily: "JetBrains Mono, monospace" }}
                >
                  Mentorship
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
                  Boost your career,
                  <br />
                  <em style={{ color: "#C5F135", fontStyle: "italic" }}>become better.</em>
                </h1>
              </div>
              <div className="space-y-4 text-cream-muted leading-relaxed max-w-md" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                <p>
                  As a self-taught designer with years of experience in
                  multinational organizations, I deeply understand the challenges
                  product design learners face.
                </p>
                <p>
                  In the past three years, I have helped more than 50 designers
                  from 10+ countries around the world achieve their career goals.
                </p>
              </div>
              <a href="mailto:bluetch@gmail.com">
                <Button size="lg">
                  Contact Me
                  <ArrowUpRight size={16} />
                </Button>
              </a>
              <p className="text-xs text-cream-faint" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                bluetch@gmail.com
              </p>
            </div>

            <div className="overflow-hidden border border-ink-border">
              <Image src={mentorshipHero} alt="Ken Huang mentorship" className="w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Programs / Pricing */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-start gap-6 mb-12">
            <span className="text-xs text-cream-faint mt-1" style={{ fontFamily: "JetBrains Mono, monospace" }}>01</span>
            <div>
              <h2
                style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, letterSpacing: "-0.02em", color: "#F2EDE4" }}
              >
                Programs
              </h2>
              <p className="text-cream-muted mt-2" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                Choose the program that fits your current stage.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programs.map((program) => (
              <div
                key={program.name}
                className={`relative border flex flex-col p-8 space-y-6 transition-all duration-200 ${
                  program.highlight
                    ? "border-lime bg-lime-glow"
                    : "border-ink-border bg-ink-surface hover:border-ink-muted"
                }`}
              >
                {program.highlight && (
                  <div className="absolute -top-3 left-8">
                    <Badge variant="active" className="text-[9px]">Most Popular</Badge>
                  </div>
                )}
                <div className="space-y-2">
                  <p
                    className="text-xs text-cream-faint tracking-widest uppercase"
                    style={{ fontFamily: "JetBrains Mono, monospace" }}
                  >
                    {program.sessions} sessions
                  </p>
                  <h3
                    style={{ fontFamily: "Fraunces, serif", fontSize: "1.4rem", fontWeight: 500, color: "#F2EDE4" }}
                  >
                    {program.nameEn}
                  </h3>
                  <p
                    className="text-sm text-cream-muted"
                    style={{ fontFamily: "Fraunces, serif", fontStyle: "italic" }}
                  >
                    {program.name}
                  </p>
                </div>

                <div className="flex items-baseline gap-1">
                  <span
                    style={{ fontFamily: "Fraunces, serif", fontSize: "2.5rem", fontWeight: 500, color: program.highlight ? "#C5F135" : "#F2EDE4", lineHeight: 1 }}
                  >
                    {program.price.toLocaleString()}
                  </span>
                  <span className="text-xs text-cream-muted" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                    {program.unit}
                  </span>
                </div>

                <p className="text-sm text-cream-muted leading-relaxed" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                  {program.descEn}
                </p>

                <Separator className="bg-ink-border" />

                <ul className="space-y-2 flex-1">
                  {program.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2 text-sm text-cream-muted" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                      <Check size={12} className="text-lime flex-shrink-0" />
                      {perk}
                    </li>
                  ))}
                </ul>

                <a href="mailto:bluetch@gmail.com">
                  <Button
                    variant={program.highlight ? "default" : "outline"}
                    className="w-full"
                  >
                    Book a session
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 border-y border-ink-border bg-ink-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-start gap-6 mb-12">
            <span className="text-xs text-cream-faint mt-1" style={{ fontFamily: "JetBrains Mono, monospace" }}>02</span>
            <h2
              style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, letterSpacing: "-0.02em", color: "#F2EDE4" }}
            >
              Benefits
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, i) => (
              <div
                key={benefit.name}
                className="border border-ink-border p-8 space-y-4 hover:border-ink-muted transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="text-xs text-cream-faint"
                    style={{ fontFamily: "JetBrains Mono, monospace" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className="group-hover:text-lime transition-colors"
                    style={{ fontFamily: "Fraunces, serif", fontSize: "1.3rem", fontWeight: 500, color: "#F2EDE4" }}
                  >
                    {benefit.name}
                  </h3>
                </div>
                <p className="text-sm text-cream-muted leading-relaxed" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentoring Style */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-start gap-6 mb-12">
            <span className="text-xs text-cream-faint mt-1" style={{ fontFamily: "JetBrains Mono, monospace" }}>03</span>
            <h2
              style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, letterSpacing: "-0.02em", color: "#F2EDE4" }}
            >
              How I Mentor
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t border-ink-border">
            {mentorStyle.map((style) => (
              <div
                key={style.name}
                className="border-r border-b border-ink-border p-8 space-y-4 hover:bg-ink-surface transition-colors group"
              >
                <h3
                  className="group-hover:text-lime transition-colors"
                  style={{ fontFamily: "Fraunces, serif", fontSize: "1.2rem", fontWeight: 500, color: "#F2EDE4" }}
                >
                  {style.name}
                </h3>
                <p className="text-sm text-cream-muted leading-relaxed" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                  {style.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client logos */}
      <section className="py-24 border-t border-ink-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p
            className="text-center text-xs tracking-widest uppercase text-cream-muted mb-12"
            style={{ fontFamily: "JetBrains Mono, monospace" }}
          >
            Mentored designers from
          </p>
          <div className="grid grid-cols-4 lg:grid-cols-8 gap-8 items-center opacity-50 hover:opacity-70 transition-opacity">
            {clientLogos.map((logo) => (
              <div key={logo.alt} className="flex items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-8 w-auto object-contain filter brightness-0 invert"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-ink-border bg-ink-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center space-y-8">
          <h2
            style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 400, letterSpacing: "-0.02em", color: "#F2EDE4", lineHeight: 1 }}
          >
            First session is{" "}
            <em style={{ color: "#C5F135", fontStyle: "italic" }}>on me.</em>
          </h2>
          <p className="text-cream-muted max-w-md mx-auto" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
            Thinking about mentorship? Let&apos;s talk about it. The introductory call is free.
          </p>
          <a href="mailto:bluetch@gmail.com">
            <Button size="lg">
              Introduce yourself
              <ArrowUpRight size={16} />
            </Button>
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
