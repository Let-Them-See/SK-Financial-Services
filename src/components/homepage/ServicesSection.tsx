"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const SERVICES = [
  {
    icon: "📈",
    title: "Mutual Fund Advisory",
    desc: "Expert SIP and lump-sum strategies across equity, debt, and hybrid funds tailored to your risk profile.",
    href: "/mutual-fund",
    color: "#0DA574",
  },
  {
    icon: "🛡️",
    title: "Life Insurance",
    desc: "Comprehensive life coverage solutions including term, endowment, ULIP, and child plans for every life stage.",
    href: "/life-insurance",
    color: "#FFD716",
  },
  {
    icon: "🏥",
    title: "Health Insurance",
    desc: "Individual, family floater, and senior citizen health plans to safeguard your health and finances.",
    href: "/health-insurance",
    color: "#00BFFF",
  },
  {
    icon: "💰",
    title: "Fixed Deposits & Bonds",
    desc: "Curated FD and bond options offering stable, guaranteed returns with optimal interest rate advantage.",
    href: "/bonds",
    color: "#FF8C00",
  },
  {
    icon: "🏘️",
    title: "Real Estate Advisory",
    desc: "Strategic real estate investment guidance for residential, commercial, and portfolio diversification needs.",
    href: "/real-estate",
    color: "#9B59B6",
  },
  {
    icon: "🌐",
    title: "NRI Financial Services",
    desc: "End-to-end NRI banking, FCNR/NRE/NRO accounts, remittance, and compliant India investment solutions.",
    href: "/nri-services",
    color: "#0DA574",
  },
];

function ServiceCard({ service, index, visible }: { service: typeof SERVICES[0]; index: number; visible: boolean }) {
  const [hover, setHover] = useState(false);
  return (
    <Link
      href={service.href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "block",
        textDecoration: "none",
        background: hover ? "rgba(255,215,22,0.04)" : "rgba(255,255,255,0.03)",
        border: `1px solid ${hover ? "rgba(255,215,22,0.3)" : "rgba(255,255,255,0.07)"}`,
        borderRadius: 16,
        padding: "28px 24px",
        transition: "all 0.28s ease",
        transform: visible
          ? hover ? "translateY(-6px)" : "none"
          : "translateY(24px)",
        opacity: visible ? 1 : 0,
        transitionDelay: `${index * 0.08}s`,
        boxShadow: hover ? `0 16px 48px rgba(255,215,22,0.1), inset 0 0 0 1px rgba(255,255,255,0.04)` : "none",
      }}
    >
      {/* Icon */}
      <div style={{
        width: 52, height: 52, borderRadius: 13,
        background: `${service.color}15`,
        border: `1px solid ${service.color}30`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 22, marginBottom: 16,
        transition: "background 0.25s, border-color 0.25s",
        ...(hover ? { background: `${service.color}25`, borderColor: `${service.color}50` } : {}),
      }}>
        {service.icon}
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: "var(--font-cormorant), serif",
        fontSize: 20, fontWeight: 700,
        color: hover ? "#FFD716" : "#FFFFFF",
        marginBottom: 10,
        transition: "color 0.25s",
      }}>
        {service.title}
      </h3>

      {/* Desc */}
      <p style={{
        color: "rgba(255,255,255,0.55)",
        fontSize: 13.5,
        lineHeight: 1.7,
        fontFamily: "var(--font-dm-sans), sans-serif",
        marginBottom: 18,
      }}>
        {service.desc}
      </p>

      {/* Arrow link */}
      <span style={{
        color: service.color,
        fontSize: 13, fontWeight: 600,
        fontFamily: "var(--font-dm-sans), sans-serif",
        display: "flex", alignItems: "center", gap: 5,
        transition: "gap 0.2s",
        ...(hover ? { gap: "10px" } : {}),
      }}>
        Learn More <span>→</span>
      </span>
    </Link>
  );
}

export default function ServicesSection() {
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
      id="services"
      style={{
        background: "linear-gradient(180deg, #001F3E, #073358)",
        padding: "100px 32px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", top: "50%", right: "-200px", transform: "translateY(-50%)", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(255,215,22,0.05) 0%,transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Header */}
        <div style={{
          textAlign: "center", marginBottom: 56,
          opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(24px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 14 }}>
            <div style={{ width: 36, height: 2, background: "#FFD716" }} />
            <span style={{ color: "#FFD716", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", fontFamily: "var(--font-dm-sans), sans-serif", textTransform: "uppercase" }}>Our Services</span>
            <div style={{ width: 36, height: 2, background: "#FFD716" }} />
          </div>
          <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 700, color: "#FFFFFF", marginBottom: 14 }}>
            Comprehensive Financial Solutions
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)", maxWidth: 500, margin: "0 auto", fontSize: 16, lineHeight: 1.7, fontFamily: "var(--font-dm-sans), sans-serif" }}>
            Covering every dimension of your financial life — from wealth creation to protection and legacy planning.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="sk-services-grid">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} visible={visible} />
          ))}
        </div>

        {/* All services CTA */}
        <div style={{
          textAlign: "center", marginTop: 48,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.6s ease 0.5s",
        }}>
          <Link
            href="/investment-portfolio"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              color: "#FFD716",
              border: "1.5px solid rgba(255,215,22,0.35)",
              borderRadius: 10, padding: "13px 32px",
              fontSize: 15, fontWeight: 600,
              textDecoration: "none",
              fontFamily: "var(--font-dm-sans), sans-serif",
              transition: "background 0.2s, border-color 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,215,22,0.07)"; e.currentTarget.style.borderColor = "#FFD716"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(255,215,22,0.35)"; }}
          >
            View All Services →
          </Link>
        </div>
      </div>

      <style suppressHydrationWarning>{`
        @media (max-width: 900px) { .sk-services-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 560px) { .sk-services-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
