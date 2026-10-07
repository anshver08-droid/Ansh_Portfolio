import React from "react";
import { ENGINEERING_PRINCIPLES } from "@/data/portfolioData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckCircle2 } from "lucide-react";

export function EngineeringPrinciples() {
  return (
    <section id="principles" className="py-20 lg:py-28 border-t border-border-subtle bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="03"
          badge="ENGINEERING MINDSET"
          title="How I Think About Software"
          subtitle="Core engineering principles that guide how I structure databases, evaluate concurrency, validate AI outputs, and handle system failures."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ENGINEERING_PRINCIPLES.map((principle) => (
            <div
              key={principle.number}
              className="p-6 rounded-2xl border border-border-subtle bg-slate-900/40 hover:bg-slate-900/80 hover:border-slate-700 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-sm font-bold text-cyan-400 group-hover:text-cyan-300">
                    {principle.number} //
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 transition-colors" />
                </div>

                <h3 className="text-base font-bold text-slate-100 mb-2">
                  {principle.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  &ldquo;{principle.statement}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block mb-1">
                  Practical Application
                </span>
                <p className="text-[11px] font-mono text-slate-400">
                  {principle.application}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
