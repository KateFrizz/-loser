export function PlanIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 150" fill="none" className={className} aria-hidden>
      <path d="M20 90c0-30 30-52 70-50 20 1 30-20 60-18 35 2 55 30 50 58-5 30-40 45-80 42-25-2-40 10-65 4-22-5-35-18-35-36z" fill="#EEE8FF" />
      <g transform="rotate(-10 110 75)">
        <rect x="62" y="14" width="96" height="120" rx="20" fill="#fff" stroke="#E7E1F2" strokeWidth="2" />
        <circle cx="110" cy="48" r="18" fill="#8774DB" />
        <circle cx="110" cy="43" r="6" fill="#fff" />
        <path d="M99 58a11 9 0 0 1 22 0" fill="#fff" />
        <path d="m76 84 5 5 9-9" stroke="#8774DB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="96" y="80" width="46" height="7" rx="3.5" fill="#D9D0F7" />
        <path d="m76 106 5 5 9-9" stroke="#8774DB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="96" y="102" width="36" height="7" rx="3.5" fill="#D9D0F7" />
      </g>
      <path d="M178 10c1.5 8 4 10.5 12 12-8 1.5-10.5 4-12 12-1.5-8-4-10.5-12-12 8-1.5 10.5-4 12-12z" fill="#DFFF8A" />
      <path d="M36 112c1 6 3 8 9 9-6 1-8 3-9 9-1-6-3-8-9-9 6-1 8-3 9-9z" fill="#DFFF8A" />
    </svg>
  );
}

export function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden>
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

export function AppleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
      <path fill="#201B36" d="M16.37 12.6c-.02-2.3 1.88-3.4 1.97-3.46-1.07-1.57-2.74-1.78-3.33-1.8-1.42-.14-2.77.83-3.49.83-.72 0-1.83-.81-3.01-.79-1.55.02-2.98.9-3.78 2.29-1.61 2.8-.41 6.94 1.16 9.21.77 1.11 1.68 2.36 2.88 2.31 1.16-.05 1.6-.75 3-.75s1.79.75 3.01.72c1.25-.02 2.03-1.13 2.79-2.25.88-1.29 1.24-2.53 1.26-2.6-.03-.01-2.42-.93-2.46-3.71zM14.08 5.84c.64-.77 1.07-1.85.95-2.92-.92.04-2.03.61-2.69 1.38-.59.68-1.1 1.77-.96 2.82 1.02.08 2.07-.52 2.7-1.28z" />
    </svg>
  );
}

export function Squiggle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden>
      <path d="M14 4 19 15M26 8 23 18M32 20 22 22" stroke="#DFFF8A" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
