'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight, MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

export default function ContactUsPage() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Normally handle form submission here
        alert("Thank you! Your message has been sent successfully.")
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }

    return (
        <div className="bg-light-gray min-h-screen">

            {/* 1. Hero */}
            <section className="bg-navy py-16 lg:py-24 pt-28">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center justify-center gap-2 text-xs font-bold text-white/50 uppercase tracking-widest mb-6"
                    >
                        <Link href="/" className="hover:text-gold transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3 text-gold" />
                        <span className="text-white">Contact Us</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6"
                    >
                        Get In Touch
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-white/80 text-xl font-medium max-w-2xl mx-auto"
                    >
                        Our experts are ready to assist you. Drop us a message or visit our office for a personalized consultation.
                    </motion.p>
                </div>
            </section>

            {/* 2. Main Layout (Info + Form) */}
            <section className="py-20 lg:py-24 relative -mt-16 z-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">

                        {/* Left: Contact Information */}
                        <div className="lg:w-2/5 bg-navy text-white p-10 lg:p-14 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gold rounded-full blur-3xl opacity-10 -translate-y-1/2 translate-x-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl opacity-5 translate-y-1/2 -translate-x-1/2"></div>

                            <h3 className="text-3xl font-playfair font-bold mb-8 relative z-10">Contact Information</h3>
                            <p className="text-white/70 mb-12 relative z-10">Fill up the form and our Team will get back to you within 24 hours.</p>

                            <div className="space-y-8 relative z-10">
                                <div className="flex items-start gap-4">
                                    <MapPin className="w-6 h-6 text-gold shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold mb-1">Office Address</h4>
                                        <p className="text-white/70 text-sm leading-relaxed">
                                            1201, 12th Floor, A wing,<br />
                                            Naman Midtown, Senapati Bapat Marg,<br />
                                            Near Indiabulls Finance Centre,<br />
                                            Prabhadevi, Mumbai - 400013
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Phone className="w-6 h-6 text-gold shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold mb-1">Phone</h4>
                                        <p className="text-white/70 text-sm">
                                            <a href="tel:+918169199279" className="hover:text-gold transition-colors">+91 81691 99279</a><br />
                                            <a href="tel:+918591396147" className="hover:text-gold transition-colors">+91 85913 96147</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Mail className="w-6 h-6 text-gold shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold mb-1">Email</h4>
                                        <p className="text-white/70 text-sm">
                                            <a href="mailto:info@skfinservices.com" className="hover:text-gold transition-colors">info@skfinservices.com</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Clock className="w-6 h-6 text-gold shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold mb-1">Business Hours</h4>
                                        <p className="text-white/70 text-sm">
                                            Monday - Friday: 9:00 AM - 6:00 PM<br />
                                            Saturday & Sunday: Closed
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Contact Form */}
                        <div className="lg:w-3/5 p-10 lg:p-14 bg-white">
                            <h3 className="text-2xl font-playfair font-bold text-navy mb-8">Send us a Message</h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Name Input */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700">Full Name</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full bg-light-gray border-none px-4 py-3 rounded-lg focus:ring-2 focus:ring-gold focus:bg-white transition-all outline-none"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    {/* Email Input */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700">Email Address</label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full bg-light-gray border-none px-4 py-3 rounded-lg focus:ring-2 focus:ring-gold focus:bg-white transition-all outline-none"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Phone Input */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700">Phone Number</label>
                                        <input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full bg-light-gray border-none px-4 py-3 rounded-lg focus:ring-2 focus:ring-gold focus:bg-white transition-all outline-none"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>

                                    {/* Subject Input */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700">Subject</label>
                                        <select
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                            className="w-full bg-light-gray border-none px-4 py-3 rounded-lg focus:ring-2 focus:ring-gold focus:bg-white transition-all outline-none appearance-none cursor-pointer"
                                        >
                                            <option value="">Select a subject...</option>
                                            <option value="Investment Advisory">Investment Advisory</option>
                                            <option value="Insurance Planning">Insurance Planning</option>
                                            <option value="NRI Taxation">NRI Taxation Services</option>
                                            <option value="Other">Other Inquiry</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Message Input */}
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700">Your Message</label>
                                    <textarea
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full bg-light-gray border-none px-4 py-3 rounded-lg focus:ring-2 focus:ring-gold focus:bg-white transition-all outline-none resize-none"
                                        placeholder="How can we help you?"
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="bg-navy text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-gold hover:text-navy transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 group w-full justify-center md:w-auto"
                                >
                                    Send Message
                                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

            {/* 3. Google Maps Full Width Embed Placeholder */}
            <section className="h-[400px] w-full bg-gray-200 relative pointer-events-none mt-12 pb-12">
                {/* We use a placeholder here for the UI. Normally you'd embed the actual <iframe> */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 flex-col gap-2">
                    <MapPin className="w-10 h-10 text-gray-400" />
                    <span className="font-medium text-lg text-gray-400 tracking-wide uppercase">Google Map Loading...</span>
                </div>
            </section>

        </div>
    )
}
