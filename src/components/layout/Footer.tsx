import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, FileText, ArrowUpRight, ShieldCheck } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black text-zinc-400 py-16 lg:py-20 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-14 pb-14 border-b border-white/10">
          {/* Identity Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg border border-white/15 bg-surface-100 flex items-center justify-center font-bold text-xs text-accent">
                AV
              </div>
              <span className="font-bold text-base text-white tracking-tight uppercase">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs text-zinc-400 max-w-md leading-relaxed font-sans">
              CSE (AI/ML) student at ABES Engineering College. Engineering software systems across backend correctness, transactional APIs, and responsible Generative AI.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-accent">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span>Available for Software Engineering Roles & Select Freelance Contracts</span>
            </div>
          </div>

          {/* Quick Navigation Column */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white">
              NAVIGATION //
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/#about" className="hover:text-accent transition-colors">
                  About & Background
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="hover:text-accent transition-colors">
                  Featured Case Studies
                </Link>
              </li>
              <li>
                <Link href="/#skills" className="hover:text-accent transition-colors">
                  Technical Skills Matrix
                </Link>
              </li>
              <li>
                <Link href="/#certifications" className="hover:text-accent transition-colors">
                  Certifications & Training
                </Link>
              </li>
              <li>
                <Link href="/#achievements" className="hover:text-accent transition-colors">
                  Hackathons & Milestones
                </Link>
              </li>
              <li>
                <Link href="/#freelance" className="hover:text-accent transition-colors">
                  Freelance Engineering
                </Link>
              </li>
              <li>
                <Link href="/resume" className="hover:text-accent transition-colors font-semibold text-accent">
                  Official CV & Resume
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white">
              VERIFIED CHANNELS //
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-accent" />
                  <span>GitHub Profile</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-600" />
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-accent" />
                  <span>LinkedIn Network</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-600" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-accent" />
                  <span>{PERSONAL_INFO.email}</span>
                </a>
              </li>
              <li>
                <Link
                  href="/resume"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors text-accent"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Official CV (PDF & ATS)</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Attribution & Integrity Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span>Honest Engineering Portfolio · 100% Factually Grounded</span>
          </div>
          <div>
            © {currentYear} {PERSONAL_INFO.name}. Built with Next.js 15, TypeScript & Tailwind CSS.
          </div>
        </div>
      </div>
    </footer>
  );
}
