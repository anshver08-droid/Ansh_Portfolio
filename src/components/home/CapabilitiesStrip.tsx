import React from "react";
import { Database, ShieldAlert, Cpu, CheckCheck, Layers, GitBranch } from "lucide-react";

export function CapabilitiesStrip() {
  const capabilities = [
    {
      icon: Database,
      title: "Transactional Backend APIs",
      description: "Fastify & PostgreSQL services engineered with exclusion constraints to eliminate double-booking at the relational engine level.",
      tag: "PostgreSQL / ACID / GiST",
    },
    {
      icon: ShieldAlert,
      title: "Verifiable AI Workflows",
      description: "Multi-stage pipelines subjecting LLM code proposals to invariant analysis, mutation testing, and mandatory human approval gates.",
      tag: "Verification / Safety Gates",
    },
    {
      icon: Cpu,
      title: "Responsible Healthcare UX",
      description: "Pre-consultation intake converting Hinglish & Hindi symptom descriptions into structured doctor-ready notes with zero diagnostic claims.",
      tag: "Multilingual / Non-Diagnostic",
    },
    {
      icon: CheckCheck,
      title: "Explicit Invariants & Idempotency",
      description: "Eliminating duplicate mutations and race conditions through strict idempotency tokens and schema-compiled validation.",
      tag: "Idempotency / Schema Checks",
    },
  ];

  return (
    <section className="py-12 border-y border-border-subtle bg-slate-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 mb-1">
              ENGINEERING SIGNALS
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-100">
              Core Technical Capabilities
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md">
            Grounded in working repositories and architecture implementations rather than superficial tutorials.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-xl border border-border-subtle bg-slate-900/40 hover:bg-slate-900/80 hover:border-slate-700 transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-cyan-950/50 border border-cyan-800/40 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase">
                    Cap. 0{idx + 1}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-slate-100 mb-1.5 group-hover:text-cyan-300 transition-colors">
                  {cap.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-3">
                  {cap.description}
                </p>
                <div className="pt-2 border-t border-slate-800/80">
                  <span className="text-[10px] font-mono text-cyan-400/80">
                    {cap.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
