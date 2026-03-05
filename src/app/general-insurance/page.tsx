'use client'

import ProductPageTemplate, { ProductData } from '@/components/shared/ProductPageTemplate'
import { Car, Home, HeartPulse, HardHat } from 'lucide-react'

const giData: ProductData = {
    title: 'General Insurance',
    tagline: 'Protect your valuable assets against unexpected risks and liabilities.',
    whatIsIt: [
        'General Insurance essentially covers all the insurance policies apart from Life Insurance. It includes health insurance, motor insurance, travel insurance, and home insurance.',
        'It provides financial protection against property damages or liabilities arising out of accidents, illnesses, or natural calamities.'
    ],
    highlights: [
        { title: 'Health Protect', desc: 'Comprehensive medical coverage during inflations.', icon: HeartPulse },
        { title: 'Motor Protect', desc: 'Coverage for damage to or by your vehicle.', icon: Car },
        { title: 'Home Protect', desc: 'Safeguarding your most precious tangible asset.', icon: Home },
        { title: 'Asset Protect', desc: 'Business, marine, and engineering insurances.', icon: HardHat }
    ],
    benefits: [
        { title: 'Financial Security', desc: 'Prevents out-of-pocket expenses during massive emergencies.', icon: null },
        { title: 'Mandatory Compliance', desc: 'Third-party motor insurance is a legal requirement in India.', icon: null },
        { title: 'Peace of Mind', desc: 'Navigate through life without fearing total financial ruin due to accidents.', icon: null }
    ],
    whoShouldInvest: ['Vehicle Owners', 'Home Owners', 'Business Owners', 'Families'],
    riskLevel: 1,
    returnPotential: 1
}

export default function GeneralInsurancePage() {
    return <ProductPageTemplate data={giData} />
}
