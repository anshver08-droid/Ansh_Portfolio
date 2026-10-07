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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-accent transition-colors py-1"
        >
          <ArrowLeft className="w-4 h-4 text-accent" />
          <span>← Return to Interactive Portfolio</span>
        </Link>

        <div className="flex items-center gap-2 text-xs font-mono text-accent">
          <ShieldCheck className="w-4 h-4" />
          <span>100% Machine Parsable & Recruiter Friendly</span>
        </div>
      </div>

      {/* Action Buttons Toolbar */}
      <div className="p-4 rounded-2xl bg-[#06090e] border border-white/10 flex flex-wrap items-center justify-between gap-3 shadow-lg">
        {/* Left: View Mode Toggle */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/60 border border-white/10">
          <button
            onClick={() => onToggleViewMode?.("ats")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              viewMode === "ats"
                ? "bg-accent/15 text-accent border border-accent/30"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>ATS Semantic View</span>
          </button>

          <button
            onClick={() => onToggleViewMode?.("pdf")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              viewMode === "pdf"
                ? "bg-accent/15 text-accent border border-accent/30"
                : "text-zinc-400 hover:text-white"
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
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-accent hover:bg-accent/90 text-black transition-all shadow-[0_0_15px_-3px_rgba(0,229,153,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Resume (PDF)</span>
          </a>

          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 hover:border-accent/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <Printer className="w-3.5 h-3.5 text-accent" />
            <span>Print</span>
          </button>

          <button
            onClick={handleCopyText}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 hover:border-accent/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            {copiedText ? (
              <>
                <Check className="w-3.5 h-3.5 text-accent" />
                <span className="text-accent font-semibold">Plain Text Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-accent" />
                <span>Copy Plain Text</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
