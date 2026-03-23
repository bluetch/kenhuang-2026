import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Work" },
  { href: "/articles", label: "Writing" },
  { href: "/mentorship", label: "Mentorship" },
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
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-ink/90 backdrop-blur-md border-b border-ink-border"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="font-display text-lg font-semibold text-cream hover:text-lime transition-colors duration-200"
              style={{ fontFamily: "Fraunces, serif", fontWeight: 600 }}
            >
              Ken Huang
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
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
                      "text-sm tracking-wide transition-colors duration-200 font-medium",
                      isActive
                        ? "text-lime"
                        : "text-cream-muted hover:text-cream"
                    )}
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <a
                href="https://www.instagram.com/kenhuang.studio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm tracking-wide text-cream-muted hover:text-cream transition-colors duration-200"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                Art
              </a>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-cream-muted hover:text-cream transition-colors p-1"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-ink/95 backdrop-blur-md flex flex-col justify-center items-center"
          onClick={() => setIsOpen(false)}
        >
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link, i) => {
              const isActive =
                link.href === "/"
                  ? router.pathname === "/"
                  : router.pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-3xl font-display transition-colors duration-200 animate-fade-up",
                    isActive ? "text-lime" : "text-cream hover:text-lime"
                  )}
                  style={{
                    fontFamily: "Fraunces, serif",
                    animationDelay: `${i * 0.07}s`,
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="https://www.instagram.com/kenhuang.studio/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl font-display text-cream hover:text-lime transition-colors animate-fade-up"
              style={{
                fontFamily: "Fraunces, serif",
                animationDelay: `${navLinks.length * 0.07}s`,
              }}
            >
              Art
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
