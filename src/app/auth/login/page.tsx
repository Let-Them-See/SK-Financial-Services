'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Eye, EyeOff, Mail, Lock, ChevronRight, ShieldCheck, TrendingUp, Users } from 'lucide-react'

const NAV_C = '#073358'
const GOLD = '#FFD716'
const EMERALD = '#0DA574'
const LIGHT = '#F4F7FA'
const BODY = '#4A6080'
const WHITE = '#FFFFFF'
const MIDNIGHT = '#001F3E'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)
  const [focusField, setFocusField] = useState<string | null>(null)
  const [hoverBtn, setHoverBtn] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', fontFamily: 'var(--font-dm-sans)' }}>
      {/* LEFT PANEL */}
      <div style={{ flex: 1, background: MIDNIGHT, position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '48px 56px' }} className="sk-login-left">
        {/* Background Decoration */}
        <div style={{ position: 'absolute', top: -100, right: -100, width: 500, height: 500, borderRadius: '50%', background: 'rgba(255,215,22,0.04)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -80, left: -80, width: 400, height: 400, borderRadius: '50%', background: 'rgba(13,165,116,0.06)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />

        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 12, position: 'relative', zIndex: 2 }}>
          <div style={{ width: 48, height: 48, borderRadius: 14, background: `linear-gradient(135deg, ${GOLD}, #FFA500)`, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 8px 24px ${GOLD}40` }}>
            <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: 22, fontWeight: 800, color: MIDNIGHT }}>SK</span>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: 20, fontWeight: 700, color: WHITE, lineHeight: 1 }}>SK Financial</div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', marginTop: 2 }}>SERVICES</div>
          </div>
        </Link>

        {/* Headline */}
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 420 }}>
          <div style={{ display: 'inline-block', background: `${GOLD}20`, borderRadius: 999, padding: '6px 16px', marginBottom: 24 }}>
            <span style={{ color: GOLD, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em' }}>TRUSTED WEALTH MANAGEMENT</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 52, fontWeight: 800, color: WHITE, lineHeight: 1.1, marginBottom: 20 }}>
            Your Financial <span style={{ color: GOLD }}>Future</span> Starts Here
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 16, lineHeight: 1.75, marginBottom: 40 }}>
            Access your personalised wealth dashboard, track portfolio performance, and connect with your dedicated advisor — all in one secure portal.
          </p>

          {/* Features */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { icon: ShieldCheck, text: 'SEBI-registered & fully compliant' },
              { icon: TrendingUp, text: 'Real-time portfolio analytics' },
              { icon: Users, text: 'Dedicated relationship manager' },
            ].map((f, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(255,215,22,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <f.icon style={{ width: 16, height: 16, color: GOLD }} />
                </div>
                <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, fontWeight: 500 }}>{f.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Quote */}
        <div style={{ position: 'relative', zIndex: 2, borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 28 }}>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, fontStyle: 'italic' }}>
            "The stock market is a device for transferring money from the impatient to the patient."
          </p>
          <p style={{ color: GOLD, fontSize: 12, fontWeight: 600, marginTop: 8 }}>— Warren Buffett</p>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div style={{ width: 520, background: WHITE, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px 56px' }} className="sk-login-right">
        {/* Mobile Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'none', alignItems: 'center', gap: 10, marginBottom: 40 }} className="sk-mobile-logo">
          <div style={{ width: 40, height: 40, borderRadius: 12, background: `linear-gradient(135deg, ${GOLD}, #FFA500)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: 18, fontWeight: 800, color: MIDNIGHT }}>SK</span>
          </div>
          <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: 20, fontWeight: 700, color: NAV_C }}>SK Financial Services</span>
        </Link>

        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 40, fontWeight: 700, color: NAV_C, marginBottom: 8 }}>Welcome Back</h2>
          <p style={{ color: BODY, fontSize: 15 }}>Sign in to your account to continue managing your wealth.</p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {/* Email */}
          <div>
            <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: NAV_C, marginBottom: 8 }}>Email Address</label>
            <div style={{ position: 'relative' }}>
              <Mail style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', width: 18, height: 18, color: focusField === 'email' ? GOLD : BODY, transition: 'color 0.2s' }} />
              <input
                type="email" required value={email} onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com"
                onFocus={() => setFocusField('email')} onBlur={() => setFocusField(null)}
                style={{ width: '100%', padding: '14px 16px 14px 48px', border: `1.5px solid ${focusField === 'email' ? GOLD : 'rgba(7,51,88,0.15)'}`, borderRadius: 12, fontSize: 15, color: NAV_C, background: focusField === 'email' ? `${GOLD}08` : WHITE, outline: 'none', transition: 'all 0.2s', boxSizing: 'border-box', fontFamily: 'var(--font-dm-sans)' }}
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <label style={{ fontSize: 13, fontWeight: 700, color: NAV_C }}>Password</label>
              <Link href="/auth/forgot-password" style={{ fontSize: 13, color: EMERALD, textDecoration: 'none', fontWeight: 600 }}>Forgot password?</Link>
            </div>
            <div style={{ position: 'relative' }}>
              <Lock style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', width: 18, height: 18, color: focusField === 'password' ? GOLD : BODY, transition: 'color 0.2s' }} />
              <input
                type={showPass ? 'text' : 'password'} required value={password} onChange={e => setPassword(e.target.value)}
                placeholder="Enter your password"
                onFocus={() => setFocusField('password')} onBlur={() => setFocusField(null)}
                style={{ width: '100%', padding: '14px 48px 14px 48px', border: `1.5px solid ${focusField === 'password' ? GOLD : 'rgba(7,51,88,0.15)'}`, borderRadius: 12, fontSize: 15, color: NAV_C, background: focusField === 'password' ? `${GOLD}08` : WHITE, outline: 'none', transition: 'all 0.2s', boxSizing: 'border-box', fontFamily: 'var(--font-dm-sans)' }}
              />
              <button type="button" onClick={() => setShowPass(!showPass)} style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: BODY, display: 'flex', alignItems: 'center' }}>
                {showPass ? <EyeOff style={{ width: 18, height: 18 }} /> : <Eye style={{ width: 18, height: 18 }} />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit" disabled={loading}
            onMouseEnter={() => setHoverBtn(true)} onMouseLeave={() => setHoverBtn(false)}
            style={{ marginTop: 8, padding: '16px', borderRadius: 14, border: 'none', background: hoverBtn && !loading ? NAV_C : MIDNIGHT, color: WHITE, fontSize: 16, fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer', transition: 'all 0.25s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, fontFamily: 'var(--font-dm-sans)', boxShadow: !loading ? '0 8px 24px rgba(0,31,62,0.25)' : 'none', opacity: loading ? 0.8 : 1 }}
          >
            {loading ? (
              <>
                <div style={{ width: 18, height: 18, borderRadius: '50%', border: `2px solid rgba(255,255,255,0.3)`, borderTopColor: WHITE, animation: 'spin 0.8s linear infinite' }} />
                Signing In...
              </>
            ) : (
              <>Sign In <ChevronRight style={{ width: 20, height: 20 }} /></>
            )}
          </button>
        </form>

        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, margin: '28px 0' }}>
          <div style={{ flex: 1, height: 1, background: 'rgba(7,51,88,0.1)' }} />
          <span style={{ fontSize: 13, color: BODY }}>New to SK Financial?</span>
          <div style={{ flex: 1, height: 1, background: 'rgba(7,51,88,0.1)' }} />
        </div>

        <Link
          href="/auth/register"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '14px', borderRadius: 14, border: `2px solid rgba(7,51,88,0.15)`, color: NAV_C, fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: 'all 0.2s', fontFamily: 'var(--font-dm-sans)' }}
          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = GOLD; (e.currentTarget as HTMLAnchorElement).style.background = `${GOLD}08` }}
          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(7,51,88,0.15)'; (e.currentTarget as HTMLAnchorElement).style.background = 'transparent' }}
        >
          Create a Free Account <ChevronRight style={{ width: 18, height: 18 }} />
        </Link>

        <p style={{ textAlign: 'center', color: BODY, fontSize: 12, marginTop: 32, lineHeight: 1.6 }}>
          By signing in, you agree to our <Link href="/privacy" style={{ color: EMERALD }}>Privacy Policy</Link> and <Link href="/terms" style={{ color: EMERALD }}>Terms of Service</Link>. Your data is protected with 256-bit encryption.
        </p>
      </div>

      <style suppressHydrationWarning>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 900px) {
          .sk-login-left { display: none !important; }
          .sk-login-right { width: 100% !important; padding: 40px 24px !important; }
          .sk-mobile-logo { display: flex !important; }
        }
      `}</style>
    </div>
  )
}
