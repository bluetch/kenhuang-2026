import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const LOGO_STYLES = `
  @keyframes logoGlitch {
    0%   { clip-path: inset(0 0 100% 0); transform: translate(0); }
    20%  { clip-path: inset(20% 0 60% 0); transform: translate(-3px, 0); }
    40%  { clip-path: inset(50% 0 30% 0); transform: translate(3px, 0); }
    60%  { clip-path: inset(70% 0 10% 0); transform: translate(-2px, 0); }
    80%  { clip-path: inset(0 0 0 0); transform: translate(0); }
    100% { clip-path: inset(0 0 0 0); transform: translate(0); }
  }

  .site-logo:hover .logo-glitch {
    animation: logoGlitch 0.35s steps(1) forwards;
  }
`;

function SiteLogo({ isHome }: { isHome: boolean }) {
  const iconFilter = isHome ? "none" : "brightness(0) invert(1)";
  const accent = isHome ? "#e86f51" : "#4D9EFF";
  const divider = isHome ? "#d8cabd" : "#243570";
  const textColor = isHome ? "#1d2636" : "#D0E4FF";

  return (
    <>
      <style>{LOGO_STYLES}</style>
      <Link href="/" className="site-logo flex items-center gap-3 select-none" style={{ textDecoration: "none" }}>
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
            filter: iconFilter,
            transition: "transform 0.2s ease, filter 0.2s ease",
          }}
        />

        <div style={{ width: 1, height: 22, background: divider, flexShrink: 0 }} />

        <div style={{ position: "relative", lineHeight: 1 }}>
          <span
            style={{
              fontFamily: "Syne, sans-serif",
              fontWeight: 700,
              fontSize: 15,
              letterSpacing: "0.12em",
              color: textColor,
              textTransform: "uppercase",
              display: "block",
            }}
          >
            Ken Huang
          </span>
          <span
            aria-hidden
            className="logo-glitch"
            style={{
              fontFamily: "Syne, sans-serif",
              fontWeight: 700,
              fontSize: 15,
              letterSpacing: "0.12em",
              color: accent,
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
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/articles", label: "DEVLOG" },
  // { href: "/portfolio", label: "WORK" },
];

export function SiteHeader() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = true;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [router.pathname]);

  const theme = {
    header: scrolled
      ? "bg-[rgba(255,249,241,0.92)] border-b border-[#ded1c4] backdrop-blur-md"
      : "bg-[rgba(247,241,232,0.76)] border-b border-[#e7dbce] backdrop-blur-md",
    accentLine: "from-transparent via-[#e86f51] to-transparent",
    navBorder: "#d8cabd",
    navActiveBg: "#1f3a5f",
    navActiveText: "#fff8f0",
    navIdleText: "#75695f",
    navIdleHover: "#1f3a5f",
    navIdleHoverBg: "rgba(31,58,95,0.06)",
    artHover: "#e86f51",
    menuBorder: "#d8cabd",
    menuText: "#75695f",
    mobileBg: "#f7f1e8",
    mobileActiveBg: "rgba(31,58,95,0.08)",
    mobileActiveText: "#1f3a5f",
    mobileIdleHoverBg: "#fff8f0",
    mobileHeaderBg: "#1f3a5f",
    mobileHeaderText: "#fff8f0",
  };

  return (
    <>
      <header className={cn("fixed left-0 right-0 top-0 z-50 transition-all duration-200", theme.header)}>
        <div className={`h-[2px] bg-gradient-to-r ${theme.accentLine}`} />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <SiteLogo isHome={isHome} />

            <nav className="hidden items-center gap-6 md:flex">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? router.pathname === "/"
                    : router.pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative px-1 py-2 text-xs uppercase tracking-[0.18em] transition-all duration-150"
                    style={{
                      fontFamily: "Space Mono, monospace",
                      background: "transparent",
                      color: isActive ? "#1d2636" : theme.navIdleText,
                      fontWeight: isActive ? 700 : 500,
                    }}
                    onMouseEnter={(event) => {
                      if (!isActive) {
                        event.currentTarget.style.color = theme.navIdleHover;
                      }
                    }}
                    onMouseLeave={(event) => {
                      if (!isActive) {
                        event.currentTarget.style.color = theme.navIdleText;
                      }
                    }}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        className="absolute -bottom-0.5 left-0 right-0 h-[2px]"
                        style={{ background: "#e86f51" }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-9 w-9 items-center justify-center border transition-all md:hidden"
              style={{
                borderColor: theme.menuBorder,
                color: theme.menuText,
              }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </header>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center"
          style={{ background: theme.mobileBg }}
          onClick={() => setIsOpen(false)}
        >
          <nav
            className="flex w-64 flex-col items-stretch gap-0 border"
            style={{ borderColor: theme.navBorder }}
            onClick={(event) => event.stopPropagation()}
          >
            <div
              className="flex items-center justify-between px-4 py-2"
              style={{ background: theme.mobileHeaderBg, color: theme.mobileHeaderText }}
            >
              <span className="text-[10px] font-bold" style={{ fontFamily: "Space Mono, monospace" }}>
                SELECT SCREEN
              </span>
              <button onClick={() => setIsOpen(false)}>
                <X size={14} />
              </button>
            </div>

            {navLinks.map((link) => {
              const isActive = (
                link.href === "/"
                  ? router.pathname === "/"
                  : router.pathname.startsWith(link.href)
              );

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 border-b px-4 py-3 text-xs uppercase tracking-widest transition-all last:border-b-0"
                  style={{
                    fontFamily: "Space Mono, monospace",
                    borderColor: theme.navBorder,
                    background: isActive ? theme.mobileActiveBg : "transparent",
                    color: isActive ? theme.mobileActiveText : theme.navIdleText,
                  }}
                  onClick={() => setIsOpen(false)}
                  onMouseEnter={(event) => {
                    if (!isActive) event.currentTarget.style.background = theme.mobileIdleHoverBg;
                  }}
                  onMouseLeave={(event) => {
                    if (!isActive) event.currentTarget.style.background = "transparent";
                  }}
                >
                  {isActive && <span>▶</span>}
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
}
