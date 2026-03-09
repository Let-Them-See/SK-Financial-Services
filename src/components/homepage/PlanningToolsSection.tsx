"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const TOOLS = [
  { icon: "📊", title: "SIP Calculator", desc: "Estimate your SIP maturity value and wealth creation over time.", href: "/calculators" },
  { icon: "💰", title: "Lump Sum Calculator", desc: "Calculate returns on one-time mutual fund investments.", href: "/calculators" },
  { icon: "🎯", title: "Retirement Planner", desc: "Plan your retirement corpus with inflation-adjusted projections.", href: "/calculators" },
  { icon: "🏠", title: "Home Loan EMI", desc: "Calculate home loan EMI, total interest, and amortisation schedule.", href: "/calculators" },
  { icon: "📉", title: "Tax Saver (ELSS)", desc: "Find ELSS investments that maximise your Section 80C savings.", href: "/calculators" },
  { icon: "📈", title: "Inflation Calculator", desc: "See real purchasing power of your money over years.", href: "/calculators" },
  { icon: "🛡️", title: "Insurance Needs", desc: "Calculate the ideal life insurance cover for your family.", href: "/calculators" },
  { icon: "🎓", title: "Education Fund", desc: "Plan a future-ready education corpus for your children.", href: "/calculators" },
];

function ToolCard({ tool, index, visible }: { tool: typeof TOOLS[0]; index: number; visible: boolean }) {
  const [hover, setHover] = useState(false);
  return (
    <Link
      href={tool.href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "flex",
        gap: 14,
        alignItems: "flex-start",
        textDecoration: "none",
        background: hover ? "rgba(255,215,22,0.05)" : "rgba(255,255,255,0.03)",
        border: `1px solid ${hover ? "rgba(255,215,22,0.3)" : "rgba(255,255,255,0.07)"}`,
        borderRadius: 14,
        padding: "20px 20px",
        transition: "all 0.25s",
        transform: visible ? (hover ? "translateY(-3px)" : "none") : "translateY(20px)",
        opacity: visible ? 1 : 0,
        transitionDelay: `${index * 0.06}s`,
        boxShadow: hover ? "0 10px 32px rgba(255,215,22,0.1)" : "none",
      }}
    >
      <span style={{
        width: 40, height: 40, borderRadius: 10, flexShrink: 0,
        background: hover ? "rgba(255,215,22,0.15)" : "rgba(255,215,22,0.08)",
        border: `1px solid ${hover ? "rgba(255,215,22,0.3)" : "rgba(255,215,22,0.15)"}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 18,
        transition: "background 0.25s, border-color 0.25s",
      }}>
        {tool.icon}
      </span>
      <div>
        <div style={{ color: hover ? "#FFD716" : "#FFFFFF", fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 600, fontSize: 15, marginBottom: 4, transition: "color 0.25s" }}>
          {tool.title}
        </div>
        <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, lineHeight: 1.55, fontFamily: "var(--font-dm-sans), sans-serif" }}>
          {tool.desc}
        </div>
      </div>
    </Link>
  );
}

export default function PlanningToolsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="tools"
      style={{ background: "#001F3E", padding: "100px 32px", position: "relative", overflow: "hidden" }}
    >
      <div style={{ position: "absolute", bottom: 0, right: "10%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(13,165,116,0.06) 0%,transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 52, opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(24px)", transition: "opacity 0.6s, transform 0.6s" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 14 }}>
            <div style={{ width: 36, height: 2, background: "#FFD716" }} />
            <span style={{ color: "#FFD716", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", fontFamily: "var(--font-dm-sans), sans-serif", textTransform: "uppercase" }}>Planning Tools</span>
            <div style={{ width: 36, height: 2, background: "#FFD716" }} />
          </div>
          <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 700, color: "#FFFFFF", marginBottom: 14 }}>
            Free Financial Calculators
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)", maxWidth: 480, margin: "0 auto", fontSize: 16, lineHeight: 1.7, fontFamily: "var(--font-dm-sans), sans-serif" }}>
            Powerful tools to help you plan, project, and visualise your financial journey.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }} className="sk-tools-grid">
          {TOOLS.map((tool, i) => (
            <ToolCard key={tool.title} tool={tool} index={i} visible={visible} />
          ))}
        </div>

        {/* Dark CTA banner */}
        <div style={{
          marginTop: 52,
          background: "linear-gradient(135deg,#073358,#001F3E)",
          border: "1px solid rgba(255,215,22,0.15)",
          borderRadius: 20,
          padding: "36px 40px",
          display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap",
          position: "relative", overflow: "hidden",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.6s ease 0.5s",
        }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(255,215,22,0.3),transparent)" }} />
          <div>
            <div style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 26, fontWeight: 700, color: "#FFFFFF", marginBottom: 6 }}>
              Need Personalised Guidance?
            </div>
            <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 15, fontFamily: "var(--font-dm-sans), sans-serif" }}>
              Let our certified advisors build a custom financial plan for you — completely free.
            </div>
          </div>
          <Link
            href="/contact-us"
            style={{
              background: "linear-gradient(135deg,#FFD716,#E6C200)",
              color: "#001F3E",
              fontWeight: 700,
              padding: "14px 30px",
              borderRadius: 10,
              fontSize: 15,
              textDecoration: "none",
              whiteSpace: "nowrap",
              boxShadow: "0 6px 24px rgba(255,215,22,0.3)",
              transition: "transform 0.2s, box-shadow 0.2s",
              fontFamily: "var(--font-dm-sans), sans-serif",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 36px rgba(255,215,22,0.45)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 6px 24px rgba(255,215,22,0.3)"; }}
          >
            Book Free Consultation →
          </Link>
        </div>
      </div>

      <style suppressHydrationWarning>{`
        @media (max-width: 1024px) { .sk-tools-grid { grid-template-columns: repeat(3,1fr) !important; } }
        @media (max-width: 768px) { .sk-tools-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 480px) { .sk-tools-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
