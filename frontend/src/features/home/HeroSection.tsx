
export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background radial glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(ellipse at 75% 25%, var(--accent-glow), transparent 38%)`,
        }}
      />
      {/* Top hairline gradient */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-px w-3/4 -translate-x-1/2"
        style={{
          background: `linear-gradient(to right, transparent, var(--accent-line-bg), transparent)`,
        }}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-32">
        {/* Left column */}
        <div>
          {/* Badge */}
          <div
            className="mb-7 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium tracking-wide"
            style={{
              border: "1px solid var(--accent-soft-border)",
              background: "var(--accent-soft-bg)",
              color: "var(--accent-text)",
            }}
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: "var(--status-dot)" }}
            />
            SECURITY BUILT AROUND YOU
          </div>

          <h1
            className="max-w-2xl text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-7xl"
            style={{ color: "var(--text-primary)" }}
          >
            Confidence starts with{" "}
            <span
              style={{
                background: `linear-gradient(to right, var(--accent-text), var(--accent-200, #bfdbfe), var(--text-primary))`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              feeling secure.
            </span>
          </h1>

          <p
            className="mt-7 max-w-xl text-base leading-8 sm:text-lg"
            style={{ color: "var(--text-secondary)" }}
          >
            Smarter security solutions for the spaces, people, and things that
            matter most. Discover protection designed around your needs.
          </p>

          {/* CTA buttons */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 rounded-xl px-6 py-4 text-sm font-semibold transition hover:-translate-y-0.5"
              style={{
                background: "var(--accent-primary)",
                color: "var(--accent-primary-text)",
                boxShadow: `0 10px 30px var(--accent-shadow)`,
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "var(--accent-primary-hover)")}
              onMouseLeave={e => (e.currentTarget.style.background = "var(--accent-primary)")}
            >
              Discuss Your Requirements <span>↗</span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-xl px-6 py-4 text-sm font-medium transition"
              style={{
                border: "1px solid var(--border-mid)",
                color: "var(--text-secondary)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "var(--border-subtle)";
                e.currentTarget.style.background = "var(--accent-soft-bg)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "var(--border-mid)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              Explore Solutions
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs" style={{ color: "var(--text-muted)" }}>
            <span className="flex items-center gap-2">
              <span style={{ color: "var(--accent-text)" }}>✓</span> Tailored solutions
            </span>
            <span className="flex items-center gap-2">
              <span style={{ color: "var(--accent-text)" }}>✓</span> Professional guidance
            </span>
            <span className="flex items-center gap-2">
              <span style={{ color: "var(--accent-text)" }}>✓</span> Customer-focused service
            </span>
          </div>
        </div>

        {/* Right column — demo card */}
        <div className="relative mx-auto w-full max-w-lg">
          {/* Card glow */}
          <div
            className="absolute -inset-6 rounded-[2rem] blur-3xl"
            style={{ background: "var(--accent-soft-bg)" }}
          />

          <div
            className="relative overflow-hidden rounded-2xl shadow-2xl"
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
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: "var(--status-dot)" }}
                />
                Illustrative
              </span>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 p-4">
              <div
                className="rounded-xl p-4"
                style={{
                  border: "1px solid var(--border-subtle)",
                  background: "var(--accent-soft-bg)",
                }}
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
                style={{
                  border: "1px solid var(--border-subtle)",
                  background: "var(--accent-soft-bg)",
                }}
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
                className="relative flex min-h-52 flex-col justify-between overflow-hidden rounded-xl p-5"
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
                  <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" style={{ color: "var(--accent-text)" }} stroke="currentColor" strokeWidth="1.3">
                    <path d="M12 3 20 6v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3Z" />
                    <path d="m8.5 12 2.3 2.3 4.8-5" />
                  </svg>
                </div>
                <div className="relative mt-8">
                  <p className="text-2xl font-semibold tracking-tight" style={{ color: "var(--text-primary)" }}>
                    Designed for peace of mind.
                  </p>
                  <p className="mt-2 text-sm leading-6" style={{ color: "var(--text-secondary)" }}>
                    The right solution begins with understanding your space.
                  </p>
                </div>
              </div>
            </div>

            {/* Card footer */}
            <div
              className="px-5 py-4"
              style={{ borderTop: "1px solid var(--border-subtle)" }}
            >
              <p className="text-xs leading-5" style={{ color: "var(--text-muted)" }}>
                Concept preview only. No live cameras, monitoring, or connected security devices are shown here.
              </p>
            </div>
          </div>

          {/* Floating badge */}
          <div
            className="absolute -bottom-5 -left-3 hidden rounded-xl px-4 py-3 shadow-xl sm:block"
            style={{
              border: "1px solid var(--border-mid)",
              background: "var(--bg-elevated)",
            }}
          >
            <p className="text-xs" style={{ color: "var(--text-secondary)" }}>Our approach</p>
            <p className="mt-1 text-sm font-medium" style={{ color: "var(--text-primary)" }}>
              Protection with purpose
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
