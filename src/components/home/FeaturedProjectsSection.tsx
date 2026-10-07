import React from "react";
import { PROJECTS } from "@/data/projectsData";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ShieldCheck } from "lucide-react";

export function FeaturedProjectsSection() {
  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="03"
          badge="FEATURED PROJECTS"
          title="Engineered Systems & Verified Codebases"
          subtitle="Three major projects from the verified CV spanning AI-powered developer verification, responsible healthcare pre-consultation, and transactional backend reservation APIs."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={project.slug} project={project} index={idx} />
          ))}
        </div>

        {/* Technical Interview Defensibility Banner */}
        <div className="mt-12 p-4 rounded-xl border border-white/10 bg-white/[0.02] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-accent">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <span className="font-semibold text-white block">
                Technical Interview Defensibility
              </span>
              <span className="text-zinc-400">
                All contributions, invariants, exclusion constraints, and test harnesses are backed by verified source code.
              </span>
            </div>
          </div>
          <div className="font-mono text-accent whitespace-nowrap">
            3 Core Verified Repositories
          </div>
        </div>
      </div>
    </section>
  );
}
