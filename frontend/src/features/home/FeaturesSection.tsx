
const benefits = [
  {
    number: "01",
    title: "Built around your needs",
    description:
      "Solutions begin with understanding your property, priorities, and specific security requirements.",
  },
  {
    number: "02",
    title: "Technology that works for you",
    description:
      "Explore practical security technologies selected for your environment and everyday use.",
  },
  {
    number: "03",
    title: "Support you can approach",
    description:
      "Get clear guidance when evaluating options, planning installations, or choosing a suitable solution.",
  },
];

/** Security Overview card — moved from HeroSection */
function SecurityOverviewCard() {
  return (
    <div
      className="overflow-hidden rounded-2xl shadow-2xl"
      style={{
        border: "1px solid var(--border-mid)",
        background: "var(--bg-surface)",
      }}
    >
      {/* Card header */}
      <div
        className="flex items-center justify-between px-5 py-4"
        style={{ borderBottom: "1px solid var(--border-subtle)" }}
      >
        <div>
          <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
            Security overview
          </p>
          <p className="mt-1 text-xs" style={{ color: "var(--text-muted)" }}>
            A clearer view of your space
          </p>
        </div>
        <span
          className="flex items-center gap-2 rounded-full px-3 py-1.5 text-xs"
          style={{
            border: "1px solid var(--status-border)",
            background: "var(--status-bg)",
            color: "var(--status-text)",
          }}
        >
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--status-dot)" }} />
          Illustrative
        </span>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-3 p-4">
        <div
          className="rounded-xl p-4"
          style={{ border: "1px solid var(--border-subtle)", background: "var(--accent-soft-bg)" }}
        >
          <div
            className="flex h-9 w-9 items-center justify-center rounded-lg text-lg"
            style={{ background: "var(--accent-soft-bg)", color: "var(--accent-text)" }}
          >
            ◉
          </div>
          <p className="mt-4 text-xs" style={{ color: "var(--text-muted)" }}>Video monitoring</p>
          <p className="mt-1 text-sm font-medium" style={{ color: "var(--text-primary)" }}>Stay informed</p>
        </div>
        <div
          className="rounded-xl p-4"
          style={{ border: "1px solid var(--border-subtle)", background: "var(--accent-soft-bg)" }}
        >
          <div
            className="flex h-9 w-9 items-center justify-center rounded-lg text-lg"
            style={{ background: "var(--status-bg)", color: "var(--status-text)" }}
          >
            ⌁
          </div>
          <p className="mt-4 text-xs" style={{ color: "var(--text-muted)" }}>Access control</p>
          <p className="mt-1 text-sm font-medium" style={{ color: "var(--text-primary)" }}>Manage access</p>
        </div>
      </div>

      {/* Gradient banner */}
      <div className="px-4 pb-4">
        <div
          className="relative flex min-h-44 flex-col justify-between overflow-hidden rounded-xl p-5"
          style={{
            border: "1px solid var(--accent-soft-border)",
            background: `linear-gradient(135deg, var(--accent-gradient-from), var(--accent-gradient-via), var(--accent-gradient-to))`,
          }}
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(var(--accent-line-color) 1px, transparent 1px), linear-gradient(90deg, var(--accent-line-color) 1px, transparent 1px)`,
              backgroundSize: "28px 28px",
            }}
          />
          <div className="relative flex items-start justify-between">
            <span
              className="text-xs font-medium uppercase tracking-[0.18em]"
              style={{ color: "var(--accent-text-muted)" }}
            >
              Protection, connected
            </span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-7 w-7"
              style={{ color: "var(--accent-text)" }}
              stroke="currentColor"
              strokeWidth="1.3"
            >
              <path d="M12 3 20 6v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3Z" />
              <path d="m8.5 12 2.3 2.3 4.8-5" />
            </svg>
          </div>
          <div className="relative mt-6">
            <p className="text-xl font-semibold tracking-tight" style={{ color: "var(--text-primary)" }}>
              Designed for peace of mind.
            </p>
            <p className="mt-2 text-sm leading-6" style={{ color: "var(--text-secondary)" }}>
              The right solution begins with understanding your space.
            </p>
          </div>
        </div>
      </div>

      {/* Card footer */}
      <div className="px-5 py-3" style={{ borderTop: "1px solid var(--border-subtle)" }}>
        <p className="text-xs leading-5" style={{ color: "var(--text-muted)" }}>
          Concept preview only. No live cameras or monitoring shown.
        </p>
      </div>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section
      id="why-us"
      style={{
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
        background: "var(--bg-surface-2)",
      }}
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">

        {/* ── Security Overview Card + Section intro ── */}
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          {/* Left: section copy */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-[0.22em]"
              style={{ color: "var(--accent-text)" }}
            >
              A better approach to security
            </p>
            <h2
              className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl"
              style={{ color: "var(--text-primary)" }}
            >
              Protection should feel{" "}
              <span style={{ color: "var(--text-secondary)" }}>straightforward.</span>
            </h2>
            <p className="mt-5 max-w-xl leading-7" style={{ color: "var(--text-secondary)" }}>
              Good security is about more than equipment. It is about finding the
              right fit, understanding your options, and making confident decisions.
            </p>
          </div>

          {/* Right: Security Overview card */}
          <SecurityOverviewCard />
        </div>

        {/* ── Benefit cards ── */}
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {benefits.map((benefit) => (
            <article
              key={benefit.number}
              className="group rounded-2xl p-6 transition duration-300 hover:-translate-y-1 sm:p-8"
              style={{
                border: "1px solid var(--border-subtle)",
                background: "var(--accent-soft-bg)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-soft-border-hover)";
                (e.currentTarget as HTMLElement).style.background = "var(--accent-soft-bg-hover)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border-subtle)";
                (e.currentTarget as HTMLElement).style.background = "var(--accent-soft-bg)";
              }}
            >
              <span
                className="text-sm font-medium tracking-widest"
                style={{ color: "var(--accent-text)" }}
              >
                {benefit.number}
              </span>
              <h3 className="mt-8 text-xl font-semibold" style={{ color: "var(--text-primary)" }}>
                {benefit.title}
              </h3>
              <p className="mt-4 text-sm leading-7" style={{ color: "var(--text-secondary)" }}>
                {benefit.description}
              </p>
              <div
                className="mt-8 h-px w-12 transition-all group-hover:w-20"
                style={{ background: "var(--accent-hr-bg)" }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
