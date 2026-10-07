import React from "react";
import Link from "next/link";
import { FREELANCE_SERVICES } from "@/data/portfolioData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRight, CheckCircle2, MessageSquare, Wrench } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function FreelanceSection() {
  return (
    <section id="freelance" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="08"
          badge="TECHNICAL SERVICES"
          title="Available for Freelance & Contract Projects"
          subtitle="I partner with founders, early-stage engineering teams, and businesses to build defensible full-stack applications, transactional APIs, and AI integrations."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {FREELANCE_SERVICES.map((service, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl border border-border-subtle bg-slate-900/40 hover:bg-slate-900/70 hover:border-slate-700 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <span className="text-[10px] font-mono text-cyan-400">
                    Service 0{idx + 1}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    What You Get:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.deliverables.map((del, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex items-center gap-2 text-xs text-slate-300"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {service.techStack.map((tech, tIdx) => (
                    <Badge key={tIdx} variant="mono" size="sm" className="text-[10px]">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Freelance Call to Action Box */}
        <div className="p-8 rounded-2xl border border-cyan-800/40 bg-gradient-to-r from-cyan-950/20 via-slate-900/60 to-slate-950/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Available for Select Client Engagements</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
              Have a product or system worth building?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Whether you need an MVP built from scratch, an API designed with strict transactional integrity, or an AI pipeline with safety guardrails—let&apos;s build it right.
            </p>
          </div>

          <Link
            href="#contact"
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all shadow-[0_0_20px_-5px_rgba(6,182,212,0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 flex-shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Discuss Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
