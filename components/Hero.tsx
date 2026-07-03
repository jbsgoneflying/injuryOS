import GlassCard from "./GlassCard";
import { BetaButton } from "./beta/BetaAccess";

const dashboardMetrics = [
  { label: "Source Quality", state: "Tracking", accent: "cyan" },
  { label: "Intake Speed", state: "Live Intake", accent: "blue" },
  { label: "Qualified Leads", state: "Case Review", accent: "cyan" },
  { label: "Signed Cases", state: "Feedback Loop", accent: "green" },
] as const;

const accentClasses: Record<string, string> = {
  cyan: "text-accent-cyan bg-accent-cyan/10 border-accent-cyan/20",
  blue: "text-accent-blue bg-accent-blue/10 border-accent-blue/20",
  green: "text-accent-green bg-accent-green/10 border-accent-green/20",
};

function DashboardPreview() {
  return (
    <GlassCard className="w-full p-5 sm:p-6">
      <div className="flex items-center justify-between gap-3 border-b border-[var(--border-softer)] pb-4">
        <div className="flex items-center gap-2">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </span>
          <span className="ml-1 text-xs font-medium tracking-wide text-muted">
            Acquisition Loop
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-green/25 bg-accent-green/5 px-2.5 py-1 text-[11px] font-medium text-accent-green">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-green" />
          Live
        </span>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        {dashboardMetrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-2xl border border-[var(--border-softer)] bg-white/[0.02] p-4"
          >
            <p className="text-xs font-medium text-muted-dim">{metric.label}</p>
            <span
              className={`mt-3 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${accentClasses[metric.accent]}`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              {metric.state}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-3 grid grid-cols-2 gap-3">
        <div className="rounded-2xl border border-[var(--border-softer)] bg-white/[0.02] p-4">
          <p className="text-xs font-medium text-muted-dim">
            Cost per Signed Case
          </p>
          <p className="mt-2 text-sm font-medium text-foreground/80">
            Attribution enabled
          </p>
        </div>
        <div className="rounded-2xl border border-[var(--border-softer)] bg-white/[0.02] p-4">
          <p className="text-xs font-medium text-muted-dim">Follow-Up Status</p>
          <p className="mt-2 text-sm font-medium text-foreground/80">
            Monitoring leakage
          </p>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between rounded-2xl border border-[var(--border-softer)] bg-white/[0.02] px-4 py-3">
        <span className="text-xs font-medium text-muted-dim">
          Source &rarr; Signed Case
        </span>
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-1.5 w-6 rounded-full bg-accent-blue/40" />
          <span className="h-1.5 w-6 rounded-full bg-accent-cyan/40" />
          <span className="h-1.5 w-6 rounded-full bg-accent-green/40" />
        </div>
      </div>
    </GlassCard>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto max-w-6xl px-4 pt-36 sm:px-6 sm:pt-44"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div className="flex flex-col items-start">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-white/[0.03] px-3 py-1 text-xs font-medium text-muted">
            <span
              className="h-1.5 w-1.5 rounded-full bg-accent-cyan"
              aria-hidden="true"
            />
            AI-native signed-case acquisition
          </span>

          <h1 className="text-gradient max-w-2xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            The operating system for signed-case acquisition.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            InjuryOS is AI-native infrastructure for plaintiff injury firms,
            connecting demand capture, intake, attribution, follow-up, and
            signed-case feedback into one measurable acquisition loop.
          </p>

          <div className="mt-8 flex flex-col items-start gap-3">
            <BetaButton className="glass-hover inline-flex h-12 items-center justify-center gap-2 rounded-full border border-accent-cyan/30 bg-gradient-to-b from-accent-blue/25 to-accent-blue/10 px-7 text-sm font-semibold text-foreground shadow-[0_10px_30px_-12px_rgba(77,139,255,0.6)]">
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
              Initial pilot access is limited to select injury firms, case
              acquisition partners, and operating teams.
            </p>
          </div>
        </div>

        <div className="relative">
          <div
            className="absolute -inset-4 -z-10 rounded-[2rem] bg-accent-blue/10 blur-3xl"
            aria-hidden="true"
          />
          <DashboardPreview />
        </div>
      </div>
    </section>
  );
}
