import type { Metadata } from "next";
import React from "react";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/data/projectsData";
import { CaseStudyLayout } from "@/components/projects/CaseStudyLayout";

export const metadata: Metadata = {
  title: "HealthBuddy AI — Responsible Clinical Intake Assistant Case Study",
  description:
    "Deep technical case study of HealthBuddy AI: an AI-powered multilingual clinical pre-consultation intake system with strict non-diagnostic boundaries.",
};

export default function HealthBuddyAiCaseStudyPage() {
  const project = PROJECTS.find((p) => p.slug === "healthbuddy-ai");

  if (!project) {
    notFound();
  }

  return <CaseStudyLayout project={project} />;
}
