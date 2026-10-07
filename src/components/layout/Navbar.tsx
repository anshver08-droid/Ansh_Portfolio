"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Github, Linkedin, FileText, ArrowUpRight } from "lucide-react";
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

  // Close mobile menu when navigating
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b",
        scrolled
          ? "bg-slate-950/85 backdrop-blur-md border-border-subtle shadow-md"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo / Name */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 text-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-md py-1"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/30 border border-cyan-500/40 flex items-center justify-center font-mono font-bold text-sm text-cyan-400 group-hover:border-cyan-400 transition-colors">
              AV
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-sm sm:text-base text-slate-100 group-hover:text-cyan-400 transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[10px] font-mono text-slate-400 tracking-wider uppercase -mt-0.5">
                Software Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs font-medium text-slate-300"
          >
            {NAV_LINKS.map((link) => {
              const isResume = link.href === "/resume";
              const isActive = isResume ? pathname === "/resume" : false;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "px-3 py-1.5 rounded-md transition-colors hover:text-cyan-300 hover:bg-slate-900/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400",
                    isActive && "text-cyan-400 bg-cyan-950/30 border border-cyan-800/40"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ansh Verma's GitHub Profile"
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-900 border border-transparent hover:border-border-subtle transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ansh Verma's LinkedIn Profile"
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-900 border border-transparent hover:border-border-subtle transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <Link
              href="/resume"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition-all shadow-[0_0_12px_-4px_rgba(6,182,212,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>ATS Resume</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <Link
              href="/resume"
              className="px-2.5 py-1 text-xs font-semibold rounded bg-cyan-950/80 text-cyan-300 border border-cyan-800/50"
            >
              Resume
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden border-b border-border-subtle bg-slate-950/95 backdrop-blur-xl px-4 pt-2 pb-6 space-y-1 animate-in slide-in-from-top-2 duration-150">
          <div className="grid grid-cols-2 gap-1 py-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 text-xs font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-900 rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-border-subtle flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-slate-900 text-slate-300 hover:text-white"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-slate-900 text-slate-300 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <Link
              href="/resume"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View ATS Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
