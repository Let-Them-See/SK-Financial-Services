'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

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
        <div className="bg-background min-h-screen">
            {/* 1. Top Hero Banner */}
            <section className="bg-primary py-20 lg:py-28 pt-32">
                <div className="container mx-auto px-6 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center gap-2 text-xs font-semibold text-primary-foreground/60 uppercase tracking-widest mb-6"
                    >
                        <Link href="/" className="hover:text-accent transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3 text-accent" />
                        <span className="text-accent">Services</span>
                        <ChevronRight className="w-3 h-3 text-accent" />
                        <span className="text-primary-foreground">{data.title}</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-serif text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl text-balance max-w-4xl"
                    >
                        {data.title}
                    </motion.h1>
                </div>
            </section>

            {/* 2. Introduction Section */}
            <section className="py-24 bg-background border-b border-border">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="font-serif text-3xl font-bold text-foreground mb-6 text-balance">
                                Understanding {data.title}
                            </h2>
                            {data.introText.map((paragraph, idx) => (
                                <p key={idx} className="text-muted-foreground leading-relaxed text-lg text-balance">
                                    {paragraph}
                                </p>
                            ))}
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative aspect-video lg:aspect-square bg-muted rounded-3xl overflow-hidden border border-border flex items-center justify-center p-12 text-center text-muted-foreground"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
                            <span className="relative z-10 font-medium">Visual Presentation for {data.title}</span>
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. Key Features / Benefits */}
            <section className="py-24 bg-primary/5">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="mb-16">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                            Key Benefits
                        </p>
                        <h2 className="font-serif text-3xl font-bold text-foreground text-balance">
                            Why this matters
                        </h2>
                    </div>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {data.features.map((feature, idx) => (
                            <motion.div key={idx} variants={staggerItem}>
                                <Card className="h-full bg-card border-border hover:border-accent/30 transition-colors shadow-sm cursor-default">
                                    <CardHeader>
                                        <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-4">
                                            <feature.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <CardTitle className="font-serif text-xl">{feature.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-base text-muted-foreground leading-relaxed">
                                            {feature.desc}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 4. How It Works */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-20">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                            The Process
                        </p>
                        <h2 className="font-serif text-3xl font-bold text-foreground text-balance">
                            How It Works
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-12 relative">
                        {/* Connecting line for desktop */}
                        <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-px bg-border z-0"></div>

                        {data.howItWorks.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className="relative z-10 flex flex-col items-center text-center"
                            >
                                <div className="w-20 h-20 rounded-2xl bg-card border border-border shadow-sm flex items-center justify-center mb-6 relative">
                                    <step.icon className="w-8 h-8 text-primary" />
                                    <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center text-sm">
                                        {step.step}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-3 font-serif">{step.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Why Choose Us */}
            <section className="py-24 bg-primary text-primary-foreground border-t border-primary-foreground/10">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="mb-16">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                            Why Choose SK Financial Services
                        </p>
                        <h2 className="font-serif text-3xl font-bold text-primary-foreground">
                            Expertise you can trust
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {data.whyChooseUs.map((reason, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15 }}
                                className="bg-primary-foreground/5 p-8 rounded-2xl border border-primary-foreground/10"
                            >
                                <div className="flex flex-col gap-4 mb-4">
                                    <CheckCircle2 className="w-8 h-8 text-accent shrink-0" />
                                    <h3 className="text-xl font-bold font-serif leading-tight">{reason.title}</h3>
                                </div>
                                <p className="text-primary-foreground/70 leading-relaxed text-sm">{reason.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. CTA Strip */}
            <section className="py-20 bg-accent relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                    <div>
                        <h2 className="font-serif text-3xl font-bold text-accent-foreground mb-3">Ready to secure your financial future?</h2>
                        <p className="text-accent-foreground/80 font-medium text-lg">Talk to our experts today and get a personalized strategy.</p>
                    </div>
                    <Button
                        asChild
                        size="lg"
                        className="bg-accent-foreground text-accent px-10 h-16 rounded-full font-bold text-lg hover:bg-accent-foreground/90 transition-all shadow-md"
                    >
                        <Link href="/contact-us">
                            Get a Free Consultation
                        </Link>
                    </Button>
                </div>
            </section>

            {/* 7. Related Services */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                        <div>
                            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                                Discover More
                            </p>
                            <h2 className="font-serif text-3xl font-bold text-foreground">Explore Related Services</h2>
                        </div>
                        <Link href="/#services" className="text-primary font-bold hover:text-accent transition-colors flex items-center gap-2">
                            View All <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {data.relatedServices.map((service, idx) => (
                            <Link
                                key={idx}
                                href={service.href}
                                className="group bg-card p-6 rounded-2xl shadow-sm border border-border hover:border-accent hover:shadow-md transition-all duration-300 flex items-center justify-between"
                            >
                                <span className="font-bold text-foreground font-serif text-lg group-hover:text-primary transition-colors">{service.name}</span>
                                <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-accent transition-colors">
                                    <ArrowRight className="w-5 h-5 text-primary group-hover:text-accent-foreground shrink-0 transition-colors" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
