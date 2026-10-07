"use client";

import React, { useState } from "react";
import { SKILL_CATEGORIES } from "@/data/skillsData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Code2, Cpu, Database, Globe, Layers, BookOpen, Search, Check } from "lucide-react";
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
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1">
            <button
              onClick={() => setActiveCategory("All")}
              className={cn(
                "px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400",
                activeCategory === "All"
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                  : "bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-border-subtle"
              )}
            >
              All ({SKILL_CATEGORIES.length})
            </button>

            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400",
                  activeCategory === cat.category
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                    : "bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-border-subtle"
                )}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* Quick Filter Search */}
          <div className="relative min-w-[220px]">
            <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter skills..."
              className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-slate-950 border border-border-subtle text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 font-mono"
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
                className="p-6 rounded-2xl border border-border-subtle bg-slate-900/40 hover:bg-slate-900/70 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-md bg-cyan-950/40 border border-cyan-800/40 text-cyan-400">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <h3 className="text-sm font-bold text-slate-100">
                        {group.category}
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500">
                      {group.badge}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                    {group.description}
                  </p>

                  <div className="space-y-2">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 transition-colors"
                      >
                        <div className="flex items-center justify-between gap-2 mb-0.5">
                          <span className="text-xs font-semibold text-slate-200 font-mono">
                            {skill.name}
                          </span>
                        </div>
                        {skill.description && (
                          <p className="text-[11px] text-slate-400 leading-normal">
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
