"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Github, Linkedin, FileText, ArrowRight } from "lucide-react";
import { PERSONAL_INFO, NAV_LINKS } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-background/90 backdrop-blur-md border-white/10 shadow-lg"
          : "bg-background/40 backdrop-blur-sm border-white/5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo / Identity */}
          <Link
            href="/"
            className="group flex items-center gap-3 text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded-md py-1"
          >
            <div className="w-8 h-8 rounded-lg border border-white/15 bg-surface-100 flex items-center justify-center font-mono font-bold text-xs text-accent group-hover:border-accent transition-colors shadow-[0_0_10px_-3px_rgba(0,229,153,0.3)]">
              AV
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-sm sm:text-base text-white group-hover:text-accent transition-colors uppercase">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[10px] font-mono text-zinc-500 tracking-wider uppercase -mt-0.5">
                ENGINEERING PORTFOLIO
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs font-mono tracking-wider uppercase text-zinc-400"
          >
            {NAV_LINKS.map((link) => {
              const isResume = link.href === "/resume";
              const isActive = isResume ? pathname === "/resume" : false;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "px-3 py-1.5 rounded-md transition-all hover:text-white hover:bg-white/5",
                    isActive && "text-accent bg-emerald-950/30 border border-emerald-500/30 font-semibold"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ansh Verma's GitHub Profile"
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-surface-100 border border-transparent hover:border-white/10 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ansh Verma's LinkedIn Profile"
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-surface-100 border border-transparent hover:border-white/10 transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <Link
              href="/resume"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold uppercase tracking-wider bg-surface-100 hover:bg-accent hover:text-black text-accent border border-emerald-500/40 hover:border-accent transition-all shadow-[0_0_12px_-4px_rgba(0,229,153,0.3)]"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <Link
              href="/resume"
              className="px-2.5 py-1 text-xs font-mono font-bold uppercase rounded border border-emerald-500/40 bg-emerald-950/40 text-accent"
            >
              CV
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-surface-100"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden border-b border-white/10 bg-background/95 backdrop-blur-xl px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-150">
          <div className="grid grid-cols-2 gap-1.5 py-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 text-xs font-mono uppercase tracking-wider text-zinc-300 hover:text-accent hover:bg-surface-100 rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-surface-100 text-zinc-300 hover:text-white border border-white/10"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-surface-100 text-zinc-300 hover:text-white border border-white/10"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <Link
              href="/resume"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold uppercase bg-accent text-black"
            >
              <span>View Resume</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
