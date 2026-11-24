# Plan 053: LUMO Ghost Check, a fourth page in the LUMO family

Status: in progress. Louie approved the fact list and every default on
2026-11-23: the name LUMO Ghost Check, coral, an icon round with a small
ghost badge, and the flat homepage list.

Built 2026-11-23 on branch `claude/lumo-ghost-plan`, not committed: the
page, four charts, the family entry, evidence and tests (steps 2 to 7).
Open: Louie confirms the icon (working pick: round 1, draft 3, in
`plans/053-ghost-icon-drafts.png`), and the new product screenshots
(`TODO(asset)`).

## Goal

The ghost job checker gets its own case study in the LUMO family, in the
pattern plan 052 set: `LUMO <Name>` at `/work/lumo-<name>`.

| Page | Name | URL |
|---|---|---|
| The agent | LUMO | `/work/lumo` |
| The evals system | LUMO Bench | `/work/lumo-bench` |
| The security agent | LUMO Sentry | `/work/lumo-sentry` |
| The ghost job checker | LUMO Ghost Check (working name) | `/work/lumo-ghost-check` (new) |

The page's subject: a score people act on. A job seeker pastes a link and
gets a number, a plain verdict, the evidence, and one next step. The design
problem is trust: the score must not punish a normal posting, must not hide
a check that did not run, and must not be contradicted by its own summary.

## Why this page holds up

- The checker has its own engine (`supabase/functions/_shared/ghost/`), its
  own public page, share pages, and a watch feature.
- One engine serves every place the check runs (fact rows A3 and A4).
- Offboard has dated decision records for the main calls: no email gate
  (2026-08-14), keep the score direction (2026-08-15), one stop line
  (2026-11-02).
- The story has two honest failures: the score counted normal cross-posting
  as ghost evidence, and five signals never ran in production. Both were
  found, measured and fixed.

## Sources

All in the Offboard repository (`~/code/lumo-plan-builder`), read at
`origin/main` `1e728a422` on 2026-11-23. Read the files, not a summary.

- Engine: `supabase/functions/_shared/ghost/scoring.ts`, `scoreBands.ts`,
  `pipeline.ts`, `shareUtils.ts`
- Stop line: `src/lib/ghost/stopLine.ts`,
  `supabase/functions/build-job-packet/pipeline.ts`
- Plans: `plans/054-*` (scoring quality), `209-*` (public checker), `210-*`
  (signal reliability), `211-*` (watch), `213-*` (score trust), `242-ghost-*`
  (cost per run), `250-*` (carry-through to sign-up), `357-*` (closed
  postings), and their rows in `plans/README.md`
- Decisions: `coach/decisions/2026-08-14-ghost-checker-no-email-gate.md`,
  `coach/decisions/2026-08-15-ghost-score-direction.md`
- Model check: `documentation/qa/ai-runs/2026-10-07-gpt6-luna-helper-qualification.md`
- Where it shows: `documentation/product/how-this-works.md`,
  `documentation/product/specs/offboard-extension.md`,
  `documentation/product/specs/offboard-for-chatgpt.md`

## What the page leaves out

- **Real usage numbers.** Checks run, sign-ups, emails captured, payers, and
  the LinkedIn spike counts (`coach/evidence/2026-08-26-linkedin-ghost-check-spike.md`,
  and the "Actual result" lines in the decision files). Standing rule: no
  real Offboard user numbers on the portfolio. Test and system results are
  fine.
- **Abuse limits.** The daily cap on uncached public checks, the per-address
  limits, and the internal fair-use ceilings. A bot can read the portfolio.
- **Real companies as examples.** The 2026-08-15 bug was seen on a real
  employer's report. The page describes the bug without the employer.
- **Recorded requests.** The model check's request recordings hold scraped
  third-party text and are not in the repository; none goes on the page.
- **Guard details.** The page may say the apply link is checked through a
  guarded fetch because a posting's author controls that link. It does not
  list the rules of the guard.

Safe to show: the 15 signals and their labels, the three bands and their
cutoffs (members see them), the stop line at 70 (members see it), the
phrase lists idea of the summary guard (not every pattern), timeouts and
credit costs as system measurements.

## Steps

### 1. Facts (Louie approves)

`plans/053-ghost-facts.md` lists each proposed sentence with its source.
No sentence goes on the page without a yes. Rows marked "needs Louie" hold
a choice, not just a yes.

### 2. Family entry

- Add `lumo-ghost-check` to `content/work/projects.ts` with
  `family: "lumo"`, after `lumo-sentry`. The family strip and the homepage
  group pick it up from the array.
- Route `app/work/lumo-ghost-check/page.tsx`, anchors in `lib/routes.ts`,
  sitemap entry, e2e lists (`e2e/listing-images.spec.ts` counts go from
  6 and 9 to 7 and 10; the family tests in `e2e/case-studies.spec.ts`
  cover four pages).
- Homepage: four LUMO rows of seven. See open item 4.

### 3. Icon (Louie approves; costs credits)

A fourth face variant, in the 052 pattern: same face and light, a new body
shape, a badge at the lower right, its own accent color. The earlier rounds
cost 5,712 and 7,656 ElevenLabs credits. Ask before starting a round.

### 4. Images

In the shared chart frame (`scripts/lumo-charts/`, rendered by
`render.cjs`), with the new accent:

- **Hero:** paste a link, seven steps, 15 signals, one score, three bands,
  the stop line at 70. A diagram drawn for the page, labeled as one.
- **Cross-posting is not ghosting:** one legitimate job on three boards,
  scored before and after the 2026-07 recalibration (rows C1 to C4). Needs
  the before and after scores from the characterization tests, or it is
  drawn without numbers.
- **Signals that never ran:** which checks timed out before and after
  (rows D1 to D4).
- **One engine, every place:** the places the check runs (row A4).

Product screenshots, QA account only:

- Move `ghost-checking.webp` and `ghost-result.webp` from the Offboard page
  to this page (step 6).
- `TODO(asset)`: the public page, a shared report, the extension's gauge, a
  mid-band result ("Check Carefully") with its warning signs. Louie or
  Claude captures them from a QA account; no real member's check.

### 5. The case study

Outline in the house pattern. Section ids are the anchors.

- **`context`** "A number people act on." Who uses it, what a ghost job
  costs a person in a layoff (time and hope; no invented statistic), what
  the check returns. Rows A1 to A5.
- **`decision-syndication`** Decision 01: "A job on three boards is not
  three jobs." The first scorer read normal cross-posting as evidence.
  Rows C1 to C5.
- **`decision-signals`** Decision 02: "A check that did not run is not a
  pass." Timeouts killed five signals; the report shows each check's
  status. Rows D1 to D5.
- **`decision-summary`** Decision 03: "The words cannot contradict the
  number." One band module, and a filter on the AI summary. Rows E1 to E5.
- **`decision-gate`** Decision 04: "No gate before the answer." The public
  checker asks for nothing first. Rows B1 to B4.
- **`decision-stop`** Decision 05: "Warn at 61, stop at 70." The same line
  in the packet and the extension; the person can still go on below it.
  Rows F1 to F4.
- **`after`** "After the check": watch a posting, and tell a member when a
  tracked job closes. Rows G1 to G3.
- **`outcomes`** Live since the dates in row A2; test and system results
  only (rows H1 to H4); usage stays private. Hidden `TODO(content)` for
  anything Louie wants to add later.
- **`learnings`** Reflection. Draft from the decision reviews: the page's
  job turned out to be traffic and trust, not email capture (row B4, in
  words only); the band cutoffs were never re-measured (row I1). Louie
  edits or replaces.

Evidence index: one entry per decision and one for outcomes, each with its
route and anchor, so Ask Louie can cite them. Ask Louie questions: add one
or two for this page in `components/ai/ask-questions.ts`.

### 6. Offboard and sibling pages

- Offboard page, Decision 01 ("Check the role before tailoring anything"):
  keep the section and the packet-building screenshot, cut the two
  standalone ghost screenshots, add a link to the new page.
- LUMO Sentry and LUMO Bench: no text change. The family strip adds the
  fourth member on its own.

### 7. Check

`pnpm typecheck && pnpm lint && pnpm test && pnpm build`,
`pnpm validate:evidence`, the e2e suite, phone width, and
`pnpm lane:check` before merge. Record the plan in `docs/build-log.md`.

## Open items for Louie

1. **Name.** Default: **LUMO Ghost Check** at `/work/lumo-ghost-check`. It
   uses Offboard's own words ("Ghost check"). Other option: a one-word name
   like Bench and Sentry; none exists in the product, so Louie would coin
   it.
2. **Accent color.** In Offboard the ghost check's part color is honey,
   which is too close to Bench's yellow. Default: coral. LUMO keeps blue
   and lilac, Bench yellow, Sentry green.
3. **Icon round.** Yes or no to spending credits on a fourth face, and the
   badge cue (default: a small ghost).
4. **Homepage weight.** Four LUMO rows of seven. Default: keep the flat
   list for now and revisit after the page is live. Other option: show the
   family as one row that opens.
5. **Fact rows marked "needs Louie"** in `plans/053-ghost-facts.md`.
