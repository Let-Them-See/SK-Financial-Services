'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

const galleryImages = [
    'https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1552581234-2616094c4280?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1559523182-a284c3fb7cff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
]

export default function GalleryPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1, scale: 1,
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
                        <span className="text-white">Gallery</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6"
                    >
                        Our Gallery
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-white/80 text-xl font-medium max-w-2xl mx-auto"
                    >
                        Glimpses of our corporate events, awards, and client engagements.
                    </motion.p>
                </div>
            </section>

            {/* 2. Masonry / Grid */}
            <section className="py-20 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                    >
                        {galleryImages.map((src, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                className="group relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer bg-navy"
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                                    style={{ backgroundImage: `url(${src})` }}
                                ></div>

                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center text-gold transform scale-50 group-hover:scale-100 transition-transform duration-500">
                                        <span className="font-playfair font-bold text-2xl">SK</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </section>
        </div>
    )
}
