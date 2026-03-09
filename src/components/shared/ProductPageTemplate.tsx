'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight, Check } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

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
        <div className="bg-background min-h-screen">
            {/* 1. Hero Banner */}
            <section className="bg-primary py-24 lg:py-32 pt-36 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
                <div className="container relative z-10 mx-auto px-6 max-w-7xl text-center flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center gap-2 text-xs font-semibold text-primary-foreground/60 uppercase tracking-widest mb-6"
                    >
                        <Link href="/" className="hover:text-accent transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3 text-accent" />
                        <span className="text-accent">Products</span>
                        <ChevronRight className="w-3 h-3 text-accent" />
                        <span className="text-primary-foreground">{data.title}</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-serif text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-7xl text-balance max-w-4xl mb-6"
                    >
                        {data.title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-primary-foreground/80 text-lg md:text-xl font-medium max-w-2xl mb-12 text-balance leading-relaxed"
                    >
                        {data.tagline}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Button
                            asChild
                            size="lg"
                            className="bg-accent text-accent-foreground px-10 h-14 rounded-full font-bold text-lg hover:bg-accent/90 transition-all shadow-md"
                        >
                            <Link href="/contact-us">
                                Start Investing Today
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* 2. What Is It? */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative aspect-video bg-muted rounded-3xl overflow-hidden border border-border flex items-center justify-center p-8"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent"></div>
                            <div className="text-center">
                                <div className="w-24 h-24 bg-card rounded-2xl flex items-center justify-center shadow-sm mx-auto mb-6 border border-border">
                                    <span className="text-4xl font-serif font-bold text-primary">{data.title.charAt(0)}</span>
                                </div>
                                <span className="text-primary font-bold tracking-widest uppercase text-sm opacity-60">{data.title}</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                                Overview
                            </p>
                            <h2 className="font-serif text-3xl font-bold text-foreground mb-6 text-balance">
                                What are {data.title}?
                            </h2>
                            <div className="space-y-4">
                                {data.whatIsIt.map((paragraph, idx) => (
                                    <p key={idx} className="text-muted-foreground leading-relaxed text-lg text-balance">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. Metrics / Rating */}
            <section className="bg-primary/5 py-16 border-y border-border">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-border">
                        <div className="text-center px-4">
                            <span className="block text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Category</span>
                            <span className="font-bold text-primary font-serif text-xl">{data.title}</span>
                        </div>
                        <div className="text-center px-4">
                            <span className="block text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Risk Level</span>
                            <div className="flex justify-center gap-1">
                                {[1, 2, 3, 4, 5].map(star => (
                                    <div key={star} className={`w-3 md:w-4 h-3 md:h-4 rounded-full ${star <= data.riskLevel ? 'bg-destructive' : 'bg-destructive/20'}`}></div>
                                ))}
                            </div>
                        </div>
                        <div className="text-center px-4">
                            <span className="block text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Return Potential</span>
                            <div className="flex justify-center gap-1">
                                {[1, 2, 3, 4, 5].map(star => (
                                    <div key={star} className={`w-3 md:w-4 h-3 md:h-4 rounded-full hover:scale-110 transition-transform ${star <= data.returnPotential ? 'bg-[hsl(142.1,76.2%,36.3%)]' : 'bg-[hsl(142.1,76.2%,36.3%)]/20'}`}></div>
                                ))}
                            </div>
                        </div>
                        <div className="text-center px-4">
                            <span className="block text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Consultation</span>
                            <span className="font-bold text-accent font-serif text-xl">Available</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Highlights Grid */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                            Important Details
                        </p>
                        <h2 className="font-serif text-3xl font-bold text-foreground">Key Highlights</h2>
                    </div>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {data.highlights.map((highlight, idx) => (
                            <motion.div key={idx} variants={item}>
                                <Card className="bg-card border-border h-full shadow-sm hover:border-accent/30 transition-colors">
                                    <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                                        <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                                            <highlight.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <CardTitle className="font-serif text-lg m-0">{highlight.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-base text-muted-foreground">
                                            {highlight.desc}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 5. Benefits & Target Audience */}
            <section className="py-24 bg-primary text-primary-foreground border-y border-primary-foreground/10">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-16">

                        {/* Benefits list */}
                        <div>
                            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                                The Advantage
                            </p>
                            <h2 className="font-serif text-3xl font-bold text-primary-foreground mb-8">Benefits of {data.title}</h2>
                            <div className="space-y-6">
                                {data.benefits.map((benefit, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center shrink-0 shadow-sm mt-1">
                                            <benefit.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg font-serif mb-1">{benefit.title}</h3>
                                            <p className="text-primary-foreground/70 leading-relaxed text-sm">{benefit.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Who should invest */}
                        <div className="bg-primary-foreground/5 rounded-3xl p-10 border border-primary-foreground/10 h-fit">
                            <h2 className="font-serif text-2xl font-bold text-primary-foreground mb-8 border-b border-primary-foreground/10 pb-4">Who should invest?</h2>
                            <ul className="space-y-4">
                                {data.whoShouldInvest.map((point, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                        <span className="text-primary-foreground/80 leading-relaxed">{point}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-10 pt-6 border-t border-primary-foreground/10 text-center">
                                <p className="text-sm font-semibold text-primary-foreground/70 mb-4">Does this sound like you?</p>
                                <Button
                                    asChild
                                    variant="outline"
                                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground rounded-full h-12 px-8 w-full"
                                >
                                    <Link href="/contact-us">
                                        Speak to an Advisor
                                    </Link>
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}
