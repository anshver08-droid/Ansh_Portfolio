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
  repoUrl: string;
  liveUrl?: string;
  statusBadge: string;
  technologies: string[];
  keyConcepts: string[];
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
    slug: "tablekeeper",
    name: "TableKeeper",
    tagline: "Transactional Reservation Engine & API",
    oneLiner:
      "A high-reliability TypeScript/Fastify JSON API backed by PostgreSQL, engineered around transactional correctness, exclusion constraints, and idempotency to eliminate double-booking.",
    category: "Backend & Systems",
    type: "Backend / REST API / PostgreSQL",
    role: "Backend Architect & Developer",
    repoUrl: "https://github.com/anshver08-droid/Tablekeeper.git",
    statusBadge: "Verified Backend System",
    technologies: ["TypeScript", "Fastify", "PostgreSQL", "Docker Compose", "SQL Migrations", "Node.js"],
    keyConcepts: [
      "Transactional Correctness",
      "PostgreSQL Exclusion Constraints",
      "Idempotency Keys",
      "Advisory vs Committed Availability",
      "Rate Limiting & Verification",
      "Integration Testing",
    ],
    overview:
      "TableKeeper is a production-style reservation backend built with TypeScript and Fastify, backed by PostgreSQL. Its fundamental design invariant is that a reservation succeeds strictly when the reservation row commits within a database transaction; availability checks prior to booking are treated as advisory and transient.",
    problem:
      "In high-demand booking platforms (restaurants, events, travel), concurrent user requests frequently target the same limited inventory slots simultaneously. Naive approaches rely on application-level checks (e.g. SELECT count < capacity followed by INSERT), leading to severe race conditions, duplicate bookings, and corrupt state when traffic spikes.",
    whyHard:
      "Network latency between application instances and the database means read-modify-write patterns are inherently susceptible to race windows. Optimistic locking requires complex retry storms, while coarse pessimistic table locking cripples throughput. Furthermore, client network disconnects during in-flight payments or confirmations risk duplicate records unless idempotency is strictly enforced.",
    solution:
      "TableKeeper enforces data integrity at the database storage engine level through PostgreSQL exclusion constraints and transactional isolation. A reservation request requires an idempotency key and email verification token. The booking transaction atomically verifies inventory, inserts the reservation range, and updates quota in a single committed transaction, guaranteeing that double bookings are physically prevented by the database engine.",
    architectureWorkflow: [
      { step: "01", title: "Client Discovery", detail: "Client queries restaurant endpoints and retrieves advisory seat availability.", type: "client" },
      { step: "02", title: "Email Verification", detail: "Customer initiates verification token cycle to prevent spam and ghost bookings.", type: "api" },
      { step: "03", title: "Fastify Gateway", detail: "Request arrives with Idempotency-Key; schema validation and rate limiting are evaluated.", type: "api" },
      { step: "04", title: "Idempotency Lookup", detail: "Checks if the idempotency key exists in cache/database to return cached response on retry.", type: "logic" },
      { step: "05", title: "Transaction Boundary", detail: "Begins PostgreSQL transaction with strict isolation and exclusion lock evaluation.", type: "db" },
      { step: "06", title: "Constraint Validation", detail: "PostgreSQL exclusion constraint (tsrange overlap) evaluates against existing bookings.", type: "db" },
      { step: "07", title: "Atomic Commit", detail: "Reservation row commits, capacity counter decrements, and status updates atomically.", type: "db" },
      { step: "08", title: "Confirmation Response", detail: "Client receives 201 Created with booking ID, signed ticket, and verification payload.", type: "api" },
    ],
    engineeringDecisions: [
      {
        decision: "Advisory Availability vs Committed Correctness",
        rationale: "Availability queries are fast, read-only estimates. The final reservation insert within a transaction is the single source of truth.",
        tradeoff: "A user might see an available slot that gets booked by another user milliseconds before checkout, but double booking is physically eliminated.",
      },
      {
        decision: "PostgreSQL Exclusion Constraints over App Mutexes",
        rationale: "Distributed mutexes (e.g. Redis locks) fail when Redis crashes or network partitions occur. PostgreSQL btree_gist exclusion constraints enforce overlap invariants directly inside ACID transactions.",
        tradeoff: "Requires PostgreSQL-specific extensions and careful index configuration, but provides zero-leak mathematical correctness.",
      },
      {
        decision: "Mandatory Idempotency Keys on Mutation Endpoints",
        rationale: "Network timeouts often lead clients to retry POST requests. Without idempotency, users get charged twice or reserve duplicate tables.",
        tradeoff: "Requires storing idempotency state with TTL, adding slight storage overhead per booking attempt.",
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
          "PostgreSQL migrations managing tables: restaurants, tables, reservations, customers, and idempotency_keys.",
          "Applied range types (tsrange) combined with table identifiers to prevent overlapping time intervals using GiST index constraints.",
          "Connection pooling tuned to protect database connection exhaustion under burst loads.",
        ],
      },
      {
        title: "API Gateway & Security Defenses",
        points: [
          "Fastify plugins configured for granular IP and token-based rate limiting to thwart reservation scraping and denial-of-service attempts.",
          "Customer email verification cycle to establish cryptographic proof of contact prior to slot reservation.",
          "Strict CORS, security headers, and structured JSON error responses conforming to predictable error specifications.",
        ],
      },
      {
        title: "Containerization & Environment",
        points: [
          "Multi-stage Docker Compose setup provisioning both the TypeScript Node runtime and PostgreSQL database instance.",
          "Automated migration runner ensuring deterministic schema transitions upon container startup.",
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
      "Integration test suite spinning up ephemeral PostgreSQL containers to assert transactional integrity.",
      "Concurrent request simulation hammering the same time slot simultaneously to verify that exactly one reservation commits while all concurrent attempts fail cleanly with 409 Conflict.",
      "Idempotency test cases verifying identical response payloads on re-sent requests without creating duplicate rows.",
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
      "Measured production metrics not currently published. Architectural verification confirmed zero double-booking occurrences across automated concurrent collision tests.",
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
  {
    slug: "devpartner-ai",
    name: "DevPartner AI",
    tagline: "AI-Assisted Verified Developer Workflow Pipeline",
    oneLiner:
      "A developer workflow system that subjects AI-generated code proposals to invariant extraction, impact analysis, mutation testing, and adversarial counterexamples before human approval.",
    category: "AI & Developer Tools",
    type: "AI Developer Tool / Verification Pipeline / Full-Stack",
    role: "Team Lead & Core Engineer",
    repoUrl: "https://github.com/anshver08-droid/DevPartnerAI_TeamRookies.git",
    liveUrl: "https://dev-partner-ai-team-rookies.vercel.app",
    statusBadge: "Live Production Prototype",
    technologies: ["TypeScript", "React", "Next.js", "AI Verification Pipeline", "Mutation Testing", "Tailwind CSS"],
    keyConcepts: [
      "Human-in-the-Loop Gate",
      "Invariant Extraction",
      "Impact & Risk Assessment",
      "Mutation Testing",
      "Adversarial Counterexamples",
      "Evidence Reporting",
    ],
    overview:
      "DevPartner AI was developed by Team Rookies (Led by Ansh Verma, with Akash Singh, Astitva Mall, Aditya Soam; utilizing IBM Bob as an AI development assistant) to address the catastrophic risk of unverified AI code generation in engineering codebases. Rather than blindly applying LLM code suggestions, DevPartner AI orchestrates a multi-stage verification pipeline that forces AI changes to prove safety and correctness before being approved by human engineers.",
    problem:
      "Modern LLMs generate syntactically convincing code that frequently introduces subtle regressions, violates unspoken architectural invariants, degrades test suites, or introduces security vulnerabilities. Developers lack automated verification mechanisms to validate AI patches beyond trivial unit tests.",
    whyHard:
      "LLMs suffer from hallucinations and confirmation bias: asking an LLM 'is this code correct?' usually results in a reassuring hallucination. Verification requires independent analytical phases: extracting behavioral invariants, running mutation tests to check test strength, generating adversarial inputs, and summarizing evidence for human decision-making.",
    solution:
      "DevPartner AI introduces an isolated 12-stage pipeline. The developer's request is analyzed for intent, behavioral invariants, and blast radius. A formal implementation plan is generated and submitted to an explicit human approval gate. When cleared, the patch is applied in an isolated sandbox, evaluated against mutation tests and adversarial counterexamples, producing an audit-ready Evidence Report for final accept or rollback.",
    architectureWorkflow: [
      { step: "01", title: "Developer Request", detail: "Natural language feature request or bug report submitted by developer.", type: "client" },
      { step: "02", title: "Intent Extraction", detail: "Formal semantic parsing of user goals and code boundaries.", type: "ai" },
      { step: "03", title: "Invariant Analysis", detail: "Extraction of invariants that MUST NOT break during code transformation.", type: "logic" },
      { step: "04", title: "Impact & Risk", detail: "Dependency graph blast radius analysis and vulnerability scoring.", type: "logic" },
      { step: "05", title: "Implementation Plan", detail: "Structured, step-by-step diff plan generated with explicit constraints.", type: "ai" },
      { step: "06", title: "Human Gate", detail: "CRITICAL: Developer reviews risk score and plan before code generation occurs.", type: "human" },
      { step: "07", title: "Isolated Patch", detail: "Code modification generated and applied within an isolated virtual workspace.", type: "logic" },
      { step: "08", title: "Verification", detail: "Type checking, static analysis, and test suite execution against the patch.", type: "verification" },
      { step: "09", title: "Mutation Testing", detail: "Injects synthetic faults to ensure test suite detects behavioral regressions.", type: "verification" },
      { step: "10", title: "Counterexamples", detail: "Adversarial test generation seeking edge cases that falsify the solution.", type: "verification" },
      { step: "11", title: "Evidence Report", detail: "Aggregates test outcomes, mutation score, and residual risk into an audit card.", type: "ai" },
      { step: "12", title: "Accept or Rollback", detail: "Human engineer commits verified patch or performs instant clean rollback.", type: "human" },
    ],
    engineeringDecisions: [
      {
        decision: "Mandatory Human Approval Gate Before Execution",
        rationale: "Prevent autonomous AI agents from executing unreviewed file system mutations or deploying unchecked logic.",
        tradeoff: "Adds a brief pause in execution, but eliminates rogue modifications and builds developer trust.",
      },
      {
        decision: "Mutation Testing over Raw Test Coverage",
        rationale: "High line coverage often tests nothing meaningful. Mutation testing verifies that existing tests actually fail when bugs are injected.",
        tradeoff: "Higher computational time during the verification step.",
      },
      {
        decision: "Adversarial Counterexample Generation",
        rationale: "Specifically tasking a validation agent to break the generated code reveals subtle off-by-one errors and null pointer exceptions.",
        tradeoff: "Requires structured prompts with clear evaluation boundaries.",
      },
      {
        decision: "Team Structure & AI Assistant Clarification",
        rationale: "Maintained transparent attribution: human team engineering with IBM Bob utilized as a development assistant, avoiding false claims of fully automated autonomy.",
        tradeoff: "Reflects honest, defensible software engineering practices.",
      },
    ],
    technicalImplementation: [
      {
        title: "Pipeline Orchestration Engine",
        points: [
          "Modular execution pipeline coordinating intent parsing, risk assessment, and sandbox patch evaluation.",
          "Deterministic state machine transitioning patches through: Pending -> Planned -> Approved -> Sandboxed -> Verified -> Committed.",
        ],
      },
      {
        title: "Verification & Mutation Sandbox",
        points: [
          "Integration of AST analysis to extract structural invariants and detect side effects.",
          "Synthetic mutant generator simulating boundary edge cases and missing null-checks.",
          "Adversarial prompt harness designed to actively stress-test generated logic.",
        ],
      },
      {
        title: "Interactive Web Workspace",
        points: [
          "Built on Next.js, React, and Tailwind CSS offering real-time visualization of pipeline stages.",
          "Color-coded risk indicators, diff viewers, and expandable evidence reports for developers.",
        ],
      },
    ],
    securityAndReliability: [
      "Isolated sandboxing prevents untrusted AI code snippets from touching production file structures.",
      "Strict human authorization gate ensures no code modification commits without manual developer sign-off.",
      "Immutable evidence reports preserve audit trails of what checks passed and what counterexamples were evaluated.",
    ],
    testingStrategy: [
      "Unit testing of the state machine transitions to guarantee atomic rollback upon verification failure.",
      "Adversarial testing suites evaluating pipeline stability when fed malformed or hostile code inputs.",
      "Evaluation against sample algorithmic and API tasks to measure regression detection rates.",
    ],
    challengesAndMitigations: [
      {
        challenge: "LLMs validating their own code often suffer from affirmative bias and declare flawed code safe.",
        mitigation: "Decoupled generation from verification: the verification stage uses independent AST analysis, mutation testing, and adversarial testing roles.",
      },
      {
        challenge: "Balancing verification depth against developer response latency.",
        mitigation: "Structured the pipeline with clear progressive feedback, allowing the developer to review the high-level plan while background checks execute.",
      },
    ],
    resultsAndMetrics:
      "Measured quantitative metrics not currently published. Prototype successfully demonstrated automated invariant extraction and regression catch across benchmark testing scenarios.",
    lessonsLearned: [
      "AI in software engineering is most powerful when paired with rigorous, traditional computer science verification tools.",
      "Developers do not want a black box that changes their code; they want an auditable partner that shows proof of safety.",
    ],
    futureImprovements: [
      "Integration into GitHub Actions as an automated Pull Request review bot.",
      "Support for Dockerized container sandboxes for language runtimes beyond JavaScript/TypeScript.",
      "Formal specification generation using lightweight TLA+ or property-based test suites.",
    ],
  },
  {
    slug: "healthbuddy-ai",
    name: "HealthBuddy AI",
    tagline: "Responsible Clinical Pre-Consultation Intake Assistant",
    oneLiner:
      "An AI-powered pre-consultation intake assistant converting conversational symptom descriptions in English, Hindi, and Hinglish into structured clinical case sheets and doctor-ready summaries.",
    category: "AI & Full-Stack",
    type: "Generative AI / Full-Stack / Healthcare UX",
    role: "Full-Stack & AI Integration Engineer",
    repoUrl: "https://github.com/anshver08-droid/HealthBuddy-AI.git",
    statusBadge: "Verified Responsible AI Prototype",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Google Gemini API", "Web Speech API"],
    keyConcepts: [
      "Non-Diagnostic Boundary",
      "Multilingual Intake (English, Hindi, Hinglish)",
      "Zero Fabrication Policy",
      "Red-Flag Symptom Triage",
      "Structured Case Sheet Generation",
      "Human Doctor Review",
    ],
    overview:
      "HealthBuddy AI is a patient-facing clinical pre-consultation intake system built with Next.js, TypeScript, and Google Gemini API. It is strictly designed NOT as an autonomous diagnostic system, but as an intelligent intake assistant that structures messy patient symptom narratives into clean, audit-ready clinical summaries for licensed doctors.",
    problem:
      "Clinical consultations are severely time-constrained. Patients often struggle to articulate their timeline of symptoms, omit critical context, or express symptoms in mixed colloquial vernacular (such as Hindi or Hinglish). Doctors spend excessive consultation time taking basic historical notes rather than evaluating and treating patients.",
    whyHard:
      "Healthcare requires absolute adherence to safety and non-maleficence. Medical hallucinations or unsupported diagnostic conclusions from an LLM can mislead patients and cause clinical harm. Furthermore, patients frequently use ambiguous vernacular that standard medical natural language models fail to parse accurately.",
    solution:
      "HealthBuddy AI adheres to a strict non-diagnostic boundary. It gathers patient symptom accounts via text or speech, utilizes adaptive follow-up questioning to establish symptom duration, severity, and triggers, and extracts structured entities (chief complaint, history of present illness, allergies, current medications). Missing data is explicitly flagged as 'Unknown/Pending', and red-flag emergency symptoms trigger immediate escalation notices while preparing a doctor-ready case sheet.",
    architectureWorkflow: [
      { step: "01", title: "Patient Interaction", detail: "Patient enters symptoms via voice (Web Speech API) or text in English, Hindi, or Hinglish.", type: "client" },
      { step: "02", title: "Input Preprocessing", detail: "Sanitizes input, detects language, and checks for explicit emergency keywords.", type: "logic" },
      { step: "03", title: "Adaptive Dialogue", detail: "Gemini API conducts guided, empathetic follow-up to clarify duration and severity.", type: "ai" },
      { step: "04", title: "Red-Flag Filter", detail: "Evaluates symptoms against acute safety criteria (chest pain, shortness of breath, etc.).", type: "logic" },
      { step: "05", title: "Structured Extraction", detail: "Converts conversational dialogue into strict JSON clinical entities.", type: "ai" },
      { step: "06", title: "Zero-Fabrication Check", detail: "Enforces that unmentioned vitals or history are marked 'Not Disclosed' or 'Pending'.", type: "logic" },
      { step: "07", title: "Case Sheet Generation", detail: "Renders standard clinical pre-consultation document with audit-ready transcript.", type: "logic" },
      { step: "08", title: "Doctor Final Review", detail: "Licensed healthcare practitioner reviews structured intake before consultation.", type: "human" },
    ],
    engineeringDecisions: [
      {
        decision: "Strict Non-Diagnostic Boundary Enforced via System Prompts",
        rationale: "The AI is explicitly forbidden from naming specific medical diagnoses or prescribing treatments, protecting patient safety.",
        tradeoff: "Prevents conversational 'advice' that some users expect, but ensures defensible medical compliance.",
      },
      {
        decision: "Zero Fabrication & Explicit Pending State",
        rationale: "If a patient does not mention allergies or prior surgeries, the system must record 'Not Disclosed / Unknown' rather than inferring them.",
        tradeoff: "Leaves empty fields that require doctor verification, which is the correct clinical protocol.",
      },
      {
        decision: "Multilingual Voice & Text Support (Hinglish/Hindi)",
        rationale: "Broadens accessibility for patients across India who describe physical sensations colloquially (e.g. 'sir dard do din se hai').",
        tradeoff: "Requires robust entity extraction capable of handling mixed-script inputs.",
      },
      {
        decision: "Client-Side Secure Session Handling",
        rationale: "Avoids unauthenticated server persistence of sensitive health discussions during pre-consultation intake sessions.",
        tradeoff: "Intake data is scoped to the current user session unless explicitly exported to the clinical provider.",
      },
    ],
    technicalImplementation: [
      {
        title: "AI & Clinical Prompt Engineering",
        points: [
          "Engineered Google Gemini API system instructions with strict medical ethics guardrails and structured JSON schemas.",
          "Adaptive questioning logic that limits interrogation loops to 3-4 targeted questions to avoid patient fatigue.",
          "Emergency symptom classifier prompting immediate physical emergency care instructions.",
        ],
      },
      {
        title: "Speech & Frontend Accessibility",
        points: [
          "Integrated Web Speech API for real-time speech-to-text input, lowering barriers for non-tech-savvy users.",
          "Built with Next.js and Tailwind CSS with high-contrast accessibility standards and responsive mobile layouts.",
          "Audit-ready chronological transcript viewer allowing physicians to verify original patient phrasing.",
        ],
      },
      {
        title: "Clinical Document Formatting",
        points: [
          "Standardized clinical case sheet layout: Chief Complaint, History of Present Illness (HPI), Associated Symptoms, Medications, Disclaimers.",
          "One-click print/export styling for seamless clinical handoff.",
        ],
      },
    ],
    securityAndReliability: [
      "Zero medical accuracy claims made: prominent legal and clinical disclaimers across all screens.",
      "Strict sanitization of user text before passing to the AI integration layer.",
      "No permanent storage of patient identifiable health information on unsecured third-party servers.",
    ],
    testingStrategy: [
      "Simulated patient dialogue testing with synthetic English, Hindi, and Hinglish transcripts to verify extraction precision.",
      "Adversarial prompting to verify that the AI refuses to provide drug dosages, prescriptions, or definitive diagnoses.",
      "Red-flag trigger testing to guarantee instant emergency banner presentation upon acute symptom detection.",
    ],
    challengesAndMitigations: [
      {
        challenge: "Handling colloquial Hindi/Hinglish phrasing that standard NLP classifiers misinterpret.",
        mitigation: "Leveraged Gemini's multilingual semantic understanding with contextual few-shot guidance for Indian colloquial expressions.",
      },
      {
        challenge: "Preventing patients from treating the AI intake as an authoritative doctor.",
        mitigation: "Placed persistent, unavoidable UI banners stating 'Intake Assistant Only — Not a Medical Diagnosis' and requiring acknowledgement.",
      },
    ],
    resultsAndMetrics:
      "Measured clinical trial metrics not currently published. Demonstrates validated conversational-to-structured clinical pipeline without synthetic hallucinations.",
    lessonsLearned: [
      "In healthcare engineering, knowing what NOT to automate is more critical than what to automate.",
      "Structured output constraints with zero-fabrication rules make LLMs viable for serious administrative support.",
    ],
    futureImprovements: [
      "FHIR (Fast Healthcare Interoperability Resources) JSON export compliance for integration with hospital EHR systems.",
      "Support for regional audio dialects via specialized fine-tuned Whisper models.",
      "Doctor annotation mode allowing clinicians to stamp and sign off case sheets digitally.",
    ],
  },
];
