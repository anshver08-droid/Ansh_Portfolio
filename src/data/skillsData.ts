export interface SkillItem {
  name: string;
  level?: "Strong" | "Intermediate" | "Working Knowledge";
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
    category: "Languages",
    badge: "01 / Core",
    description: "Core programming languages utilized for systems, algorithmic problem solving, and application engineering.",
    skills: [
      { name: "C++", level: "Intermediate", description: "Data structures, algorithms, and object-oriented systems" },
      { name: "Python", level: "Intermediate", description: "AI/ML scripting, data manipulation, and automation" },
      { name: "TypeScript", level: "Strong", description: "Strictly-typed scalable backend and full-stack architecture" },
      { name: "JavaScript (ES6+)", level: "Strong", description: "Asynchronous runtime, event loop, and web standards" },
    ],
  },
  {
    category: "Backend & Systems",
    badge: "02 / Backend",
    description: "Server runtimes, transactional data access, and API frameworks built for correctness and performance.",
    skills: [
      { name: "Node.js", level: "Strong", description: "Event-driven asynchronous backend runtime" },
      { name: "Fastify", level: "Strong", description: "High-throughput JSON APIs with schema compilation" },
      { name: "REST APIs", level: "Strong", description: "Standard HTTP semantics, idempotency, and status codes" },
      { name: "Transactions & ACID", level: "Strong", description: "Relational isolation levels and concurrency control" },
      { name: "Rate Limiting", level: "Intermediate", description: "Token bucket & window strategies to protect endpoints" },
      { name: "Idempotency", level: "Strong", description: "Safe retries and deduplication via unique tokens" },
    ],
  },
  {
    category: "Databases & Storage",
    badge: "03 / Storage",
    description: "Relational and document storage systems engineered with schema constraints and query integrity.",
    skills: [
      { name: "PostgreSQL", level: "Strong", description: "Exclusion constraints, migrations, indexing, and transactions" },
      { name: "SQL", level: "Strong", description: "Relational algebra, subqueries, joins, and schema modeling" },
      { name: "MongoDB", level: "Working Knowledge", description: "Document modeling, collections, and aggregation pipelines" },
    ],
  },
  {
    category: "Frontend & Web",
    badge: "04 / Interface",
    description: "Accessible, responsive, and performance-focused user interfaces built with modern component architectures.",
    skills: [
      { name: "React", level: "Strong", description: "Component composition, hooks, state machines, and lifecycles" },
      { name: "Next.js (App Router)", level: "Strong", description: "Server components, hybrid rendering, and routing" },
      { name: "Tailwind CSS", level: "Strong", description: "Design token architecture and responsive mobile-first styling" },
      { name: "Semantic HTML & CSS", level: "Strong", description: "WCAG accessibility, flexbox, grid, and layout mechanics" },
    ],
  },
  {
    category: "AI, GenAI & ML",
    badge: "05 / Intelligence",
    description: "Responsible generative AI integrations, prompt engineering guardrails, and data analytics libraries.",
    skills: [
      { name: "Generative AI & LLMs", level: "Intermediate", description: "Prompt invariants, structured JSON output, and workflows" },
      { name: "Google Gemini API", level: "Intermediate", description: "Multimodal and conversational pre-consultation intake" },
      { name: "NumPy & Pandas", level: "Intermediate", description: "Array operations, tabular manipulation, and data prep" },
      { name: "Natural Language Processing", level: "Working Knowledge", description: "Entity extraction, tokenization, and intent analysis" },
    ],
  },
  {
    category: "Engineering & Tooling",
    badge: "06 / DevOps & Tools",
    description: "Version control, containerization, testing methodologies, and developer infrastructure.",
    skills: [
      { name: "Git & GitHub", level: "Strong", description: "Branching workflows, pull requests, and commit discipline" },
      { name: "Docker & Compose", level: "Intermediate", description: "Containerized development environments and isolation" },
      { name: "Integration Testing", level: "Intermediate", description: "End-to-end endpoint validation and race-condition checks" },
      { name: "Authentication & AuthZ", level: "Intermediate", description: "Session tokens, email validation, and role protection" },
    ],
  },
  {
    category: "Computer Science Fundamentals",
    badge: "07 / Foundations",
    description: "Core academic and engineering fundamentals grounding practical problem solving.",
    skills: [
      { name: "Data Structures & Algorithms", level: "Strong", description: "Arrays, trees, graphs, dynamic programming, and complexity" },
      { name: "Object-Oriented Programming", level: "Strong", description: "Encapsulation, inheritance, polymorphism, design patterns" },
      { name: "Database Management Systems", level: "Strong", description: "Relational normalization, concurrency, indexing, locking" },
      { name: "Operating Systems", level: "Intermediate", description: "Processes, threads, memory management, and I/O concurrency" },
      { name: "Computer Networks", level: "Intermediate", description: "TCP/IP, HTTP/1.1-3, DNS, TLS, and client-server models" },
    ],
  },
];
