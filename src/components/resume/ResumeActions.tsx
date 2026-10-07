"use client";

import React, { useState } from "react";
import { Printer, Copy, Check, FileDown, ShieldCheck, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { RESUME_DATA } from "@/data/resumeData";

export function ResumeActions() {
  const [copiedText, setCopiedText] = useState(false);

  const generatePlainTextResume = () => {
    return `ANSH VERMA
${RESUME_DATA.title}
Location: ${RESUME_DATA.contact.location} | Phone: ${RESUME_DATA.contact.phone}
Email: ${RESUME_DATA.contact.email} | LinkedIn: ${RESUME_DATA.contact.linkedin}
GitHub: ${RESUME_DATA.contact.github}

==================================================
PROFESSIONAL SUMMARY
==================================================
${RESUME_DATA.summary}

==================================================
EDUCATION
==================================================
${RESUME_DATA.education
  .map(
    (e) => `${e.institution} — ${e.location}
${e.degree} (${e.duration})
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
    (p) => `${p.name}
Role: ${p.role}
Technologies: ${p.tech}
Repository: ${p.github} ${p.liveUrl ? `| Live: ${p.liveUrl}` : ""}
${p.bullets.map((b) => `• ${b}`).join("\n")}`
  )
  .join("\n\n")}

==================================================
ENGINEERING LEADERSHIP
==================================================
${RESUME_DATA.leadership
  .map(
    (l) => `${l.title} — ${l.organization}
${l.bullets.map((b) => `• ${b}`).join("\n")}`
  )
  .join("\n\n")}

==================================================
WORK EXPERIENCE
==================================================
${RESUME_DATA.experience.note}
${RESUME_DATA.experience.placeholder}

==================================================
ACHIEVEMENTS
==================================================
${RESUME_DATA.achievements.note}
${RESUME_DATA.achievements.placeholder}

==================================================
CERTIFICATIONS
==================================================
${RESUME_DATA.certifications.note}
${RESUME_DATA.certifications.placeholder}
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
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-slate-300 font-semibold">
            ATS Export Utilities:
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all shadow-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / Save as PDF</span>
          </button>

          <button
            onClick={handleCopyText}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-slate-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            {copiedText ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-300">Plain Text Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-cyan-400" />
                <span>Copy Raw Text for Job Portals</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
