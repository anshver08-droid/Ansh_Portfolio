import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  number?: string;
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  number,
  badge,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center gap-2 mb-3 text-xs tracking-wider uppercase font-mono text-cyan-400/90 font-semibold",
          align === "center" ? "justify-center" : "justify-start"
        )}
      >
        {number && <span className="text-slate-500">{number} //</span>}
        {badge && (
          <span className="px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/40 text-cyan-300">
            {badge}
          </span>
        )}
      </div>

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-100">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
