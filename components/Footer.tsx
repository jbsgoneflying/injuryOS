import Wordmark from "./Wordmark";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
      <div className="glass-panel rounded-3xl p-8 sm:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Wordmark />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              AI-native case acquisition infrastructure for injury firms.
            </p>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-muted-dim">
            InjuryOS supports intake, acquisition operations, reporting, and
            workflow automation. It does not provide legal advice or legal
            representation.
          </p>
        </div>

        <div className="mt-8 border-t border-[var(--border-softer)] pt-6">
          <p className="text-xs text-muted-dim">
            &copy; 2026 InjuryOS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
