'use client'

import { useState } from 'react'
import Link from 'next/link'
import PageNavigation from '@/components/shared/PageNavigation'
import PageFooter from '@/components/shared/PageFooter'
import PageHero from '@/components/shared/PageHero'
import CTABanner from '@/components/homepage/CTABanner'
import { Calendar, User, ArrowRight, Tag, Search, TrendingUp, Shield, PiggyBank, Building2, Globe, BarChart3 } from 'lucide-react'

const NAV_C = '#073358'
const GOLD = '#FFD716'
const EMERALD = '#0DA574'
const LIGHT = '#F4F7FA'
const BODY = '#4A6080'
const WHITE = '#FFFFFF'

const categories = [
  { label: 'All', icon: BarChart3 },
  { label: 'Mutual Funds', icon: TrendingUp },
  { label: 'Insurance', icon: Shield },
  { label: 'Tax Planning', icon: PiggyBank },
  { label: 'Fixed Income', icon: Building2 },
  { label: 'NRI', icon: Globe },
]

const posts = [
  { title: 'The Power of Compounding in Mutual Funds', excerpt: 'Understanding how starting early can significantly impact your retirement corpus through the magic of compounding returns over time.', category: 'Mutual Funds', date: 'Oct 15, 2025', author: 'Sheetal Khanna', readTime: '5 min read', color: '#1E40AF', featured: true },
  { title: 'Why Term Insurance is Non-Negotiable for Every Family', excerpt: 'A comprehensive guide on why establishing a solid term insurance plan is the absolute foundation of any financial strategy.', category: 'Insurance', date: 'Oct 02, 2025', author: 'SK Advisors', readTime: '4 min read', color: '#064E3B', featured: false },
  { title: 'Tax Loss Harvesting: Strategies for FY 2025', excerpt: 'Learn legitimate ways to minimise your tax liability before the end of the financial year using smart portfolio harvesting techniques.', category: 'Tax Planning', date: 'Sep 28, 2025', author: 'Sheetal Khanna', readTime: '6 min read', color: '#7C3AED', featured: false },
  { title: 'ELSS vs PPF: Which Tax Saver Should You Choose?', excerpt: 'A detailed comparison of Equity Linked Savings Schemes and Public Provident Fund to help you make the best decision for your tax planning.', category: 'Tax Planning', date: 'Sep 15, 2025', author: 'SK Advisors', readTime: '7 min read', color: '#7C3AED', featured: false },
  { title: 'NRI Guide: Repatriating Your India Investments', excerpt: 'Everything an NRI needs to know about repatriation rules, FEMA guidelines, and the best strategies for bringing money back home.', category: 'NRI', date: 'Sep 05, 2025', author: 'Sheetal Khanna', readTime: '8 min read', color: '#B45309', featured: false },
  { title: 'Sovereign Gold Bonds vs Physical Gold: 2025 Guide', excerpt: 'Why the government-backed Sovereign Gold Bond scheme offers NRIs and domestic investors a superior alternative to physical gold.', category: 'Fixed Income', date: 'Aug 25, 2025', author: 'SK Advisors', readTime: '5 min read', color: '#B45309', featured: false },
  { title: 'How to Build a ₹1 Crore Corpus in 10 Years via SIP', excerpt: 'A realistic, step-by-step plan with real numbers showing exactly how consistent SIP investments can turn your monthly savings into a crore.', category: 'Mutual Funds', date: 'Aug 10, 2025', author: 'Sheetal Khanna', readTime: '6 min read', color: '#1E40AF', featured: false },
  { title: 'Health Insurance Riders: What Are They and Do You Need Them?', excerpt: 'Breaking down the most common health insurance add-on riders — critical illness, accidental death, OPD cover — and how to evaluate them.', category: 'Insurance', date: 'Jul 28, 2025', author: 'SK Advisors', readTime: '5 min read', color: '#064E3B', featured: false },
  { title: 'Understanding Bond Ratings: A Beginner Guide', excerpt: 'AAA, AA, BBB — decoding the credit rating system and how to assess the risk-return tradeoff when investing in corporate bonds.', category: 'Fixed Income', date: 'Jul 15, 2025', author: 'Sheetal Khanna', readTime: '4 min read', color: '#B45309', featured: false },
]

function PostCard({ post, i }: { post: typeof posts[0], i: number }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: WHITE, borderRadius: 20, overflow: 'hidden',
        border: `1px solid ${hov ? 'rgba(7,51,88,0.2)' : 'rgba(7,51,88,0.08)'}`,
        transition: 'all 0.3s',
        boxShadow: hov ? '0 16px 48px rgba(7,51,88,0.12)' : '0 2px 8px rgba(0,0,0,0.04)',
        transform: hov ? 'translateY(-4px)' : 'translateY(0)'
      }}
    >
      {/* Color Band Header */}
      <div style={{ height: 6, background: post.color }} />
      <div style={{ padding: '28px 28px 32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: WHITE, background: post.color, borderRadius: 6, padding: '3px 10px' }}>{post.category}</span>
          <span style={{ fontSize: 12, color: BODY }}>{post.date}</span>
          <span style={{ fontSize: 12, color: BODY, marginLeft: 'auto' }}>{post.readTime}</span>
        </div>
        <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 22, fontWeight: 700, color: NAV_C, lineHeight: 1.3, marginBottom: 12 }}>{post.title}</h3>
        <p style={{ color: BODY, fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>{post.excerpt}</p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 32, height: 32, borderRadius: '50%', background: `${NAV_C}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <User style={{ width: 14, height: 14, color: NAV_C }} />
            </div>
            <span style={{ fontSize: 13, fontWeight: 600, color: NAV_C }}>{post.author}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: hov ? post.color : BODY, transition: 'color 0.2s', fontSize: 13, fontWeight: 600 }}>
            Read More <ArrowRight style={{ width: 14, height: 14 }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')
  const [searchFocus, setSearchFocus] = useState(false)

  const featured = posts[0]
  const filtered = posts.slice(1).filter(p => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <div style={{ background: WHITE, minHeight: '100vh' }}>
      <PageNavigation />
      <PageHero
        title="Financial Insights & Guides"
        subtitle="Expert articles, market insights, and financial strategies written by our certified advisors."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }]}
      />

      {/* FEATURED POST */}
      <section style={{ background: LIGHT, padding: '72px 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
            <div style={{ width: 40, height: 3, background: GOLD, borderRadius: 2 }} />
            <span style={{ color: GOLD, fontWeight: 700, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Featured Article</span>
          </div>
          <div style={{ background: NAV_C, borderRadius: 28, overflow: 'hidden', display: 'grid', gridTemplateColumns: '1fr 1fr' }} className="sk-featured-grid">
            {/* Left Visual */}
            <div style={{ background: `linear-gradient(135deg, #0a4a7a 0%, ${NAV_C} 100%)`, position: 'relative', minHeight: 320, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(255,215,22,0.12) 0%, transparent 60%)' }} />
              <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: 40 }}>
                <TrendingUp style={{ width: 72, height: 72, color: GOLD, opacity: 0.8, margin: '0 auto 16px' }} />
                <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: 48, fontWeight: 700, color: GOLD, opacity: 0.3 }}>01</div>
              </div>
            </div>
            {/* Right Content */}
            <div style={{ padding: '48px 44px' }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: NAV_C, background: GOLD, borderRadius: 6, padding: '3px 10px', display: 'inline-block', marginBottom: 20 }}>{featured.category}</span>
              <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 36, fontWeight: 700, color: WHITE, lineHeight: 1.2, marginBottom: 16 }}>{featured.title}</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 16, lineHeight: 1.7, marginBottom: 24 }}>{featured.excerpt}</p>
              <div style={{ display: 'flex', gap: 20, color: 'rgba(255,255,255,0.5)', fontSize: 13, marginBottom: 28 }}>
                <span>{featured.date}</span><span>•</span><span>{featured.author}</span><span>•</span><span>{featured.readTime}</span>
              </div>
              <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: GOLD, color: NAV_C, borderRadius: 12, padding: '12px 24px', textDecoration: 'none', fontWeight: 700, fontSize: 14 }}>
                Read Article <ArrowRight style={{ width: 16, height: 16 }} />
              </a>
            </div>
          </div>
        </div>
        <style suppressHydrationWarning>{`
          @media (max-width: 768px) { .sk-featured-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* FILTERS + GRID */}
      <section style={{ background: WHITE, padding: '80px 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>

          {/* Search + Filter Row */}
          <div style={{ display: 'flex', gap: 16, marginBottom: 48, flexWrap: 'wrap', alignItems: 'center' }} className="sk-filter-row">
            {/* Search */}
            <div style={{ position: 'relative', flex: 1, minWidth: 240 }}>
              <Search style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', width: 16, height: 16, color: BODY }} />
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                onFocus={() => setSearchFocus(true)}
                onBlur={() => setSearchFocus(false)}
                placeholder="Search articles..."
                style={{ width: '100%', padding: '12px 16px 12px 40px', borderRadius: 12, border: `2px solid ${searchFocus ? GOLD : 'rgba(7,51,88,0.15)'}`, background: WHITE, fontSize: 14, color: NAV_C, outline: 'none', fontFamily: 'var(--font-dm-sans)', boxSizing: 'border-box' }}
              />
            </div>
            {/* Category Tabs */}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {categories.map(cat => {
                const isActive = activeCategory === cat.label
                return (
                  <button
                    key={cat.label}
                    onClick={() => setActiveCategory(cat.label)}
                    style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 16px', borderRadius: 10, border: `1.5px solid ${isActive ? NAV_C : 'rgba(7,51,88,0.15)'}`, background: isActive ? NAV_C : WHITE, color: isActive ? WHITE : BODY, fontSize: 13, fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s', fontFamily: 'var(--font-dm-sans)' }}
                  >
                    <cat.icon style={{ width: 14, height: 14 }} />
                    {cat.label}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Articles Grid */}
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 0', color: BODY }}>
              <Search style={{ width: 48, height: 48, margin: '0 auto 16px', opacity: 0.3 }} />
              <p style={{ fontSize: 18, fontWeight: 600 }}>No articles found for your search.</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="sk-blog-grid">
              {filtered.map((post, i) => <PostCard key={i} post={post} i={i} />)}
            </div>
          )}
        </div>
        <style suppressHydrationWarning>{`
          @media (max-width: 1024px) { .sk-blog-grid { grid-template-columns: repeat(2,1fr) !important; } }
          @media (max-width: 640px) { .sk-blog-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      <CTABanner />
      <PageFooter />
    </div>
  )
}
