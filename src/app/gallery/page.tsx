'use client'

import { useState } from 'react'
import PageNavigation from '@/components/shared/PageNavigation'
import PageFooter from '@/components/shared/PageFooter'
import PageHero from '@/components/shared/PageHero'
import CTABanner from '@/components/homepage/CTABanner'
import { Trophy, Users, Star, Calendar } from 'lucide-react'

const NAV_C = '#073358'
const GOLD = '#FFD716'
const LIGHT = '#F4F7FA'
const BODY = '#4A6080'
const WHITE = '#FFFFFF'
const MIDNIGHT = '#001F3E'

const galleryItems = [
  { id: 1, category: 'Events', title: 'Annual Client Appreciation Night 2024', year: '2024', size: 'large', gradient: 'linear-gradient(135deg, #073358 0%, #0a4869 100%)', icon: '🏆' },
  { id: 2, category: 'Awards', title: 'Top Financial Advisor Award 2023', year: '2023', size: 'small', gradient: 'linear-gradient(135deg, #0DA574 0%, #0a7a55 100%)', icon: '🎖️' },
  { id: 3, category: 'Team', title: 'Office Team Building Retreat', year: '2024', size: 'small', gradient: 'linear-gradient(135deg, #7C3AED 0%, #5b21b6 100%)', icon: '👥' },
  { id: 4, category: 'Seminars', title: 'Mumbai Financial Literacy Seminar', year: '2023', size: 'small', gradient: 'linear-gradient(135deg, #B45309 0%, #92400e 100%)', icon: '📚' },
  { id: 5, category: 'Events', title: 'NRI Investment Roadshow — Dubai', year: '2024', size: 'small', gradient: 'linear-gradient(135deg, #1E40AF 0%, #1e3a8a 100%)', icon: '✈️' },
  { id: 6, category: 'Awards', title: 'AMFI Excellence Certification Ceremony', year: '2022', size: 'large', gradient: 'linear-gradient(135deg, #B45309 0%, #073358 100%)', icon: '📜' },
  { id: 7, category: 'Team', title: 'Knowledge Training Workshop', year: '2023', size: 'small', gradient: 'linear-gradient(135deg, #064E3B 0%, #0DA574 100%)', icon: '💡' },
  { id: 8, category: 'Events', title: 'Client Portfolio Review Day', year: '2024', size: 'small', gradient: 'linear-gradient(135deg, #1E1B4B 0%, #4338CA 100%)', icon: '📊' },
  { id: 9, category: 'Seminars', title: 'Tax Planning Workshop 2024', year: '2024', size: 'small', gradient: 'linear-gradient(135deg, #7C3AED 0%, #073358 100%)', icon: '💰' },
]

const categories = ['All', 'Events', 'Awards', 'Seminars', 'Team']

const milestones = [
  { icon: Trophy, value: '5+', label: 'Industry Awards', color: GOLD },
  { icon: Users, value: '1000+', label: 'Clients Served', color: '#0DA574' },
  { icon: Star, value: '19+', label: 'Years of Excellence', color: '#8B5CF6' },
  { icon: Calendar, value: '50+', label: 'Events & Seminars', color: '#F59E0B' },
]

function GalleryCard({ item }: { item: typeof galleryItems[0] }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: item.gradient, borderRadius: 20, overflow: 'hidden',
        position: 'relative', cursor: 'pointer', transition: 'all 0.3s',
        transform: hov ? 'scale(1.02)' : 'scale(1)',
        boxShadow: hov ? '0 24px 60px rgba(0,0,0,0.25)' : '0 4px 16px rgba(0,0,0,0.1)',
        gridColumn: item.size === 'large' ? 'span 2' : 'span 1',
        minHeight: item.size === 'large' ? 280 : 200
      }}
      className="sk-gallery-card"
    >
      {/* Dot Pattern Overlay */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      {/* Hover Overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.3)', opacity: hov ? 1 : 0, transition: 'opacity 0.3s' }} />
      {/* Content */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 28, zIndex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <span style={{ fontSize: 48 }}>{item.icon}</span>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', background: 'rgba(0,0,0,0.3)', borderRadius: 6, padding: '4px 10px', backdropFilter: 'blur(4px)' }}>{item.category}</span>
        </div>
        <div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginBottom: 8, fontWeight: 600 }}>{item.year}</div>
          <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: item.size === 'large' ? 26 : 18, fontWeight: 700, color: WHITE, lineHeight: 1.3 }}>{item.title}</h3>
        </div>
      </div>
    </div>
  )
}

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = galleryItems.filter(item => activeFilter === 'All' || item.category === activeFilter)

  return (
    <div style={{ background: WHITE, minHeight: '100vh' }}>
      <PageNavigation />
      <PageHero
        title="Our Gallery"
        subtitle="Milestones, events, and moments that reflect our journey of trust and excellence."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Gallery', href: '/gallery' }]}
      />

      {/* MILESTONES BAR */}
      <section style={{ background: MIDNIGHT, padding: '56px 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }} className="sk-milestones-grid">
            {milestones.map((m, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: `${m.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <m.icon style={{ width: 26, height: 26, color: m.color }} />
                </div>
                <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: 40, fontWeight: 700, color: WHITE, lineHeight: 1 }}>{m.value}</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, marginTop: 8, fontWeight: 600 }}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
        <style suppressHydrationWarning>{`
          @media (max-width: 640px) { .sk-milestones-grid { grid-template-columns: repeat(2,1fr) !important; } }
        `}</style>
      </section>

      {/* GALLERY GRID */}
      <section style={{ background: LIGHT, padding: '80px 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
          {/* Filter Tabs */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 40, flexWrap: 'wrap', justifyContent: 'center' }}>
            {categories.map(cat => {
              const isActive = activeFilter === cat
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  style={{ padding: '10px 22px', borderRadius: 10, border: `1.5px solid ${isActive ? NAV_C : 'rgba(7,51,88,0.2)'}`, background: isActive ? NAV_C : WHITE, color: isActive ? WHITE : BODY, fontSize: 14, fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s', fontFamily: 'var(--font-dm-sans)' }}
                >
                  {cat}
                </button>
              )
            })}
          </div>

          {/* Masonry-style Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="sk-gallery-grid">
            {filtered.map((item) => <GalleryCard key={item.id} item={item} />)}
          </div>
        </div>
        <style suppressHydrationWarning>{`
          @media (max-width: 1024px) { .sk-gallery-grid { grid-template-columns: repeat(2,1fr) !important; } .sk-gallery-card { grid-column: span 1 !important; } }
          @media (max-width: 640px) { .sk-gallery-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      <CTABanner />
      <PageFooter />
    </div>
  )
}
