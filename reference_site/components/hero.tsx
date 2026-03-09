import { ArrowRight, Shield, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const stats = [
  { icon: TrendingUp, value: "200Cr+", label: "Assets Managed" },
  { icon: Users, value: "1,000+", label: "Satisfied Clients" },
  { icon: Shield, value: "19+", label: "Years Experience" },
]

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-32 lg:py-40">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            AMFI & IRDA Certified Advisor
          </p>
          <h1 className="font-serif text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl text-balance">
            Expert Financial Guidance for a Secure Future
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
            Founded by Sheetal Khanna with over 19 years of experience, SK
            Financial Services is your trusted partner for achieving financial
            stability and growth.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base px-8"
            >
              <a href="#contact">
                Start Your Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base px-8"
            >
              <a href="#services">Explore Services</a>
            </Button>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:mt-24">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-4 rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 px-6 py-5 backdrop-blur-sm"
            >
              <stat.icon className="h-8 w-8 text-accent shrink-0" />
              <div>
                <p className="text-2xl font-bold text-primary-foreground">
                  {stat.value}
                </p>
                <p className="text-sm text-primary-foreground/70">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
