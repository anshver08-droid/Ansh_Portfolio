export interface ProjectArchitectureStep {
  step: string;
  title: string;
  detail: string;
  type?: "client" | "api" | "logic" | "db" | "ai" | "verification" | "human";
}

export interface ProjectDetail {
  slug: string;
  name: string;
  tagline: string;
  oneLiner: string;
  category: string;
  type: string;
  role: string;
  contributionBadge: string;
  contextBadge?: string;
  repoUrl: string;
  liveUrl?: string;
  statusBadge: string;
  technologies: string[];
  keyConcepts: string[];
  cvBullets: string[];
  overview: string;
  problem: string;
  whyHard: string;
  solution: string;
  architectureWorkflow: ProjectArchitectureStep[];
  engineeringDecisions: {
    decision: string;
    rationale: string;
    tradeoff: string;
  }[];
  technicalImplementation: {
    title: string;
    points: string[];
  }[];
  securityAndReliability: string[];
  testingStrategy: string[];
  challengesAndMitigations: {
    challenge: string;
    mitigation: string;
  }[];
  resultsAndMetrics: string;
  lessonsLearned: string[];
  futureImprovements: string[];
}

export const PROJECTS: ProjectDetail[] = [
  {
    slug: "devpartner-ai",
    name: "DevPartner AI",
    tagline: "AI-Powered Developer Workflow",
    oneLiner:
      "An AI-powered developer workflow designed to make code changes safer and more reliable through intent extraction, invariant identification, impact analysis, risk assessment, human approval, isolated patches, verification, mutation testing, and adversarial counterexamples.",
    category: "AI & Developer Tooling",
    type: "AI Developer Tool / Verification Workflow",
    role: "Testing / Verification / Debugging Contributor",
    contributionBadge: "Testing & Verification Layer Contributor",
    contextBadge: "IBM Bob 2.0 Hackathon",
    repoUrl: "https://github.com/anshver08-droid/DevPartnerAI_TeamRookies.git",
    liveUrl: "https://dev-partner-ai-team-rookies.vercel.app",
    statusBadge: "Live Production Prototype",
    technologies: ["React", "TypeScript", "Vite", "Node.js", "Git/GitHub", "AI-Assisted Development"],
    keyConcepts: [
      "Invariant Checking (harness.ts)",
      "Mutation Testing",
      "Adversarial Counterexamples",
      "Human Approval Gate",
      "Verification Panels",
      "Isolated Patch Execution",
    ],
    cvBullets: [
      "Contributed to the testing and verification layer of a team-built workflow that makes code changes safer through impact analysis, human approval, isolated patches, and an accept/rollback decision.",
      "Implemented invariant-checking and verification logic in TypeScript (harness.ts) to validate proposed code changes against identified invariants.",
      "Built React components (InvariantPanel, VerificationPanel, CounterexamplePanel) that display invariants, verification results, and adversarial counterexamples.",
      "Supported mutation-testing and adversarial-testing workflows and debugged verification behavior so failing cases were visible to reviewers.",
    ],
    overview:
      "DevPartner AI was developed for the IBM Bob 2.0 Hackathon as a team-built workflow to solve a core failure mode in AI-assisted development: unverified code generation. My specific contribution focused on the testing, verification, and debugging layer—implementing invariant-checking logic in TypeScript (src/lib/harness.ts), building dedicated verification UI panels in React, and supporting mutation-testing and adversarial-testing workflows so failing edge cases are made explicit before any code is approved.",
    problem:
      "Modern LLMs generate syntactically convincing code that frequently introduces subtle regressions, violates unspoken architectural invariants, degrades test suites, or introduces security vulnerabilities. Developers lack automated verification mechanisms to validate AI patches beyond basic unit tests.",
    whyHard:
      "LLMs suffer from confirmation bias and hallucinated correctness: asking an LLM 'is this code correct?' usually results in false reassurance. Verification requires independent analytical phases: extracting behavioral invariants, running mutation tests to check test strength, generating adversarial inputs, and summarizing evidence for human decision-making.",
    solution:
      "DevPartner AI introduces an isolated multi-stage verification pipeline. Proposed changes are validated against behavioral invariants using a TypeScript harness, checked with mutation tests and adversarial counterexamples, and surfaced through clean React panels (InvariantPanel, VerificationPanel, CounterexamplePanel) for human review and an accept/rollback decision.",
    architectureWorkflow: [
      { step: "01", title: "Developer Request", detail: "Natural language feature request or bug report submitted by the developer.", type: "client" },
      { step: "02", title: "Intent Extraction", detail: "Formal semantic parsing of developer intent and code boundaries.", type: "ai" },
      { step: "03", title: "Invariants Identification", detail: "Identification of behavioral invariants that must never be broken.", type: "logic" },
      { step: "04", title: "Impact & Risk Analysis", detail: "Dependency graph blast-radius analysis and risk assessment.", type: "logic" },
      { step: "05", title: "Implementation Plan", detail: "Structured, step-by-step diff plan generated with explicit constraints.", type: "ai" },
      { step: "06", title: "Human Approval Gate", detail: "Mandatory human review of risk score and plan before code generation occurs.", type: "human" },
      { step: "07", title: "Isolated Patch", detail: "Code modification generated and applied in an isolated virtual patch sandbox.", type: "logic" },
      { step: "08", title: "Verification (harness.ts)", detail: "TypeScript verification harness validates proposed changes against identified invariants.", type: "verification" },
      { step: "09", title: "Mutation Testing", detail: "Injects synthetic faults to ensure test suite detects behavioral regressions.", type: "verification" },
      { step: "10", title: "Adversarial Counterexamples", detail: "Generates stress-test counterexamples to expose subtle boundary failures.", type: "verification" },
      { step: "11", title: "Evidence Report", detail: "Displays verification results, mutation scores, and invariants on the developer dashboard.", type: "ai" },
      { step: "12", title: "Accept or Rollback", detail: "Human reviewer commits verified patch or executes instant clean rollback.", type: "human" },
    ],
    engineeringDecisions: [
      {
        decision: "Invariant Checking via TypeScript Test Harness (harness.ts)",
        rationale: "Rather than trusting LLM self-evaluations, implemented deterministic invariant checks in TypeScript to validate code changes against identified system invariants.",
        tradeoff: "Requires upfront definition of behavioral assertions, but delivers objective, reproducible verification.",
      },
      {
        decision: "Dedicated Invariant, Verification & Counterexample Panels",
        rationale: "Engineered InvariantPanel, VerificationPanel, and CounterexamplePanel in React to make verification results transparent rather than hiding them behind a black-box score.",
        tradeoff: "Increases UI information density, but gives developers the exact evidence needed to make informed decisions.",
      },
      {
        decision: "Mutation Testing over Raw Coverage",
        rationale: "High line coverage often tests trivial code paths. Mutation testing injects faults to verify that assertions actually catch bugs.",
        tradeoff: "Requires additional computation time during verification, but provides high confidence.",
      },
      {
        decision: "Transparent Human Approval Gate",
        rationale: "Retained human decision authority at both the planning phase and the final accept/rollback phase.",
        tradeoff: "Introduces an explicit review step, eliminating rogue uninspected modifications.",
      },
    ],
    technicalImplementation: [
      {
        title: "Verification Logic & Test Harness (src/lib/harness.ts)",
        points: [
          "Implemented invariant-checking logic in TypeScript to systematically validate code proposals.",
          "Constructed execution harnesses to run test suites against isolated patches.",
          "Debugged verification behaviors so failing tests and edge cases were clearly identified.",
        ],
      },
      {
        title: "React Component Architecture",
        points: [
          "Built InvariantPanel.tsx to render extracted invariants and their satisfaction status.",
          "Engineered VerificationPanel.tsx to aggregate test suite executions, assertions, and status badges.",
          "Created CounterexamplePanel.tsx to display adversarial counterexamples and boundary inputs.",
        ],
      },
      {
        title: "Workflow Integration & UI",
        points: [
          "Developed with React, TypeScript, Vite, and Tailwind CSS for rapid build times and responsive rendering.",
          "Integrated Git/GitHub branching and patch diff tracking.",
        ],
      },
    ],
    securityAndReliability: [
      "Isolated patch application ensures experimental AI changes do not mutate production state prematurely.",
      "Deterministic invariant checking prevents silent regression of core business logic.",
      "Adversarial counterexample generation stress-tests input validation and null-pointer edge cases.",
      "Mandatory human sign-off before patch integration protects codebase integrity.",
    ],
    testingStrategy: [
      "Mutation testing workflows injecting synthetic code mutations to verify detection sensitivity.",
      "Adversarial testing suites evaluating pipeline stability when fed boundary or hostile inputs.",
      "TypeScript type checking and linting across harness and component modules.",
    ],
    challengesAndMitigations: [
      {
        challenge: "Making failing verification edge cases obvious and actionable to developers.",
        mitigation: "Engineered CounterexamplePanel.tsx to surface the exact input, expected output, and actual outcome that triggered the invariant failure.",
      },
      {
        challenge: "Ensuring invariant checking logic is deterministic and free from LLM hallucination.",
        mitigation: "Built harness.ts in pure TypeScript with explicit assertion checking independent of LLM generation.",
      },
    ],
    resultsAndMetrics:
      "Successfully built and demonstrated at the IBM Bob 2.0 Hackathon with a live prototype on Vercel. Demonstrated automated invariant extraction, verification reporting, and counterexample visualization.",
    lessonsLearned: [
      "AI in software development is most valuable when combined with rigorous traditional software testing and verification techniques.",
      "Developers trust AI suggestions only when presented with concrete, verifiable evidence and explicit failure modes.",
    ],
    futureImprovements: [
      "Expand harness.ts with automated property-based testing generation.",
      "Package verification panels as a GitHub Action and PR review bot.",
    ],
  },
  {
    slug: "healthbuddy-ai",
    name: "HealthBuddy AI",
    tagline: "AI Pre-Consultation Assistant",
    oneLiner:
      "A human-in-the-loop AI-powered pre-consultation intake assistant converting natural patient conversations into structured clinical case sheets and doctor-ready summaries, without diagnosing or prescribing.",
    category: "AI & Full-Stack",
    type: "Generative AI / Healthcare UX / Full-Stack",
    role: "Full-Stack & AI Integration Engineer",
    contributionBadge: "Full-Stack & AI Integration",
    contextBadge: "Hackathon Round 2 Prototype",
    repoUrl: "https://github.com/anshver08-droid/HealthBuddy-AI.git",
    statusBadge: "Round 2 Prototype Built",
    technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Gemini API", "Web Speech API", "REST APIs"],
    keyConcepts: [
      "Human-in-the-Loop Protocol",
      "Non-Diagnostic Boundary",
      "Multilingual Intake (English, Hindi, Hinglish)",
      "Clinical Information Extraction",
      "Offline Adaptive Clinical Engine",
      "Doctor Review Console",
    ],
    cvBullets: [
      "Developed a human-in-the-loop assistant that turns natural patient conversations into structured case sheets and doctor-ready summaries, without diagnosing or prescribing.",
      "Integrated the Google Gemini API through Next.js REST API routes for adaptive questioning in English, Hindi, and Hinglish, with an Offline Adaptive Clinical Engine for demo mode.",
      "Implemented live clinical information extraction, completeness checking, and triage/red-flag detection, with voice and text input via the browser Web Speech API.",
      "Built a doctor review console with editing, notes, digital verification, and audit-ready transcripts across the onboarding-to-summary flow.",
    ],
    overview:
      "HealthBuddy AI was built as a Hackathon Round 2 prototype to solve the clinical intake bottleneck. It acts as an intelligent pre-consultation assistant that turns conversational symptom accounts in English, Hindi, and Hinglish into clean, structured case sheets and doctor-ready summaries. Crucially, it maintains a strict human-in-the-loop boundary: it never diagnoses diseases or prescribes medications; instead, it equips doctors with an audit-ready summary and editing console for clinical review.",
    problem:
      "Clinical consultations are severely time-constrained. Patients often struggle to articulate their timeline of symptoms, omit critical context, or express symptoms in mixed colloquial vernacular (such as Hindi or Hinglish). Doctors spend excessive consultation time taking basic historical notes rather than evaluating and treating patients.",
    whyHard:
      "Healthcare applications require uncompromising safety. Medical hallucinations, unsupported diagnostic assertions, or premature medical advice from an LLM can mislead patients and cause clinical harm. Furthermore, patients frequently use ambiguous colloquialisms that standard NLP tools fail to parse accurately.",
    solution:
      "HealthBuddy AI enforces a strict non-diagnostic boundary. It gathers patient symptom accounts via text or browser Web Speech API, utilizes adaptive questioning via Google Gemini API in English, Hindi, and Hinglish, and extracts structured clinical entities (chief complaint, duration, severity, medications). It includes triage/red-flag detection, completeness checking, an Offline Adaptive Clinical Engine for demo mode, and a complete doctor review console supporting notes, edits, and digital verification.",
    architectureWorkflow: [
      { step: "01", title: "Patient Interaction", detail: "Patient enters symptoms via voice (browser Web Speech API) or text in English, Hindi, or Hinglish.", type: "client" },
      { step: "02", title: "REST API Gateway", detail: "Next.js REST API routes handle request routing and input sanitization.", type: "api" },
      { step: "03", title: "Adaptive Dialogue", detail: "Gemini API (or Offline Clinical Engine) conducts guided adaptive follow-up questions.", type: "ai" },
      { step: "04", title: "Clinical Extraction", detail: "Extracts structured clinical information (chief complaint, timeline, triggers).", type: "ai" },
      { step: "05", title: "Completeness & Triage", detail: "Performs completeness checking and screens for acute red-flag symptoms.", type: "logic" },
      { step: "06", title: "Structured Case Sheet", detail: "Formats conversational inputs into a standard pre-consultation case sheet.", type: "logic" },
      { step: "07", title: "Doctor Review Console", detail: "Doctor edits notes, reviews audit-ready transcripts, and adds clinical observations.", type: "human" },
      { step: "08", title: "Verified Summary", detail: "Doctor digitally verifies summary for the final consultation record.", type: "human" },
    ],
    engineeringDecisions: [
      {
        decision: "Strict Non-Diagnostic Boundary Enforced by Design",
        rationale: "The AI is explicitly forbidden from naming medical diagnoses or suggesting treatments, ensuring patient safety and compliance.",
        tradeoff: "Prevents conversational 'advice' that some users expect, but adheres strictly to medical ethics.",
      },
      {
        decision: "Doctor Review Console with Digital Verification",
        rationale: "The doctor remains the final authority, able to edit fields, add clinical notes, and digitally verify the intake document.",
        tradeoff: "Requires physician time to review, which is the necessary standard of care.",
      },
      {
        decision: "Offline Adaptive Clinical Engine for Demo Mode",
        rationale: "Engineered an offline clinical logic engine alongside the Gemini API to ensure reliable evaluation and zero disruption during hackathon demos and offline connectivity.",
        tradeoff: "Requires maintaining rule-based fallback trees, but guarantees 100% demo uptime.",
      },
      {
        decision: "Multilingual Voice & Text Input (Web Speech API)",
        rationale: "Enabled voice input in English, Hindi, and Hinglish to lower accessibility barriers for non-tech-savvy users.",
        tradeoff: "Requires careful normalization of mixed-script speech transcripts.",
      },
    ],
    technicalImplementation: [
      {
        title: "AI & Next.js API Routes",
        points: [
          "Built on Next.js 16 and React 19 with strict TypeScript typing across all API route handlers.",
          "Integrated Google Gemini API with system guardrails enforcing zero fabrication and structured JSON output.",
          "Engineered the Offline Adaptive Clinical Engine for offline demo resiliency.",
        ],
      },
      {
        title: "Voice UX & Accessibility",
        points: [
          "Implemented browser Web Speech API for real-time speech-to-text recognition.",
          "Responsive, accessible styling using Tailwind CSS with high contrast and readable typography.",
        ],
      },
      {
        title: "Doctor Review Workflow",
        points: [
          "Built full doctor console: live editing, notes addition, digital verification, and audit-ready transcripts.",
          "Maintains end-to-end traceability from patient voice input to physician sign-off.",
        ],
      },
    ],
    securityAndReliability: [
      "Prominent non-diagnostic disclaimers across all screens: assistant only, not a doctor.",
      "Red-flag detection immediately surfaces critical emergency escalation notices.",
      "Audit-ready chronological transcripts preserve exact patient statements for physician verification.",
      "Client-side session handling prevents unauthorized retention of private medical accounts.",
    ],
    testingStrategy: [
      "Simulated patient dialogues across English, Hindi, and Hinglish phrases to test entity extraction.",
      "Adversarial prompting testing to ensure system refuses requests for medical prescriptions or autonomous diagnoses.",
      "Red-flag screening validation to ensure emergency warnings trigger reliably.",
    ],
    challengesAndMitigations: [
      {
        challenge: "Handling colloquial Hindi and Hinglish phrases that standard NLP classifiers fail to understand.",
        mitigation: "Combined Gemini's multilingual semantic understanding with contextual prompt few-shots and fallback clinical normalization.",
      },
      {
        challenge: "Preventing patients from treating the AI intake as an authoritative doctor.",
        mitigation: "Placed persistent, unavoidable UI banners stating 'Intake Assistant Only — Not a Medical Diagnosis' and requiring acknowledgement.",
      },
    ],
    resultsAndMetrics:
      "Built and demonstrated as a Hackathon Round 2 prototype. Successfully proved end-to-end multilingual pre-consultation intake with doctor verification.",
    lessonsLearned: [
      "In healthcare engineering, knowing what NOT to automate is more critical than what to automate.",
      "Human-in-the-loop workflows make Generative AI safe and practical for clinical administrative tasks.",
    ],
    futureImprovements: [
      "FHIR (Fast Healthcare Interoperability Resources) JSON standard export for integration into hospital EHR systems.",
      "Specialized offline Whisper model fine-tuning for regional Indian dialects.",
    ],
  },
  {
    slug: "tablekeeper",
    name: "TableKeeper",
    tagline: "Restaurant Reservation Backend API",
    oneLiner:
      "A high-reliability TypeScript/Fastify JSON REST API backed by PostgreSQL, engineered around transactional consistency, exclusion constraints, idempotency, customer verification, and secure reservation management.",
    category: "Backend & Systems",
    type: "Backend / REST API / PostgreSQL",
    role: "Backend Architect & Developer",
    contributionBadge: "Backend Architecture & Implementation",
    repoUrl: "https://github.com/anshver08-droid/Tablekeeper.git",
    statusBadge: "Verified Backend System",
    technologies: ["TypeScript", "Fastify", "PostgreSQL", "Node.js", "REST API", "Docker", "Docker Compose"],
    keyConcepts: [
      "PostgreSQL Exclusion Constraints",
      "ACID Transactions & Locking",
      "Restaurant-Scoped Idempotency",
      "Signed Email Token Verification (SMTP)",
      "Confirmation-Code Authorization",
      "PostgreSQL 16 Integration Tests",
    ],
    cvBullets: [
      "Engineered a Fastify and PostgreSQL JSON REST API in which a booking succeeds only when its database transaction commits.",
      "Enforced reservation consistency with PostgreSQL exclusion constraints, locking, and transactional commits to block conflicting confirmed two-hour reservations.",
      "Implemented restaurant-scoped idempotent requests, signed email-token customer verification (SMTP), confirmation-code authorization, and rate limiting.",
      "Validated with PostgreSQL 16 integration tests, migration upgrade tests, and TypeScript type checking; packaged with Docker Compose.",
    ],
    overview:
      "TableKeeper is a backend reservation API built with TypeScript and Fastify, backed by PostgreSQL 16. Its core engineering principle is that a reservation succeeds strictly when the reservation database transaction commits. It uses PostgreSQL exclusion constraints and locking to block conflicting confirmed two-hour reservations at the database level, with restaurant-scoped idempotency, customer email verification, and Docker Compose packaging.",
    problem:
      "In reservation systems, concurrent booking requests frequently target the same physical resource at the same time. Naive implementations rely on application-level checks (e.g., SELECT followed by INSERT), which fail under concurrent load, leading to double-bookings, corrupt state, and race conditions.",
    whyHard:
      "Network latency between application instances and the database means read-modify-write patterns are inherently susceptible to race windows. Optimistic locking requires complex retry storms, while coarse pessimistic table locking cripples throughput. Furthermore, client network disconnects during in-flight payments or confirmations risk duplicate records unless idempotency is strictly enforced.",
    solution:
      "TableKeeper enforces data integrity at the database storage engine level through PostgreSQL exclusion constraints and transactional isolation. A reservation request requires an idempotency key and email verification token. The booking transaction atomically verifies inventory, inserts the reservation range, and updates quota in a single committed transaction, guaranteeing that double bookings are physically prevented by the database engine.",
    architectureWorkflow: [
      { step: "01", title: "Client Discovery", detail: "Client queries restaurant endpoints and retrieves advisory seat availability.", type: "client" },
      { step: "02", title: "Signed Email Token (SMTP)", detail: "Customer initiates signed email-token verification to validate identity.", type: "api" },
      { step: "03", title: "Fastify API Gateway", detail: "Validates request payload schemas, rate limits, and Idempotency-Key headers.", type: "api" },
      { step: "04", title: "Restaurant-Scoped Idempotency", detail: "Checks idempotency store to prevent duplicate booking mutations upon network retries.", type: "logic" },
      { step: "05", title: "Transaction Boundary", detail: "Begins PostgreSQL ACID transaction with row-level locking.", type: "db" },
      { step: "06", title: "PostgreSQL Exclusion Constraint", detail: "Database exclusion constraint blocks conflicting confirmed two-hour reservations.", type: "db" },
      { step: "07", title: "Transactional Commit", detail: "Reservation row commits and confirmation code is generated atomically.", type: "db" },
      { step: "08", title: "Confirmation Response", detail: "Client receives 201 Created with booking ID, confirmation code, and receipt.", type: "api" },
    ],
    engineeringDecisions: [
      {
        decision: "Database Exclusion Constraints over Application Locks",
        rationale: "PostgreSQL exclusion constraints (btree_gist) enforce non-overlapping time ranges inside the database engine, eliminating race conditions across multiple API instances.",
        tradeoff: "Requires PostgreSQL-specific extensions and index configuration, but guarantees zero double-booking leaks.",
      },
      {
        decision: "Restaurant-Scoped Idempotency",
        rationale: "Clients retrying requests due to mobile network drops must not create duplicate reservations or charges.",
        tradeoff: "Requires storing idempotency state with TTL, adding slight storage overhead per booking attempt.",
      },
      {
        decision: "Signed Email-Token Verification (SMTP) & Confirmation Codes",
        rationale: "Prevents spam reservations and ghost bookings by requiring verified customer contact tokens prior to slot commit.",
        tradeoff: "Adds an asynchronous verification step to the customer flow.",
      },
      {
        decision: "Fastify Schema Validation & Strict Serialization",
        rationale: "Compiles JSON schemas into high-performance validators using fast-json-stringify and ajv, rejecting malformed requests at the boundary.",
        tradeoff: "Requires explicit schema definitions for every request body, query parameter, and response payload.",
      },
    ],
    technicalImplementation: [
      {
        title: "Database Architecture & Concurrency Control",
        points: [
          "PostgreSQL migrations managing restaurants, tables, reservations, customers, and idempotency_keys.",
          "PostgreSQL exclusion constraints blocking overlapping confirmed two-hour reservations.",
          "ACID transactions with row-level locking to guarantee consistency.",
        ],
      },
      {
        title: "API Gateway & Security Defenses",
        points: [
          "Fastify plugins configured for granular IP and token-based rate limiting.",
          "Restaurant-scoped idempotent request handling.",
          "Signed email-token customer verification (SMTP) and confirmation-code authorization.",
        ],
      },
      {
        title: "Containerization & Environment",
        points: [
          "Docker Compose provisioning both the TypeScript Node.js runtime and PostgreSQL 16 database.",
          "Migration upgrade tests validating schema evolution deterministically.",
        ],
      },
    ],
    securityAndReliability: [
      "Input validation via strict JSON Schema on all request payloads to prevent SQL injection and prototype pollution.",
      "Idempotency token lifecycle management preventing duplicate mutations across network reconnects.",
      "Customer verification handshake preventing phantom resource exhaustion by unauthorized bots.",
      "Connection pool isolation with graceful shutdown hooks closing database listeners cleanly on SIGTERM.",
    ],
    testingStrategy: [
      "PostgreSQL 16 integration tests verifying transaction commits and rollback behavior.",
      "Migration upgrade tests ensuring schema evolution does not break existing constraints.",
      "TypeScript strict type checking across all models and route handlers.",
      "Concurrency collision tests verifying exclusion constraint blocks conflicting two-hour bookings.",
    ],
    challengesAndMitigations: [
      {
        challenge: "Handling concurrent reservations for the exact same restaurant table at the exact same millisecond.",
        mitigation: "Configured PostgreSQL GiST exclusion constraint on table_id with reservation_time range, offloading concurrency resolution directly to the relational engine.",
      },
      {
        challenge: "Client retries causing multiple reservation records during intermittent packet drops.",
        mitigation: "Engineered an Idempotency-Key header requirement. Handled duplicate requests by querying cached transaction responses before executing the booking pipeline.",
      },
    ],
    resultsAndMetrics:
      "Validated with PostgreSQL 16 integration tests and migration upgrade tests. Proved mathematical overlap prevention under concurrent request loads.",
    lessonsLearned: [
      "Database engines are significantly better at enforcing physical invariants than application-level locks.",
      "Treating availability as advisory decoupled heavy read traffic from the transactional booking bottleneck.",
      "Strict schema compilation in Fastify catches invalid client data before it consumes database connection pool cycles.",
    ],
    futureImprovements: [
      "Implement a Redis-backed tiered caching layer for advisory restaurant search queries.",
      "Add WebSocket notifications for live table release alerts when a reservation cancels.",
      "Introduce OpenTelemetry instrumentation for distributed span tracing across booking stages.",
    ],
  },
];
