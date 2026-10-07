"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Mail, Linkedin, Github, Phone, MapPin, Copy, Check, ArrowRight, ArrowUpRight, Send, MessageSquare } from "lucide-react";

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "Software Engineering Internship / Role Opportunity",
    message: "",
  });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      formState.subject
    )}&body=${encodeURIComponent(
      `From: ${formState.name} (${formState.email})\n\nMessage:\n${formState.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="10"
          badge="GET IN TOUCH"
          title="Connect for Opportunities & Collaboration"
          subtitle="Open for Software Engineering internships, AI/ML roles, backend development, and freelance technical collaborations."
        />

        {/* Reference Image Signature Contact Strip */}
        <div className="p-6 sm:p-8 rounded-3xl border border-white/10 bg-surface-100/30 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-card">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-xs font-mono text-zinc-400 w-full md:w-auto">
            <div className="flex items-center gap-2">
              <span className="text-zinc-500 uppercase tracking-wider">EMAIL</span>
              <div className="w-12 sm:w-20 hairline-h" />
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-white hover:text-accent transition-colors font-semibold"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>

            <div className="w-8 h-8 rounded-full border border-white/20 bg-black flex items-center justify-center text-accent flex-shrink-0">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>

            <div className="flex items-center gap-2">
              <div className="w-8 sm:w-16 hairline-h" />
              <span className="text-zinc-500 uppercase tracking-wider">TEL</span>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="text-white hover:text-accent transition-colors font-semibold"
              >
                {PERSONAL_INFO.phone}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={handleCopyEmail}
              className="px-3.5 py-1.5 rounded-lg text-xs font-mono bg-black border border-white/10 text-zinc-300 hover:text-white hover:border-white/20 transition-all flex items-center gap-1.5"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-accent" />
                  <span className="text-accent font-semibold">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Message Form */}
          <div className="lg:col-span-7 p-7 sm:p-9 rounded-3xl border border-white/10 bg-surface-100/40 space-y-6 shadow-card">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-tight flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-accent" />
                <span>Send a Direct Inquiry</span>
              </h3>
              <span className="text-[10px] font-mono text-zinc-500 uppercase">
                MAILTO CLIENT
              </span>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4 text-xs font-mono">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-zinc-400 uppercase tracking-wider block text-[11px]">
                    YOUR NAME
                  </label>
                  <input
                    id="name"
                    required
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Hiring Manager / Founder"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-accent font-sans"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-zinc-400 uppercase tracking-wider block text-[11px]">
                    YOUR EMAIL
                  </label>
                  <input
                    id="email"
                    required
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="e.g. recruiter@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-accent font-sans"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-zinc-400 uppercase tracking-wider block text-[11px]">
                  INQUIRY DOMAIN
                </label>
                <select
                  id="subject"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-white/10 text-white focus:outline-none focus:border-accent font-sans"
                >
                  <option value="Software Engineering Internship Opportunity">
                    Software Engineering Internship Opportunity
                  </option>
                  <option value="AI / Generative AI Role Discussion">
                    AI / Generative AI Role Discussion
                  </option>
                  <option value="Backend / Full-Stack Position">
                    Backend / Full-Stack Position
                  </option>
                  <option value="Freelance Software Development Project">
                    Freelance Software Development Project
                  </option>
                  <option value="General Technical Inquiry">
                    General Technical Inquiry
                  </option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-zinc-400 uppercase tracking-wider block text-[11px]">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Share details regarding the role, tech stack, or problem statement..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-accent font-sans resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-accent text-black hover:bg-[#05f5a5] transition-all shadow-[0_0_20px_-4px_rgba(0,229,153,0.5)]"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Launch Email Client</span>
              </button>
            </form>
          </div>

          {/* Contact Details & Channels Column */}
          <div className="lg:col-span-5 p-7 sm:p-9 rounded-3xl border border-white/10 bg-surface-100/40 space-y-6 shadow-card">
            <h3 className="text-xs font-bold text-white font-mono uppercase tracking-widest pb-3 border-b border-white/10">
              VERIFIED CHANNELS
            </h3>

            <div className="space-y-3 text-xs font-mono">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-black border border-white/10 hover:border-accent/40 text-white hover:text-accent transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-4 h-4 text-accent" />
                  <div>
                    <span className="font-bold block uppercase tracking-wider">LINKEDIN</span>
                    <span className="text-[11px] text-zinc-400 font-mono">
                      in/ansh-verma-380264398
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-accent" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-black border border-white/10 hover:border-accent/40 text-white hover:text-accent transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-4 h-4 text-accent" />
                  <div>
                    <span className="font-bold block uppercase tracking-wider">GITHUB</span>
                    <span className="text-[11px] text-zinc-400 font-mono">
                      github.com/anshver08-droid
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-accent" />
              </a>

              <div className="p-3.5 rounded-xl bg-black border border-white/10 text-white flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <div>
                  <span className="text-zinc-500 text-[10px] block uppercase tracking-wider">
                    PHONE CONTACT
                  </span>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-zinc-200 hover:text-accent"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-black border border-white/10 text-white flex items-center gap-3">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                <div>
                  <span className="text-zinc-500 text-[10px] block uppercase tracking-wider">
                    LOCATION
                  </span>
                  <span className="text-zinc-200">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-black/60 border border-white/5 text-[11px] font-mono text-accent flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>Response Window: Typically within 24 hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
