'use client'

import ProductPageTemplate, { ProductData } from '@/components/shared/ProductPageTemplate'
import { Users, Activity, Smartphone, BadgePercent } from 'lucide-react'

const liquiloansData: ProductData = {
    title: 'Liquiloans',
    tagline: 'New-age Peer-to-Peer (P2P) lending offering steady, high-yield alternative returns.',
    whatIsIt: [
        'Liquiloans operates under the RBI-regulated P2P NBFC framework. It mathematically matches lenders directly with creditworthy retail borrowers, eliminating the traditional bank intermediary.',
        'By cutting out the middleman bank, the lender earns a significantly higher yield while maintaining rigorous algorithmic risk management and diversification across hundreds of loans.'
    ],
    highlights: [
        { title: 'Double Digit Yields', desc: 'Targeting 9-11% p.a. returns historically.', icon: BadgePercent },
        { title: 'Hyper Diversified', desc: 'Your capital is split across hundreds of prime borrowers.', icon: Activity },
        { title: 'Regulated Entity', desc: 'RBI licensed and strictly monitored platform.', icon: Users },
        { title: 'No Volatility', desc: 'A fixed-income alternative not linked to the stock market.', icon: Smartphone }
    ],
    benefits: [
        { title: 'Daily Accrual', desc: 'Interest is accrued daily, harnessing the power of compounding rapidly.', icon: null },
        { title: 'Zero Market Correlation', desc: 'Your lending portfolio does not dive when the Nifty or Sensex crashes.', icon: null },
        { title: 'Tech-Driven Risk Framework', desc: 'Lending only to prime retail individuals with extensive data-backed credit histories.', icon: null }
    ],
    whoShouldInvest: ['Yield Seekers', 'Alternative Asset Allocators', 'Tech-Savvy Investors'],
    riskLevel: 3,
    returnPotential: 4
}

export default function LiquiloansPage() {
    return <ProductPageTemplate data={liquiloansData} />
}
