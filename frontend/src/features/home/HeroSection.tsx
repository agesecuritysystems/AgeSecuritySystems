import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  /* Once the video has enough data, fade it in over the poster image */
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    const handleCanPlay = () => setVideoReady(true);

    if (vid.readyState >= 3) {
      setVideoReady(true);
    } else {
      vid.addEventListener("canplaythrough", handleCanPlay);
    }

    return () => vid.removeEventListener("canplaythrough", handleCanPlay);
  }, []);

  return (
    <section className="relative isolate overflow-hidden" style={{ minHeight: "100vh", paddingTop: "72px" }}>

      {/* ── Layer 1: Background IMAGE (always visible, loads instantly) ── */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: `url('/images/hero-img.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* ── Layer 2: Background VIDEO (fades in over image once ready) ── */}
      <video
        ref={videoRef}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        style={{
          opacity: videoReady ? 1 : 0,
          transition: "opacity 1.4s ease",
        }}
        src="/videos/hero-v1.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      {/* ── Layer 3: 50% Glass overlay ── */}
      <div
        className="absolute inset-0 -z-[5]"
        style={{
          background: "rgba(0, 0, 0, 0.50)",
          backdropFilter: "blur(2px)",
          WebkitBackdropFilter: "blur(2px)",
        }}
      />

      {/* ── Layer 4: Accent radial glow on top of overlay ── */}
      <div
        className="pointer-events-none absolute inset-0 -z-[4]"
        style={{
          background: `radial-gradient(ellipse at 60% 40%, var(--accent-glow), transparent 55%)`,
        }}
      />

      {/* ── Content: centered hero text ── */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center justify-center px-5 py-32 text-center sm:px-8 sm:py-40 lg:py-52">

        {/* Badge */}
        <div
          className="mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium tracking-wide"
          style={{
            border: "1px solid rgba(255,255,255,0.18)",
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(8px)",
            color: "#e2e8f0",
          }}
        >
          <span className="h-2 w-2 rounded-full" style={{ background: "var(--status-dot)" }} />
          SECURITY BUILT AROUND YOU
        </div>

        {/* H1 */}
        <h1
          className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          Confidence starts with{" "}
          <span
            style={{
              background: `linear-gradient(to right, var(--accent-text), #fff)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            feeling secure.
          </span>
        </h1>

        {/* Paragraph */}
        <p className="mt-7 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
          Smarter security solutions for the spaces, people, and things that
          matter most. Discover protection designed around your needs.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-3 rounded-xl px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            style={{
              background: "var(--accent-primary)",
              boxShadow: `0 10px 40px var(--accent-shadow)`,
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "var(--accent-primary-hover)")}
            onMouseLeave={e => (e.currentTarget.style.background = "var(--accent-primary)")}
          >
            Discuss Your Requirements <span>↗</span>
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-xl px-7 py-4 text-sm font-medium text-slate-100 transition"
            style={{
              border: "1px solid rgba(255,255,255,0.20)",
              background: "rgba(255,255,255,0.07)",
              backdropFilter: "blur(6px)",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.14)")}
            onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.07)")}
          >
            Explore Solutions
          </a>
        </div>

        {/* Trust chips */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-slate-300">
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

      {/* Bottom fade into next section */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: "linear-gradient(to bottom, transparent, var(--bg-base))",
        }}
      />
    </section>
  );
}
