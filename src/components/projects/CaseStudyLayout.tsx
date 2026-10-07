import React from "react";
import Link from "next/link";
import { ProjectDetail } from "@/data/projectsData";
import { Badge } from "@/components/ui/Badge";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  FileCode,
  Layers,
  AlertTriangle,
  Lightbulb,
  Cpu,
  ArrowRight,
} from "lucide-react";

interface CaseStudyLayoutProps {
  project: ProjectDetail;
}

export function CaseStudyLayout({ project }: CaseStudyLayoutProps) {
  return (
    <div className="pt-24 pb-20 lg:pt-32 lg:pb-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Back Link */}
        <div>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Featured Projects</span>
          </Link>
        </div>

        {/* Hero / Header Section */}
        <div className="space-y-4 pb-8 border-b border-border-subtle">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="cyan" size="sm">
              {project.category}
            </Badge>
            <Badge variant="mono" size="sm">
              {project.statusBadge}
            </Badge>
            <span className="text-xs font-mono text-slate-400">
              Role: {project.role}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {project.name}
          </h1>

          <p className="text-lg sm:text-xl font-medium text-cyan-400/90 font-mono">
            {project.tagline}
          </p>

          <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
            {project.oneLiner}
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-wrap items-center gap-3">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 hover:border-cyan-500 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <Github className="w-4 h-4 text-cyan-400" />
              <span>Inspect Source Repository</span>
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs bg-emerald-950/40 hover:bg-emerald-950/70 text-emerald-300 border border-emerald-800/60 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Launch Live System</span>
              </a>
            )}
          </div>
        </div>

        {/* Tech Stack Matrix */}
        <div className="p-5 rounded-2xl bg-slate-950/70 border border-border-subtle">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3">
            Verified Technologies & Core Concepts
          </span>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t, idx) => (
              <Badge key={idx} variant="default" size="sm">
                {t}
              </Badge>
            ))}
            {project.keyConcepts.map((c, idx) => (
              <Badge key={`c-${idx}`} variant="mono" size="sm">
                {c}
              </Badge>
            ))}
          </div>
        </div>

        {/* Verified CV Technical Highlights */}
        {project.cvBullets && project.cvBullets.length > 0 && (
          <div className="p-6 rounded-2xl bg-cyan-950/20 border border-cyan-800/40 space-y-3">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-mono text-cyan-300 font-bold uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verified CV Technical Highlights & Contributions</span>
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-700">
                Primary Source
              </span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
              {project.cvBullets.map((bullet, bIdx) => (
                <li key={bIdx} className="flex items-start gap-2.5">
                  <span className="text-cyan-400 font-mono flex-shrink-0 mt-0.5">▸</span>
                  <span className="leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* 01 — Overview */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-100 flex items-center gap-2">
            <span className="font-mono text-cyan-400 text-sm">01 //</span>
            <span>System Overview</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {project.overview}
          </p>
        </section>

        {/* 02 — Problem & 03 — Why Difficult */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="space-y-4 p-6 rounded-2xl bg-slate-900/40 border border-border-subtle">
            <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
              <span className="font-mono text-cyan-400 text-sm">02 //</span>
              <span>The Problem</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.problem}
            </p>
          </section>

          <section className="space-y-4 p-6 rounded-2xl bg-slate-900/40 border border-border-subtle">
            <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
              <span className="font-mono text-cyan-400 text-sm">03 //</span>
              <span>Why This Problem is Hard</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.whyHard}
            </p>
          </section>
        </div>

        {/* 04 — Solution */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-100 flex items-center gap-2">
            <span className="font-mono text-cyan-400 text-sm">04 //</span>
            <span>Engineered Solution</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {project.solution}
          </p>
        </section>

        {/* 05 — Architecture Visualization */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-100 flex items-center gap-2">
            <span className="font-mono text-cyan-400 text-sm">05 //</span>
            <span>Interactive Architecture Topology</span>
          </h2>
          <ArchitectureDiagram
            steps={project.architectureWorkflow}
            projectName={project.name}
          />
        </section>

        {/* 06 — Key Engineering Decisions & Tradeoffs */}
        <section className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-100 flex items-center gap-2">
            <span className="font-mono text-cyan-400 text-sm">06 //</span>
            <span>Key Engineering Decisions & Trade-Offs</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.engineeringDecisions.map((dec, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/50 border border-border-subtle space-y-3"
              >
                <div className="flex items-start gap-2">
                  <span className="font-mono text-cyan-400 text-xs font-bold mt-0.5">
                    D.0{idx + 1}
                  </span>
                  <h3 className="text-sm font-bold text-slate-100">
                    {dec.decision}
                  </h3>
                </div>

                <div className="space-y-2 text-xs">
                  <div>
                    <span className="text-slate-400 font-mono text-[10px] uppercase block">
                      Rationale:
                    </span>
                    <p className="text-slate-300 leading-relaxed">
                      {dec.rationale}
                    </p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-black/40 border border-slate-800 text-slate-400 font-mono text-[11px]">
                    <span className="text-amber-400 block mb-0.5 font-semibold">
                      Trade-Off Considered:
                    </span>
                    {dec.tradeoff}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 07 — Technical Implementation */}
        <section className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-100 flex items-center gap-2">
            <span className="font-mono text-cyan-400 text-sm">07 //</span>
            <span>Technical Implementation Details</span>
          </h2>

          <div className="space-y-4">
            {project.technicalImplementation.map((impl, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/40 border border-border-subtle space-y-3"
              >
                <h3 className="text-sm font-bold text-slate-200 font-mono flex items-center gap-2">
                  <FileCode className="w-4 h-4 text-cyan-400" />
                  <span>{impl.title}</span>
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {impl.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <span className="text-cyan-400 font-mono mt-0.5">▸</span>
                      <span className="leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 08 — Security & Reliability + 09 — Testing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="p-6 rounded-2xl bg-slate-900/40 border border-border-subtle space-y-4">
            <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
              <span className="font-mono text-cyan-400 text-sm">08 //</span>
              <span>Security & Reliability Controls</span>
            </h2>
            <ul className="space-y-2 text-xs text-slate-300">
              {project.securityAndReliability.map((sec, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{sec}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="p-6 rounded-2xl bg-slate-900/40 border border-border-subtle space-y-4">
            <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
              <span className="font-mono text-cyan-400 text-sm">09 //</span>
              <span>Testing & Verification Strategy</span>
            </h2>
            <ul className="space-y-2 text-xs text-slate-300">
              {project.testingStrategy.map((test, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{test}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* 10 — Challenges & Mitigations */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-100 flex items-center gap-2">
            <span className="font-mono text-cyan-400 text-sm">10 //</span>
            <span>Engineering Challenges & Mitigations</span>
          </h2>

          <div className="space-y-4">
            {project.challengesAndMitigations.map((cm, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/40 border border-border-subtle space-y-2"
              >
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-200">
                    Challenge: {cm.challenge}
                  </span>
                </div>
                <div className="pl-6 text-xs text-slate-400 leading-relaxed font-mono">
                  <strong className="text-cyan-400">Mitigation:</strong> {cm.mitigation}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 11 — Results & Metrics */}
        <section className="p-6 rounded-2xl bg-slate-950/80 border border-border-subtle space-y-3">
          <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <span className="font-mono text-cyan-400 text-sm">11 //</span>
            <span>Results & Published Metrics</span>
          </h2>
          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 text-xs font-mono text-slate-300 leading-relaxed">
            {project.resultsAndMetrics}
          </div>
          <span className="text-[11px] font-mono text-slate-500 block">
            Zero fabrication policy: Real automated tests run locally; unmeasured production telemetry is never invented.
          </span>
        </section>

        {/* 12 — Lessons Learned & 13 — Future Improvements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="p-6 rounded-2xl bg-slate-900/40 border border-border-subtle space-y-4">
            <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
              <span className="font-mono text-cyan-400 text-sm">12 //</span>
              <span>Key Lessons Learned</span>
            </h2>
            <ul className="space-y-2 text-xs text-slate-300">
              {project.lessonsLearned.map((lesson, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{lesson}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="p-6 rounded-2xl bg-slate-900/40 border border-border-subtle space-y-4">
            <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
              <span className="font-mono text-cyan-400 text-sm">13 //</span>
              <span>Future Improvements & Roadmap</span>
            </h2>
            <ul className="space-y-2 text-xs text-slate-300">
              {project.futureImprovements.map((future, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{future}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* 14 — GitHub / Demo Action Banner */}
        <section className="p-8 rounded-3xl border border-cyan-800/50 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <span className="font-mono text-xs text-cyan-400">14 // SOURCE CODE & REPRODUCIBILITY</span>
            <h3 className="text-xl font-bold text-white">
              Ready to inspect the code?
            </h3>
            <p className="text-xs text-slate-400">
              Examine repository commits, Docker Compose files, migrations, and test scripts on GitHub.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors shadow-glow"
            >
              <Github className="w-4 h-4" />
              <span>Inspect {project.name} on GitHub</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
