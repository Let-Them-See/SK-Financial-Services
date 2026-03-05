'use client'

import ServicePageTemplate, { ServiceData } from '@/components/shared/ServicePageTemplate'
import { FileText, Calculator, PiggyBank, Scale, FileCheck, CheckCircle2 } from 'lucide-react'

const taxData: ServiceData = {
    title: 'Tax Optimization',
    introText: [
        'Tax planning involves optimizing your wealth creation and protecting your health, life, and assets while simultaneously minimizing your tax liability within the legal framework.',
        'It is not merely about buying an ELSS fund at the end of the year; it is a year-round strategy ensuring you retain maximum wealth from your gross income.'
    ],
    features: [
        { title: 'Section 80C Utilization', desc: 'Maximizing tax deductions through smart investments like ELSS and PPF.', icon: Calculator },
        { title: 'Tax-Loss Harvesting', desc: 'Strategically offsetting capital gains with capital losses to reduce overall tax burden.', icon: Scale },
        { title: 'Strategic Rebalancing', desc: 'Ensuring portfolio shifts have minimal tax friction.', icon: FileText }
    ],
    howItWorks: [
        { step: '1', title: 'Tax Audit', desc: 'Reviewing your current income bracket and existing deductions.', icon: FileCheck },
        { step: '2', title: 'Instrument Selection', desc: 'Deploying capital into tax-efficient vehicles matching your risk profile.', icon: PiggyBank },
        { step: '3', title: 'Filing Assistance', desc: 'Providing necessary capital gains statements for smooth tax filing.', icon: CheckCircle2 }
    ],
    whyChooseUs: [
        { title: 'Comprehensive Approach', desc: 'Integrating tax planning with your overall financial goals.', icon: Scale },
        { title: 'Up-to-Date Knowledge', desc: 'We stay current with every union budget change and tax slab update.', icon: FileText },
        { title: 'Maximized Savings', desc: 'Ensuring you don’t pay a rupee more than legally required.', icon: PiggyBank }
    ],
    relatedServices: [
        { name: 'Mutual Funds (ELSS)', href: '/mutual-fund' },
        { name: 'Insurance Policies', href: '/insurance-planning' },
        { name: 'Investment Portfolio', href: '/investment-portfolio' }
    ]
}

export default function TaxPlanningPage() {
    return <ServicePageTemplate data={taxData} />
}
