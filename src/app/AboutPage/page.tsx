'use client'

import { useState } from 'react'
import PageNavigation from '@/components/shared/PageNavigation'
import PageFooter from '@/components/shared/PageFooter'
import PageHero from '@/components/shared/PageHero'
import CTABanner from '@/components/homepage/CTABanner'
import { Award, ShieldCheck, CheckCircle2, TrendingUp, Target, Heart, Globe, BookOpen } from 'lucide-react'

const NAV_C = '#073358'
const GOLD = '#FFD716'
const LIGHT = '#F4F7FA'
const BODY = '#4A6080'
const WHITE = '#FFFFFF'
const MIDNIGHT = '#001F3E'

const timeline = [
  { year: '2005', title: 'Foundation', desc: 'SK Financial Services was established with a vision to provide trustworthy, client-first financial guidance to every Indian household.', icon: '🌱' },
  { year: '2010', title: 'AMFI Certification', desc: 'Achieved AMFI Registered Mutual Fund Distributor (AMFD) status, opening doors to a wider range of equity and debt investment options.', icon: '📜' },
  { year: '2015', title: 'IRDA Licensed', desc: 'Expanded into comprehensive insurance advisory with a full IRDA license, becoming a one-stop financial solutions firm.', icon: '🛡️' },
  { year: '2018', title: 'NRI Specialization', desc: 'Launched dedicated NRI portfolio management services, helping overseas Indians optimise India-linked investments with ease.', icon: '✈️' },
  { year: '2020', title: '₹100 Cr+ AUM', desc: 'Crossed a landmark milestone in assets under management, reflecting deep client trust built over 15 years.', icon: '🏆' },
  { year: '2024', title: '₹200 Cr+ & 1000+ Clients', desc: 'Now serving over 1,000 satisfied clients globally with ₹200Cr+ in advisory assets across all major product categories.', icon: '🚀' },
]

const values = [
  { icon: ShieldCheck, title: 'Client-First Ethics', desc: "We never recommend a product unless it genuinely fits the client's financial life goals and risk appetite.", color: '#0DA574' },
  { icon: TrendingUp, title: 'Long-Term Vision', desc: "Wealth is built over decades. We plan for your retirement, children's education, and legacy — not just this quarter.", color: GOLD },
  { icon: Target, title: 'Personalised Precision', desc: 'Each portfolio is unique — crafted after understanding your income, goals, taxes, and risk profile in detail.', color: '#8B5CF6' },
  { icon: Globe, title: 'Global Accessibility', desc: 'NRI or domestic — we operate digitally and are accessible across time zones for reviews, reports, and rebalancing.', color: '#F59E0B' },
  { icon: BookOpen, title: 'Financial Education', desc: 'We believe an informed client is an empowered client. Our blogs, calculators, and consultations prioritise knowledge.', color: '#EC4899' },
  { icon: Heart, title: 'Relationship Over Revenue', desc: '19+ year average client relationship. Our business grows because our clients grow first — that is our mantra.', color: '#0DA574' },
]

const certifications = [
  { logo: 'AMFI', name: 'AMFI Registered', sub: 'Mutual Fund Distributor', color: '#1E40AF' },
  { logo: 'IRDAI', name: 'IRDAI Licensed', sub: 'Insurance Advisory', color: '#064E3B' },
  { logo: 'SEBI', name: 'SEBI Compliant', sub: 'Investment Consultant', color: '#7C3AED' },
  { logo: 'BSE', name: 'BSE Registered', sub: 'Capital Markets Access', color: '#B45309' },
]

export default function AboutPage() {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null)
  const [hoveredCert, setHoveredCert] = useState<number | null>(null)

  return (
    <div style={{ background: WHITE, minHeight: '100vh' }}>
      <PageNavigation />
      <PageHero
        title="About SK Financial Services"
        subtitle="19+ years of building lasting wealth for 1,000+ families across India and the world."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'About Us', href: '/AboutPage' }]}
      />

      {/* FOUNDER SECTION */}
      <section style={{ background: LIGHT, padding: '96px 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                background: WHITE, borderRadius: 32, padding: '48px 40px',
                boxShadow: '0 20px 60px rgba(7,51,88,0.1)', border: '1px solid rgba(7,51,88,0.08)',
                display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 56, alignItems: 'center',
                maxWidth: 960, width: '100%'
              }}
              className="sk-founder-grid"
            >
              <div style={{ position: 'relative' }}>
                <div style={{
                  aspectRatio: '4/5', background: `linear-gradient(135deg, ${NAV_C} 0%, #0a4a7a 100%)`,
                  borderRadius: 24, display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center', overflow: 'hidden', position: 'relative'
                }}>
                  <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 30% 70%, rgba(255,215,22,0.15) 0%, transparent 60%)' }} />
                  <span style={{ fontSize: 80, fontWeight: 700, color: GOLD, fontFamily: 'var(--font-cormorant)', position: 'relative', zIndex: 1, opacity: 0.9, lineHeight: 1 }}>SK</span>
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, marginTop: 12, position: 'relative', zIndex: 1 }}>Sheetal Khanna</span>
                </div>
                <div style={{
                  position: 'absolute', bottom: -20, right: -20, width: 72, height: 72,
                  background: GOLD, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 8px 24px rgba(255,215,22,0.4)', border: `4px solid ${WHITE}`
                }}>
                  <Award style={{ width: 32, height: 32, color: NAV_C }} />
                </div>
              </div>

              <div>
                <p style={{ color: GOLD, fontWeight: 700, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8 }}>Founder & Chief Advisor</p>
                <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 40, fontWeight: 700, color: NAV_C, marginBottom: 20, lineHeight: 1.1 }}>Sheetal Khanna</h2>
                <div style={{ width: 48, height: 3, background: GOLD, borderRadius: 2, marginBottom: 24 }} />
                <p style={{ color: BODY, lineHeight: 1.8, fontSize: 16, marginBottom: 16 }}>
                  With over 19 years of dedicated experience in the financial services sector, Sheetal Khanna has built a reputation for providing honest, personalised, and deeply effective financial strategies.
                </p>
                <p style={{ color: BODY, lineHeight: 1.8, fontSize: 16, marginBottom: 28 }}>
                  Her expertise spans mutual funds, equities, insurance, bonds, and NRI portfolio management — guiding over 1,000 clients across the globe to achieve their financial goals.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginBottom: 28 }}>
                  {['Risk Management', 'Strategic Allocation', 'Unbiased Advisory', 'NRI Expertise'].map((s) => (
                    <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <CheckCircle2 style={{ width: 16, height: 16, color: GOLD, flexShrink: 0 }} />
                      <span style={{ color: NAV_C, fontWeight: 600, fontSize: 14 }}>{s}</span>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: 24, paddingTop: 28, borderTop: '1px solid rgba(7,51,88,0.08)', flexWrap: 'wrap' }}>
                  {[{ n: '19+', l: 'Years Experience' }, { n: '1000+', l: 'Happy Clients' }, { n: '₹200Cr+', l: 'Assets Advised' }, { n: '98%', l: 'Retention Rate' }].map((s) => (
                    <div key={s.n}>
                      <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: 28, fontWeight: 700, color: NAV_C, lineHeight: 1 }}>{s.n}</div>
                      <div style={{ fontSize: 12, color: BODY, marginTop: 4 }}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <style suppressHydrationWarning>{`
          @media (max-width: 768px) { .sk-founder-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* TIMELINE */}
      <section style={{ background: MIDNIGHT, padding: '96px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 800, height: 800, background: 'radial-gradient(circle, rgba(255,215,22,0.04) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: 72 }}>
            <p style={{ color: GOLD, fontWeight: 700, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 12 }}>Our Story</p>
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 52, fontWeight: 700, color: WHITE, marginBottom: 16 }}>A Journey of Trust</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 520, margin: '0 auto', fontSize: 17, lineHeight: 1.7 }}>Two decades of growth, built one client relationship at a time.</p>
          </div>
          <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative' }}>
            <div style={{ position: 'absolute', left: 28, top: 0, bottom: 0, width: 2, background: 'rgba(255,215,22,0.15)', borderRadius: 2 }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              {timeline.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 32, alignItems: 'flex-start', paddingLeft: 60, position: 'relative' }}>
                  <div style={{ position: 'absolute', left: 20, top: 8, width: 18, height: 18, background: GOLD, borderRadius: '50%', border: `3px solid ${MIDNIGHT}`, boxShadow: '0 0 12px rgba(255,215,22,0.5)', zIndex: 2 }} />
                  <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: '24px 28px', flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8, flexWrap: 'wrap' }}>
                      <span style={{ fontSize: 22 }}>{item.icon}</span>
                      <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: 24, fontWeight: 700, color: GOLD }}>{item.year}</span>
                      <span style={{ fontSize: 17, fontWeight: 700, color: WHITE }}>— {item.title}</span>
                    </div>
                    <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, fontSize: 15 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ background: WHITE, padding: '96px 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <p style={{ color: GOLD, fontWeight: 700, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 12 }}>What We Stand For</p>
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 52, fontWeight: 700, color: NAV_C, marginBottom: 16 }}>Our Core Values</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="sk-values-grid">
            {values.map((v, i) => {
              const active = hoveredValue === i
              return (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredValue(i)}
                  onMouseLeave={() => setHoveredValue(null)}
                  style={{
                    background: active ? NAV_C : WHITE,
                    border: `1px solid ${active ? NAV_C : 'rgba(7,51,88,0.1)'}`,
                    borderRadius: 20, padding: '32px 28px',
                    transition: 'all 0.3s ease',
                    boxShadow: active ? '0 20px 50px rgba(7,51,88,0.2)' : '0 2px 8px rgba(0,0,0,0.04)',
                    transform: active ? 'translateY(-4px)' : 'translateY(0)', cursor: 'default'
                  }}
                >
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: active ? 'rgba(255,255,255,0.08)' : `${v.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                    <v.icon style={{ width: 26, height: 26, color: v.color }} />
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: 18, color: active ? WHITE : NAV_C, marginBottom: 10 }}>{v.title}</h3>
                  <p style={{ color: active ? 'rgba(255,255,255,0.7)' : BODY, fontSize: 15, lineHeight: 1.7 }}>{v.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
        <style suppressHydrationWarning>{`
          @media (max-width: 1024px) { .sk-values-grid { grid-template-columns: repeat(2,1fr) !important; } }
          @media (max-width: 640px) { .sk-values-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* CERTIFICATIONS */}
      <section style={{ background: LIGHT, padding: '80px 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p style={{ color: GOLD, fontWeight: 700, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 12 }}>Regulated & Recognised</p>
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 44, fontWeight: 700, color: NAV_C }}>Our Certifications</h2>
          </div>
          <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
            {certifications.map((c, i) => {
              const isHov = hoveredCert === i
              return (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredCert(i)}
                  onMouseLeave={() => setHoveredCert(null)}
                  style={{
                    background: isHov ? NAV_C : WHITE,
                    border: `2px solid ${isHov ? GOLD : 'rgba(7,51,88,0.1)'}`,
                    borderRadius: 20, padding: '36px 48px', textAlign: 'center',
                    transition: 'all 0.3s', cursor: 'default', minWidth: 200,
                    transform: isHov ? 'translateY(-6px)' : 'translateY(0)',
                    boxShadow: isHov ? '0 20px 50px rgba(7,51,88,0.15)' : '0 2px 8px rgba(0,0,0,0.04)'
                  }}
                >
                  <div style={{ fontSize: 32, fontWeight: 900, letterSpacing: '0.05em', color: isHov ? GOLD : c.color, fontFamily: 'var(--font-cormorant)', marginBottom: 8 }}>{c.logo}</div>
                  <div style={{ fontWeight: 700, fontSize: 16, color: isHov ? WHITE : NAV_C, marginBottom: 4 }}>{c.name}</div>
                  <div style={{ fontSize: 12, color: isHov ? 'rgba(255,255,255,0.6)' : BODY }}>{c.sub}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <CTABanner />
      <PageFooter />
    </div>
  )
}
