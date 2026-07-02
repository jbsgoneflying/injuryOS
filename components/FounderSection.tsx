import GlassCard from "./GlassCard";
import SectionHeader from "./SectionHeader";

const stats = [
  "25+ Years Founder/Operator",
  "Six Founder-Led Companies",
  "Multiple Exits",
  "$587M+ Gross Retail Sales Influenced",
  "AI-Assisted Growth Systems",
];

function SystemsBackdrop() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.14]"
      viewBox="0 0 400 300"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="founderLine" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--accent-blue)" />
          <stop offset="50%" stopColor="var(--accent-cyan)" />
          <stop offset="100%" stopColor="var(--accent-green)" />
        </linearGradient>
      </defs>
      <g stroke="url(#founderLine)" strokeWidth="1">
        <path d="M40 60 L140 110 L240 70 L330 130 L360 220" />
        <path d="M40 60 L110 200 L240 70" />
        <path d="M110 200 L230 240 L330 130" />
        <path d="M230 240 L360 220" />
      </g>
      <g fill="var(--accent-cyan)">
        <circle cx="40" cy="60" r="3" />
        <circle cx="140" cy="110" r="3" />
        <circle cx="240" cy="70" r="3" />
        <circle cx="330" cy="130" r="3" />
        <circle cx="110" cy="200" r="3" />
        <circle cx="230" cy="240" r="3" />
        <circle cx="360" cy="220" r="3" />
      </g>
    </svg>
  );
}

export default function FounderSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeader
          eyebrow="Founder Architecture"
          title="Built by a founder/operator who understands acquisition systems."
          description="InjuryOS is being built from operating pattern recognition across acquisition, retention, subscription commerce, ecommerce, manufacturing, attribution, and AI-assisted growth analysis."
        />

        <GlassCard className="relative overflow-hidden p-8 sm:p-10">
          <SystemsBackdrop />
          <div className="relative">
            <div className="flex items-center gap-4">
              <span
                className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-accent-cyan/25 bg-accent-cyan/5 text-lg font-semibold text-accent-cyan"
                aria-hidden="true"
              >
                JS
              </span>
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-foreground">
                  Joshua Smith
                </h3>
                <p className="text-sm text-accent-cyan/80">
                  Founder &amp; Systems Architect
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
              <p>
                Joshua is a founder/operator with 25+ years building
                acquisition, retention, subscription, ecommerce, manufacturing,
                and AI-assisted growth systems across six founder-led companies
                and multiple exits.
              </p>
              <p>
                InjuryOS applies that pattern recognition to plaintiff injury
                acquisition by connecting demand, intake, follow-up,
                attribution, and signed-case feedback into one learning system.
              </p>
            </div>

            <ul className="mt-7 flex flex-wrap gap-2">
              {stats.map((stat) => (
                <li
                  key={stat}
                  className="rounded-full border border-[var(--border-soft)] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-foreground/80"
                >
                  {stat}
                </li>
              ))}
            </ul>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
