'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Calendar, User } from 'lucide-react'

// Using mock data structurally identical to the required columns
const blogPosts = [
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
    }
]

export default function KnowledgeCenter() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
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
        <section className="py-24 bg-light-gray">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 mb-4"
                        >
                            <div className="w-12 h-1 bg-gold rounded-full"></div>
                            <span className="text-gold font-bold uppercase tracking-widest text-sm">Insights</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-playfair font-bold text-navy"
                        >
                            Knowledge Center
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 font-bold text-navy border-b-2 border-gold hover:text-gold transition-colors pb-1"
                        >
                            View All Articles <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {blogPosts.map((post, i) => (
                        <motion.article
                            key={i}
                            variants={itemVariants}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group flex flex-col hover:-translate-y-2 transition-transform duration-300"
                        >
                            {/* Image Container with Hover Scale */}
                            <div className="relative h-64 overflow-hidden">
                                {/* Fallback image if URL fails */}
                                <div className="absolute inset-0 bg-navy"></div>
                                {/* The actual image */}
                                <div className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url(${post.image})` }}></div>

                                {/* Category Tag */}
                                <div className="absolute top-4 left-4 bg-gold text-navy text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md">
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

                                <h3 className="text-xl font-bold font-playfair text-navy mb-3 group-hover:text-gold transition-colors line-clamp-2 leading-snug">
                                    {post.title}
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <Link
                                    href="/blog"
                                    className="mt-auto self-start flex items-center gap-2 text-sm font-bold text-navy group-hover:text-gold transition-colors"
                                >
                                    Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
