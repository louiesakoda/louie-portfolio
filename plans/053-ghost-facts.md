# Plan 053 step 1: LUMO Ghost Check facts for Louie to approve

**Approved by Louie, 2026-11-23: all rows, with every default** (A2 as
written, A6 the LUMO role line, A7 the extension left out so A4 reads "six
places", D1 counts kept, I1 "still owed", I2 in, I3 out).

Each fact below is a proposal. Sources are in the Offboard repository
(`~/code/lumo-plan-builder`), read at `origin/main` `1e728a422` on
2026-11-23.

Default for every row: **approve as written**. Say "no" or give new wording
for any row you want changed. Rows marked **needs Louie** hold a choice or a
fact only you know.

## A. What it is and where it runs

| # | Proposed sentence | Source |
|---|---|---|
| A1 | The ghost check takes a job link and returns a ghost-risk score from 0 to 100, a plain verdict, the warning signs it found with their points, and one next step. A higher score means the posting is more likely a ghost job. | `supabase/functions/_shared/ghost/scoreBands.ts`; `scoring.ts`; the result screenshot already on the Offboard page |
| A2 | The check first shipped inside Offboard in January 2026. A public version with no login went live on August 14, 2026. **Needs Louie:** January 2026 is read from the date of the first database change for the checker, not from a launch note. Confirm or correct. | Migration `20260127061650` (table `ghost_job_analyses`); `plans/README.md` row 209 ("DONE 2026-08-14") |
| A3 | One engine runs every check. The signed-in checker, the public page and the packet build all import the same pipeline, so a fix lands in each place at once. | Header of `_shared/ghost/pipeline.ts`; `plans/210-ghost-signal-reliability.md`, "Why this matters" |
| A4 | The check runs in seven places: its own page in the app, the public page, every packet build, LUMO's chat, the browser extension, LUMO in Slack, and the Claude and ChatGPT connectors. | `src/pages/GhostChecker.tsx`, `GhostCheckPublic.tsx`; `build-job-packet/pipeline.ts`; `chat-with-lumo/toolDefinitions.ts` (`analyze_ghost_job`); `extension/src/panel/GhostCheck.tsx`; `slack-lumo/dailyJobs.ts`; `check_job_posting` in `documentation/product/specs/offboard-for-chatgpt.md` |
| A5 | The score is the sum of 15 signals. Thirteen can add points, each up to a set maximum. Two (a missing posting date, thin job details) are shown for information and add nothing. | `SIGNALS` in `_shared/ghost/scoring.ts` |
| A6 | **Needs Louie.** Your role and the team for this page's facts line. Proposed: the same role line as the LUMO page, years 2026. | `content/work/projects.ts` (the `lumo` entry) |
| A7 | **Needs Louie.** The extension is marked "Building" in its spec. Proposed: name it as "in testing" in A4, or leave it out of A4 until its review on 2026-12-05. Default: leave it out, so A4 reads "six places". | `documentation/product/specs/offboard-extension.md` (Status line) |

## B. Decision: no gate before the answer

| # | Proposed sentence | Source |
|---|---|---|
| B1 | The public checker asks for nothing before it runs: no login and no email. One link field, then the full report on the page. | `coach/decisions/2026-08-14-ghost-checker-no-email-gate.md`, "Decision" |
| B2 | The first recommendation was to ask for an email before the check. I rejected it. A gate puts friction in front of a visitor who has no reason yet to trust the tool. | Same file, "Why" and "Coach recommendation" |
| B3 | Repeat links cost once. The public checker runs as one system account, so the 7-day result cache is shared by every visitor: a link someone already checked comes back at once. | `findCachedGhostAnalysis` in `_shared/ghost/pipeline.ts`; `plans/README.md` row 209 |
| B4 | At the review, the email ask after the result had missed its target, and I retired it as the page's goal. The page's job is traffic and trust, not the list. (Words only; no counts.) | Same decision file, "Actual result", 2026-09-20 |
| B5 | A shared report is a page of its own that invites the next visitor to run a check. The shared copy leaves out the link the person pasted. | `plans/209-public-ghost-job-checker.md`, "The bet"; `sanitizeAnalysisForShare` in `_shared/ghost/shareUtils.ts`; `plans/README.md` row 250 |

## C. Decision: a job on three boards is not three jobs

| # | Proposed sentence | Source |
|---|---|---|
| C1 | The first scorer counted normal cross-posting as ghost evidence. A real job posted on LinkedIn, Indeed and the company's own site could collect 60 to 90 points from signals that all measured the same harmless thing. | `plans/054-ghost-checker-quality-and-quick-check-entry.md`, "Why this matters" |
| C2 | Three faults caused it. Every job board gives the same job its own ID, so "multiple IDs" fired on almost any job found on two sites. "Frequent reposting" read different boards' dates as reposts. "Conflicting dates" then counted that same difference a second time. | Same plan, findings F1, F2, F3 |
| C3 | Missing data also scored as evidence. A posting with no visible date, or one our own reader got little text from, gained points. A legitimate posting could reach the top band with no real ghost signal. | Same plan, finding F4 |
| C4 | The fix, July 2026: duplicate IDs count only when they come from the same site, reposting counts only on the same source and its maximum dropped from 35 points to 25, a date conflict needs a gap of more than 21 days (it was 7) and cannot fire when reposting already did, and missing data adds nothing. | `plans/README.md` row 054 (status text); `_shared/ghost/scoring.ts` |
| C5 | A result is labeled high confidence only when at least one of five evidence-bearing signals fired: closed in the applicant system, a broken apply link, frequent reposting, duplicate IDs, or reported layoffs. | `STRONG_SIGNAL_CODES` in `_shared/ghost/scoring.ts` |
| C6 | Before the change, the scoring code sat inside one 2,247-line function with no tests. I moved it into a pure module and wrote tests that pin its behavior first. | Same plan, "Current state" ("The scoring block itself is inline ... and has zero tests"); `_shared/ghost/scoring.test.ts` |

## D. Decision: a check that did not run is not a pass

| # | Proposed sentence | Source |
|---|---|---|
| D1 | In August 2026 the checker advertised 15 signals, and five of them never ran in production. The search for duplicate postings timed out on 35 of the last 40 checks, and the probe for a closed posting on 27 of 40. **Needs Louie:** these are counts of production runs, not of people. Default: keep the counts. Other option: "on most checks". | `plans/210-ghost-signal-reliability.md`, "Why this matters" |
| D2 | The cause: both calls asked the scraping service for slow work, with up to 30 seconds a page, inside outer budgets of 7 and 6 seconds. | Same section |
| D3 | The fix asked for less. The duplicate search now reads titles and descriptions only: about 2 credits where the old request cost about 42, and it finishes inside its budget. | Same section; `plans/README.md` row 210 |
| D4 | After the fix, live runs showed the closed-posting probe still starving at 12 seconds. 20 seconds was the floor. Then all 15 signals ran. | `plans/README.md` row 210 (status text) |
| D5 | The report page shows the status of each check, so a visitor can see what ran and what timed out. | `plans/210-*`, "Why this matters" (the report page shows per-check statuses); `SanitizedCheckRun` in `_shared/ghost/shareUtils.ts` |
| D6 | A check that crashed used to leave its row "pending" forever. Now a crash marks the row failed. | `plans/054-*`, finding F8; `plans/README.md` row 054 |

## E. Decision: the words cannot contradict the number

| # | Proposed sentence | Source |
|---|---|---|
| E1 | On August 15, 2026 a live report showed a score of 31, the verdict "Check Carefully", and an AI summary that opened with "high chance of being a ghost job". (The employer is not named.) | `coach/decisions/2026-08-15-ghost-score-direction.md`, "Why" |
| E2 | Two causes. The summary prompt had nothing that tied it to the band. And six places in the product each defined the bands on their own: 30 and 60 in the app, 35 and 65 on the share page and the social image. The same score of 62 read "Likely Ghost" in one place and "Medium" in another. | Same file; header of `_shared/ghost/scoreBands.ts`; `plans/README.md` row 213 ("Found SIX disagreeing band definitions") |
| E3 | I kept the direction of the score. Turning it into a "legitimacy score" would flip the meaning of every stored score, cached report, sent email and shared link, and it would not fix the bug. | Same decision file, "Why" (rejected option) |
| E4 | The fix has two parts. One module holds the band cutoffs, and a test checks every score from 0 to 100 against the copy the app uses. A filter reads the AI summary after it is written: if the words claim more risk, or more safety, than the band supports, the product shows a fixed sentence for that band. | `_shared/ghost/scoreBands.ts` (`summaryContradictsTier`, `getGhostTierDescription`); `plans/README.md` row 213 |
| E5 | The lesson I wrote down: telling a model the verdict in the prompt does not ground it. Check the output in code. | Comment block "AI summary guard" in `_shared/ghost/scoreBands.ts` |
| E6 | The filter was tested on 24 written summaries with no wrong rejection. How often it fires on real summaries was never measured; I closed that as not worth the work at the current volume. | `plans/README.md` row 213; decision file, "Actual result", 2026-09-20 |

## F. Decision: warn at 61, stop at 70

| # | Proposed sentence | Source |
|---|---|---|
| F1 | Three bands: 0 to 30 "Looks Legit", 31 to 60 "Check Carefully", 61 and above "Likely Ghost". | `GHOST_TIER_MIN` and `getGhostTierLabel` in `_shared/ghost/scoreBands.ts` |
| F2 | In a packet, the ghost check runs before the resume and the cover letter. At 70 or above the build stops there, before the tailored resume and the letter are written. | `RISK_GATE_SCORE` in `build-job-packet/pipeline.ts`; `documentation/product/how-this-works.md` ("The build runs its own ghost check before the resume and the letter; at the stop line it stops there") |
| F3 | From 61 to 69 the result is a warning and the person may go on. The check is a warning, not proof that a listing is fake. | `src/lib/ghost/stopLine.ts` (comment); the Offboard page, Decision 01 (already approved wording) |
| F4 | The packet and the extension stop at the same line. A test keeps the two numbers equal. | `src/lib/ghost/stopLine.ts`; `src/lib/ghost/stopLine.test.ts` |

## G. After the check

| # | Proposed sentence | Source |
|---|---|---|
| G1 | "Watch this job": a visitor can ask for an email when a posting changes. One monitor runs per job link, however many people watch it. | `plans/211-ghost-watch-monitor.md`; `plans/README.md` row 211 ("DONE 2026-08-15") |
| G2 | In the live test, a judged change sent one email, a retry of the same webhook sent none, and unsubscribing removed the watcher and the monitor. | `plans/README.md` row 211 (status text) |
| G3 | Since September 25, 2026, a tracked application shows "Posting closed as of" a date when its job posting goes away. A daily job checks saved links with a free probe, at no scraping cost. | `plans/README.md` row 357; `plans/357-saved-application-posting-check.md` |

## H. Cost and model checks (system results)

| # | Proposed sentence | Source |
|---|---|---|
| H1 | On August 26, 2026 new cost logging showed that a public check billed about 10 to 17 scraping credits, not the 1 to 2 I had assumed. Two causes: the scraper's own AI extraction duplicated a step the pipeline already ran, and a browser agent fired on 13 of 20 public runs. | `plans/README.md`, second row 242 ("Ghost check per-run Firecrawl cost") |
| H2 | The fix shipped the next day. The reviewer found a defect the plan had missed and sent the work back twice before it merged. | Same row ("DONE + VERIFIED LIVE 2026-08-27", "Reviewer found a defect the PLAN missed") |
| H3 | In October 2026 I checked a newer small model on the ghost pipeline before switching: 3 live postings, 5 stages, each recorded once and replayed twice. It passed only after a one-sentence prompt fix. | `documentation/qa/ai-runs/2026-10-07-gpt6-luna-helper-qualification.md`, results table and "Ghost detail" |
| H4 | The fix was for the stage that reads employer reviews. With it, 18 of 18 flags were false on real requests, and 18 of 18 were true on the same requests with a dated layoff and three recent ghosting reviews added. A first wording dropped 2 of 3 true signals and was rejected. | Same file, "Ghost detail" |
| H5 | The engine has 104 tests in 12 files. Among them: scoring 6, bands 10, request building and parsing 34, page availability 12. | Count of `Deno.test(` in `supabase/functions/_shared/ghost/*.test.ts` at `1e728a422` |

## I. Open or unmeasured (for the reflection)

| # | Proposed sentence | Source |
|---|---|---|
| I1 | The band cutoffs were due a re-measure from production data about two weeks after the revived signals shipped. **Needs Louie:** was it done? The repository does not show it. Default: say it is still owed. | Comment on `GHOST_TIER_MIN` in `_shared/ghost/scoreBands.ts`; `plans/README.md` rows 210 and 213 |
| I2 | LinkedIn job links failed when the checker first met real traffic from LinkedIn, because the scraping service cannot render that site. Fixed the same week. (Words only; no counts.) **Needs Louie:** include or leave out. Default: include. | `coach/evidence/2026-08-26-linkedin-ghost-check-spike.md`, point 3 |
| I3 | The thumbs up and down on a result were write-only: stored and never read. **Needs Louie:** is that still true, and do you want it on the page? Default: leave out. | `plans/054-*`, finding F14 |

## J. Images

| # | Proposal | Default |
|---|---|---|
| J1 | Hero diagram in the shared LUMO chart frame: link, seven steps, 15 signals, score, three bands, stop line at 70. Labeled as a diagram drawn for the page. | Yes |
| J2 | "Cross-posting is not ghosting": one job on three boards, the old signals that fired and the rule each one follows now. No scores unless the characterization tests give a real before and after. | Yes |
| J3 | "Signals that never ran": 15 signals, five marked timed out before the fix, all running after. | Yes |
| J4 | "One engine, every place": the places in row A4 around one pipeline. | Yes |
| J5 | Move `ghost-checking.webp` and `ghost-result.webp` from the Offboard page to this page. | Yes |
| J6 | New product screenshots from a QA account: the public page, a shared report, a mid-band result with its warning signs, the extension gauge if A7 allows. | Yes; `TODO(asset)` until captured |

## Not proposed

- Any count of real checks, sign-ups, emails, payers or the LinkedIn post's
  reach. Standing rule.
- The daily cap on public checks, the per-address limits and the internal
  fair-use ceilings.
- The employer named in the 2026-08-15 bug report.
- A statistic on how common ghost jobs are. Offboard's repository holds no
  sourced one.
