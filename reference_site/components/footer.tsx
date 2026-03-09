import { ArrowUp } from "lucide-react"

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Planning Tools", href: "#tools" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
]

const services = [
  "Investment Portfolio",
  "Insurance Policies",
  "Wealth Basket",
  "Tax Optimization",
  "Mutual Funds",
  "Targeted Investment",
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold leading-tight tracking-tight">
                SK Financial
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] opacity-70">
                Services
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed opacity-70">
              Your trusted partner for achieving financial stability and growth.
              AMFI & IRDA certified with over 19 years of experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider opacity-60">
              Quick Links
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm opacity-70 transition-opacity hover:opacity-100"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider opacity-60">
              Services
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm opacity-70">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider opacity-60">
              Certifications
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li className="text-sm opacity-70">
                AMFI Registered Mutual Fund Distributor
              </li>
              <li className="text-sm opacity-70">
                IRDA Certified Insurance Consultant
              </li>
              <li className="text-sm opacity-70">NRI Portfolio Specialist</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/15 pt-8 md:flex-row">
          <p className="text-xs opacity-50">
            {`\u00A9 ${new Date().getFullYear()} SK Financial Services. All rights reserved.`}
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs opacity-50 transition-opacity hover:opacity-80"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs opacity-50 transition-opacity hover:opacity-80"
            >
              Terms of Service
            </a>
            <a
              href="#home"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/20 opacity-60 transition-opacity hover:opacity-100"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
