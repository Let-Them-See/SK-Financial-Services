import {
  BarChart3,
  Shield,
  Wallet,
  FileText,
  PieChart,
  Target,
} from "lucide-react"

const services = [
  {
    icon: BarChart3,
    title: "Investment Portfolio",
    description:
      "Strategic investment planning built around your risk profile, financial goals, and timeline for optimal returns.",
  },
  {
    icon: Shield,
    title: "Insurance Policies",
    description:
      "Comprehensive risk management solutions to protect you and your family from financial hardship and uncertainty.",
  },
  {
    icon: Wallet,
    title: "Wealth Basket",
    description:
      "Curated wealth-building strategies that create an abundance of diversified material resources for lasting prosperity.",
  },
  {
    icon: FileText,
    title: "Tax Optimization",
    description:
      "Smart tax planning that optimizes your wealth creation while protecting your health, life, and valuable assets.",
  },
  {
    icon: PieChart,
    title: "Mutual Funds",
    description:
      "Expert-selected mutual fund portfolios across equities, bonds, and hybrid instruments tailored to your goals.",
  },
  {
    icon: Target,
    title: "Targeted Investment",
    description:
      "Holistic, goal-oriented investment strategies designed to deliver focused results instead of random allocations.",
  },
]

export function Services() {
  return (
    <section id="services" className="bg-primary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Our Services
          </p>
          <h2 className="font-serif text-3xl font-bold text-primary-foreground lg:text-4xl text-balance">
            Comprehensive Financial Solutions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-primary-foreground/70">
            From wealth management to tax optimization, we offer end-to-end
            financial services designed to secure and grow your financial future.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 p-8 transition-all duration-300 hover:bg-primary-foreground/10 hover:border-accent/30"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-accent/20 transition-colors group-hover:bg-accent/30">
                <service.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-primary-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/65">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
