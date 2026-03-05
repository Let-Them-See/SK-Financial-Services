'use client'

import ProductPageTemplate, { ProductData } from '@/components/shared/ProductPageTemplate'
import { ShieldCheck, Banknote, CalendarClock } from 'lucide-react'

const fdData: ProductData = {
    title: 'Fixed Deposit',
    tagline: 'The timeless, rock-solid instrument for guaranteed capital preservation.',
    whatIsIt: [
        'A Corporate Fixed Deposit is an investment instrument offered by non-banking financial companies (NBFCs) and manufacturing companies that provides a higher rate of interest than regular bank FDs until the given maturity date.',
        'It is the foundation of any conservative portfolio, providing absolute peace of mind and steady, predictable cash flows.'
    ],
    highlights: [
        { title: 'Guaranteed Returns', desc: 'Interest rates are locked in at the time of deposit.', icon: Banknote },
        { title: 'Capital Safety', desc: 'Rated highly by credit rating agencies like CRISIL and ICRA.', icon: ShieldCheck },
        { title: 'Flexible Payouts', desc: 'Choose monthly, quarterly, or cumulative interest payouts.', icon: CalendarClock },
        { title: 'Senior Citizen Bonus', desc: 'Extra interest rates specifically for seniors.', icon: ShieldCheck }
    ],
    benefits: [
        { title: 'Predictability', desc: 'Know exactly what you will earn on your maturity date on day one.', icon: null },
        { title: 'Immunity to Volatility', desc: 'Market crashes have zero impact on the principal or interest of an FD.', icon: null },
        { title: 'Compounding', desc: 'Cumulative FDs reinvest your interest, delivering significant maturity amounts.', icon: null }
    ],
    whoShouldInvest: ['Conservative Investors', 'Retirees', 'Capital Preservers', 'Short-term Goal Planners'],
    riskLevel: 1,
    returnPotential: 2
}

export default function FixedDepositPage() {
    return <ProductPageTemplate data={fdData} />
}
