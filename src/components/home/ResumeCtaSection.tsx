import React from "react";
import Link from "next/link";
import { FileText, ArrowRight, Download, Check, Eye } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export function ResumeCtaSection() {
  const atsFeatures = [
    "100% aligned with verified CV (B.Tech CSE-AIML 2025–2029, CGPA 7.16)",
    "Clean single-column structural hierarchy without multi-column table traps",
    "Selectable, machine-readable text designed for Workday, Greenhouse & Lever",
    "Verified projects (DevPartner AI, HealthBuddy AI, TableKeeper) with exact technical bullets",
    "One-click Download for the official uploaded PDF or interactive browser viewing",
  ];

  return (
    <section className="py-20 lg:py-24 border-t border-border-subtle bg-slate-950/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-cyan-800/40 bg-gradient-to-br from-slate-900/90 via-slate-950 to-slate-900/80 p-8 sm:p-12 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-300 text-xs font-mono">
                <FileText className="w-3.5 h-3.5" />
                <span>OFFICIAL CV & RECRUITER SYSTEM</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                ATS-Optimized & Recruiter-Ready Resume
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                Access my official CV in both interactive semantic format and official PDF download. Built with zero unverified claims, standard section headings, and comprehensive project technical descriptions.
              </p>

              <div className="pt-2 space-y-2">
                {atsFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <Link
                  href="/resume"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all shadow-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Resume</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={PERSONAL_INFO.resumePdfUrl}
                  download="Ansh_Verma_Resume.pdf"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <Download className="w-4 h-4 text-cyan-400" />
                  <span>Download Resume (PDF)</span>
                </a>
              </div>
            </div>

            {/* Recruiter Parser Compatibility Box */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-black/60 border border-slate-800 space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-400">
                <span className="text-[11px] uppercase tracking-wider text-cyan-400">
                  VERIFIED PROFILE
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-800/60">
                  CV Matched
                </span>
              </div>

              <div className="space-y-2 text-[11px] text-slate-300">
                <div className="flex justify-between py-1 border-b border-slate-900">
                  <span className="text-slate-500">Degree & Major</span>
                  <span className="text-slate-200">B.Tech CSE (AI/ML)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-900">
                  <span className="text-slate-500">Batch Timeline</span>
                  <span className="text-cyan-400">2025–2029</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-900">
                  <span className="text-slate-500">Verified CGPA</span>
                  <span className="text-emerald-400 font-bold">7.16 / 10</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-900">
                  <span className="text-slate-500">National Aptitude</span>
                  <span className="text-emerald-400">iCAT 2026: AIR #835</span>
                </div>
              </div>

              <div className="p-2.5 rounded bg-slate-900/70 border border-slate-800 text-[10px] text-slate-400">
                Primary source of truth: Official CV PDF uploaded by Ansh Verma. All technical statements verified.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
