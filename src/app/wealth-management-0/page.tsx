'use client'

import ServicePageTemplate, { ServiceData } from '@/components/shared/ServicePageTemplate'
import { PieChart, Landmark, TrendingUp, Coins, Building, ShieldCheck } from 'lucide-react'

const wealthData: ServiceData = {
    title: 'Wealth Basket',
    introText: [
        'Wealth is an abundance of variable material resources. However, the meaning of wealth is not straightforward; it varies according to your perspective and life stage.',
        'Our Wealth Basket approach curates a holistic ecosystem of high-performing assets tailored strictly to your vision of wealth, ensuring generational preservation and growth.'
    ],
    features: [
        { title: 'Holistic Approach', desc: 'Creating a unified basket of equity, debt, real estate, and alternate assets.', icon: PieChart },
        { title: 'Generational Planning', desc: 'Structuring your wealth to ensure smooth transition across generations.', icon: Landmark },
        { title: 'High-Net-Worth Advisory', desc: 'Exclusive access to specialized investment vehicles like PMS and AIFs.', icon: TrendingUp }
    ],
    howItWorks: [
        { step: '1', title: 'Net Worth Analysis', desc: 'Comprehensive audit of your existing assets and liabilities.', icon: Coins },
        { step: '2', title: 'Asset Allocation', desc: 'Distributing capital across diverse asset classes to mitigate systemic risks.', icon: PieChart },
        { step: '3', title: 'Ongoing Management', desc: 'Dynamic recalibration of the basket based on macro-economic shifts.', icon: TrendingUp }
    ],
    whyChooseUs: [
        { title: 'Exclusive Access', desc: 'Gateway to premium wealth creation instruments.', icon: Building },
        { title: 'Preservation Focus', desc: 'Protecting established wealth from inflation and taxation.', icon: Landmark },
        { title: 'Personalized Attention', desc: 'Dedicated advisory tailored for HNI and NRI requirements.', icon: ShieldCheck }
    ],
    relatedServices: [
        { name: 'PMS / AIF', href: '/pms' },
        { name: 'Unlisted Equity', href: '/unlisted-equity' },
        { name: 'Investment Portfolio', href: '/investment-portfolio' }
    ]
}

export default function WealthManagementPage() {
    return <ServicePageTemplate data={wealthData} />
}
