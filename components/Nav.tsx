import Wordmark from "./Wordmark";

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5">
      <nav
        aria-label="Primary"
        className="glass-nav mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl px-4 py-3 sm:px-6"
      >
        <a
          href="#top"
          className="rounded-lg"
          aria-label="InjuryOS home"
        >
          <Wordmark />
        </a>
        <div className="flex items-center gap-3 sm:gap-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-green/25 bg-accent-green/5 px-3 py-1 text-xs font-medium text-accent-green">
            <span
              className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-green"
              aria-hidden="true"
            />
            Private Beta
          </span>
          <span className="hidden text-sm text-muted sm:inline">
            Built for plaintiff injury firms
          </span>
        </div>
      </nav>
    </header>
  );
}
