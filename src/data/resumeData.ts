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
    details: string[];
  }[];
  skills: {
    category: string;
    items: string;
  }[];
  projects: {
    name: string;
    role: string;
    tech: string;
    github: string;
    liveUrl?: string;
    bullets: string[];
  }[];
  experience: {
    hasVerified: boolean;
    note: string;
    placeholder?: string;
  };
  leadership: {
    title: string;
    organization: string;
    bullets: string[];
  }[];
  certifications: {
    hasVerified: boolean;
    note: string;
    placeholder: string;
  };
  achievements: {
    hasVerified: boolean;
    note: string;
    placeholder: string;
  };
}

export const RESUME_DATA: ResumeData = {
  name: "Ansh Verma",
  title: "Software Engineer | Full-Stack & Backend Systems | AI Applications",
  contact: {
    location: "Ghaziabad, India",
    phone: "+91 9555994648",
    email: "anshver08@gmail.com",
    linkedin: "https://www.linkedin.com/in/ansh-verma-380264398",
    github: "https://github.com/anshver08-droid",
  },
  summary:
    "Technically focused Computer Science & Engineering (AIML) undergraduate with practical project experience engineering transactional backend systems, reliable developer tooling, and responsible Generative AI workflows. Proficient in TypeScript, Fastify, PostgreSQL, React, and Next.js. Passionate about software correctness, ACID transactions, exclusion constraints, and engineering systems that make failure modes explicit.",
  education: [
    {
      degree: "Bachelor of Technology — Computer Science & Engineering (AI & ML)",
      institution: "ABES Engineering College",
      location: "Ghaziabad, Uttar Pradesh, India",
      duration: "Undergraduate [ADD DATES: e.g., 2022 – 2026]",
      details: [
        "Specialization in Artificial Intelligence and Machine Learning.",
        "Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, Software Engineering.",
        "Academic Standing: [ADD CURRENT CGPA]",
      ],
    },
  ],
  skills: [
    {
      category: "Languages",
      items: "C++, Python, TypeScript, JavaScript (ES6+), SQL",
    },
    {
      category: "Backend & Systems",
      items: "Node.js, Fastify, RESTful APIs, PostgreSQL Transactions, Rate Limiting, Idempotency, Authentication",
    },
    {
      category: "Databases & Storage",
      items: "PostgreSQL (Exclusion Constraints, GiST indexing), MongoDB, SQL Schema Design & Migrations",
    },
    {
      category: "Frontend Development",
      items: "React, Next.js (App Router), Tailwind CSS, Semantic HTML5, CSS3, Responsive Design, WCAG Accessibility",
    },
    {
      category: "AI & Developer Tooling",
      items: "Google Gemini API, Generative AI Prompt Engineering, Mutation Testing concepts, Web Speech API, Git, GitHub, Docker Compose",
    },
    {
      category: "Core Computer Science",
      items: "Data Structures & Algorithms, System Invariants, Relational Concurrency Control, Asynchronous Event Loop",
    },
  ],
  projects: [
    {
      name: "TableKeeper — Transactional Reservation Engine & API",
      role: "Backend Architect & Developer",
      tech: "TypeScript, Fastify, PostgreSQL, Docker Compose, SQL Migrations",
      github: "https://github.com/anshver08-droid/Tablekeeper.git",
      bullets: [
        "Architected a high-concurrency reservation backend using Fastify and PostgreSQL, separating advisory availability checks from transactional booking commits.",
        "Eliminated double-booking race conditions by implementing PostgreSQL exclusion constraints (btree_gist) on overlapping time ranges directly inside ACID transactions.",
        "Engineered idempotency token validation middleware to ensure network retries never generate duplicate reservation rows or false confirmations.",
        "Integrated granular rate limiting and email verification handshake mechanisms to prevent ghost reservation spam and denial-of-service attempts.",
        "Packaged the service with Docker Compose and wrote integration test suites simulating concurrent collisions to mathematically prove seat uniqueness.",
      ],
    },
    {
      name: "DevPartner AI — Verified AI Developer Workflow",
      role: "Team Lead & Core Engineer",
      tech: "TypeScript, React, Next.js, AST Analysis, Mutation Testing, Tailwind CSS",
      github: "https://github.com/anshver08-droid/DevPartnerAI_TeamRookies.git",
      liveUrl: "https://dev-partner-ai-team-rookies.vercel.app",
      bullets: [
        "Led a 4-person engineering team (Team Rookies) designing an end-to-end verification pipeline to make AI-generated code proposals verifiable, auditable, and safe before merge.",
        "Engineered a 12-stage workflow incorporating intent parsing, structural invariant extraction, impact blast-radius analysis, and mandatory human authorization gates.",
        "Implemented validation checkpoints including mutation testing and adversarial counterexample generation to uncover subtle regressions and hallucinations.",
        "Built an interactive Next.js developer dashboard visualizing the pipeline execution state, automated risk ratings, and generated evidence reports.",
      ],
    },
    {
      name: "HealthBuddy AI — Responsible Clinical Pre-Consultation Assistant",
      role: "Full-Stack & AI Integration Engineer",
      tech: "Next.js, React, TypeScript, Google Gemini API, Web Speech API, Tailwind CSS",
      github: "https://github.com/anshver08-droid/HealthBuddy-AI.git",
      bullets: [
        "Engineered an AI-assisted patient pre-consultation intake system parsing conversational symptom accounts in English, Hindi, and Hinglish into doctor-ready clinical summaries.",
        "Enforced a strict non-diagnostic boundary via prompt invariants and system rules; the system explicitly avoids medical prescribing or autonomous diagnosis.",
        "Constructed an adaptive dialogue flow that collects chief complaints, symptom duration, and triggers while flagging missing inputs as 'Pending/Not Disclosed' under a zero-fabrication policy.",
        "Integrated Web Speech API for voice-driven accessibility and implemented red-flag emergency screening rules that trigger instant clinical triage warnings.",
      ],
    },
  ],
  leadership: [
    {
      title: "Team Lead — DevPartner AI Project (Team Rookies)",
      organization: "Engineering Collaborative Project",
      bullets: [
        "Directed a cross-functional student engineering team of 4 members through project ideation, architectural design, component decomposition, and deployment.",
        "Established clear modular task boundaries across frontend interface development, pipeline state machines, and verification test harnesses.",
      ],
    },
  ],
  experience: {
    hasVerified: false,
    note: "Currently an undergraduate engineering student focused on project-driven software engineering and open-source backend development.",
    placeholder: "[Open to Software Engineering Internships and Full-Time Roles — Add Industry Experience When Applicable]",
  },
  achievements: {
    hasVerified: false,
    note: "Demonstrated through project development, GitHub codebases, and technical leadership.",
    placeholder: "[Add Verified Hackathon Rankings, Academic Awards, or Coding Competition Results Here]",
  },
  certifications: {
    hasVerified: false,
    note: "Engineering capabilities demonstrated through working software repositories and case studies.",
    placeholder: "[Add Verified Industry Certifications (e.g., AWS, GCP, Oracle, DeepLearning.AI) Here]",
  },
};
