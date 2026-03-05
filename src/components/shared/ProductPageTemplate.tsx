'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight, Check } from 'lucide-react'

export interface ProductData {
    title: string
    tagline: string
    whatIsIt: string[]
    highlights: { title: string; desc: string; icon: any }[]
    benefits: { title: string; desc: string; icon: any }[]
    whoShouldInvest: string[]
    riskLevel: number // 1 to 5
    returnPotential: number // 1 to 5
}

export default function ProductPageTemplate({ data }: { data: ProductData }) {
    const container = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    }

    return (
        <div className="bg-white min-h-screen">
            {/* 1. Hero Banner */}
            <section className="relative bg-navy py-16 lg:py-24 overflow-hidden pt-28">
                <div className="absolute top-1/2 left-1/2 -transparent-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/10 rounded-full blur-3xl pointer-events-none"></div>
                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center gap-2 text-xs font-bold text-white/50 uppercase tracking-widest mb-6"
                    >
                        <Link href="/" className="hover:text-gold transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3 text-gold" />
                        <span className="text-gold">Products</span>
                        <ChevronRight className="w-3 h-3 text-gold" />
                        <span className="text-white">{data.title}</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6"
                    >
                        {data.title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-white/80 text-xl font-medium max-w-2xl mb-10"
                    >
                        {data.tagline}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link
                            href="/contact-us"
                            className="bg-gold text-navy px-10 py-5 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(255,215,0,0.2)] hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            Start Investing Today
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* 2. What Is It? */}
            <section className="py-20 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative aspect-[4/3] bg-light-gray rounded-[2rem] overflow-hidden shadow-2xl flex items-center justify-center p-8 border border-gray-100"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-navy/5 to-transparent"></div>
                            <div className="text-center">
                                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg mx-auto mb-6">
                                    <span className="text-4xl font-playfair font-bold text-navy">{data.title.charAt(0)}</span>
                                </div>
                                <span className="text-navy font-bold tracking-widest uppercase text-sm opacity-50">{data.title}</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-1 bg-gold rounded-full"></div>
                                <span className="text-gold font-bold uppercase tracking-widest text-sm">Overview</span>
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-navy mb-8">
                                What is {data.title}?
                            </h2>
                            <div className="space-y-6">
                                {data.whatIsIt.map((p, idx) => (
                                    <p key={idx} className="text-gray-600 leading-relaxed text-lg">
                                        {p}
                                    </p>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. Key Highlights */}
            <section className="py-20 lg:py-24 bg-light-gray">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-navy mb-4">Key Highlights</h2>
                        <div className="w-16 h-1 bg-gold mx-auto rounded-full"></div>
                    </div>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {data.highlights.map((highlight, idx) => (
                            <motion.div
                                key={idx}
                                variants={item}
                                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gold/50 group flex flex-col items-center text-center"
                            >
                                <div className="w-14 h-14 bg-navy/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
                                    <highlight.icon className="w-6 h-6 text-navy" />
                                </div>
                                <h3 className="text-lg font-bold text-navy mb-3 font-playfair">{highlight.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{highlight.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 4. Risk / Return Profile & Who Should Invest */}
            <section className="py-20 lg:py-24 bg-navy text-white relative">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">

                        {/* Risk-Return Meter */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/10"
                        >
                            <h3 className="text-2xl font-playfair font-bold text-white mb-10">Risk vs. Return Profile</h3>

                            <div className="space-y-12">
                                {/* Risk Bar */}
                                <div>
                                    <div className="flex justify-between mb-3 text-sm font-bold tracking-widest uppercase">
                                        <span className="text-white/70">Risk Level</span>
                                        <span className="text-gold">{data.riskLevel} / 5</span>
                                    </div>
                                    <div className="flex gap-2">
                                        {[1, 2, 3, 4, 5].map(level => (
                                            <div
                                                key={level}
                                                className={`h-4 flex-1 rounded-full ${level <= data.riskLevel ? 'bg-gold shadow-[0_0_10px_rgba(255,215,0,0.5)]' : 'bg-white/10'}`}
                                            ></div>
                                        ))}
                                    </div>
                                    <div className="flex justify-between mt-2 text-xs text-white/40 font-bold uppercase">
                                        <span>Low</span>
                                        <span>High</span>
                                    </div>
                                </div>

                                {/* Return Bar */}
                                <div>
                                    <div className="flex justify-between mb-3 text-sm font-bold tracking-widest uppercase">
                                        <span className="text-white/70">Return Potential</span>
                                        <span className="text-gold">{data.returnPotential} / 5</span>
                                    </div>
                                    <div className="flex gap-2">
                                        {[1, 2, 3, 4, 5].map(level => (
                                            <div
                                                key={level}
                                                className={`h-4 flex-1 rounded-full ${level <= data.returnPotential ? 'bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]' : 'bg-white/10'}`}
                                            ></div>
                                        ))}
                                    </div>
                                    <div className="flex justify-between mt-2 text-xs text-white/40 font-bold uppercase">
                                        <span>Conservative</span>
                                        <span>Aggressive</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Who Should Invest */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col justify-center"
                        >
                            <h3 className="text-3xl lg:text-4xl font-playfair font-bold text-white mb-8">Who Should Invest?</h3>
                            <div className="flex flex-wrap gap-4">
                                {data.whoShouldInvest.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-white/10 text-white px-6 py-3 rounded-full font-bold text-sm border border-white/20 shadow-lg"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <p className="mt-8 text-white/70 leading-relaxed text-lg">
                                If your investor profile matches these characteristics, {data.title} could be a vital component of your overall portfolio strategy.
                            </p>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* 5. Direct Benefits */}
            <section className="py-20 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-navy mb-4">Core Benefits</h2>
                        <div className="w-16 h-1 bg-gold mx-auto rounded-full"></div>
                    </div>
                    <div className="max-w-4xl mx-auto space-y-6">
                        {data.benefits.map((benefit, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex items-start gap-6 bg-light-gray p-8 rounded-2xl border border-gray-100"
                            >
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-gold">
                                    <Check className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold font-playfair text-navy mb-2">{benefit.title}</h4>
                                    <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. CTA Footer */}
            <section className="py-20 bg-gold text-navy text-center relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-4xl font-playfair font-bold mb-6">Want to know more about {data.title}?</h2>
                    <p className="text-xl font-medium mb-10 opacity-80 max-w-2xl mx-auto">
                        Get in touch with our experts to discuss how this product fits into your wealth management strategy.
                    </p>
                    <Link
                        href="/contact-us"
                        className="inline-block bg-navy text-white px-12 py-5 rounded-full font-bold text-lg shadow-2xl hover:bg-navy-dark hover:-translate-y-1 transition-all duration-300"
                    >
                        Contact Advisor
                    </Link>
                </div>
            </section>
        </div>
    )
}
