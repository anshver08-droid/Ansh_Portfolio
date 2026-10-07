"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Mail, Linkedin, Github, Phone, MapPin, Copy, Check, ArrowUpRight, MessageSquare } from "lucide-react";

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="09"
          badge="GET IN TOUCH"
          title="Have a Problem Worth Solving?"
          subtitle="Whether you're hiring for a software engineering position, building a product, or exploring technical collaboration, I'd be glad to connect."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Direct Communication Card */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl border border-border-subtle bg-slate-900/40 space-y-6">
            <h3 className="text-lg font-bold text-slate-100">
              Direct Engineering Inquiries
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              I am responsive via email and LinkedIn for software engineering roles, technical internships, and selected freelance contracts. My direct email client link is pre-configured below:
            </p>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-cyan-950/50 border border-cyan-800/40 text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-mono">
                    Direct Email Address
                  </span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}?subject=Software%20Engineering%20Inquiry%20for%20Ansh%20Verma`}
                    className="text-sm sm:text-base font-bold text-slate-100 hover:text-cyan-400 transition-colors font-mono"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-2 rounded-lg text-xs font-mono bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition-colors flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=Software%20Engineering%20Inquiry%20for%20Ansh%20Verma`}
                  className="px-4 py-2 rounded-lg text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                >
                  <span>Open Mail</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Quick Email Templates */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                Quick Inquiries:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=Software%20Engineering%20Role%20Opportunity&body=Hi%20Ansh,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20engineering%20opportunity.`}
                  className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/40 text-xs text-slate-300 hover:text-cyan-300 transition-colors flex items-center justify-between group"
                >
                  <span>Software Engineering Opportunity</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400" />
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=Freelance%20Project%20Inquiry&body=Hi%20Ansh,%20I%20have%20a%20full-stack/backend/AI%20project%20and%20would%20like%20to%20collaborate.`}
                  className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/40 text-xs text-slate-300 hover:text-cyan-300 transition-colors flex items-center justify-between group"
                >
                  <span>Freelance Project Discussion</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Details & Channels Column */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl border border-border-subtle bg-slate-900/40 space-y-5">
            <h3 className="text-sm font-bold text-slate-100 font-mono uppercase tracking-wider pb-3 border-b border-border-subtle">
              Verified Contact Channels
            </h3>

            <div className="space-y-3 text-xs">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/40 text-slate-200 hover:text-cyan-300 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <div>
                    <span className="font-semibold block">LinkedIn Profile</span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      in/ansh-verma-380264398
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/40 text-slate-200 hover:text-cyan-300 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-4 h-4 text-cyan-400" />
                  <div>
                    <span className="font-semibold block">GitHub Profile</span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      github.com/anshver08-droid
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400" />
              </a>

              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 text-slate-200 flex items-center gap-3">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <div>
                  <span className="text-slate-400 text-[11px] block font-mono">
                    Direct Phone Line
                  </span>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="font-mono text-slate-200 hover:text-cyan-300"
                  >
                    +91 {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 text-slate-200 flex items-center gap-3">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <div>
                  <span className="text-slate-400 text-[11px] block font-mono">
                    Current Location
                  </span>
                  <span className="text-slate-200">
                    {PERSONAL_INFO.location} (Open to Hybrid & Remote)
                  </span>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/90 border border-border-subtle text-[11px] font-mono text-emerald-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Response Window: Typically within 24 hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
