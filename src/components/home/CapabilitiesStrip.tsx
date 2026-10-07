import React from "react";
import { Database, ShieldAlert, Cpu, CheckCheck } from "lucide-react";

export function CapabilitiesStrip() {
  const capabilities = [
    {
      icon: Database,
      num: "01",
      title: "Transactional Backend APIs",
      description: "Fastify & PostgreSQL services engineered with exclusion constraints to eliminate double-booking at the relational engine level.",
      tag: "PostgreSQL / ACID / GiST",
    },
    {
      icon: ShieldAlert,
      num: "02",
      title: "Verifiable AI Workflows",
      description: "Multi-stage pipelines subjecting LLM code proposals to invariant analysis, mutation testing, and mandatory human approval gates.",
      tag: "Verification / Safety Gates",
    },
    {
      icon: Cpu,
      num: "03",
      title: "Responsible Healthcare UX",
      description: "Pre-consultation intake converting Hinglish & Hindi symptom descriptions into structured doctor-ready notes with zero diagnostic claims.",
      tag: "Multilingual / Non-Diagnostic",
    },
    {
      icon: CheckCheck,
      num: "04",
      title: "Explicit Invariants & Idempotency",
      description: "Eliminating duplicate mutations and race conditions through strict idempotency tokens and schema-compiled validation.",
      tag: "Idempotency / Schema Checks",
    },
  ];

  return (
    <section className="py-16 sm:py-20 border-y border-white/10 bg-black/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-12">
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-accent mb-2">
              01 // CAPABILITIES
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight uppercase">
              Core Technical Competencies
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 font-mono max-w-md">
            Grounded in working repositories and architecture implementations rather than superficial tutorials.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.num}
                className="p-6 rounded-2xl border border-white/10 bg-surface-100/50 hover:bg-surface-100 hover:border-white/20 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-accent">
                      {cap.num} //
                    </span>
                    <Icon className="w-4 h-4 text-zinc-500 group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-2 group-hover:text-accent transition-colors uppercase tracking-tight">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-mono mb-4">
                    {cap.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-white/5">
                  <span className="text-[10px] font-mono text-zinc-500 tracking-wider uppercase">
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
