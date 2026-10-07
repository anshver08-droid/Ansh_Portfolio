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
          number="02"
          badge="FEATURED PROJECTS"
          title="Engineered Systems & Verified Case Studies"
          subtitle="Three core projects built around transactional correctness, verified AI workflows, and responsible domain applications. Supported by public source code and architectural documentation."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={project.slug} project={project} index={idx} />
          ))}
        </div>

        {/* Technical Interview Defensibility Banner */}
        <div className="mt-12 p-4 rounded-xl border border-border-subtle bg-slate-950/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <span className="font-semibold text-slate-200 block">
                Technical Interview Defensibility
              </span>
              <span>
                All architectural claims, database constraints, and pipeline stages can be defended in depth.
              </span>
            </div>
          </div>
          <div className="font-mono text-cyan-400/90 whitespace-nowrap">
            3 Repositories Verified
          </div>
        </div>
      </div>
    </section>
  );
}
