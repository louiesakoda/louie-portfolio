/**
 * Canonical resume data (spec §29). The /resume route renders HTML from this
 * structure in addition to offering the PDF (spec §28).
 *
 * Source: Louie's master resume of 2026-11-09
 * (Louie_Sakoda_Master_Resume_110926.pdf), supplied 2026-11-25. Headline,
 * summary, roles and skills follow it word for word. Education periods,
 * the GPA note and the "additional" line come from his earlier resumes; the
 * master does not contradict them. The downloadable PDF is generated from
 * this same structure (scripts/render-resume.py).
 *
 * The phone number in the source document is deliberately omitted from
 * both the HTML and the general public PDF.
 */

export type ResumeRole = {
  company: string;
  title: string;
  /** Display string as it appears on the resume, e.g. "May 2016 - May 2025". */
  period: string;
  /**
   * One short scale line for the homepage record (Plan 037). Condensed from
   * this role's own highlights, never a new fact.
   */
  scale?: string;
  highlights: string[];
};

export type ResumeEducation = {
  institution: string;
  credential: string;
  period: string;
  note?: string;
};

export type SkillGroup = {
  label: string;
  skills: string[];
};

export type Resume = {
  /** The resume's own headline, distinct from the site-wide role line. */
  headline: string;
  summary: string;
  roles: ResumeRole[];
  education: ResumeEducation[];
  skillGroups: SkillGroup[];
  additional: string[];
  /** Path under /public. */
  pdfPath: string | null;
};

export const resume: Resume = {
  headline: "Senior Product Designer | AI Products, Complex Systems & Design Systems",

  summary:
    "Product designer with 10+ years designing complex, multi-sided products in education, AI, and workflow software. At Offboard, I design and build AI products end to end: LUMO, a career agent with tool calls, a real-time voice mode, and human checkpoints; the eval system that gates every agent change; the design systems; and the visitor-to-member journey. Before that, I spent nine years as Lead UX Designer at CK-12, designing student, teacher, and administrator experiences for a platform serving 20M+ users, including Flexi, an LLM tutor, teacher analytics, and the 2.0 design system. I prototype and ship in working code with Claude Code, Codex, and Cursor.",

  roles: [
    {
      company: "Offboard",
      title: "Founding Product Designer & AI Systems Lead",
      period: "May 2025 - Present",
      scale: "Six-person startup",
      highlights: [
        "Designed and built Offboard, a job search platform, including LUMO, an AI career agent that acts across plans, jobs, applications, resume, documents, and network through tool calls, showing its steps and the sources it used.",
        "Designed human-in-the-loop patterns for agent actions: editable drafts, approval checkpoints, restate-and-confirm before any write, error recovery, and safeguards for high-stakes money and legal decisions.",
        "Designed and shipped LUMO's real-time voice agent (OpenAI Realtime) with a server-side tool allowlist and spoken confirmation before any write, covered by an automated golden test that checks the write in the database.",
        "Built LUMO Bench, the eval system that gates every agent change: a 32-case release gate, a 31-case hard set with a tuning threshold, and an LLM grader validated on 25 blind human verdicts (24 agree, Cohen's kappa 0.92); it also decides model swaps.",
        "Designed Offboard's connector for Claude and ChatGPT: one tool list for both assistants, so members can search jobs, build application packets, and update their tracker from their own AI.",
        "Own Offboard's two design systems (app and marketing): semantic tokens, a canonical design document with decision records, and automated tests that fail the build on violations, so UI built by engineers and AI tools stays on standard.",
        "Own the visitor-to-member journey: the marketing homepage narrative, a free no-email-gate Ghost Job Checker, search-driven company pages, pricing, and a redesigned onboarding and first-run experience.",
      ],
    },
    {
      company: "CK-12 Foundation",
      title: "Lead UX Designer",
      period: "May 2016 - May 2025",
      scale: "Platform serving 20M+ users",
      highlights: [
        "Designed complex workflows across a K-12 learning platform serving 20M+ users worldwide, supporting distinct student, teacher, and administrator needs across content, practice, assignments, reporting, and platform management.",
        "Led UX for Flexi, CK-12's LLM-powered student tutor, designing multi-turn flows, clarification patterns, and guided follow-ups (simpler explanation, analogy, more detail, challenge me) that help students reason instead of just getting answers.",
        "Designed Insights and Foresights, teacher analytics that turn student performance data into clear visualizations and next steps.",
        "Led the development and evolution of CK-12's 2.0 design system, establishing reusable, WCAG-aligned interaction patterns and partnering with Engineering on a parallel React component library.",
        "Shaped information architecture and navigation across student, teacher, and administrator experiences, simplifying complex workflows and creating consistency across the platform.",
        "Led user research and usability testing with students and educators, translating behavioral insights into product and architectural changes that reduced cognitive load.",
      ],
    },
    {
      company: "Odyssey",
      title: "Product Lead",
      period: "Nov 2021 - Nov 2022",
      scale: "80,000+ learners onboarded",
      highlights: [
        "Designed and developed a web3 education site that onboarded 80,000+ learners into crypto and web3 concepts with simple, approachable content.",
        "Created an automated email course (a \u201clearning playbook\u201d) completed by 12,000+ learners, combining curriculum design, UX writing, and engagement analytics.",
        "Managed a distributed team of 38 contributors to translate 400,000+ words into 10 languages, building processes and tooling to maintain quality at scale.",
      ],
    },
    {
      company: "Lowe's Companies, Inc.",
      title: "UX Production Designer",
      period: "Jun 2014 - May 2016",
      scale: "Managed 4 designers on a global redesign",
      highlights: [
        "Collaborated with product, marketing, and engineering to design promotional experiences for Lowes.com across desktop, mobile, and email.",
        "Produced and iterated on creative assets for home, landing, and brand pages in a fast-paced, experiment-driven ecommerce environment.",
        "Managed a team of 4 designers on a Global Redesign effort to modernize the ecommerce experience and align it with updated brand and UX guidelines.",
      ],
    },
  ],

  education: [
    {
      institution: "University of Utah",
      credential: "BS, Entrepreneurship",
      period: "Aug 2005 - May 2011",
      note: "3.8 GPA, Academic All-American",
    },
    {
      institution: "St. Leo University",
      credential: "MBA, Sports Business",
      period: "Jun 2011 - Jun 2012",
    },
  ],

  skillGroups: [
    {
      label: "Building",
      skills: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Supabase", "Claude Code", "Codex", "Cursor"],
    },
    {
      label: "AI Quality",
      skills: ["Eval Design", "Release Gates", "LLM-as-Grader Validation", "Golden Tests", "Model Requalification"],
    },
    {
      label: "AI Product Design",
      skills: ["AI Agents", "Conversational and Voice UX", "Tool Calling", "Human-in-the-Loop UX", "Agent Oversight and Steering", "MCP Connectors"],
    },
    {
      label: "Product & Systems Design",
      skills: [
        "Complex Information Architecture",
        "Multi-Sided Platforms",
        "Design Systems",
        "Design Tokens",
        "Data Visualization",
        "Growth and Onboarding Flows",
        "User Research",
        "Usability Testing",
        "WCAG Accessibility",
        "Figma",
      ],
    },
  ],

  additional: [
    "Former professional football player in the CFL. At the University of Utah, the only unanimous Consensus All-American in program history (2008) and a first-team Academic All-American.",
  ],

  pdfPath: "/resume/louie-sakoda-resume.pdf",
};
