import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Trophy, Star, Zap } from "lucide-react";
import { SiteLayout } from "components/SiteLayout";
import { Button } from "components/ui/button";
import portrait from "public/images/about/kenhuang_portrait.png";

const myTrips = [
  { name: "Camino de Santiago", img: "/images/about/camino_02.jpg", flag: "🇪🇸" },
  { name: "Iceland", img: "/images/about/travel-iceland-cover.jpg", flag: "🇮🇸" },
  { name: "England", img: "/images/about/travel-england-cover.jpg", flag: "🇬🇧" },
  { name: "Japan", img: "/images/about/travel-japan-cover.jpg", flag: "🇯🇵" },
  { name: "Taiwan", img: "/images/about/travel-taiwan-cover.jpg", flag: "🇹🇼" },
  { name: "Australia", img: "/images/about/travel-australia-cover.jpg", flag: "🇦🇺" },
];

const myWorkExperience = [
  {
    company: "TXOne Networks",
    location: "Taipei, Taiwan",
    position: "Staff Frontend Developer",
    logo: "/images/about/logo_txone.jpg",
    desc: ["Migrated all services from TrendMicro to TXOne", "Develop and maintain OT security products."],
    duration: "Nov 2022 — Present",
    current: true,
    level: "STAFF",
    color: "bg-game-blue",
  },
  {
    company: "Good Finance",
    location: "Taipei, Taiwan",
    position: "Sr. Frontend Developer",
    logo: "/images/about/logo_goodfinance.jpg",
    desc: ["Fintech trading system, assets management, and learning center. Led front-end team."],
    duration: "Apr 2021 — Aug 2022",
    current: false,
    level: "SENIOR",
    color: "bg-game-green",
  },
  {
    company: "Shopee",
    location: "Singapore",
    position: "Product Designer Lead / UX Engineer",
    logo: "/images/about/logo_shopee.jpg",
    desc: ["Led Shopee Design Language System across web, iOS, Android.", "User research, prototyping, usability testing at scale."],
    duration: "Sep 2017 — Apr 2021",
    current: false,
    level: "LEAD",
    color: "bg-game-pink",
  },
  {
    company: "Yulon Group",
    location: "Taipei, Taiwan",
    position: "Product Designer",
    logo: "/images/about/logo_yulon.jpg",
    desc: ["Travel website, car service, Roadside Assistance App, airport pick-up."],
    duration: "Jul 2016 — Apr 2017",
    current: false,
    level: "MID",
    color: "bg-game-yellow",
  },
  {
    company: "Uitox Global E-commerce",
    location: "Shanghai & Taipei",
    position: "Frontend Lead & Design Lead",
    logo: "/images/about/logo_uitox.jpg",
    desc: ["Led UX/UI for e-commerce — payment, shipping, dashboards.", "Designed brand stores for ASUS, LINE, Feiniu."],
    duration: "Aug 2013 — Jul 2016",
    current: false,
    level: "LEAD",
    color: "bg-game-cyan",
  },
  {
    company: "Trend Micro",
    location: "Taipei, Taiwan",
    position: "Web Developer",
    logo: "/images/about/logo_trendmicro.jpg",
    desc: ["Lost Device Protection, Site Safety Center, Hadoop query system."],
    duration: "Aug 2010 — Feb 2013",
    current: false,
    level: "JUNIOR",
    color: "bg-game-purple",
  },
];

const achievements = [
  { icon: "🏆", label: "Shopee DLS Lead", earned: true },
  { icon: "🌍", label: "10 Countries", earned: true },
  { icon: "👟", label: "800km Camino", earned: true },
  { icon: "🎓", label: "50+ Mentees", earned: true },
  { icon: "⚛️", label: "React Master", earned: true },
  { icon: "🎨", label: "Design Systems", earned: true },
  { icon: "🔒", label: "OT Security", earned: true },
  { icon: "🗾", label: "APAC Expert", earned: true },
];

export default function About() {
  return (
    <SiteLayout
      title="Character Sheet — Ken Huang"
      description="Ken Huang is a UX Engineer and product designer based in Taipei, Taiwan with 15+ years of experience."
    >
      {/* ══════════ HERO / CHARACTER SHEET ══════════ */}
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-paper"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(67,97,238,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs text-game-blue font-bold tracking-widest uppercase mb-6" style={{ fontFamily: "Space Mono, monospace" }}>
            ◆ CHARACTER SHEET
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Portrait card */}
            <div className="lg:col-span-2">
              <div className="bg-white border-2 border-dark shadow-pixel-lg overflow-hidden">
                {/* Card header */}
                <div className="bg-dark px-4 py-2 flex justify-between items-center">
                  <span className="text-white text-xs font-mono" style={{ fontFamily: "Space Mono, monospace" }}>PLAYER</span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-game-red" />
                    <div className="w-2 h-2 bg-game-yellow" />
                    <div className="w-2 h-2 bg-game-green" />
                  </div>
                </div>
                <div className="relative">
                  <Image src={portrait} alt="Ken Huang" className="w-full object-cover" />
                  {/* LVL overlay */}
                  <div className="absolute bottom-4 left-4 bg-game-yellow border-2 border-dark px-3 py-1 shadow-pixel-sm">
                    <span className="text-dark font-bold text-sm" style={{ fontFamily: "Orbitron, monospace" }}>LVL 99</span>
                  </div>
                </div>
                {/* Mini stats */}
                <div className="p-4 space-y-2 border-t-2 border-dark">
                  {[
                    { label: "HP", value: 95, color: "bg-game-green" },
                    { label: "MP", value: 88, color: "bg-game-blue" },
                    { label: "XP", value: 100, color: "bg-game-yellow" },
                  ].map((stat) => (
                    <div key={stat.label} className="flex items-center gap-3">
                      <span className="text-[10px] text-text-muted font-mono w-4" style={{ fontFamily: "Space Mono, monospace" }}>{stat.label}</span>
                      <div className="flex-1 h-3 bg-paper-warm border border-paper-border overflow-hidden">
                        <div className={`h-full ${stat.color} fill-bar`} style={{ width: `${stat.value}%` }} />
                      </div>
                      <span className="text-[10px] text-text-muted font-mono" style={{ fontFamily: "Space Mono, monospace" }}>{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Character info */}
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h1
                  className="text-dark leading-none"
                  style={{ fontFamily: "Orbitron, monospace", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900 }}
                >
                  KEN HUANG
                </h1>
                <p className="text-game-blue font-bold tracking-wider mt-1" style={{ fontFamily: "Space Mono, monospace" }}>
                  UX ENGINEER · CLASS: DESIGNER/DEVELOPER
                </p>
              </div>

              <div className="bg-white border-2 border-dark p-5 space-y-1">
                <p className="text-[10px] text-text-muted uppercase tracking-widest mb-3 font-mono" style={{ fontFamily: "Space Mono, monospace" }}>▸ ORIGIN STORY</p>
                <p className="text-text-muted leading-relaxed text-sm" style={{ fontFamily: "DM Sans, sans-serif" }}>
                  Since 2005, turning complex problems into simple, beautiful, and intuitive designs. When not pushing pixels, you&apos;ll find me cooking, gardening, or working out in the park.
                </p>
                <p className="text-text-muted leading-relaxed text-sm mt-2" style={{ fontFamily: "DM Sans, sans-serif" }}>
                  15+ years experience across 6 companies — designer for 6 years, developer for 10. APAC and Europe. From Shopee to Trend Micro.
                </p>
              </div>

              {/* Achievement wall */}
              <div>
                <p className="text-[10px] text-text-muted uppercase tracking-widest mb-3 font-mono" style={{ fontFamily: "Space Mono, monospace" }}>▸ ACHIEVEMENTS UNLOCKED</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {achievements.map((a) => (
                    <div
                      key={a.label}
                      className="flex items-center gap-2 bg-game-yellow/10 border-2 border-game-yellow px-2 py-2 shadow-pixel-yellow hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150"
                    >
                      <span className="text-base">{a.icon}</span>
                      <span className="text-[9px] text-dark font-bold uppercase leading-tight" style={{ fontFamily: "Space Mono, monospace" }}>{a.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <a href="https://www.linkedin.com/in/bluetch/" target="_blank" rel="noopener noreferrer">
                  <Button style={{ fontFamily: "Space Mono, monospace" }}>
                    LINKEDIN <ArrowUpRight size={14} />
                  </Button>
                </a>
                <Link href="/mentorship">
                  <Button variant="yellow" style={{ fontFamily: "Space Mono, monospace" }}>
                    MENTORSHIP
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ SKILLS — ABILITY TREE ══════════ */}
      <section className="py-24 border-t-2 border-dark bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs text-game-blue font-bold tracking-widest uppercase mb-2" style={{ fontFamily: "Space Mono, monospace" }}>◆ ABILITY TREE</p>
          <h2 className="text-dark mb-12" style={{ fontFamily: "Syne, sans-serif", fontSize: "2.5rem", fontWeight: 800 }}>
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                cat: "DESIGN", icon: "🎨", color: "bg-game-pink", borderColor: "border-game-pink",
                skills: ["Product Thinking", "UX Research", "Figma", "Design Systems", "Prototyping", "Usability Testing"],
                level: 95,
              },
              {
                cat: "FRONTEND", icon: "⚛️", color: "bg-game-blue", borderColor: "border-game-blue",
                skills: ["React / Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Git / CI/CD", "Vercel"],
                level: 90,
              },
              {
                cat: "MENTORSHIP", icon: "🎓", color: "bg-game-yellow", borderColor: "border-game-yellow",
                skills: ["Career Coaching", "Portfolio Review", "Mock Interviews", "Goal Setting", "8 yrs exp", "50+ sessions"],
                level: 88,
              },
            ].map((group) => (
              <div key={group.cat} className={`bg-paper border-2 border-dark shadow-pixel hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-150 overflow-hidden`}>
                {/* Header */}
                <div className={`${group.color} px-5 py-3 flex items-center justify-between border-b-2 border-dark`}>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{group.icon}</span>
                    <span className="font-bold tracking-wider text-white text-sm" style={{ fontFamily: "Orbitron, monospace" }}>{group.cat}</span>
                  </div>
                  <span className="text-white/80 text-xs font-mono" style={{ fontFamily: "Space Mono, monospace" }}>LVL {group.level}</span>
                </div>
                {/* XP bar */}
                <div className="px-5 pt-4">
                  <div className="h-2 bg-paper-warm border border-paper-border overflow-hidden">
                    <div className={`h-full ${group.color} fill-bar`} style={{ width: `${group.level}%` }} />
                  </div>
                </div>
                {/* Skills */}
                <div className="p-5">
                  <ul className="space-y-2">
                    {group.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-2 text-sm text-dark" style={{ fontFamily: "DM Sans, sans-serif" }}>
                        <span className={`w-1.5 h-1.5 ${group.color} flex-shrink-0`} />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ PHOTOS + FUN FACTS ══════════ */}
      <section className="py-24 border-t-2 border-dark bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="grid grid-cols-2 gap-3">
              {["/images/about/20200219.jpg", "/images/about/20220724.jpg", "/images/about/20190612.jpg", "/images/about/20161206.jpg"].map((img, i) => (
                <div key={i} className="border-2 border-dark overflow-hidden group shadow-pixel hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-150">
                  <img src={img} alt="" className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
              ))}
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-xs text-game-yellow font-bold tracking-widest uppercase mb-2" style={{ fontFamily: "Space Mono, monospace" }}>◆ FUN FACTS</p>
                <h2 className="text-dark" style={{ fontFamily: "Syne, sans-serif", fontSize: "2rem", fontWeight: 800 }}>
                  Beyond the Screen
                </h2>
              </div>
              <div className="space-y-0 border-2 border-dark">
                {[
                  { emoji: "👟", fact: "Hiked ~800km", detail: "Camino de Santiago, Spain", color: "bg-game-green" },
                  { emoji: "🧹", fact: "Clean freak", detail: "Minimalism at home & in code", color: "bg-game-blue" },
                  { emoji: "🎮", fact: "Gamer at heart", detail: "PS5 & Nintendo Switch", color: "bg-game-purple" },
                  { emoji: "🎾", fact: "Tennis player", detail: "Former player in Australia", color: "bg-game-yellow" },
                ].map((fact, i) => (
                  <div key={fact.fact} className="flex items-center gap-4 p-4 border-b-2 border-dark last:border-b-0 bg-white hover:bg-paper-warm transition-colors">
                    <div className={`w-10 h-10 ${fact.color} border-2 border-dark flex items-center justify-center flex-shrink-0 text-lg`}>
                      {fact.emoji}
                    </div>
                    <div>
                      <p className="font-bold text-dark text-sm" style={{ fontFamily: "Space Mono, monospace" }}>{fact.fact}</p>
                      <p className="text-xs text-text-muted" style={{ fontFamily: "DM Sans, sans-serif" }}>{fact.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ TRAVELS ══════════ */}
      <section className="py-16 border-t-2 border-dark bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs text-game-cyan font-bold tracking-widest uppercase mb-2" style={{ fontFamily: "Space Mono, monospace" }}>◆ MAP UNLOCKED</p>
          <h2 className="text-dark mb-8" style={{ fontFamily: "Syne, sans-serif", fontSize: "2rem", fontWeight: 800 }}>Travels</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {myTrips.map((trip) => (
              <div key={trip.name} className="group border-2 border-dark overflow-hidden shadow-pixel hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-150">
                <div className="relative">
                  <img src={trip.img} alt={trip.name} className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/60 transition-all duration-300 flex items-end p-2">
                    <span className="text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity font-mono" style={{ fontFamily: "Space Mono, monospace" }}>
                      {trip.flag} {trip.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ WORK EXPERIENCE ══════════ */}
      <section className="py-24 border-t-2 border-dark bg-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs text-game-blue font-bold tracking-widest uppercase mb-2" style={{ fontFamily: "Space Mono, monospace" }}>◆ EXPERIENCE LOG</p>
          <h2 className="text-dark mb-12" style={{ fontFamily: "Syne, sans-serif", fontSize: "2.5rem", fontWeight: 800 }}>Work History</h2>

          <div className="space-y-4">
            {myWorkExperience.map((job) => (
              <div key={job.company} className="bg-white border-2 border-dark shadow-pixel hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-150 overflow-hidden">
                <div className="flex items-start gap-0">
                  {/* Color stripe */}
                  <div className={`w-1 self-stretch ${job.color} flex-shrink-0`} />
                  <div className="flex items-start gap-4 p-5 flex-1">
                    {/* Logo */}
                    <div className="w-12 h-12 border-2 border-dark overflow-hidden flex-shrink-0 bg-paper-warm">
                      <img src={job.logo} alt={job.company} className="w-full h-full object-cover" />
                    </div>
                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-bold text-dark" style={{ fontFamily: "Syne, sans-serif", fontSize: "1rem", fontWeight: 700 }}>
                              {job.company}
                            </h3>
                            <span className={`text-[9px] font-bold px-2 py-0.5 border border-dark ${job.color} text-white`} style={{ fontFamily: "Space Mono, monospace" }}>
                              {job.level}
                            </span>
                            {job.current && (
                              <span className="text-[9px] font-bold px-2 py-0.5 bg-game-green text-dark border border-dark flex items-center gap-1" style={{ fontFamily: "Space Mono, monospace" }}>
                                <span className="w-1.5 h-1.5 bg-dark rounded-full animate-pulse" />
                                ACTIVE
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-game-blue font-semibold mt-0.5" style={{ fontFamily: "Space Mono, monospace" }}>{job.position}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-text-muted" style={{ fontFamily: "Space Mono, monospace" }}>{job.duration}</p>
                          <p className="text-[10px] text-text-faint" style={{ fontFamily: "Space Mono, monospace" }}>{job.location}</p>
                        </div>
                      </div>
                      <ul className="space-y-1">
                        {job.desc.map((d, i) => (
                          <li key={i} className="text-sm text-text-muted flex items-start gap-2" style={{ fontFamily: "DM Sans, sans-serif" }}>
                            <span className="text-game-blue mt-1 flex-shrink-0">▸</span>
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-white border-2 border-dark p-5 flex items-center justify-between">
            <p className="text-sm text-text-muted" style={{ fontFamily: "DM Sans, sans-serif" }}>
              Full career details on LinkedIn
            </p>
            <a href="https://www.linkedin.com/in/bluetch/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" style={{ fontFamily: "Space Mono, monospace" }}>
                VIEW PROFILE <ArrowUpRight size={12} />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
