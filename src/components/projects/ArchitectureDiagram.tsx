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
    <div className="rounded-2xl border border-border-subtle bg-slate-950/80 p-5 sm:p-7 shadow-2xl space-y-6">
      {/* Title & Interactive Notice */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border-subtle">
        <div>
          <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block">
            ARCHITECTURAL PIPELINE FLOW
          </span>
          <h4 className="text-base sm:text-lg font-bold text-slate-100">
            {projectName} Component Topology
          </h4>
        </div>
        <div className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
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
                    ? "bg-cyan-950/40 border-cyan-500 text-cyan-300 ring-1 ring-cyan-500/30 shadow-[0_0_12px_-3px_rgba(6,182,212,0.4)]"
                    : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
                )}
              >
                <Icon className={cn("w-3.5 h-3.5", isSelected ? "text-cyan-400" : "text-slate-500")} />
                <span className="font-semibold text-slate-300">{step.step}.</span>
                <span className="truncate max-w-[130px]">{step.title}</span>
              </button>

              {idx < steps.length - 1 && (
                <ChevronRight className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Deep Stage Inspector */}
      <div className="p-5 rounded-xl border border-border-subtle bg-slate-900/70 space-y-3">
        <div className="flex items-center justify-between gap-3 pb-3 border-b border-border-subtle">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-800/50 text-cyan-400">
              <StepIcon className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-cyan-400 uppercase">
                Stage {activeStep.step} Architecture
              </span>
              <h5 className="text-sm sm:text-base font-bold text-slate-100">
                {activeStep.title}
              </h5>
            </div>
          </div>
          {activeStep.type && (
            <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 capitalize">
              Role: {activeStep.type}
            </span>
          )}
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {activeStep.detail}
        </p>

        {/* Next / Previous Controls */}
        <div className="pt-2 flex items-center justify-between text-xs font-mono">
          <button
            onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
            disabled={activeStepIndex === 0}
            className="text-slate-400 hover:text-slate-200 disabled:opacity-30 disabled:hover:text-slate-400"
          >
            ← Previous Stage
          </button>
          <button
            onClick={() => setActiveStepIndex((prev) => Math.min(steps.length - 1, prev + 1))}
            disabled={activeStepIndex === steps.length - 1}
            className="text-cyan-400 hover:text-cyan-300 disabled:opacity-30 disabled:hover:text-cyan-400"
          >
            Next Stage →
          </button>
        </div>
      </div>
    </div>
  );
}
