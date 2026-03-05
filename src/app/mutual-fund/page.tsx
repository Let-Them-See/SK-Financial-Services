'use client'

import ProductPageTemplate, { ProductData } from '@/components/shared/ProductPageTemplate'
import { Briefcase, TrendingUp, Coins, BarChart3 } from 'lucide-react'

const mfData: ProductData = {
    title: 'Mutual Funds',
    tagline: 'Professional portfolio management pooling money from investors to purchase securities.',
    whatIsIt: [
        'A Mutual Fund is an investment vehicle made up of a pool of moneys collected from many investors for the purpose of investing in securities such as stocks, bonds, money market instruments, and other assets.',
        'They are operated by professional money managers, who allocate the fund’s investments and attempt to produce capital gains and/or income for the fund\'s investors.'
    ],
    highlights: [
        { title: 'Diversification', desc: 'Instant exposure to dozens of equities or bonds.', icon: BarChart3 },
        { title: 'Professional Management', desc: 'Managed by experienced fund managers.', icon: Briefcase },
        { title: 'Liquidity', desc: 'Easy to buy and sell on any business day.', icon: Coins },
        { title: 'Affordability', desc: 'Start investing with as little as ₹500 via SIP.', icon: TrendingUp }
    ],
    benefits: [
        { title: 'Economies of Scale', desc: 'Because a mutual fund buys and sells large amounts of securities at a time, its transaction costs are lower than what an individual would pay for securities transactions.', icon: null },
        { title: 'Regulatory Protection', desc: 'Regulated tightly by SEBI to ensure transparency and fairness.', icon: null },
        { title: 'Variety of Schemes', desc: 'Choose from equity, debt, hybrid, and solution-oriented schemes based on goals.', icon: null }
    ],
    whoShouldInvest: ['Retail Investors', 'Goal Planners', 'Beginners', 'Wealth Creators'],
    riskLevel: 3,
    returnPotential: 4
}

export default function MutualFundPage() {
    return <ProductPageTemplate data={mfData} />
}
