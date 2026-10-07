import React from "react";
import { Hero } from "@/components/home/Hero";
import { CapabilitiesStrip } from "@/components/home/CapabilitiesStrip";
import { AboutSection } from "@/components/home/AboutSection";
import { FeaturedProjectsSection } from "@/components/home/FeaturedProjectsSection";
import { EngineeringPrinciples } from "@/components/home/EngineeringPrinciples";
import { SkillsSection } from "@/components/home/SkillsSection";
import { CertificationsSection } from "@/components/home/CertificationsSection";
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

      {/* 02. Capabilities Strip */}
      <CapabilitiesStrip />

      {/* 03. About Section */}
      <AboutSection />

      {/* 04. Featured Projects (DevPartner AI, HealthBuddy AI, TableKeeper) */}
      <FeaturedProjectsSection />

      {/* 05. Technical Skills Matrix */}
      <SkillsSection />

      {/* 06. Technical Certifications & Workshops */}
      <CertificationsSection />

      {/* 07. Hackathons & Verified Achievements */}
      <AchievementsSection />

      {/* 08. Education Curriculum */}
      <EducationSection />

      {/* 09. Engineering Principles */}
      <EngineeringPrinciples />

      {/* 10. Freelance & Contract Services */}
      <FreelanceSection />

      {/* 11. Recruiter & ATS Resume Callout */}
      <ResumeCtaSection />

      {/* 12. Direct Contact & Collaboration */}
      <ContactSection />
    </div>
  );
}
