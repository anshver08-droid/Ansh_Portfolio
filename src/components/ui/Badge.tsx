import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "cyan" | "emerald" | "outline" | "mono";
  size?: "sm" | "md";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  size = "sm",
  className,
}: BadgeProps) {
  const variantStyles = {
    default: "bg-surface-50 text-slate-300 border-border-subtle",
    cyan: "bg-cyan-950/40 text-cyan-300 border-cyan-800/60 shadow-[0_0_10px_-3px_rgba(6,182,212,0.2)]",
    emerald: "bg-emerald-950/40 text-emerald-300 border-emerald-800/60 shadow-[0_0_10px_-3px_rgba(16,185,129,0.2)]",
    outline: "bg-transparent text-slate-400 border-border-subtle",
    mono: "font-mono bg-slate-900/80 text-slate-300 border-slate-800 tracking-wider",
  };

  const sizeStyles = {
    sm: "text-xs px-2.5 py-0.5",
    md: "text-sm px-3 py-1",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-medium rounded-md border transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
}
