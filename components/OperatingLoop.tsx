import GlassCard from "./GlassCard";
import SectionHeader from "./SectionHeader";

const steps = [
  {
    number: "01",
    title: "Capture",
    body: "Track source, campaign, creative, call, form, and landing-page path.",
  },
  {
    number: "02",
    title: "Structure",
    body: "Use AI-assisted intake to organize incident facts, injuries, timeline, jurisdiction, treatment, and missing information.",
  },
  {
    number: "03",
    title: "Prioritize",
    body: "Surface urgency, case-fit signals, and follow-up status for human review.",
  },
  {
    number: "04",
    title: "Sign",
    body: "Move qualified opportunities toward consults, signatures, and next steps.",
  },
  {
    number: "05",
    title: "Learn",
    body: "Push signed, rejected, and incomplete-case data back into the acquisition model.",
  },
];

export default function OperatingLoop() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeader
        eyebrow="The Loop"
        title="Built around the signed-case loop."
        description="InjuryOS makes the acquisition process measurable from first touch to signed case. Demand enters the system, intake structures the facts, human review adds judgment, follow-up reduces leakage, and outcome data improves the next campaign, message, and intake path."
      />

      <ol className="mt-12 grid gap-4 md:grid-cols-5">
        {steps.map((step) => (
          <GlassCard
            key={step.number}
            as="li"
            hover
            className="flex flex-col p-6"
          >
            <span className="text-sm font-semibold tracking-widest text-accent-cyan/70">
              {step.number}
            </span>
            <h3 className="mt-4 text-lg font-semibold text-foreground">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {step.body}
            </p>
          </GlassCard>
        ))}
      </ol>
    </section>
  );
}
