import { Award, BadgeCheck, Briefcase } from "lucide-react"

const credentials = [
  {
    icon: BadgeCheck,
    title: "AMFI Certified",
    description: "Certified Mutual Fund distributor recognized by the Association of Mutual Fund of India",
  },
  {
    icon: Award,
    title: "IRDA Certified",
    description: "Certified Insurance Consultant by the Insurance Regulatory Development Authority",
  },
  {
    icon: Briefcase,
    title: "NRI Specialist",
    description: "Specialized expertise in managing NRI portfolios with tailored investment strategies",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-lg">
              <img
                src="/images/about-sheetal.jpg"
                alt="Sheetal Khanna, founder of SK Financial Services"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 rounded-lg bg-primary px-8 py-6 text-primary-foreground shadow-lg md:bottom-8 md:right-[-2rem]">
              <p className="text-4xl font-bold font-serif">19+</p>
              <p className="text-sm opacity-80">Years of Trusted Service</p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              About Us
            </p>
            <h2 className="font-serif text-3xl font-bold text-foreground lg:text-4xl text-balance">
              Where Expertise Meets Excellence in Financial Advisory
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Welcome to SK Financial Services, founded by Sheetal Khanna. With
              over 19 years of experience, we cater to 1,000+ satisfied clients,
              manage 200Cr+ in assets, and specialize in NRI portfolios. We are
              your trusted partner for achieving financial stability and growth.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Our philosophy is simple: understand each client{"'"}s unique
              financial goals, and craft personalized strategies that deliver
              long-term results. We believe in building relationships, not just
              portfolios.
            </p>

            {/* Credentials */}
            <div className="mt-10 flex flex-col gap-6">
              {credentials.map((cred) => (
                <div key={cred.title} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/15">
                    <cred.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{cred.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {cred.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
