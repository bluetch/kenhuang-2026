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
  // { label: "Mentorship", href: "/mentorship" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[#243570] bg-[#0B1220] mt-0">
      {/* Top accent line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#4D9EFF] to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div>
              <p
                className="text-[#4D9EFF] leading-none mb-1"
                style={{ fontFamily: "VT323, monospace", fontSize: "2.5rem" }}
              >
                KEN HUANG
              </p>
              <p className="text-[10px] text-[#6880AA] font-mono" style={{ fontFamily: "Space Mono, monospace" }}>
                LEVEL 15 · INDIE DEV · PRODUCT DESIGNER
              </p>
            </div>
            <p className="text-sm text-[#6880AA]" style={{ fontFamily: "DM Sans, sans-serif" }}>
              Amateur game dev & product designer building things in Taipei.
            </p>
            <a
              href="mailto:bluetch@gmail.com"
              className="inline-flex items-center gap-1 text-[11px] text-[#4D9EFF] hover:text-white transition-colors font-mono"
              style={{ fontFamily: "Space Mono, monospace" }}
            >
              <span className="opacity-50">$</span> bluetch@gmail.com
              <ArrowUpRight size={12} />
            </a>
          </div>

          {/* Nav */}
          <div>
            <p className="text-[10px] text-[#4D9EFF] tracking-widest uppercase mb-4 font-mono" style={{ fontFamily: "Space Mono, monospace" }}>
              // Navigate
            </p>
            <ul className="space-y-2">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#6880AA] hover:text-[#D0E4FF] transition-colors flex items-center gap-2"
                    style={{ fontFamily: "Space Mono, monospace", fontSize: "11px" }}
                  >
                    <span className="text-[#243570]">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-[10px] text-[#4D9EFF] tracking-widest uppercase mb-4 font-mono" style={{ fontFamily: "Space Mono, monospace" }}>
              // Connect
            </p>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-[#6880AA] hover:text-[#D0E4FF] transition-colors"
                    style={{ fontFamily: "Space Mono, monospace", fontSize: "11px" }}
                  >
                    <span className="text-[#243570]">›</span>
                    {link.label}
                    <ArrowUpRight size={10} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#243570] pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="text-[10px] text-[#6880AA]" style={{ fontFamily: "Space Mono, monospace" }}>
            © {year} KEN HUANG — ALL RIGHTS RESERVED
          </p>
          <p className="text-[10px] text-[#6880AA]" style={{ fontFamily: "Space Mono, monospace" }}>
            MADE WITH <span className="text-[#FF3E3E]">♥</span> IN TAIPEI · TAIWAN
          </p>
        </div>
      </div>
    </footer>
  );
}
