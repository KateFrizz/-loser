"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  BarChart3, Check, ChevronDown, Mail, Menu, ShieldCheck, Sparkles, Zap, X,
} from "lucide-react";
import { AnswerCard, BackButton, Badge, Button, Card, CheckItem, Glow, Logo, Photo, Progress, cx } from "./ui";
import { AppleIcon, GoogleIcon, PlanIllustration, Squiggle } from "./Illustration";
import { QUESTIONS, type Segment } from "@/lib/quiz";

/** Bottom CTA: sticky on mobile (safe-area aware), inline on desktop. */
function CtaBar({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cx(
      "sticky bottom-0 z-10 -mx-5 mt-auto bg-gradient-to-t from-bg from-70% to-transparent px-5 pt-4 pb-[max(28px,env(safe-area-inset-bottom))]",
      "lg:static lg:mx-0 lg:mt-0 lg:bg-none lg:p-0",
      className,
    )}>
      {children}
    </div>
  );
}

function DesktopNav({ right, dark }: { right?: ReactNode; dark?: boolean }) {
  return (
    <header className="hidden items-center justify-between px-[120px] py-7 lg:flex">
      <Logo dark={dark} />
      {right}
    </header>
  );
}

const Features = [
  { icon: ShieldCheck, label: "Safe & private" },
  { icon: Zap, label: "Personal practice" },
  { icon: BarChart3, label: "Progress tracking" },
];

/* ───────────────────────────── Landing ───────────────────────────── */
export function Landing({ onStart }: { onStart: () => void }) {
  const Headline = (
    <h1 className="t-hero text-white lg:t-hero-d">
      Confident communication starts with
      <span className="mt-1.5 block">
        <span className="inline-block -rotate-2 rounded-[18px] bg-lime px-3.5 pb-1 pt-0.5 text-primary lg:rounded-[22px] lg:px-5 lg:pb-1.5">you.</span>
      </span>
    </h1>
  );
  const Chip = (
    <span className="t-label inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-[7px] text-white lg:px-3.5 lg:py-2">
      <Sparkles size={16} className="text-lime" aria-hidden /> AI Communication Coach
    </span>
  );
  return (
    <main className="bg-closer relative min-h-dvh overflow-hidden text-white">
      <Glow className="-left-36 top-96 size-[420px] lg:-left-52 lg:size-[700px]" />
      <Glow className="-top-32 left-52 size-[360px] lg:left-[900px] lg:-top-64 lg:size-[700px]" />

      {/* Desktop nav */}
      <header className="relative hidden items-center justify-between px-[120px] py-7 lg:flex">
        <div className="flex items-center gap-5">
          <Logo dark />
          <span className="h-5 w-px bg-white/30" />
          <span className="t-label text-white/80">AI Communication Coach</span>
        </div>
        <nav className="t-label flex gap-9 text-white/85" aria-label="Sections">
          {["About", "How it works", "Paths", "Results", "Reviews"].map((l) => <span key={l}>{l}</span>)}
        </nav>
        <div className="flex items-center gap-6">
          <span className="t-label flex items-center gap-1.5">EN <ChevronDown size={14} aria-hidden /></span>
          <button onClick={onStart} className="t-btn flex items-center gap-2 rounded-full bg-lime px-5 py-2.5 text-primary transition-colors hover:bg-lime-dark focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-white">
            Take the quiz <span aria-hidden>→</span>
          </button>
        </div>
      </header>

      {/* Mobile */}
      <div className="relative mx-auto flex min-h-dvh max-w-[480px] flex-col px-5 pt-5 lg:hidden">
        <div className="flex items-center justify-between">
          <Logo dark />
          <Menu size={28} aria-hidden />
        </div>
        <div className="mt-4 flex flex-col gap-4">
          {Chip}
          <div className="relative">
            {Headline}
            <Squiggle className="absolute left-[150px] top-[96px] size-10" />
          </div>
          <p className="t-body text-white/80">Build communication skills, understand yourself and others, and create healthy relationships.</p>
        </div>
        <div className="relative mt-4 h-[250px] flex-1">
          <Photo src="/img/friends.jpg" alt="Friends talking at a cafe" className="absolute left-0 top-0 h-[150px] w-[calc(100%-24px)] border-[3px] border-primary-light" radius="90px 28px 28px 28px" />
          <Photo src="/img/connect.jpg" alt="Two people talking over coffee" className="absolute bottom-0 right-0 h-[150px] w-[calc(100%-24px)] border-[3px] border-primary-light" radius="28px 28px 90px 28px" />
        </div>
        <CtaBar className="from-transparent bg-none">
          <Button variant="lime" onClick={onStart}>Take the quiz — find your path</Button>
          <ul className="mt-5 grid grid-cols-3 gap-2">
            {Features.map(({ icon: I, label }) => (
              <li key={label} className="t-caption flex flex-col items-center gap-2 text-center text-white/85">
                <I size={24} className="text-lime" aria-hidden />{label}
              </li>
            ))}
          </ul>
        </CtaBar>
      </div>

      {/* Desktop hero */}
      <div className="relative hidden items-center gap-10 px-[120px] pb-14 pt-4 lg:flex">
        <div className="flex w-[520px] shrink-0 flex-col gap-6">
          {Chip}
          {Headline}
          <p className="t-body-d text-white/80">Build communication skills, understand yourself and others, and create healthy relationships in every area of life.</p>
          <Button variant="lime" onClick={onStart} className="w-[380px]">Take the quiz — find your path</Button>
          <ul className="flex gap-8">
            {Features.map(({ icon: I, label }) => (
              <li key={label} className="t-caption flex items-center gap-2.5 text-white/85"><I size={24} className="text-lime" aria-hidden />{label}</li>
            ))}
          </ul>
        </div>
        <div className="relative h-[660px] w-[640px] shrink-0">
          <Squiggle className="absolute -left-8 top-0 size-12" />
          <Photo src="/img/man.jpg" alt="Young man explaining his thoughts" className="absolute left-[380px] top-0 h-[410px] w-[260px] border-4 border-lime" radius="70px 170px 60px 170px" />
          <Photo src="/img/connect.jpg" alt="Two people talking over coffee" className="absolute left-10 top-[330px] h-[300px] w-[410px] border-4 border-lime" radius="60px 70px 170px 60px" />
          <Photo src="/img/friends.jpg" alt="Friends talking at a cafe" className="absolute left-0 top-10 h-[300px] w-[390px] border-4 border-primary-light" radius="170px 60px 70px 60px" />
          <div className="absolute left-[400px] top-[420px] w-[232px] rounded-3xl bg-white/95 p-5 text-primary">
            <BarChart3 size={24} aria-hidden />
            <p className="t-h1-d mt-1">2 min</p>
            <p className="t-answer text-muted">to get your personal communication plan</p>
          </div>
        </div>
      </div>
    </main>
  );
}

/* ───────────────────────────── Quiz ───────────────────────────── */
export function QuizStep({
  index, value, onSelect, onBack, onNext,
}: { index: number; value: number | null; onSelect: (v: number) => void; onBack: () => void; onNext: () => void }) {
  const q = QUESTIONS[index];
  const step = index + 1;
  const last = index === QUESTIONS.length - 1;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (["1", "2", "3"].includes(e.key)) onSelect(Number(e.key) - 1);
      if (e.key === "Enter" && value !== null && !(e.target instanceof HTMLButtonElement)) onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onSelect, onNext, value]);

  return (
    <main className="flex min-h-dvh flex-col">
      <header className="mx-auto w-full max-w-[480px] px-5 pt-4 lg:max-w-none lg:px-[120px] lg:py-7">
        <div className="flex items-center justify-between">
          <span className="lg:hidden"><BackButton onClick={onBack} /></span>
          <span className="hidden lg:block lg:w-[200px]"><Logo /></span>
          <div className="flex items-center gap-4">
            <div className="hidden w-[320px] lg:block"><Progress step={step} /></div>
            <span className="t-label text-ink">{step} of 6</span>
          </div>
          <span className="size-11 lg:h-px lg:w-[200px]" />
        </div>
        <Progress step={step} className="mt-3.5 lg:hidden" />
      </header>

      <section className="mx-auto flex w-full max-w-[480px] flex-1 flex-col px-5 pt-6 lg:max-w-none lg:items-center lg:justify-center lg:px-[120px] lg:pb-14 lg:pt-0">
        <div key={index} className="anim-in flex w-full flex-col gap-6 lg:w-[960px] lg:items-center lg:gap-8">
          {q.photo && (
            <Photo src={q.photo} alt="" className="h-[170px] w-full rounded-[28px_72px_28px_28px] lg:h-[190px] lg:rounded-[40px_120px_40px_40px]" />
          )}
          <h1 className="t-q text-ink lg:t-q-d lg:text-center">{q.title}</h1>
          <div role="radiogroup" aria-label={q.title} className="grid gap-3 lg:w-full lg:grid-cols-3 lg:gap-6">
            {q.answers.map((a, i) => (
              <AnswerCard key={a.label} label={a.label} icon={a.icon} selected={value === i} onClick={() => onSelect(i)} className="lg:h-full" />
            ))}
          </div>
          <div className="hidden flex-col items-center gap-4 lg:flex">
            <div className="flex gap-4">
              <Button variant="secondary" arrow={false} onClick={onBack} className="w-40">Back</Button>
              <Button onClick={onNext} disabled={value === null} className="w-[260px]">{last ? "Show my result" : "Next"}</Button>
            </div>
            <p className="t-caption text-muted">Press 1–3 to choose · Enter to continue</p>
          </div>
        </div>
        <CtaBar className="lg:hidden">
          <Button onClick={onNext} disabled={value === null}>{last ? "Show my result" : "Next"}</Button>
        </CtaBar>
      </section>
    </main>
  );
}

/* ───────────────────────────── Loading ───────────────────────────── */
export function Loading({ onDone }: { onDone: () => void }) {
  useEffect(() => { const t = setTimeout(onDone, 1800); return () => clearTimeout(t); }, [onDone]);
  return (
    <main className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-5 text-center" aria-live="polite">
      <Glow className="-left-32 -top-24 size-[420px]" />
      <div className="anim-float relative">
        <PlanIllustration className="w-[220px] lg:w-[280px]" />
      </div>
      <h1 className="t-h1 mt-6 text-ink lg:t-h1-d">Building your personal plan…</h1>
      <p className="t-body mt-3 max-w-[320px] text-muted lg:t-body-d lg:max-w-none">Matching your answers with the right practice.</p>
      <div className="mt-8 h-1.5 w-[240px] overflow-hidden rounded-full bg-primary-light/25">
        <div className="anim-fill h-full rounded-full bg-primary" />
      </div>
    </main>
  );
}

/* ───────────────────────────── Result ───────────────────────────── */
export function Result({ segment, plan, onNext }: { segment: Segment; plan: string; onNext: () => void }) {
  return (
    <main className="relative flex min-h-dvh flex-col overflow-hidden">
      <Glow className="-left-32 top-10 size-[320px] lg:-left-48 lg:-top-48 lg:size-[600px]" />
      <DesktopNav right={<Badge>Your result</Badge>} />
      <section className="relative mx-auto flex w-full max-w-[480px] flex-1 flex-col gap-5 px-5 pt-5 lg:max-w-none lg:flex-row lg:items-center lg:gap-20 lg:px-[120px] lg:pb-14 lg:pt-0">
        <div className="flex flex-col gap-5 lg:w-[580px] lg:shrink-0 lg:gap-4">
          <div className="flex items-center gap-3 lg:block">
            <div className="flex flex-1 flex-col gap-2 lg:gap-4">
              <span className="lg:hidden"><Badge>Your result</Badge></span>
              <p className="t-hero text-primary lg:t-hero-d">{segment.name}</p>
              <h1 className="t-section text-ink lg:t-q-d">{segment.subtitle}</h1>
            </div>
            <Photo src={segment.photo} alt="" className="h-[176px] w-[132px] shrink-0 lg:hidden" radius="66px 20px 66px 20px" />
          </div>
          <p className="t-body text-muted lg:t-body-d">{segment.description}</p>
          <Photo src={segment.photo} alt="" className="hidden h-[300px] w-full lg:block" radius="150px 40px 150px 40px" />
        </div>
        <div className="flex flex-1 flex-col gap-5 lg:gap-5">
          <Card className="lg:rounded-3xl lg:p-7">
            <h2 className="t-card text-ink">What you&apos;ll get</h2>
            <ul className="mt-3 flex flex-col gap-3 lg:mt-4 lg:gap-4">
              {segment.benefits.map((b) => <CheckItem key={b}>{b}</CheckItem>)}
            </ul>
          </Card>
          <Card tone="lavender" className="py-4 lg:rounded-3xl lg:px-7 lg:py-6">
            <p className="t-label text-primary">Your plan</p>
            <p className="t-body mt-1 text-ink lg:t-body-d">{plan}</p>
          </Card>
          <CtaBar><Button onClick={onNext}>Start free practice</Button></CtaBar>
        </div>
      </section>
    </main>
  );
}

/* ───────────────────────────── Registration ───────────────────────────── */
export function Registration({ onContinue }: { onContinue: () => void }) {
  const social = [
    { label: "Continue with Google", icon: <GoogleIcon />, primary: false },
    { label: "Continue with Apple", icon: <AppleIcon />, primary: false },
    { label: "Continue with Email", icon: <Mail size={20} aria-hidden />, primary: true },
  ];
  return (
    <main className="flex min-h-dvh flex-col">
      <DesktopNav />
      <section className="mx-auto flex w-full max-w-[480px] flex-1 flex-col items-center gap-3.5 px-5 pb-6 pt-4 lg:max-w-none lg:flex-row lg:justify-center lg:gap-12 lg:px-[120px] lg:pb-14 lg:pt-0">
        <span className="lg:hidden"><Logo /></span>
        <div className="flex w-full flex-col items-center gap-3.5 lg:w-auto lg:flex-row lg:gap-10">
          <PlanIllustration className="w-[180px] lg:w-[264px]" />
          <div className="flex w-full flex-col gap-3.5 lg:w-[420px] lg:gap-5">
            <h1 className="t-h1 text-center text-ink lg:t-h1-d lg:text-left">Your plan is ready.<br />Time to take action!</h1>
            <p className="t-body text-center text-muted lg:t-body-d lg:text-left">Save your personalized plan and try your first exercise for free.</p>
            <Card tone="lavender" className="py-4">
              <ul className="flex flex-col gap-3">
                {["Your personalized growth path", "Practice at your own pace", "Track your progress"].map((b) => <CheckItem key={b}>{b}</CheckItem>)}
              </ul>
            </Card>
          </div>
        </div>
        <span className="hidden h-[420px] w-px bg-line lg:block" />
        <div className="flex w-full flex-col items-center gap-2.5 lg:w-[376px] lg:gap-3">
          {social.map((s) => (
            <button
              key={s.label}
              onClick={onContinue}
              className={cx(
                "t-btn flex h-[52px] w-full items-center justify-center gap-3 rounded-[18px] transition-colors focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-primary-light",
                s.primary ? "bg-primary text-white hover:bg-primary-dark" : "border-[1.5px] border-line bg-surface text-ink hover:border-primary-light",
              )}
            >
              {s.icon}{s.label}
            </button>
          ))}
          <div className="t-caption flex w-full items-center gap-3 text-muted"><span className="h-px flex-1 bg-line" />or<span className="h-px flex-1 bg-line" /></div>
          <button onClick={onContinue} className="t-btn rounded text-primary underline underline-offset-4 hover:text-primary-light focus-visible:outline-[3px] focus-visible:outline-primary-light">
            Try without registration
          </button>
          <p className="t-caption text-center text-muted">
            By continuing, you agree to the <span className="text-primary underline">Terms of Use</span> and <span className="text-primary underline">Privacy Policy</span>.
          </p>
        </div>
      </section>
    </main>
  );
}

/* ───────────────────────────── Free Practice ───────────────────────────── */
export function Practice({ segment, onBack, onNext }: { segment: Segment; onBack: () => void; onNext: () => void }) {
  const [picks, setPicks] = useState<(number | null)[]>(segment.steps.map(() => null));
  const [current, setCurrent] = useState(0);
  const endRef = useRef<HTMLDivElement>(null);
  const done = current === segment.steps.length - 1 && picks[current] !== null;

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" }); }, [picks, current]);

  const pick = (i: number) => setPicks((p) => p.map((v, k) => (k === current ? i : v)));
  const retry = () => setPicks((p) => p.map((v, k) => (k === current ? null : v)));

  const Steps = [
    { n: "1", t: "Read the situation" },
    { n: "2", t: "Choose your reply" },
    { n: "3", t: "Get an instant tip from your AI coach" },
  ];

  return (
    <main className="flex min-h-dvh flex-col">
      <DesktopNav right={<div className="flex items-center gap-3"><span className="t-label text-muted">Free practice</span><BackButton onClick={onBack} /></div>} />
      <section className="mx-auto flex w-full max-w-[480px] flex-1 flex-col gap-5 px-5 pt-4 lg:max-w-none lg:flex-row lg:items-start lg:justify-center lg:gap-14 lg:px-[120px] lg:pb-14 lg:pt-4">
        <div className="flex items-center gap-3 lg:hidden">
          <BackButton onClick={onBack} />
          <span className="t-label text-muted">Free practice</span>
        </div>
        <div className="flex flex-col gap-5 lg:w-[760px] lg:gap-6">
          <div className="flex flex-col gap-3">
            <h1 className="t-h1 text-ink lg:t-h1-d">{segment.practiceTitle}</h1>
            <p className="t-body text-muted lg:t-body-d">Talk with your AI coach in a safe space and get an instant tip.</p>
          </div>
          <div className="flex flex-col gap-3 rounded-3xl border border-line bg-surface p-4 lg:gap-3.5 lg:p-6" aria-live="polite">
            {segment.steps.slice(0, current + 1).map((s, si) => {
              const chosen = picks[si];
              const opt = chosen !== null ? s.options[chosen] : null;
              return (
                <div key={si} className="flex flex-col gap-3">
                  <div className="anim-in flex flex-col gap-1.5 pr-7 lg:pr-[120px]">
                    <span className="t-caption text-muted">{segment.sender}</span>
                    <p className="t-body rounded-[6px_18px_18px_18px] bg-lavender px-3.5 py-3 text-ink lg:px-4 lg:py-3.5">{s.prompt}</p>
                  </div>
                  {opt && (
                    <>
                      <div className="anim-in flex justify-end pl-7 lg:pl-[120px]">
                        <p className="t-body rounded-[18px_6px_18px_18px] bg-primary px-3.5 py-3 text-white lg:px-4 lg:py-3.5">{opt.text}</p>
                      </div>
                      <p className={cx("anim-in t-answer rounded-2xl px-3.5 py-3 text-ink lg:px-4", opt.best ? "bg-lime" : "border border-line bg-[#fbfaff]")}>
                        {opt.best ? "Tip: " : "Try this: "}{opt.tip}
                      </p>
                    </>
                  )}
                </div>
              );
            })}
            {picks[current] === null ? (
              <div role="radiogroup" aria-label="Choose your reply" className="flex flex-col gap-2 pt-1">
                <span className="t-caption text-muted">Choose your reply</span>
                {segment.steps[current].options.map((o, i) => (
                  <button key={o.text} role="radio" aria-checked={false} onClick={() => pick(i)}
                    className="t-answer rounded-2xl border border-line bg-surface px-4 py-3 text-left text-ink transition-colors hover:border-primary-light hover:bg-[#fbfaff] focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-primary-light">
                    {o.text}
                  </button>
                ))}
              </div>
            ) : (
              <div className="flex flex-wrap gap-2 pt-1">
                {!segment.steps[current].options[picks[current]!].best && (
                  <Button variant="secondary" arrow={false} onClick={retry} className="h-12 w-auto flex-1">Try another reply</Button>
                )}
                {!done && <Button onClick={() => setCurrent((c) => c + 1)} className="h-12 w-auto flex-1">Continue</Button>}
                {done && (
                  <p className="t-answer flex w-full items-center gap-2 text-primary"><Check size={18} aria-hidden /> Nice work — you&apos;ve finished today&apos;s practice.</p>
                )}
              </div>
            )}
            <div ref={endRef} />
          </div>
        </div>
        <div className="flex flex-col gap-5 lg:w-auto lg:flex-1">
          <Card className="hidden lg:block lg:rounded-3xl lg:p-7">
            <h2 className="t-card text-ink">How it works</h2>
            <ol className="mt-4 flex flex-col gap-4">
              {Steps.map((s) => (
                <li key={s.n} className="flex items-center gap-3">
                  <span className="t-label grid size-8 shrink-0 place-items-center rounded-full bg-lime text-primary">{s.n}</span>
                  <span className="t-body text-ink">{s.t}</span>
                </li>
              ))}
            </ol>
          </Card>
          <CtaBar><Button onClick={onNext}>Get my personal plan</Button></CtaBar>
        </div>
      </section>
    </main>
  );
}

/* ───────────────────────────── Premium ───────────────────────────── */
export function Premium({ segment, minutes, onBack }: { segment: Segment; minutes: number; onBack: () => void }) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const terms = "Renews automatically at $9.99/month after the first month. Cancel anytime.";
  return (
    <main className="relative flex min-h-dvh flex-col overflow-hidden">
      <Glow className="-top-16 left-40 size-[320px] lg:left-[900px] lg:-top-48 lg:size-[700px]" />
      <DesktopNav right={<BackButton onClick={onBack} />} />
      <section className="relative mx-auto flex w-full max-w-[480px] flex-1 flex-col gap-5 px-5 pt-4 lg:max-w-none lg:flex-row lg:items-center lg:gap-20 lg:px-[120px] lg:pb-14 lg:pt-0">
        <span className="lg:hidden"><BackButton onClick={onBack} /></span>
        <div className="flex flex-col gap-5 lg:flex-1">
          <div className="flex flex-col gap-3">
            <Badge>{segment.name} · {minutes} min a day</Badge>
            <h1 className="t-h1 text-ink lg:t-h1-d">Your personal growth plan</h1>
            <p className="t-body text-muted lg:t-body-d">Everything you need for daily practice with your AI coach.</p>
          </div>
          <Card className="lg:rounded-3xl lg:p-7">
            <h2 className="t-card text-ink">What&apos;s included in Premium</h2>
            <ul className="mt-3.5 flex flex-col gap-3.5 lg:mt-4 lg:gap-4">
              {["AI coach and real-life conversation practice", "Self-reflection journal", "New exercises and scenarios every week", "Progress tracking"].map((b) => <CheckItem key={b}>{b}</CheckItem>)}
            </ul>
          </Card>
        </div>
        <div className="bg-closer flex flex-col gap-3 rounded-3xl p-5 text-white lg:w-[480px] lg:shrink-0 lg:gap-5 lg:rounded-[32px] lg:p-9">
          <Badge>Special offer</Badge>
          <p className="flex flex-wrap items-baseline gap-x-2.5">
            <span className="t-card text-white/60 line-through">$9.99</span>
            <span className="t-hero lg:t-hero-d">$3.99</span>
            <span className="t-answer text-white/90">for the first month</span>
          </p>
          <p className="t-caption text-white/75">Then $9.99/month · or $79.99/year</p>
          <div className="hidden lg:block"><Button variant="lime" onClick={() => setOpen(true)}>Get my plan for $3.99</Button></div>
          <p className="t-caption hidden text-white/70 lg:block">{terms}</p>
        </div>
        <CtaBar className="lg:hidden">
          <Button onClick={() => setOpen(true)}>Get my plan for $3.99</Button>
          <p className="t-caption mt-3 text-center text-muted">{terms}</p>
        </CtaBar>
      </section>

      {open && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-ink/50 px-5" onClick={() => setOpen(false)}>
          <div role="dialog" aria-modal="true" aria-labelledby="thanks-title" onClick={(e) => e.stopPropagation()}
            className="anim-in relative w-full max-w-[400px] rounded-3xl bg-surface p-7 text-center">
            <button ref={closeRef} onClick={() => setOpen(false)} aria-label="Close" className="absolute right-4 top-4 grid size-9 place-items-center rounded-full text-muted hover:bg-lavender focus-visible:outline-[3px] focus-visible:outline-primary-light">
              <X size={20} />
            </button>
            <span className="mx-auto grid size-14 place-items-center rounded-full bg-lime text-primary"><Check size={28} strokeWidth={3} aria-hidden /></span>
            <h2 id="thanks-title" className="t-section mt-4 text-ink">Thanks for your interest!</h2>
            <p className="t-body mt-2 text-muted">This is a prototype — no payment was taken and no subscription was started.</p>
            <Button className="mt-6" arrow={false} onClick={() => setOpen(false)}>Got it</Button>
          </div>
        </div>
      )}
    </main>
  );
}

