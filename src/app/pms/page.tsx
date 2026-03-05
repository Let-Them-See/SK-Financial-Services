'use client'

import ProductPageTemplate, { ProductData } from '@/components/shared/ProductPageTemplate'
import { Crown, Briefcase, Landmark, Target } from 'lucide-react'

const pmsData: ProductData = {
    title: 'Portfolio Management Services (PMS)',
    tagline: 'Exclusive, customized investment portfolios for High Net Worth Individuals.',
    whatIsIt: [
        'Portfolio Management Service (PMS) is a professional service where qualified portfolio managers backed by a research team manage your equity portfolio on your behalf.',
        'Unlike mutual funds, in PMS the investor owns individual securities. This offers greater flexibility and customization tailored strictly to the investor\'s risk-return profile.'
    ],
    highlights: [
        { title: 'High Customization', desc: 'Tailor-made portfolios matching your exact risk tolerance.', icon: Target },
        { title: 'Direct Ownership', desc: 'You directly own the stocks in your demat account.', icon: Landmark },
        { title: 'Premium Service', desc: 'Dedicated fund managers and comprehensive reporting.', icon: Crown },
        { title: 'Agility', desc: 'Capable of taking concentrated bets compared to MFs.', icon: Briefcase }
    ],
    benefits: [
        { title: 'Concentrated Portfolios', desc: 'Focuses on 15-25 high-conviction stocks rather than over-diversifying.', icon: null },
        { title: 'Transparency', desc: 'Live tracking of exactly which stocks are being bought and sold.', icon: null },
        { title: 'Tax Efficiency', desc: 'Manager can harvest losses or optimize tax dynamically at investor level.', icon: null }
    ],
    whoShouldInvest: ['HNIs', 'Aggressive Investors', 'Long-term Wealth Builders'],
    riskLevel: 4,
    returnPotential: 5
}

export default function PMSPage() {
    return <ProductPageTemplate data={pmsData} />
}
