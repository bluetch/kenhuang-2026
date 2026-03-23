import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, X, Gamepad2 } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home", key: "A" },
  { href: "/about", label: "About", key: "B" },
  { href: "/portfolio", label: "Work", key: "X" },
  { href: "/articles", label: "Writing", key: "Y" },
  { href: "/mentorship", label: "Mentor", key: "L" },
];

const BUTTON_COLORS: Record<string, string> = {
  A: "bg-game-green text-dark",
  B: "bg-game-red text-white",
  X: "bg-game-blue text-white",
  Y: "bg-game-yellow text-dark",
  L: "bg-game-pink text-white",
};

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
            ? "bg-paper-white/95 backdrop-blur-sm border-b-2 border-dark shadow-[0_2px_0_0_#1A1A2E]"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 bg-game-blue border-2 border-dark flex items-center justify-center shadow-pixel-sm group-hover:shadow-none group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all duration-150">
                <Gamepad2 size={14} className="text-white" />
              </div>
              <span
                className="font-game text-sm font-bold text-dark tracking-wider"
                style={{ fontFamily: "Orbitron, monospace" }}
              >
                KEN HUANG
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
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
                      "flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold tracking-wider uppercase transition-all duration-150 border-2",
                      isActive
                        ? "bg-dark text-white border-dark"
                        : "text-dark border-transparent hover:border-dark hover:bg-paper-warm"
                    )}
                    style={{ fontFamily: "Space Mono, monospace" }}
                  >
                    <span className={cn("w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-bold flex-shrink-0", BUTTON_COLORS[link.key])}>
                      {link.key}
                    </span>
                    {link.label}
                  </Link>
                );
              })}
              <a
                href="https://www.instagram.com/kenhuang.studio/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold tracking-wider uppercase text-dark border-2 border-transparent hover:border-dark hover:bg-paper-warm transition-all duration-150"
                style={{ fontFamily: "Space Mono, monospace" }}
              >
                <span className="w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-bold bg-game-cyan text-dark">R</span>
                Art
              </a>
            </nav>

            {/* Mobile menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 border-2 border-dark flex items-center justify-center hover:bg-dark hover:text-white transition-all"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-paper-white flex flex-col justify-center items-center"
          onClick={() => setIsOpen(false)}
        >
          {/* Pixel decoration */}
          <div className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(67,97,238,0.05) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <nav className="flex flex-col items-center gap-4 relative z-10">
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
                    "flex items-center gap-3 px-6 py-3 text-lg font-game font-bold tracking-wider border-2 transition-all",
                    isActive
                      ? "bg-dark text-white border-dark"
                      : "text-dark border-dark hover:bg-dark hover:text-white shadow-pixel hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                  )}
                  style={{ fontFamily: "Orbitron, monospace", animationDelay: `${i * 0.07}s` }}
                >
                  <span className={cn("w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold", BUTTON_COLORS[link.key])}>
                    {link.key}
                  </span>
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <p className="mt-12 text-xs text-text-muted font-mono" style={{ fontFamily: "Space Mono, monospace" }}>
            PRESS ANY BUTTON TO CONTINUE
          </p>
        </div>
      )}
    </>
  );
}
