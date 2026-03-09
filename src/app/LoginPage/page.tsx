"use client";
import React from "react";
import PageNavigation from "@/components/shared/PageNavigation";
import PageHero from "@/components/shared/PageHero";
import PageFooter from "@/components/shared/PageFooter";

export default function LoginPage() {
  return (
    <main style={{ background: "#001F3E" }}>
      <PageNavigation />
      <PageHero
        title="Client Login"
        subtitle="Access your financial portfolio and account information securely."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Login", href: "/LoginPage" }]}
      />
      <section style={{ background: "#001F3E", padding: "80px 32px", minHeight: "50vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{
          maxWidth: 440, width: "100%",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,215,22,0.15)",
          borderRadius: 20,
          padding: "44px 40px",
          position: "relative",
        }}>
          <div style={{ position: "absolute", top: 0, left: "20%", right: "20%", height: 2, background: "linear-gradient(90deg,transparent,#FFD716,transparent)", borderRadius: 1 }} />
          <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 32, fontWeight: 700, color: "#FFFFFF", marginBottom: 6, textAlign: "center" }}>Welcome Back</h2>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, textAlign: "center", marginBottom: 32, fontFamily: "var(--font-dm-sans), sans-serif" }}>Sign in to access your account</p>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <label style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, fontFamily: "var(--font-dm-sans), sans-serif", marginBottom: 6, display: "block" }}>Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                style={{ width: "100%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 9, padding: "12px 14px", color: "#FFFFFF", fontSize: 14, fontFamily: "var(--font-dm-sans), sans-serif", outline: "none", boxSizing: "border-box" }}
                onFocus={e => { e.currentTarget.style.borderColor = "rgba(255,215,22,0.4)"; }}
                onBlur={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; }}
              />
            </div>
            <div>
              <label style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, fontFamily: "var(--font-dm-sans), sans-serif", marginBottom: 6, display: "block" }}>Password</label>
              <input
                type="password"
                placeholder="••••••••"
                style={{ width: "100%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 9, padding: "12px 14px", color: "#FFFFFF", fontSize: 14, fontFamily: "var(--font-dm-sans), sans-serif", outline: "none", boxSizing: "border-box" }}
                onFocus={e => { e.currentTarget.style.borderColor = "rgba(255,215,22,0.4)"; }}
                onBlur={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; }}
              />
            </div>
            <button
              style={{
                width: "100%",
                background: "linear-gradient(135deg,#FFD716,#E6C200)",
                color: "#001F3E",
                border: "none",
                borderRadius: 10,
                padding: "14px",
                fontSize: 15,
                fontWeight: 700,
                cursor: "pointer",
                fontFamily: "var(--font-dm-sans), sans-serif",
                marginTop: 4,
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 32px rgba(255,215,22,0.3)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
            >
              Sign In →
            </button>
          </div>

          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 12, textAlign: "center", marginTop: 20, fontFamily: "var(--font-dm-sans), sans-serif" }}>
            For account access, please contact your advisor.
          </p>
        </div>
      </section>
      <PageFooter />
    </main>
  );
}
