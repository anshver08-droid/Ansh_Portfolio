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
        "mb-12 sm:mb-16",
        align === "center" ? "text-center mx-auto max-w-4xl" : "max-w-4xl",
        className
      )}
    >
      {/* Top Editorial Index & Tag */}
      <div
        className={cn(
          "flex items-center gap-3 mb-3 text-xs tracking-widest uppercase font-mono text-zinc-400 font-semibold",
          align === "center" ? "justify-center" : "justify-start"
        )}
      >
        {number && <span className="text-accent">{number} //</span>}
        {badge && (
          <span className="px-2 py-0.5 rounded border border-white/10 bg-surface-100 text-zinc-300 text-[10px]">
            {badge}
          </span>
        )}
        <div className="w-8 hairline-h hidden sm:block opacity-40" />
      </div>

      {/* Massive Editorial Display Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase leading-[1.08]">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-xs sm:text-sm lg:text-base text-zinc-400 font-mono leading-relaxed max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
