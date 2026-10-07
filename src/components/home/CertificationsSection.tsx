import React from "react";
import { CERTIFICATIONS } from "@/data/portfolioData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Award, CheckCircle2 } from "lucide-react";

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 lg:py-28 border-t border-white/10 bg-black/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="05"
          badge="VERIFIED CREDENTIALS"
          title="Technical Certifications & Training"
          subtitle="Formal industry certifications and workshops across Generative AI, cloud tooling, troubleshooting, and web fundamentals."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl border border-white/10 bg-surface-100/40 hover:bg-surface-100/70 hover:border-white/20 transition-all flex flex-col justify-between group shadow-card"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-black/60 border border-white/10 text-accent group-hover:text-[#05f5a5] transition-colors">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded border border-white/10 bg-black/60 text-zinc-300">
                    {cert.year}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-accent transition-colors mb-2 leading-snug uppercase tracking-tight">
                  {cert.title}
                </h3>

                <p className="text-xs text-zinc-400 font-mono">
                  Issuer: <span className="text-zinc-200">{cert.issuer}</span>
                </p>

                {cert.credentialId && (
                  <div className="mt-3 p-2 rounded-lg bg-black/60 border border-white/5 font-mono text-[10px] text-zinc-500">
                    ID: {cert.credentialId}
                  </div>
                )}
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span className="flex items-center gap-1.5 text-accent">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Credential</span>
                </span>
                <span>{cert.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
