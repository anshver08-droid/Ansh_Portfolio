"use client";

import React, { useState } from "react";
import { Download, FileText, Copy, Check, Printer, ArrowLeft, ShieldCheck, Eye } from "lucide-react";
import Link from "next/link";
import { RESUME_DATA } from "@/data/resumeData";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface ResumeActionsProps {
  viewMode?: "ats" | "pdf";
  onToggleViewMode?: (mode: "ats" | "pdf") => void;
}

export function ResumeActions({ viewMode = "ats", onToggleViewMode }: ResumeActionsProps) {
  const [copiedText, setCopiedText] = useState(false);

  const generatePlainTextResume = () => {
    return `ANSH VERMA
${RESUME_DATA.title}
Email: ${RESUME_DATA.contact.email} | Phone: ${RESUME_DATA.contact.phone}
LinkedIn: ${RESUME_DATA.contact.linkedin} | GitHub: ${RESUME_DATA.contact.github}

==================================================
PROFESSIONAL SUMMARY
==================================================
${RESUME_DATA.summary}

==================================================
EDUCATION
==================================================
${RESUME_DATA.education
  .map(
    (e) => `${e.degree} (Timeline: ${e.duration})
${e.institution}, ${e.location} | CGPA: ${e.cgpa}
${e.details.map((d) => `• ${d}`).join("\n")}`
  )
  .join("\n\n")}

==================================================
TECHNICAL SKILLS
==================================================
${RESUME_DATA.skills.map((s) => `${s.category}: ${s.items}`).join("\n")}

==================================================
PROJECTS
==================================================
${RESUME_DATA.projects
  .map(
    (p) => `${p.name} (${p.context})
Technologies: ${p.tech}
Repository: ${p.github} ${p.liveUrl ? `| Live: ${p.liveUrl}` : ""}
${p.bullets.map((b) => `• ${b}`).join("\n")}`
  )
  .join("\n\n")}

==================================================
CERTIFICATIONS
==================================================
${RESUME_DATA.certifications
  .map((c) => `• ${c.name} — ${c.issuer} | ${c.year}${c.credentialId ? ` (${c.credentialId})` : ""}`)
  .join("\n")}

==================================================
ACHIEVEMENTS
==================================================
${RESUME_DATA.achievements.map((a) => `• ${a.title}: ${a.detail}`).join("\n")}
`;
  };

  const handleCopyText = async () => {
    try {
      const text = generatePlainTextResume();
      await navigator.clipboard.writeText(text);
      setCopiedText(true);
      setTimeout(() => setCopiedText(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="print:hidden space-y-4">
      {/* Top Navigation Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border-subtle">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors py-1"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Interactive Portfolio</span>
        </Link>

        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
          <ShieldCheck className="w-4 h-4" />
          <span>100% Machine Parsable & Recruiter Friendly</span>
        </div>
      </div>

      {/* Action Buttons Toolbar */}
      <div className="p-4 rounded-2xl bg-slate-900/80 border border-border-subtle flex flex-wrap items-center justify-between gap-3 shadow-lg">
        {/* Left: View Mode Toggle */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-950 border border-slate-800">
          <button
            onClick={() => onToggleViewMode?.("ats")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              viewMode === "ats"
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>ATS Semantic View</span>
          </button>

          <button
            onClick={() => onToggleViewMode?.("pdf")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              viewMode === "pdf"
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Official PDF Preview</span>
          </button>
        </div>

        {/* Right: Actions */}
        <div className="flex flex-wrap items-center gap-2.5">
          <a
            href={PERSONAL_INFO.resumePdfUrl}
            download="Ansh_Verma_Resume.pdf"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all shadow-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Resume (PDF)</span>
          </a>

          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <Printer className="w-3.5 h-3.5 text-cyan-400" />
            <span>Print</span>
          </button>

          <button
            onClick={handleCopyText}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-slate-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            {copiedText ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-300">Plain Text Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-cyan-400" />
                <span>Copy Plain Text</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
