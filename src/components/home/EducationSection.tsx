import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GraduationCap, BookOpen, Calendar, MapPin, Award } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function EducationSection() {
  const coreCurriculum = [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (C++)",
    "Database Management Systems & SQL",
    "Relational Concurrency & Transactions",
    "Operating Systems Fundamentals",
    "Computer Networks & Protocols",
    "Artificial Intelligence & Machine Learning",
    "Software Engineering & Testing Methodologies",
  ];

  return (
    <section id="education" className="py-20 lg:py-28 border-t border-border-subtle bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="07"
          badge="ACADEMIC BACKGROUND"
          title="Education & Technical Curriculum"
          subtitle="Formal engineering education grounding practical software development in core computer science, systems, and artificial intelligence."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Academic Card */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl border border-border-subtle bg-slate-900/50 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
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
                    <span>Ghaziabad, Uttar Pradesh, India</span>
                  </div>
                </div>
              </div>

              <Badge variant="cyan" size="sm">
                Undergraduate Degree
              </Badge>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-border-subtle space-y-2">
              <div className="text-sm sm:text-base font-semibold text-slate-100">
                {PERSONAL_INFO.degree}
              </div>
              <div className="text-xs font-mono text-cyan-400">
                Specialization: {PERSONAL_INFO.specialization}
              </div>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-1">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Timeline: {PERSONAL_INFO.duration}</span>
                </span>
                <span>•</span>
                <span className="text-slate-300">
                  Cumulative Standing: <strong className="text-cyan-300 font-bold">CGPA: {PERSONAL_INFO.cgpa}</strong>
                </span>
              </div>
            </div>

            {/* Curriculum Grid */}
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                <span>Foundational Engineering Coursework</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {coreCurriculum.map((course, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-slate-950/50 border border-slate-800/80 text-xs text-slate-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 flex-shrink-0" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Academic Highlights & Standing */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-2xl border border-border-subtle bg-slate-950/60 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-border-subtle">
              <h3 className="text-sm font-bold text-slate-100 font-mono uppercase tracking-wider">
                Academic Metric
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-800/60">
                Verified
              </span>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <span className="text-xs font-mono text-slate-400 block">
                Current CGPA
              </span>
              <div className="text-3xl font-extrabold text-cyan-400 font-mono">
                {PERSONAL_INFO.cgpa} <span className="text-sm text-slate-400 font-normal">/ 10</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Consistent academic performance in Computer Science & Engineering curriculum.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <span className="text-xs font-mono text-slate-400 block">
                Internship Qualification
              </span>
              <div className="text-xl font-bold text-emerald-400 font-mono">
                AIR #835 (Score: 63)
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Qualified in Internship Common Aptitude Test (iCAT) 2026 for national engineering internships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
