import React from "react";
import { RESUME_DATA } from "@/data/resumeData";

export function AtsResumeDocument() {
  return (
    <article
      id="resume-document"
      aria-label="Ansh Verma ATS-Friendly Resume"
      className="bg-white text-slate-900 p-8 sm:p-12 rounded-xl shadow-2xl max-w-4xl mx-auto font-sans leading-relaxed text-sm selection:bg-slate-200 print:p-0 print:shadow-none print:max-w-none print:text-black print:text-xs"
    >
      {/* 1. HEADER: NAME + CONTACT */}
      <header className="border-b-2 border-slate-900 pb-4 mb-5 text-center print:pb-2 print:mb-4">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight uppercase text-black print:text-2xl">
          {RESUME_DATA.name}
        </h1>
        <p className="text-xs sm:text-sm font-semibold text-slate-700 mt-1 print:text-xs">
          {RESUME_DATA.title}
        </p>

        <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 mt-2 text-xs text-slate-700 font-mono print:text-[10px]">
          <span>Email: <a href={`mailto:${RESUME_DATA.contact.email}`} className="hover:underline text-black">{RESUME_DATA.contact.email}</a></span>
          <span>|</span>
          <span>Phone: <a href={`tel:${RESUME_DATA.contact.phone}`} className="hover:underline text-black">{RESUME_DATA.contact.phone}</a></span>
          <span>|</span>
          <span>LinkedIn: <a href={RESUME_DATA.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline text-black">linkedin.com/in/ansh-verma-380264398</a></span>
          <span>|</span>
          <span>GitHub: <a href={RESUME_DATA.contact.github} target="_blank" rel="noopener noreferrer" className="hover:underline text-black">github.com/anshver08-droid</a></span>
        </div>
      </header>

      {/* 2. PROFESSIONAL SUMMARY */}
      <section className="mb-5 print:mb-4">
        <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black border-b border-slate-300 pb-1 mb-2 print:text-xs">
          Professional Summary
        </h2>
        <p className="text-slate-800 text-xs sm:text-sm leading-relaxed print:text-[11px]">
          {RESUME_DATA.summary}
        </p>
      </section>

      {/* 3. EDUCATION */}
      <section className="mb-5 print:mb-4">
        <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black border-b border-slate-300 pb-1 mb-2 print:text-xs">
          Education
        </h2>
        {RESUME_DATA.education.map((edu, idx) => (
          <div key={idx} className="mb-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-black text-xs sm:text-sm">
              <span>{edu.degree}</span>
              <span className="text-slate-600 font-normal text-xs font-mono">{edu.duration}</span>
            </div>
            <div className="text-slate-700 text-xs font-medium mt-0.5">
              {edu.institution}, {edu.location} | <strong className="text-black font-semibold">CGPA: {edu.cgpa}</strong>
            </div>
          </div>
        ))}
      </section>

      {/* 4. TECHNICAL SKILLS */}
      <section className="mb-5 print:mb-4">
        <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black border-b border-slate-300 pb-1 mb-2 print:text-xs">
          Technical Skills
        </h2>
        <div className="space-y-1.5 text-xs text-slate-800 print:text-[10px]">
          {RESUME_DATA.skills.map((s, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline gap-1">
              <span className="font-bold text-black min-w-[210px]">
                {s.category}:
              </span>
              <span className="text-slate-700">{s.items}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. PROJECTS */}
      <section className="mb-5 print:mb-4">
        <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black border-b border-slate-300 pb-1 mb-2 print:text-xs">
          Projects
        </h2>
        <div className="space-y-4 print:space-y-3">
          {RESUME_DATA.projects.map((proj, idx) => (
            <div key={idx}>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-black text-xs sm:text-sm">
                <span>{proj.name}</span>
                <span className="text-slate-600 font-normal text-xs font-mono">
                  ({proj.context})
                </span>
              </div>
              <div className="text-slate-600 font-mono text-[11px] mb-1.5 print:text-[9px]">
                Technologies: {proj.tech} | Repo: {proj.github} {proj.liveUrl ? `| Live: ${proj.liveUrl}` : ""}
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-700 text-xs print:text-[10px]">
                {proj.bullets.map((b, bIdx) => (
                  <li key={bIdx} className="leading-relaxed">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CERTIFICATIONS */}
      <section className="mb-5 print:mb-4">
        <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black border-b border-slate-300 pb-1 mb-2 print:text-xs">
          Certifications
        </h2>
        <ul className="list-disc list-inside space-y-1 text-xs text-slate-800 print:text-[10px]">
          {RESUME_DATA.certifications.map((cert, idx) => (
            <li key={idx} className="leading-relaxed">
              <strong className="text-black">{cert.name}</strong> — {cert.issuer} | {cert.year}
              {cert.credentialId && <span className="text-slate-600 font-mono"> ({cert.credentialId})</span>}
            </li>
          ))}
        </ul>
      </section>

      {/* 7. ACHIEVEMENTS */}
      <section className="print:mb-2">
        <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black border-b border-slate-300 pb-1 mb-2 print:text-xs">
          Achievements
        </h2>
        <ul className="list-disc list-inside space-y-1 text-xs text-slate-800 print:text-[10px]">
          {RESUME_DATA.achievements.map((ach, idx) => (
            <li key={idx} className="leading-relaxed">
              <strong className="text-black">{ach.title}</strong>: {ach.detail}
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
