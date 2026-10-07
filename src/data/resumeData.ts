export interface ResumeData {
  name: string;
  title: string;
  contact: {
    location: string;
    phone: string;
    email: string;
    linkedin: string;
    github: string;
  };
  summary: string;
  education: {
    degree: string;
    institution: string;
    location: string;
    duration: string;
    cgpa: string;
    details: string[];
  }[];
  skills: {
    category: string;
    items: string;
  }[];
  projects: {
    name: string;
    context: string;
    tech: string;
    github: string;
    liveUrl?: string;
    bullets: string[];
  }[];
  certifications: {
    name: string;
    issuer: string;
    year: string;
    credentialId?: string;
  }[];
  achievements: {
    title: string;
    detail: string;
  }[];
}

export const RESUME_DATA: ResumeData = {
  name: "ANSH VERMA",
  title: "CSE (AI/ML) STUDENT | Software Engineering | AI / Generative AI | Backend & Full-Stack Development",
  contact: {
    location: "Ghaziabad, Uttar Pradesh, India",
    phone: "+91 9555994648",
    email: "anshver08@gmail.com",
    linkedin: "https://www.linkedin.com/in/ansh-verma-380264398",
    github: "https://github.com/anshver08-droid",
  },
  summary:
    "B.Tech Computer Science and Engineering (AI/ML) student and early-career software engineer building across frontend, backend, and AI: TypeScript, React, and Next.js interfaces, Fastify and PostgreSQL REST APIs, and Gemini-powered Generative AI applications. Hands-on experience in testing, verification, debugging, and Docker through hackathon projects, with Python and Git/GitHub fundamentals.",
  education: [
    {
      degree: "B.Tech, Computer Science and Engineering (Artificial Intelligence & Machine Learning)",
      institution: "ABES Engineering College",
      location: "Ghaziabad, Uttar Pradesh",
      duration: "2025–2029",
      cgpa: "7.16",
      details: [
        "Specialization in Artificial Intelligence and Machine Learning.",
        "Cumulative Grade Point Average (CGPA): 7.16",
      ],
    },
  ],
  skills: [
    {
      category: "Programming",
      items: "Python, TypeScript, JavaScript (ES6+), C++, SQL",
    },
    {
      category: "Backend & Systems",
      items: "Node.js, Fastify, RESTful APIs, PostgreSQL Transactions, Rate Limiting, Idempotency, Authentication",
    },
    {
      category: "Databases",
      items: "PostgreSQL (Exclusion Constraints, GiST Indexing), MongoDB, SQL Schema Design",
    },
    {
      category: "Frontend Development",
      items: "React, Next.js (App Router), Vite, Tailwind CSS, Semantic HTML5, CSS3, Responsive Design, Accessibility",
    },
    {
      category: "AI & Developer Tooling",
      items: "Machine Learning, Generative AI, Google Gemini API, Prompt Engineering, Web Speech API, Mutation Testing, Git, GitHub, Docker, Docker Compose",
    },
    {
      category: "Core Computer Science",
      items: "Data Structures & Algorithms, System Invariants, Relational Concurrency Control, Integration Testing, Verification, Debugging",
    },
  ],
  projects: [
    {
      name: "DevPartner AI – AI-Powered Developer Workflow",
      context: "IBM Bob 2.0 Hackathon",
      tech: "React, TypeScript, Vite, Node.js, Git/GitHub, AI-Assisted Development",
      github: "https://github.com/anshver08-droid/DevPartnerAI_TeamRookies.git",
      liveUrl: "https://dev-partner-ai-team-rookies.vercel.app",
      bullets: [
        "Contributed to the testing and verification layer of a team-built workflow that makes code changes safer through impact analysis, human approval, isolated patches, and an accept/rollback decision.",
        "Implemented invariant-checking and verification logic in TypeScript (harness.ts) to validate proposed code changes against identified invariants.",
        "Built React components (InvariantPanel, VerificationPanel, CounterexamplePanel) that display invariants, verification results, and adversarial counterexamples.",
        "Supported mutation-testing and adversarial-testing workflows and debugged verification behavior so failing cases were visible to reviewers.",
      ],
    },
    {
      name: "HealthBuddy AI – AI Pre-Consultation Assistant",
      context: "Hackathon Round 2 Prototype",
      tech: "Next.js 16, React 19, TypeScript, Tailwind CSS, Gemini API, Web Speech API, REST APIs",
      github: "https://github.com/anshver08-droid/HealthBuddy-AI.git",
      bullets: [
        "Developed a human-in-the-loop assistant that turns natural patient conversations into structured case sheets and doctor-ready summaries, without diagnosing or prescribing.",
        "Integrated the Google Gemini API through Next.js REST API routes for adaptive questioning in English, Hindi, and Hinglish, with an Offline Adaptive Clinical Engine for demo mode.",
        "Implemented live clinical information extraction, completeness checking, and triage/red-flag detection, with voice and text input via the browser Web Speech API.",
        "Built a doctor review console with editing, notes, digital verification, and audit-ready transcripts across the onboarding-to-summary flow.",
      ],
    },
    {
      name: "TableKeeper – Restaurant Reservation Backend API",
      context: "Systems & Backend Project",
      tech: "TypeScript, Fastify, PostgreSQL, Node.js, REST API, Docker, Docker Compose",
      github: "https://github.com/anshver08-droid/Tablekeeper.git",
      bullets: [
        "Engineered a Fastify and PostgreSQL JSON REST API in which a booking succeeds only when its database transaction commits.",
        "Enforced reservation consistency with PostgreSQL exclusion constraints, locking, and transactional commits to block conflicting confirmed two-hour reservations.",
        "Implemented restaurant-scoped idempotent requests, signed email-token customer verification (SMTP), confirmation-code authorization, and rate limiting.",
        "Validated with PostgreSQL 16 integration tests, migration upgrade tests, and TypeScript type checking; packaged with Docker Compose.",
      ],
    },
  ],
  certifications: [
    { name: "Gen AI NASSCOM", issuer: "SFI", year: "2026" },
    { name: "Getting Started with Artificial Intelligence", issuer: "IBM SkillsBuild", year: "2026" },
    { name: "Lab: Troubleshoot Your Code Using IBM Bob", issuer: "IBM SkillsBuild", year: "2026" },
    { name: "Adobe University Hackathon 2026, Round 1 Online Assessment (MCQ, Coding)", issuer: "Adobe", year: "2026" },
    { name: "HTML and CSS", issuer: "Simplilearn", year: "2025", credentialId: "HTML: 96148998 | CSS: 9595138" },
    { name: "AI-ML Project Learning Workshop", issuer: "APPWARS Technologies (ABESEC)", year: "2026" },
  ],
  achievements: [
    {
      title: "IBM Bob 2.0 Hackathon",
      detail: "Participated and contributed testing and verification to DevPartner AI.",
    },
    {
      title: "Internship Common Aptitude Test (iCAT), 2026",
      detail: "Scored 63, All India Rank #835, eligible for internship.",
    },
    {
      title: "Adobe University Hackathon 2026 & DECODE SIH 2026 (OSCode)",
      detail: "Participated in Adobe University Hackathon Round 1 and DECODE SIH 2026 (OSCode); built the HealthBuddy AI Round 2 prototype.",
    },
  ],
};
