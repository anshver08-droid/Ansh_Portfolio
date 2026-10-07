"use client";

import React, { useState } from "react";
import { SKILL_CATEGORIES } from "@/data/skillsData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Code2, Cpu, Database, Globe, Layers, BookOpen, Search } from "lucide-react";
import { cn } from "@/lib/utils";

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categoryIcons: Record<string, React.ElementType> = {
    Programming: Code2,
    "Backend & Systems": Cpu,
    Databases: Database,
    "Frontend Development": Globe,
    "AI & Developer Tooling": Layers,
    "Core Computer Science": BookOpen,
  };

  const filteredCategories = SKILL_CATEGORIES.map((category) => {
    const matchesCategory = activeCategory === "All" || category.category === activeCategory;
    if (!matchesCategory) return null;

    if (!searchQuery.trim()) return category;

    const query = searchQuery.toLowerCase();
    const matchingSkills = category.skills.filter(
      (s) =>
        s.name.toLowerCase().includes(query) ||
        (s.description && s.description.toLowerCase().includes(query))
    );

    if (matchingSkills.length === 0) return null;

    return {
      ...category,
      skills: matchingSkills,
    };
  }).filter(Boolean) as typeof SKILL_CATEGORIES;

  return (
    <section id="skills" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="04"
          badge="TECHNICAL SKILLS"
          title="Skills & Engineering Competencies"
          subtitle="Organized directly from the verified CV across programming languages, backend systems, database constraints, frontend architectures, AI tooling, and computer science foundations."
        />

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1">
            <button
              onClick={() => setActiveCategory("All")}
              className={cn(
                "px-3.5 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all focus:outline-none",
                activeCategory === "All"
                  ? "bg-accent text-black font-bold shadow-[0_0_15px_-3px_rgba(0,229,153,0.4)]"
                  : "bg-surface-100 text-zinc-400 hover:text-white border border-white/5"
              )}
            >
              All ({SKILL_CATEGORIES.length})
            </button>

            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={cn(
                  "px-3.5 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all focus:outline-none",
                  activeCategory === cat.category
                    ? "bg-accent text-black font-bold shadow-[0_0_15px_-3px_rgba(0,229,153,0.4)]"
                    : "bg-surface-100 text-zinc-400 hover:text-white border border-white/5"
                )}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* Quick Filter Search */}
          <div className="relative min-w-[220px]">
            <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter competencies..."
              className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-surface-100 border border-white/10 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-accent font-mono"
            />
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group) => {
            const Icon = categoryIcons[group.category] || Code2;

            return (
              <div
                key={group.category}
                className="p-7 rounded-3xl border border-white/10 bg-surface-100/40 hover:bg-surface-100/70 transition-all flex flex-col justify-between group shadow-card"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-black/60 border border-white/10 text-accent">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-bold text-white uppercase tracking-tight">
                        {group.category}
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500">
                      {group.badge}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-400 font-mono mb-5 leading-relaxed">
                    {group.description}
                  </p>

                  <div className="space-y-2">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3 rounded-xl bg-black/60 border border-white/5 hover:border-white/15 transition-colors"
                      >
                        <div className="flex items-center justify-between gap-2 mb-0.5">
                          <span className="text-xs font-semibold text-white font-mono">
                            {skill.name}
                          </span>
                        </div>
                        {skill.description && (
                          <p className="text-[11px] text-zinc-400 font-mono leading-normal">
                            {skill.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
