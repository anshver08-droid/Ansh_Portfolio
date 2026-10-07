"use client";

import React, { useState } from "react";
import { Play, RotateCcw, CheckCircle2, Shield, Database, Cpu, Globe, Server } from "lucide-react";
import { cn } from "@/lib/utils";

export function HeroInteractiveSystem() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [selectedNode, setSelectedNode] = useState<string>("db");

  const nodes: Record<string, { title: string; subtitle: string; icon: React.ElementType; tech: string; detail: string; invariant: string }> = {
    client: {
      title: "Client & Interface",
      subtitle: "React / Next.js / Web Speech",
      icon: Globe,
      tech: "Next.js 16, React 19, Tailwind, Accessible UX",
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
      tech: "PostgreSQL 16, btree_gist, Exclusion Constraints",
      detail: "Executes atomic booking commits. Uses tsrange exclusion constraints to physically block overlapping two-hour reservations.",
      invariant: "Double bookings are mathematically impossible at the disk/index level.",
    },
    ai: {
      title: "AI & Verification",
      subtitle: "Google Gemini / Invariant Testing",
      icon: Shield,
      tech: "harness.ts, Prompt Invariants, Mutation Testing",
      detail: "Executes responsible AI triage (HealthBuddy) or mutation testing counterexamples (DevPartner) before human sign-off.",
      invariant: "Human-in-the-loop gate required for code merges; zero diagnostic claims.",
    },
  };

  const steps = [
    { id: "client", name: "01. Client Request", log: "POST /api/v1/reservations { slot: '19:00-21:00', seats: 4 } with Idempotency-Key: idemp_98fa" },
    { id: "gateway", name: "02. Fastify Validation", log: "AJV schema passed in 0.8ms. Rate limiter: 14/100 req remaining. Token verified." },
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
    <div className="w-full rounded-3xl border border-white/10 bg-surface-100/60 p-5 sm:p-7 shadow-card relative overflow-hidden">
      {/* Top Bar with Status and Action */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-white/10">
        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span className="text-white font-bold tracking-wider uppercase">
            SYSTEM ARCHITECTURE TRACE
          </span>
          <span className="hidden sm:inline text-zinc-600">|</span>
          <span className="hidden sm:inline text-zinc-400 text-[11px]">
            Interactive Execution Pipeline
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleRunSimulation}
            disabled={isRunning}
            aria-label="Simulate transactional request trace"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold uppercase tracking-wider bg-accent text-black hover:bg-[#05f5a5] transition-all disabled:opacity-50"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>{isRunning ? "Simulating..." : "Simulate Trace"}</span>
          </button>
          <button
            onClick={handleReset}
            aria-label="Reset simulation"
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-surface-200 border border-white/10 transition-colors"
            title="Reset"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Visual Flow Stages */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mb-5">
        {[
          { key: "client", label: "01. Frontend", icon: Globe, stepIdx: 1 },
          { key: "gateway", label: "02. API Gateway", icon: Server, stepIdx: 2 },
          { key: "backend", label: "03. Fastify Service", icon: Cpu, stepIdx: 3 },
          { key: "db", label: "04. PostgreSQL 16", icon: Database, stepIdx: 4 },
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
                "flex flex-col items-center sm:items-start p-3 rounded-2xl border text-left transition-all duration-200 relative",
                isSelected
                  ? "bg-black border-accent shadow-[0_0_15px_-3px_rgba(0,229,153,0.3)] ring-1 ring-accent"
                  : "bg-black/50 border-white/10 hover:border-white/20 hover:bg-surface-200/50",
                isCurrentActive && "border-accent bg-emerald-950/20"
              )}
            >
              <div className="flex items-center justify-between w-full mb-1.5">
                <Icon
                  className={cn(
                    "w-4 h-4",
                    isSelected ? "text-accent" : "text-zinc-500",
                    isCurrentActive && "animate-pulse text-accent"
                  )}
                />
                {isPassed && <CheckCircle2 className="w-3.5 h-3.5 text-accent" />}
                {isCurrentActive && (
                  <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                )}
              </div>
              <span className="text-[11px] sm:text-xs font-bold text-white tracking-tight uppercase">
                {node.label}
              </span>
              <span className="text-[9px] font-mono text-zinc-500 truncate w-full mt-0.5">
                {isSelected ? "Inspecting" : "Click to view"}
              </span>
            </button>
          );
        })}
      </div>

      {/* Node Inspector Panel */}
      <div className="rounded-2xl border border-white/10 bg-black/60 p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 pb-3 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-surface-100 border border-white/10 text-accent">
              <SelectedIcon className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-bold text-white uppercase tracking-tight">
                  {selectedData.title}
                </h4>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-100 text-zinc-300 border border-white/10">
                  {selectedData.subtitle}
                </span>
              </div>
              <p className="text-xs text-zinc-400 mt-0.5 font-mono">
                Tech: <span className="text-accent">{selectedData.tech}</span>
              </p>
            </div>
          </div>
          <div className="text-[10px] font-mono px-2.5 py-1 rounded border border-emerald-500/40 bg-emerald-950/40 text-accent flex items-center gap-1.5 self-start sm:self-auto font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>Invariant Guarded</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
          <div>
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-1">
              ENGINEERING RESPONSIBILITY
            </span>
            <p className="text-zinc-300 leading-relaxed font-sans text-xs">
              {selectedData.detail}
            </p>
          </div>
          <div>
            <span className="text-[10px] text-accent uppercase tracking-widest block mb-1">
              ARCHITECTURAL INVARIANT
            </span>
            <p className="text-zinc-300 leading-relaxed bg-surface-200/60 p-2.5 rounded-xl border border-white/5 font-mono text-[11px]">
              {selectedData.invariant}
            </p>
          </div>
        </div>
      </div>

      {/* Live Trace Terminal Stream */}
      <div className="mt-3.5 rounded-xl bg-black border border-white/10 p-3 font-mono text-[11px] text-zinc-400">
        <div className="flex items-center justify-between text-zinc-500 mb-1 text-[10px] uppercase tracking-wider">
          <span>TELEMETRY STREAM</span>
          <span>{activeStep > 0 ? `Stage ${activeStep} of 5` : "Awaiting dispatch"}</span>
        </div>
        <p className="text-white truncate">
          {activeStep > 0
            ? steps[activeStep - 1]?.log
            : "Ready. Click 'Simulate Trace' above to trace request execution across system layers."}
        </p>
      </div>
    </div>
  );
}
