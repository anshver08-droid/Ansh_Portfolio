"use client";

import React, { useState } from "react";
import { AtsResumeDocument } from "@/components/resume/AtsResumeDocument";
import { ResumeActions } from "@/components/resume/ResumeActions";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Info, Download, ExternalLink, FileText } from "lucide-react";

export default function ResumePage() {
  const [viewMode, setViewMode] = useState<"ats" | "pdf">("ats");

  return (
    <div className="pt-24 pb-20 lg:pt-32 lg:pb-28 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Actions Toolbar */}
        <ResumeActions viewMode={viewMode} onToggleViewMode={setViewMode} />

        {/* ATS Technical Transparency Notice */}
        <div className="print:hidden p-4 rounded-xl border border-border-subtle bg-slate-900/40 flex items-start gap-3 text-xs text-slate-300">
          <Info className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-semibold text-slate-100 block">
              Direct Primary Source of Truth: Verified CV
            </span>
            <p className="text-slate-400 leading-relaxed">
              This resume reflects Ansh Verma&apos;s verified credentials (B.Tech CSE-AIML at ABES Engineering College, 2025–2029, CGPA: 7.16). You can toggle between the <strong>ATS Semantic View</strong> (optimized for automated parsers like Workday and Greenhouse) and the <strong>Official PDF Preview</strong> of the uploaded CV.
            </p>
          </div>
        </div>

        {/* Content Area */}
        {viewMode === "ats" ? (
          <div className="rounded-2xl border border-slate-700/60 p-2 sm:p-4 bg-slate-900/30 print:p-0 print:border-none print:bg-transparent">
            <AtsResumeDocument />
          </div>
        ) : (
          <div className="rounded-2xl border border-slate-700/60 bg-slate-900/50 p-4 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-border-subtle text-xs">
              <span className="text-slate-300 font-mono font-semibold flex items-center gap-2">
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Uploaded Official CV Document (Ansh_Verma_Resume.pdf)</span>
              </span>
              <a
                href={PERSONAL_INFO.resumePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-mono text-[11px]"
              >
                <span>Open in New Tab</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="w-full h-[850px] rounded-xl overflow-hidden border border-border-subtle bg-slate-950">
              <iframe
                src={`${PERSONAL_INFO.resumePdfUrl}#view=FitH`}
                title="Ansh Verma Official CV PDF"
                className="w-full h-full border-none"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
