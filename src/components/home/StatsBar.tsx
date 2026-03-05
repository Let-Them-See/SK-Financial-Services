'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import CountUp from 'react-countup'

const stats = [
    { value: 19, suffix: '+', label: 'Years Experience' },
    { value: 1000, suffix: '+', label: 'Satisfied Clients' },
    { value: 200, prefix: '₹', suffix: 'Cr+', label: 'Assets Managed' },
    { specialText: 'AMFI & IRDA', label: 'Certified' },
]

export default function StatsBar() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section ref={ref} className="bg-navy-dark py-12 relative z-20 -mt-8 mx-4 sm:mx-8 lg:mx-20 rounded-2xl shadow-2xl border border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-white/10">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: i * 0.1 + 0.2, duration: 0.6 }}
                            className="text-center px-4"
                        >
                            <div className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-gold mb-2 h-14 flex items-center justify-center">
                                {stat.specialText ? (
                                    <span>{stat.specialText}</span>
                                ) : (
                                    <>
                                        {stat.prefix}
                                        {isInView ? <CountUp end={stat.value || 0} duration={2.5} separator="," /> : '0'}
                                        {stat.suffix}
                                    </>
                                )}
                            </div>
                            <div className="text-white/80 text-sm font-semibold uppercase tracking-wider">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
