'use client'

import { useState, useMemo } from 'react'
import PageNavigation from '@/components/shared/PageNavigation'
import PageFooter from '@/components/shared/PageFooter'
import PageHero from '@/components/shared/PageHero'
import CTABanner from '@/components/homepage/CTABanner'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts'
import { Calculator, TrendingUp, PiggyBank, Repeat, ChevronRight, IndianRupee } from 'lucide-react'

const NAV_C = '#073358'
const GOLD = '#FFD716'
const EMERALD = '#0DA574'
const LIGHT = '#F4F7FA'
const BODY = '#4A6080'
const WHITE = '#FFFFFF'
const MIDNIGHT = '#001F3E'

type Tab = 'sip' | 'lumpsum' | 'fd'

function formatCurrency(n: number): string {
  if (n >= 10000000) return `₹${(n / 10000000).toFixed(2)} Cr`
  if (n >= 100000) return `₹${(n / 100000).toFixed(2)} L`
  return `₹${Math.round(n).toLocaleString('en-IN')}`
}

function SliderInput({ label, value, min, max, step, prefix, suffix, onChange }: {
  label: string; value: number; min: number; max: number; step: number
  prefix?: string; suffix?: string; onChange: (v: number) => void
}) {
  const [focused, setFocused] = useState(false)
  const pct = ((value - min) / (max - min)) * 100
  return (
    <div style={{ marginBottom: 28 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
        <label style={{ fontSize: 14, fontWeight: 600, color: NAV_C }}>{label}</label>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, background: focused ? `${GOLD}20` : LIGHT, border: `1.5px solid ${focused ? GOLD : 'rgba(7,51,88,0.15)'}`, borderRadius: 8, padding: '6px 12px', transition: 'all 0.2s', minWidth: 100 }}>
          {prefix && <span style={{ fontSize: 13, color: BODY, fontWeight: 600 }}>{prefix}</span>}
          <input
            type="number" value={value} min={min} max={max} step={step}
            onChange={e => onChange(Math.max(min, Math.min(max, Number(e.target.value))))}
            onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
            style={{ width: 70, border: 'none', background: 'transparent', outline: 'none', fontSize: 14, fontWeight: 700, color: NAV_C, textAlign: 'right', fontFamily: 'var(--font-dm-sans)' }}
          />
          {suffix && <span style={{ fontSize: 13, color: BODY, fontWeight: 600 }}>{suffix}</span>}
        </div>
      </div>
      <div style={{ position: 'relative', height: 6, background: 'rgba(7,51,88,0.1)', borderRadius: 99 }}>
        <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: `${pct}%`, background: `linear-gradient(90deg, #0DA574, ${GOLD})`, borderRadius: 99, transition: 'width 0.1s' }} />
        <input
          type="range" min={min} max={max} step={step} value={value}
          onChange={e => onChange(Number(e.target.value))}
          style={{ position: 'absolute', inset: 0, width: '100%', opacity: 0, cursor: 'pointer', height: '100%' }}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
        <span style={{ fontSize: 11, color: BODY }}>{prefix}{min.toLocaleString('en-IN')}{suffix}</span>
        <span style={{ fontSize: 11, color: BODY }}>{prefix}{max.toLocaleString('en-IN')}{suffix}</span>
      </div>
    </div>
  )
}

export default function CalculatorsPage() {
  const [activeTab, setActiveTab] = useState<Tab>('sip')

  // SIP State
  const [sipAmount, setSipAmount] = useState(10000)
  const [sipYears, setSipYears] = useState(10)
  const [sipRate, setSipRate] = useState(12)

  // Lumpsum State
  const [lsAmount, setLsAmount] = useState(100000)
  const [lsYears, setLsYears] = useState(10)
  const [lsRate, setLsRate] = useState(12)

  // FD State
  const [fdAmount, setFdAmount] = useState(100000)
  const [fdYears, setFdYears] = useState(5)
  const [fdRate, setFdRate] = useState(7)
  const [fdCompound, setFdCompound] = useState(4) // per year

  // === CALCULATIONS ===
  const sipCalc = useMemo(() => {
    const r = sipRate / 12 / 100
    const n = sipYears * 12
    const maturity = sipAmount * ((Math.pow(1 + r, n) - 1) / r) * (1 + r)
    const invested = sipAmount * n
    return { maturity, invested, gains: maturity - invested }
  }, [sipAmount, sipYears, sipRate])

  const lsCalc = useMemo(() => {
    const maturity = lsAmount * Math.pow(1 + lsRate / 100, lsYears)
    return { maturity, invested: lsAmount, gains: maturity - lsAmount }
  }, [lsAmount, lsYears, lsRate])

  const fdCalc = useMemo(() => {
    const maturity = fdAmount * Math.pow(1 + fdRate / (100 * fdCompound), fdCompound * fdYears)
    return { maturity, invested: fdAmount, gains: maturity - fdAmount }
  }, [fdAmount, fdYears, fdRate, fdCompound])

  // === CHART DATA ===
  const sipChartData = useMemo(() => {
    return Array.from({ length: sipYears }, (_, i) => {
      const yr = i + 1
      const r = sipRate / 12 / 100
      const n = yr * 12
      const val = sipAmount * ((Math.pow(1 + r, n) - 1) / r) * (1 + r)
      return { year: `Y${yr}`, value: Math.round(val), invested: sipAmount * n }
    })
  }, [sipAmount, sipYears, sipRate])

  const lsChartData = useMemo(() => {
    return Array.from({ length: lsYears }, (_, i) => {
      const yr = i + 1
      const val = lsAmount * Math.pow(1 + lsRate / 100, yr)
      return { year: `Y${yr}`, value: Math.round(val), invested: lsAmount }
    })
  }, [lsAmount, lsYears, lsRate])

  const fdChartData = useMemo(() => {
    return Array.from({ length: fdYears }, (_, i) => {
      const yr = i + 1
      const val = fdAmount * Math.pow(1 + fdRate / (100 * fdCompound), fdCompound * yr)
      return { year: `Y${yr}`, value: Math.round(val), invested: fdAmount }
    })
  }, [fdAmount, fdYears, fdRate, fdCompound])

  const activeCalc = activeTab === 'sip' ? sipCalc : activeTab === 'lumpsum' ? lsCalc : fdCalc
  const activeChart = activeTab === 'sip' ? sipChartData : activeTab === 'lumpsum' ? lsChartData : fdChartData

  const pieData = [
    { name: 'Total Invested', value: Math.round(activeCalc.invested), color: '#0DA574' },
    { name: 'Est. Returns', value: Math.round(activeCalc.gains), color: GOLD },
  ]

  const tabs: { id: Tab, label: string, icon: React.ElementType }[] = [
    { id: 'sip', label: 'SIP Calculator', icon: Repeat },
    { id: 'lumpsum', label: 'Lumpsum Calculator', icon: TrendingUp },
    { id: 'fd', label: 'FD Calculator', icon: PiggyBank },
  ]

  return (
    <div style={{ background: WHITE, minHeight: '100vh' }}>
      <PageNavigation />
      <PageHero
        title="Financial Calculators"
        subtitle="Plan your wealth journey with instant, accurate SIP, Lumpsum, and Fixed Deposit projections."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Calculators', href: '/calculators' }]}
      />

      {/* CALCULATOR SECTION */}
      <section style={{ background: LIGHT, padding: '80px 0 96px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

          {/* Tab Selector */}
          <div style={{ display: 'flex', gap: 12, marginBottom: 40, flexWrap: 'wrap', justifyContent: 'center' }}>
            {tabs.map(t => {
              const isActive = activeTab === t.id
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 28px', borderRadius: 14, border: `2px solid ${isActive ? NAV_C : 'rgba(7,51,88,0.15)'}`, background: isActive ? NAV_C : WHITE, color: isActive ? WHITE : BODY, fontSize: 15, fontWeight: 700, cursor: 'pointer', transition: 'all 0.25s', fontFamily: 'var(--font-dm-sans)', boxShadow: isActive ? '0 8px 24px rgba(7,51,88,0.2)' : 'none' }}
                >
                  <t.icon style={{ width: 18, height: 18 }} />
                  {t.label}
                </button>
              )
            })}
          </div>

          {/* Main Calculator Card */}
          <div style={{ background: WHITE, borderRadius: 28, boxShadow: '0 8px 48px rgba(7,51,88,0.1)', border: '1px solid rgba(7,51,88,0.08)', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 520 }} className="sk-calc-grid">

              {/* LEFT: INPUTS */}
              <div style={{ padding: '44px 40px', borderRight: '1px solid rgba(7,51,88,0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 36 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: `${GOLD}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Calculator style={{ width: 22, height: 22, color: GOLD }} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 24, fontWeight: 700, color: NAV_C, lineHeight: 1 }}>
                      {activeTab === 'sip' ? 'SIP Calculator' : activeTab === 'lumpsum' ? 'Lumpsum Calculator' : 'FD Calculator'}
                    </h3>
                    <p style={{ fontSize: 13, color: BODY, marginTop: 4 }}>Adjust the sliders to see your projections</p>
                  </div>
                </div>

                {activeTab === 'sip' && (
                  <>
                    <SliderInput label="Monthly Investment" value={sipAmount} min={500} max={100000} step={500} prefix="₹" onChange={setSipAmount} />
                    <SliderInput label="Expected Annual Return" value={sipRate} min={1} max={30} step={0.5} suffix="%" onChange={setSipRate} />
                    <SliderInput label="Investment Duration" value={sipYears} min={1} max={40} step={1} suffix=" yrs" onChange={setSipYears} />
                  </>
                )}
                {activeTab === 'lumpsum' && (
                  <>
                    <SliderInput label="One-Time Investment" value={lsAmount} min={10000} max={10000000} step={10000} prefix="₹" onChange={setLsAmount} />
                    <SliderInput label="Expected Annual Return" value={lsRate} min={1} max={30} step={0.5} suffix="%" onChange={setLsRate} />
                    <SliderInput label="Investment Duration" value={lsYears} min={1} max={40} step={1} suffix=" yrs" onChange={setLsYears} />
                  </>
                )}
                {activeTab === 'fd' && (
                  <>
                    <SliderInput label="Principal Amount" value={fdAmount} min={1000} max={10000000} step={1000} prefix="₹" onChange={setFdAmount} />
                    <SliderInput label="Annual Interest Rate" value={fdRate} min={3} max={12} step={0.1} suffix="%" onChange={setFdRate} />
                    <SliderInput label="Tenure" value={fdYears} min={1} max={10} step={1} suffix=" yrs" onChange={setFdYears} />
                    <div style={{ marginBottom: 28 }}>
                      <label style={{ fontSize: 14, fontWeight: 600, color: NAV_C, marginBottom: 10, display: 'block' }}>Compounding Frequency</label>
                      <div style={{ display: 'flex', gap: 8 }}>
                        {[{ v: 1, l: 'Yearly' }, { v: 2, l: 'Half-Yearly' }, { v: 4, l: 'Quarterly' }, { v: 12, l: 'Monthly' }].map(opt => (
                          <button key={opt.v} onClick={() => setFdCompound(opt.v)} style={{ flex: 1, padding: '8px 4px', borderRadius: 8, border: `1.5px solid ${fdCompound === opt.v ? GOLD : 'rgba(7,51,88,0.15)'}`, background: fdCompound === opt.v ? `${GOLD}20` : WHITE, color: fdCompound === opt.v ? NAV_C : BODY, fontSize: 11, fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s', fontFamily: 'var(--font-dm-sans)' }}>{opt.l}</button>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {/* Result Summary */}
                <div style={{ background: MIDNIGHT, borderRadius: 20, padding: '28px 24px', marginTop: 8 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, textAlign: 'center' }}>
                    {[
                      { label: 'Total Invested', value: formatCurrency(activeCalc.invested), color: '#0DA574' },
                      { label: 'Est. Returns', value: formatCurrency(activeCalc.gains), color: GOLD },
                      { label: 'Maturity Value', value: formatCurrency(activeCalc.maturity), color: WHITE },
                    ].map((r, i) => (
                      <div key={i}>
                        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', fontWeight: 600, marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{r.label}</div>
                        <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: 20, fontWeight: 700, color: r.color }}>{r.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT: CHARTS */}
              <div style={{ padding: '44px 40px', display: 'flex', flexDirection: 'column', gap: 32 }}>
                {/* Pie Chart */}
                <div>
                  <h4 style={{ fontSize: 14, fontWeight: 700, color: NAV_C, marginBottom: 20, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Investment Breakdown</h4>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
                    <ResponsiveContainer width={160} height={160}>
                      <PieChart>
                        <Pie data={pieData} cx="50%" cy="50%" innerRadius={45} outerRadius={75} paddingAngle={3} dataKey="value" strokeWidth={0}>
                          {pieData.map((entry, index) => <Cell key={index} fill={entry.color} />)}
                        </Pie>
                        <Tooltip formatter={(v: number) => formatCurrency(v)} />
                      </PieChart>
                    </ResponsiveContainer>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                      {pieData.map((d, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <div style={{ width: 12, height: 12, borderRadius: 3, background: d.color, flexShrink: 0 }} />
                          <div>
                            <div style={{ fontSize: 12, color: BODY, fontWeight: 600 }}>{d.name}</div>
                            <div style={{ fontSize: 15, fontWeight: 700, color: NAV_C }}>{formatCurrency(d.value)}</div>
                          </div>
                        </div>
                      ))}
                      <div style={{ paddingTop: 8, borderTop: '1px solid rgba(7,51,88,0.08)' }}>
                        <div style={{ fontSize: 12, color: BODY, fontWeight: 600 }}>Returns %</div>
                        <div style={{ fontSize: 18, fontWeight: 700, color: EMERALD }}>
                          {activeCalc.invested > 0 ? `+${((activeCalc.gains / activeCalc.invested) * 100).toFixed(1)}%` : '0%'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Growth Chart */}
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: 14, fontWeight: 700, color: NAV_C, marginBottom: 20, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Wealth Growth Over Time</h4>
                  <ResponsiveContainer width="100%" height={200}>
                    <AreaChart data={activeChart} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
                      <defs>
                        <linearGradient id="cgVal" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor={GOLD} stopOpacity={0.3} />
                          <stop offset="100%" stopColor={GOLD} stopOpacity={0.02} />
                        </linearGradient>
                        <linearGradient id="cgInv" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor={EMERALD} stopOpacity={0.2} />
                          <stop offset="100%" stopColor={EMERALD} stopOpacity={0.02} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(7,51,88,0.06)" />
                      <XAxis dataKey="year" tick={{ fontSize: 11, fill: BODY }} axisLine={false} tickLine={false} />
                      <YAxis tick={{ fontSize: 11, fill: BODY }} axisLine={false} tickLine={false} tickFormatter={v => v >= 100000 ? `${(v/100000).toFixed(0)}L` : `${(v/1000).toFixed(0)}K`} />
                      <Tooltip formatter={(v: number) => formatCurrency(v)} />
                      <Area type="monotone" dataKey="invested" name="Invested" stroke={EMERALD} strokeWidth={2} fill="url(#cgInv)" />
                      <Area type="monotone" dataKey="value" name="Portfolio Value" stroke={GOLD} strokeWidth={2.5} fill="url(#cgVal)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <p style={{ textAlign: 'center', color: BODY, fontSize: 12, marginTop: 20, lineHeight: 1.6 }}>
            * Calculations are for illustrative purposes only. Mutual Fund investments are subject to market risks. Past performance is not indicative of future returns.
          </p>
        </div>
        <style suppressHydrationWarning>{`
          @media (max-width: 900px) { .sk-calc-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* QUICK TIPS */}
      <section style={{ background: WHITE, padding: '80px 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p style={{ color: GOLD, fontWeight: 700, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 12 }}>Wealth Wisdom</p>
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 44, fontWeight: 700, color: NAV_C }}>Tips to Maximise Your Returns</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="sk-tips-grid">
            {[
              { tip: 'Start as Early as Possible', desc: 'The earlier you start investing, the more time compounding has to work its magic. Even ₹500/month at age 22 can beat ₹5,000/month starting at 35.', icon: '⏰' },
              { tip: 'Increase SIP by 5% Every Year', desc: 'Step-up your SIP amount annually alongside your salary hike. This small change can double your final corpus without feeling the pinch.', icon: '📈' },
              { tip: 'Stay Invested in Market Corrections', desc: 'Market dips are not losses unless you sell. Staying invested through volatility ensures you capture the full recovery and growth cycle.', icon: '🛡️' },
            ].map((t, i) => (
              <div key={i} style={{ background: LIGHT, borderRadius: 20, padding: '32px 28px', border: '1px solid rgba(7,51,88,0.06)' }}>
                <span style={{ fontSize: 36, display: 'block', marginBottom: 16 }}>{t.icon}</span>
                <h3 style={{ fontWeight: 700, fontSize: 18, color: NAV_C, marginBottom: 12 }}>{t.tip}</h3>
                <p style={{ color: BODY, fontSize: 15, lineHeight: 1.7 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <style suppressHydrationWarning>{`
          @media (max-width: 768px) { .sk-tips-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      <CTABanner />
      <PageFooter />
    </div>
  )
}
