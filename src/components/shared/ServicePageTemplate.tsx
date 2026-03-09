'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import PageNavigation from '@/components/shared/PageNavigation'
import PageHero from '@/components/shared/PageHero'
import PageFooter from '@/components/shared/PageFooter'
import CTABanner from '@/components/homepage/CTABanner'

const NAV_C = '#073358'
const GOLD = '#FFD716'
const EMERALD = '#0DA574'
const LIGHT = '#F4F7FA'
const BODY = '#4A6080'
const WHITE = '#FFFFFF'
const MIDNIGHT = '#001F3E'

export interface ServiceData {
    title: string
    introText: string[]
    features: { title: string; desc: string; icon: any }[]
    howItWorks: { step: string; title: string; desc: string; icon: any }[]
    whyChooseUs: { title: string; desc: string; icon: any }[]
    relatedServices: { name: string; href: string }[]
}

function FeatureCard({ feature }: { feature: { title: string; desc: string; icon: any } }) {
    const [hov, setHov] = useState(false)
    return (
        <div
            onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
            style={{ background: WHITE, border: `1px solid ${hov ? `${GOLD}70` : 'rgba(7,51,88,0.1)'}`, borderRadius: 20, padding: '32px 28px', height: '100%', transition: 'all 0.25s', boxShadow: hov ? '0 12px 40px rgba(7,51,88,0.12)' : '0 2px 8px rgba(7,51,88,0.04)', transform: hov ? 'translateY(-3px)' : 'none' }}
        >
            <div style={{ width: 52, height: 52, borderRadius: 14, background: hov ? `${GOLD}25` : `${NAV_C}08`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, transition: 'background 0.25s' }}>
                <feature.icon style={{ width: 26, height: 26, color: hov ? NAV_C : NAV_C }} />
            </div>
            <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 22, fontWeight: 700, color: NAV_C, marginBottom: 12 }}>{feature.title}</h3>
            <p style={{ color: BODY, fontSize: 15, lineHeight: 1.75 }}>{feature.desc}</p>
        </div>
    )
}

function WhyCard({ reason, delay }: { reason: { title: string; desc: string; icon: any }; delay: number }) {
    const [hov, setHov] = useState(false)
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay }}
            onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
            style={{ background: hov ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.04)', padding: '36px 32px', borderRadius: 20, border: `1px solid ${hov ? `${GOLD}40` : 'rgba(255,255,255,0.08)'}`, transition: 'all 0.25s', cursor: 'default' }}
        >
            <CheckCircle2 style={{ width: 32, height: 32, color: GOLD, marginBottom: 16 }} />
            <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 22, fontWeight: 700, color: WHITE, marginBottom: 12 }}>{reason.title}</h3>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 14, lineHeight: 1.8 }}>{reason.desc}</p>
        </motion.div>
    )
}

function RelatedCard({ service }: { service: { name: string; href: string } }) {
    const [hov, setHov] = useState(false)
    return (
        <Link
            href={service.href}
            onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: hov ? `${GOLD}08` : WHITE, padding: '24px 28px', borderRadius: 16, boxShadow: hov ? '0 8px 32px rgba(7,51,88,0.1)' : '0 2px 8px rgba(7,51,88,0.05)', border: `1px solid ${hov ? GOLD : 'rgba(7,51,88,0.1)'}`, transition: 'all 0.25s', textDecoration: 'none' }}
        >
            <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: 20, fontWeight: 700, color: NAV_C }}>{service.name}</span>
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: hov ? GOLD : `${NAV_C}08`, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.25s', flexShrink: 0 }}>
                <ArrowRight style={{ width: 18, height: 18, color: hov ? MIDNIGHT : NAV_C, transition: 'color 0.25s' }} />
            </div>
        </Link>
    )
}

export default function ServicePageTemplate({ data }: { data: ServiceData }) {
    return (
        <div style={{ background: WHITE, minHeight: '100vh' }}>
            <PageNavigation />
            <PageHero
                title={data.title}
                subtitle={`Expert guidance and personalised strategies for ${data.title.toLowerCase()} — built around your goals.`}
                breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Services', href: '#' }, { label: data.title, href: '#' }]}
            />

            {/* 1. INTRODUCTION */}
            <section style={{ background: WHITE, padding: '96px 0' }}>
                <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="sk-spt-2col">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <p style={{ color: GOLD, fontWeight: 700, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 12 }}>Overview</p>
                            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 42, fontWeight: 700, color: NAV_C, marginBottom: 28, lineHeight: 1.15 }}>
                                Understanding<br />{data.title}
                            </h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                                {data.introText.map((paragraph, idx) => (
                                    <p key={idx} style={{ color: BODY, fontSize: 16, lineHeight: 1.85 }}>{paragraph}</p>
                                ))}
                            </div>
                            <Link
                                href="/contact-us"
                                style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginTop: 36, padding: '14px 32px', borderRadius: 999, background: MIDNIGHT, color: WHITE, fontSize: 15, fontWeight: 700, textDecoration: 'none', boxShadow: '0 8px 24px rgba(0,31,62,0.2)', fontFamily: 'var(--font-dm-sans)' }}
                                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = NAV_C }}
                                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = MIDNIGHT }}
                            >
                                Talk to an Advisor <ChevronRight style={{ width: 18, height: 18 }} />
                            </Link>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                            style={{ background: LIGHT, borderRadius: 28, border: '1px solid rgba(7,51,88,0.08)', aspectRatio: '4/3', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 48, position: 'relative', overflow: 'hidden' }}>
                            <div style={{ position: 'absolute', top: -60, right: -60, width: 240, height: 240, borderRadius: '50%', background: `${GOLD}12`, pointerEvents: 'none' }} />
                            <div style={{ position: 'absolute', bottom: -40, left: -40, width: 180, height: 180, borderRadius: '50%', background: `${EMERALD}10`, pointerEvents: 'none' }} />
                            <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                                <div style={{ width: 100, height: 100, background: WHITE, borderRadius: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', boxShadow: '0 8px 32px rgba(7,51,88,0.12)', border: '1px solid rgba(7,51,88,0.08)' }}>
                                    <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: 44, fontWeight: 800, color: GOLD }}>{data.title.charAt(0)}</span>
                                </div>
                                <span style={{ fontWeight: 700, fontSize: 14, color: BODY, textTransform: 'uppercase', letterSpacing: '0.15em' }}>{data.title}</span>
                                <p style={{ color: BODY, fontSize: 13, marginTop: 8, opacity: 0.7 }}>SK Financial Services</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. KEY FEATURES */}
            <section style={{ background: LIGHT, padding: '96px 0' }}>
                <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
                    <div style={{ textAlign: 'center', marginBottom: 60 }}>
                        <p style={{ color: GOLD, fontWeight: 700, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 12 }}>Key Benefits</p>
                        <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 44, fontWeight: 700, color: NAV_C, marginBottom: 16 }}>Why This Matters</h2>
                        <p style={{ color: BODY, fontSize: 16, maxWidth: 500, margin: '0 auto' }}>Each feature is designed to deliver measurable impact on your financial outcomes.</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="sk-spt-3col">
                        {data.features.map((feature, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }}>
                                <FeatureCard feature={feature} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. HOW IT WORKS */}
            <section style={{ background: WHITE, padding: '96px 0' }}>
                <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
                    <div style={{ textAlign: 'center', marginBottom: 72 }}>
                        <p style={{ color: GOLD, fontWeight: 700, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 12 }}>The Process</p>
                        <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 44, fontWeight: 700, color: NAV_C }}>How It Works</h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 48, position: 'relative' }} className="sk-spt-3col">
                        {/* Connector line */}
                        <div style={{ display: 'none', position: 'absolute', top: 40, left: '16%', right: '16%', height: 1, background: 'rgba(7,51,88,0.1)', zIndex: 0 }} className="sk-connector" />
                        {data.howItWorks.map((step, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.2 }}
                                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                                <div style={{ width: 80, height: 80, borderRadius: 20, background: LIGHT, border: '1px solid rgba(7,51,88,0.1)', boxShadow: '0 4px 16px rgba(7,51,88,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24, position: 'relative' }}>
                                    <step.icon style={{ width: 32, height: 32, color: NAV_C }} />
                                    <div style={{ position: 'absolute', top: -12, right: -12, width: 28, height: 28, borderRadius: '50%', background: GOLD, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 800, color: MIDNIGHT }}>
                                        {step.step}
                                    </div>
                                </div>
                                <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 22, fontWeight: 700, color: NAV_C, marginBottom: 12 }}>{step.title}</h3>
                                <p style={{ color: BODY, fontSize: 15, lineHeight: 1.75 }}>{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. WHY CHOOSE US */}
            <section style={{ background: MIDNIGHT, padding: '96px 0', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
                    <div style={{ marginBottom: 60 }}>
                        <p style={{ color: GOLD, fontWeight: 700, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 12 }}>Why Choose SK Financial Services</p>
                        <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 44, fontWeight: 700, color: WHITE }}>Expertise You Can Trust</h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="sk-spt-3col">
                        {data.whyChooseUs.map((reason, idx) => (
                            <WhyCard key={idx} reason={reason} delay={idx * 0.15} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. STATS BAR */}
            <section style={{ background: NAV_C, padding: '56px 0' }}>
                <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }} className="sk-spt-metrics">
                        {[
                            { value: '19+', label: 'Years of Experience' },
                            { value: '1,000+', label: 'Satisfied Clients' },
                            { value: '₹200 Cr+', label: 'Assets Under Advisory' },
                            { value: '100%', label: 'Client-First Approach' },
                        ].map((stat, i) => (
                            <div key={i} style={{ textAlign: 'center', padding: '0 24px', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.12)' : 'none' }}>
                                <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: 40, fontWeight: 800, color: GOLD, lineHeight: 1 }}>{stat.value}</div>
                                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', fontWeight: 600, marginTop: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTABanner />

            {/* 6. RELATED SERVICES */}
            <section style={{ background: WHITE, padding: '80px 0' }}>
                <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
                        <div>
                            <p style={{ color: GOLD, fontWeight: 700, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 12 }}>Discover More</p>
                            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 40, fontWeight: 700, color: NAV_C }}>Explore Related Services</h2>
                        </div>
                        <Link href="/#services" style={{ display: 'flex', alignItems: 'center', gap: 8, color: BODY, fontSize: 14, fontWeight: 600, textDecoration: 'none' }}
                            onMouseEnter={e => (e.currentTarget.style.color = NAV_C)} onMouseLeave={e => (e.currentTarget.style.color = BODY)}>
                            View All <ArrowRight style={{ width: 16, height: 16 }} />
                        </Link>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="sk-spt-3col">
                        {data.relatedServices.map((service, idx) => (
                            <RelatedCard key={idx} service={service} />
                        ))}
                    </div>
                </div>
            </section>

            <PageFooter />

            <style suppressHydrationWarning>{`
                @media (min-width: 901px) { .sk-connector { display: block !important; } }
                @media (max-width: 900px) {
                    .sk-spt-2col { grid-template-columns: 1fr !important; gap: 40px !important; }
                    .sk-spt-3col { grid-template-columns: 1fr 1fr !important; }
                    .sk-spt-metrics { grid-template-columns: 1fr 1fr !important; gap: 32px !important; row-gap: 32px !important; }
                }
                @media (max-width: 600px) {
                    .sk-spt-3col { grid-template-columns: 1fr !important; }
                    .sk-spt-metrics { grid-template-columns: 1fr 1fr !important; }
                }
            `}</style>
        </div>
    )
}
