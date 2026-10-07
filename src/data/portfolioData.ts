export interface PersonalInfo {
  name: string;
  headline: string;
  subheadline: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  currentStatus: string;
  college: string;
  degree: string;
  specialization: string;
  targetRoles: string[];
}

export const PERSONAL_INFO: PersonalInfo = {
  name: "Ansh Verma",
  headline: "Software Engineer in Progress · Full-Stack · AI/GenAI · Backend",
  subheadline:
    "Building reliable software systems, AI-powered developer tools, and backend APIs with transactional correctness and responsible engineering.",
  location: "Ghaziabad, India",
  email: "anshver08@gmail.com",
  phone: "9555994648",
  linkedin: "https://www.linkedin.com/in/ansh-verma-380264398",
  github: "https://github.com/anshver08-droid",
  currentStatus: "B.Tech Student & Aspiring Software Engineer",
  college: "ABES Engineering College",
  degree: "B.Tech — Computer Science & Engineering",
  specialization: "Artificial Intelligence & Machine Learning (AIML)",
  targetRoles: [
    "Software Engineering",
    "Full-Stack Development",
    "Backend Engineering",
    "AI / GenAI Engineering",
    "Freelance Software Development",
  ],
};

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
    application: "Demonstrated in TableKeeper via PostgreSQL transactional commits and advisory availability distinction.",
  },
  {
    number: "02",
    title: "Security & Invariants by Design",
    statement: "Security boundaries, validation schemas, and rate limits should be architectural foundations, never afterthoughts.",
    application: "Enforced with Fastify schema validation, input sanitization, and strict cryptographic/token invariants.",
  },
  {
    number: "03",
    title: "Verify AI Output Rigorously",
    statement: "AI-generated artifacts must be subjected to formal invariants, mutation testing, and adversarial review before merging.",
    application: "Implemented in DevPartner AI through human-in-the-loop gates and isolated patch verification.",
  },
  {
    number: "04",
    title: "Database Constraints Protect Ground Truth",
    statement: "Application code can fail or race; database exclusion constraints guarantee overlap prevention at the disk level.",
    application: "Used PostgreSQL exclusion constraints (btree_gist) to eliminate double-booking race conditions.",
  },
  {
    number: "05",
    title: "Explicit Failure & Auditable Telemetry",
    statement: "Silent fallbacks mask catastrophic errors. Good systems make failure modes visible, typed, and auditable.",
    application: "Every API endpoint responds with predictable RFC 7807/standardized error payloads and tracing.",
  },
  {
    number: "06",
    title: "Human Oversight Where Automation Has Impact",
    statement: "In high-stakes domains like healthcare triage or production deployments, AI informs; qualified humans decide.",
    application: "Engineered into HealthBuddy AI: zero fabrication, unconfirmed fields marked, strictly pre-consultation summary for doctor review.",
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
    description: "End-to-end web applications built with Next.js, React, and TypeScript with responsive, accessible, and fast UI.",
    deliverables: ["Modern Responsive UI/UX", "Secure REST APIs", "Database Integration", "Clean Architecture"],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend & API Development",
    description: "Robust, transactional APIs engineered with Fastify/Node.js, PostgreSQL/MongoDB, with schema validation and rate limiting.",
    deliverables: ["Clean RESTful Endpoints", "Transactional Integrity", "Authentication & RBAC", "Automated Tests"],
    techStack: ["Node.js", "Fastify", "PostgreSQL", "Docker"],
  },
  {
    title: "AI & GenAI Integration",
    description: "Integrating LLM capabilities (Gemini, OpenAI APIs) into existing workflows with strict prompt engineering and guardrails.",
    deliverables: ["Structured Data Extraction", "Pre-processing & Validation", "Voice & Multimodal UX", "Safety Filters"],
    techStack: ["Google Gemini", "Web Speech API", "Prompt Invariants", "TypeScript"],
  },
  {
    title: "Technical MVPs & Prototypes",
    description: "Fast-to-market minimum viable products architected cleanly so early startups can iterate without incurring heavy technical debt.",
    deliverables: ["Rapid Working Prototype", "Defensible Codebase", "Deployment Ready", "Documentation & Walkthrough"],
    techStack: ["Full-Stack Stack", "Vercel / Docker", "PostgreSQL"],
  },
];

export interface NavigationLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

export const NAV_LINKS: NavigationLink[] = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Engineering Mindset", href: "/#principles" },
  { label: "Education", href: "/#education" },
  { label: "Freelance", href: "/#freelance" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/#contact" },
];
