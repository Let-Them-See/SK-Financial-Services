'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Shield, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const stats = [
    { icon: TrendingUp, value: "200Cr+", label: "Assets Managed" },
    { icon: Users, value: "1,000+", label: "Satisfied Clients" },
    { icon: Shield, value: "19+", label: "Years Experience" },
]

const headlines = [
    "Expert Financial Guidance for a Secure Future",
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
        <section id="home" className="relative min-h-screen flex items-center bg-background pt-16">
            {/* Background Image / Mesh */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-primary/95 mix-blend-multiply" />
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.15, 0.05] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[20%] left-[20%] w-[40rem] h-[40rem] bg-accent/20 rounded-full blur-3xl pointer-events-none"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:py-40 w-full">
                <div className="max-w-3xl">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent"
                    >
                        AMFI & IRDA Certified Advisor
                    </motion.p>

                    <div className="h-32 sm:h-40 md:h-48 flex items-start justify-start mb-2">
                        <AnimatePresence mode="wait">
                            <motion.h1
                                key={currentHeadline}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="font-serif text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-7xl text-balance"
                            >
                                {headlines[currentHeadline]}
                            </motion.h1>
                        </AnimatePresence>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mt-2 max-w-xl text-lg leading-relaxed text-primary-foreground/80"
                    >
                        Founded by Sheetal Khanna with over 19 years of experience, SK
                        Financial Services is your trusted partner for achieving financial
                        stability and growth.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mt-10 flex flex-col gap-4 sm:flex-row"
                    >
                        <Button
                            asChild
                            size="lg"
                            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base px-8 h-14 rounded-full"
                        >
                            <Link href="/contact-us">
                                Start Your Journey
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold text-base px-8 h-14 rounded-full"
                        >
                            <Link href="#services">Explore Services</Link>
                        </Button>
                    </motion.div>
                </div>

                {/* Stats Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:mt-24"
                >
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            whileHover={{ y: -5 }}
                            className="flex items-center gap-4 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 px-6 py-6 backdrop-blur-md shadow-xl"
                        >
                            <div className="flex bg-accent/20 p-3 rounded-full">
                                <stat.icon className="h-7 w-7 text-accent shrink-0" />
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-primary-foreground font-serif tracking-tight">
                                    {stat.value}
                                </p>
                                <p className="text-sm font-medium text-primary-foreground/70 uppercase tracking-widest mt-1">{stat.label}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
