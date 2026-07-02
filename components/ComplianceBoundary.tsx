import GlassCard from "./GlassCard";

export default function ComplianceBoundary() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <GlassCard className="mx-auto max-w-3xl p-8 sm:p-10">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <span
            className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-accent-cyan/20 bg-accent-cyan/5 text-accent-cyan"
            aria-hidden="true"
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3 4 6v6c0 5 3.4 7.9 8 9 4.6-1.1 8-4 8-9V6l-8-3Z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </span>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              AI support with human legal review.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              InjuryOS supports intake, summarization, routing, follow-up,
              reporting, and acquisition learning. Attorney judgment remains
              with the firm. InjuryOS does not provide legal advice, determine
              representation, or replace legal review.
            </p>
          </div>
        </div>
      </GlassCard>
    </section>
  );
}
