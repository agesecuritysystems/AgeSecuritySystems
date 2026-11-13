
const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border-subtle)", background: "var(--bg-base)" }}>
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-9 sm:px-8 md:flex-row md:items-center md:justify-between">
        <a href="#" className="flex items-center gap-3">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-lg"
            style={{
              border: "1px solid var(--accent-soft-border)",
              background: "var(--accent-soft-bg)",
              color: "var(--accent-text)",
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.7">
              <path d="M12 3 20 6v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3Z" />
              <path d="m8.5 12 2.3 2.3 4.8-5" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
              AgeSecuritySystems
            </p>
            <p className="mt-1 text-xs" style={{ color: "var(--text-muted)" }}>
              Security. Simplified.
            </p>
          </div>
        </a>

        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-3">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm transition"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-xs leading-6" style={{ color: "var(--text-muted)" }}>
          © {new Date().getFullYear()} AgeSecuritySystems.
          <br className="hidden sm:block" /> All rights reserved.
        </p>
      </div>
    </footer>
  );
}
