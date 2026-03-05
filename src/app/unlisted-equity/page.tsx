'use client'

import ProductPageTemplate, { ProductData } from '@/components/shared/ProductPageTemplate'
import { Rocket, Gem, Building2, TrendingUp } from 'lucide-react'

const equityData: ProductData = {
    title: 'Unlisted Equity',
    tagline: 'Invest in the next giants before they hit the public markets.',
    whatIsIt: [
        'Unlisted Equity provides you the opportunity to invest in shares of companies that are not yet traded on formal stock exchanges like the BSE or NSE.',
        'These are often fast-growing startups, pre-IPO companies, or established private firms. It allows investors to capture massive valuation unlocks that occur right before or during an IPO.'
    ],
    highlights: [
        { title: 'Early Access', desc: 'Get in before institutional public listing.', icon: Rocket },
        { title: 'High Potential', desc: 'Massive alpha generation capabilities.', icon: TrendingUp },
        { title: 'Portfolio Diversity', desc: 'Non-correlated returns to public markets.', icon: Gem },
        { title: 'Exclusive Deals', desc: 'Access to tightly held private shares.', icon: Building2 }
    ],
    benefits: [
        { title: 'Value Unlocking', desc: 'Capture the illiquidity premium and the IPO pop.', icon: null },
        { title: 'Unique Business Models', desc: 'Invest in tech, space, or specialized sectors not yet available publicly.', icon: null },
        { title: 'Strategic Holding', desc: 'Long-term wealth generation shielded from daily market panic.', icon: null }
    ],
    whoShouldInvest: ['UHNIs', 'Venture Investors', 'Patient Capital Providers'],
    riskLevel: 5,
    returnPotential: 5
}

export default function UnlistedEquityPage() {
    return <ProductPageTemplate data={equityData} />
}
