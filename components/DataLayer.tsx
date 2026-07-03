import GlassCard from "./GlassCard";
import SectionHeader from "./SectionHeader";

const nodes = [
  {
    tag: "Source",
    title: "Source Graph",
    body: "Campaigns, creatives, keywords, calls, forms, pages, and partner sources tracked from first touch.",
  },
  {
    tag: "Intake",
    title: "Intake Memory",
    body: "Structured incident facts, injuries, timeline, jurisdiction, treatment status, and missing information.",
  },
  {
    tag: "Review",
    title: "Human Review Layer",
    body: "Attorney and intake-team judgment preserved inside the workflow instead of replaced by automation.",
  },
  {
    tag: "Outcome",
    title: "Outcome Feedback",
    body: "Signed, rejected, incomplete, and low-quality case outcomes pushed back into the acquisition model.",
  },
  {
    tag: "Intelligence",
    title: "Operating Intelligence",
    body: "A clearer view of what to scale, what to fix, and what to stop funding.",
  },
];

function DotGrid() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.5]"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="dataLayerDots"
          width="26"
          height="26"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1" cy="1" r="1" fill="var(--accent-cyan)" opacity="0.06" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dataLayerDots)" />
    </svg>
  );
}

export default function DataLayer() {
  return (
    <section className="relative overflow-hidden">
      <DotGrid />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionHeader
          eyebrow="Data Layer"
          title="A data layer for plaintiff-side acquisition."
          description="InjuryOS is designed to capture the operational data most firms lose: source quality, intake completeness, response speed, rejection reasons, follow-up status, consult movement, and signed-case outcomes. That data becomes the foundation for better acquisition decisions, tighter intake operations, and cleaner scaling discipline."
        />

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {nodes.map((node, index) => (
            <GlassCard
              key={node.title}
              as="li"
              hover
              className={`flex flex-col p-6 ${
                index < 3 ? "lg:col-span-2" : "lg:col-span-3"
              }`}
            >
              <div className="flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-accent-cyan/70">
                <span className="tabular-nums text-muted-dim">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="h-3 w-px bg-[var(--border-soft)]" />
                <span>{node.tag}</span>
              </div>
              <h3 className="mt-3 text-base font-semibold text-foreground">
                {node.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {node.body}
              </p>
            </GlassCard>
          ))}
        </ol>
      </div>
    </section>
  );
}
