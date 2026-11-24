# Plan 052: The LUMO family (LUMO, LUMO Bench, LUMO Sentry)

Status: in progress. Done 2026-11-23: icons (step 2), the Sentry page with
its hero (steps 3 and 4 for Sentry), homepage grouping; merged in PR 20 and
live at louiesakoda.com/work/lumo-sentry. Done 2026-11-23: the Bench
move to /work/lumo-bench with a redirect, and the family strip (step 1).
Done 2026-11-23: Bench updates (step 5), with Louie's
approval of each fact in `plans/052-bench-facts.md`. Open: the security
case results, after plan 644 PR 3 runs in Offboard. Louie's answers in this file are
from the session of 2026-11-23.

## Goal

LUMO becomes a parent brand with sub-brands. The portfolio shows three
pages that read as one family:

| Page | Name | URL |
|---|---|---|
| The agent | LUMO (stays as it is) | `/work/lumo` |
| The evals system | LUMO Bench | `/work/lumo-bench` (new; `/work/lumo-evals` redirects to it) |
| The security agent | LUMO Sentry | `/work/lumo-sentry` (new) |

Later sub-brands follow the same pattern: `LUMO <Name>` at `/work/lumo-<name>`.

## Louie's answers (2026-11-23)

1. **Family.** LUMO is the parent; Bench and Sentry are sub-brands. Keep the
   all-caps `LUMO`. Each page links to its siblings.
2. **Disclosure.** The Sentry page shows the design and the decisions, not
   the detection thresholds. See "What the Sentry page leaves out".
3. **Results.** Sentry is written in present tense as built. Outcome numbers
   are `TODO(content)` markers until the Offboard review points
   (2026-12-03, 2026-12-14, 2027-01-05) produce them.
4. **Visual.** Each sub-brand gets its own icon: a variant of the LUMO face.
   All stay on the Offboard plate.
5. **Bench updates.** New, more polished images that match the Sentry
   imagery; results since October 2026; a section on the security cases.
6. **Homepage.** LUMO, LUMO Bench and LUMO Sentry sit together in the list.
7. **Icons.** Claude drafts the two face variants; Louie approves before they
   go on the site.
8. **Sentry hero.** A diagram drawn for the page, labeled as a diagram, not a
   product screen.

## Sources

All in the Offboard repository (`~/code/lumo-plan-builder`), read at
`origin/main` `56342b204` on 2026-11-23. Read the files, not a summary.

- Sentry bet: `documentation/product/specs/security-sentry.md`
- Sentry decision: `coach/decisions/2026-11-22-security-sentry-staff-only-rules-first.md`
- Sentry round (state of each PR): `plans/rounds/2026-11-22-security-sentry-round.md`
- Sentry plans: `plans/642-*` to `plans/645-*` (642 on `main`; 643 to 645 on
  their branches if not yet merged)
- Bench since October: `documentation/qa/ai-runs/lumo-bench/`,
  `~/code/lumo-bench-runs`, and `coach/decisions/` files dated after
  2026-10-16 that name the bench
- Bench security cases: plan 644 PR 3 (state "Todo" on 2026-11-23)

## What the Sentry page leaves out

An attacker can read the portfolio. These stay off the page and out of the
AI Louie evidence index:

- The exact conditions for a ban (account age, client type, address rules,
  the hourly ban limit) and how long an address stays blocked.
- The run interval if it would tell a bot how long it has. "On a schedule"
  is enough; check with Louie before naming 15 minutes.
- The red team's probe list and any probe that came back broken, including
  backlog row A1.
- Gaps in Offboard's own controls (the admin second-step gap, the old
  password settings, skipped scan checks).
- Account emails, the staff page URL, the Supabase project id.
- Louie's son's account takeover (in the decision file). Personal; leave out
  unless Louie asks for it.

Safe to show: the 2026-11-21 bot sign-ups as the trigger (no member data was
read), the two-person security team, "rules first, AI only on flagged cases,
$25 a month", "acts alone only on what one click undoes", outside text is
data and LUMO asks before a write, a weekly attack on our own app with test
accounts, staff only until there is proof.

## Steps

### 1. Family structure

- Rename slug `lumo-evals` to `lumo-bench` in `content/work/projects.ts`,
  `lib/routes.ts`, `app/work/`, `app/sitemap.ts`, the evidence index, and
  the e2e specs. Add a permanent redirect from `/work/lumo-evals`.
- Add `lumo-sentry` as a project (facts: role, years 2026, team).
- A sibling strip on each LUMO page: the three icons and names, the current
  page marked. Built from `projects.ts`, so a fourth sub-brand is one entry.
- Homepage: the three LUMO rows sit together.

### 2. Icons (Louie approves)

The LUMO face (`public/work/lumo/face.webp`) is a 3D render, so a variant
needs an image model edit, not an SVG. Draft one variant for Bench and one
for Sentry that keep the face, colors and light, and add one cue each.
Show Louie the drafts before any goes on the site. If the draft tool costs
credits, ask first.

Louie's direction after round 1 (2026-11-23):

- Each sub-brand has its own accent color: **yellow for Bench, green for
  Sentry**. LUMO keeps its blue and lilac.
- The cue (clipboard, shield) sits at the **lower right** of the body, like a
  badge, not centered. A centered shield read as a beard.
- The body shape changes a little for each, so it reads as a relative of
  LUMO, not a copy: Bench wider and squatter, Sentry taller and upright.
- Drafts live in the ElevenLabs flow "LUMO sub-brand icons". Round 1: 5,712
  credits. Round 2 (square, 1:1): 7,656 credits.
- **Picked 2026-11-23:** round 2, Bench 3 and Sentry 3. Background removed
  with BiRefNet in the same flow (100 credits). Cropped to the original's
  512×512 frame with the body at 84% of the width:
  `public/work/lumo-bench/face.webp`, `public/work/lumo-sentry/face.webp`.
  Size check: `plans/052-lumo-family-icons.png`. At 32 px and below the
  badge is too small to read; color and body shape still separate the three.
  Use the icons at 40 px or larger where the badge has to read.
- The accent colors apply to the icons first. Whether they also tint the
  Bench and Sentry charts (step 3) is open; the plate stays Offboard's.

### 3. One image system for Bench and Sentry

A shared frame for every chart on both pages: same canvas, type, rules, and
label style, with the sub-brand icon and name in the header line. Then:

- Sentry hero: watch, decide, act or alert, undo; the weekly red team beside
  it. Labeled "A diagram drawn for this page".
- Bench hero and charts: redrawn in the same system. Numbers unchanged
  unless step 5 adds sourced ones.

Follow the token rules in `AGENTS.md` for anything rendered in the page.

### 4. LUMO Sentry case study

Outline, in the house pattern (context, decisions, outcome, reflection):

- **Context.** Two people are the security team. On 2026-11-21 a script made
  two accounts; nothing flagged it.
- **Decision 01: rules first, AI on flagged cases only.** $25 a month.
- **Decision 02: act alone only on what one click undoes.** Everything else
  waits for a person. Why: a wrong ban on a member in a layoff costs more
  than a slow answer to a bot.
- **Decision 03: outside text is data.** Job posts, files and messages that
  LUMO and the connectors read are marked as data; LUMO asks before a write
  in a step where it read flagged text. Links to LUMO Bench.
- **Decision 04: attack ourselves every week.** Test accounts only; each
  probe held or broken.
- **Decision 05: staff only until there is proof.** No public claim until
  the controls have a record.
- **Outcome.** `TODO(content)` markers: time from signal to ban, false bans,
  red team runs, findings acted on, monthly AI spend.
- **Reflection.** `TODO(content)` until review point 3, or a short note on
  what Louie would watch first.

### 5. LUMO Bench updates

- Results since 2026-10-16: propose each new fact with its source file;
  Louie approves before it goes in.
- Security cases: the prompt-injection cases from plan 644 PR 3, in present
  tense; counts and pass rates are `TODO(content)` until the cases run.
- Name and links: LUMO Bench everywhere, sibling strip, new icon.

### 6. Check

`pnpm typecheck && pnpm lint && pnpm test && pnpm build`,
`pnpm validate:evidence`, the e2e suite including the old-URL redirect,
phone width, and `pnpm lane:check` before merge. Record the plan in
`docs/build-log.md`.

## Open items for Louie

- Approve the two icon drafts (step 2).
- Approve each new Bench fact (step 5).
- Whether the Sentry page may say "every 15 minutes".
