import React from "react";
import { Hero } from "@/components/home/Hero";
import { CapabilitiesStrip } from "@/components/home/CapabilitiesStrip";
import { FeaturedProjectsSection } from "@/components/home/FeaturedProjectsSection";
import { EngineeringPrinciples } from "@/components/home/EngineeringPrinciples";
import { SkillsSection } from "@/components/home/SkillsSection";
import { AboutSection } from "@/components/home/AboutSection";
import { AchievementsSection } from "@/components/home/AchievementsSection";
import { EducationSection } from "@/components/home/EducationSection";
import { FreelanceSection } from "@/components/home/FreelanceSection";
import { ResumeCtaSection } from "@/components/home/ResumeCtaSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <div className="flex flex-col space-y-0">
      {/* 01. Hero */}
      <Hero />

      {/* 02. What I Build / Capabilities Strip */}
      <CapabilitiesStrip />

      {/* 03. Featured Projects & Case Studies */}
      <FeaturedProjectsSection />

      {/* 04. Engineering Thinking ("How I Think About Software") */}
      <EngineeringPrinciples />

      {/* 05. Technical Skills Matrix */}
      <SkillsSection />

      {/* 06. Professional About */}
      <AboutSection />

      {/* 07. Hackathons & Leadership Achievements */}
      <AchievementsSection />

      {/* 08. Education Curriculum & Certifications */}
      <EducationSection />

      {/* 09. Freelance Technical Services */}
      <FreelanceSection />

      {/* 10. Recruiter & ATS Resume Callout */}
      <ResumeCtaSection />

      {/* 11. Direct Contact & Collaboration */}
      <ContactSection />
    </div>
  );
}
