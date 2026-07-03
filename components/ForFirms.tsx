import GlassCard from "./GlassCard";
import SectionHeader from "./SectionHeader";

const audiences = [
  {
    title: "Plaintiff Injury Firms",
    body: "For firms that want clearer visibility from demand to signed case.",
  },
  {
    title: "High-Volume Intake Teams",
    body: "For teams managing fast response, qualification, routing, and follow-up.",
  },
  {
    title: "Growth and Acquisition Operators",
    body: "For teams responsible for paid media, source quality, and case economics.",
  },
  {
    title: "Case Acquisition Partners",
    body: "For operators building scalable acquisition systems with better data feedback.",
  },
];

export default function ForFirms() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeader
        eyebrow="Who It Serves"
        title="Built for the operators behind modern injury firms."
        description="InjuryOS is being built for teams that care about signed-case economics, intake discipline, speed-to-lead, source quality, and operating visibility across the acquisition process."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {audiences.map((audience) => (
          <GlassCard
            key={audience.title}
            hover
            className="flex h-full flex-col p-6"
          >
            <span
              className="grid h-9 w-9 place-items-center rounded-lg border border-accent-green/20 bg-accent-green/5 text-accent-green"
              aria-hidden="true"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </span>
            <h3 className="mt-4 text-base font-semibold leading-snug text-foreground lg:min-h-[2.75rem]">
              {audience.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {audience.body}
            </p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
