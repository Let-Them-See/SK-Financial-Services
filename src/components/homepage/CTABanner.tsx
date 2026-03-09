"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function CTABanner() {
  const [hovPrimary, setHovPrimary] = useState(false);
  const [hovSecondary, setHovSecondary] = useState(false);

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #FFD716 0%, #E6C200 35%, #FFD716 70%, #B8960C 100%)",
        backgroundSize: "300% auto",
        animation: "gradientShift 8s linear infinite",
        padding: "80px 32px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dot grid overlay */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(rgba(0,31,62,0.06) 1px, transparent 1px)", backgroundSize: "32px 32px", pointerEvents: "none" }} />
      {/* Left glow */}
      <div style={{ position: "absolute", top: "50%", left: "-80px", transform: "translateY(-50%)", width: 350, height: 350, borderRadius: "50%", background: "rgba(255,255,255,0.08)", pointerEvents: "none" }} />
      {/* Right glow */}
      <div style={{ position: "absolute", top: "50%", right: "-80px", transform: "translateY(-50%)", width: 350, height: 350, borderRadius: "50%", background: "rgba(0,31,62,0.06)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
        {/* Tag */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(0,31,62,0.1)", borderRadius: 100, padding: "5px 16px", marginBottom: 18 }}>
          <span style={{ color: "#001F3E", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", fontFamily: "var(--font-dm-sans), sans-serif", textTransform: "uppercase" }}>Free Consultation</span>
        </div>

        {/* Headline */}
        <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(34px,5vw,62px)", fontWeight: 700, color: "#001F3E", lineHeight: 1.1, marginBottom: 16 }}>
          Start Your Financial<br />Journey Today
        </h2>

        {/* Subtext */}
        <p style={{ color: "rgba(0,31,62,0.7)", fontSize: 17, lineHeight: 1.7, maxWidth: 540, margin: "0 auto 36px", fontFamily: "var(--font-dm-sans), sans-serif" }}>
          Join 1000+ families who have secured their financial future with SK Financial Services.
          Book a free, no-obligation consultation with our certified advisors.
        </p>

        {/* Buttons */}
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/contact-us"
            onMouseEnter={() => setHovPrimary(true)}
            onMouseLeave={() => setHovPrimary(false)}
            style={{
              background: "#001F3E",
              color: "#FFD716",
              fontWeight: 700,
              padding: "16px 36px",
              borderRadius: 10,
              fontSize: 16,
              textDecoration: "none",
              boxShadow: hovPrimary ? "0 16px 48px rgba(0,31,62,0.5)" : "0 8px 28px rgba(0,31,62,0.3)",
              transform: hovPrimary ? "translateY(-3px)" : "none",
              transition: "transform 0.2s, box-shadow 0.2s",
              fontFamily: "var(--font-dm-sans), sans-serif",
            }}
          >
            Book Free Consultation →
          </Link>
          <Link
            href="/calculators"
            onMouseEnter={() => setHovSecondary(true)}
            onMouseLeave={() => setHovSecondary(false)}
            style={{
              background: hovSecondary ? "rgba(0,31,62,0.12)" : "transparent",
              color: "#001F3E",
              border: "2px solid rgba(0,31,62,0.35)",
              fontWeight: 600,
              padding: "15px 36px",
              borderRadius: 10,
              fontSize: 16,
              textDecoration: "none",
              transform: hovSecondary ? "translateY(-3px)" : "none",
              transition: "transform 0.2s, background 0.2s, border-color 0.2s",
              borderColor: hovSecondary ? "rgba(0,31,62,0.6)" : "rgba(0,31,62,0.35)",
              fontFamily: "var(--font-dm-sans), sans-serif",
            }}
          >
            Try Our Calculators
          </Link>
        </div>

        {/* Trust row */}
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 24, marginTop: 32 }}>
          {["AMFI Registered", "IRDA Certified", "No Hidden Fees", "19+ Years Experience"].map((item, i) => (
            <React.Fragment key={item}>
              {i > 0 && <span style={{ width: 1, background: "rgba(0,31,62,0.2)", display: "inline-block", alignSelf: "stretch" }} />}
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="11" fill="rgba(0,31,62,0.12)"/>
                  <path d="M7 12.5L10.5 16l6.5-7" stroke="#001F3E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span style={{ color: "rgba(0,31,62,0.7)", fontSize: 13, fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 500 }}>{item}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
