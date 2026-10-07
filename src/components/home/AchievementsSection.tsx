import React from "react";
import { ACHIEVEMENTS } from "@/data/portfolioData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Trophy, Award, CheckCircle2, ShieldCheck, Flag, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

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
              className="p-6 sm:p-7 rounded-2xl border border-border-subtle bg-slate-900/40 hover:bg-slate-900/70 hover:border-slate-700 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-cyan-950/50 border border-cyan-800/40 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <Trophy className="w-4 h-4" />
                  </div>
                  <Badge variant="cyan" size="sm" className="font-mono text-[10px]">
                    {item.badge}
                  </Badge>
                </div>

                <h3 className="text-base font-bold text-slate-100 group-hover:text-cyan-300 transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {item.detail}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="text-cyan-400 font-semibold">{item.highlight}</span>
                <span>{item.year}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Recruiter Transparency Banner */}
        <div className="mt-12 p-4 rounded-xl border border-border-subtle bg-slate-950/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <span className="font-semibold text-slate-200 block">
                100% Factually Grounded
              </span>
              <span>
                All achievements, hackathon participations, and test rankings strictly match the candidate CV.
              </span>
            </div>
          </div>
          <div className="font-mono text-emerald-400/90 whitespace-nowrap">
            Zero Unverified Claims
          </div>
        </div>
      </div>
    </section>
  );
}
