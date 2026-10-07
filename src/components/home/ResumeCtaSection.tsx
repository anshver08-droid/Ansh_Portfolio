import React from "react";
import Link from "next/link";
import { FileText, ArrowRight, ShieldCheck, Check, Printer } from "lucide-react";

export function ResumeCtaSection() {
  const atsFeatures = [
    "Clean 1-column layout without unparsable multi-column tables",
    "Plain structural hierarchy with standard ATS section headings",
    "100% selectable, machine-readable text (no text trapped inside images)",
    "Standardized date formatting and verified contact credentials",
    "Print-optimized stylesheet for immediate PDF export",
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
                <span>RECRUITER & ATS SYSTEM READY</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Designed for Automated Parsers & 30-Second Human Scans
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                A personal portfolio is great for deep exploration, but applicant tracking systems require clean, unencumbered structural text. I have prepared a dedicated, high-fidelity ATS resume that can be viewed interactively, copied, or exported directly to PDF.
              </p>

              <div className="pt-2 space-y-2">
                {atsFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/resume"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all shadow-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                >
                  <FileText className="w-4 h-4" />
                  <span>Open ATS Resume Viewer</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/resume#print"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-700 hover:border-slate-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <Printer className="w-4 h-4 text-cyan-400" />
                  <span>Print / PDF Export</span>
                </Link>
              </div>
            </div>

            {/* Recruiter Preview Box */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-black/60 border border-slate-800 space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-400">
                <span className="text-[11px] uppercase tracking-wider text-cyan-400">
                  PARSER COMPATIBILITY
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-800/60">
                  100% Parsable
                </span>
              </div>

              <div className="space-y-2 text-[11px] text-slate-300">
                <div className="flex justify-between py-1 border-b border-slate-900">
                  <span className="text-slate-500">Structural Columns</span>
                  <span className="text-emerald-400">Single Column (Compliant)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-900">
                  <span className="text-slate-500">Graphic Embedding</span>
                  <span className="text-emerald-400">0% (Pure Semantic Text)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-900">
                  <span className="text-slate-500">Standard Sections</span>
                  <span className="text-emerald-400">Education, Skills, Projects</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-900">
                  <span className="text-slate-500">Contact Data</span>
                  <span className="text-slate-200">Email, Phone, GitHub, LinkedIn</span>
                </div>
              </div>

              <div className="p-2.5 rounded bg-slate-900/70 border border-slate-800 text-[10px] text-slate-400">
                Targeted for companies with rigorous engineering bars: Google, Amazon, Microsoft, Meta, JPMorgan, and high-growth engineering teams.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
