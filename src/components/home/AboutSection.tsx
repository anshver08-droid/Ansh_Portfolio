import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GraduationCap, MapPin, Target, Sparkles, Code, CheckCircle, ShieldCheck } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 border-t border-border-subtle bg-slate-950/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="05"
          badge="ABOUT ME"
          title="Engineering Focus & Background"
          subtitle="Undergraduate computer science student specializing in AI & ML, taking a systems-first, project-grounded approach to software development."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-slate-300 leading-relaxed">
            <p>
              I am a B.Tech Computer Science and Engineering (Artificial Intelligence & Machine Learning) student at <strong className="text-white font-semibold">{PERSONAL_INFO.college}</strong> in {PERSONAL_INFO.location}.
            </p>

            <p>
              My approach to software engineering centers on <strong>building real systems from first principles</strong>. Rather than stopping at UI mockups or basic CRUD templates, I gravitate toward the hard questions in backend correctness and system reliability: How do you eliminate race conditions and double bookings under concurrent spikes? How do you prevent AI code generators from introducing silent regressions? How do you ingest conversational patient health data safely without clinical hallucination?
            </p>

            <p>
              I build with <span className="text-cyan-400 font-mono">TypeScript</span>, <span className="text-cyan-400 font-mono">Fastify</span>, <span className="text-cyan-400 font-mono">PostgreSQL</span>, <span className="text-cyan-400 font-mono">React</span>, and <span className="text-cyan-400 font-mono">Next.js</span>, focusing heavily on relational constraints, transactional boundaries, idempotency, and explicit error handling.
            </p>

            <p>
              I am actively preparing for software engineering, backend, and full-stack opportunities where engineering rigor, code review discipline, and scalable thinking are valued. I also take on select freelance software projects that involve full-stack web applications, custom API development, or responsible AI integrations.
            </p>

            {/* Core Values Bullets */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-border-subtle">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-slate-200">First-principles implementation</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-border-subtle">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-slate-200">Database-backed correctness</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-border-subtle">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-slate-200">Responsible AI guardrails</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-border-subtle">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-slate-200">Defensible in interviews</span>
              </div>
            </div>
          </div>

          {/* Quick Facts / Recruiter Snapshot Card */}
          <div className="lg:col-span-5 p-6 rounded-2xl border border-border-subtle bg-slate-900/40 space-y-5">
            <div className="flex items-center justify-between pb-4 border-b border-border-subtle">
              <h3 className="text-sm font-bold text-slate-100 font-mono uppercase tracking-wider">
                Candidate Snapshot
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/50 text-cyan-300 border border-cyan-800/50">
                Verified Facts
              </span>
            </div>

            <div className="space-y-3.5 text-xs">
              <div className="flex items-start gap-3">
                <GraduationCap className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block">Degree & Major</span>
                  <span className="text-slate-200 font-medium">
                    {PERSONAL_INFO.degree} ({PERSONAL_INFO.specialization})
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block">Location & Institution</span>
                  <span className="text-slate-200 font-medium">
                    {PERSONAL_INFO.college}, {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Target className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block">Target Engineering Domains</span>
                  <span className="text-slate-200 font-medium">
                    Backend Engineering, Full-Stack Development, AI/GenAI Systems
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Code className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block">Primary Stack</span>
                  <span className="text-slate-200 font-mono text-[11px]">
                    TypeScript, Fastify, PostgreSQL, React, Next.js, Node.js
                  </span>
                </div>
              </div>
            </div>

            {/* Recruiter 30-Second Guarantee */}
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] text-slate-400 space-y-1">
              <span className="font-semibold text-slate-300 block">
                Recruiter Guarantee:
              </span>
              <p>
                Zero fabricated employment, metrics, or testimonials. Everything documented here is supported by code in GitHub repositories.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
