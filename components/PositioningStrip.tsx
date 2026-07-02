import GlassCard from "./GlassCard";

const cards = [
  {
    title: "Demand Intelligence",
    body: "Track source, campaign, creative, call, form, and landing-page performance from the first touch.",
    icon: (
      <>
        <path d="M4 11a9 9 0 0 1 9 9" />
        <path d="M4 4a16 16 0 0 1 16 16" />
        <circle cx="5" cy="19" r="1" />
      </>
    ),
  },
  {
    title: "AI-Assisted Intake",
    body: "Structure incident facts, injuries, timeline, jurisdiction, treatment status, and missing information for human review.",
    icon: (
      <>
        <path d="M12 3a3 3 0 0 0-3 3v1a3 3 0 0 0 0 6v1a3 3 0 0 0 6 0v-1a3 3 0 0 0 0-6V6a3 3 0 0 0-3-3Z" />
        <path d="M12 8v0M9 13h6" />
      </>
    ),
  },
  {
    title: "Signed-Case Feedback",
    body: "Connect accepted, rejected, incomplete, and signed-case outcomes back to the acquisition engine.",
    icon: (
      <>
        <path d="M21 12a9 9 0 1 1-3-6.7" />
        <path d="M21 4v4h-4" />
      </>
    ),
  },
];

export default function PositioningStrip() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <div className="grid gap-4 md:grid-cols-3">
        {cards.map((card) => (
          <GlassCard key={card.title} hover className="p-6 sm:p-7">
            <span className="grid h-11 w-11 place-items-center rounded-xl border border-accent-cyan/20 bg-accent-cyan/5 text-accent-cyan">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {card.icon}
              </svg>
            </span>
            <h3 className="mt-5 text-lg font-semibold text-foreground">
              {card.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {card.body}
            </p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
