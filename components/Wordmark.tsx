type WordmarkProps = {
  className?: string;
};

export default function Wordmark({ className = "" }: WordmarkProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-base font-semibold tracking-tight text-foreground ${className}`}
    >
      <span
        aria-hidden="true"
        className="grid h-7 w-7 place-items-center rounded-lg border border-accent-cyan/25 bg-accent-blue/10 text-accent-cyan"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3v6" />
          <path d="M12 15v6" />
          <circle cx="12" cy="12" r="3" />
          <path d="M3 12h6" />
          <path d="M15 12h6" />
        </svg>
      </span>
      <span>
        Injury<span className="text-muted">OS</span>
      </span>
    </span>
  );
}
