import React from "react";
import { ENGINEERING_PRINCIPLES } from "@/data/portfolioData";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function EngineeringPrinciples() {
  return (
    <section id="principles" className="py-20 lg:py-28 border-t border-white/10 bg-black/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="08"
          badge="ENGINEERING MINDSET"
          title="How I Think About Software"
          subtitle="Core engineering principles that guide how I structure databases, evaluate concurrency, validate AI outputs, and handle system failures."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ENGINEERING_PRINCIPLES.map((principle) => (
            <div
              key={principle.number}
              className="p-7 rounded-3xl border border-white/10 bg-surface-100/40 hover:bg-surface-100/70 hover:border-white/20 transition-all flex flex-col justify-between group shadow-card"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-sm font-bold text-accent">
                    {principle.number} //
                  </span>
                  <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-accent transition-colors" />
                </div>

                <h3 className="text-base font-bold text-white mb-2 uppercase tracking-tight">
                  {principle.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-mono mb-6">
                  &ldquo;{principle.statement}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-white/5">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">
                  PRACTICAL APPLICATION
                </span>
                <p className="text-[11px] font-mono text-zinc-400">
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
