import React from "react";
import { CERTIFICATIONS } from "@/data/portfolioData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Award, CheckCircle2, ShieldCheck, Calendar, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 lg:py-28 border-t border-border-subtle bg-slate-950/40 relative">
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
              className="p-6 rounded-2xl border border-border-subtle bg-slate-900/40 hover:bg-slate-900/70 hover:border-slate-700 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-cyan-950/50 border border-cyan-800/40 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <Award className="w-4 h-4" />
                  </div>
                  <Badge variant="mono" size="sm" className="text-[10px]">
                    {cert.year}
                  </Badge>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-slate-100 group-hover:text-cyan-300 transition-colors mb-2 leading-snug">
                  {cert.title}
                </h3>

                <p className="text-xs text-slate-400 font-medium">
                  Issuer: <span className="text-slate-200">{cert.issuer}</span>
                </p>

                {cert.credentialId && (
                  <div className="mt-3 p-2 rounded-lg bg-black/40 border border-slate-800 font-mono text-[10px] text-slate-400">
                    ID: {cert.credentialId}
                  </div>
                )}
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span className="flex items-center gap-1.5 text-emerald-400/90">
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
