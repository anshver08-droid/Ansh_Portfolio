export interface PersonalInfo {
  name: string;
  headline: string;
  subheadline: string;
  summary: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  college: string;
  degree: string;
  specialization: string;
  duration: string;
  cgpa: string;
  resumePdfUrl: string;
  targetRoles: string[];
}

export const PERSONAL_INFO: PersonalInfo = {
  name: "Ansh Verma",
  headline: "CSE (AI/ML) Student · Software Engineering · AI / Generative AI · Backend & Full-Stack",
  subheadline:
    "Building intelligent software systems across AI, backend, and full-stack development with a strong focus on verification, transactional correctness, and responsible AI.",
  summary:
    "B.Tech Computer Science and Engineering (AI/ML) student and early-career software engineer building across frontend, backend, and AI: TypeScript, React, and Next.js interfaces, Fastify and PostgreSQL REST APIs, and Gemini-powered Generative AI applications. Hands-on experience in testing, verification, debugging, and Docker through hackathon projects, with Python and Git/GitHub fundamentals.",
  location: "Ghaziabad, Uttar Pradesh, India",
  email: "anshver08@gmail.com",
  phone: "+91 9555994648",
  linkedin: "https://www.linkedin.com/in/ansh-verma-380264398",
  github: "https://github.com/anshver08-droid",
  college: "ABES Engineering College, Ghaziabad, Uttar Pradesh",
  degree: "B.Tech, Computer Science and Engineering",
  specialization: "Artificial Intelligence & Machine Learning",
  duration: "2025–2029",
  cgpa: "7.16",
  resumePdfUrl: "/Ansh_Verma_Resume.pdf",
  targetRoles: [
    "Software Engineering Internships",
    "Software Developer Roles",
    "AI / ML & Generative AI Roles",
    "Backend Development",
    "Full-Stack Development",
    "Freelance Software Development",
  ],
};

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  credentialId?: string;
}

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "Gen AI NASSCOM",
    issuer: "SFI",
    year: "2026",
  },
  {
    title: "Getting Started with Artificial Intelligence",
    issuer: "IBM SkillsBuild",
    year: "2026",
  },
  {
    title: "Lab: Troubleshoot Your Code Using IBM Bob",
    issuer: "IBM SkillsBuild",
    year: "2026",
  },
  {
    title: "Adobe University Hackathon 2026, Round 1 Online Assessment (MCQ, Coding)",
    issuer: "Adobe",
    year: "2026",
  },
  {
    title: "HTML (ID: 96148998) and CSS (ID: 9595138)",
    issuer: "Simplilearn",
    year: "2025",
    credentialId: "HTML: 96148998 | CSS: 9595138",
  },
  {
    title: "AI-ML Project Learning Workshop",
    issuer: "APPWARS Technologies (ABESEC)",
    year: "2026",
  },
];

export interface AchievementItem {
  title: string;
  badge: string;
  detail: string;
  year: string;
  highlight?: string;
}

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    title: "Internship Common Aptitude Test (iCAT) 2026",
    badge: "AIR #835",
    detail: "Scored 63 with All India Rank #835, achieving official qualification for engineering internships.",
    year: "2026",
    highlight: "Score: 63 | Rank: #835",
  },
  {
    title: "IBM Bob 2.0 Hackathon",
    badge: "Project Contributor",
    detail: "Participated and contributed to the testing and verification architecture of DevPartner AI, implementing invariant harnesses and adversarial counterexample panels.",
    year: "2026",
    highlight: "Testing & Verification Layer",
  },
  {
    title: "Adobe University Hackathon 2026 (Round 1)",
    badge: "Qualifier",
    detail: "Completed Round 1 Online Assessment covering algorithmic coding, data structures, and computer science concepts.",
    year: "2026",
    highlight: "Round 1 Online Assessment",
  },
  {
    title: "HealthBuddy AI Round 2 Prototype",
    badge: "Hackathon Round 2",
    detail: "Built the Round 2 prototype for an AI pre-consultation assistant with multilingual support and doctor review workflow.",
    year: "2026",
    highlight: "Round 2 Prototype Built",
  },
  {
    title: "DECODE SIH 2026 (OSCode)",
    badge: "Hackathon Participant",
    detail: "Engaged in open-source collaborative problem-solving and rapid hackathon engineering.",
    year: "2026",
    highlight: "OSCode SIH 2026",
  },
];

export interface EngineeringPrinciple {
  number: string;
  title: string;
  statement: string;
  application: string;
}

export const ENGINEERING_PRINCIPLES: EngineeringPrinciple[] = [
  {
    number: "01",
    title: "Correctness Before Complexity",
    statement: "A reservation system or state engine must be mathematically sound before optimizing throughput.",
    application: "Demonstrated in TableKeeper via PostgreSQL transactional commits and exclusion constraints.",
  },
  {
    number: "02",
    title: "Security & Invariants by Design",
    statement: "Security boundaries, validation schemas, and rate limits should be architectural foundations, never afterthoughts.",
    application: "Enforced with Fastify schema validation, token verification, and strict cryptographic/token invariants.",
  },
  {
    number: "03",
    title: "Verify AI Output Rigorously",
    statement: "AI-generated artifacts must be subjected to formal invariants, mutation testing, and adversarial review before merging.",
    application: "Implemented in DevPartner AI through invariant harnesses, mutation tests, and human approval gates.",
  },
  {
    number: "04",
    title: "Database Constraints Protect Ground Truth",
    statement: "Application code can race; PostgreSQL exclusion constraints guarantee overlap prevention at the relational engine level.",
    application: "Configured btree_gist exclusion constraints to block overlapping two-hour reservations.",
  },
  {
    number: "05",
    title: "Explicit Failure & Auditable Telemetry",
    statement: "Silent fallbacks mask catastrophic errors. Good systems make failure modes visible, typed, and auditable.",
    application: "Every API endpoint responds with predictable schemas, clear status codes, and auditable logging.",
  },
  {
    number: "06",
    title: "Human Oversight Where Automation Has Impact",
    statement: "In high-stakes domains like healthcare triage, AI assists with structuring data while qualified humans review.",
    application: "Engineered into HealthBuddy AI: zero diagnosis or prescription, with a full doctor review console.",
  },
];

export interface FreelanceService {
  title: string;
  description: string;
  deliverables: string[];
  techStack: string[];
}

export const FREELANCE_SERVICES: FreelanceService[] = [
  {
    title: "Full-Stack Web Applications",
    description: "End-to-end web applications built with Next.js, React, and TypeScript with responsive, accessible, and high-performance UI.",
    deliverables: ["Modern Responsive UI/UX", "Secure REST APIs", "Database Integration", "Clean Component Architecture"],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend & API Development",
    description: "Robust, transactional APIs engineered with Fastify/Node.js, PostgreSQL/MongoDB, with schema validation, rate limiting, and idempotency.",
    deliverables: ["Clean RESTful Endpoints", "Transactional Integrity", "Authentication & Idempotency", "Dockerized Setup"],
    techStack: ["Node.js", "Fastify", "PostgreSQL", "Docker Compose"],
  },
  {
    title: "AI & GenAI Integration",
    description: "Integrating LLM capabilities (Gemini API) into practical applications with strict prompt engineering, validation, and speech UX.",
    deliverables: ["Structured Clinical/Data Extraction", "Adaptive Questioning Flow", "Voice & Multimodal UX", "Human-in-the-Loop Controls"],
    techStack: ["Google Gemini API", "Web Speech API", "Prompt Invariants", "TypeScript"],
  },
  {
    title: "Verification, Testing & Debugging",
    description: "Setting up test harnesses, integration tests, invariant checks, and debugging backend and frontend state anomalies.",
    deliverables: ["PostgreSQL Integration Tests", "Invariant Checking Harnesses", "Mutation & Regression Testing", "Code Reviews"],
    techStack: ["TypeScript", "Integration Testing", "Docker", "Git/GitHub"],
  },
];

export interface NavigationLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavigationLink[] = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Certifications", href: "/#certifications" },
  { label: "Achievements", href: "/#achievements" },
  { label: "Contact", href: "/#contact" },
  { label: "Resume", href: "/resume" },
];
