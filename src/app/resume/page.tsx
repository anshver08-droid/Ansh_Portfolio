import type { Metadata } from "next";
import React from "react";
import { AtsResumeDocument } from "@/components/resume/AtsResumeDocument";
import { ResumeActions } from "@/components/resume/ResumeActions";
import { ShieldCheck, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "ATS-Friendly Resume",
  description:
    "ATS-compliant, machine-readable resume for Ansh Verma, B.Tech CSE-AIML student specializing in backend systems, full-stack, and AI engineering.",
};

export default function ResumePage() {
  return (
    <div className="pt-24 pb-20 lg:pt-32 lg:pb-28 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Actions Toolbar */}
        <ResumeActions />

        {/* ATS Technical Transparency Notice */}
        <div className="print:hidden p-4 rounded-xl border border-border-subtle bg-slate-900/40 flex items-start gap-3 text-xs text-slate-300">
          <Info className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-semibold text-slate-100 block">
              Automated Applicant Tracking System (ATS) Architecture
            </span>
            <p className="text-slate-400 leading-relaxed">
              This document is structured in a clean, single-column format using standard section headers (<code className="text-slate-300">EDUCATION</code>, <code className="text-slate-300">TECHNICAL SKILLS</code>, <code className="text-slate-300">PROJECTS</code>). All text is raw semantic HTML without embedded graphics or nested multi-column tables, ensuring seamless parsing by Workday, Greenhouse, Lever, and Taleo.
            </p>
          </div>
        </div>

        {/* The ATS Document */}
        <div className="rounded-2xl border border-slate-700/60 p-2 sm:p-4 bg-slate-900/30 print:p-0 print:border-none print:bg-transparent">
          <AtsResumeDocument />
        </div>
      </div>
    </div>
  );
}
