'use client'

import ProductPageTemplate, { ProductData } from '@/components/shared/ProductPageTemplate'
import { Puzzle, Zap, Copy, Filter } from 'lucide-react'

const smallcaseData: ProductData = {
    title: 'Smallcase',
    tagline: 'Modern thematic investing simplified into precise portfolios.',
    whatIsIt: [
        'Smallcases are modern investment products that contain a curated basket of stocks or ETFs reflecting a specific objective, theme, or strategy.',
        'Instead of buying a single stock or a blind mutual fund, you purchase an entire idea—like \'Electric Mobility\', \'Dividend Aristocrats\', or \'Rural Demand\'. The underlying shares are credited directly to your demat account.'
    ],
    highlights: [
        { title: 'Theme Based', desc: 'Invest in ideas you understand and believe in.', icon: Puzzle },
        { title: 'Direct Stock Ownership', desc: 'No lock-in periods; you own the underlying shares directly.', icon: Copy },
        { title: 'Rebalancing', desc: 'Periodic updates from SEBI registered researchers.', icon: Zap },
        { title: 'Customizable', desc: 'Add or remove specific stocks from the basket if you disagree.', icon: Filter }
    ],
    benefits: [
        { title: 'No Hidden Fees', desc: 'Pay a flat fee upfront rather than an ongoing expense ratio (AUM fee) like mutual funds.', icon: null },
        { title: 'Dividend Yield', desc: 'All dividends paid by the constituent companies land directly in your bank account.', icon: null },
        { title: 'Full Transparency', desc: 'You always know exactly which companies you own and in what proportion.', icon: null }
    ],
    whoShouldInvest: ['Thematic Believers', 'Modern Millennials', 'Demat Account Holders', 'Active Investors'],
    riskLevel: 4,
    returnPotential: 4
}

export default function SmallcasePage() {
    return <ProductPageTemplate data={smallcaseData} />
}
