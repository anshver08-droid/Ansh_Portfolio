import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GraduationCap, BookOpen, Calendar, MapPin } from "lucide-react";

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
    <section id="education" className="py-20 lg:py-28 border-t border-white/10 bg-black/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="07"
          badge="ACADEMIC BACKGROUND"
          title="Education & Technical Curriculum"
          subtitle="Formal engineering education grounding practical software development in core computer science, systems, and artificial intelligence."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Academic Card */}
          <div className="lg:col-span-8 p-7 sm:p-9 rounded-3xl border border-white/10 bg-surface-100/40 space-y-7 shadow-card">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-black/60 border border-white/10 text-accent">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-tight">
                    {PERSONAL_INFO.college}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-accent" />
                    <span>Ghaziabad, Uttar Pradesh, India</span>
                  </div>
                </div>
              </div>

              <span className="font-mono text-xs px-2.5 py-1 rounded border border-white/10 bg-black/60 text-zinc-300">
                Undergraduate Degree
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-black/60 border border-white/5 space-y-2 font-mono">
              <div className="text-sm sm:text-base font-bold text-white uppercase tracking-tight font-sans">
                {PERSONAL_INFO.degree}
              </div>
              <div className="text-xs text-accent">
                Specialization: {PERSONAL_INFO.specialization}
              </div>
              <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 pt-1">
                <span className="flex items-center gap-1.5 text-zinc-300">
                  <Calendar className="w-3.5 h-3.5 text-accent" />
                  <span>Timeline: {PERSONAL_INFO.duration}</span>
                </span>
                <span>•</span>
                <span className="text-zinc-300">
                  Standing: <strong className="text-accent font-bold">CGPA: {PERSONAL_INFO.cgpa}</strong>
                </span>
              </div>
            </div>

            {/* Curriculum Grid */}
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-widest mb-4">
                <BookOpen className="w-3.5 h-3.5 text-accent" />
                <span>Foundational Engineering Coursework</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {coreCurriculum.map((course, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-black/40 border border-white/5 text-xs text-zinc-300 flex items-center gap-2.5 font-mono"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Academic Highlights & Standing */}
          <div className="lg:col-span-4 p-7 sm:p-9 rounded-3xl border border-white/10 bg-surface-100/60 space-y-6 shadow-card">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <h3 className="text-xs font-bold text-white font-mono uppercase tracking-widest">
                VERIFIED METRICS
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-emerald-500/40 bg-emerald-950/40 text-accent font-semibold">
                OFFICIAL
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-black/60 border border-white/5 space-y-2">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block">
                Current Cumulative Standing
              </span>
              <div className="text-4xl font-black text-accent font-mono tracking-tighter">
                {PERSONAL_INFO.cgpa} <span className="text-sm text-zinc-500 font-normal">/ 10</span>
              </div>
              <p className="text-[11px] text-zinc-400 font-mono leading-relaxed">
                Consistent academic performance in Computer Science & Engineering curriculum.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-black/60 border border-white/5 space-y-2">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block">
                National Aptitude Ranking
              </span>
              <div className="text-2xl font-black text-white font-mono tracking-tight">
                AIR #835 <span className="text-accent text-sm font-semibold">(Score 63)</span>
              </div>
              <p className="text-[11px] text-zinc-400 font-mono leading-relaxed">
                Qualified in Internship Common Aptitude Test (iCAT) 2026 for national engineering internships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
