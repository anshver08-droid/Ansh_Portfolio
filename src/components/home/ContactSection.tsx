"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Mail, Linkedin, Github, Phone, MapPin, Copy, Check, ArrowUpRight, Send, MessageSquare } from "lucide-react";

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
          number="09"
          badge="GET IN TOUCH"
          title="Connect for Opportunities & Collaboration"
          subtitle="Open for Software Engineering internships, AI/ML roles, backend development, and freelance technical collaborations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Interactive Inquiry Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl border border-border-subtle bg-slate-900/40 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-border-subtle">
              <h3 className="text-base sm:text-lg font-bold text-slate-100 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                <span>Send a Direct Message</span>
              </h3>
              <span className="text-[10px] font-mono text-cyan-400">
                Direct Client Mailto
              </span>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="font-mono text-slate-300 block">
                    Your Name
                  </label>
                  <input
                    id="name"
                    required
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Hiring Manager / Founder"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-border-subtle text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-400 font-sans"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="font-mono text-slate-300 block">
                    Your Email
                  </label>
                  <input
                    id="email"
                    required
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="e.g. recruiter@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-border-subtle text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-400 font-sans"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="font-mono text-slate-300 block">
                  Inquiry Purpose
                </label>
                <select
                  id="subject"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-border-subtle text-slate-200 focus:outline-none focus:border-cyan-400 font-sans"
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
                <label htmlFor="message" className="font-mono text-slate-300 block">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Share details regarding the role, tech stack, or problem statement..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-border-subtle text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-400 font-sans resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all shadow-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Launch Email Client</span>
              </button>
            </form>
          </div>

          {/* Contact Details & Channels Column */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl border border-border-subtle bg-slate-900/40 space-y-5">
            <h3 className="text-sm font-bold text-slate-100 font-mono uppercase tracking-wider pb-3 border-b border-border-subtle">
              Verified Contact Information
            </h3>

            <div className="space-y-3 text-xs">
              {/* Email with copy */}
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <div>
                    <span className="text-slate-400 text-[10px] block font-mono">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="font-mono text-slate-200 hover:text-cyan-300 font-medium"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                  aria-label="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/40 text-slate-200 hover:text-cyan-300 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <div>
                    <span className="font-semibold block">LinkedIn Profile</span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      linkedin.com/in/ansh-verma-380264398
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400" />
              </a>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/40 text-slate-200 hover:text-cyan-300 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <div>
                    <span className="font-semibold block">GitHub Profile</span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      github.com/anshver08-droid
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400" />
              </a>

              {/* Phone */}
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 text-slate-200 flex items-center gap-3">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <div>
                  <span className="text-slate-400 text-[10px] block font-mono">
                    Phone Contact
                  </span>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="font-mono text-slate-200 hover:text-cyan-300 font-medium"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 text-slate-200 flex items-center gap-3">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <div>
                  <span className="text-slate-400 text-[10px] block font-mono">
                    Location
                  </span>
                  <span className="text-slate-200">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/90 border border-border-subtle text-[11px] font-mono text-emerald-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Direct Communication · Response within 24 Hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
