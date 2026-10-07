import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, FileText, ArrowUpRight, ShieldCheck } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-slate-950 text-slate-400 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 pb-12 border-b border-border-subtle">
          {/* Identity Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center font-mono font-bold text-xs text-cyan-400">
                AV
              </div>
              <span className="font-bold text-base text-slate-100 tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Software Engineer focused on backend transactional correctness, scalable full-stack applications, and verifiable AI workflows. B.Tech CSE-AIML at ABES Engineering College.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Software Engineering Roles & Select Freelance Contracts</span>
            </div>
          </div>

          {/* Quick Navigation Column */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/#about" className="hover:text-cyan-400 transition-colors">
                  About & Background
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="hover:text-cyan-400 transition-colors">
                  Featured Case Studies
                </Link>
              </li>
              <li>
                <Link href="/#skills" className="hover:text-cyan-400 transition-colors">
                  Technical Skills Matrix
                </Link>
              </li>
              <li>
                <Link href="/#certifications" className="hover:text-cyan-400 transition-colors">
                  Certifications & Training
                </Link>
              </li>
              <li>
                <Link href="/#achievements" className="hover:text-cyan-400 transition-colors">
                  Hackathons & Milestones
                </Link>
              </li>
              <li>
                <Link href="/#freelance" className="hover:text-cyan-400 transition-colors">
                  Freelance Engineering
                </Link>
              </li>
              <li>
                <Link href="/resume" className="hover:text-cyan-400 transition-colors font-medium text-cyan-300">
                  Official CV & Resume
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
              Verified Profiles
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-cyan-400" />
                  <span>GitHub Profile</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>LinkedIn Network</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{PERSONAL_INFO.email}</span>
                </a>
              </li>
              <li>
                <Link
                  href="/resume"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-cyan-400" />
                  <span>ATS-Friendly Resume</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Attribution & Integrity Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400/80" />
            <span>Honest Engineering Portfolio: zero fabricated stats, metrics, or endorsements.</span>
          </div>
          <div>
            © {currentYear} {PERSONAL_INFO.name}. Built with Next.js, TypeScript & Tailwind CSS.
          </div>
        </div>
      </div>
    </footer>
  );
}
