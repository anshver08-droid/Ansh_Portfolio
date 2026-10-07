"use client";

import React, { useState } from "react";
import { ProjectArchitectureStep } from "@/data/projectsData";
import { cn } from "@/lib/utils";
import { CheckCircle2, ChevronRight, Server, Shield, Cpu, Database, User, Activity } from "lucide-react";

interface ArchitectureDiagramProps {
  steps: ProjectArchitectureStep[];
  projectName: string;
}

export function ArchitectureDiagram({ steps, projectName }: ArchitectureDiagramProps) {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const getStepIcon = (type?: string) => {
    switch (type) {
      case "client":
        return User;
      case "api":
        return Server;
      case "db":
        return Database;
      case "ai":
        return Cpu;
      case "verification":
        return Shield;
      case "human":
        return Activity;
      default:
        return Server;
    }
  };

  const activeStep = steps[activeStepIndex] || steps[0];
  const StepIcon = getStepIcon(activeStep.type);

  return (
    <div className="rounded-2xl border border-white/10 bg-[#06090e] p-5 sm:p-7 shadow-2xl space-y-6">
      {/* Title & Interactive Notice */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
        <div>
          <span className="text-[11px] font-mono text-accent uppercase tracking-wider block">
            ARCHITECTURAL PIPELINE FLOW
          </span>
          <h4 className="text-base sm:text-lg font-bold text-white">
            {projectName} Component Topology
          </h4>
        </div>
        <div className="text-xs font-mono text-zinc-400 bg-white/[0.03] px-3 py-1.5 rounded-lg border border-white/10">
          Step {activeStepIndex + 1} of {steps.length}
        </div>
      </div>

      {/* Horizontal / Grid Flow of Steps */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 scrollbar-thin">
        {steps.map((step, idx) => {
          const Icon = getStepIcon(step.type);
          const isSelected = activeStepIndex === idx;

          return (
            <React.Fragment key={step.step}>
              <button
                onClick={() => setActiveStepIndex(idx)}
                aria-label={`Inspect step ${step.step}: ${step.title}`}
                className={cn(
                  "flex-shrink-0 flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-mono transition-all",
                  isSelected
                    ? "bg-accent/15 border-accent text-accent ring-1 ring-accent/30 shadow-[0_0_15px_-3px_rgba(0,229,153,0.3)]"
                    : "bg-white/[0.03] border-white/10 text-zinc-400 hover:text-white hover:border-white/20"
                )}
              >
                <Icon className={cn("w-3.5 h-3.5", isSelected ? "text-accent" : "text-zinc-500")} />
                <span className="font-semibold text-zinc-300">{step.step}.</span>
                <span className="truncate max-w-[130px]">{step.title}</span>
              </button>

              {idx < steps.length - 1 && (
                <ChevronRight className="w-3.5 h-3.5 text-zinc-600 flex-shrink-0" />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Deep Stage Inspector */}
      <div className="p-5 rounded-xl border border-white/10 bg-white/[0.02] space-y-3">
        <div className="flex items-center justify-between gap-3 pb-3 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-accent/10 border border-accent/30 text-accent">
              <StepIcon className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-accent uppercase">
                Stage {activeStep.step} Architecture
              </span>
              <h5 className="text-sm sm:text-base font-bold text-white">
                {activeStep.title}
              </h5>
            </div>
          </div>
          {activeStep.type && (
            <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-black/60 text-zinc-300 border border-white/10 capitalize">
              Role: {activeStep.type}
            </span>
          )}
        </div>

        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
          {activeStep.detail}
        </p>

        {/* Next / Previous Controls */}
        <div className="pt-2 flex items-center justify-between text-xs font-mono">
          <button
            onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
            disabled={activeStepIndex === 0}
            className="text-zinc-400 hover:text-white disabled:opacity-30 disabled:hover:text-zinc-400 transition-colors"
          >
            ← Previous Stage
          </button>
          <button
            onClick={() => setActiveStepIndex((prev) => Math.min(steps.length - 1, prev + 1))}
            disabled={activeStepIndex === steps.length - 1}
            className="text-accent hover:text-accent/80 disabled:opacity-30 disabled:hover:text-accent transition-colors"
          >
            Next Stage →
          </button>
        </div>
      </div>
    </div>
  );
}
