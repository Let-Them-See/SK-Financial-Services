'use client'

import ServicePageTemplate, { ServiceData } from '@/components/shared/ServicePageTemplate'
import { Target, Flag, MapPin, Compass, Trophy } from 'lucide-react'

const targetedData: ServiceData = {
    title: 'Targeted Investment',
    introText: [
        'Making a holistic investment choice is always preferred over making random, disconnected investments.',
        'Targeted investments focus directly on your life milestones—whether it is buying a home, securing your child’s education, or building a retirement corpus. Every rupee is assigned a specific mission.'
    ],
    features: [
        { title: 'Milestone Mapping', desc: 'Quantifying the exact future cost of your goals including inflation.', icon: MapPin },
        { title: 'Time-Horizon Matching', desc: 'Selecting instruments whose maturity matches your required timeframe.', icon: Compass },
        { title: 'Goal Shielding', desc: 'Securing near-term goals in safe-haven assets as the deadline approaches.', icon: Shield }
    ],
    howItWorks: [
        { step: '1', title: 'Define Goals', desc: 'Listing all short, medium, and long-term financial objectives.', icon: Target },
        { step: '2', title: 'Quantify Corpus', desc: 'Calculating the required corpus applying future inflation rates.', icon: Calculator },
        { step: '3', title: 'SIP/Lump Sum Mapping', desc: 'Creating dedicated systematic investments mapped specifically to each goal.', icon: Flag }
    ],
    whyChooseUs: [
        { title: 'Precision Planning', desc: 'Eliminating guesswork from your investment journey.', icon: Target },
        { title: 'Interactive Tools', desc: 'State-of-the-art calculators to track your exact progress.', icon: Trophy },
        { title: 'Emotional Discipline', desc: 'Preventing panic-selling by keeping you focused on the end goal.', icon: Compass }
    ],
    relatedServices: [
        { name: 'Investment Portfolio', href: '/investment-portfolio' },
        { name: 'Mutual Funds', href: '/mutual-fund' },
        { name: 'Wealth Basket', href: '/wealth-management-0' }
    ]
}

// Ensure missing icons are imported
import { Shield, Calculator } from 'lucide-react'

export default function TargetedInvestmentPage() {
    return <ServicePageTemplate data={targetedData} />
}
