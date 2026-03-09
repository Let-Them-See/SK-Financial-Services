import {
    Briefcase,
    ShieldCheck,
    PieChart,
    Target,
    FileText,
} from "lucide-react"
import Link from 'next/link'

const services = [
    {
        name: 'Investment Portfolio',
        description: 'Strategic investment planning built around your risk profile, financial goals, and timeline for optimal returns.',
        href: '/investment-portfolio',
        icon: Briefcase
    },
    {
        name: 'Insurance Policies',
        description: 'Comprehensive risk management solutions to protect you and your family from financial hardship and uncertainty.',
        href: '/insurance-planning',
        icon: ShieldCheck
    },
    {
        name: 'Wealth Basket',
        description: 'Curated wealth-building strategies that create an abundance of diversified material resources for lasting prosperity.',
        href: '/wealth-management-0',
        icon: PieChart
    },
    {
        name: 'Targeted Investment',
        description: 'Holistic, goal-oriented investment strategies designed to deliver focused results instead of random allocations.',
        href: '/targeted-investment',
        icon: Target
    },
    {
        name: 'Tax Optimization',
        description: 'Smart tax planning that optimizes your wealth creation while protecting your health, life, and valuable assets.',
        href: '/tax-planning',
        icon: FileText
    }
]

export default function ServicesSection() {
    return (
        <section id="services" className="bg-primary/5 py-24 lg:py-32 relative">
            <div className="mx-auto max-w-7xl px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto">
                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-accent">
                        Our Services
                    </p>
                    <h2 className="font-serif text-3xl font-bold text-foreground lg:text-5xl text-balance">
                        Comprehensive Financial Solutions
                    </h2>
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                        From wealth management to tax optimization, we offer end-to-end
                        financial services designed to secure and grow your financial future.
                    </p>
                </div>

                <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <Link href={service.href} key={service.name}>
                            <div className="group h-full rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-accent/30 cursor-pointer flex flex-col">
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/5 transition-colors group-hover:bg-accent/20">
                                    <service.icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors" />
                                </div>
                                <h3 className="mt-8 text-xl font-bold font-serif text-foreground group-hover:text-primary transition-colors">
                                    {service.name}
                                </h3>
                                <p className="mt-4 text-base leading-relaxed text-muted-foreground flex-grow">
                                    {service.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
