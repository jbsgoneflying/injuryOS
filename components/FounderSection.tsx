import GlassCard from "./GlassCard";
import SectionHeader from "./SectionHeader";

function SystemsBackdrop() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12]"
      viewBox="0 0 400 300"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="founderSystems" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--accent-blue)" />
          <stop offset="50%" stopColor="var(--accent-cyan)" />
          <stop offset="100%" stopColor="var(--accent-green)" />
        </linearGradient>
      </defs>
      <g stroke="url(#founderSystems)" strokeWidth="1">
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

function StructuralBackdrop() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.1]"
      viewBox="0 0 400 300"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="founderStructural" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--accent-cyan)" />
          <stop offset="100%" stopColor="var(--accent-green)" />
        </linearGradient>
      </defs>
      <g stroke="url(#founderStructural)" strokeWidth="1">
        <path d="M60 40 L60 260" />
        <path d="M140 40 L140 260" />
        <path d="M220 40 L220 260" />
        <path d="M300 40 L300 260" />
        <path d="M380 40 L380 260" />
        <path d="M40 90 L400 90" />
        <path d="M40 210 L400 210" />
        <path d="M40 60 L400 60" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

const founderParagraphs = [
  "Joshua is a founder/operator with 25+ years building acquisition, retention, ecommerce, subscription, manufacturing, attribution, and AI-assisted growth systems across six founder-led companies and multiple exits.",
  "He built InjuryOS in direct partnership with personal injury law firms, working alongside their teams to develop and validate the system against real intake workflows, lead-quality decisions, case qualification standards, follow-up sequences, reporting needs, and signed-case outcomes.",
  "At InjuryOS, he is responsible for the entire operating system: connecting demand capture, structured intake, follow-up, attribution, workflow automation, and signed-case feedback into one measurable loop.",
];

const founderStats = [
  "25+ Years Founder/Operator",
  "Six Founder-Led Companies",
  "Multiple Exits",
  "$587M+ Gross Retail Sales Influenced",
  "AI-Assisted Growth Systems",
];

const partnershipPoints = [
  {
    title: "Real Firm Workflows",
    body: "Intake, qualification, routing, and follow-up processes mapped from working injury firms, not assumptions.",
  },
  {
    title: "Validated Through Live Operations",
    body: "Developed and refined using real-world operational patterns, lead-quality signals, and case qualification standards.",
  },
  {
    title: "Operational Feedback Loops",
    body: "Reporting and conversion logic shaped by direct feedback from the teams who run intake every day.",
  },
];

export default function FounderSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeader
        eyebrow="Founder"
        title="One founder. Real firm operations."
        description="Joshua b. Smith builds and operates InjuryOS in direct partnership with personal injury law firms — shaping the product around intake, lead quality, qualification, follow-up, reporting, and conversion."
      />

      <div className="mt-12 grid items-stretch gap-4 lg:grid-cols-[3fr_2fr]">
        <GlassCard className="relative flex h-full flex-col overflow-hidden border-accent-cyan/25 p-6 shadow-[0_30px_70px_-40px_rgba(127,227,255,0.35)] sm:p-9">
          <SystemsBackdrop />
          <div className="relative flex h-full flex-col">
            <div className="flex items-center gap-4">
              <span
                className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-accent-cyan/25 bg-accent-cyan/5 text-lg font-semibold text-accent-cyan"
                aria-hidden="true"
              >
                JS
              </span>
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-foreground">
                  Joshua b. Smith
                </h3>
                <p className="text-sm text-accent-cyan/80">
                  Founder & Systems Architect
                </p>
                <p className="mt-1 text-xs text-muted-dim">
                  <a
                    href="https://joshuabsmith.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-accent-cyan/90"
                  >
                    joshuabsmith.io
                  </a>
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted sm:text-[0.95rem]">
              {founderParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>

            <p className="mt-4 text-xs leading-relaxed text-muted-dim">
              Recognized with Inc. Magazine Top CEO honors and an HP packaging
              innovation award, following a clean-ocean materials exit to UC
              Irvine.
            </p>

            <ul className="mt-7 flex flex-wrap gap-2 pt-1">
              {founderStats.map((stat) => (
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

        <GlassCard className="relative flex h-full flex-col overflow-hidden p-6 sm:p-9">
          <StructuralBackdrop />
          <div className="relative flex h-full flex-col">
            <h3 className="text-xl font-semibold tracking-tight text-foreground">
              Built in partnership with active personal injury firms
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-[0.95rem]">
              Every layer of InjuryOS was pressure-tested inside real personal
              injury practices before it became a product.
            </p>

            <div className="mt-6 space-y-5">
              {partnershipPoints.map((point) => (
                <div key={point.title}>
                  <h4 className="text-sm font-semibold text-foreground/90">
                    {point.title}
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {point.body}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-auto pt-6 text-xs leading-relaxed text-muted-dim">
              Partner firms remain fully independent practices. InjuryOS is
              independently built and operated. Client-identifying information
              and confidential case details are not used to train shared
              systems or exposed through the platform.
            </p>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
