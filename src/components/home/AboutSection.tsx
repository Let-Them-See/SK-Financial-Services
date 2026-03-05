'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Award } from 'lucide-react'

export default function AboutSection() {
    return (
        <section className="py-24 bg-light-gray overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left: Image with Gold Frame & Badge */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative pr-8 pb-8 max-w-lg mx-auto lg:max-w-none"
                    >
                        {/* The Gold Frame */}
                        <div className="absolute top-8 left-8 w-full h-full border-4 border-gold rounded-2xl z-0"></div>

                        {/* The Image (Placeholder until true image is used) */}
                        <div className="relative z-10 w-full aspect-[4/5] bg-gray-300 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
                            {/* Replace with actual image: <img src="https://skfinservices.com/media/images/home/about.jpg" alt="About Sheetal Khanna" className="object-cover w-full h-full" /> */}
                            <div className="text-gray-500 font-medium">Sheetal Khanna Photo Placeholder</div>
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, type: "spring", stiffness: 150 }}
                            className="absolute -bottom-6 -right-6 md:-right-10 bg-white p-5 rounded-2xl shadow-xl z-20 border border-light-gray flex items-center gap-4"
                        >
                            <div className="w-14 h-14 bg-gold rounded-full flex items-center justify-center shrink-0 shadow-md">
                                <Award className="w-7 h-7 text-navy" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-navy font-playfair">19+</span>
                                <span className="text-xs font-bold text-navy/60 uppercase tracking-widest">Years of Trust</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col items-start"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-1 bg-gold rounded-full"></div>
                            <span className="text-gold font-bold uppercase tracking-widest text-sm">Welcome to SK</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy mb-8 leading-tight">
                            Expertise Meets Excellence in Financial Advisory
                        </h2>

                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-10">
                            <p>
                                Welcome to SK Financial Services, where expertise meets excellence in financial advisory.
                                Founded by Sheetal Khanna, we cater to <strong>1,000+ satisfied clients</strong> and manage <strong>200Cr+ in assets</strong>.
                            </p>
                            <p>
                                We specialize in NRI portfolios and deeply customized investment strategies.
                                We are your trusted partner for achieving sustainable financial stability and long-term exponential growth.
                            </p>
                        </div>

                        <Link
                            href="/AboutPage"
                            className="bg-navy text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-gold hover:text-navy transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 group"
                        >
                            Read More
                            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                        </Link>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
