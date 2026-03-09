"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const CREDENTIALS = [
  { icon: "🎓", label: "AMFI Registered Mutual Fund Distributor" },
  { icon: "🛡️", label: "IRDA Certified Life Insurance Advisor" },
  { icon: "🌐", label: "Specialist in NRI Banking & Investments" },
  { icon: "📊", label: "Certified Financial Planner (CFP)" },
];

const MINI_STATS = [
  { value: "₹200Cr+", label: "AUA" },
  { value: "1000+", label: "Clients" },
  { value: "19+", label: "Years" },
];

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const fadeLeft = {
    opacity: visible ? 1 : 0,
    transform: visible ? "none" : "translateX(-32px)",
    transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
  };
  const fadeRight = {
    opacity: visible ? 1 : 0,
    transform: visible ? "none" : "translateX(32px)",
    transition: "opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s",
  };

  return (
    <section
      ref={ref}
      id="about"
      style={{
        background: "#001F3E",
        padding: "100px 32px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* background accent */}
      <div style={{ position: "absolute", top: "50%", left: "-200px", transform: "translateY(-50%)", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(13,165,116,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center", position: "relative", zIndex: 1 }} className="sk-about-grid">

        {/* Left — image with gold frame */}
        <div style={{ ...fadeLeft, position: "relative" }} className="sk-about-img">
          {/* Gold offset frame */}
          <div style={{ position: "absolute", top: 16, left: -16, right: -16, bottom: -16, border: "2px solid rgba(255,215,22,0.2)", borderRadius: 20, zIndex: 0 }} />

          {/* Image placeholder */}
          <div style={{
            position: "relative", zIndex: 1,
            background: "linear-gradient(135deg, #073358, #001F3E)",
            border: "1px solid rgba(255,215,22,0.15)",
            borderRadius: 18,
            overflow: "hidden",
            height: 440,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}>
            {/* Dot grid inside */}
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(rgba(255,215,22,0.05) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
            {/* Avatar circle */}
            <div style={{ position: "relative", zIndex: 1, width: 120, height: 120, borderRadius: "50%", background: "linear-gradient(135deg,#FFD716,#B8960C)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, fontSize: 48 }}>
              👩‍💼
            </div>
            <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 24px" }}>
              <div style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 28, fontWeight: 700, color: "#FFFFFF", marginBottom: 6 }}>Sheetal Khanna</div>
              <div style={{ color: "#FFD716", fontSize: 13, fontFamily: "var(--font-dm-sans), sans-serif", marginBottom: 4 }}>Founder & Principal Advisor</div>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, fontFamily: "var(--font-dm-sans), sans-serif" }}>B.Com (H) | CFP | AMFI | IRDA</div>
            </div>
          </div>

          {/* Floating badge */}
          <div style={{
            position: "absolute", bottom: 40, right: -30, zIndex: 2,
            background: "linear-gradient(135deg,#FFD716,#E6C200)",
            borderRadius: 14,
            padding: "14px 20px",
            textAlign: "center",
            boxShadow: "0 8px 32px rgba(255,215,22,0.4)",
            animation: "float 4s ease-in-out infinite",
          }}>
            <div style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 32, fontWeight: 700, color: "#001F3E", lineHeight: 1 }}>19+</div>
            <div style={{ color: "#073358", fontSize: 11, fontWeight: 700, fontFamily: "var(--font-dm-sans), sans-serif" }}>YEARS EXP.</div>
          </div>

          {/* Mini stats strip */}
          <div style={{
            position: "absolute", bottom: -20, left: "50%", transform: "translateX(-50%)", zIndex: 2,
            background: "rgba(7,51,88,0.95)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,215,22,0.2)",
            borderRadius: 12,
            padding: "12px 24px",
            display: "flex",
            gap: 24,
            whiteSpace: "nowrap",
            boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
          }}>
            {MINI_STATS.map((s, i) => (
              <React.Fragment key={s.label}>
                {i > 0 && <span style={{ width: 1, background: "rgba(255,255,255,0.1)", display: "inline-block" }} />}
                <div style={{ textAlign: "center" }}>
                  <div style={{ color: "#FFD716", fontFamily: "var(--font-cormorant), serif", fontSize: 20, fontWeight: 700, lineHeight: 1 }}>{s.value}</div>
                  <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 10, fontFamily: "var(--font-dm-sans), sans-serif" }}>{s.label}</div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Right — copy */}
        <div style={{ ...fadeRight, paddingTop: 10 }}>
          {/* Section label */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ width: 36, height: 2, background: "#FFD716" }} />
            <span style={{ color: "#FFD716", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", fontFamily: "var(--font-dm-sans), sans-serif", textTransform: "uppercase" }}>About SK Financial Services</span>
          </div>

          <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.15, marginBottom: 18 }}>
            Trusted Financial<br />
            <span style={{ color: "#FFD716" }}>Guidance Since 2005</span>
          </h2>

          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 16, lineHeight: 1.8, marginBottom: 16, fontFamily: "var(--font-dm-sans), sans-serif" }}>
            SK Financial Services was founded on a simple belief: every individual and family deserves expert financial guidance tailored to their unique goals, not cookie-cutter solutions.
          </p>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 16, lineHeight: 1.8, marginBottom: 28, fontFamily: "var(--font-dm-sans), sans-serif" }}>
            We serve clients across India and internationally with comprehensive wealth management, insurance, retirement planning, and NRI financial services—all under one trusted roof.
          </p>

          {/* Credentials */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
            {CREDENTIALS.map((c) => (
              <div key={c.label} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(255,215,22,0.1)", border: "1px solid rgba(255,215,22,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0 }}>{c.icon}</span>
                <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, fontFamily: "var(--font-dm-sans), sans-serif" }}>{c.label}</span>
              </div>
            ))}
          </div>

          <Link
            href="/AboutPage"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: "#FFD716",
              borderBottom: "1px solid rgba(255,215,22,0.4)",
              paddingBottom: 4,
              fontSize: 15,
              fontWeight: 600,
              textDecoration: "none",
              fontFamily: "var(--font-dm-sans), sans-serif",
              transition: "gap 0.2s, border-color 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.gap = "14px"; e.currentTarget.style.borderColor = "#FFD716"; }}
            onMouseLeave={e => { e.currentTarget.style.gap = "8px"; e.currentTarget.style.borderColor = "rgba(255,215,22,0.4)"; }}
          >
            Learn More About Us <span>→</span>
          </Link>
        </div>
      </div>

      <style suppressHydrationWarning>{`
        @media (max-width: 768px) {
          .sk-about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .sk-about-img { margin-bottom: 60px !important; }
        }
      `}</style>
    </section>
  );
}
