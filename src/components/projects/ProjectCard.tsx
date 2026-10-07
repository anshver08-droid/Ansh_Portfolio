import React from "react";
import Link from "next/link";
import { ArrowRight, Github, ExternalLink, ShieldCheck, Cpu, Database, GitBranch } from "lucide-react";
import { ProjectDetail } from "@/data/projectsData";

interface ProjectCardProps {
  project: ProjectDetail;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const getCategoryIcon = (category: string) => {
    if (category.includes("Backend")) return Database;
    if (category.includes("Developer")) return GitBranch;
    return Cpu;
  };

  const CategoryIcon = getCategoryIcon(project.category);

  return (
    <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-surface-100/40 hover:bg-surface-100/80 hover:border-white/20 transition-all duration-300 p-7 sm:p-9 relative overflow-hidden group shadow-card">
      {/* Top subtle highlight line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent group-hover:via-accent transition-all" />

      {/* Large Outlined Background Index Number (Editorial Detail) */}
      <div className="absolute top-4 right-6 font-mono font-black text-6xl sm:text-7xl text-outline-subtle select-none pointer-events-none group-hover:text-outline-emerald transition-all">
        0{index + 1}
      </div>

      <div className="relative z-10">
        {/* Header row: Category + Context Badge */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 font-medium uppercase tracking-wider">
            <CategoryIcon className="w-3.5 h-3.5 text-accent" />
            <span>{project.type}</span>
          </div>

          {project.contextBadge && (
            <span className="px-2 py-0.5 rounded font-mono text-[10px] text-accent border border-emerald-500/30 bg-emerald-950/40 font-semibold">
              {project.contextBadge}
            </span>
          )}
        </div>

        {/* Project Title & Tagline */}
        <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-accent transition-colors uppercase tracking-tight">
          <Link href={`/projects/${project.slug}`}>
            {project.name}
          </Link>
        </h3>
        <p className="text-xs font-mono text-zinc-400 mt-1 mb-5">
          {project.tagline}
        </p>

        {/* Role & Contribution Callout */}
        <div className="mb-5 p-3 rounded-xl bg-black/60 border border-white/5 text-xs font-mono">
          <div className="flex items-center gap-1.5 text-accent text-[11px] font-semibold mb-0.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Contribution: {project.contributionBadge}</span>
          </div>
          <p className="text-zinc-500 text-[11px]">
            Role: <span className="text-zinc-300">{project.role}</span>
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-zinc-300 leading-relaxed mb-6">
          {project.oneLiner}
        </p>

        {/* Key CV Bullets */}
        <div className="mb-6 space-y-2">
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">
            VERIFIED HIGHLIGHTS
          </span>
          <ul className="space-y-2 text-xs text-zinc-300 font-mono">
            {project.cvBullets.slice(0, 3).map((bullet, bIdx) => (
              <li key={bIdx} className="flex items-start gap-2 text-[11px]">
                <span className="text-accent flex-shrink-0 mt-0.5">▸</span>
                <span className="leading-relaxed text-zinc-300">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Chips */}
        <div className="mb-8 space-y-2">
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">
            TECH STACK
          </span>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/60 border border-white/10 text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Footer: Case Study + GitHub + Live Demo */}
      <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 relative z-10">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-bold uppercase tracking-wider bg-accent text-black hover:bg-[#05f5a5] transition-all shadow-[0_0_15px_-3px_rgba(0,229,153,0.4)]"
        >
          <span>Deep Case Study</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>

        <div className="flex items-center gap-2 font-mono text-xs">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.name} source code on GitHub`}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-zinc-300 hover:text-white bg-black/60 hover:bg-surface-100 border border-white/10 transition-colors"
          >
            <Github className="w-3.5 h-3.5 text-accent" />
            <span>Repo</span>
          </a>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open live system for ${project.name}`}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-accent hover:text-white bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-500/40 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
