"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const BARS = [
  { height: "40%", color: "rgba(255,255,255,0.1)" },
  { height: "58%", color: "rgba(255,255,255,0.1)" },
  { height: "50%", color: "rgba(255,255,255,0.1)" },
  { height: "72%", color: "rgba(255,255,255,0.1)" },
  { height: "62%", color: "rgba(255,255,255,0.1)" },
  { height: "88%", color: "linear-gradient(180deg,#0DA574,#4EEEC4)" },
  { height: "78%", color: "rgba(255,255,255,0.1)" },
  { height: "95%", color: "linear-gradient(180deg,#FFD716,#FFF5A0)" },
];

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const [barsVisible, setBarsVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    const t2 = setTimeout(() => setBarsVisible(true), 600);
    return () => { clearTimeout(t); clearTimeout(t2); };
  }, []);

  const fadeStyle = (delay: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(32px)",
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  });

  const fadeRightStyle = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateX(0)" : "translateX(32px)",
    transition: "opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s",
  };

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #001F3E 0%, #073358 45%, #001F3E 100%)",
        padding: "128px 32px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dot grid */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(rgba(255,215,22,0.07) 1px, transparent 1px)", backgroundSize: "40px 40px", pointerEvents: "none" }} />
      {/* Top-right glow */}
      <div style={{ position: "absolute", top: 0, right: 0, width: 600, height: 600, background: "radial-gradient(circle, rgba(13,165,116,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
      {/* Bottom-left glow */}
      <div style={{ position: "absolute", bottom: 0, left: 0, width: 450, height: 450, background: "radial-gradient(circle, rgba(255,215,22,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
      {/* Rotating ring */}
      <div style={{
        position: "absolute", top: "10%", right: "5%",
        width: 300, height: 300, borderRadius: "50%",
        border: "1px dashed rgba(255,215,22,0.1)",
        animation: "rotate 25s linear infinite",
        pointerEvents: "none",
      }} />

      {/* Content grid */}
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center", position: "relative", zIndex: 1 }}>
        {/* Left column */}
        <div>
          {/* Certification badge */}
          <div style={{ ...fadeStyle(0), display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(13,165,116,0.15)", border: "1px solid rgba(13,165,116,0.3)", borderRadius: 100, padding: "6px 18px", marginBottom: 24 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#0DA574", animation: "pulse 2s infinite", display: "inline-block" }} />
            <span style={{ color: "#0DA574", fontSize: 12, fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              AMFI &amp; IRDA Certified Financial Advisor
            </span>
          </div>

          {/* Headline */}
          <h1 style={{ ...fadeStyle(0.1), fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(44px, 6.5vw, 82px)", fontWeight: 700, lineHeight: 1.08, color: "#FFFFFF", marginBottom: 20 }}>
            Your Wealth,<br />
            <span style={{
              background: "linear-gradient(135deg,#FFD716,#FFF0A0,#B8960C,#FFD716)",
              backgroundSize: "300% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "shimmer 4s linear infinite",
            }}>
              Expertly
            </span><br />
            Managed.
          </h1>

          {/* Subheadline */}
          <p style={{ ...fadeStyle(0.2), color: "rgba(255,255,255,0.65)", fontSize: 17, lineHeight: 1.75, maxWidth: 540, marginBottom: 32, fontFamily: "var(--font-dm-sans), sans-serif" }}>
            Founded by Sheetal Khanna with 19+ years of experience.
            We provide personalized, holistic financial advisory that
            grows and protects your wealth for generations to come.
          </p>

          {/* CTA buttons */}
          <div style={{ ...fadeStyle(0.35), display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 32 }}>
            <Link
              href="/contact-us"
              style={{
                background: "linear-gradient(135deg,#FFD716,#E6C200)",
                color: "#001F3E",
                fontWeight: 700,
                padding: "16px 34px",
                borderRadius: 10,
                fontSize: 15,
                textDecoration: "none",
                boxShadow: "0 8px 32px rgba(255,215,22,0.35)",
                transition: "transform 0.2s, box-shadow 0.2s",
                fontFamily: "var(--font-dm-sans), sans-serif",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 14px 44px rgba(255,215,22,0.5)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(255,215,22,0.35)";
              }}
            >
              Start Your Journey →
            </Link>
            <Link
              href="/investment-portfolio"
              style={{
                background: "transparent",
                color: "#FFFFFF",
                border: "1.5px solid rgba(255,255,255,0.25)",
                padding: "15px 34px",
                borderRadius: 10,
                fontSize: 15,
                fontWeight: 500,
                textDecoration: "none",
                transition: "border-color 0.2s, color 0.2s, background 0.2s",
                fontFamily: "var(--font-dm-sans), sans-serif",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "rgba(255,215,22,0.5)";
                e.currentTarget.style.color = "#FFD716";
                e.currentTarget.style.background = "rgba(255,215,22,0.05)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
                e.currentTarget.style.color = "#FFFFFF";
                e.currentTarget.style.background = "transparent";
              }}
            >
              Explore Services
            </Link>
          </div>

          {/* Trust strip */}
          <div style={{ ...fadeStyle(0.5), display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
            {["AMFI Registered", "IRDA Certified", "19+ Years"].map((item, i) => (
              <React.Fragment key={item}>
                {i > 0 && <span style={{ width: 1, height: 20, background: "rgba(255,255,255,0.15)", display: "inline-block" }} />}
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ width: 16, height: 16, borderRadius: "50%", background: "#0DA574", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="9" height="7" viewBox="0 0 9 7" fill="none"><path d="M1 3.5L3.5 6L8 1" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <span style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, fontFamily: "var(--font-dm-sans), sans-serif" }}>{item}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Right column — portfolio card */}
        <div style={{ ...fadeRightStyle, display: "flex", justifyContent: "center" }} className="sk-hero-right">
          <div style={{
            background: "rgba(255,255,255,0.04)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,215,22,0.2)",
            borderRadius: 24,
            padding: 36,
            maxWidth: 400,
            width: "100%",
            animation: "float 5s ease-in-out infinite",
            boxShadow: "0 24px 80px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,215,22,0.1)",
            position: "relative",
          }}>
            {/* Gold top accent */}
            <div style={{ position: "absolute", top: 0, left: "20%", right: "20%", height: 2, background: "linear-gradient(90deg, transparent, #FFD716, transparent)", borderRadius: 1 }} />

            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <span style={{ color: "#FFD716", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", fontFamily: "var(--font-dm-sans), sans-serif" }}>PORTFOLIO OVERVIEW</span>
              <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#0DA574", animation: "pulse 2s infinite", display: "inline-block" }} />
                <span style={{ color: "#0DA574", fontSize: 10, fontFamily: "var(--font-dm-sans), sans-serif" }}>Live</span>
              </span>
            </div>

            {/* Chart bars */}
            <div style={{ display: "flex", alignItems: "flex-end", height: 90, gap: 6, marginBottom: 20 }}>
              {BARS.map((bar, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: barsVisible ? bar.height : "0%",
                    background: bar.color,
                    borderRadius: "4px 4px 0 0",
                    transition: `height 0.6s cubic-bezier(.4,0,.2,1) ${i * 0.07}s`,
                    cursor: "pointer",
                  }}
                  onMouseEnter={e => { if (!bar.color.startsWith("linear")) e.currentTarget.style.background = "rgba(255,255,255,0.2)"; }}
                  onMouseLeave={e => { if (!bar.color.startsWith("linear")) e.currentTarget.style.background = bar.color; }}
                />
              ))}
            </div>

            {/* Divider */}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 16, marginBottom: 16 }} />

            {/* Stats */}
            <div style={{ display: "flex", gap: 16 }}>
              <div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, marginBottom: 4, fontFamily: "var(--font-dm-sans), sans-serif" }}>Total Returns</div>
                <div style={{ color: "#0DA574", fontFamily: "var(--font-cormorant), serif", fontSize: 26, fontWeight: 700 }}>+18.4%</div>
              </div>
              <div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, marginBottom: 4, fontFamily: "var(--font-dm-sans), sans-serif" }}>YTD Growth</div>
                <div style={{ color: "#FFD716", fontFamily: "var(--font-cormorant), serif", fontSize: 26, fontWeight: 700 }}>+₹2.4Cr</div>
              </div>
            </div>

            {/* Cert pills */}
            <div style={{ display: "flex", gap: 6, marginTop: 16, flexWrap: "wrap" }}>
              {["AMFI Reg.", "IRDA Cert.", "NRI Spec."].map((p) => (
                <span key={p} style={{ background: "rgba(255,215,22,0.08)", border: "1px solid rgba(255,215,22,0.2)", borderRadius: 6, padding: "4px 10px", color: "#FFD716", fontSize: 10, fontWeight: 600, fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style suppressHydrationWarning>{`
        @media (max-width: 768px) {
          .sk-hero-right { display: none !important; }
          #home > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
