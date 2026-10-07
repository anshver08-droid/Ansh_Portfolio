import type { Metadata } from "next";
import React from "react";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/data/projectsData";
import { CaseStudyLayout } from "@/components/projects/CaseStudyLayout";

export const metadata: Metadata = {
  title: "TableKeeper — Transactional Reservation Engine & API Case Study",
  description:
    "Deep technical case study of TableKeeper: a TypeScript/Fastify JSON API backed by PostgreSQL, engineered with exclusion constraints to eliminate double-booking.",
};

export default function TableKeeperCaseStudyPage() {
  const project = PROJECTS.find((p) => p.slug === "tablekeeper");

  if (!project) {
    notFound();
  }

  return <CaseStudyLayout project={project} />;
}
