import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Users, Award, ShieldCheck, GitPullRequest, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="06"
          badge="LEADERSHIP & RECOGNITION"
          title="Engineering Collaboration & Achievements"
          subtitle="Documented leadership in student engineering initiatives, collaborative pipelines, and transparent disclosure of project milestones."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Verified Leadership Card */}
          <div className="p-6 sm:p-8 rounded-2xl border border-border-subtle bg-slate-900/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-cyan-950/50 border border-cyan-800/40 text-cyan-400">
                  <Users className="w-5 h-5" />
                </div>
                <Badge variant="cyan" size="sm">
                  Verified Team Leadership
                </Badge>
              </div>

              <h3 className="text-lg font-bold text-slate-100 mb-1">
                Engineering Team Lead — DevPartner AI
              </h3>
              <p className="text-xs font-mono text-cyan-400 mb-4">
                Collaborative Project · Team Rookies (4 Engineers)
              </p>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Led a 4-person software team (Ansh Verma as Lead, alongside Akash Singh, Astitva Mall, and Aditya Soam) architecting an end-to-end AI code verification pipeline.
              </p>

              <div className="space-y-2 text-xs text-slate-400">
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400 font-mono">▸</span>
                  <span>Coordinated system boundaries between intent extraction, invariant analysis, and mutation testing.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400 font-mono">▸</span>
                  <span>Enforced an explicit human-in-the-loop approval gate to prevent unvetted code mutations from merging.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400 font-mono">▸</span>
                  <span>Leveraged IBM Bob transparently as an AI development assistant while retaining strict human code ownership.</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] font-mono text-slate-500">
              Scope: Software Architecture · Pipeline Coordination · Deployment
            </div>
          </div>

          {/* Hackathons & Competitions Transparent Placeholder */}
          <div className="p-6 sm:p-8 rounded-2xl border border-dashed border-slate-800 bg-slate-950/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400">
                  <Award className="w-5 h-5" />
                </div>
                <Badge variant="outline" size="sm" className="border-slate-700 text-slate-400">
                  Honest Placeholder
                </Badge>
              </div>

              <h3 className="text-lg font-bold text-slate-100 mb-1">
                Hackathons & Technical Contests
              </h3>
              <p className="text-xs font-mono text-slate-500 mb-4">
                Competitive Engineering & Sprints
              </p>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 space-y-3">
                <div className="flex items-start gap-2 text-amber-400/90 font-mono text-[11px]">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Integrity Commitment: No fabricated awards or unverified podium placements.</span>
                </div>
                <p className="leading-relaxed">
                  Currently competing in regional and institutional hackathons focusing on backend systems, full-stack tools, and AI agent architectures. Verified accolades and event results will be published here upon official release.
                </p>
                <div className="p-2 rounded bg-black/60 border border-slate-800 font-mono text-[11px] text-slate-400">
                  Status: <code>[ADD VERIFIED HACKATHON RANKINGS / AWARDS]</code>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Policy: Zero Unverified Claims</span>
              <ShieldCheck className="w-4 h-4 text-emerald-500/60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
