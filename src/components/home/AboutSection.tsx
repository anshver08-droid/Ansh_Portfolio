import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GraduationCap, MapPin, Target, Sparkles, Code, CheckCircle, ShieldCheck } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 border-t border-border-subtle bg-slate-950/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="02"
          badge="ABOUT ME"
          title="Engineering Focus & Background"
          subtitle="B.Tech Computer Science & Engineering (AI/ML) student at ABES Engineering College, building across frontend, backend, and AI with a strong emphasis on testing, verification, and system reliability."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-slate-300 leading-relaxed">
            <p>
              I am a B.Tech Computer Science and Engineering (Artificial Intelligence & Machine Learning) student at <strong className="text-white font-semibold">{PERSONAL_INFO.college}</strong> (Batch {PERSONAL_INFO.duration}, CGPA: <strong className="text-cyan-400 font-mono">{PERSONAL_INFO.cgpa}</strong>).
            </p>

            <p>
              As an early-career software engineer, I build systems across frontend, backend, and AI: <span className="text-cyan-400 font-mono">TypeScript</span>, <span className="text-cyan-400 font-mono">React</span>, and <span className="text-cyan-400 font-mono">Next.js</span> interfaces, <span className="text-cyan-400 font-mono">Fastify</span> and <span className="text-cyan-400 font-mono">PostgreSQL</span> REST APIs, and Gemini-powered Generative AI applications.
            </p>

            <p>
              I specialize in <strong>testing, verification, debugging, and containerization</strong> through competitive hackathons and engineering projects:
            </p>

            <ul className="space-y-2 text-xs sm:text-sm text-slate-300 pl-2">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-mono mt-0.5">▸</span>
                <span><strong>Verification & Invariants:</strong> Implemented invariant checking (<code className="text-cyan-300 font-mono">harness.ts</code>), mutation-testing workflows, and adversarial counterexample panels for DevPartner AI at the IBM Bob 2.0 Hackathon.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-mono mt-0.5">▸</span>
                <span><strong>Responsible AI & Clinical Intake:</strong> Built HealthBuddy AI, integrating Google Gemini API and browser Web Speech API for multilingual adaptive intake with strict non-diagnostic doctor review workflows.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-mono mt-0.5">▸</span>
                <span><strong>Backend Concurrency & Correctness:</strong> Engineered TableKeeper with PostgreSQL exclusion constraints, locking, and transactional commits to eliminate overlapping reservations.</span>
              </li>
            </ul>

            <p>
              I am actively preparing for software engineering internships, AI/ML roles, backend engineering, and select freelance software engagements where architectural correctness and quality matter.
            </p>

            {/* Core Competencies Matrix */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-border-subtle">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-slate-200">Testing & Verification Logic</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-border-subtle">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-slate-200">PostgreSQL ACID & Concurrency</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-border-subtle">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-slate-200">Human-in-the-Loop GenAI</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-border-subtle">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-slate-200">Docker & Compose Tooling</span>
              </div>
            </div>
          </div>

          {/* Quick Facts / Candidate Snapshot Card */}
          <div className="lg:col-span-5 p-6 rounded-2xl border border-border-subtle bg-slate-900/40 space-y-5">
            <div className="flex items-center justify-between pb-4 border-b border-border-subtle">
              <h3 className="text-sm font-bold text-slate-100 font-mono uppercase tracking-wider">
                Academic & Profile Summary
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/50 text-cyan-300 border border-cyan-800/50">
                Verified CV
              </span>
            </div>

            <div className="space-y-3.5 text-xs">
              <div className="flex items-start gap-3">
                <GraduationCap className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block">Degree & Institution</span>
                  <span className="text-slate-200 font-medium">
                    {PERSONAL_INFO.degree} ({PERSONAL_INFO.specialization})
                  </span>
                  <span className="text-slate-400 block text-[11px] mt-0.5">
                    {PERSONAL_INFO.college} · {PERSONAL_INFO.duration}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block">Academic Standing</span>
                  <span className="text-slate-200 font-mono font-medium text-cyan-300">
                    CGPA: {PERSONAL_INFO.cgpa} / 10
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Target className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block">Target Opportunities</span>
                  <span className="text-slate-200 font-medium">
                    Software Engineering Internships, AI/ML Roles, Backend, Full-Stack & Freelancing
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Code className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block">Core Languages & Frameworks</span>
                  <span className="text-slate-200 font-mono text-[11px]">
                    Python, TypeScript, JavaScript (ES6+), C++, SQL, Fastify, Next.js, React, Docker
                  </span>
                </div>
              </div>
            </div>

            {/* Candidate Integrity Note */}
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] text-slate-400 space-y-1">
              <span className="font-semibold text-slate-300 block flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified Engineering Grounding</span>
              </span>
              <p>
                All project details and contributions match the official CV and are backed by publicly verifiable code repositories on GitHub.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
