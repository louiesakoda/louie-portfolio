# louiesakoda.com

The portfolio of Louie Sakoda, Founding Product Designer & AI Systems Lead at
[Offboard](https://www.offboard.co). Live at **[louiesakoda.com](https://louiesakoda.com)**.

You can read the case studies like any portfolio, or ask **Ask Louie**, an
assistant that answers questions about the work and links to the page
section each answer comes from.

## What is worth a look

- **Answers come from evidence, not from the model.** Ask Louie has one
  source of facts: the evidence index in `content/evidence/evidence.ts`,
  reached through a server-side `search_portfolio` tool. Every entry points
  at a route and an anchor on the site, and `pnpm build` fails if one of
  them does not resolve (`pnpm validate:evidence`). When the index has no
  evidence for a question, the assistant is instructed to say so rather
  than guess.
- **The job-description check cannot claim a match it cannot back.** Paste
  a job description, and the site compares it with the evidence index.
  `verifyMatches` checks each cited entry, and a match with no valid
  citation moves to the gaps list. Match percentages are removed before
  display. The pasted text is used for one model call, and the code never
  logs or stores it.
- **The site works without AI.** With no API key, every page still renders
  and every test still passes. Only the assistant reports that it is
  unavailable.
- **Tested in two browser engines.** Playwright runs each suite in Chromium
  at 1440×900 and in WebKit on an iPhone 13 profile, against a production
  build.
- **Built with AI coding agents, from a written spec.**
  `LOUIE_PORTFOLIO_V2_IMPLEMENTATION_SPEC.md` is the brief, `plans/` holds
  the phased implementation plans, and [`AGENTS.md`](AGENTS.md) holds the
  rules the agents follow. Content rule: no invented metrics, dates, or
  outcomes. A fact that is not supplied gets a `TODO(content)` marker.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript (strict) · Tailwind CSS v4 ·
shadcn/ui on Base UI · Vercel AI SDK with an OpenAI model · motion · zod ·
Vitest · Playwright · pnpm. Hosted on Vercel. There is no database, CMS, or
vector store.

## Run it

```bash
pnpm install
cp .env.example .env.local   # OPENAI_API_KEY and OPENAI_MODEL, for Ask Louie only
pnpm dev                     # http://localhost:3000
```

| Command                  | What it does                                        |
|--------------------------|-----------------------------------------------------|
| `pnpm dev`               | Dev server                                          |
| `pnpm build`             | Production build (runs `validate:evidence` first)   |
| `pnpm typecheck`         | `next typegen` + `tsc --noEmit`                     |
| `pnpm lint`              | ESLint                                              |
| `pnpm test`              | Unit tests (Vitest, `lib/**/*.test.ts`)             |
| `pnpm test:e2e`          | Playwright against a production build on port 3100 |
| `pnpm validate:evidence` | Checks every evidence entry's route and anchor      |
| `pnpm lane:check`        | The full check run on a Mac, before every merge     |

Every pull request merges only after `pnpm lane:check` passes on a Mac:
typecheck, lint, unit tests, build, both Playwright projects, and a secret
scan. See [`scripts/lane/README.md`](scripts/lane/README.md).

## Project structure

```
app/          routes (App Router) and /api/chat
components/   ui (upstream shadcn) · system · portfolio · stacked · app-shell · ai
content/      profile, resume, case studies (MDX), evidence index
lib/          AI adapter, routes allowlist, analytics, utils
plans/        phased implementation plans
docs/         build log
```

## Build log

[`docs/build-log.md`](docs/build-log.md) records each deviation from the
spec and each revision after launch, with its date and reason.
