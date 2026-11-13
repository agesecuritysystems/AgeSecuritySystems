
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
        <div className="max-w-2xl">
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
          <p
            className="mt-5 max-w-xl leading-7"
            style={{ color: "var(--text-secondary)" }}
          >
            Good security is about more than equipment. It is about finding the
            right fit, understanding your options, and making confident decisions.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
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
              <h3
                className="mt-8 text-xl font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                {benefit.title}
              </h3>
              <p
                className="mt-4 text-sm leading-7"
                style={{ color: "var(--text-secondary)" }}
              >
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
