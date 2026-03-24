import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

/* ── Logo keyframes ──────────────────────────────────────────────── */
const LOGO_STYLES = `
  @keyframes logoGlitch {
    0%   { clip-path: inset(0 0 100% 0); transform: translate(0); }
    20%  { clip-path: inset(20% 0 60% 0); transform: translate(-3px, 0); }
    40%  { clip-path: inset(50% 0 30% 0); transform: translate(3px, 0); }
    60%  { clip-path: inset(70% 0 10% 0); transform: translate(-2px, 0); }
    80%  { clip-path: inset(0 0 0 0);     transform: translate(0); }
    100% { clip-path: inset(0 0 0 0);     transform: translate(0); }
  }
  .site-logo:hover .logo-glitch {
    animation: logoGlitch 0.35s steps(1) forwards;
  }
  .site-logo:hover .logo-icon {
    filter: brightness(0) invert(1) drop-shadow(0 0 6px #4D9EFF);
  }
`;

function SiteLogo() {
  return (
    <>
      <style>{LOGO_STYLES}</style>

      <Link
        href="/"
        className="site-logo flex items-center gap-3 select-none"
        style={{ textDecoration: "none" }}
      >
        {/* K icon */}
        <img
          src="/images/k-logo.png"
          alt=""
          width={30}
          height={30}
          className="logo-icon"
          draggable={false}
          style={{
            display: "block",
            flexShrink: 0,
            filter: "brightness(0) invert(1)",
            transition: "filter 0.2s",
          }}
        />

        {/* Divider */}
        <div style={{ width: 1, height: 22, background: "#243570", flexShrink: 0 }} />

        {/* Name — glitch layer */}
        <div style={{ position: "relative", lineHeight: 1 }}>
          <span
            style={{
              fontFamily: "Syne, sans-serif",
              fontWeight: 700,
              fontSize: 15,
              letterSpacing: "0.12em",
              color: "#D0E4FF",
              textTransform: "uppercase",
              display: "block",
            }}
          >
            Ken Huang
          </span>

          {/* Glitch clone — same text, clips and shifts on hover */}
          <span
            aria-hidden
            className="logo-glitch"
            style={{
              fontFamily: "Syne, sans-serif",
              fontWeight: 700,
              fontSize: 15,
              letterSpacing: "0.12em",
              color: "#4D9EFF",
              textTransform: "uppercase",
              position: "absolute",
              inset: 0,
              display: "block",
              clipPath: "inset(0 0 100% 0)",
            }}
          >
            Ken Huang
          </span>
        </div>
      </Link>
    </>
  );
}

const navLinks = [
  { href: "/", label: "HOME", key: "01" },
  { href: "/about", label: "ABOUT", key: "02" },
  { href: "/portfolio", label: "WORK", key: "03" },
  { href: "/articles", label: "DEVLOG", key: "04" },
  { href: "/mentorship", label: "MENTOR", key: "05" },
];

export function SiteHeader() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [router.pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
          scrolled
            ? "bg-[#0D1533]/95 backdrop-blur-sm border-b border-[#243570]"
            : "bg-[#0D1533]/80 backdrop-blur-sm border-b border-[#243570]/50"
        )}
      >
        {/* Top pixel line */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-[#4D9EFF] to-transparent" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <SiteLogo />

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-0 border border-[#243570]">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? router.pathname === "/"
                    : router.pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative flex items-center gap-1.5 px-4 py-2.5 text-xs font-mono tracking-widest uppercase transition-all duration-150 border-r border-[#243570] last:border-r-0",
                      isActive
                        ? "bg-[#4D9EFF] text-[#0D1533] font-bold"
                        : "text-[#6880AA] hover:text-[#4D9EFF] hover:bg-[#4D9EFF]/10"
                    )}
                    style={{ fontFamily: "Space Mono, monospace" }}
                  >
                    <span className="text-[10px] opacity-50">{link.key}</span>
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#4D9EFF]" />
                    )}
                  </Link>
                );
              })}
              <a
                href="https://www.instagram.com/noa.tzu/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-mono tracking-widest uppercase text-[#6880AA] hover:text-[#FFD60A] hover:bg-[#FFD60A]/10 transition-all border-r-0"
                style={{ fontFamily: "Space Mono, monospace" }}
              >
                <span className="text-[10px] opacity-50">06</span>
                ART
              </a>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-9 h-9 border border-[#243570] flex items-center justify-center hover:border-[#4D9EFF] hover:text-[#4D9EFF] text-[#6880AA] transition-all"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#0D1533] flex flex-col justify-center items-center pixel-grid-bg"
          onClick={() => setIsOpen(false)}
        >
          <nav className="flex flex-col items-stretch gap-0 border border-[#243570] w-64" onClick={(e) => e.stopPropagation()}>
            <div className="bg-[#4D9EFF] px-4 py-2 flex justify-between items-center">
              <span className="text-[#0D1533] text-[10px] font-mono font-bold" style={{ fontFamily: "Space Mono, monospace" }}>
                SELECT SCREEN
              </span>
              <button onClick={() => setIsOpen(false)} className="text-[#0D1533]">
                <X size={14} />
              </button>
            </div>
            {[...navLinks, { href: "https://www.instagram.com/noa.tzu/", label: "ART", key: "06", external: true }].map((link, i) => {
              const isActive = !("external" in link) && (
                link.href === "/"
                  ? router.pathname === "/"
                  : router.pathname.startsWith(link.href)
              );
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  target={"external" in link ? "_blank" : undefined}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 text-xs font-mono tracking-widest uppercase border-b border-[#243570] last:border-b-0 transition-all",
                    isActive
                      ? "bg-[#4D9EFF]/15 text-[#4D9EFF] border-l-2 border-l-[#4D9EFF]"
                      : "text-[#6880AA] hover:text-[#D0E4FF] hover:bg-[#1A2D5A]"
                  )}
                  style={{ fontFamily: "Space Mono, monospace" }}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-[#4D6090] text-[8px]">{link.key}</span>
                  {isActive && <span className="text-[#4D9EFF]">▶</span>}
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <p className="mt-8 text-[10px] text-[#4D6090] font-mono animate-blink" style={{ fontFamily: "Space Mono, monospace" }}>
            PRESS ESC TO CLOSE
          </p>
        </div>
      )}
    </>
  );
}
