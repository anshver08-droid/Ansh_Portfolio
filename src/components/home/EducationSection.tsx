import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GraduationCap, BookOpen, Award, Calendar, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function EducationSection() {
  const coursework = [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (C++)",
    "Database Management Systems (SQL / Relational)",
    "Operating Systems & Concurrency",
    "Computer Networks (TCP/IP, HTTP, Protocols)",
    "Software Engineering & System Modeling",
    "Artificial Intelligence & Machine Learning",
  ];

  return (
    <section id="education" className="py-20 lg:py-28 border-t border-border-subtle bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="07"
          badge="EDUCATION & CERTIFICATIONS"
          title="Academic Foundation & Engineering Curriculum"
          subtitle="Formal computer science education focusing on algorithmic thinking, system fundamentals, and applied artificial intelligence."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Education Card */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl border border-border-subtle bg-slate-900/50 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-950/50 border border-cyan-800/40 text-cyan-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-100">
                    {PERSONAL_INFO.college}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-mono mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{PERSONAL_INFO.location}</span>
                  </div>
                </div>
              </div>

              <Badge variant="cyan" size="sm">
                Undergraduate Degree
              </Badge>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-border-subtle space-y-2">
              <div className="text-sm font-semibold text-slate-200">
                {PERSONAL_INFO.degree}
              </div>
              <div className="text-xs font-mono text-cyan-400">
                Specialization: {PERSONAL_INFO.specialization}
              </div>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-1">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Timeline: [ADD DATES: e.g. 2022 – 2026]</span>
                </span>
                <span>•</span>
                <span className="text-slate-300">
                  Cumulative Standing: <strong className="text-cyan-300">[ADD CURRENT CGPA]</strong>
                </span>
              </div>
            </div>

            {/* Coursework List */}
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                <span>Relevant Engineering Coursework</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {coursework.map((course, idx) => (
                  <div
                    key={idx}
                    className="p-2 rounded-lg bg-slate-950/50 border border-slate-800/80 text-xs text-slate-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications Placeholder Card */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl border border-dashed border-slate-800 bg-slate-950/40 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-border-subtle">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400">
                  <Award className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-100 font-mono uppercase tracking-wider">
                  Technical Certifications
                </h3>
              </div>
              <span className="text-[10px] font-mono text-slate-500">
                Transparent State
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              I prioritize building and open-sourcing production-grade codebases (such as TableKeeper and DevPartner AI) over accumulating superficial course certificates. Verified third-party credentialing will be appended here.
            </p>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs font-mono text-slate-400 space-y-2">
              <span className="text-slate-300 text-[11px] block font-semibold">
                Available Slot:
              </span>
              <p className="text-[11px] text-cyan-400/80">
                <code>[ADD VERIFIED CERTIFICATIONS: e.g. AWS Certified Developer / Oracle Java / GCP Cloud Engineer]</code>
              </p>
            </div>

            <div className="text-[11px] font-mono text-slate-500 pt-2 border-t border-slate-800">
              Integrity note: No unearned certificates are displayed.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
