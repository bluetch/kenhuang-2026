import React from "react";
import Link from "next/link";
import { ArrowUpRight, Gamepad2, Heart } from "lucide-react";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/bluetch/" },
  { label: "Instagram", href: "https://www.instagram.com/kenhuang.studio/" },
  { label: "GitHub", href: "https://github.com/bluetch" },
];

const siteLinks = [
  { label: "Work", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Writing", href: "/articles" },
  { label: "Mentorship", href: "/mentorship" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t-2 border-dark bg-dark mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-game-blue border-2 border-white flex items-center justify-center">
                <Gamepad2 size={16} className="text-white" />
              </div>
              <h3
                className="text-white font-bold tracking-wider"
                style={{ fontFamily: "Orbitron, monospace", fontSize: "1rem" }}
              >
                KEN HUANG
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif" }}>
              Product designer & frontend developer
              <br />
              Taipei, Taiwan — Level 15 Unlocked
            </p>
            <a
              href="mailto:bluetch@gmail.com"
              className="inline-flex items-center gap-1 text-sm text-game-blue hover:text-game-cyan transition-colors font-mono"
              style={{ fontFamily: "Space Mono, monospace" }}
            >
              bluetch@gmail.com
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs text-gray-500 tracking-widest uppercase mb-4" style={{ fontFamily: "Space Mono, monospace" }}>
              Navigate
            </p>
            <ul className="space-y-2">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs text-gray-500 tracking-widest uppercase mb-4" style={{ fontFamily: "Space Mono, monospace" }}>
              Connect
            </p>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    {link.label}
                    <ArrowUpRight size={12} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-xs text-gray-600" style={{ fontFamily: "Space Mono, monospace" }}>
            © {year} KEN HUANG. ALL RIGHTS RESERVED.
          </p>
          <p className="text-xs text-gray-600 flex items-center gap-1" style={{ fontFamily: "Space Mono, monospace" }}>
            MADE WITH <Heart size={10} className="text-game-red mx-1" fill="currentColor" /> IN TAIPEI
          </p>
        </div>
      </div>
    </footer>
  );
}
