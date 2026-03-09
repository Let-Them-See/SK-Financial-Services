'use client'

import { useState } from 'react'
import PageNavigation from '@/components/shared/PageNavigation'
import PageFooter from '@/components/shared/PageFooter'
import PageHero from '@/components/shared/PageHero'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react'

const NAV_C = '#073358'
const GOLD = '#FFD716'
const EMERALD = '#0DA574'
const LIGHT = '#F4F7FA'
const BODY = '#4A6080'
const WHITE = '#FFFFFF'
const MIDNIGHT = '#001F3E'

const contactInfo = [
  { icon: Phone, label: 'Call Us', value: '+91 75067 15835', sub: 'Mon–Sat, 9am–7pm IST', href: 'tel:+917506715835', color: EMERALD },
  { icon: Mail, label: 'Email Us', value: 'info@skfinancials.com', sub: 'We reply within 24 hours', href: 'mailto:info@skfinancials.com', color: GOLD },
  { icon: MapPin, label: 'Visit Us', value: 'Mumbai, Maharashtra', sub: 'By appointment only', href: '#', color: '#8B5CF6' },
  { icon: Clock, label: 'Office Hours', value: 'Mon – Sat', sub: '9:00 AM – 7:00 PM IST', href: '#', color: '#F59E0B' },
]

const subjects = ['Mutual Funds', 'Life Insurance', 'Health Insurance', 'Fixed Deposits & Bonds', 'NRI Services', 'Portfolio Review', 'Tax Planning', 'Other']

export default function ContactUsPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: subjects[0], message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [hovCard, setHovCard] = useState<number | null>(null)
  const [focusField, setFocusField] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setFormData({ name: '', email: '', phone: '', subject: subjects[0], message: '' })
  }

  const inputStyle = (field: string) => ({
    width: '100%', padding: '14px 16px', borderRadius: 12,
    border: `2px solid ${focusField === field ? GOLD : 'rgba(7,51,88,0.15)'}`,
    background: focusField === field ? 'rgba(255,215,22,0.03)' : WHITE,
    fontSize: 15, color: NAV_C, outline: 'none',
    transition: 'all 0.2s', fontFamily: 'var(--font-dm-sans)',
    boxSizing: 'border-box' as const
  })

  return (
    <div style={{ background: WHITE, minHeight: '100vh' }}>
      <PageNavigation />
      <PageHero
        title="Get in Touch"
        subtitle="Book a free consultation or send us your questions — we respond within 24 hours."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Contact Us', href: '/contact-us' }]}
      />

      {/* CONTACT CARDS */}
      <section style={{ background: LIGHT, padding: '80px 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }} className="sk-contact-cards">
            {contactInfo.map((c, i) => {
              const isHov = hovCard === i
              return (
                <a
                  key={i}
                  href={c.href}
                  onMouseEnter={() => setHovCard(i)}
                  onMouseLeave={() => setHovCard(null)}
                  style={{
                    display: 'block', background: isHov ? NAV_C : WHITE,
                    border: `1px solid ${isHov ? NAV_C : 'rgba(7,51,88,0.1)'}`,
                    borderRadius: 20, padding: '32px 24px',
                    textDecoration: 'none', textAlign: 'center',
                    transition: 'all 0.3s',
                    transform: isHov ? 'translateY(-4px)' : 'translateY(0)',
                    boxShadow: isHov ? '0 20px 50px rgba(7,51,88,0.15)' : '0 2px 8px rgba(0,0,0,0.04)'
                  }}
                >
                  <div style={{ width: 56, height: 56, borderRadius: '50%', background: isHov ? 'rgba(255,255,255,0.1)' : `${c.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    <c.icon style={{ width: 24, height: 24, color: c.color }} />
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: isHov ? 'rgba(255,255,255,0.5)' : BODY, marginBottom: 8 }}>{c.label}</div>
                  <div style={{ fontWeight: 700, fontSize: 16, color: isHov ? WHITE : NAV_C, marginBottom: 4 }}>{c.value}</div>
                  <div style={{ fontSize: 13, color: isHov ? 'rgba(255,255,255,0.6)' : BODY }}>{c.sub}</div>
                </a>
              )
            })}
          </div>
        </div>
        <style suppressHydrationWarning>{`
          @media (max-width: 1024px) { .sk-contact-cards { grid-template-columns: repeat(2,1fr) !important; } }
          @media (max-width: 640px) { .sk-contact-cards { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* FORM + INFO */}
      <section style={{ background: WHITE, padding: '96px 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64, alignItems: 'start' }} className="sk-contact-grid">

            {/* FORM */}
            <div style={{ background: WHITE, borderRadius: 28, padding: 48, boxShadow: '0 8px 48px rgba(7,51,88,0.08)', border: '1px solid rgba(7,51,88,0.08)' }}>
              <div style={{ marginBottom: 36 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: `${GOLD}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MessageSquare style={{ width: 20, height: 20, color: GOLD }} />
                  </div>
                  <p style={{ color: GOLD, fontWeight: 700, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Send a Message</p>
                </div>
                <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 40, fontWeight: 700, color: NAV_C, lineHeight: 1.2 }}>Book Your Free Consultation</h2>
              </div>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '48px 24px' }}>
                  <CheckCircle2 style={{ width: 56, height: 56, color: EMERALD, margin: '0 auto 16px' }} />
                  <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 28, fontWeight: 700, color: NAV_C, marginBottom: 12 }}>Message Sent!</h3>
                  <p style={{ color: BODY, fontSize: 16 }}>Thank you for reaching out. Our team will contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="sk-form-half">
                    <div>
                      <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: NAV_C, marginBottom: 8 }}>Full Name *</label>
                      <input required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} onFocus={() => setFocusField('name')} onBlur={() => setFocusField(null)} placeholder="Sheetal Khanna" style={inputStyle('name')} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: NAV_C, marginBottom: 8 }}>Email Address *</label>
                      <input required type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} onFocus={() => setFocusField('email')} onBlur={() => setFocusField(null)} placeholder="you@example.com" style={inputStyle('email')} />
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="sk-form-half">
                    <div>
                      <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: NAV_C, marginBottom: 8 }}>Phone Number</label>
                      <input type="tel" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} onFocus={() => setFocusField('phone')} onBlur={() => setFocusField(null)} placeholder="+91 98765 43210" style={inputStyle('phone')} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: NAV_C, marginBottom: 8 }}>Subject</label>
                      <select value={formData.subject} onChange={e => setFormData({ ...formData, subject: e.target.value })} onFocus={() => setFocusField('subject')} onBlur={() => setFocusField(null)} style={{ ...inputStyle('subject'), cursor: 'pointer' }}>
                        {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: NAV_C, marginBottom: 8 }}>Your Message *</label>
                    <textarea required rows={5} value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} onFocus={() => setFocusField('message')} onBlur={() => setFocusField(null)} placeholder="Tell us about your financial goals or any questions you have..." style={{ ...inputStyle('message'), resize: 'vertical', lineHeight: 1.6 }} />
                  </div>
                  <button
                    type="submit"
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, background: NAV_C, color: WHITE, border: 'none', borderRadius: 14, padding: '16px 32px', fontSize: 15, fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s', fontFamily: 'var(--font-dm-sans)', letterSpacing: '0.02em' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = GOLD; (e.currentTarget as HTMLButtonElement).style.color = NAV_C }}
                    onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = NAV_C; (e.currentTarget as HTMLButtonElement).style.color = WHITE }}
                  >
                    <Send style={{ width: 18, height: 18 }} />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* INFO PANEL */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              <div style={{ background: MIDNIGHT, borderRadius: 24, padding: '36px 32px', color: WHITE }}>
                <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 28, fontWeight: 700, color: WHITE, marginBottom: 8 }}>Why Choose SK Financials?</h3>
                <div style={{ width: 40, height: 3, background: GOLD, borderRadius: 2, marginBottom: 24 }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {[
                    '19+ years of experience in Indian financial markets',
                    'AMFI & IRDAI certified financial advisors',
                    'Personalised wealth strategies for each client',
                    'Dedicated NRI portfolio management desk',
                    'Transparent fee structure — zero hidden charges',
                    'Regular portfolio reviews and performance reports',
                  ].map((pt, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                      <div style={{ width: 20, height: 20, borderRadius: '50%', background: GOLD, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                        <span style={{ fontSize: 10, color: MIDNIGHT, fontWeight: 900 }}>✓</span>
                      </div>
                      <span style={{ fontSize: 15, color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ background: `${GOLD}15`, border: `1px solid ${GOLD}40`, borderRadius: 20, padding: '28px 28px', textAlign: 'center' }}>
                <p style={{ color: GOLD, fontWeight: 700, fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 8 }}>Quick Connect</p>
                <p style={{ color: NAV_C, fontWeight: 700, fontSize: 24, fontFamily: 'var(--font-cormorant)', marginBottom: 4 }}>+91 75067 15835</p>
                <p style={{ color: BODY, fontSize: 14, marginBottom: 20 }}>Available Mon–Sat, 9am to 7pm IST</p>
                <a
                  href="tel:+917506715835"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: NAV_C, color: WHITE, borderRadius: 12, padding: '12px 24px', textDecoration: 'none', fontWeight: 700, fontSize: 14, transition: 'all 0.2s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = GOLD}
                  onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = NAV_C}
                >
                  <Phone style={{ width: 16, height: 16 }} />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <style suppressHydrationWarning>{`
          @media (max-width: 1024px) { .sk-contact-grid { grid-template-columns: 1fr !important; } }
          @media (max-width: 640px) { .sk-form-half { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      <PageFooter />
    </div>
  )
}
