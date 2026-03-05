'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Briefcase, ShieldCheck, PieChart, Target, FileText, ArrowRight } from 'lucide-react'

const services = [
    {
        name: 'Investment Portfolio',
        description: 'Whenever you think of making investment, three things should come on top of your mind',
        href: '/investment-portfolio',
        icon: Briefcase
    },
    {
        name: 'Insurance Policies',
        description: 'Insurance is an important risk management tool that can protect you and your family from financial hardship',
        href: '/insurance-planning',
        icon: ShieldCheck
    },
    {
        name: 'Wealth Basket',
        description: 'Wealth is an abundance of variable material resources. The meaning of wealth is not straightforward.',
        href: '/wealth-management-0',
        icon: PieChart
    },
    {
        name: 'Targeted Investment',
        description: 'Making holistic investment choice is always preferred than making random investments.',
        href: '/targeted-investment',
        icon: Target
    },
    {
        name: 'Tax Optimization',
        description: 'Tax planning involves optimizing your wealth creation and protecting your health, life and assets',
        href: '/tax-planning',
        icon: FileText
    }
]

export default function ServicesSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    }

    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-4 mb-4"
                    >
                        <div className="w-12 h-1 bg-gold rounded-full"></div>
                        <span className="text-gold font-bold uppercase tracking-widest text-sm">What We Do</span>
                        <div className="w-12 h-1 bg-gold rounded-full"></div>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-playfair font-bold text-navy"
                    >
                        Our Specialized Services
                    </motion.h2>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 xl:gap-4"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={service.name}
                            variants={cardVariants}
                            viewport={{ once: true }}
                            className="group relative bg-light-gray rounded-2xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-light-gray flex flex-col items-center text-center overflow-hidden"
                        >
                            <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-md border border-light-gray group-hover:border-gold group-hover:bg-gold transition-colors duration-300">
                                <service.icon className="w-8 h-8 text-navy" />
                            </div>

                            <h3 className="text-xl font-bold font-playfair text-navy mb-4 group-hover:text-gold transition-colors duration-300">
                                {service.name}
                            </h3>

                            <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                                {service.description}
                            </p>

                            <Link
                                href={service.href}
                                className="mt-auto inline-flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 text-navy group-hover:bg-navy group-hover:border-navy group-hover:text-white transition-all duration-300"
                            >
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
