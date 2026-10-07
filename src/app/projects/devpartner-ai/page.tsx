import type { Metadata } from "next";
import React from "react";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/data/projectsData";
import { CaseStudyLayout } from "@/components/projects/CaseStudyLayout";

export const metadata: Metadata = {
  title: "DevPartner AI — Verified AI Developer Workflow Case Study",
  description:
    "Deep technical case study of DevPartner AI: an AI-assisted developer pipeline subjecting LLM code proposals to invariant analysis, mutation testing, and human gates.",
};

export default function DevPartnerAiCaseStudyPage() {
  const project = PROJECTS.find((p) => p.slug === "devpartner-ai");

  if (!project) {
    notFound();
  }

  return <CaseStudyLayout project={project} />;
}
