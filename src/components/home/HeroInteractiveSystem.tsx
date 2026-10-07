"use client";

import React, { useState } from "react";
import { Play, RotateCcw, CheckCircle2, Shield, Database, Cpu, Globe, Server } from "lucide-react";
import { cn } from "@/lib/utils";

interface SystemNode {
  id: string;
  name: string;
  role: string;
  badge: string;
  status: "idle" | "active" | "success" | "invariant";
  telemetry: string;
}

export function HeroInteractiveSystem() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [selectedNode, setSelectedNode] = useState<string>("db");

  const nodes: Record<string, { title: string; subtitle: string; icon: React.ElementType; tech: string; detail: string; invariant: string }> = {
    client: {
      title: "Client & Interface",
      subtitle: "React / Next.js / Web Speech",
      icon: Globe,
      tech: "Next.js 15, Tailwind, Accessible UX",
      detail: "Captures user intents (reservation request or clinical narrative) with client-side validation before network transmission.",
      invariant: "Advisory availability only; zero client-side authority over database state.",
    },
    gateway: {
      title: "API Gateway & Defense",
      subtitle: "Fastify / Schema / Rate Limits",
      icon: Server,
      tech: "JSON Schema, Fastify ajv, Rate-Limit Hooks",
      detail: "Validates headers, inspects Idempotency-Key token, and checks IP burst limits to block denial-of-service attempts.",
      invariant: "Non-idempotent duplicate mutation requests are rejected or served cached results.",
    },
    backend: {
      title: "Application Service",
      subtitle: "TypeScript / Node.js Runtime",
      icon: Cpu,
      tech: "Strict TS, Domain Validation, Async Pipeline",
      detail: "Coordinates transactional state transitions, coordinates verification pipeline or triggers Gemini prompt adapters.",
      invariant: "Explicit failure handling; errors mapped to predictable status contracts.",
    },
    db: {
      title: "Database Engine",
      subtitle: "PostgreSQL ACID / GiST Constraints",
      icon: Database,
      tech: "PostgreSQL, btree_gist, Exclusion Constraints",
      detail: "Executes atomic booking commits. Uses tsrange exclusion constraints to physically prevent overlapping time slots.",
      invariant: "Double bookings are mathematically impossible at the disk/index level.",
    },
    ai: {
      title: "AI & Verification",
      subtitle: "Google Gemini / Invariant Testing",
      icon: Shield,
      tech: "Prompt Invariants, Mutation Testing, AST checks",
      detail: "Executes responsible AI triage (HealthBuddy) or mutation testing counterexamples (DevPartner) before human sign-off.",
      invariant: "Human-in-the-loop gate required for code merges; zero diagnostic claims.",
    },
  };

  const steps = [
    { id: "client", name: "01. Client Request", log: "POST /api/v1/reservations { slot: '19:00-20:30', seats: 4 } with Idempotency-Key: idemp_98fa" },
    { id: "gateway", name: "02. Fastify Validation", log: "AJV schema passed in 0.8ms. Rate limiter: 14/100 req remaining. Key verified." },
    { id: "backend", name: "03. Service Orchestration", log: "Initiating isolated reservation workflow. Acquiring connection from pool." },
    { id: "db", name: "04. Transaction & Exclusion", log: "BEGIN TRANSACTION; INSERT reservation; GiST exclusion constraint checked (0 overlaps). COMMIT." },
    { id: "ai", name: "05. Verification Completed", log: "Invariant satisfied. State committed. Audit log emitted with RFC 7807 trace." },
  ];

  const handleRunSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setActiveStep(1);
    setSelectedNode("client");

    const timer1 = setTimeout(() => {
      setActiveStep(2);
      setSelectedNode("gateway");
    }, 800);

    const timer2 = setTimeout(() => {
      setActiveStep(3);
      setSelectedNode("backend");
    }, 1600);

    const timer3 = setTimeout(() => {
      setActiveStep(4);
      setSelectedNode("db");
    }, 2400);

    const timer4 = setTimeout(() => {
      setActiveStep(5);
      setSelectedNode("ai");
      setIsRunning(false);
    }, 3200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  };

  const handleReset = () => {
    setActiveStep(0);
    setIsRunning(false);
    setSelectedNode("db");
  };

  const selectedData = nodes[selectedNode] || nodes.db;
  const SelectedIcon = selectedData.icon;

  return (
    <div className="w-full rounded-2xl border border-border-subtle bg-slate-950/80 backdrop-blur-md p-4 sm:p-6 shadow-2xl relative overflow-hidden">
      {/* Top Bar with Status and Action */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-border-subtle">
        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-slate-300 font-semibold tracking-wide">
            SYSTEM ARCHITECTURE TRACE
          </span>
          <span className="hidden sm:inline text-slate-500">|</span>
          <span className="hidden sm:inline text-slate-400 text-[11px]">
            Interactive Execution Pipeline
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleRunSimulation}
            disabled={isRunning}
            aria-label="Simulate transactional request trace"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/40 transition-colors disabled:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>{isRunning ? "Simulating..." : "Simulate Request"}</span>
          </button>
          <button
            onClick={handleReset}
            aria-label="Reset simulation"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 border border-border-subtle transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            title="Reset"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Visual Flow Stages */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-2.5 mb-5">
        {[
          { key: "client", label: "01. Frontend", icon: Globe, stepIdx: 1 },
          { key: "gateway", label: "02. API Gateway", icon: Server, stepIdx: 2 },
          { key: "backend", label: "03. Logic / Fastify", icon: Cpu, stepIdx: 3 },
          { key: "db", label: "04. PostgreSQL", icon: Database, stepIdx: 4 },
          { key: "ai", label: "05. Verification", icon: Shield, stepIdx: 5 },
        ].map((node) => {
          const Icon = node.icon;
          const isCurrentActive = activeStep === node.stepIdx;
          const isPassed = activeStep > node.stepIdx;
          const isSelected = selectedNode === node.key;

          return (
            <button
              key={node.key}
              onClick={() => setSelectedNode(node.key)}
              className={cn(
                "flex flex-col items-center sm:items-start p-2.5 sm:p-3 rounded-xl border text-left transition-all duration-200 relative",
                isSelected
                  ? "bg-slate-900/90 border-cyan-500/60 shadow-[0_0_15px_-4px_rgba(6,182,212,0.3)] ring-1 ring-cyan-500/30"
                  : "bg-slate-950/60 border-border-subtle hover:border-slate-700 hover:bg-slate-900/50",
                isCurrentActive && "border-cyan-400 bg-cyan-950/20"
              )}
            >
              <div className="flex items-center justify-between w-full mb-1.5">
                <Icon
                  className={cn(
                    "w-4 h-4",
                    isSelected ? "text-cyan-400" : "text-slate-400",
                    isCurrentActive && "animate-pulse text-cyan-300"
                  )}
                />
                {isPassed && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                {isCurrentActive && (
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                )}
              </div>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-200 tracking-tight">
                {node.label}
              </span>
              <span className="text-[9px] font-mono text-slate-500 truncate w-full">
                {isSelected ? "Inspecting" : "Click to view"}
              </span>
            </button>
          );
        })}
      </div>

      {/* Node Inspector Panel */}
      <div className="rounded-xl border border-border-subtle bg-slate-900/60 p-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 pb-3 border-b border-border-subtle">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-cyan-950/40 border border-cyan-800/40 text-cyan-400">
              <SelectedIcon className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-bold text-slate-100">
                  {selectedData.title}
                </h4>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                  {selectedData.subtitle}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Tech: <span className="text-slate-300 font-mono text-[11px]">{selectedData.tech}</span>
              </p>
            </div>
          </div>
          <div className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-emerald-950/30 text-emerald-300 border border-emerald-800/40 flex items-center gap-1.5 self-start sm:self-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Invariant Guarded</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div>
            <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider block mb-1">
              Engineering Responsibility
            </span>
            <p className="text-slate-300 leading-relaxed">
              {selectedData.detail}
            </p>
          </div>
          <div>
            <span className="font-mono text-[10px] text-cyan-400/90 uppercase tracking-wider block mb-1">
              Architectural Invariant
            </span>
            <p className="text-slate-300 leading-relaxed bg-slate-950/70 p-2 rounded-lg border border-border-subtle font-mono text-[11px]">
              {selectedData.invariant}
            </p>
          </div>
        </div>
      </div>

      {/* Live Trace Terminal Stream */}
      <div className="mt-3 rounded-lg bg-black/80 border border-slate-800/90 p-2.5 font-mono text-[10px] sm:text-[11px] text-slate-400">
        <div className="flex items-center justify-between text-slate-500 mb-1 text-[10px]">
          <span>EXECUTION STREAM</span>
          <span>{activeStep > 0 ? `Stage ${activeStep} of 5` : "Awaiting request dispatch"}</span>
        </div>
        <p className="text-slate-200 truncate">
          {activeStep > 0
            ? steps[activeStep - 1]?.log
            : "Ready. Click 'Simulate Request' above to view transactional trace across system layers."}
        </p>
      </div>
    </div>
  );
}
