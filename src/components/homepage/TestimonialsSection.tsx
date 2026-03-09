"use client";
import React, { useState, useEffect, useRef } from "react";

const TESTIMONIALS = [
  { name: "Rajesh Sharma", role: "Business Owner, Mumbai", rating: 5, text: "SK Financial Services transformed how I think about money. Sheetal's guidance on mutual funds and insurance has given my family true financial security. The personalised approach is unmatched.", initials: "RS", color: "#0DA574" },
  { name: "Priya Patel", role: "IT Professional, Pune", rating: 5, text: "After years of financial confusion, meeting Sheetal was a game-changer. My SIP portfolio has grown remarkably, and I finally have a solid retirement plan. Highly recommended!", initials: "PP", color: "#FFD716" },
  { name: "Anil Mehta", role: "Doctor, Ahmedabad", rating: 5, text: "The tax-saving strategies alone have saved me lakhs every year. SK Financial's expertise in ELSS and health insurance has been invaluable. Professional, trustworthy, and results-driven.", initials: "AM", color: "#00BFFF" },
  { name: "Sunita Joshi", role: "Homemaker, Delhi", rating: 5, text: "I was skeptical about investments initially, but Sheetal explained everything so clearly. My emergency fund, insurance, and SIPs are all in perfect order now. Life feels so much more secure.", initials: "SJ", color: "#FF8C00" },
  { name: "Vikram Singh", role: "NRI - USA", rating: 5, text: "Managing NRE/NRO accounts and India investments from abroad was always stressful. SK Financial handles everything seamlessly. Excellent advice, prompt service, and complete peace of mind.", initials: "VS", color: "#9B59B6" },
  { name: "Kavita Reddy", role: "Teacher, Hyderabad", rating: 5, text: "The education planning for my daughter's future and my own retirement fund—handled perfectly. Sheetal is patient, knowledgeable, and genuinely cares about each client's goals.", initials: "KR", color: "#0DA574" },
  { name: "Deepak Nair", role: "Software Engineer, Bengaluru", rating: 5, text: "As a young professional, I had no idea where to start. SK Financial's SIP recommendations and term insurance plan are perfectly aligned with my 10-year goals. Excellent mentorship!", initials: "DN", color: "#FFD716" },
  { name: "Meera Gupta", role: "Entrepreneur, Jaipur", rating: 5, text: "The real estate advisory combined with mutual funds has created a balanced portfolio I'm proud of. Sheetal's holistic approach to wealth management is truly rare in this industry.", initials: "MG", color: "#00BFFF" },
  { name: "Arjun Kumar", role: "CA, Chennai", rating: 5, text: "Even as a CA, I rely on SK Financial for wealth management. Their structured approach to portfolio rebalancing and tax optimisation is sophisticated and thorough.", initials: "AK", color: "#FF8C00" },
  { name: "Pooja Shah", role: "Fashion Designer, Surat", rating: 5, text: "My irregular income made financial planning seem impossible. SK Financial's flexible SIP strategy and health insurance coverage are perfectly suited to my lifestyle. Highly satisfied!", initials: "PS", color: "#9B59B6" },
  { name: "Suresh Pillai", role: "Retired Government Officer, Kochi", rating: 5, text: "Transition from service to retirement was made smooth by SK Financial. My pension, FDs, and senior health insurance are optimally structured. I couldn't be happier.", initials: "SP", color: "#0DA574" },
  { name: "Ananya Bose", role: "Marketing Manager, Kolkata", rating: 5, text: "SK Financial helped me build an emergency fund, start a Sukanya Samriddhi for my daughter, and grow wealth through diversified mutual funds. Complete 360° guidance in one place!", initials: "AB", color: "#FFD716" },
];

const PER_PAGE = 3;

function StarRating({ n }: { n: number }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {Array.from({ length: n }, (_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FFD716">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(TESTIMONIALS.length / PER_PAGE);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const current = TESTIMONIALS.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  const goPage = (n: number) => {
    setPage(Math.max(0, Math.min(totalPages - 1, n)));
  };

  return (
    <section
      ref={ref}
      id="testimonials"
      style={{ background: "linear-gradient(180deg,#073358,#001F3E)", padding: "100px 32px", position: "relative", overflow: "hidden" }}
    >
      <div style={{ position: "absolute", top: "20%", left: "-100px", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(255,215,22,0.05) 0%,transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 52, opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(24px)", transition: "opacity 0.6s, transform 0.6s" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 14 }}>
            <div style={{ width: 36, height: 2, background: "#FFD716" }} />
            <span style={{ color: "#FFD716", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", fontFamily: "var(--font-dm-sans), sans-serif", textTransform: "uppercase" }}>Client Stories</span>
            <div style={{ width: 36, height: 2, background: "#FFD716" }} />
          </div>
          <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 700, color: "#FFFFFF", marginBottom: 10 }}>
            Trusted by 1000+ Families
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 15, fontFamily: "var(--font-dm-sans), sans-serif" }}>
            Real stories of financial transformation from our clients across India and abroad.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginBottom: 36 }} className="sk-testimonials-grid">
          {current.map((t, i) => (
            <div
              key={`${page}-${i}`}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 18,
                padding: "28px 24px",
                position: "relative",
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : "translateY(20px)",
                transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
              }}
            >
              {/* Quote mark */}
              <div style={{ position: "absolute", top: 16, right: 20, fontFamily: "var(--font-cormorant),serif", fontSize: 72, color: "rgba(255,215,22,0.06)", lineHeight: 1 }}>&ldquo;</div>

              {/* Stars */}
              <div style={{ marginBottom: 14 }}>
                <StarRating n={t.rating} />
              </div>

              {/* Text */}
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, lineHeight: 1.75, fontFamily: "var(--font-dm-sans),sans-serif", marginBottom: 20 }}>
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 16 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: `${t.color}20`,
                  border: `1.5px solid ${t.color}40`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-dm-sans),sans-serif",
                  fontWeight: 700, fontSize: 14,
                  color: t.color, flexShrink: 0,
                }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ color: "#FFFFFF", fontWeight: 600, fontSize: 14, fontFamily: "var(--font-dm-sans),sans-serif" }}>{t.name}</div>
                  <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 12, fontFamily: "var(--font-dm-sans),sans-serif" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 10 }}>
          <button
            onClick={() => goPage(page - 1)}
            disabled={page === 0}
            style={{
              width: 38, height: 38, borderRadius: 10,
              background: page === 0 ? "rgba(255,255,255,0.05)" : "rgba(255,215,22,0.12)",
              border: `1px solid ${page === 0 ? "rgba(255,255,255,0.1)" : "rgba(255,215,22,0.3)"}`,
              color: page === 0 ? "rgba(255,255,255,0.3)" : "#FFD716",
              cursor: page === 0 ? "not-allowed" : "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.2s",
              fontSize: 16,
            }}
            onMouseEnter={e => { if (page > 0) { e.currentTarget.style.background = "rgba(255,215,22,0.2)"; } }}
            onMouseLeave={e => { if (page > 0) { e.currentTarget.style.background = "rgba(255,215,22,0.12)"; } }}
          >
            ‹
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => goPage(i)}
              style={{
                width: 38, height: 38, borderRadius: 10,
                background: i === page ? "linear-gradient(135deg,#FFD716,#E6C200)" : "rgba(255,255,255,0.05)",
                border: `1px solid ${i === page ? "transparent" : "rgba(255,255,255,0.1)"}`,
                color: i === page ? "#001F3E" : "rgba(255,255,255,0.5)",
                cursor: "pointer",
                fontWeight: i === page ? 700 : 400,
                fontSize: 14,
                transition: "all 0.2s",
                fontFamily: "var(--font-dm-sans),sans-serif",
              }}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => goPage(page + 1)}
            disabled={page === totalPages - 1}
            style={{
              width: 38, height: 38, borderRadius: 10,
              background: page === totalPages - 1 ? "rgba(255,255,255,0.05)" : "rgba(255,215,22,0.12)",
              border: `1px solid ${page === totalPages - 1 ? "rgba(255,255,255,0.1)" : "rgba(255,215,22,0.3)"}`,
              color: page === totalPages - 1 ? "rgba(255,255,255,0.3)" : "#FFD716",
              cursor: page === totalPages - 1 ? "not-allowed" : "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.2s",
              fontSize: 16,
            }}
            onMouseEnter={e => { if (page < totalPages - 1) { e.currentTarget.style.background = "rgba(255,215,22,0.2)"; } }}
            onMouseLeave={e => { if (page < totalPages - 1) { e.currentTarget.style.background = "rgba(255,215,22,0.12)"; } }}
          >
            ›
          </button>
        </div>
      </div>

      <style suppressHydrationWarning>{`
        @media (max-width: 900px) { .sk-testimonials-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 540px) { .sk-testimonials-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
