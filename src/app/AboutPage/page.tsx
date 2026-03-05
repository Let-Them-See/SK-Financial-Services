'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight, Award, ShieldCheck, CheckCircle2 } from 'lucide-react'
import StatsBar from '@/components/home/StatsBar'

const timeline = [
    { year: '2005', title: 'Foundation', desc: 'SK Financial Services was established with a vision to provide trustworthy financial guidance.' },
    { year: '2010', title: 'AMFI Certification', desc: 'Achieved recognized AMFI Mutual Fund Distributor status.' },
    { year: '2015', title: 'IRDA Certification', desc: 'Expanded our services into comprehensive Insurance planning.' },
    { year: '2020', title: '₹100Cr+ AUM', desc: 'Crossed a major milestone in assets under management across all our clients.' },
    { year: 'Today', title: 'Leading Advisory', desc: 'Serving 1,000+ satisfied clients globally with customized NRI portfolios.' },
]

export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* 1. Hero Banner */}
            <section className="relative bg-navy py-20 lg:py-32 overflow-hidden">
                {/* Animated Background Mesh */}
                <div className="absolute inset-0 opacity-10">
                    <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid-about" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FFD700" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid-about)" />
                    </svg>
                </div>

                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6"
                    >
                        About Us
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center justify-center gap-2 text-sm font-bold text-white/70 uppercase tracking-widest"
                    >
                        <Link href="/" className="hover:text-gold transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4 text-gold" />
                        <span className="text-gold">About Us</span>
                    </motion.div>
                </div>
            </section>

            {/* 2. Intro & Stats (Reusing StatsBar) */}
            <div className="-mt-16 relative z-20">
                <StatsBar />
            </div>

            {/* 3. Founder / Team Section */}
            <section className="py-24 bg-light-gray">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center justify-center gap-4 mb-4"
                        >
                            <div className="w-12 h-1 bg-gold rounded-full"></div>
                            <span className="text-gold font-bold uppercase tracking-widest text-sm">Leadership</span>
                            <div className="w-12 h-1 bg-gold rounded-full"></div>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-playfair font-bold text-navy"
                        >
                            Meet Our Founder
                        </motion.h2>
                    </div>

                    <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100 max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
                        {/* Founder Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative w-full max-w-sm shrink-0"
                        >
                            <div className="aspect-[4/5] bg-navy rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                                {/* Fallback image */}
                                <div className="w-full h-full flex flex-col items-center justify-center text-white/50 text-center p-8 bg-gradient-to-br from-navy to-navy-dark">
                                    <span className="text-6xl font-playfair font-bold text-gold opacity-50 mb-4">SK</span>
                                    <span>Sheetal Khanna</span>
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gold rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                                <Award className="w-10 h-10 text-navy" />
                            </div>
                        </motion.div>

                        {/* Founder Bio */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-grow space-y-6"
                        >
                            <h3 className="text-3xl font-playfair font-bold text-navy">Sheetal Khanna</h3>
                            <p className="text-gold font-bold uppercase tracking-widest text-sm">Founder & Chief Advisor</p>

                            <div className="text-gray-600 leading-relaxed space-y-4">
                                <p>
                                    With over 19 years of dedicated experience in the financial services sector, Sheetal Khanna has built a reputation for providing honest, customized, and deeply effective financial strategies.
                                </p>
                                <p>
                                    Her profound knowledge of mutual funds, equities, and portfolio management has successfully guided over 1,000 clients across the globe. She specializes particularly in resolving complex NRI investment portfolios, ensuring long-term wealth preservation and growth.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 pt-6 mt-6 border-t border-gray-100">
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-gold" />
                                    <span className="text-navy font-bold">Risk Management</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-gold" />
                                    <span className="text-navy font-bold">Strategic Allocation</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-gold" />
                                    <span className="text-navy font-bold">Unbiased Advisory</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 4. Timeline Section */}
            <section className="py-24 bg-navy text-white relative overflow-hidden">
                {/* Background Blur */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl"></div>

                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6"
                        >
                            Our Journey
                        </motion.h2>
                        <p className="text-white/70 max-w-2xl mx-auto">Tracing our steady path of growth and trust since inception.</p>
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        {/* The vertical line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-white/10 md:-translate-x-1/2 rounded-full"></div>

                        <div className="space-y-12">
                            {timeline.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className={`relative flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gold rounded-full transform -translate-x-[6px] md:-translate-x-1/2 mt-1.5 shadow-[0_0_10px_rgba(255,215,0,0.5)] z-10"></div>

                                    {/* Content Box */}
                                    <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}>
                                        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-gold/50 transition-colors">
                                            <span className="text-gold font-bold text-xl mb-2 inline-block font-playfair">{item.year}</span>
                                            <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                                            <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Certifications Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-playfair font-bold text-navy mb-12"
                    >
                        Certified & Recognized By
                    </motion.h2>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-16">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-light-gray px-12 py-8 rounded-2xl border border-gray-200 flex flex-col items-center gap-4 hover:shadow-xl transition-shadow w-full sm:w-auto"
                        >
                            <Award className="w-16 h-16 text-gold mb-2" />
                            <div className="text-navy font-bold text-2xl tracking-widest">AMFI</div>
                            <div className="text-gray-500 text-xs font-medium uppercase">Registered Mutual Fund Distributor</div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-light-gray px-12 py-8 rounded-2xl border border-gray-200 flex flex-col items-center gap-4 hover:shadow-xl transition-shadow w-full sm:w-auto"
                        >
                            <ShieldCheck className="w-16 h-16 text-gold mb-2" />
                            <div className="text-navy font-bold text-2xl tracking-widest">IRDA</div>
                            <div className="text-gray-500 text-xs font-medium uppercase">Certified Insurance Advisor</div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}
