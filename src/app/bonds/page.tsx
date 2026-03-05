'use client'

import ProductPageTemplate, { ProductData } from '@/components/shared/ProductPageTemplate'
import { Receipt, Building, PiggyBank, Scale } from 'lucide-react'

const bondsData: ProductData = {
    title: 'Bonds',
    tagline: 'High quality fixed-income securities issued by corporations and governments.',
    whatIsIt: [
        'Bonds are debt instruments where you technically loan money to a corporate entity or the government for a defined period of time at a variable or fixed interest rate.',
        'They represent a crucial asset class to balance a portfolio\'s equity risk, often providing returns superior to traditional Fixed Deposits while maintaining high credit safety.'
    ],
    highlights: [
        { title: 'Regular Income', desc: 'Earn consistent interest payments via coupons.', icon: Receipt },
        { title: 'Capital Protection', desc: 'Invest in AAA or sovereign rated paper.', icon: Building },
        { title: 'Tax-Free Options', desc: 'Certain NHAI/REC bonds offer completely tax-free interest.', icon: PiggyBank },
        { title: 'Portfolio Stabilizer', desc: 'Reduces overall portfolio volatility significantly.', icon: Scale }
    ],
    benefits: [
        { title: 'Higher Yields', desc: 'Often out-yield traditional bank FDs by 100-200 basis points depending on the credit rating.', icon: null },
        { title: 'Secondary Market Liquidity', desc: 'Bonds can sometimes be traded on exchanges before maturity if liquidity is required.', icon: null },
        { title: 'Sovereign Guarantee', desc: 'Government-issued bonds carry virtually zero default risk.', icon: null }
    ],
    whoShouldInvest: ['Income Seekers', 'HNI Debt Allocators', 'Tax-conscious Investors'],
    riskLevel: 2,
    returnPotential: 3
}

export default function BondsPage() {
    return <ProductPageTemplate data={bondsData} />
}
