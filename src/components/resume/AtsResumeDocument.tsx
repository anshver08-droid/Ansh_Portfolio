import React from "react";
import { RESUME_DATA } from "@/data/resumeData";
import { PERSONAL_INFO } from "@/data/portfolioData";

export function AtsResumeDocument() {
  return (
    <article
      id="resume-document"
      aria-label="Ansh Verma ATS-Friendly Resume"
      className="bg-white text-slate-900 p-8 sm:p-12 rounded-xl shadow-2xl max-w-4xl mx-auto font-sans leading-relaxed text-sm selection:bg-slate-200 print:p-0 print:shadow-none print:max-w-none print:text-black print:text-xs"
    >
      {/* 1. NAME + CONTACT */}
      <header className="border-b-2 border-slate-900 pb-4 mb-6 text-center print:pb-2 print:mb-4">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight uppercase text-black print:text-2xl">
          {RESUME_DATA.name}
        </h1>
        <p className="text-xs sm:text-sm font-semibold text-slate-700 mt-1 print:text-xs">
          {RESUME_DATA.title}
        </p>

        <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 mt-2.5 text-xs text-slate-700 font-mono print:text-[10px]">
          <span>{RESUME_DATA.contact.location}</span>
          <span>•</span>
          <a href={`tel:${RESUME_DATA.contact.phone}`} className="hover:underline text-black">
            {RESUME_DATA.contact.phone}
          </a>
          <span>•</span>
          <a href={`mailto:${RESUME_DATA.contact.email}`} className="hover:underline text-black">
            {RESUME_DATA.contact.email}
          </a>
          <span>•</span>
          <a href={RESUME_DATA.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline text-black">
            linkedin.com/in/ansh-verma-380264398
          </a>
          <span>•</span>
          <a href={RESUME_DATA.contact.github} target="_blank" rel="noopener noreferrer" className="hover:underline text-black">
            github.com/anshver08-droid
          </a>
        </div>
      </header>

      {/* 2. SUMMARY */}
      <section className="mb-6 print:mb-4">
        <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black border-b border-slate-300 pb-1 mb-2 print:text-xs">
          Professional Summary
        </h2>
        <p className="text-slate-800 text-xs sm:text-sm leading-relaxed print:text-[11px]">
          {RESUME_DATA.summary}
        </p>
      </section>

      {/* 3. EDUCATION */}
      <section className="mb-6 print:mb-4">
        <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black border-b border-slate-300 pb-1 mb-2 print:text-xs">
          Education
        </h2>
        {RESUME_DATA.education.map((edu, idx) => (
          <div key={idx} className="mb-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-black text-xs sm:text-sm">
              <span>{edu.institution} — {edu.location}</span>
              <span className="text-slate-600 font-normal text-xs">{edu.duration}</span>
            </div>
            <div className="text-slate-800 font-semibold text-xs mt-0.5">
              {edu.degree}
            </div>
            <ul className="list-disc list-inside mt-1.5 space-y-1 text-slate-700 text-xs print:text-[10px]">
              {edu.details.map((detail, dIdx) => (
                <li key={dIdx} className="leading-relaxed">
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* 4. TECHNICAL SKILLS */}
      <section className="mb-6 print:mb-4">
        <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black border-b border-slate-300 pb-1 mb-2 print:text-xs">
          Technical Skills
        </h2>
        <div className="space-y-1.5 text-xs text-slate-800 print:text-[10px]">
          {RESUME_DATA.skills.map((s, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline gap-1">
              <span className="font-bold text-black min-w-[190px]">
                {s.category}:
              </span>
              <span className="text-slate-700">{s.items}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. PROJECTS */}
      <section className="mb-6 print:mb-4">
        <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black border-b border-slate-300 pb-1 mb-2 print:text-xs">
          Software Engineering Projects
        </h2>
        <div className="space-y-4 print:space-y-3">
          {RESUME_DATA.projects.map((proj, idx) => (
            <div key={idx}>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-black text-xs sm:text-sm">
                <span>{proj.name}</span>
                <span className="text-slate-600 font-normal text-xs font-mono">
                  {proj.role}
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

      {/* 6. LEADERSHIP */}
      <section className="mb-6 print:mb-4">
        <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black border-b border-slate-300 pb-1 mb-2 print:text-xs">
          Engineering Leadership
        </h2>
        {RESUME_DATA.leadership.map((lead, idx) => (
          <div key={idx}>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-black text-xs sm:text-sm">
              <span>{lead.title}</span>
              <span className="text-slate-600 font-normal text-xs">{lead.organization}</span>
            </div>
            <ul className="list-disc list-inside mt-1 space-y-1 text-slate-700 text-xs print:text-[10px]">
              {lead.bullets.map((b, bIdx) => (
                <li key={bIdx} className="leading-relaxed">
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* 7. EXPERIENCE (Transparent Student Status) */}
      <section className="mb-6 print:mb-4">
        <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black border-b border-slate-300 pb-1 mb-2 print:text-xs">
          Work Experience
        </h2>
        <div className="text-xs text-slate-700 leading-relaxed print:text-[10px]">
          <p className="italic mb-1 text-slate-600">
            {RESUME_DATA.experience.note}
          </p>
          <p className="font-mono text-slate-500">
            {RESUME_DATA.experience.placeholder}
          </p>
        </div>
      </section>

      {/* 8. ACHIEVEMENTS & HACKATHONS */}
      <section className="mb-6 print:mb-4">
        <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black border-b border-slate-300 pb-1 mb-2 print:text-xs">
          Achievements & Competitions
        </h2>
        <div className="text-xs text-slate-700 leading-relaxed print:text-[10px]">
          <p className="italic mb-1 text-slate-600">
            {RESUME_DATA.achievements.note}
          </p>
          <p className="font-mono text-slate-500">
            {RESUME_DATA.achievements.placeholder}
          </p>
        </div>
      </section>

      {/* 9. CERTIFICATIONS */}
      <section className="print:mb-2">
        <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black border-b border-slate-300 pb-1 mb-2 print:text-xs">
          Certifications & Training
        </h2>
        <div className="text-xs text-slate-700 leading-relaxed print:text-[10px]">
          <p className="italic mb-1 text-slate-600">
            {RESUME_DATA.certifications.note}
          </p>
          <p className="font-mono text-slate-500">
            {RESUME_DATA.certifications.placeholder}
          </p>
        </div>
      </section>
    </article>
  );
}
