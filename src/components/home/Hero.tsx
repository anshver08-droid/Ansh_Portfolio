import React from "react";
import Link from "next/link";
import { ArrowDown, FileText, Github, Linkedin, Mail, Sparkles, Terminal } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { HeroInteractiveSystem } from "./HeroInteractiveSystem";

export function Hero() {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background Subtle Technical Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Positioning & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            {/* Status / Track Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-800/50 bg-cyan-950/30 text-cyan-300 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>B.Tech CSE-AIML · Software Engineering Track</span>
            </div>

            {/* Candidate Identity & Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                {PERSONAL_INFO.name}
              </h1>
              <p className="mt-3 text-lg sm:text-xl font-medium text-cyan-400/90 tracking-tight">
                {PERSONAL_INFO.headline}
              </p>
            </div>

            {/* Concise Value Proposition */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              Engineering reliable software systems with transactional correctness,
              auditable AI workflows, and defensible backend architectures.
              Focused on systems that make failure explicit.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="#projects"
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all shadow-[0_0_20px_-5px_rgba(6,182,212,0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                <span>View Featured Projects</span>
                <ArrowDown className="w-4 h-4" />
              </Link>

              <Link
                href="/resume"
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-500 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>ATS Resume</span>
              </Link>

              <Link
                href="#contact"
                className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Let&apos;s Work Together</span>
              </Link>
            </div>

            {/* Verified External Links & Quick Metrics */}
            <div className="pt-4 border-t border-border-subtle flex flex-wrap items-center gap-6 text-xs text-slate-400 font-mono">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
              >
                <Github className="w-4 h-4 text-slate-300" />
                <span>github.com/anshver08-droid</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-slate-300" />
                <span>in/ansh-verma-380264398</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive System Architecture Visualizer */}
          <div className="lg:col-span-6">
            <HeroInteractiveSystem />
          </div>
        </div>
      </div>
    </section>
  );
}
