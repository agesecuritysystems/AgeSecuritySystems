
const services = [
  {
    number: "01",
    title: "CCTV & Video Surveillance",
    description:
      "Explore camera systems for monitoring entrances, workspaces, and important areas of your property.",
    tag: "VISIBILITY",
    symbol: "◉",
  },
  {
    number: "02",
    title: "Access Control Systems",
    description:
      "Manage entry to selected areas with access solutions suited to your premises and requirements.",
    tag: "ACCESS",
    symbol: "⌁",
  },
  {
    number: "03",
    title: "Intrusion Detection",
    description:
      "Consider alarm and detection solutions designed to help identify unauthorized entry.",
    tag: "ALERTS",
    symbol: "⌖",
  },
  {
    number: "04",
    title: "Integrated Security",
    description:
      "Explore ways to bring compatible security technologies together into a more coordinated solution.",
    tag: "INTEGRATION",
    symbol: "⎔",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" style={{ background: "var(--bg-base)" }}>
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-[0.22em]"
              style={{ color: "var(--accent-text)" }}
            >
              What we offer
            </p>
            <h2
              className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl"
              style={{ color: "var(--text-primary)" }}
            >
              Security solutions for{" "}
              <span style={{ color: "var(--text-secondary)" }}>real-world needs.</span>
            </h2>
          </div>
          <p
            className="max-w-md text-sm leading-7"
            style={{ color: "var(--text-secondary)" }}
          >
            From individual systems to connected solutions, find the right
            starting point for your security requirements.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.number}
              className="group relative overflow-hidden rounded-2xl p-6 transition duration-300 sm:p-8"
              style={{
                border: "1px solid var(--border-subtle)",
                background: `linear-gradient(135deg, var(--bg-surface-3), var(--bg-surface-2))`,
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-soft-border-hover)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border-subtle)";
              }}
            >
              {/* Hover glow blob */}
              <div
                className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full blur-2xl transition group-hover:opacity-100"
                style={{
                  background: "var(--accent-glow-card)",
                  opacity: 0,
                }}
              />

              <div className="relative flex items-start justify-between">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl text-2xl"
                  style={{
                    border: "1px solid var(--accent-soft-border)",
                    background: "var(--accent-soft-bg)",
                    color: "var(--accent-text)",
                  }}
                >
                  {service.symbol}
                </div>
                <span
                  className="text-xs tracking-[0.15em]"
                  style={{ color: "var(--text-muted)" }}
                >
                  {service.number}
                </span>
              </div>

              <div className="relative mt-8">
                <span
                  className="text-[10px] font-semibold tracking-[0.2em]"
                  style={{ color: "var(--accent-text-muted)" }}
                >
                  {service.tag}
                </span>
                <h3
                  className="mt-2 text-xl font-semibold sm:text-2xl"
                  style={{ color: "var(--text-primary)" }}
                >
                  {service.title}
                </h3>
                <p
                  className="mt-3 max-w-lg text-sm leading-7"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium transition"
                  style={{ color: "var(--text-secondary)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--accent-text)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
                >
                  Discuss this solution <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-xs leading-6" style={{ color: "var(--text-xmuted)" }}>
          Service categories are illustrative placeholders. Keep only the
          solutions that AgeSecuritySystems actually provides.
        </p>
      </div>
    </section>
  );
}
