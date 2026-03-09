// ...existing code...
"use client";
import React from "react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface PageHeroProps {
  title: string;
  subtitle: string;
  breadcrumb: BreadcrumbItem[];
}

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section style={{
      height: 280,
      background: 'linear-gradient(135deg, #001F3E 0%, #073358 60%, #001F3E 100%)',
      position: 'relative',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingBottom: 32,
      overflow: 'hidden',
    }}>
      {/* Dot grid overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(rgba(255,215,22,0.06) 1px, transparent 1px)',
        backgroundSize: '36px 36px',
        pointerEvents: 'none',
        zIndex: 1,
      }} />
      {/* Vertical gold accent lines */}
      <div style={{ position: 'absolute', top: 0, left: '20%', width: 2, height: '100%', background: 'linear-gradient(180deg, transparent, #FFD716, transparent)', zIndex: 2 }} />
      <div style={{ position: 'absolute', top: 0, left: '80%', width: 2, height: '100%', background: 'linear-gradient(180deg, transparent, #FFD716, transparent)', zIndex: 2 }} />
      {/* Bottom gold line */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 2, background: 'linear-gradient(90deg, transparent, #FFD716, transparent)', zIndex: 2 }} />
      {/* Content */}
      <div style={{ position: 'relative', zIndex: 3, textAlign: 'center', width: '100%' }}>
        {/* Breadcrumb */}
        <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 12, marginBottom: 12 }}>
          {breadcrumb.map((item, idx) => (
            <span key={item.label}>
              {idx > 0 && <span style={{ color: '#FFD716', margin: '0 6px' }}>›</span>}
              <a href={item.href} style={{ color: idx === breadcrumb.length - 1 ? '#FFD716' : 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>{item.label}</a>
            </span>
          ))}
        </div>
        <h1 style={{
          fontFamily: 'var(--font-cormorant)',
          fontWeight: 700,
          fontSize: 'clamp(36px,5vw,52px)',
          color: '#FFFFFF',
          textShadow: '0 2px 12px rgba(0,0,0,0.12)',
          marginBottom: 10,
        }}>{title}</h1>
        <div style={{
          fontFamily: 'var(--font-dm-sans)',
          fontSize: 16,
          color: 'rgba(255,255,255,0.65)',
          maxWidth: 560,
          margin: '0 auto',
          lineHeight: 1.6,
        }}>{subtitle}</div>
      </div>
    </section>
  );
}
