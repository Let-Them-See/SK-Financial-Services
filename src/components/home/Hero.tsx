'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const headlines = [
    "Make your personal finance easy with us",
    "Helping You To Grow Your Wealth"
]

export default function Hero() {
    const [currentHeadline, setCurrentHeadline] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHeadline((prev) => (prev + 1) % headlines.length)
        }, 4500)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-navy to-navy-dark overflow-hidden pt-16">
            {/* Animated Mesh / Particle Background */}
            <div className="absolute inset-0 opacity-20">
                <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FFD700" strokeWidth="0.5" opacity="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[20%] left-[20%] w-[40rem] h-[40rem] bg-gold/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 1 }}
                    className="absolute bottom-[10%] right-[10%] w-[30rem] h-[30rem] bg-white/5 rounded-full blur-3xl"
                />
            </div>

            <div className="container relative z-10 px-4 mx-auto text-center flex flex-col items-center">
                {/* Animated Typewriter Headline */}
                <div className="h-32 md:h-48 flex items-center justify-center mb-6">
                    <AnimatePresence mode="wait">
                        <motion.h1
                            key={currentHeadline}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-white max-w-5xl leading-tight drop-shadow-lg"
                        >
                            {headlines[currentHeadline]}
                        </motion.h1>
                    </AnimatePresence>
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-white/80 text-lg sm:text-xl max-w-2xl mb-12 font-medium"
                >
                    We build and review customized portfolios to secure your financial future.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-5 justify-center w-full max-w-md mx-auto"
                >
                    <Link
                        href="/investment-portfolio"
                        className="flex-1 bg-gold text-navy px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] transition-all duration-300 transform hover:-translate-y-1 text-center"
                    >
                        Read More
                    </Link>
                    <Link
                        href="/contact-us"
                        className="flex-1 border-2 border-gold text-gold px-8 py-4 rounded-full font-bold text-lg hover:bg-gold hover:text-navy transition-all duration-300 transform hover:-translate-y-1 text-center"
                    >
                        Contact Us
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-white/50 text-xs font-bold uppercase tracking-widest">Scroll</span>
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-1.5 h-3 bg-gold rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    )
}
