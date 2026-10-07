export interface SkillItem {
  name: string;
  badge?: string;
  description?: string;
}

export interface SkillCategory {
  category: string;
  badge: string;
  description: string;
  skills: SkillItem[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Programming",
    badge: "01 / Languages",
    description: "Core languages used for systems programming, backend architectures, AI scripting, and algorithmic problem-solving.",
    skills: [
      { name: "Python", description: "AI/ML workflows, data handling, and automation scripting" },
      { name: "TypeScript", description: "Strictly typed scalable systems, backend services, and UI state" },
      { name: "JavaScript (ES6+)", description: "Asynchronous runtime, event loop, and modern ECMAScript standards" },
      { name: "C++", description: "Algorithmic problem solving and Object-Oriented Programming" },
      { name: "SQL", description: "Relational queries, transactional schemas, joins, and DDL/DML" },
    ],
  },
  {
    category: "Backend & Systems",
    badge: "02 / Backend",
    description: "Server frameworks, RESTful API design, transactional boundaries, and endpoint security.",
    skills: [
      { name: "Node.js", description: "High-performance event-driven asynchronous backend runtime" },
      { name: "Fastify", description: "High-throughput JSON APIs with schema compilation and plugin architecture" },
      { name: "RESTful APIs", description: "Resource-based HTTP architecture, standard status codes, and headers" },
      { name: "PostgreSQL Transactions", description: "ACID transactions with isolation control and commit guarantees" },
      { name: "Rate Limiting", description: "Protecting endpoints from burst traffic and unauthorized abuse" },
      { name: "Idempotency", description: "Preventing duplicate mutations across client network retries" },
      { name: "Authentication", description: "Session handling, token verification, and secure access boundaries" },
    ],
  },
  {
    category: "Databases",
    badge: "03 / Storage",
    description: "Relational and document storage systems engineered for query integrity and concurrency protection.",
    skills: [
      { name: "PostgreSQL", description: "Relational database engine with ACID support, extensions, and migrations" },
      { name: "Exclusion Constraints", description: "Database-level overlap prevention using btree_gist to eliminate double booking" },
      { name: "GiST Indexing", description: "Generalized Search Tree indexing for range types and constraint enforcement" },
      { name: "MongoDB", description: "Document-oriented database modeling, collections, and CRUD operations" },
      { name: "SQL Schema Design", description: "Relational normalization, foreign keys, constraints, and migration scripts" },
    ],
  },
  {
    category: "Frontend Development",
    badge: "04 / Interface",
    description: "Responsive, accessible, and fast user interfaces built with modern component architectures.",
    skills: [
      { name: "React", description: "Declarative component composition, custom hooks, and state management" },
      { name: "Next.js (App Router)", description: "Server components, streaming, optimized bundling, and client transitions" },
      { name: "Vite", description: "Fast frontend tooling and modern build pipelines" },
      { name: "Tailwind CSS", description: "Design token architecture, responsive utility styling, and dark theme" },
      { name: "Semantic HTML5", description: "Accessible document structure and standards-compliant elements" },
      { name: "CSS3", description: "Flexbox, grid, animations, responsive media queries, and print styles" },
      { name: "Responsive Design", description: "Fluid layouts tested from 320px mobile to 4K desktop" },
      { name: "Accessibility", description: "WCAG contrast compliance, screen-reader semantics, and keyboard navigation" },
    ],
  },
  {
    category: "AI & Developer Tooling",
    badge: "05 / AI & DevOps",
    description: "Responsible generative AI integrations, prompt engineering guardrails, speech UX, and containerized tooling.",
    skills: [
      { name: "Machine Learning", description: "Foundational AI/ML concepts and practical data classification" },
      { name: "Generative AI", description: "Prompt invariants, structured clinical extraction, and multi-turn workflows" },
      { name: "Google Gemini API", description: "Multimodal and conversational pre-consultation intake via REST endpoints" },
      { name: "Prompt Engineering", description: "Zero-fabrication guardrails, structured JSON outputs, and safety rules" },
      { name: "Web Speech API", description: "Browser-native voice recognition for accessible patient input" },
      { name: "Mutation Testing", description: "Injecting synthetic code mutations to verify test-suite assertion strength" },
      { name: "Git", description: "Branching strategies, atomic commits, merge conflicts, and version control" },
      { name: "GitHub", description: "Pull request reviews, issue tracking, and repository management" },
      { name: "Docker", description: "Containerized application runtime isolation and reproducible environments" },
      { name: "Docker Compose", description: "Multi-container orchestration for application and PostgreSQL services" },
    ],
  },
  {
    category: "Core Computer Science",
    badge: "06 / Foundations",
    description: "Fundamental engineering principles ensuring software correctness, verification, and efficiency.",
    skills: [
      { name: "Data Structures & Algorithms", description: "Arrays, trees, graphs, dynamic programming, sorting, and complexity analysis" },
      { name: "System Invariants", description: "Defining and enforcing conditions that must mathematically hold across state changes" },
      { name: "Relational Concurrency Control", description: "Managing concurrent transactions, isolation levels, and row-level locking" },
      { name: "Integration Testing", description: "Validating multi-component interactions with live database containers" },
      { name: "Verification", description: "Validating proposed code changes against invariants and test suites" },
      { name: "Debugging", description: "Systematic root-cause diagnosis across frontend, backend, and database layers" },
    ],
  },
];
