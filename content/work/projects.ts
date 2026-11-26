import type { DecisionMarkSpec } from "@/lib/decision-mark";
import type { Route } from "@/lib/routes";
import type { CaseStudyBriefContent } from "@/components/portfolio/case-study-brief";

/** Canonical editorial metadata. Claims and assets: plans/portfolio-strategy/. */
export type WorkProject = {
  slug: "ck12-analytics" | "offboard" | "lumo" | "lumo-bench" | "lumo-sentry" | "lumo-ghost-check" | "flexi";
  name: string;
  /** The name in the homepage list, when it differs from `name`. */
  shortName?: string;
  /** The homepage paragraph (stacked redesign, 2026-10-29). It restates the
   *  brief and summary; it adds no claim of its own. */
  blurb: string;
  title: string;
  tags: readonly string[];
  href: Route;
  summary: string;
  image: string | null;
  imageAlt: string;
  imageCaption: string;
  imageWidth: number;
  imageHeight: number;
  /** A different screenshot for the homepage tile, when `image` is styled
   *  differently from the other tiles' flat screenshots. */
  tileImage?: { src: string; alt: string; width: number; height: number };
  /** `none` when `image` is a chart, not a browser window (no address bar). */
  imageFrame?: "browser" | "none";
  /** A looping MP4 of the hero screen; `image` is its poster frame. */
  video?: string;
  /** The product's own icon. The family strip shows it at 40px; under 40px
   *  a sub-brand's badge is too small to read (Plan 052). */
  icon?: { src: string; width: number; height: number };
  /** A product family: each member's case study links to the others in a
   *  strip, in array order (Plan 052). A new LUMO sub-brand is one entry. */
  family?: "lumo";
  role: string;
  scope: string;
  status: string;
  result: string;
  /** The three-line summary at the top of the case study (Plan 045). */
  brief: CaseStudyBriefContent;
  featured: boolean;
  /** Homepage plate color: the project's own brand color (Plan 037). */
  plate: "offboard" | "foresights" | "flexi";
  /** Quick facts for the plate and case-study header. Resume-stated only. */
  facts: readonly { label: string; value: string }[];
  /** Decision marks on the hero image. Labels restate the caption or case study. */
  imageMarks: readonly DecisionMarkSpec[];
};

export const workProjects: readonly WorkProject[] = [
  {
    slug: "offboard",
    name: "Offboard",
    blurb: "People in a career transition rebuild the same context across a dozen disconnected tools. As founding designer, I designed and engineered Offboard end to end: a workspace for each opportunity, an AI pipeline that checks a role before tailoring anything, and drafts the person reviews before anything goes out.",
    title: "Offboard Job Search Platform",
    tags: ["Product strategy", "Agentic workflows", "Design engineering"],
    href: "/work/offboard",
    summary: "One workspace for a role, with research and drafts that stay connected. Automation does the repeated work; the person decides what goes out.",
    image: "/work/offboard/packet-ready.webp",
    imageAlt: "An Offboard Job Packet for a Senior Product Designer role at Crexi. The page opens with a fit score of 86 and the advice Go for it, apply, a two-sentence read of strengths and gaps, a Low ghost risk label, and a block titled Your packet is ready to send: the tailored resume with 12 changes for this job, the cover letter at 334 words, Apply on Greenhouse, and Mark as applied. Path to a Person shows 4 people to contact. On the right, LUMO is looking at the Crexi packet, names the biggest gap, and offers three questions.",
    imageCaption: "Ready to send. The packet leads with fit and ghost risk, then the tailored resume and cover letter the person reviews before applying. LUMO, on the right, reads the same packet. A QA account, October 2026. Product screenshot.",
    imageWidth: 2000, imageHeight: 1525,
    tileImage: { src: "/work/offboard/packet-window.webp", alt: "The same Offboard Job Packet in the full app window: the navigation on the left with Packets selected, the Crexi packet with its fit score of 86 and Low ghost risk label, the tailored resume and cover letter ready to send, and LUMO open on the right.", width: 2000, height: 1250 },
    role: "Founding Product Designer & AI Systems Lead",
    scope: "Product direction, UX, interface design, full-stack implementation, and iteration",
    status: "Working product",
    result: "Built end to end. The next product question is whether the first step meets the seeker where they are, not simply whether a packet can be generated.",
    brief: {
      problem: "People in a career transition rebuild the same context across a dozen disconnected tools. AI that only writes more documents can push them toward roles that are not worth it.",
      did: "As founding designer, I designed and engineered Offboard end to end: a workspace for each opportunity, an AI pipeline that checks a role before tailoring anything, drafts the person reviews before use, and a plan-first start for people not yet ready to apply.",
      result: "A live product. In early signups, most people finished onboarding and ran a ghost check, but few built a packet in their first days. That gap is the case for starting with a plan.",
    },
    featured: true,
    plate: "offboard",
    facts: [
      { label: "Role", value: "Founding Product Designer & AI Systems Lead" },
      { label: "Years", value: "2025 to now" },
      { label: "Team", value: "Six-person startup" },
    ],
    imageMarks: [{ x: 57.3, y: 20, w: 13.1, h: 20, label: "The packet leads with fit" }],
  },
  {
    /* Plan 053. Every fact is a row in plans/053-ghost-facts.md, approved by
       Louie on 2026-11-23. Leave out usage numbers, the public cap and
       limits, and the employer in the 2026-08-15 report: see the comment at
       the top of content/work/lumo-ghost-check.mdx. */
    slug: "lumo-ghost-check",
    family: "lumo",
    name: "LUMO Ghost Check",
    blurb: "People skip a job, or spend an evening on it, because of this score. The first version punished normal cross-posting, hid checks that timed out, and once let its own summary contradict it. I rebuilt the scoring, made every signal run, and tied the words to the number.",
    icon: { src: "/work/lumo-ghost-check/face.webp", width: 512, height: 512 },
    title: "LUMO Ghost Check",
    tags: ["Trust in AI", "Scoring design", "Product judgment"],
    href: "/work/lumo-ghost-check",
    summary: "Paste a job link and get a ghost-risk score, a plain verdict, the warning signs and one next step. The work was making the score deserve trust: what counts as evidence, whether each check ran, and whether the words agree with the number.",
    image: "/work/lumo-ghost-check/hero.webp",
    imageAlt: "A diagram titled From a job link to a score a person can act on, with the coral LUMO Ghost Check face. Four steps from left to right. 01 Paste: one job link, with no login and no email on the public page. 02 Check: 15 signals; 13 can add points and 2 are shown and add nothing; three are named, closed in the applicant system, apply link broken and frequent reposting, with 12 more. 03 Score: ghost risk from 0 to 100, where higher means more likely a ghost job; a bar shows three bands, Looks Legit from 0 to 30, Check Carefully from 31 to 60 and Likely Ghost from 61 to 100, with a line marked stop at 70; at 70 a packet build stops, and from 61 to 69 it is a warning and the person may go on. 04 Act: a plain result, with a verdict in words, the warning signs with points, and one next step. Below, a band: one engine, six places: its own page in the app, the public page, every packet build, LUMO's chat, LUMO in Slack, and the Claude and ChatGPT connectors.",
    imageCaption: "From a pasted link to a result. A diagram drawn for this page from Offboard’s scoring code, not a product screen.",
    imageWidth: 2000, imageHeight: 1200,
    imageFrame: "none",
    role: "Founding Product Designer & AI Systems Lead",
    scope: "Scoring design, signal reliability, AI output checks, and the public checker",
    status: "Live in Offboard and on a public page",
    result: "All 15 signals run, one module sets the bands in every place, and a filter keeps the AI summary in line with the score.",
    brief: {
      problem: "People act on the ghost score, and the first version could not be trusted. A real job posted on three boards could collect 60 to 90 points. The search behind five signals timed out on 35 of the last 40 checks. One live report showed a score of 31 beside a summary that said “high chance of being a ghost job”.",
      did: "I rebuilt the scoring so cross-posting and missing data are not evidence, cut the slow calls so every signal runs, put the band cutoffs in one module, and added a filter that rejects a summary that contradicts its band. The public checker asks for no login and no email.",
      result: "All 15 signals ran on live checks after the fix, and the report shows the status of each one. A packet build stops at a score of 70; from 61 to 69 the person decides. Usage numbers stay private.",
    },
    featured: true,
    plate: "offboard",
    facts: [
      { label: "Role", value: "Founding Product Designer & AI Systems Lead" },
      { label: "Years", value: "2026" },
      { label: "Team", value: "Six-person startup" },
    ],
    imageMarks: [],
  },
  {
    /* Plan 052. Written as built, at Louie's request (2026-11-23). Leave out
       ban conditions, limits, intervals and probe results: see the comment
       at the top of content/work/lumo-sentry.mdx. */
    slug: "lumo-sentry",
    family: "lumo",
    name: "LUMO Sentry",
    blurb: "Two people were Offboard's whole security team, and a script made bot accounts that nobody noticed. I built a sentry: plain rules watch sign-ups, sign-ins and the text LUMO reads, AI reads only what they flag, and it acts alone only on what one click undoes.",
    icon: { src: "/work/lumo-sentry/face.webp", width: 512, height: 512 },
    title: "LUMO Sentry Security Agent",
    tags: ["AI security", "Agent guardrails", "Product judgment"],
    href: "/work/lumo-sentry",
    summary: "A security agent for a two-person team. Plain rules watch around the clock, AI reads only flagged cases on $25 a month, and the sentry acts alone only on what one click undoes.",
    image: "/work/lumo-sentry/hero.webp",
    imageAlt: "A diagram titled How LUMO Sentry answers an attack, with the green LUMO Sentry face. Four steps from left to right. 01 Watch: plain rules read sign-ups, sign-ins and the outside text LUMO reads, around the clock, at no AI cost. 02 Decide: AI reads only what the rules flag, a second read on a short excerpt; AI spend stops at $25 a month, and at the cap the rules decide alone. 03 Act or alert: the sentry acts alone only on what one click undoes, banning a new, empty bot account, blocking a throwaway email domain, or blocking one address at sign-up; everything else is an email to staff. 04 Undo: every action can be undone, and one email says what it did and how to undo it, shown as two rows with Undo buttons. Below, a band: every Monday the red team attacks our own app with two test accounts; each probe reports Held, or Broken, which sends an urgent email.",
    imageCaption: "How the sentry answers an attack, from the first rule to the undo. A diagram drawn for this page from Offboard’s plans, not a product screen.",
    imageWidth: 2000, imageHeight: 1200,
    imageFrame: "none",
    role: "Founding Product Designer & AI Systems Lead",
    scope: "Security strategy, the rules for what an agent may do alone, AI input safety, and the red team",
    status: "Running, staff only",
    result: "The first bot case is replayed every week as a drill and ends in a ban with no person in the loop. Every action has an undo.",
    brief: {
      problem: "Two people were the whole security team. On November 21, 2026, a script made two bot accounts, and nothing flagged it. LUMO and the connectors also read text that outsiders wrote, and nothing checked it.",
      did: "I built a sentry with a short list of powers: plain rules watch around the clock, AI reads only flagged cases under a $25 monthly cap, outside text reaches LUMO as data, and the sentry acts alone only on what one click undoes. Every Monday it attacks our own app with test accounts.",
      result: "Each area runs in watch mode before it may act, and a person reads a week of what it would have done. The November 21 case is replayed every week and ends in a ban with no person in the loop.",
    },
    featured: true,
    plate: "offboard",
    facts: [
      { label: "Role", value: "Founding Product Designer & AI Systems Lead" },
      { label: "Years", value: "2026" },
      { label: "Team", value: "Six-person startup" },
    ],
    imageMarks: [],
  },
  {
    slug: "lumo",
    family: "lumo",
    name: "Offboard LUMO",
    shortName: "LUMO",
    blurb: "LUMO is the assistant inside Offboard. It reads the person’s own search, sits beside the page they are on, and turns every change into a card they confirm. I designed and built the conversation, the tools, and the rules for when it may act.",
    icon: { src: "/work/lumo/face.webp", width: 512, height: 512 },
    title: "LUMO Career Agent",
    tags: ["AI assistant", "Conversational UX", "Agentic workflows"],
    href: "/work/lumo",
    summary: "LUMO is the assistant inside Offboard. It reads the person’s own search, sits beside the page they are on, and turns every change into a card they confirm.",
    image: "/work/lumo/stream-poster.webp",
    video: "/work/lumo/stream.mp4",
    imageAlt: "A recording of one LUMO turn in Offboard's chat page. The member asks: Can they take my severance back? If so, draft an email asking them to narrow that. A Lumo is working panel ticks through its steps: classifying the question, reviewing the profile, loading the document analysis, drafting the ask email. The reply streams in with a Used profile and documents badge. It quotes the agreement word for word: If Employee breaches Sections 7, 8, or 9, Employee must repay the full severance amount. Then it drafts an email asking the company to narrow or remove that clause, and ends: Nothing was sent. You can edit the draft before sending.",
    imageCaption: "One LUMO turn, recorded live. LUMO reads the member’s reviewed agreement, quotes the clause word for word, and drafts an email asking to narrow it. Nothing is sent. A synthetic test agreement, October 2026. Product recording.",
    imageWidth: 1536, imageHeight: 864,
    tileImage: { src: "/work/lumo/card.webp", alt: "Three pieces of one LUMO turn, cut from a real screenshot. Top: the member asks, Can they take my severance back? If so, draft an email asking them to narrow that. Left: the How Lumo worked steps. Right: LUMO's reply, marked Used profile and documents. A lilac line links the step Loading document analysis to the reply's quote of the agreement: If Employee breaches Sections 7, 8, or 9, Employee must repay the full severance amount. A second line links Drafting your ask email to the drafted email's subject line.", width: 2400, height: 1800 },
    role: "Founding Product Designer & AI Systems Lead",
    scope: "Product direction, conversation and tool design, evaluation, and full-stack implementation",
    status: "Live in Offboard",
    result: "Live. Every change runs through a release gate before it ships.",
    brief: {
      problem: "In real conversations, a classifier that ran before the chat replaced LUMO’s answer with a tracker card, and members confirmed none of those cards. Asking about a page also meant leaving it.",
      did: "I designed and built LUMO end to end: the conversation, the tools, and the rules for when it may act. A card now appears only when the model calls a write tool with a concrete subject, and nothing changes until the person confirms. LUMO moved to a panel beside every page that says what it is looking at.",
      result: "Live in Offboard. On unchanged code, LUMO scores 30 to 32 of the 32 release cases, at about half a cent a turn.",
    },
    featured: true,
    plate: "offboard",
    facts: [
      { label: "Role", value: "Founding Product Designer & AI Systems Lead" },
      { label: "Years", value: "2025 to now" },
      { label: "Team", value: "Six-person startup" },
    ],
    imageMarks: [],
  },
  {
    slug: "lumo-bench",
    family: "lumo",
    name: "LUMO Bench",
    blurb: "An early product has too little data to train a model, so I built a bench instead: pass-or-fail cases, a harder set from real conversations, and a check on the grader itself. When a cheaper model failed a required safety case, LUMO kept its model.",
    icon: { src: "/work/lumo-bench/face.webp", width: 512, height: 512 },
    title: "LUMO Bench & Evals System",
    tags: ["AI evaluation", "Model selection", "Product judgment"],
    href: "/work/lumo-bench",
    summary: "Training a model needs far more conversations than an early product has. So every LUMO change runs through pass-or-fail cases, a harder set from real conversations, and a check on the grader itself.",
    image: "/work/lumo-bench/bench.webp",
    imageAlt: "A chart titled Four checks before a LUMO change ships. Release gate: 32 cases, unchanged code, four runs on 2026-09-26, scoring 31, 31, 30, and 32 of 32. Hard set: 31 harder cases, two runs on 2026-10-01, scoring 28 and 26 of 31, against a line at 85%: tune only when the mean is at or below this line. Grader check: 25 verdicts labelled blind on 2026-09-30, 24 of 25 agree with the grader, Cohen's kappa 0.92, and the one disagreement went to Louie. Model swap: the GPT-6 Luna requalification on 2026-09-23 kept the current model, because the candidate cost less per turn but failed a required safety case.",
    imageCaption: "The four checks and their numbers. A chart drawn for this page from the run reports in Offboard’s repository, not a product screen.",
    imageWidth: 2000, imageHeight: 1200,
    imageFrame: "none",
    role: "Founding Product Designer & AI Systems Lead",
    scope: "Evaluation strategy, test case design, grader checks, and model decisions",
    status: "In use for every LUMO change",
    result: "Two model swaps stopped at the gate, and prompt tuning paused when the hard set showed no room to measure a gain.",
    brief: {
      problem: "Every LUMO change ended with a 45-minute check by hand, and the result was a judgment in a sprint doc. A model swap or prompt change had no regression gate, and an early product has too little data to train a model.",
      did: "I chose a bench over training: test cases with pass-or-fail criteria, a runner against the deployed assistant, a hard set built from real conversations, rules that stop the prompt from learning the test, and a check on how often the grader agrees with a careful reader.",
      result: "A cheaper GPT-6 Luna failed a required safety case, so LUMO kept its model. When LUMO passed 87% of the hard set, above the 85% line where a gain can be measured, I paused prompt tuning and fixed a memory bug first.",
    },
    featured: true,
    plate: "offboard",
    facts: [
      { label: "Role", value: "Founding Product Designer & AI Systems Lead" },
      { label: "Years", value: "2026" },
      { label: "Team", value: "Six-person startup" },
    ],
    imageMarks: [],
  },
  {
    slug: "ck12-analytics",
    name: "CK-12 Foresights & Insights",
    shortName: "CK-12 Foresights",
    blurb: "A predicted skill level does not tell a teacher what to do next, and a single score is easy to overread. I led the experience architecture: predicted ranges instead of one score, a clear no-data state, and Insights, which separates skill from engagement.",
    title: "CK-12 Teacher Analytics",
    tags: ["Systems design", "Learning analytics", "Product judgment"],
    href: "/work/ck12-analytics",
    summary: "Separate prediction from diagnosis. Make uncertainty visible. Help teachers decide where to look next.",
    image: "/work/ck12-analytics/foresights.png",
    imageAlt: "Foresights shows predicted skill ranges for a demo class and marks students with insufficient data.",
    imageCaption: "A range, not a verdict. Foresights keeps the uncertainty visible alongside the prediction. Student information is demo data.",
    imageWidth: 1280, imageHeight: 768,
    role: "Lead UX Designer",
    scope: "Experience architecture, interaction model, prototypes, and visual language",
    status: "Product case study",
    result: "Teachers saw value in the tools, and half struggled with each tool’s central chart. The team answered with Recommendations, one action per insight, which shipped to teachers.",
    brief: {
      problem: "A predicted skill level does not tell a teacher what to do next, and a single score is easy to overread.",
      did: "I led the experience architecture, interaction model, and visual language: predicted ranges instead of a single score, a clear no-data state, and Insights, which separates skill from engagement so a teacher can check one student before acting.",
      result: "In CK-12’s published reviews with ten teachers each, 90% found each tool’s menu easy to interpret and 90% or more expected it to save time. Half struggled with each tool’s main chart. We answered with Recommendations, which shipped: one action button per insight, so the chart became supporting detail.",
    },
    featured: true,
    plate: "foresights",
    facts: [
      { label: "Role", value: "Lead UX Designer" },
      { label: "At CK-12", value: "2016 to 2025" },
      { label: "Platform", value: "20M+ users" },
    ],
    imageMarks: [{ x: 21, y: 31.5, w: 45.5, h: 39.5, label: "A range, not a verdict" }],
  },
  {
    slug: "flexi",
    name: "CK-12 Flexi",
    blurb: "An AI tutor can answer the question and still skip the learning. I led UX for Flexi: follow-up actions, so a student can ask for the next kind of help without writing a better prompt, and labels that separate AI answers from CK-12 Library content.",
    title: "CK-12 Flexi AI Tutor",
    tags: ["Conversational UX", "Learning", "Research"],
    href: "/work/flexi",
    summary: "An answer begins the interaction. Clarification, source choices, and a next challenge give students ways to keep learning.",
    image: "/work/flexi/follow-up.webp",
    imageAlt: "Flexi offers an analogy, translation, simpler explanation, more detail, rephrasing, and a Challenge Me follow-up.",
    imageCaption: "Different ways into an explanation, followed by a next challenge. Supplied Flexi product view.",
    imageWidth: 1278, imageHeight: 753,
    role: "Lead UX Designer",
    scope: "Research, UX/UI design, and prototyping with product, engineering, and curriculum partners",
    status: "Product case study",
    result: "Published classroom research describes useful support alongside prompting, comprehension, and tone barriers. Activity alone is not evidence of learning.",
    brief: {
      problem: "An AI tutor can answer the question and still skip the learning. Students need help getting unstuck without the tutor doing the work for them.",
      did: "I led UX for Flexi with product, engineering, and curriculum partners: follow-up actions, so a student can ask for the next kind of help without writing a better prompt, and labels that separate AI-generated answers from CK-12 Library content.",
      result: "In an external six-week study, teachers reported more student engagement and confidence, with prompting and reading level as the barriers. In CK-12’s analysis of Flexi in Adaptive Practice, answer-seeking questions fell from 72% to 52% by a student’s eighth question.",
    },
    featured: false,
    plate: "flexi",
    facts: [
      { label: "Role", value: "Lead UX Designer" },
      { label: "At CK-12", value: "2016 to 2025" },
      { label: "Platform", value: "20M+ users" },
    ],
    imageMarks: [{ x: 30.4, y: 32.4, w: 19, h: 43.6, label: "Different ways into an explanation" }],
  },
];

/** Every member of a project's family, the project included, in array
 *  order. Empty when the project has no family. */
export function projectFamily(project: WorkProject): readonly WorkProject[] {
  if (!project.family) return [];
  // The parent leads the strip; the sub-brands follow in array order.
  const members = workProjects.filter((p) => p.family === project.family);
  return [...members.filter((p) => p.slug === project.family), ...members.filter((p) => p.slug !== project.family)];
}

export const featuredWork = workProjects.filter((project) => project.featured);

/** The years a project ran: its "Years" fact, or "At CK-12" for the CK-12 studies. */
export function projectYears(project: WorkProject): string | undefined {
  return project.facts.find((fact) => fact.label === "Years" || fact.label.startsWith("At "))?.value;
}
