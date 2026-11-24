"use client";
import { useState, type ButtonHTMLAttributes, type CSSProperties, type ReactNode } from "react";
import { ArrowLeft, ArrowRight, Check, type LucideIcon } from "lucide-react";

const cx = (...c: (string | false | undefined | null)[]) => c.filter(Boolean).join(" ");

export function Logo({ dark = false, className }: { dark?: boolean; className?: string }) {
  return (
    <span className={cx("t-logo inline-flex items-end select-none", dark ? "text-white" : "text-primary", className)} aria-label="Closer">
      Closer<span aria-hidden className="mb-[7px] ml-[2px] inline-block size-2 rounded-full bg-lime" />
    </span>
  );
}

type BtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "lime";
  arrow?: boolean;
};
export function Button({ variant = "primary", arrow = true, className, children, ...rest }: BtnProps) {
  const styles = {
    primary: "bg-primary text-white hover:bg-primary-dark",
    secondary: "bg-surface text-primary border-[1.5px] border-primary hover:bg-lavender",
    lime: "bg-lime text-primary hover:bg-lime-dark",
  }[variant];
  return (
    <button
      className={cx(
        "t-btn inline-flex h-14 w-full items-center justify-center gap-2 rounded-[20px] px-5 transition-colors",
        "focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-primary-light",
        "disabled:cursor-not-allowed disabled:opacity-40",
        styles, className,
      )}
      {...rest}
    >
      {children}
      {arrow && <ArrowRight size={20} strokeWidth={2} aria-hidden />}
    </button>
  );
}

export function BackButton({ onClick, label = "Back" }: { onClick: () => void; label?: string }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="grid size-11 shrink-0 place-items-center rounded-[14px] border border-line bg-surface text-ink transition-colors hover:bg-lavender focus-visible:outline-[3px] focus-visible:outline-primary-light"
    >
      <ArrowLeft size={20} strokeWidth={2} />
    </button>
  );
}

export function AnswerCard({
  label, icon: Icon, selected, onClick, className,
}: { label: string; icon: LucideIcon; selected: boolean; onClick: () => void; className?: string }) {
  return (
    <button
      role="radio"
      aria-checked={selected}
      onClick={onClick}
      className={cx(
        "flex min-h-[72px] w-full items-center gap-3.5 rounded-[18px] p-4 text-left transition-all",
        "focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-primary-light",
        selected
          ? "border-[1.5px] border-primary bg-lime"
          : "border border-line bg-surface hover:border-primary-light hover:bg-[#fbfaff]",
        className,
      )}
    >
      <span className={cx("grid size-11 shrink-0 place-items-center rounded-[14px] text-primary", selected ? "bg-surface" : "bg-lavender")}>
        <Icon size={22} strokeWidth={2} aria-hidden />
      </span>
      <span className="t-answer flex-1 text-ink">{label}</span>
      <span
        aria-hidden
        className={cx(
          "grid size-6 shrink-0 place-items-center rounded-full",
          selected ? "bg-primary text-white" : "border-2 border-line-strong",
        )}
      >
        {selected && <Check size={14} strokeWidth={3} />}
      </span>
    </button>
  );
}

export function Progress({ step, total = 6, className }: { step: number; total?: number; className?: string }) {
  return (
    <div className={cx("flex gap-1.5", className)} role="progressbar" aria-valuemin={1} aria-valuemax={total} aria-valuenow={step} aria-label={`Step ${step} of ${total}`}>
      {Array.from({ length: total }, (_, i) => (
        <span key={i} className={cx("h-1.5 flex-1 rounded-full transition-colors", i < step ? "bg-primary" : "bg-primary-light/25")} />
      ))}
    </div>
  );
}

export function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="grid size-6 shrink-0 place-items-center rounded-full bg-lime text-primary">
        <Check size={14} strokeWidth={3} aria-hidden />
      </span>
      <span className="t-body text-ink">{children}</span>
    </li>
  );
}

export function Badge({ children }: { children: ReactNode }) {
  return <span className="t-label inline-flex w-fit rounded-full bg-lime px-3 py-[5px] text-primary">{children}</span>;
}

/** Photo with organic radius. Falls back to a lavender gradient if the file is missing. */
export function Photo({
  src, alt, radius, className, style,
}: { src: string; alt: string; radius?: string; className?: string; style?: CSSProperties }) {
  const [failed, setFailed] = useState(false);
  return (
    <div
      className={cx("overflow-hidden bg-gradient-to-br from-primary-light/50 to-lavender", className)}
      style={{ borderRadius: radius, ...style }}
    >
      {!failed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} onError={() => setFailed(true)} className="block size-full object-cover" />
      )}
    </div>
  );
}

export function Card({ children, className, tone = "white" }: { children: ReactNode; className?: string; tone?: "white" | "lavender" }) {
  return (
    <div className={cx("rounded-[20px] p-5", tone === "white" ? "border border-line bg-surface" : "bg-lavender", className)}>
      {children}
    </div>
  );
}

export function Glow({ className }: { className?: string }) {
  return <div aria-hidden className={cx("pointer-events-none absolute rounded-full bg-[radial-gradient(circle,rgba(135,116,219,0.45),rgba(135,116,219,0)_70%)]", className)} />;
}

export { cx };
