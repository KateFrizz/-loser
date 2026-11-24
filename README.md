# Closer — AI Communication Coach (prototype)

Interactive quiz-funnel prototype for **Closer**, a personal AI coach for communication skills. Built from the Figma design (Mobile 390 px + Desktop 1440 px).

**Flow:** Landing → 6-question quiz → result animation → personalized result → registration (demo) → free practice → Premium offer.

## Logic
- Q1–Q4 set the main segment: A → Connect, B → Express, C → Understand (+1 point each). Tie → the Q1 answer wins.
- Q5 (`main_barrier`) and Q6 (`daily_duration`) personalize the plan and don't change the segment.
- Answers are kept in `sessionStorage`, so going back or reloading keeps them.
- Registration, AI practice and payment are demo-only: no real auth, AI or charges.

## Stack
Next.js · TypeScript · Tailwind CSS · Manrope · lucide-react

## Run locally
```bash
npm install
npm run dev   # http://localhost:3000
```

## Structure
- `src/lib/quiz.ts` — questions, segments, scoring and practice content
- `src/components/ui.tsx` — design-system components (Button, AnswerCard, Progress…)
- `src/components/screens.tsx` — all funnel screens
- `src/app/page.tsx` — funnel state machine
