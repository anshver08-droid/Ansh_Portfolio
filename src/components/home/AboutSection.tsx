import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GraduationCap, MapPin, Target, Code, CheckCircle, ShieldCheck } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="02"
          badge="ABOUT ME"
          title="Engineering Focus & Background"
          subtitle="B.Tech Computer Science & Engineering (AI/ML) student at ABES Engineering College, building across frontend, backend, and AI with a strong emphasis on testing, verification, and system reliability."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-zinc-300 leading-relaxed font-sans">
            <p className="text-base sm:text-lg text-white font-medium">
              I am a B.Tech Computer Science and Engineering (Artificial Intelligence & Machine Learning) student at <strong className="text-white font-bold">{PERSONAL_INFO.college}</strong> (Batch {PERSONAL_INFO.duration}, CGPA: <span className="text-accent font-mono font-bold">{PERSONAL_INFO.cgpa}</span>).
            </p>

            <p>
              As an early-career software engineer, I build systems across frontend, backend, and AI: <span className="text-white font-mono">TypeScript</span>, <span className="text-white font-mono">React</span>, and <span className="text-white font-mono">Next.js</span> interfaces, <span className="text-white font-mono">Fastify</span> and <span className="text-white font-mono">PostgreSQL</span> REST APIs, and Gemini-powered Generative AI applications.
            </p>

            <p>
              I specialize in <strong>testing, verification, debugging, and containerization</strong> through competitive hackathons and engineering projects:
            </p>

            <div className="space-y-3 pl-2 border-l border-white/10 font-mono text-xs sm:text-sm">
              <div className="space-y-1">
                <span className="text-accent font-semibold">01 // VERIFICATION & INVARIANTS</span>
                <p className="text-zinc-400">
                  Implemented invariant checking (<code className="text-accent">harness.ts</code>), mutation-testing workflows, and adversarial counterexample panels for DevPartner AI at the IBM Bob 2.0 Hackathon.
                </p>
              </div>

              <div className="space-y-1 pt-2">
                <span className="text-accent font-semibold">02 // RESPONSIBLE AI & CLINICAL INTAKE</span>
                <p className="text-zinc-400">
                  Built HealthBuddy AI, integrating Google Gemini API and browser Web Speech API for multilingual adaptive intake with strict non-diagnostic doctor review workflows.
                </p>
              </div>

              <div className="space-y-1 pt-2">
                <span className="text-accent font-semibold">03 // BACKEND CONCURRENCY & CORRECTNESS</span>
                <p className="text-zinc-400">
                  Engineered TableKeeper with PostgreSQL exclusion constraints, locking, and transactional commits to eliminate overlapping reservations.
                </p>
              </div>
            </div>

            <p className="pt-2 text-zinc-400 font-mono text-xs sm:text-sm">
              Actively preparing for software engineering internships, AI/ML roles, backend engineering, and select freelance software engagements where architectural correctness and quality matter.
            </p>

            {/* Core Competencies Matrix */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="flex items-center gap-2 p-3 rounded-xl bg-surface-100/60 border border-white/10">
                <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-zinc-200">Testing & Verification Logic</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-surface-100/60 border border-white/10">
                <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-zinc-200">PostgreSQL ACID & Concurrency</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-surface-100/60 border border-white/10">
                <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-zinc-200">Human-in-the-Loop GenAI</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-surface-100/60 border border-white/10">
                <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-zinc-200">Docker & Compose Tooling</span>
              </div>
            </div>
          </div>

          {/* Quick Facts / Candidate Snapshot Card */}
          <div className="lg:col-span-5 p-7 rounded-3xl border border-white/10 bg-surface-100/40 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <h3 className="text-xs font-bold text-white font-mono uppercase tracking-widest">
                PROFILE METRIC & SNAPSHOT
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-emerald-500/40 bg-emerald-950/40 text-accent font-semibold">
                VERIFIED CV
              </span>
            </div>

            <div className="space-y-4 text-xs font-mono">
              <div className="flex items-start gap-3">
                <GraduationCap className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-zinc-500 block uppercase">DEGREE & INSTITUTION</span>
                  <span className="text-white font-medium font-sans text-sm">
                    {PERSONAL_INFO.degree}
                  </span>
                  <span className="text-zinc-400 block text-[11px] mt-0.5">
                    {PERSONAL_INFO.college} · {PERSONAL_INFO.duration}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-zinc-500 block uppercase">ACADEMIC STANDING</span>
                  <span className="text-accent font-bold text-base">
                    CGPA: {PERSONAL_INFO.cgpa} / 10
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Target className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-zinc-500 block uppercase">TARGET OPPORTUNITIES</span>
                  <span className="text-zinc-200 font-sans text-xs">
                    Software Engineering Internships, AI/ML Roles, Backend, Full-Stack & Freelancing
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Code className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-zinc-500 block uppercase">CORE STACK</span>
                  <span className="text-zinc-300 text-[11px]">
                    Python, TypeScript, JavaScript (ES6+), C++, SQL, Fastify, Next.js, React, Docker
                  </span>
                </div>
              </div>
            </div>

            {/* Candidate Integrity Note */}
            <div className="p-3.5 rounded-xl bg-black/60 border border-white/5 text-[11px] font-mono text-zinc-400 space-y-1">
              <span className="font-semibold text-white block flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-accent" />
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
