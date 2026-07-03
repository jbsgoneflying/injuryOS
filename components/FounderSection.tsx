import type { ReactNode } from "react";
import GlassCard from "./GlassCard";
import SectionHeader from "./SectionHeader";

type Founder = {
  initials: string;
  name: string;
  role: string;
  accent: "cyan" | "blue";
  paragraphs: string[];
  stats: string[];
  supportingLine?: string;
  backdrop: ReactNode;
  lead?: boolean;
};

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

const accentClasses = {
  cyan: {
    tile: "border-accent-cyan/25 bg-accent-cyan/5 text-accent-cyan",
    role: "text-accent-cyan/80",
  },
  blue: {
    tile: "border-accent-blue/30 bg-accent-blue/5 text-accent-blue",
    role: "text-accent-blue/80",
  },
} as const;

const founders: Founder[] = [
  {
    initials: "DP",
    name: "Daniel Purtell",
    role: "Co-Founder & Legal Architect",
    accent: "cyan",
    lead: true,
    backdrop: <StructuralBackdrop />,
    paragraphs: [
      "Daniel is a plaintiff trial attorney and Founding Partner of McEldrew Purtell in Philadelphia. He has tried more than 25 cases to verdict, with more than 100 additional matters resolved through mediation or arbitration, and has built his practice around catastrophic injury, wrongful death, medical negligence, trucking, construction, FELA, nursing home, and premises liability matters.",
      "His role in InjuryOS is to bring the legal judgment layer: case quality, practice-area depth, intake relevance, litigation reality, and the standards that separate lead activity from real signed-case value.",
    ],
    supportingLine:
      "Recognized by National Trial Lawyers Top 40 Under 40 and Super Lawyers Future Leaders.",
    stats: [
      "Founding Partner & Lead Trial Attorney",
      "25+ Cases Tried to Verdict",
      "100+ Additional Resolutions",
      "Catastrophic Injury & Wrongful Death",
      "PTLA \u2022 PAJ \u2022 AAJ",
    ],
  },
  {
    initials: "JS",
    name: "Joshua Smith",
    role: "Co-Founder & Systems Architect",
    accent: "blue",
    backdrop: <SystemsBackdrop />,
    paragraphs: [
      "Joshua is a founder/operator with 25+ years building acquisition, retention, ecommerce, subscription, manufacturing, attribution, and AI-assisted growth systems across six founder-led companies and multiple exits.",
      "At InjuryOS, he is responsible for the product architecture: connecting demand capture, structured intake, follow-up, attribution, workflow automation, and signed-case feedback into one measurable operating system.",
    ],
    supportingLine:
      "Recognized with Inc. Magazine Top CEO honors and an HP packaging innovation award, following a clean-ocean materials exit to UC Irvine.",
    stats: [
      "25+ Years Founder/Operator",
      "Six Founder-Led Companies",
      "Multiple Exits",
      "$587M+ Gross Retail Sales Influenced",
      "AI-Assisted Growth Systems",
    ],
  },
];

function FounderCard({ founder }: { founder: Founder }) {
  const accent = accentClasses[founder.accent];
  return (
    <GlassCard
      className={`relative flex h-full flex-col overflow-hidden p-6 sm:p-9 ${
        founder.lead
          ? "border-accent-cyan/25 shadow-[0_30px_70px_-40px_rgba(127,227,255,0.35)]"
          : ""
      }`}
    >
      {founder.backdrop}
      <div className="relative flex h-full flex-col">
        <div className="flex items-center gap-4">
          <span
            className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl border text-lg font-semibold ${accent.tile}`}
            aria-hidden="true"
          >
            {founder.initials}
          </span>
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-foreground">
              {founder.name}
            </h3>
            <p className={`text-sm ${accent.role}`}>{founder.role}</p>
          </div>
        </div>

        <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted sm:text-[0.95rem]">
          {founder.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>

        {founder.supportingLine ? (
          <p className="mt-4 text-xs leading-relaxed text-muted-dim">
            {founder.supportingLine}
          </p>
        ) : null}

        <ul className="mt-7 flex flex-wrap gap-2 pt-1">
          {founder.stats.map((stat) => (
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
  );
}

export default function FounderSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeader
        eyebrow="Founding Architecture"
        title="Legal judgment, rebuilt as acquisition infrastructure."
        description="InjuryOS is being shaped by a founding team that understands both sides of the problem: how serious plaintiff cases are evaluated, and how modern acquisition systems should capture, structure, measure, and improve the path from demand to signed case."
      />

      <div className="mt-12 grid items-stretch gap-4 lg:grid-cols-2">
        {founders.map((founder) => (
          <FounderCard key={founder.name} founder={founder} />
        ))}
      </div>
    </section>
  );
}
