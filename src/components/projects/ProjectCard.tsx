import React from "react";
import Link from "next/link";
import { ArrowRight, Github, ExternalLink, ShieldCheck, Layers, GitBranch, Cpu, Database } from "lucide-react";
import { ProjectDetail } from "@/data/projectsData";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: ProjectDetail;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const getCategoryIcon = (category: string) => {
    if (category.includes("Backend")) return Database;
    if (category.includes("Developer Tools")) return GitBranch;
    return Cpu;
  };

  const CategoryIcon = getCategoryIcon(project.category);

  return (
    <div className="flex flex-col justify-between rounded-2xl border border-border-subtle bg-slate-900/50 hover:bg-slate-900/80 hover:border-slate-700 transition-all duration-300 p-6 sm:p-8 relative overflow-hidden group shadow-card">
      {/* Top subtle highlight */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent group-hover:via-cyan-400/50 transition-all" />

      <div>
        {/* Header row: Index + Category + Status Badge */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-slate-500 font-semibold">
              0{index + 1} //
            </span>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400/90 font-medium">
              <CategoryIcon className="w-3.5 h-3.5" />
              <span>{project.type}</span>
            </div>
          </div>

          <Badge variant="cyan" size="sm">
            {project.statusBadge}
          </Badge>
        </div>

        {/* Project Title & Tagline */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
          <Link href={`/projects/${project.slug}`}>
            {project.name}
          </Link>
        </h3>
        <p className="text-xs font-mono text-slate-400 mt-1 mb-3">
          {project.tagline}
        </p>

        {/* One-Liner Description */}
        <p className="text-sm text-slate-300 leading-relaxed mb-6">
          {project.oneLiner}
        </p>

        {/* Key Engineering Concepts */}
        <div className="mb-6 space-y-2">
          <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
            Core Engineering Concepts
          </span>
          <div className="flex flex-wrap gap-1.5">
            {project.keyConcepts.map((concept, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950 border border-slate-800 text-slate-300"
              >
                {concept}
              </span>
            ))}
          </div>
        </div>

        {/* Tech Stack Chips */}
        <div className="mb-6 space-y-2">
          <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
            Technologies & Tools
          </span>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech, idx) => (
              <Badge key={idx} variant="outline" size="sm" className="text-slate-400 bg-slate-900/60">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Action Footer: Case Study + GitHub + Live Demo */}
      <div className="pt-6 border-t border-border-subtle flex flex-wrap items-center justify-between gap-3">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition-all group-hover:border-cyan-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        >
          <span>View Deep Case Study</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>

        <div className="flex items-center gap-2">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.name} source code on GitHub`}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-slate-950 hover:bg-slate-800 border border-border-subtle transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <Github className="w-3.5 h-3.5" />
            <span>Repository</span>
          </a>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open live application for ${project.name}`}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-emerald-300 hover:text-emerald-200 bg-emerald-950/30 hover:bg-emerald-950/60 border border-emerald-800/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live System</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
