import Link from 'next/link'
import { ArrowUp, MapPin, Phone, Mail, Linkedin, Facebook, Instagram, MessageCircle } from "lucide-react"

const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/AboutPage" },
    { label: "Financial Calculators", href: "/calculators" },
    { label: "Knowledge Center", href: "/blog" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact Us", href: "/contact-us" },
]

const services = [
    { label: "Investment Portfolio", href: "/investment-portfolio" },
    { label: "Insurance Policies", href: "/insurance-planning" },
    { label: "Wealth Basket", href: "/wealth-management-0" },
    { label: "Targeted Investment", href: "/targeted-investment" },
    { label: "Tax Optimization", href: "/tax-planning" },
]

export default function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground">
            <div className="mx-auto max-w-7xl px-6 pt-20 pb-12">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">

                    {/* Brand & About */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-block mb-6 bg-white p-2 rounded-xl">
                            <img src="/logo.jpg" alt="SK Financial Services" className="h-[75px] w-auto object-contain" />
                        </Link>
                        <p className="text-sm leading-relaxed opacity-80 mb-6 font-medium pr-4">
                            We build and review customized portfolios for our clients. Achieving financial excellence through customized investment strategies and expert advisory for over 19 years.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all">
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all">
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all">
                                <Instagram className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest opacity-60 mb-6">
                            Quick Links
                        </h3>
                        <ul className="flex flex-col gap-4">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm font-medium opacity-80 transition-opacity hover:opacity-100 hover:text-accent"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest opacity-60 mb-6">
                            Our Services
                        </h3>
                        <ul className="flex flex-col gap-4">
                            {services.map((service) => (
                                <li key={service.label}>
                                    <Link
                                        href={service.href}
                                        className="text-sm font-medium opacity-80 transition-opacity hover:opacity-100 hover:text-accent"
                                    >
                                        {service.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Certifications */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest opacity-60 mb-6">
                            Get In Touch
                        </h3>
                        <ul className="flex flex-col gap-5 mb-8">
                            <li className="flex items-start gap-4">
                                <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                                <span className="text-sm font-medium opacity-80 leading-relaxed">
                                    Flat no 503, Fifth Floor, Ganjawala Residency Chs Ltd., Ganjawala Lane, Behind Borivali Petrol Pump, Borivali W
                                </span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Phone className="w-5 h-5 text-accent shrink-0" />
                                <a href="tel:+917506715835" className="text-sm font-medium opacity-80 hover:text-accent transition-colors">
                                    +91 7506715835
                                </a>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail className="w-5 h-5 text-accent shrink-0" />
                                <a href="mailto:sheetal@skfinservices.com" className="text-sm font-medium opacity-80 hover:text-accent transition-colors">
                                    sheetal@skfinservices.com
                                </a>
                            </li>
                        </ul>

                        <div className="pt-6 border-t border-primary-foreground/10">
                            <h3 className="text-xs font-bold uppercase tracking-widest opacity-60 mb-3">
                                Certifications
                            </h3>
                            <div className="flex flex-col gap-2">
                                <span className="text-xs font-medium opacity-70">AMFI Registered Mutual Fund Distributor</span>
                                <span className="text-xs font-medium opacity-70">IRDA Certified Insurance Consultant</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/15 pt-8 md:flex-row">
                    <p className="text-xs font-medium opacity-60">
                        {`\u00A9 ${new Date().getFullYear()} SK Financial Services. All rights reserved.`}
                    </p>
                    <div className="flex items-center gap-6">
                        <Link
                            href="/PrivacyPolicy"
                            className="text-xs font-medium opacity-60 transition-opacity hover:opacity-100 hover:text-accent"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/TermsConditions"
                            className="text-xs font-medium opacity-60 transition-opacity hover:opacity-100 hover:text-accent"
                        >
                            Terms & Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
