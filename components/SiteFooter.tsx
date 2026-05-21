import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/bluetch/" },
  { label: "Instagram", href: "https://www.instagram.com/noa.tzu/" },
  { label: "GitHub", href: "https://github.com/bluetch" },
];

const siteLinks = [
  { label: "Work", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Devlog", href: "/articles" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();
  const isHome = true;

  const theme = isHome
    ? {
        shell: "border-[#ddd1c4] bg-[#fff8f0]",
        line: "from-transparent via-[#e86f51] to-transparent",
        title: "#1f3a5f",
        small: "#8b7a6d",
        body: "#646b79",
        link: "#5e6675",
        linkHover: "#1f3a5f",
        arrow: "#ccb9aa",
        email: "#e86f51",
        border: "#ddd1c4",
      }
    : {
        shell: "border-[#243570] bg-[#0B1220]",
        line: "from-transparent via-[#4D9EFF] to-transparent",
        title: "#4D9EFF",
        small: "#6880AA",
        body: "#6880AA",
        link: "#6880AA",
        linkHover: "#D0E4FF",
        arrow: "#243570",
        email: "#4D9EFF",
        border: "#243570",
      };

  return (
    <footer className={`mt-0 border-t ${theme.shell}`}>
      <div className={`h-[2px] bg-gradient-to-r ${theme.line} opacity-70`} />

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="space-y-4 md:col-span-2">
            <div>
              <p
                className="mb-1 leading-none"
                style={{ fontFamily: "Syne, sans-serif", fontSize: "2.2rem", fontWeight: 700, color: theme.title }}
              >
                KEN HUANG
              </p>
              <p className="text-[10px] font-mono uppercase tracking-[0.18em]" style={{ fontFamily: "Space Mono, monospace", color: theme.small }}>
                Indie game developer · Product designer · Former frontend lead
              </p>
            </div>

            <p className="max-w-md text-sm leading-7" style={{ fontFamily: "DM Sans, sans-serif", color: theme.body }}>
              Building games from Taipei, with a product eye for systems, feel, and pacing.
            </p>

            <a
              href="mailto:bluetch@gmail.com"
              className="inline-flex items-center gap-1 text-[11px] transition-colors"
              style={{ fontFamily: "Space Mono, monospace", color: theme.email }}
            >
              <span className="opacity-50">$</span> bluetch@gmail.com
              <ArrowUpRight size={12} />
            </a>
          </div>

          <div>
            <p className="mb-4 text-[10px] uppercase tracking-widest" style={{ fontFamily: "Space Mono, monospace", color: theme.title }}>
              Navigate
            </p>
            <ul className="space-y-2">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm transition-colors"
                    style={{ fontFamily: "Space Mono, monospace", fontSize: "11px", color: theme.link }}
                    onMouseEnter={(event) => {
                      event.currentTarget.style.color = theme.linkHover;
                    }}
                    onMouseLeave={(event) => {
                      event.currentTarget.style.color = theme.link;
                    }}
                  >
                    <span style={{ color: theme.arrow }}>›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-[10px] uppercase tracking-widest" style={{ fontFamily: "Space Mono, monospace", color: theme.title }}>
              Connect
            </p>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm transition-colors"
                    style={{ fontFamily: "Space Mono, monospace", fontSize: "11px", color: theme.link }}
                    onMouseEnter={(event) => {
                      event.currentTarget.style.color = theme.linkHover;
                    }}
                    onMouseLeave={(event) => {
                      event.currentTarget.style.color = theme.link;
                    }}
                  >
                    <span style={{ color: theme.arrow }}>›</span>
                    {link.label}
                    <ArrowUpRight size={10} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t pt-6 sm:flex-row sm:items-center" style={{ borderColor: theme.border }}>
          <p className="text-[10px]" style={{ fontFamily: "Space Mono, monospace", color: theme.small }}>
            © {year} KEN HUANG — ALL RIGHTS RESERVED
          </p>
          <p className="text-[10px]" style={{ fontFamily: "Space Mono, monospace", color: theme.small }}>
            MADE IN TAIPEI · SHAPED BY PRODUCTS AND GAMES
          </p>
        </div>
      </div>
    </footer>
  );
}
