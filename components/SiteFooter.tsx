import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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
    <footer className="border-t border-ink-border mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3
              className="text-2xl text-cream"
              style={{ fontFamily: "Fraunces, serif" }}
            >
              Ken Huang
            </h3>
            <p className="text-cream-muted text-sm leading-relaxed">
              Product designer & frontend developer
              <br />
              based in Taipei, Taiwan.
            </p>
            <a
              href="mailto:bluetch@gmail.com"
              className="inline-flex items-center gap-1 text-sm text-lime hover:text-lime-dark transition-colors"
            >
              bluetch@gmail.com
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p
              className="text-xs text-cream-faint tracking-widest uppercase mb-4 font-mono-site"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              Navigation
            </p>
            <ul className="space-y-2">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream-muted hover:text-cream transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p
              className="text-xs text-cream-faint tracking-widest uppercase mb-4 font-mono-site"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              Connect
            </p>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-cream-muted hover:text-cream transition-colors"
                  >
                    {link.label}
                    <ArrowUpRight size={12} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-ink-border pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p
            className="text-xs text-cream-faint"
            style={{ fontFamily: "JetBrains Mono, monospace" }}
          >
            © {year} Ken Huang. All rights reserved.
          </p>
          <p
            className="text-xs text-cream-faint"
            style={{ fontFamily: "JetBrains Mono, monospace" }}
          >
            Designed & built with craft
          </p>
        </div>
      </div>
    </footer>
  );
}
