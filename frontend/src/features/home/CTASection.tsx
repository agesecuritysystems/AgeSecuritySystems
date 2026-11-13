
export default function CTASection() {
  return (
    <section
      id="contact"
      className="px-5 py-16 sm:px-8 sm:py-24"
      style={{ background: "var(--bg-base)" }}
    >
      <div
        className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl px-6 py-14 sm:px-12 sm:py-16 lg:px-16"
        style={{
          border: "1px solid var(--accent-soft-border)",
          background: `linear-gradient(135deg, var(--accent-gradient-from), var(--accent-gradient-via), var(--accent-gradient-to))`,
        }}
      >
        {/* Background blobs */}
        <div
          className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full blur-3xl"
          style={{ background: "var(--accent-soft-bg)" }}
        />
        <div
          className="pointer-events-none absolute bottom-0 left-1/3 h-px w-1/2"
          style={{
            background: `linear-gradient(to right, transparent, var(--accent-line-bg), transparent)`,
          }}
        />

        <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <p
              className="text-xs font-semibold uppercase tracking-[0.22em]"
              style={{ color: "var(--accent-text)" }}
            >
              Let's talk security
            </p>
            <h2
              className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl"
              style={{ color: "var(--text-primary)" }}
            >
              Your requirements.{" "}
              <span style={{ color: "var(--accent-text)" }}>Our next conversation.</span>
            </h2>
            <p
              className="mt-5 max-w-xl text-sm leading-7 sm:text-base"
              style={{ color: "var(--text-secondary)" }}
            >
              Tell us what you need to protect, and let's explore the solutions
              that make sense for your space.
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href="mailto:YOUR_EMAIL@example.com?subject=Security%20Enquiry"
              className="inline-flex items-center justify-center gap-3 rounded-xl px-6 py-4 text-sm font-semibold transition"
              style={{
                background: "var(--accent-primary)",
                color: "var(--accent-primary-text)",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "var(--accent-primary-hover)")}
              onMouseLeave={e => (e.currentTarget.style.background = "var(--accent-primary)")}
            >
              Send an Enquiry <span>↗</span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-xl px-6 py-4 text-sm font-medium transition"
              style={{
                border: "1px solid var(--border-mid)",
                color: "var(--text-secondary)",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "var(--accent-soft-bg)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
