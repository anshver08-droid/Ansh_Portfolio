"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowDown, FileText, Github, Linkedin, Mail, Sparkles, Terminal, Activity } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { HeroInteractiveSystem } from "./HeroInteractiveSystem";

export function Hero() {
  const [showArchitecture, setShowArchitecture] = useState(false);

  return (
    <section id="home" className="relative pt-24 pb-20 lg:pt-28 lg:pb-32 overflow-hidden bg-background">
      {/* Background Subtle Vertical Guide Lines (Editorial Grid) */}
      <div className="absolute inset-0 pointer-events-none z-0 flex justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 opacity-20">
        <div className="hairline-v h-full" />
        <div className="hairline-v h-full hidden sm:block" />
        <div className="hairline-v h-full hidden md:block" />
        <div className="hairline-v h-full hidden lg:block" />
        <div className="hairline-v h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Editorial Metadata (Positioned like the reference image top-left) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 pb-8 sm:pb-12 border-b border-white/10">
          <div className="space-y-1 font-mono text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="text-zinc-500 uppercase tracking-wider">NAME:</span>
              <span className="text-zinc-100 font-semibold">{PERSONAL_INFO.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-zinc-500 uppercase tracking-wider">ROLE:</span>
              <span className="text-zinc-300">SOFTWARE ENGINEER / CSE (AI/ML)</span>
            </div>
            <div className="text-[10px] text-zinc-600 tracking-widest pt-0.5">
              • • • • •
            </div>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs text-zinc-400 self-start sm:self-auto">
            <span className="px-2.5 py-1 rounded border border-white/10 bg-surface-100 text-zinc-300">
              ABESEC · GHAZIABAD
            </span>
            <span className="px-2.5 py-1 rounded border border-emerald-500/40 bg-emerald-950/30 text-accent font-semibold">
              CGPA: {PERSONAL_INFO.cgpa}
            </span>
          </div>
        </div>

        {/* Central Master Composition (Recreating the visual artwork of the reference) */}
        <div className="relative my-8 sm:my-14 lg:my-16 py-12 sm:py-20 lg:py-24 flex items-center justify-center min-h-[420px] sm:min-h-[520px] overflow-hidden rounded-3xl border border-white/5 bg-black/60 shadow-card">
          {/* 1. Elliptical Striped Lens / Cylinder in Center */}
          <div className="absolute w-[340px] sm:w-[600px] lg:w-[820px] h-[220px] sm:h-[340px] lg:h-[400px] -rotate-6 striped-cylinder opacity-40 pointer-events-none" />

          {/* 2. Huge Outlined Background Typography: "PORTFOLIO" */}
          <div className="absolute select-none pointer-events-none font-black tracking-tighter text-outline uppercase text-[68px] xs:text-[84px] sm:text-[140px] md:text-[170px] lg:text-[220px] xl:text-[250px] leading-none text-center transform -translate-y-6 sm:-translate-y-8 z-0">
            PORTFOLIO
          </div>

          {/* 3. Neon Emerald Elegant Scribble / Vector Flow (Matches cursive green accent in reference) */}
          <div
            style={{ maxWidth: "480px", maxHeight: "180px" }}
            className="absolute pointer-events-none z-10 w-[240px] sm:w-[380px] lg:w-[480px] h-[120px] sm:h-[180px] right-[10%] sm:right-[15%] top-[25%] sm:top-[28%] opacity-85"
          >
            <svg
              viewBox="0 0 400 160"
              fill="none"
              width="100%"
              height="100%"
              style={{ maxWidth: "100%", maxHeight: "100%", display: "block" }}
              className="w-full h-full"
            >
              <path
                d="M 20 120 C 60 40, 120 20, 160 50 C 200 80, 140 140, 190 130 C 240 120, 270 30, 310 40 C 350 50, 360 110, 390 120"
                stroke="#00e599"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="drop-shadow-[0_0_12px_rgba(0,229,153,0.8)]"
              />
              <path
                d="M 170 55 C 210 20, 240 90, 290 70"
                stroke="#00e599"
                strokeWidth="2"
                strokeLinecap="round"
                className="drop-shadow-[0_0_8px_rgba(0,229,153,0.6)]"
              />
            </svg>
          </div>

          {/* 4. Central Identity Overlay */}
          <div className="relative z-20 text-center px-4 max-w-4xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono tracking-widest text-zinc-400 uppercase">
              <span>(</span>
              <span className="text-white font-bold text-sm sm:text-base">{PERSONAL_INFO.name}</span>
              <span className="text-zinc-600">|</span>
              <span className="text-zinc-300">ROLE :</span>
              <span className="text-white font-bold tracking-normal italic">Software Engineer</span>
              <span>)</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white tracking-tight uppercase leading-[1.05]">
              BUILDING <span className="text-accent">INTELLIGENT</span> SYSTEMS
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-zinc-400 max-w-2xl mx-auto font-mono leading-relaxed pt-2">
              CSE (AI/ML) Student at ABESEC · Focused on transactional backend APIs, verified AI workflows, and defensible systems.
            </p>
          </div>

          {/* 5. Glowing Emerald Horizontal Line with White Pearl & Spaced Lettering */}
          <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 z-20 flex items-center justify-center px-4">
            <div className="relative flex items-center justify-center w-full max-w-3xl">
              {/* Green Bar */}
              <div className="w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent shadow-[0_0_15px_#00e599]" />

              {/* Glowing White Pearl / Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,1),0_0_25px_#00e599] border-2 border-accent" />

              {/* Spaced Editorial Sub-Label */}
              <div className="absolute -top-7 text-[10px] sm:text-xs font-mono font-bold tracking-[0.35em] text-zinc-300 uppercase select-none">
                S Y S T E M S &nbsp; • &nbsp; A I &nbsp; • &nbsp; B A C K E N D
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Editorial Coordinates (Positioned like the reference image bottom edges) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end pt-6 pb-12 border-b border-white/10">
          {/* Bottom Left Contact Coordinates */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="text-zinc-500 uppercase">EMAIL</span>
                <div className="w-10 sm:w-16 hairline-h" />
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-zinc-200 hover:text-accent transition-colors"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>

              {/* Circular Arrow Pill Button from Reference */}
              <Link
                href="#contact"
                aria-label="Contact Ansh Verma"
                className="w-8 h-8 rounded-full border border-white/20 bg-surface-100 flex items-center justify-center text-white hover:bg-accent hover:text-black hover:border-accent transition-all group flex-shrink-0"
              >
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <div className="flex items-center gap-2">
                <div className="w-8 sm:w-12 hairline-h" />
                <span className="text-zinc-500 uppercase">TEL</span>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="text-zinc-200 hover:text-accent transition-colors"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-accent text-black hover:bg-[#05f5a5] transition-all shadow-[0_0_20px_-4px_rgba(0,229,153,0.5)]"
              >
                <span>View Projects</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </Link>

              <Link
                href="/resume"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider bg-surface-100 text-zinc-200 border border-white/10 hover:border-white/30 hover:text-white transition-all"
              >
                <FileText className="w-3.5 h-3.5 text-accent" />
                <span>View Resume</span>
              </Link>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-surface-200 text-zinc-300 hover:text-white border border-white/10 hover:border-accent/50 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-surface-200 text-zinc-300 hover:text-white border border-white/10 hover:border-accent/50 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <button
                onClick={() => setShowArchitecture(!showArchitecture)}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono text-zinc-400 hover:text-accent border border-transparent hover:border-white/10 transition-colors"
              >
                <Activity className="w-3.5 h-3.5" />
                <span>{showArchitecture ? "Hide System Trace" : "Interactive System Trace"}</span>
              </button>
            </div>
          </div>

          {/* Bottom Right Editorial Large Typography (Recreating reference layout in clean English) */}
          <div className="md:col-span-6 flex flex-col items-start md:items-end justify-end space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-emerald-500/50 bg-emerald-950/40 text-accent font-mono text-xs font-bold tracking-wider">
              <span>→</span>
              <span>{PERSONAL_INFO.duration}</span>
            </div>

            <div className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tighter uppercase leading-none">
              CODE <span className="text-zinc-600 font-light">\</span> SYSTEMS
            </div>
            <div className="text-[11px] font-mono text-zinc-500 tracking-widest uppercase">
              VERIFIED PORTFOLIO · CSE (AI/ML)
            </div>
          </div>
        </div>

        {/* Expandable Architecture Trace (Preserving full functional interactivity) */}
        {showArchitecture && (
          <div className="mt-8 pt-8 border-t border-white/10 animate-in fade-in duration-300">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-mono text-accent uppercase tracking-wider">
                ARCHITECTURAL TELEMETRY CONSOLE
              </span>
              <button
                onClick={() => setShowArchitecture(false)}
                className="text-xs font-mono text-zinc-500 hover:text-white"
              >
                Close Trace ✕
              </button>
            </div>
            <HeroInteractiveSystem />
          </div>
        )}
      </div>
    </section>
  );
}
