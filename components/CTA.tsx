import GlassCard from "./GlassCard";
import { BetaButton } from "./beta/BetaAccess";

export default function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <GlassCard className="relative overflow-hidden p-8 text-center sm:p-14">
        <div
          className="absolute inset-x-0 -top-1/2 -z-10 h-full bg-accent-blue/10 blur-3xl"
          aria-hidden="true"
        />
        <span className="inline-flex items-center gap-2 rounded-full border border-accent-green/25 bg-accent-green/5 px-3 py-1 text-xs font-medium text-accent-green">
          <span
            className="h-1.5 w-1.5 rounded-full bg-accent-green"
            aria-hidden="true"
          />
          Private Beta
        </span>

        <h2 className="text-gradient mx-auto mt-6 max-w-2xl text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          Private beta access for select injury operators.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          The first version of InjuryOS is focused on proving one thing clearly:
          whether qualified signed cases can be acquired, tracked, and scaled
          with better intake data, cleaner attribution, and faster feedback.
        </p>

        <div className="mt-9 flex flex-col items-center gap-3">
          <BetaButton className="glass-hover inline-flex h-12 items-center justify-center gap-2 rounded-full border border-accent-cyan/30 bg-gradient-to-b from-accent-blue/25 to-accent-blue/10 px-8 text-sm font-semibold text-foreground shadow-[0_10px_30px_-12px_rgba(77,139,255,0.6)]">
            Request Private Beta Access
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </BetaButton>
          <p className="max-w-md text-sm text-muted-dim">
            Pilot access is limited while the initial operating system is being
            built.
          </p>
        </div>
      </GlassCard>
    </section>
  );
}
