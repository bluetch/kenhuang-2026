import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SiteLayout } from "components/SiteLayout";
import { Badge } from "components/ui/badge";
import { Button } from "components/ui/button";
import portrait from "public/images/about/kenhuang_portrait.png";

const myTrips = [
  { name: "Camino de Santiago", img: "/images/about/camino_02.jpg" },
  { name: "Iceberg in Iceland", img: "/images/about/travel-iceland-cover.jpg" },
  { name: "Hogwarts in England", img: "/images/about/travel-england-cover.jpg" },
  { name: "Tea in Japan", img: "/images/about/travel-japan-cover.jpg" },
  { name: "Taiwan Loop", img: "/images/about/travel-taiwan-cover.jpg" },
  { name: "Surfing in Australia", img: "/images/about/travel-australia-cover.jpg" },
];

const myWorkExperience = [
  {
    company: "TXOne Networks",
    location: "Taipei, Taiwan",
    position: "Staff Frontend Developer",
    logo: "/images/about/logo_txone.jpg",
    desc: ["Migrated all the services from TrendMicro to TXOne", "Develop and maintain automated all OT security products."],
    duration: "Nov 2022 — Present",
    current: true,
  },
  {
    company: "Good Finance",
    location: "Taipei, Taiwan",
    position: "Sr. Frontend Developer",
    logo: "/images/about/logo_goodfinance.jpg",
    desc: ["Planned and developed fintech: trading system, assets management, and learning center. Led front-end team."],
    duration: "Apr 2021 — Aug 2022",
    current: false,
  },
  {
    company: "Shopee",
    location: "Singapore",
    position: "Product Designer Lead / UX Engineer",
    logo: "/images/about/logo_shopee.jpg",
    desc: [
      "Executing design at all stages — user research, data analytics, interactive prototype, usability test.",
      "Led Shopee design language system (web, iOS, Android) with React-based developers workspace.",
    ],
    duration: "Sep 2017 — Apr 2021",
    current: false,
  },
  {
    company: "Yulon Group",
    location: "Taipei, Taiwan",
    position: "Product Designer",
    logo: "/images/about/logo_yulon.jpg",
    desc: ["Managed travel website, car service system, Roadside Assistance App, airport pick-up service, and e-commerce."],
    duration: "Jul 2016 — Apr 2017",
    current: false,
  },
  {
    company: "Uitox Global E-commerce",
    location: "Shanghai, China & Taipei, Taiwan",
    position: "Frontend Lead & Design Lead",
    logo: "/images/about/logo_uitox.jpg",
    desc: [
      "Led UX/UI for e-commerce across web and app — payment, shipping, dashboards for buyers and sellers.",
      "Designed brand storefronts for ASUS, LINE, Feiniu. Led designers & frontend developers.",
    ],
    duration: "Aug 2013 — Jul 2016",
    current: false,
  },
  {
    company: "Trend Micro",
    location: "Taipei, Taiwan",
    position: "Web Developer",
    logo: "/images/about/logo_trendmicro.jpg",
    desc: ["Developed Lost Device Protection, Site Safety Center, Jewelry Box, and Hadoop database query system."],
    duration: "Aug 2010 — Feb 2013",
    current: false,
  },
];

const skills = [
  {
    category: "Design",
    items: ["Product Thinking", "UX / UI Design", "Figma", "Prototyping", "Design Systems", "User Research"],
  },
  {
    category: "Frontend",
    items: ["React.js / Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Git / CI/CD", "Vercel"],
  },
  {
    category: "Mentorship",
    items: ["8 years exp.", "26 short courses", "20+ students", "50+ sessions", "Career coaching", "Portfolio review"],
  },
];

export default function About() {
  return (
    <SiteLayout
      title="About — Ken Huang"
      description="Ken Huang is a UX Engineer and product designer based in Taipei, Taiwan with 15+ years of experience."
    >
      {/* Hero */}
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            {/* Portrait */}
            <div className="lg:col-span-2">
              <div className="relative overflow-hidden border border-ink-border group">
                <Image
                  src={portrait}
                  alt="Ken Huang"
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-ink/80 to-transparent">
                  <p
                    className="text-xs text-cream-muted"
                    style={{ fontFamily: "JetBrains Mono, monospace" }}
                  >
                    Taipei, Taiwan · Since 2005
                  </p>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-3 space-y-8">
              <div className="space-y-2">
                <p
                  className="text-xs tracking-widest uppercase text-lime"
                  style={{ fontFamily: "JetBrains Mono, monospace" }}
                >
                  About
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
                  Ken Huang
                </h1>
              </div>

              <p
                className="text-xl text-cream-muted leading-relaxed"
                style={{ fontFamily: "Fraunces, serif", fontStyle: "italic" }}
              >
                UX Engineer based in Taipei, Taiwan.
              </p>

              <div className="space-y-4 text-cream-muted leading-relaxed" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                <p>
                  Since 2005, I have enjoyed turning complex problems into
                  simple, beautiful and intuitive designs. When I am not
                  pushing pixels, you will find me cooking, gardening or
                  working out in the park.
                </p>
                <p>
                  Over 15 years of experience — 6 years as a Designer and 10
                  years as a Developer — across multiple industries: hospitality,
                  IT, consumer services, e-commerce, and security. Worked
                  extensively with executives and businesses from APAC and Europe.
                </p>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/bluetch/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>
                    LinkedIn
                    <ArrowUpRight size={14} />
                  </Button>
                </a>
                <Link href="/mentorship">
                  <Button variant="outline">Mentorship</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24 border-y border-ink-border bg-ink-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-start gap-6 mb-12">
            <span className="text-xs text-cream-faint mt-1" style={{ fontFamily: "JetBrains Mono, monospace" }}>01</span>
            <h2
              style={{
                fontFamily: "Fraunces, serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                color: "#F2EDE4",
              }}
            >
              What I Do
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.category}
                className="border border-ink-border p-8 space-y-6 hover:border-ink-muted transition-colors duration-200 group"
              >
                <h3
                  className="group-hover:text-lime transition-colors"
                  style={{ fontFamily: "Fraunces, serif", fontSize: "1.5rem", fontWeight: 500, color: "#F2EDE4" }}
                >
                  {skill.category}
                </h3>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-cream-muted" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                      <span className="w-1 h-1 rounded-full bg-lime flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo grid & fun facts */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-3">
              {[
                "/images/about/20200219.jpg",
                "/images/about/20220724.jpg",
                "/images/about/20190612.jpg",
                "/images/about/20161206.jpg",
              ].map((img, i) => (
                <div key={i} className="overflow-hidden border border-ink-border group">
                  <img
                    src={img}
                    alt=""
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <span className="text-xs text-cream-faint mt-1" style={{ fontFamily: "JetBrains Mono, monospace" }}>02</span>
                <h2
                  style={{ fontFamily: "Fraunces, serif", fontSize: "2.5rem", fontWeight: 400, letterSpacing: "-0.02em", color: "#F2EDE4", lineHeight: 1 }}
                >
                  Beyond the screen
                </h2>
              </div>
              <ul className="space-y-4">
                {[
                  { label: "Hiked ~800km", detail: "Camino de Santiago, Spain" },
                  { label: "Clean freak", detail: "Minimalism at home & code" },
                  { label: "Gamer at heart", detail: "PS5 & Nintendo Switch" },
                  { label: "Tennis player", detail: "Former player in Australia" },
                ].map((fact) => (
                  <li key={fact.label} className="flex items-start gap-4 py-3 border-b border-ink-border">
                    <span style={{ fontFamily: "Fraunces, serif", fontSize: "1rem", color: "#C5F135", fontWeight: 500 }}>
                      {fact.label}
                    </span>
                    <span className="text-sm text-cream-muted" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                      {fact.detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Travel */}
      <section className="py-16 border-t border-ink-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-start gap-6 mb-10">
            <span className="text-xs text-cream-faint mt-1" style={{ fontFamily: "JetBrains Mono, monospace" }}>03</span>
            <h2
              style={{ fontFamily: "Fraunces, serif", fontSize: "2.5rem", fontWeight: 400, letterSpacing: "-0.02em", color: "#F2EDE4" }}
            >
              Travels
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {myTrips.map((trip) => (
              <div key={trip.name} className="group overflow-hidden border border-ink-border relative">
                <img
                  src={trip.img}
                  alt={trip.name}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-ink/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
                  <span className="text-xs text-cream" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                    {trip.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="py-24 lg:py-32 border-t border-ink-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-start gap-6 mb-12">
            <span className="text-xs text-cream-faint mt-1" style={{ fontFamily: "JetBrains Mono, monospace" }}>04</span>
            <h2
              style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, letterSpacing: "-0.02em", color: "#F2EDE4" }}
            >
              Work Experience
            </h2>
          </div>

          <div className="space-y-0">
            {myWorkExperience.map((job, i) => (
              <div
                key={job.company}
                className="group grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 py-8 border-b border-ink-border hover:bg-ink-surface transition-colors duration-200 px-4 -mx-4"
              >
                {/* Left: company info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 border border-ink-border overflow-hidden flex-shrink-0 bg-ink-elevated">
                      <img src={job.logo} alt={job.company} className="w-full h-full object-cover" />
                    </div>
                    {job.current && (
                      <Badge variant="active" className="text-[9px]">Current</Badge>
                    )}
                  </div>
                  <div>
                    <p
                      className="text-xs text-cream-faint"
                      style={{ fontFamily: "JetBrains Mono, monospace" }}
                    >
                      {job.duration}
                    </p>
                    <p
                      className="text-xs text-cream-faint"
                      style={{ fontFamily: "JetBrains Mono, monospace" }}
                    >
                      {job.location}
                    </p>
                  </div>
                </div>

                {/* Right: role & description */}
                <div className="space-y-3">
                  <div>
                    <h3
                      className="group-hover:text-lime transition-colors"
                      style={{ fontFamily: "Fraunces, serif", fontSize: "1.2rem", fontWeight: 500, color: "#F2EDE4" }}
                    >
                      {job.company}
                    </h3>
                    <p
                      className="text-sm text-lime/80"
                      style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                    >
                      {job.position}
                    </p>
                  </div>
                  <ul className="space-y-1">
                    {job.desc.map((d, di) => (
                      <li
                        key={di}
                        className="text-sm text-cream-muted flex items-start gap-2"
                        style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                      >
                        <span className="text-ink-muted mt-2">—</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 border border-ink-border bg-ink-surface">
            <p className="text-sm text-cream-muted" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
              For full details, visit my{" "}
              <a
                href="https://www.linkedin.com/in/bluetch/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lime hover:text-lime-dark transition-colors inline-flex items-center gap-1"
              >
                LinkedIn profile
                <ArrowUpRight size={12} />
              </a>
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
