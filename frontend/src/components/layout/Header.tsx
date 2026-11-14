
import { useState } from "react";
import { useTheme, type Accent } from "../../context/ThemeContext";

const links = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const accentOptions: { value: Accent; label: string; dot: string }[] = [
  { value: "blue",      label: "Blue",      dot: "#3b82f6" },
  { value: "purple",    label: "Purple",    dot: "#a855f7" },
  { value: "seagreen",  label: "Sea Green", dot: "#10b981" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, accent, toggleTheme, setAccent } = useTheme();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl"
      style={{
        borderBottom: "1px solid rgba(255,255,255,0.12)",
        background: "rgba(10, 15, 30, 0.60)",
      }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3" aria-label="AgeSecuritySystems home">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-xl"
            style={{
              border: "1px solid var(--accent-soft-border)",
              background: "var(--accent-soft-bg)",
              color: "var(--accent-text)",
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.7">
              <path d="M12 3 20 6v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3Z" />
              <path d="m8.5 12 2.3 2.3 4.8-5" />
            </svg>
          </div>
          <div>
            <span
              className="block text-base font-semibold tracking-tight sm:text-lg"
              style={{ color: "var(--text-primary)" }}
            >
              AgeSecuritySystems
            </span>
            <span
              className="text-[10px] font-medium uppercase tracking-[0.2em]"
              style={{ color: "var(--text-muted)" }}
            >
              Security. Simplified.
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
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

          {/* ── Accent colour picker (light mode only) ── */}
          {theme === "light" && (
            <div className="flex items-center gap-2" title="Choose accent colour">
              {accentOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setAccent(opt.value)}
                  aria-label={`Set accent to ${opt.label}`}
                  className="rounded-full transition"
                  style={{
                    width: 18,
                    height: 18,
                    background: opt.dot,
                    outline: accent === opt.value ? `2px solid ${opt.dot}` : "2px solid transparent",
                    outlineOffset: 2,
                    opacity: accent === opt.value ? 1 : 0.5,
                  }}
                />
              ))}
            </div>
          )}

          {/* ── Dark / Light toggle ── */}
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="flex h-9 w-9 items-center justify-center rounded-lg transition"
            style={{
              border: "1px solid var(--border-mid)",
              background: "var(--accent-soft-bg)",
              color: "var(--text-primary)",
            }}
          >
            {theme === "dark" ? (
              /* Sun icon */
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              /* Moon icon */
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* CTA button */}
          <a
            href="#contact"
            className="rounded-lg px-5 py-3 text-sm font-semibold transition"
            style={{
              background: "var(--accent-primary)",
              color: "var(--accent-primary-text)",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "var(--accent-primary-hover)")}
            onMouseLeave={e => (e.currentTarget.style.background = "var(--accent-primary)")}
          >
            Get a Quote <span aria-hidden="true">↗</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="rounded-lg px-3 py-2 text-sm md:hidden"
          style={{
            border: "1px solid var(--border-mid)",
            color: "var(--text-primary)",
          }}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          className="px-5 py-4 md:hidden"
          style={{ borderTop: "1px solid var(--border-mid)" }}
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                {link.label}
              </a>
            ))}

            {/* Mobile accent picker (light only) */}
            {theme === "light" && (
              <div className="flex items-center gap-3 py-1">
                <span className="text-xs" style={{ color: "var(--text-muted)" }}>Colour:</span>
                {accentOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setAccent(opt.value)}
                    aria-label={`Set accent to ${opt.label}`}
                    className="rounded-full"
                    style={{
                      width: 20,
                      height: 20,
                      background: opt.dot,
                      outline: accent === opt.value ? `2px solid ${opt.dot}` : "2px solid transparent",
                      outlineOffset: 2,
                      opacity: accent === opt.value ? 1 : 0.5,
                    }}
                  />
                ))}
              </div>
            )}

            {/* Mobile theme toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              {theme === "dark" ? "☀ Light mode" : "🌙 Dark mode"}
            </button>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-5 py-3 text-center text-sm font-semibold"
              style={{
                background: "var(--accent-primary)",
                color: "var(--accent-primary-text)",
              }}
            >
              Get a Quote ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
