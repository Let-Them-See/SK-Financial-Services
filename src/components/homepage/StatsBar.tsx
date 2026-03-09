"use client";
import React, { useState, useEffect, useRef } from "react";

const STATS = [
  { value: 200, suffix: "Cr+", label: "Assets Under Advisory", prefix: "₹", icon: "💰" },
  { value: 1000, suffix: "+", label: "Happy Families", prefix: "", icon: "👨‍👩‍👧‍👦" },
  { value: 19, suffix: "+", label: "Years Experience", prefix: "", icon: "🏆" },
  { value: 98, suffix: "%", label: "Client Retention", prefix: "", icon: "⭐" },
];

function useCountUp(target: number, started: boolean, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = (target / duration) * 16;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);
  return count;
}

function StatCard({ stat, index, started }: { stat: typeof STATS[0]; index: number; started: boolean }) {
  const count = useCountUp(stat.value, started);
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        flex: "1 1 200px",
        padding: "24px 28px",
        background: hover ? "rgba(255,215,22,0.06)" : "rgba(255,255,255,0.03)",
        border: `1px solid ${hover ? "rgba(255,215,22,0.35)" : "rgba(255,255,255,0.07)"}`,
        borderRadius: 14,
        textAlign: "center",
        transition: "background 0.25s, border-color 0.25s, transform 0.25s, box-shadow 0.25s",
        transform: hover ? "translateY(-4px)" : "none",
        boxShadow: hover ? "0 12px 40px rgba(255,215,22,0.12)" : "none",
        opacity: started ? 1 : 0,
        animationDelay: `${index * 0.15}s`,
      }}
    >
      <div style={{ fontSize: 28, marginBottom: 8 }}>{stat.icon}</div>
      <div style={{
        fontFamily: "var(--font-cormorant), serif",
        fontSize: "clamp(32px, 4.5vw, 48px)",
        fontWeight: 700,
        color: "#FFD716",
        lineHeight: 1,
        marginBottom: 4,
      }}>
        {stat.prefix}{count}{stat.suffix}
      </div>
      <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, fontFamily: "var(--font-dm-sans), sans-serif" }}>
        {stat.label}
      </div>
    </div>
  );
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); setStarted(true); observer.disconnect(); } },
      { threshold: 0.25 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        background: "linear-gradient(180deg, #001F3E 0%, #073358 100%)",
        padding: "60px 32px",
        borderTop: "1px solid rgba(255,215,22,0.12)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "flex",
          gap: 20,
          flexWrap: "wrap",
          justifyContent: "center",
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(24px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        {STATS.map((stat, i) => (
          <StatCard key={stat.label} stat={stat} index={i} started={started} />
        ))}
      </div>
    </section>
  );
}
