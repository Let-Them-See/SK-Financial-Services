// ...existing code...
"use client";
import React from "react";

export default function PageFooter() {
  // Placeholder for full footer implementation as per master prompt
  return (
    <footer style={{ background: '#001F3E', borderTop: '1px solid rgba(255,215,22,0.15)', color: '#FFFFFF', padding: '72px 24px 0', textAlign: 'center' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 700, fontSize: 20, color: '#FFD716', marginBottom: 12 }}>SK Financial Services</div>
        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.75, marginBottom: 16 }}>
          Your trusted partner for financial stability and growth.<br />AMFI & IRDA certified. 19+ years of excellence.
        </div>
        {/* Pills, social icons, quick links, services, contact, gold divider, bottom bar, back-to-top button to be implemented */}
        <div style={{ marginTop: 48, height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,215,22,0.35), transparent)' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px', color: 'rgba(255,255,255,0.3)', fontSize: 12 }}>
          <span>© 2026 SK Financial Services. All rights reserved.</span>
          <span>Privacy Policy | Terms & Conditions</span>
        </div>
      </div>
    </footer>
  );
}
