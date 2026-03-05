'use client'

import ServicePageTemplate, { ServiceData } from '@/components/shared/ServicePageTemplate'
import { ShieldCheck, HeartPulse, Umbrella, FileCheck, CheckCircle2, UserCheck } from 'lucide-react'

const insuranceData: ServiceData = {
    title: 'Insurance Policies',
    introText: [
        'Insurance is an important risk management tool that can protect you and your family from financial hardship caused by unfortunate events.',
        'We guide you in identifying the exact quantum of life and health cover required, ensuring you are adequately protected without being over-sold.'
    ],
    features: [
        { title: 'Term Life Insurance', desc: 'Pure protection plans providing maximum life cover at minimal premium costs.', icon: ShieldCheck },
        { title: 'Health Insurance', desc: 'Comprehensive medical coverage to protect against skyrocketing healthcare inflation.', icon: HeartPulse },
        { title: 'General Insurance', desc: 'Safeguard your assets including home, vehicles, and businesses against unforeseen damages.', icon: Umbrella }
    ],
    howItWorks: [
        { step: '1', title: 'Need Analysis', desc: 'Calculating your human life value and specific coverage requirements.', icon: FileCheck },
        { step: '2', title: 'Plan Selection', desc: 'Comparing top insurers to find the policy with the best claim settlement ratio.', icon: ShieldCheck },
        { step: '3', title: 'Claim Assistance', desc: 'End-to-end support in case of claim filing and processing.', icon: CheckCircle2 }
    ],
    whyChooseUs: [
        { title: 'IRDA Certified', desc: 'We are officially licensed professionals in the insurance sector.', icon: ShieldCheck },
        { title: 'Claim Support', desc: 'We stand by your family when they actually need the financial payout.', icon: UserCheck },
        { title: 'Customized Coverage', desc: 'No one-size-fits-all; we build coverage tailored to your liabilities.', icon: Umbrella }
    ],
    relatedServices: [
        { name: 'General Insurance', href: '/general-insurance' },
        { name: 'Investment Portfolio', href: '/investment-portfolio' },
        { name: 'Tax Optimization', href: '/tax-planning' }
    ]
}

export default function InsurancePlanningPage() {
    return <ServicePageTemplate data={insuranceData} />
}
