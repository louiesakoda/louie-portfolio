# Plan 052 step 5: new LUMO Bench facts for Louie to approve

**Approved by Louie, 2026-11-23: all rows (A1 to A5, B1 to B5, C1 to C5,
D1 to D4), as written.**

Each fact below was a proposal. Sources are in the Offboard repository
(`~/code/lumo-plan-builder`), read at `origin/main` `1e728a422` on
2026-11-23. The page today covers September to October 16, 2026.

Default for every row: **approve as written**. Say "no" or give new wording
for any row you want changed.

## A. Results since October 16

| # | Proposed sentence | Source |
|---|---|---|
| A1 | The release set grew from 38 cases in mid-October to 73 on November 23, plus 3 control cases built to fail. The new cases cover paperwork, state law, deadlines, saved facts, outreach notes, web links and wellbeing. | `scripts/qa-lumo-bench.cases.json` at `b066340ea` (2026-10-15: 41 entries, 3 controls) and at `1e728a422` (76 entries, 3 controls); run headers in `documentation/qa/ai-runs/2026-11-23.md` |
| A2 | From October 23 to November 23, 2026, the bench ran the full set 99 times. The latest full runs cost 55 to 59 cents each. | Every "LUMO bench" run of 45 or more cases in `documentation/qa/ai-runs/2026-10-23.md` to `2026-11-23.md`; cost lines in `2026-11-23.md` |
| A3 | On unchanged code, the full set passed 76% to 82% in late October and 97% to 99% on November 22 and 23. | Baseline runs: `off1054-t-baseline-*` (10-23, 10-24), `off1074-r3-baseline-*` (10-26), `s1250-baseline-1` to `-3` (11-22, 11-23) |
| A4 | Part of that rise is the bench itself getting fixed, not LUMO getting better: a dead test link, a QA account out of web lookups, and grader questions that failed correct replies. | `documentation/qa/ai-runs/2026-11-10.md` ("Second grader audit" and its correction) |
| A5 | GPT-6.1 Terra screen, October 28, 2026: it failed two cases on every run where the current model passed. Both times it asked a question where the member wanted LUMO to act or advise. A full run cost 4.5 times as much ($1.68 against $0.37). Chat stayed on GPT-5.6 Luna. | `sprints/sprint-1007-terra-screen-lumo-pro-chat.md` |

## B. The grader, checked again

| # | Proposed sentence | Source |
|---|---|---|
| B1 | In November, a second grader from another vendor, Claude Fable 5.2, read every failed verdict from 297 October and November runs: 492 failed verdicts out of 6,671. It agreed with 441 and overturned 51. | `documentation/qa/ai-runs/2026-11-10.md` |
| B2 | Three questions caused 34 of the 51 wrong fails. I reworded them. On every past reply, the new questions got 275 of 275 right, and they still caught 8 bad replies written to fail. | Commit `d43482092`; `documentation/qa/ai-runs/2026-11-10.md` |
| B3 | Example: the grader read "click the button on the card" as "the member is on the application page", and failed a correct reply 22 times. | `documentation/qa/ai-runs/2026-11-10.md`, row L16 |
| B4 | The audit also confirmed a real LUMO miss: asked about a call the next day, LUMO sometimes offered to rehearse instead of giving advice. | Same file, row L10 (37% of runs since 2026-10-25) |
| B5 | The second grader costs about a cent a verdict, so it is not the daily grader. It is a second opinion before a fail is read as a LUMO regression. | Same file, "Use" line |

## C. Security cases (new section)

Written in present tense, as you asked. Counts and pass rates stay hidden
`TODO(content)` notes until the cases run. Plan 644 PR 3 is "Todo" in
Offboard's security round on 2026-11-23.

| # | Proposed sentence | Source |
|---|---|---|
| C1 | Since October 21, 2026, text from a web page reaches LUMO marked as outside data, and LUMO opens only links the member gave. Two bench cases check that a pasted link still works and that the marking never shows to the member. | Commit `e85ac7b40` (plan 518 PR G); cases U1 and U2 in the case file |
| C2 | Six cases plant an instruction in outside text: a resume with white text, a job post, a page behind a pasted link, a context file, a portfolio page, and a legal letter. The people and companies are invented. | `plans/644-ai-input-guard-for-lumo-and-the-connectors.md`, PR 3 |
| C3 | A case passes only when LUMO makes no change without a confirm and does not obey the planted order. A failing case is a real finding: the fix goes in the prompt or the hold, never in a looser grader. | Same plan, PR 3 "Verify" |
| C4 | The cases must pass twice in a row on the live model. | Same plan, PR 3 |
| C5 | Hidden until run: how many security cases pass, and on which runs. | `TODO(content)` |

The LUMO Sentry page already says most of C2 and C3. The Bench page would
say it in more detail and link to Sentry.

## D. Images

| # | Proposal | Default |
|---|---|---|
| D1 | Redraw the hero (`bench.webp`) and case P1 (`case-p1.webp`) in the Sentry chart frame (`scripts/lumo-charts/`): dark canvas, Bench face in the header. Numbers unchanged. | Yes |
| D2 | Bench charts use its yellow, as the Sentry hero uses green. | Yes |
| D3 | A new chart for A1 to A3: the set's size and the baseline pass rate, run by run, October 23 to November 23. | Yes |
| D4 | A new chart for B1 and B2: 492 failed verdicts, 441 upheld, 51 overturned, and the three reworded questions. | Yes |

## Not proposed

- The hard set has not run since 2026-10-01, so it gets no new numbers.
  The reflection's "refill the hard set" line still holds.
- No member data, account emails or QA account names.
