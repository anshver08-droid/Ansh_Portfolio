import React from "react";
import { ACHIEVEMENTS } from "@/data/portfolioData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Trophy, ShieldCheck } from "lucide-react";

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="06"
          badge="COMPETITIONS & MILESTONES"
          title="Hackathons & Verified Achievements"
          subtitle="Documented participation, rankings, and engineering milestones from national aptitude evaluations and competitive hackathons."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl border border-white/10 bg-surface-100/40 hover:bg-surface-100/70 hover:border-white/20 transition-all flex flex-col justify-between group shadow-card"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-black/60 border border-white/10 text-accent group-hover:text-[#05f5a5] transition-colors">
                    <Trophy className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-[11px] font-bold px-2.5 py-0.5 rounded border border-emerald-500/40 bg-emerald-950/40 text-accent">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-accent transition-colors mb-2 uppercase tracking-tight">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4 font-mono">
                  {item.detail}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span className="text-accent font-semibold">{item.highlight}</span>
                <span>{item.year}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Recruiter Transparency Banner */}
        <div className="mt-12 p-4 rounded-2xl border border-white/10 bg-black/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-950/40 border border-emerald-500/40 text-accent">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <span className="font-semibold text-white block">
                100% Factually Grounded
              </span>
              <span>
                All achievements, hackathon participations, and test rankings strictly match the candidate CV.
              </span>
            </div>
          </div>
          <div className="text-accent whitespace-nowrap">
            Zero Unverified Claims
          </div>
        </div>
      </div>
    </section>
  );
}
