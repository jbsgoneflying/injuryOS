import SectionHeader from "./SectionHeader";

const flow = ["Ad Source", "Intake", "Review", "Signed Case", "Feedback"];

export default function ProblemSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeader
        eyebrow="The Gap"
        title="Most acquisition systems stop too early."
        description="Injury firms do not need more disconnected lead activity. They need source-to-signed-case visibility, with intake quality, speed-to-lead, rejection reasons, follow-up status, and case outcomes tied back to the original demand path."
      />

      <ul className="mt-12 flex flex-col flex-wrap items-stretch gap-3 sm:flex-row sm:items-center">
        {flow.map((step, index) => (
          <li key={step} className="flex items-center gap-3 sm:flex-1">
            <span className="glass-panel flex w-full items-center justify-center rounded-2xl px-4 py-3.5 text-sm font-medium text-foreground/90">
              {step}
            </span>
            {index < flow.length - 1 ? (
              <span
                className="hidden shrink-0 text-accent-cyan/60 sm:inline"
                aria-hidden="true"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
