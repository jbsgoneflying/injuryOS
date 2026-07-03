"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

const ENDPOINT = "/api/beta-signup";

type BetaModalContextValue = {
  open: () => void;
  close: () => void;
};

const BetaModalContext = createContext<BetaModalContextValue | null>(null);

export function useBetaModal() {
  const ctx = useContext(BetaModalContext);
  if (!ctx) {
    throw new Error("useBetaModal must be used within BetaModalProvider");
  }
  return ctx;
}

type Status = "idle" | "submitting" | "success" | "error";

export function BetaModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <BetaModalContext.Provider value={{ open, close }}>
      {children}
      {isOpen ? <BetaModal onClose={close} /> : null}
    </BetaModalContext.Provider>
  );
}

function BetaModal({ onClose }: { onClose: () => void }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    firstFieldRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
      previouslyFocused?.focus?.();
    };
  }, [onClose]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    const form = e.currentTarget;
    const data = new FormData(form);

    if ((data.get("company_website") as string)?.trim()) {
      setStatus("success");
      return;
    }

    const payload = {
      name: (data.get("name") as string)?.trim(),
      email: (data.get("email") as string)?.trim(),
      firm: (data.get("firm") as string)?.trim(),
      role: (data.get("role") as string)?.trim(),
      notes: (data.get("notes") as string)?.trim(),
    };

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage(
        "Something went wrong sending your request. Please try again, or email founders@injuryos.io.",
      );
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm sm:items-center"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="beta-modal-title"
        className="glass-panel relative w-full max-w-md rounded-3xl p-7 sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-[var(--border-soft)] text-muted transition-colors hover:text-foreground"
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
            aria-hidden="true"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        {status === "success" ? (
          <div className="py-6 text-center">
            <span
              className="mx-auto grid h-12 w-12 place-items-center rounded-2xl border border-accent-green/25 bg-accent-green/5 text-accent-green"
              aria-hidden="true"
            >
              <svg
                width="22"
                height="22"
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
            <h2
              id="beta-modal-title"
              className="mt-5 text-xl font-semibold tracking-tight text-foreground"
            >
              Request received.
            </h2>
            <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted">
              Thanks for your interest in the InjuryOS private beta. We&apos;ll
              be in touch as pilot access opens up.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="glass-hover mt-6 inline-flex h-11 items-center justify-center rounded-full border border-[var(--border-soft)] bg-white/[0.03] px-6 text-sm font-semibold text-foreground"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2
              id="beta-modal-title"
              className="text-xl font-semibold tracking-tight text-foreground"
            >
              Request Private Beta Access
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Pilot access is limited to select injury firms, case acquisition
              partners, and operating teams.
            </p>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-[9999px] top-0"
              >
                <label htmlFor="company_website">Company website</label>
                <input
                  id="company_website"
                  name="company_website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <Field
                ref={firstFieldRef}
                id="name"
                name="name"
                label="Name"
                required
                autoComplete="name"
              />
              <Field
                id="email"
                name="email"
                type="email"
                label="Email"
                required
                autoComplete="email"
              />
              <Field
                id="firm"
                name="firm"
                label="Firm / Company"
                autoComplete="organization"
              />
              <Field id="role" name="role" label="Role (optional)" />

              <div>
                <label
                  htmlFor="notes"
                  className="mb-1.5 block text-xs font-medium text-muted"
                >
                  Anything we should know? (optional)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  className="w-full resize-none rounded-xl border border-[var(--border-soft)] bg-white/[0.03] px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-dim focus:border-accent-cyan/40"
                />
              </div>

              {status === "error" ? (
                <p className="text-sm text-red-400">{errorMessage}</p>
              ) : null}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="glass-hover inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-accent-cyan/30 bg-gradient-to-b from-accent-blue/25 to-accent-blue/10 px-6 text-sm font-semibold text-foreground shadow-[0_10px_30px_-12px_rgba(77,139,255,0.6)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting" ? "Sending..." : "Request Access"}
              </button>
              <p className="text-center text-xs text-muted-dim">
                We&apos;ll only use this to contact you about beta access.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

type FieldProps = {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  ref?: React.Ref<HTMLInputElement>;
};

function Field({
  id,
  name,
  label,
  type = "text",
  required,
  autoComplete,
  ref,
}: FieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-xs font-medium text-muted"
      >
        {label}
        {required ? <span className="text-accent-cyan"> *</span> : null}
      </label>
      <input
        ref={ref}
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="h-11 w-full rounded-xl border border-[var(--border-soft)] bg-white/[0.03] px-3.5 text-sm text-foreground placeholder:text-muted-dim focus:border-accent-cyan/40"
      />
    </div>
  );
}

type BetaButtonProps = {
  children: ReactNode;
  className?: string;
};

export function BetaButton({ children, className = "" }: BetaButtonProps) {
  const { open } = useBetaModal();
  return (
    <button type="button" onClick={open} className={className}>
      {children}
    </button>
  );
}
