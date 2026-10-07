"use client";

import React, { useState } from "react";
import { SKILL_CATEGORIES } from "@/data/skillsData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Check, Layers, Cpu, Database, Globe, Wrench, BookOpen, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categoryIcons: Record<string, React.ElementType> = {
    Languages: Code2,
    "Backend & Systems": Cpu,
    "Databases & Storage": Database,
    "Frontend & Web": Globe,
    "AI, GenAI & ML": Layers,
    "Engineering & Tooling": Wrench,
    "Computer Science Fundamentals": BookOpen,
  };

  const filteredCategories =
    activeCategory === "All"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.category === activeCategory);

  return (
    <section id="skills" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="04"
          badge="TECHNICAL SKILLS"
          title="Engineering Skills & Foundations"
          subtitle="A structured overview of technologies, frameworks, and foundational computer science topics I actively use, explain, and defend."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <button
            onClick={() => setActiveCategory("All")}
            className={cn(
              "px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400",
              activeCategory === "All"
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                : "bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-border-subtle"
            )}
          >
            All Categories ({SKILL_CATEGORIES.length})
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

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group) => {
            const Icon = categoryIcons[group.category] || Code2;

            return (
              <div
                key={group.category}
                className="p-6 rounded-2xl border border-border-subtle bg-slate-900/40 hover:bg-slate-900/70 transition-all flex flex-col justify-between"
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

                  <div className="space-y-2.5">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 transition-colors"
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="text-xs font-semibold text-slate-200 font-mono">
                            {skill.name}
                          </span>
                          {skill.level && (
                            <span
                              className={cn(
                                "text-[10px] font-mono px-2 py-0.5 rounded-full border",
                                skill.level === "Strong" &&
                                  "bg-cyan-950/40 text-cyan-300 border-cyan-800/50",
                                skill.level === "Intermediate" &&
                                  "bg-emerald-950/40 text-emerald-300 border-emerald-800/50",
                                skill.level === "Working Knowledge" &&
                                  "bg-slate-900 text-slate-400 border-slate-700"
                              )}
                            >
                              {skill.level}
                            </span>
                          )}
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
