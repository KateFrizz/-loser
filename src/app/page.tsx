"use client";
import { useCallback, useEffect, useState } from "react";
import { Landing, Loading, Practice, Premium, QuizStep, Registration, Result } from "@/components/screens";
import { QUESTIONS, SEGMENTS, getPlan, getSegment, type Answers } from "@/lib/quiz";

type Screen =
  | { name: "landing" }
  | { name: "quiz"; q: number }
  | { name: "loading" }
  | { name: "result" }
  | { name: "register" }
  | { name: "practice" }
  | { name: "premium" };

type State = { screen: Screen; answers: Answers };
const KEY = "closer-funnel-v1";
const initial: State = { screen: { name: "landing" }, answers: QUESTIONS.map(() => null) };

export default function Home() {
  const [state, setState] = useState<State>(initial);
  const [ready, setReady] = useState(false);

  // Restore progress (answers survive reloads and going back).
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (saved) setState(JSON.parse(saved));
    } catch {}
    setReady(true);
  }, []);
  useEffect(() => {
    if (!ready) return;
    try { sessionStorage.setItem(KEY, JSON.stringify(state)); } catch {}
  }, [state, ready]);

  const go = useCallback((screen: Screen) => {
    setState((s) => ({ ...s, screen }));
    window.scrollTo({ top: 0 });
  }, []);

  const { screen, answers } = state;
  const segment = SEGMENTS[getSegment(answers)];
  const plan = getPlan(answers);

  const select = useCallback((q: number, v: number) =>
    setState((s) => ({ ...s, answers: s.answers.map((a, i) => (i === q ? v : a)) })), []);

  if (!ready) return <div className="min-h-dvh bg-bg" />;

  switch (screen.name) {
    case "landing":
      return <Landing onStart={() => go({ name: "quiz", q: 0 })} />;
    case "quiz": {
      const q = screen.q;
      return (
        <QuizStep
          index={q}
          value={answers[q]}
          onSelect={(v) => select(q, v)}
          onBack={() => go(q === 0 ? { name: "landing" } : { name: "quiz", q: q - 1 })}
          onNext={() => go(q === QUESTIONS.length - 1 ? { name: "loading" } : { name: "quiz", q: q + 1 })}
        />
      );
    }
    case "loading":
      return <Loading onDone={() => go({ name: "result" })} />;
    case "result":
      return <Result segment={segment} plan={plan.text} onNext={() => go({ name: "register" })} />;
    case "register":
      return <Registration onContinue={() => go({ name: "practice" })} />;
    case "practice":
      return <Practice key={segment.name} segment={segment} onBack={() => go({ name: "register" })} onNext={() => go({ name: "premium" })} />;
    case "premium":
      return <Premium segment={segment} minutes={plan.minutes} onBack={() => go({ name: "practice" })} />;
  }
}
