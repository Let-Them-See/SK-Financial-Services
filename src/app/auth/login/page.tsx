'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        // Normal auth logic here
        console.log("Logging in with", email, password)
    }

    return (
        <div className="min-h-screen bg-light-gray flex">
            {/* Left: Graphic / Marketing Panel */}
            <div className="hidden lg:flex w-1/2 bg-navy relative overflow-hidden flex-col justify-center p-20">
                <div className="absolute inset-0 opacity-20">
                    <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid-login" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FFD700" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid-login)" />
                    </svg>
                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-3xl pointer-events-none"
                ></motion.div>

                <div className="relative z-10 text-white max-w-lg">
                    <Link href="/" className="inline-block mb-12">
                        <div className="text-3xl font-playfair font-bold text-white flex items-center gap-2">
                            <span className="text-gold">SK</span> Financials
                        </div>
                    </Link>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl lg:text-5xl font-playfair font-bold mb-6 leading-tight"
                    >
                        Access Your Exclusive Wealth Dashboard
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-white/70 text-lg leading-relaxed"
                    >
                        Monitor your customized portfolios, analyze performance metrics, and stay updated with the latest market insights—all strictly secured.
                    </motion.p>
                </div>
            </div>

            {/* Right: Login Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-24 bg-white">
                <div className="w-full max-w-md">
                    <div className="text-center lg:text-left mb-10">
                        <div className="lg:hidden text-2xl font-playfair font-bold text-navy mb-8 flex justify-center gap-2">
                            <span className="text-gold">SK</span> Financials
                        </div>
                        <h2 className="text-3xl font-playfair font-bold text-navy mb-3">Welcome Back</h2>
                        <p className="text-gray-500">Please enter your credentials to login.</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700">Email Address</label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-light-gray border-none px-4 py-4 rounded-xl focus:ring-2 focus:ring-gold focus:bg-white transition-all outline-none"
                                placeholder="client@example.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-bold text-gray-700">Password</label>
                                <a href="#" className="text-sm font-bold text-navy hover:text-gold transition-colors">Forgot Password?</a>
                            </div>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-light-gray border-none px-4 py-4 rounded-xl focus:ring-2 focus:ring-gold focus:bg-white transition-all outline-none"
                                placeholder="••••••••"
                            />
                        </div>

                        <div className="flex items-center gap-3 pt-2">
                            <input type="checkbox" id="remember" className="w-4 h-4 text-gold border-gray-300 rounded focus:ring-gold accent-gold" />
                            <label htmlFor="remember" className="text-sm text-gray-600 font-medium cursor-pointer">Remember me for 30 days</label>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-navy text-white py-4 rounded-full font-bold text-lg hover:bg-gold hover:text-navy transition-all duration-300 shadow-lg hover:shadow-xl mt-4"
                        >
                            Sign In
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-500 mt-10">
                        Not a client yet? <Link href="/contact-us" className="font-bold text-navy hover:text-gold transition-colors">Contact us to get started</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
