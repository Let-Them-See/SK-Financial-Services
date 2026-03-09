"use client";
import React, { useState } from "react";
import Link from "next/link";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/AboutPage" },
  { label: "Investment Portfolio", href: "/investment-portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Calculators", href: "/calculators" },
];

const SERVICE_LINKS = [
  { label: "Mutual Funds", href: "/mutual-fund" },
  { label: "Life Insurance", href: "/life-insurance" },
  { label: "Health Insurance", href: "/health-insurance" },
  { label: "Fixed Deposits & Bonds", href: "/bonds" },
  { label: "Real Estate Advisory", href: "/real-estate" },
  { label: "NRI Services", href: "/nri-services" },
];

const CERT_PILLS = ["AMFI Registered", "IRDA Certified", "NRI Specialist", "CFP Certified"];

const SOCIAL = [
  { label: "LinkedIn", href: "#", icon: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
  )},
  { label: "Facebook", href: "#", icon: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
  )},
  { label: "WhatsApp", href: "#", icon: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
  )},
  { label: "Instagram", href: "#", icon: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
  )},
];

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const [hover, setHover] = useState(false);
  return (
    <Link
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        color: hover ? "#FFD716" : "rgba(255,255,255,0.5)",
        fontSize: 14,
        textDecoration: "none",
        fontFamily: "var(--font-dm-sans), sans-serif",
        display: "flex", alignItems: "center", gap: 6,
        transition: "color 0.2s, gap 0.2s",
      }}
    >
      <span style={{ color: hover ? "#FFD716" : "rgba(255,215,22,0.3)", fontSize: 10, transition: "color 0.2s" }}>›</span>
      {children}
    </Link>
  );
}

export default function PageFooter() {
  const [hoverTop, setHoverTop] = useState(false);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer style={{ background: "#001F3E", borderTop: "1px solid rgba(255,215,22,0.15)", color: "#FFFFFF" }}>
      {/* Main grid */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "72px 32px 48px", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1.4fr", gap: 48 }} className="sk-footer-grid">

        {/* Brand column */}
        <div>
          <div style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 700, fontSize: 22, letterSpacing: "0.02em", marginBottom: 4 }}>
            SK <span style={{ color: "#FFD716" }}>Financial</span> Services
          </div>
          <div style={{ color: "#FFD716", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", fontFamily: "var(--font-dm-sans), sans-serif", marginBottom: 16, textTransform: "uppercase" }}>
            Wealth. Simplified. Secured.
          </div>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13.5, lineHeight: 1.8, maxWidth: 300, marginBottom: 20, fontFamily: "var(--font-dm-sans), sans-serif" }}>
            Trusted financial advisory founded by Sheetal Khanna with 19+ years of certified expertise. Serving individuals, families, and NRIs across India.
          </p>

          {/* Cert pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
            {CERT_PILLS.map((p) => (
              <span key={p} style={{ background: "rgba(255,215,22,0.08)", border: "1px solid rgba(255,215,22,0.2)", borderRadius: 100, padding: "4px 12px", color: "rgba(255,215,22,0.8)", fontSize: 11, fontWeight: 600, fontFamily: "var(--font-dm-sans), sans-serif" }}>
                {p}
              </span>
            ))}
          </div>

          {/* Social icons */}
          <div style={{ display: "flex", gap: 10 }}>
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                style={{ width: 36, height: 36, borderRadius: 9, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "background 0.2s, color 0.2s, border-color 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,215,22,0.15)"; e.currentTarget.style.color = "#FFD716"; e.currentTarget.style.borderColor = "rgba(255,215,22,0.3)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = "rgba(255,255,255,0.5)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <div style={{ color: "#FFFFFF", fontSize: 15, fontWeight: 700, fontFamily: "var(--font-dm-sans), sans-serif", marginBottom: 20, paddingBottom: 12, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            Quick Links
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {QUICK_LINKS.map((l) => <FooterLink key={l.label} href={l.href}>{l.label}</FooterLink>)}
          </div>
        </div>

        {/* Services */}
        <div>
          <div style={{ color: "#FFFFFF", fontSize: 15, fontWeight: 700, fontFamily: "var(--font-dm-sans), sans-serif", marginBottom: 20, paddingBottom: 12, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            Our Services
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {SERVICE_LINKS.map((l) => <FooterLink key={l.label} href={l.href}>{l.label}</FooterLink>)}
          </div>
        </div>

        {/* Contact */}
        <div>
          <div style={{ color: "#FFFFFF", fontSize: 15, fontWeight: 700, fontFamily: "var(--font-dm-sans), sans-serif", marginBottom: 20, paddingBottom: 12, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            Contact Us
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              { icon: "📍", text: "Mumbai, Maharashtra, India" },
              { icon: "📞", text: "+91 98765 43210" },
              { icon: "✉️", text: "info@skfinancialservices.com" },
              { icon: "🕒", text: "Mon–Sat: 9:00 AM – 6:30 PM" },
            ].map((c) => (
              <div key={c.icon} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span style={{ fontSize: 14, marginTop: 1, flexShrink: 0 }}>{c.icon}</span>
                <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 13.5, lineHeight: 1.6, fontFamily: "var(--font-dm-sans), sans-serif" }}>{c.text}</span>
              </div>
            ))}

            <Link
              href="/contact-us"
              style={{
                marginTop: 4,
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                background: "linear-gradient(135deg,#FFD716,#E6C200)",
                color: "#001F3E",
                fontWeight: 700,
                padding: "11px 22px",
                borderRadius: 9,
                fontSize: 13,
                textDecoration: "none",
                fontFamily: "var(--font-dm-sans), sans-serif",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 32px rgba(255,215,22,0.3)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
            >
              Book Consultation →
            </Link>
          </div>
        </div>
      </div>

      {/* Gold divider */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(255,215,22,0.4), transparent)" }} />
      </div>

      {/* Bottom bar */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "22px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 12.5, fontFamily: "var(--font-dm-sans), sans-serif" }}>
          © 2026 SK Financial Services. All rights reserved. | AMFI ARN: XXXXXXXX | IRDAI Reg: XXXXXX
        </span>
        <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
          {[
            { label: "Privacy Policy", href: "/PrivacyPolicy" },
            { label: "Terms & Conditions", href: "/TermsConditions" },
          ].map((l) => (
            <Link
              key={l.label}
              href={l.href}
              style={{ color: "rgba(255,255,255,0.3)", fontSize: 12.5, textDecoration: "none", fontFamily: "var(--font-dm-sans), sans-serif", transition: "color 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.color = "#FFD716"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.3)"; }}
            >
              {l.label}
            </Link>
          ))}

          {/* Back to top */}
          <button
            onClick={scrollTop}
            onMouseEnter={() => setHoverTop(true)}
            onMouseLeave={() => setHoverTop(false)}
            style={{
              width: 34, height: 34, borderRadius: 8,
              background: hoverTop ? "rgba(255,215,22,0.2)" : "rgba(255,255,255,0.06)",
              border: `1px solid ${hoverTop ? "rgba(255,215,22,0.4)" : "rgba(255,255,255,0.1)"}`,
              color: hoverTop ? "#FFD716" : "rgba(255,255,255,0.4)",
              cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.2s", fontSize: 14,
            }}
            aria-label="Back to top"
          >
            ↑
          </button>
        </div>
      </div>

      <style suppressHydrationWarning>{`
        @media (max-width: 1024px) { .sk-footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 560px) { .sk-footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
