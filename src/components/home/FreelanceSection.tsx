import React from "react";
import Link from "next/link";
import { FREELANCE_SERVICES } from "@/data/portfolioData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRight, CheckCircle2, MessageSquare } from "lucide-react";

export function FreelanceSection() {
  return (
    <section id="freelance" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="09"
          badge="TECHNICAL SERVICES"
          title="Available for Freelance & Contract Projects"
          subtitle="I partner with founders, early-stage engineering teams, and businesses to build defensible full-stack applications, transactional APIs, and AI integrations."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {FREELANCE_SERVICES.map((service, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-9 rounded-3xl border border-white/10 bg-surface-100/40 hover:bg-surface-100/70 hover:border-white/20 transition-all flex flex-col justify-between group shadow-card"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors uppercase tracking-tight">
                    {service.title}
                  </h3>
                  <span className="text-xs font-mono font-bold text-accent">
                    0{idx + 1} //
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6 font-mono">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">
                    DELIVERABLES:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.deliverables.map((del, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex items-center gap-2 text-xs text-zinc-300 font-mono"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {service.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/60 border border-white/10 text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Freelance Banner */}
        <div className="p-8 sm:p-12 rounded-3xl border border-emerald-500/30 bg-surface-100/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-glow">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-wider font-semibold">
              <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
              <span>Available for Select Client Engagements</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              Have a product or system worth building?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-mono leading-relaxed">
              Whether you need an MVP built from scratch, an API designed with strict transactional integrity, or an AI pipeline with safety guardrails—let&apos;s engineer it right.
            </p>
          </div>

          <Link
            href="#contact"
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-accent text-black hover:bg-[#05f5a5] transition-all shadow-glow flex-shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Discuss Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
