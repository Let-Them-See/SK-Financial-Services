'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react'

export interface ServiceData {
    title: string
    introText: string[]
    features: { title: string; desc: string; icon: any }[]
    howItWorks: { step: string; title: string; desc: string; icon: any }[]
    whyChooseUs: { title: string; desc: string; icon: any }[]
    relatedServices: { name: string; href: string }[]
}

export default function ServicePageTemplate({ data }: { data: ServiceData }) {
    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    }

    const staggerItem = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    }

    return (
        <div className="bg-white min-h-screen">
            {/* 1. Top Hero Banner */}
            <section className="relative bg-navy py-16 lg:py-24 overflow-hidden pt-28">
                <div className="absolute inset-0 bg-gradient-to-r from-navy-dark to-transparent opacity-80 z-0"></div>
                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4 flex flex-col items-start gap-4"
                    >
                        {data.title}
                        <div className="w-24 h-1.5 bg-gold rounded-full"></div>
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-2 text-sm font-bold text-white/70 uppercase tracking-wide mt-8"
                    >
                        <Link href="/" className="hover:text-gold transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4 text-gold" />
                        <span className="text-gold">{data.title}</span>
                    </motion.div>
                </div>
            </section>

            {/* 2. Introduction Section */}
            <section className="py-20 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-navy mb-6">
                                Understanding {data.title}
                            </h2>
                            {data.introText.map((paragraph, idx) => (
                                <p key={idx} className="text-gray-600 leading-relaxed text-lg">
                                    {paragraph}
                                </p>
                            ))}
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative aspect-video lg:aspect-square bg-light-gray rounded-3xl overflow-hidden shadow-2xl border-4 border-white flex items-center justify-center p-12 text-center text-gray-400"
                        >
                            {/* Decorative side image placeholder */}
                            <div className="absolute inset-0 bg-gradient-to-br from-light-gray to-gray-200"></div>
                            <span className="relative z-10 font-medium">Decorative Visual for {data.title}</span>
                            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gold rounded-full blur-2xl opacity-40"></div>
                            <div className="absolute -top-4 -right-4 w-32 h-32 bg-navy rounded-full blur-2xl opacity-20"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. Key Features / Benefits */}
            <section className="py-20 lg:py-24 bg-light-gray">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-navy mb-4">Key Benefits</h2>
                        <div className="w-16 h-1 bg-gold mx-auto rounded-full"></div>
                    </div>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {data.features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                variants={staggerItem}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
                            >
                                <div className="w-14 h-14 rounded-full bg-navy/5 flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300">
                                    <feature.icon className="w-7 h-7 text-navy" />
                                </div>
                                <h3 className="text-xl font-bold text-navy mb-4 font-playfair">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed line-clamp-4">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 4. How It Works */}
            <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-navy mb-4">How It Works</h2>
                        <div className="w-16 h-1 bg-gold mx-auto rounded-full"></div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-12 lg:gap-8 relative">
                        {/* Connecting line for desktop */}
                        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 z-0"></div>

                        {data.howItWorks.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className="relative z-10 flex flex-col items-center text-center"
                            >
                                <div className="w-24 h-24 rounded-full bg-white border-4 border-gold shadow-xl flex items-center justify-center mb-6 relative group">
                                    <step.icon className="w-10 h-10 text-navy group-hover:scale-110 transition-transform" />
                                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-navy text-white font-bold flex items-center justify-center text-sm">
                                        {step.step}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-navy mb-3 font-playfair">{step.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Why Choose Us */}
            <section className="py-20 lg:py-24 bg-navy text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-white mb-4">Why Choose SK Financial Services</h2>
                        <div className="w-16 h-1 bg-gold mx-auto rounded-full"></div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {data.whyChooseUs.map((reason, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15 }}
                                className="bg-navy-dark p-8 rounded-2xl border border-white/10"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <CheckCircle2 className="w-8 h-8 text-gold shrink-0" />
                                    <h3 className="text-xl font-bold font-playfair">{reason.title}</h3>
                                </div>
                                <p className="text-white/70 leading-relaxed">{reason.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. CTA Strip */}
            <section className="py-16 bg-gold relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2720%27 height=%2720%27 viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27%23002244%27 fill-opacity=%270.05%27 fill-rule=%27evenodd%27%3E%3Ccircle cx=%273%27 cy=%273%27 r=%273%27/%3E%3Cg transform=%27translate%27/%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
                <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-navy mb-2">Ready to secure your financial future?</h2>
                        <p className="text-navy/80 font-medium text-lg">Talk to our experts today and get a personalized strategy.</p>
                    </div>
                    <Link
                        href="/contact-us"
                        className="bg-navy text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:bg-navy-dark hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 whitespace-nowrap"
                    >
                        Get a Free Consultation
                    </Link>
                </div>
            </section>

            {/* 7. Related Services */}
            <section className="py-20 bg-light-gray">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                        <div>
                            <h2 className="text-3xl font-playfair font-bold text-navy mb-2">Explore Related Services</h2>
                            <div className="w-12 h-1 bg-gold rounded-full"></div>
                        </div>
                        <Link href="/" className="text-navy font-bold hover:text-gold transition-colors flex items-center gap-2">
                            View All <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {data.relatedServices.map((service, idx) => (
                            <Link
                                key={idx}
                                href={service.href}
                                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-gold transition-all duration-300 group flex items-center justify-between"
                            >
                                <span className="font-bold text-navy font-playfair text-lg group-hover:text-gold transition-colors">{service.name}</span>
                                <div className="w-10 h-10 rounded-full bg-light-gray flex items-center justify-center group-hover:bg-gold group-hover:text-navy transition-colors">
                                    <ArrowRight className="w-5 h-5 text-navy shrink-0" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
