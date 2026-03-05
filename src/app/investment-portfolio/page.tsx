'use client'

import ServicePageTemplate, { ServiceData } from '@/components/shared/ServicePageTemplate'
import { Briefcase, BarChart3, LineChart, Target, Shield, CheckCircle } from 'lucide-react'

const portfolioData: ServiceData = {
    title: 'Investment Portfolio',
    introText: [
        'Whenever you think of making an investment, three things should come to the top of your mind: Liquidity, Safety, and Return.',
        'At SK Financial Services, we offer a scientifically structured Investment Portfolio service ensuring that your asset allocation meets these three pillars while seamlessly aligning with your long-term goals.'
    ],
    features: [
        { title: 'Goal-Oriented Allocation', desc: 'Portfolios are structured entirely around your short, medium, and long term financial objectives.', icon: Target },
        { title: 'Continuous Review', desc: 'We monitor your portfolio regularly to ensure it stays on track despite market volatility.', icon: LineChart },
        { title: 'Diversified Assets', desc: 'Investments span across mutual funds, direct equity, and debt instruments for optimal balance.', icon: BarChart3 }
    ],
    howItWorks: [
        { step: '1', title: 'Assessment', desc: 'We analyze your risk appetite, financial goals, and current standing.', icon: Briefcase },
        { step: '2', title: 'Strategy Design', desc: 'Creating a tailored asset allocation framework across multiple instruments.', icon: LineChart },
        { step: '3', title: 'Execution & Review', desc: 'Deploying capital and conducting periodic rebalancing to optimize returns.', icon: CheckCircle }
    ],
    whyChooseUs: [
        { title: 'Unbiased Advisory', desc: 'Our recommendations are strictly based on what is best for your portfolio.', icon: Shield },
        { title: 'Deep Market Knowledge', desc: 'Backed by 19+ years of rigorous market experience.', icon: Briefcase },
        { title: 'Risk-Adjusted Returns', desc: 'Focusing on protecting your capital while seeking robust growth.', icon: BarChart3 }
    ],
    relatedServices: [
        { name: 'Targeted Investment', href: '/targeted-investment' },
        { name: 'Wealth Basket', href: '/wealth-management-0' },
        { name: 'Mutual Funds', href: '/mutual-fund' }
    ]
}

export default function InvestmentPortfolioPage() {
    return <ServicePageTemplate data={portfolioData} />
}
