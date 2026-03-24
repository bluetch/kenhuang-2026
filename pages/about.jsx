import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteLayout } from "components/SiteLayout";
import { CharacterSelector } from "components/CharacterSelector";

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
  },
];

const achievements = [
  { icon: "🏆", label: "Shopee DLS Lead", color: "#FFD60A" },
  { icon: "🌍", label: "20 Countries", color: "#7BBFFF" },
  { icon: "👟", label: "800km Camino", color: "#4D9EFF" },
  { icon: "🎓", label: "50+ Mentees", color: "#FFD60A" },
  { icon: "⚛️", label: "React Master", color: "#7BBFFF" },
  { icon: "🎨", label: "Design Systems", color: "#FFD60A" },
  { icon: "🔒", label: "OT Security", color: "#4D9EFF" },
  { icon: "🗾", label: "APAC Expert", color: "#FFD60A" },
];

function NeonBar({ label, value, max, color = "#4D9EFF" }) {
  const pct = Math.round((value / max) * 100);
  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center">
        <span className="text-[9px] text-[#8898BB] uppercase" style={{ fontFamily: "Space Mono, monospace" }}>{label}</span>
        <span className="text-[9px]" style={{ fontFamily: "Space Mono, monospace", color }}>{value}/{max}</span>
      </div>
      <div className="h-2 bg-[#1A2D5A] border border-[#243570] overflow-hidden">
        <div
          className="h-full"
          style={{ width: `${pct}%`, background: `linear-gradient(90deg, ${color}, ${color}80)`, boxShadow: `0 0 6px ${color}60` }}
        />
      </div>
    </div>
  );
}

export default function About() {
  return (
    <SiteLayout
      title="Character Sheet — Ken Huang"
      description="Ken Huang is a UX Engineer and product designer based in Taipei, Taiwan with 15+ years of experience."
    >
      {/* ══════════ HERO / CHARACTER SHEET ══════════ */}
      <section
        className="pt-28 pb-20 lg:pt-36 lg:pb-24 relative"
        style={{
          background: "#0B1220",
          borderBottom: "1px solid #243570",
          backgroundImage: "linear-gradient(rgba(0,207,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,207,255,0.025) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[10px] tracking-widest uppercase mb-6" style={{ fontFamily: "Space Mono, monospace", color: "#7BBFFF" }}>
            // CHARACTER.SHEET
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Portrait card */}
            <div className="lg:col-span-2 flex justify-center lg:justify-start">
              <CharacterSelector size={240} />
            </div>

            {/* Character info */}
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h1
                  className="leading-none mb-1"
                  style={{ fontFamily: "VT323, monospace", fontSize: "clamp(3rem, 6vw, 5rem)", color: "#D0E4FF", lineHeight: 0.95 }}
                >
                  KEN HUANG
                </h1>
                <p className="text-[11px] tracking-wider" style={{ fontFamily: "Space Mono, monospace", color: "#7BBFFF" }}>
                  UX ENGINEER · CLASS: DESIGNER/DEVELOPER · INDIE DEV
                </p>
              </div>

              {/* Origin story */}
              <div
                className="p-4 space-y-2"
                style={{ background: "#142040", border: "1px solid #243570", borderLeft: "3px solid #7BBFFF" }}
              >
                <p className="text-[10px] text-[#8898BB] uppercase mb-2" style={{ fontFamily: "Space Mono, monospace" }}>
                  // ORIGIN_STORY.TXT
                </p>
                <p className="text-sm leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif", color: "#8898BB" }}>
                  Since 2005, turning complex problems into simple, beautiful, and intuitive designs. When not pushing pixels, you&apos;ll find me cooking, gardening, or working out in the park.
                </p>
                <p className="text-sm leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif", color: "#8898BB" }}>
                  15+ years experience across 6 companies — designer for 6 years, developer for 10. APAC and Europe. From Shopee to Trend Micro. Currently building indie games on weekends.
                </p>
              </div>

              {/* Achievements */}
              <div>
                <p className="text-[10px] tracking-widest uppercase mb-3" style={{ fontFamily: "Space Mono, monospace", color: "#FFD60A" }}>
                  // ACHIEVEMENTS_UNLOCKED
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {achievements.map((a) => (
                    <div
                      key={a.label}
                      className="flex items-center gap-2 px-2 py-2 transition-all duration-150 cursor-default"
                      style={{
                        background: "#142040",
                        border: `1px solid ${a.color}40`,
                        borderLeft: `3px solid ${a.color}`,
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = a.color; e.currentTarget.style.borderLeftColor = a.color; e.currentTarget.style.boxShadow = `2px 2px 0 0 ${a.color}`; e.currentTarget.style.transform = "translate(-1px,-1px)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${a.color}40`; e.currentTarget.style.borderLeftColor = a.color; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}
                    >
                      <span className="text-base">{a.icon}</span>
                      <span className="text-[9px] font-bold uppercase leading-tight" style={{ fontFamily: "Space Mono, monospace", color: a.color }}>
                        {a.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/in/bluetch/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="px-5 py-2.5 text-[10px] font-bold tracking-widest uppercase transition-all duration-150"
                    style={{
                      fontFamily: "Space Mono, monospace",
                      background: "#7BBFFF",
                      color: "#0D1533",
                      border: "2px solid #7BBFFF",
                      boxShadow: "3px 3px 0 0 #2468CC",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translate(2px,2px)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "3px 3px 0 0 #2468CC"; e.currentTarget.style.transform = "none"; }}
                  >
                    LINKEDIN <ArrowUpRight size={12} className="inline" />
                  </button>
                </a>
{/* MENTORSHIP link hidden
                <Link href="/mentorship">
                  <button
                    className="px-5 py-2.5 text-[10px] font-bold tracking-widest uppercase transition-all duration-150"
                    style={{
                      fontFamily: "Space Mono, monospace",
                      background: "#FFD60A",
                      color: "#0D1533",
                      border: "2px solid #FFD60A",
                      boxShadow: "3px 3px 0 0 #CCA800",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translate(2px,2px)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "3px 3px 0 0 #CCA800"; e.currentTarget.style.transform = "none"; }}
                  >
                    MENTORSHIP
                  </button>
                </Link>
*/}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ SKILLS — ABILITY TREE ══════════ */}
      <section className="py-20" style={{ background: "#0D1533" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[10px] tracking-widest uppercase mb-1" style={{ fontFamily: "Space Mono, monospace", color: "#7BBFFF" }}>
            // ABILITY_TREE
          </p>
          <h2
            className="mb-10 leading-none"
            style={{ fontFamily: "VT323, monospace", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#D0E4FF" }}
          >
            SKILLS & EXPERTISE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                cat: "DESIGN", icon: "🎨", color: "#FFD60A",
                skills: ["Product Thinking", "UX Research", "Figma", "Design Systems", "Prototyping", "Usability Testing"],
                level: 95,
              },
              {
                cat: "FRONTEND", icon: "💻", color: "#7BBFFF",
                skills: ["React / Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Git / CI/CD", "Vercel"],
                level: 90,
              },
              {
                cat: "GAME DEV", icon: "🎮", color: "#4D9EFF",
                skills: ["Godot 4", "GDScript", "Pixel Art", "Game Design", "itch.io", "Game Jam"],
                level: 30,
              },
            ].map((group) => (
              <div
                key={group.cat}
                className="overflow-hidden transition-all duration-150"
                style={{ background: "#142040", border: "2px solid #243570" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = group.color; e.currentTarget.style.boxShadow = `4px 4px 0 0 ${group.color}`; e.currentTarget.style.transform = "translate(-2px,-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#243570"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}
              >
                {/* Header */}
                <div
                  className="px-5 py-3 flex items-center justify-between border-b border-[#243570]"
                  style={{ background: "#1A2D5A" }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{group.icon}</span>
                    <span className="font-bold tracking-wider text-sm" style={{ fontFamily: "Space Mono, monospace", color: group.color }}>
                      {group.cat}
                    </span>
                  </div>
                  <span className="text-[10px]" style={{ fontFamily: "Space Mono, monospace", color: "#8898BB" }}>
                    LV {group.level}
                  </span>
                </div>
                {/* XP bar */}
                <div className="px-5 pt-4">
                  <div className="h-2 bg-[#1A2D5A] border border-[#243570] overflow-hidden">
                    <div
                      className="h-full"
                      style={{
                        width: `${group.level}%`,
                        background: `linear-gradient(90deg, ${group.color}, ${group.color}80)`,
                        boxShadow: `0 0 6px ${group.color}60`,
                      }}
                    />
                  </div>
                </div>
                {/* Skills */}
                <div className="p-5">
                  <ul className="space-y-2">
                    {group.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-2 text-sm" style={{ fontFamily: "DM Sans, sans-serif", color: "#8898BB" }}>
                        <span className="w-1.5 h-1.5 flex-shrink-0" style={{ background: group.color }} />
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
      <section
        className="py-20 border-t"
        style={{ background: "#0B1220", borderColor: "#243570" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="grid grid-cols-2 gap-3">
              {[
                { src: "/images/about/20200219.jpg", alt: "Ken on the Camino de Santiago, Feb 2020" },
                { src: "/images/about/20220724.jpg", alt: "Ken Huang, July 2022" },
                { src: "/images/about/20190612.jpg", alt: "Ken Huang, June 2019" },
                { src: "/images/about/20161206.jpg", alt: "Ken Huang, December 2016" },
              ].map((photo) => (
                <div
                  key={photo.src}
                  className="overflow-hidden group transition-all duration-150"
                  style={{ border: "2px solid #243570" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#4D9EFF"; e.currentTarget.style.boxShadow = "4px 4px 0 0 #4D9EFF"; e.currentTarget.style.transform = "translate(-2px,-2px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#243570"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}
                >
                  <img src={photo.src} alt={photo.alt} className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
              ))}
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-[10px] tracking-widest uppercase mb-1" style={{ fontFamily: "Space Mono, monospace", color: "#FFD60A" }}>
                  // FUN_FACTS.TXT
                </p>
                <h2
                  className="leading-none"
                  style={{ fontFamily: "VT323, monospace", fontSize: "clamp(2.5rem, 5vw, 3.5rem)", color: "#D0E4FF" }}
                >
                  BEYOND THE SCREEN
                </h2>
              </div>
              <div style={{ border: "1px solid #243570" }}>
                {[
                  { emoji: "👟", fact: "Hiked ~800km", detail: "Camino de Santiago, Spain", color: "#4D9EFF" },
                  { emoji: "🎮", fact: "Amateur Game Dev", detail: "Godot 4 + itch.io on weekends", color: "#FFD60A" },
                  { emoji: "🧹", fact: "Clean freak", detail: "Minimalism at home & in code", color: "#7BBFFF" },
                  { emoji: "🎾", fact: "Tennis player", detail: "Former player in Australia", color: "#FFD60A" },
                ].map((fact) => (
                  <div
                    key={fact.fact}
                    className="flex items-center gap-4 p-4 border-b last:border-b-0 transition-all duration-150"
                    style={{ borderColor: "#243570", background: "#142040", borderLeft: "2px solid transparent" }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "#1A2D5A"; e.currentTarget.style.borderLeftColor = fact.color; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "#142040"; e.currentTarget.style.borderLeftColor = "transparent"; }}
                  >
                    <div
                      className="w-10 h-10 flex items-center justify-center flex-shrink-0 text-lg"
                      style={{ border: `2px solid ${fact.color}`, background: `${fact.color}15` }}
                    >
                      {fact.emoji}
                    </div>
                    <div>
                      <p className="font-bold text-sm" style={{ fontFamily: "Space Mono, monospace", color: fact.color }}>
                        {fact.fact}
                      </p>
                      <p className="text-xs" style={{ fontFamily: "DM Sans, sans-serif", color: "#8898BB" }}>
                        {fact.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ TRAVELS ══════════ */}
      <section
        className="py-16 border-t"
        style={{ background: "#0D1533", borderColor: "#243570" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[10px] tracking-widest uppercase mb-1" style={{ fontFamily: "Space Mono, monospace", color: "#7BBFFF" }}>
            // MAP_UNLOCKED
          </p>
          <h2
            className="leading-none mb-8"
            style={{ fontFamily: "VT323, monospace", fontSize: "clamp(2.5rem, 5vw, 3.5rem)", color: "#D0E4FF" }}
          >
            TRAVELS
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {myTrips.map((trip) => (
              <div
                key={trip.name}
                className="group overflow-hidden transition-all duration-150"
                style={{ border: "2px solid #243570" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#7BBFFF"; e.currentTarget.style.boxShadow = "3px 3px 0 0 #7BBFFF"; e.currentTarget.style.transform = "translate(-2px,-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#243570"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}
              >
                <div className="relative">
                  <img
                    src={trip.img}
                    alt={trip.name}
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2"
                    style={{ background: "rgba(13,21,51,0.7)" }}
                  >
                    <span className="text-white text-xs font-mono" style={{ fontFamily: "Space Mono, monospace" }}>
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
      <section
        className="py-20 border-t"
        style={{ background: "#0B1220", borderColor: "#243570" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[10px] tracking-widest uppercase mb-1" style={{ fontFamily: "Space Mono, monospace", color: "#4D9EFF" }}>
            // EXPERIENCE.LOG
          </p>
          <h2
            className="leading-none mb-10"
            style={{ fontFamily: "VT323, monospace", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#D0E4FF" }}
          >
            WORK HISTORY
          </h2>

          <div className="space-y-2">
            {myWorkExperience.map((job) => (
              <div
                key={job.company}
                className="overflow-hidden transition-all duration-150"
                style={{
                  background: "#142040",
                  border: "1px solid #243570",
                  borderLeft: job.current ? "3px solid #4D9EFF" : "3px solid #1E3060",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#4D9EFF";
                  e.currentTarget.style.borderLeftColor = "#4D9EFF";
                  e.currentTarget.style.boxShadow = "3px 3px 0 0 #1A3A6A";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#243570";
                  e.currentTarget.style.borderLeftColor = job.current ? "#4D9EFF" : "#1E3060";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="flex items-center gap-4 p-4">
                  {/* Logo — white bg for white-bg logos */}
                  <div
                    className="flex-shrink-0 flex items-center justify-center"
                    style={{
                      width: 48,
                      height: 48,
                      background: "#FFFFFF",
                      border: "1px solid #E0E8F0",
                      padding: "6px",
                    }}
                  >
                    <img
                      src={job.logo}
                      alt={job.company}
                      style={{ width: "100%", height: "100%", objectFit: "contain" }}
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
                      {/* Left: company + badges + position */}
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-0.5">
                          <h3 className="font-bold" style={{ fontFamily: "Syne, sans-serif", fontSize: "0.95rem", color: "#D0E4FF" }}>
                            {job.company}
                          </h3>
                          <span
                            className="text-[8px] font-bold px-2 py-0.5"
                            style={{
                              fontFamily: "Space Mono, monospace",
                              color: "#8898BB",
                              border: "1px solid #243570",
                              background: "#1A2D5A",
                            }}
                          >
                            {job.level}
                          </span>
                          {job.current && (
                            <span
                              className="text-[8px] font-bold px-2 py-0.5 flex items-center gap-1"
                              style={{ fontFamily: "Space Mono, monospace", color: "#0D1533", background: "#4D9EFF" }}
                            >
                              <span className="w-1.5 h-1.5 bg-[#0D1533] rounded-full animate-pulse" />
                              ACTIVE
                            </span>
                          )}
                        </div>
                        <p className="text-[10px]" style={{ fontFamily: "Space Mono, monospace", color: "#8898BB" }}>
                          {job.position}
                        </p>
                      </div>
                      {/* Right: duration + location */}
                      <div className="text-right flex-shrink-0">
                        <p className="text-[10px]" style={{ fontFamily: "Space Mono, monospace", color: "#8898BB" }}>{job.duration}</p>
                        <p className="text-[9px]" style={{ fontFamily: "Space Mono, monospace", color: "#6880AA" }}>{job.location}</p>
                      </div>
                    </div>
                    {/* Desc */}
                    <ul className="mt-2 space-y-0.5">
                      {job.desc.map((d, i) => (
                        <li key={i} className="text-sm flex items-baseline gap-2 leading-snug" style={{ fontFamily: "DM Sans, sans-serif", color: "#8898BB" }}>
                          <span className="flex-shrink-0 text-[#4D9EFF]">▸</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className="mt-4 p-4 flex items-center justify-between"
            style={{ background: "#142040", border: "1px solid #243570" }}
          >
            <p className="text-sm" style={{ fontFamily: "DM Sans, sans-serif", color: "#8898BB" }}>
              Full career details on LinkedIn
            </p>
            <a
              href="https://www.linkedin.com/in/bluetch/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="px-4 py-2 text-[10px] font-bold tracking-widest uppercase transition-all duration-150"
                style={{
                  fontFamily: "Space Mono, monospace",
                  color: "#7BBFFF",
                  border: "1px solid #7BBFFF",
                  background: "transparent",
                  boxShadow: "2px 2px 0 0 #2468CC",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(123,191,255,0.1)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translate(1px,1px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.boxShadow = "2px 2px 0 0 #2468CC"; e.currentTarget.style.transform = "none"; }}
              >
                VIEW PROFILE <ArrowUpRight size={11} className="inline" />
              </button>
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
