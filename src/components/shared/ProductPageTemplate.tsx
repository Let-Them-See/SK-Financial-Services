'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight, Check } from 'lucide-react'
import { useState } from 'react'

const NAV_C = '#073358'
const GOLD = '#FFD716'
const EMERALD = '#0DA574'
const LIGHT = '#F4F7FA'
const BODY = '#4A6080'
const WHITE = '#FFFFFF'
const MIDNIGHT = '#001F3E'

export interface ProductData {
    title: string
    tagline: string
    whatIsIt: string[]
    highlights: { title: string; desc: string; icon: any }[]
    benefits: { title: string; desc: string; icon: any }[]
    whoShouldInvest: string[]
    riskLevel: number
    returnPotential: number
}

function CTAButton({ href, children, variant = 'gold' }: { href: string; children: React.ReactNode; variant?: 'gold' | 'outline' }) {
    const [hov, setHov] = useState(false)
    const base: React.CSSProperties = { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '14px 40px', borderRadius: 999, fontSize: 16, fontWeight: 700, cursor: 'pointer', transition: 'all 0.25s', textDecoration: 'none', border: '2px solid transparent', fontFamily: 'var(--font-dm-sans)' }
    const gold: React.CSSProperties = { background: hov ? '#e6c200' : GOLD, color: MIDNIGHT, boxShadow: hov ? '0 8px 32px rgba(255,215,22,0.4)' : '0 4px 16px rgba(255,215,22,0.25)', transform: hov ? 'translateY(-1px)' : 'none' }
    const outline: React.CSSProperties = { background: hov ? GOLD : 'transparent', color: hov ? MIDNIGHT : GOLD, borderColor: GOLD }
    return (
        <Link href={href} style={{ ...base, ...(variant === 'gold' ? gold : outline) }} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
            {children}
        </Link>
    )
}

function HighlightCard({ highlight }: { highlight: { title: string; desc: string; icon: any } }) {
    const [hov, setHov] = useState(false)
    return (
        <div
            onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
            style={{ background: WHITE, border: `1px solid ${hov ? `${GOLD}60` : 'rgba(7,51,88,0.1)'}`, borderRadius: 20, padding: '28px 24px', height: '100%', transition: 'all 0.25s', boxShadow: hov ? '0 8px 32px rgba(7,51,88,0.1)' : '0 2px 8px rgba(7,51,88,0.04)' }}
        >
            {highlight.icon && (
                <div style={{ width: 48, height: 48, borderRadius: 12, background: `${NAV_C}08`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                    <highlight.icon style={{ width: 24, height: 24, color: NAV_C }} />
                </div>
            )}
            <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 20, fontWeight: 700, color: NAV_C, marginBottom: 10 }}>{highlight.title}</h3>
            <p style={{ color: BODY, fontSize: 15, lineHeight: 1.7 }}>{highlight.desc}</p>
        </div>
    )
}

export default function ProductPageTemplate({ data }: { data: ProductData }) {
    return (
        <div style={{ background: WHITE, minHeight: '100vh' }}>
            {/* 1. HERO BANNER */}
            <section style={{ background: MIDNIGHT, paddingTop: 140, paddingBottom: 96, position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 800, height: 800, borderRadius: '50%', background: `${GOLD}08`, pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />
                <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 2, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 24 }}>
                        <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}
                            onMouseEnter={e => (e.currentTarget.style.color = GOLD)} onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}>Home</Link>
                        <ChevronRight style={{ width: 12, height: 12, color: GOLD }} />
                        <span style={{ color: GOLD }}>Products</span>
                        <ChevronRight style={{ width: 12, height: 12, color: GOLD }} />
                        <span style={{ color: WHITE }}>{data.title}</span>
                    </motion.div>

                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(40px, 7vw, 76px)', fontWeight: 800, color: WHITE, lineHeight: 1.1, marginBottom: 24, maxWidth: 900 }}>
                        {data.title}
                    </motion.h1>

                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                        style={{ color: 'rgba(255,255,255,0.75)', fontSize: 20, maxWidth: 640, lineHeight: 1.7, marginBottom: 44 }}>
                        {data.tagline}
                    </motion.p>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                        <CTAButton href="/contact-us">Start Investing Today</CTAButton>
                    </motion.div>
                </div>
            </section>

            {/* 2. WHAT IS IT */}
            <section style={{ background: WHITE, padding: '96px 0' }}>
                <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="sk-ppt-2col">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                            style={{ background: LIGHT, borderRadius: 24, border: '1px solid rgba(7,51,88,0.08)', aspectRatio: '16/9', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 40, position: 'relative', overflow: 'hidden' }}>
                            <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${NAV_C}08, transparent)` }} />
                            <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                                <div style={{ width: 96, height: 96, background: WHITE, borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', boxShadow: '0 4px 20px rgba(7,51,88,0.1)', border: '1px solid rgba(7,51,88,0.08)' }}>
                                    <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: 40, fontWeight: 800, color: NAV_C }}>{data.title.charAt(0)}</span>
                                </div>
                                <span style={{ fontWeight: 700, fontSize: 13, color: BODY, textTransform: 'uppercase', letterSpacing: '0.2em' }}>{data.title}</span>
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <p style={{ color: GOLD, fontWeight: 700, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 12 }}>Overview</p>
                            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 40, fontWeight: 700, color: NAV_C, marginBottom: 28 }}>What are {data.title}?</h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                                {data.whatIsIt.map((paragraph, idx) => (
                                    <p key={idx} style={{ color: BODY, fontSize: 16, lineHeight: 1.8 }}>{paragraph}</p>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. METRICS BAR */}
            <section style={{ background: LIGHT, padding: '56px 0', borderTop: '1px solid rgba(7,51,88,0.08)', borderBottom: '1px solid rgba(7,51,88,0.08)' }}>
                <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }} className="sk-ppt-metrics">
                        {[
                            { label: 'Category', content: <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: 20, fontWeight: 700, color: NAV_C }}>{data.title}</span> },
                            { label: 'Risk Level', content: (
                                <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
                                    {[1,2,3,4,5].map(s => <div key={s} style={{ width: 14, height: 14, borderRadius: '50%', background: s <= data.riskLevel ? '#dc2626' : 'rgba(220,38,38,0.15)' }} />)}
                                </div>
                            )},
                            { label: 'Return Potential', content: (
                                <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
                                    {[1,2,3,4,5].map(s => <div key={s} style={{ width: 14, height: 14, borderRadius: '50%', background: s <= data.returnPotential ? EMERALD : `${EMERALD}25` }} />)}
                                </div>
                            )},
                            { label: 'Free Consultation', content: <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: 20, fontWeight: 700, color: GOLD }}>Available</span> },
                        ].map((m, i) => (
                            <div key={i} style={{ textAlign: 'center', padding: '0 24px', borderRight: i < 3 ? '1px solid rgba(7,51,88,0.1)' : 'none' }}>
                                <span style={{ display: 'block', fontSize: 11, fontWeight: 700, color: BODY, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 12 }}>{m.label}</span>
                                {m.content}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. HIGHLIGHTS GRID */}
            <section style={{ background: WHITE, padding: '96px 0' }}>
                <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
                    <div style={{ textAlign: 'center', marginBottom: 60 }}>
                        <p style={{ color: GOLD, fontWeight: 700, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 12 }}>Important Details</p>
                        <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 44, fontWeight: 700, color: NAV_C }}>Key Highlights</h2>
                    </div>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ staggerChildren: 0.1 }}
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="sk-ppt-highlights">
                        {data.highlights.map((highlight, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }}>
                                <HighlightCard highlight={highlight} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 5. BENEFITS & WHO SHOULD INVEST */}
            <section style={{ background: MIDNIGHT, padding: '96px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }} className="sk-ppt-2col">
                        {/* Benefits */}
                        <div>
                            <p style={{ color: GOLD, fontWeight: 700, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 12 }}>The Advantage</p>
                            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 40, fontWeight: 700, color: WHITE, marginBottom: 40 }}>Benefits of {data.title}</h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                                {data.benefits.map((benefit, idx) => (
                                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                                        {benefit.icon && (
                                            <div style={{ width: 44, height: 44, borderRadius: '50%', background: `${GOLD}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                                                <benefit.icon style={{ width: 20, height: 20, color: GOLD }} />
                                            </div>
                                        )}
                                        <div>
                                            <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 20, fontWeight: 700, color: WHITE, marginBottom: 6 }}>{benefit.title}</h3>
                                            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 14, lineHeight: 1.75 }}>{benefit.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Who should invest */}
                        <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 28, padding: 44, border: '1px solid rgba(255,255,255,0.08)', alignSelf: 'flex-start' }}>
                            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 30, fontWeight: 700, color: WHITE, marginBottom: 28, paddingBottom: 20, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>Who Should Invest?</h2>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: 16, listStyle: 'none', padding: 0, margin: 0 }}>
                                {data.whoShouldInvest.map((point, idx) => (
                                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                                        <Check style={{ width: 18, height: 18, color: EMERALD, flexShrink: 0, marginTop: 2 }} />
                                        <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: 15, lineHeight: 1.7 }}>{point}</span>
                                    </li>
                                ))}
                            </ul>
                            <div style={{ marginTop: 36, paddingTop: 28, borderTop: '1px solid rgba(255,255,255,0.08)', textAlign: 'center' }}>
                                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, fontWeight: 600, marginBottom: 16 }}>Does this sound like you?</p>
                                <CTAButton href="/contact-us" variant="outline">Speak to an Advisor</CTAButton>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style suppressHydrationWarning>{`
                @media (max-width: 900px) {
                    .sk-ppt-2col { grid-template-columns: 1fr !important; gap: 40px !important; }
                    .sk-ppt-highlights { grid-template-columns: 1fr 1fr !important; }
                    .sk-ppt-metrics { grid-template-columns: 1fr 1fr !important; gap: 24px !important; }
                }
                @media (max-width: 600px) {
                    .sk-ppt-highlights { grid-template-columns: 1fr !important; }
                    .sk-ppt-metrics { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </div>
    )
}
