'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight, Calendar, User, ArrowRight } from 'lucide-react'

// Dummy dynamic data for the blog listing page
const allPosts = [
    {
        title: 'The Power of Compounding in Mutual Funds',
        excerpt: 'Understanding how starting early can significantly impact your retirement corpus through the magic of compounding returns.',
        category: 'Mutual Funds',
        image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        date: 'Oct 15, 2025',
        author: 'Sheetal Khanna'
    },
    {
        title: 'Why Term Insurance is Non-Negotiable',
        excerpt: 'A comprehensive guide on why establishing a solid term insurance plan is the absolute foundation of any financial strategy.',
        category: 'Insurance',
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66cb85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        date: 'Oct 02, 2025',
        author: 'SK Advisors'
    },
    {
        title: 'Tax Loss Harvesting Strategies',
        excerpt: 'Learn legitimate ways to minimize your tax liability before the end of the financial year using portfolio harvesting.',
        category: 'Tax Planning',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        date: 'Sep 28, 2025',
        author: 'Sheetal Khanna'
    },
    {
        title: 'Navigating Volatile Markets as an NRI',
        excerpt: 'Specialized strategies for Non-Resident Indians to manage Rupee depreciation and index volatility.',
        category: 'NRI Investment',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        date: 'Sep 10, 2025',
        author: 'SK Advisors'
    },
    {
        title: 'Bonds vs Fixed Deposits: Where to park your emergency fund?',
        excerpt: 'A deep dive into yields, taxation, and liquidity constraints of debt instruments in the current rate environment.',
        category: 'Fixed Income',
        image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6ea838?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        date: 'Aug 22, 2025',
        author: 'Sheetal Khanna'
    },
    {
        title: 'Estate Planning Basics Every Family Needs',
        excerpt: 'Why making a will is just the first step. Understanding trusts, HUFs, and generational wealth transfer.',
        category: 'Wealth Management',
        image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        date: 'Aug 05, 2025',
        author: 'SK Advisors'
    }
]

export default function BlogPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1, y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    }

    return (
        <div className="bg-light-gray min-h-screen">

            {/* 1. Hero */}
            <section className="bg-navy py-16 lg:py-24 pt-28 border-b-4 border-gold">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center justify-center gap-2 text-xs font-bold text-white/50 uppercase tracking-widest mb-6"
                    >
                        <Link href="/" className="hover:text-gold transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3 text-gold" />
                        <span className="text-white">Knowledge Center</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6"
                    >
                        Financial Insights & Updates
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-white/80 text-xl font-medium max-w-2xl mx-auto"
                    >
                        Expert perspectives to help you make informed investment decisions.
                    </motion.p>
                </div>
            </section>

            {/* 2. Blog Grid */}
            <section className="py-20 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {allPosts.map((post, i) => (
                            <motion.article
                                key={i}
                                variants={itemVariants}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 group flex flex-col hover:-translate-y-2 transition-all duration-300"
                            >
                                {/* Image */}
                                <div className="relative h-60 overflow-hidden bg-navy">
                                    <div className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: `url(${post.image})` }}></div>

                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-navy text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md border border-white/50">
                                        {post.category}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-xs font-medium text-gray-500 mb-4 uppercase tracking-wide">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar className="w-3.5 h-3.5" />
                                            {post.date}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <User className="w-3.5 h-3.5" />
                                            {post.author}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold font-playfair text-navy mb-3 group-hover:text-gold transition-colors leading-snug">
                                        {post.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <Link
                                        href="/blog"
                                        className="mt-auto self-start flex items-center gap-2 text-sm font-bold text-navy group-hover:text-gold transition-colors border-b-2 border-transparent group-hover:border-gold pb-1"
                                    >
                                        Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>

                    {/* Load More Button (UI Only) */}
                    <div className="text-center mt-16">
                        <button className="bg-transparent border-2 border-navy text-navy px-10 py-4 rounded-full font-bold hover:bg-navy hover:text-white transition-colors duration-300">
                            Load More Articles
                        </button>
                    </div>

                </div>
            </section>
        </div>
    )
}
