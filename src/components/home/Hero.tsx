import React from "react";
import Link from "next/link";
import { ArrowDown, FileText, Github, Linkedin, Mail, Sparkles, Terminal } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { HeroInteractiveSystem } from "./HeroInteractiveSystem";

export function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
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
              <span>B.Tech CSE-AIML (2025–2029) · ABESEC</span>
            </div>

            {/* Candidate Identity & Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                {PERSONAL_INFO.name}
              </h1>
              <div className="mt-3 text-xs sm:text-sm font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                CSE (AI/ML) STUDENT
              </div>
              <p className="mt-1 text-sm sm:text-base font-semibold text-slate-300 tracking-tight">
                SOFTWARE ENGINEERING • AI / GENERATIVE AI • BACKEND • FULL-STACK
              </p>
            </div>

            {/* Concise Value Proposition Based on CV */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              Building intelligent software systems across AI, backend, and full-stack development. Hands-on experience in testing, verification, debugging, and Docker through hackathon projects.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="#projects"
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all shadow-[0_0_20px_-5px_rgba(6,182,212,0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </Link>

              <Link
                href="/resume"
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-500 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View Resume</span>
              </Link>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-white bg-slate-950 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-white bg-slate-950 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn</span>
              </a>

              <Link
                href="#contact"
                className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact Me</span>
              </Link>
            </div>

            {/* Quick Credentials Strip */}
            <div className="pt-4 border-t border-border-subtle flex flex-wrap items-center gap-6 text-xs text-slate-400 font-mono">
              <span className="text-slate-300">
                ABES Engineering College · <strong className="text-cyan-400">CGPA: {PERSONAL_INFO.cgpa}</strong>
              </span>
              <span>•</span>
              <span className="text-emerald-400">iCAT 2026: AIR #835</span>
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
