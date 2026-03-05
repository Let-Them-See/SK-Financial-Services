'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Linkedin, Facebook, Instagram, MessageCircle } from 'lucide-react'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-navy-dark text-white pt-20 pb-8 border-t-[6px] border-gold">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

                    {/* About Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link href="/" className="inline-block mb-6">
                            <div className="flex items-center gap-2 group cursor-pointer">
                                <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-navy font-playfair font-bold text-xl drop-shadow-md">
                                    SK
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-white font-playfair font-bold text-lg leading-none tracking-wide">Financial</span>
                                    <span className="text-gold font-sans text-xs font-semibold tracking-widest uppercase">Services</span>
                                </div>
                            </div>
                        </Link>
                        <p className="text-white/70 text-sm leading-relaxed mb-6 font-medium">
                            We build and review customized portfolios for our clients. Achieving financial excellence through customized investment strategies and expert advisory for over 19 years.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-gold hover:text-navy transition-all duration-300">
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-gold hover:text-navy transition-all duration-300">
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-gold hover:text-navy transition-all duration-300">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="#" aria-label="WhatsApp" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-gold hover:text-navy transition-all duration-300">
                                <MessageCircle className="w-4 h-4" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Quick Links Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h3 className="text-gold font-playfair font-bold text-xl mb-6">Quick Links</h3>
                        <ul className="space-y-3 font-medium text-sm">
                            <li><Link href="/" className="text-white/80 hover:text-gold hover:translate-x-1 inline-block transition-all duration-200">Home</Link></li>
                            <li><Link href="/AboutPage" className="text-white/80 hover:text-gold hover:translate-x-1 inline-block transition-all duration-200">About Us</Link></li>
                            <li><Link href="/calculator" className="text-white/80 hover:text-gold hover:translate-x-1 inline-block transition-all duration-200">Financial Calculators</Link></li>
                            <li><Link href="/blog" className="text-white/80 hover:text-gold hover:translate-x-1 inline-block transition-all duration-200">Knowledge Center</Link></li>
                            <li><Link href="/gallery" className="text-white/80 hover:text-gold hover:translate-x-1 inline-block transition-all duration-200">Gallery</Link></li>
                            <li><Link href="/contact-us" className="text-white/80 hover:text-gold hover:translate-x-1 inline-block transition-all duration-200">Contact Us</Link></li>
                        </ul>
                    </motion.div>

                    {/* Services Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-gold font-playfair font-bold text-xl mb-6">Our Services</h3>
                        <ul className="space-y-3 font-medium text-sm">
                            <li><Link href="/investment-portfolio" className="text-white/80 hover:text-gold hover:translate-x-1 inline-block transition-all duration-200">Investment Portfolio</Link></li>
                            <li><Link href="/insurance-planning" className="text-white/80 hover:text-gold hover:translate-x-1 inline-block transition-all duration-200">Insurance Policies</Link></li>
                            <li><Link href="/wealth-management-0" className="text-white/80 hover:text-gold hover:translate-x-1 inline-block transition-all duration-200">Wealth Basket</Link></li>
                            <li><Link href="/targeted-investment" className="text-white/80 hover:text-gold hover:translate-x-1 inline-block transition-all duration-200">Targeted Investment</Link></li>
                            <li><Link href="/tax-planning" className="text-white/80 hover:text-gold hover:translate-x-1 inline-block transition-all duration-200">Tax Optimization</Link></li>
                        </ul>
                    </motion.div>

                    {/* Contact Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h3 className="text-gold font-playfair font-bold text-xl mb-6">Get In Touch</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4 text-white/80 text-sm">
                                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5 text-gold" />
                                </div>
                                <div className="pt-1 leading-relaxed">
                                    Flat no 503, Fifth Floor, Ganjawala Residency Chs Ltd., Ganjawala Lane, Behind Borivali Petrol Pump, Borivali W
                                </div>
                            </li>
                            <li className="flex items-center gap-4 text-white/80 text-sm">
                                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                                    <Phone className="w-5 h-5 text-gold" />
                                </div>
                                <a href="tel:+917506715835" className="hover:text-gold transition-colors font-medium">
                                    +91 7506715835
                                </a>
                            </li>
                            <li className="flex items-center gap-4 text-white/80 text-sm">
                                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                                    <Mail className="w-5 h-5 text-gold" />
                                </div>
                                <a href="mailto:sheetal@skfinservices.com" className="hover:text-gold transition-colors font-medium">
                                    sheetal@skfinservices.com
                                </a>
                            </li>
                        </ul>
                    </motion.div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-white/50">
                    <p>© {currentYear} SK Financial Services. Registered AMFI Mutual Fund Distributor.</p>
                    <div className="flex gap-6">
                        <Link href="/PrivacyPolicy" className="hover:text-gold transition-colors">Privacy Policy</Link>
                        <Link href="/TermsConditions" className="hover:text-gold transition-colors">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
