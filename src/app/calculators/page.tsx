'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight, Calculator, TrendingUp, PiggyBank } from 'lucide-react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts'

export default function CalculatorsPage() {
    const [activeTab, setActiveTab] = useState<'sip' | 'lumpsum'>('sip')

    // Shared State
    const [amount, setAmount] = useState(10000)
    const [years, setYears] = useState(10)
    const [rate, setRate] = useState(12)

    // Calcs
    const monthlyRate = rate / 12 / 100
    const months = years * 12

    let totalInvestment = 0
    let futureValue = 0

    if (activeTab === 'sip') {
        futureValue = amount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate)
        totalInvestment = amount * months
    } else {
        futureValue = amount * Math.pow(1 + (rate / 100), years)
        totalInvestment = amount
    }

    const estimatedReturns = futureValue - totalInvestment

    // Pie Chart Data
    const pieData = [
        { name: 'Total Invested', value: totalInvestment, color: '#002244' },
        { name: 'Est. Returns', value: estimatedReturns, color: '#FFD700' },
    ]

    // Area Chart Data Generation
    const areaData = Array.from({ length: years + 1 }, (_, i) => {
        let yearInvested = 0
        let yearValue = 0

        if (activeTab === 'sip') {
            yearInvested = amount * 12 * i
            const m = i * 12
            yearValue = i === 0 ? 0 : amount * ((Math.pow(1 + monthlyRate, m) - 1) / monthlyRate) * (1 + monthlyRate)
        } else {
            yearInvested = totalInvestment
            yearValue = totalInvestment * Math.pow(1 + (rate / 100), i)
        }

        return {
            year: i,
            Invested: yearInvested,
            Value: yearValue
        }
    })

    // Formatters
    const formatINR = (val: number) => `₹${val.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`
    const formatAxis = (val: number) => {
        if (val >= 10000000) return `₹${(val / 10000000).toFixed(1)}Cr`
        if (val >= 100000) return `₹${(val / 100000).toFixed(1)}L`
        if (val >= 1000) return `₹${(val / 1000).toFixed(0)}k`
        return `₹${val}`
    }

    return (
        <div className="bg-white min-h-screen">
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
                        <span className="text-white">Calculators</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6"
                    >
                        Financial Planning Tools
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-white/80 text-xl font-medium max-w-2xl mx-auto"
                    >
                        Calculate the future value of your investments and visualize the legendary power of compounding.
                    </motion.p>
                </div>
            </section>

            {/* 2. Main Calculator Form */}
            <section className="py-20 bg-light-gray relative">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mt-32">

                    <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100 max-w-6xl mx-auto flex flex-col lg:flex-row">

                        {/* Left: Controls */}
                        <div className="lg:w-[45%] p-8 lg:p-12 bg-white border-r border-gray-100">

                            {/* Tabs */}
                            <div className="flex p-1 bg-light-gray rounded-xl mb-12">
                                <button
                                    onClick={() => { setActiveTab('sip'); setAmount(10000) }}
                                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold transition-all ${activeTab === 'sip' ? 'bg-white text-navy shadow-md' : 'text-gray-500 hover:text-navy'}`}
                                >
                                    <Calculator className="w-4 h-4" /> SIP Returns
                                </button>
                                <button
                                    onClick={() => { setActiveTab('lumpsum'); setAmount(500000) }}
                                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold transition-all ${activeTab === 'lumpsum' ? 'bg-white text-navy shadow-md' : 'text-gray-500 hover:text-navy'}`}
                                >
                                    <PiggyBank className="w-4 h-4" /> Lumpsum
                                </button>
                            </div>

                            <div className="space-y-10">
                                {/* Amount Slider */}
                                <div>
                                    <div className="flex justify-between items-center mb-4">
                                        <label className="text-gray-700 font-bold text-sm uppercase tracking-wide">
                                            {activeTab === 'sip' ? 'Monthly Investment' : 'Total Investment'}
                                        </label>
                                        <div className="bg-light-gray px-4 py-2 rounded-lg font-bold text-navy border border-gray-200 min-w-[120px] text-right">
                                            {formatINR(amount)}
                                        </div>
                                    </div>
                                    <input
                                        type="range"
                                        min={activeTab === 'sip' ? '500' : '10000'}
                                        max={activeTab === 'sip' ? '200000' : '5000000'}
                                        step={activeTab === 'sip' ? '500' : '10000'}
                                        value={amount}
                                        onChange={(e) => setAmount(Number(e.target.value))}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold"
                                    />
                                    <div className="flex justify-between mt-2 text-xs font-semibold text-gray-400">
                                        <span>{activeTab === 'sip' ? '₹500' : '₹10k'}</span>
                                        <span>{activeTab === 'sip' ? '₹2L' : '₹50L'}</span>
                                    </div>
                                </div>

                                {/* Years Slider */}
                                <div>
                                    <div className="flex justify-between items-center mb-4">
                                        <label className="text-gray-700 font-bold text-sm uppercase tracking-wide">Investment Period</label>
                                        <div className="bg-light-gray px-4 py-2 rounded-lg font-bold text-navy border border-gray-200 min-w-[120px] text-right">
                                            {years} Years
                                        </div>
                                    </div>
                                    <input
                                        type="range"
                                        min="1" max="40" step="1"
                                        value={years}
                                        onChange={(e) => setYears(Number(e.target.value))}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold"
                                    />
                                    <div className="flex justify-between mt-2 text-xs font-semibold text-gray-400">
                                        <span>1 Yr</span>
                                        <span>40 Yrs</span>
                                    </div>
                                </div>

                                {/* Rate Slider */}
                                <div>
                                    <div className="flex justify-between items-center mb-4">
                                        <label className="text-gray-700 font-bold text-sm uppercase tracking-wide">Expected Return Rate</label>
                                        <div className="bg-light-gray px-4 py-2 rounded-lg font-bold text-navy border border-gray-200 min-w-[120px] text-right">
                                            {rate}%
                                        </div>
                                    </div>
                                    <input
                                        type="range"
                                        min="1" max="30" step="1"
                                        value={rate}
                                        onChange={(e) => setRate(Number(e.target.value))}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold"
                                    />
                                    <div className="flex justify-between mt-2 text-xs font-semibold text-gray-400">
                                        <span>1%</span>
                                        <span>30%</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Right: Visualization */}
                        <div className="lg:w-[55%] bg-navy-dark text-white p-8 lg:p-12 flex flex-col relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-full h-full bg-navy blur-3xl opacity-50 pointer-events-none"></div>

                            <h3 className="text-2xl font-playfair font-bold text-white mb-2 relative z-10 flex items-center gap-3">
                                <TrendingUp className="text-gold" /> Projected Wealth
                            </h3>
                            <div className="text-white/60 text-sm mb-10 relative z-10">Based on your inputs, your wealth will grow to:</div>

                            {/* Big Output Number */}
                            <div className="text-5xl lg:text-6xl font-playfair font-bold text-gold mb-10 relative z-10 drop-shadow-[0_0_20px_rgba(255,215,0,0.3)]">
                                {formatINR(Math.round(futureValue))}
                            </div>

                            {/* Data Breakdown Cards */}
                            <div className="grid grid-cols-2 gap-4 mb-10 relative z-10">
                                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                                    <div className="text-xs text-white/50 uppercase tracking-widest font-bold mb-1 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-white"></div> Invested
                                    </div>
                                    <div className="text-xl font-bold">{formatINR(totalInvestment)}</div>
                                </div>
                                <div className="bg-gold/10 p-4 rounded-xl border border-gold/20">
                                    <div className="text-xs text-gold uppercase tracking-widest font-bold mb-1 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-gold"></div> Returns
                                    </div>
                                    <div className="text-xl font-bold text-white">{formatINR(Math.round(estimatedReturns))}</div>
                                </div>
                            </div>

                            {/* Charts area */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 flex-grow min-h-[250px]">
                                {/* Donut Chart */}
                                <div className="h-full relative flex items-center justify-center">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <Pie
                                                data={pieData}
                                                innerRadius={60}
                                                outerRadius={90}
                                                paddingAngle={5}
                                                dataKey="value"
                                                stroke="none"
                                            >
                                                {pieData.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                                ))}
                                            </Pie>
                                            <Tooltip
                                                formatter={(value: number) => formatINR(value)}
                                                contentStyle={{ backgroundColor: '#002244', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff' }}
                                                itemStyle={{ color: '#fff' }}
                                            />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>

                                {/* Area Chart */}
                                <div className="h-full bg-navy/20 rounded-xl p-4 border border-white/5">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart data={areaData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                                            <defs>
                                                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="#FFD700" stopOpacity={0.8} />
                                                    <stop offset="95%" stopColor="#FFD700" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                                            <XAxis dataKey="year" stroke="rgba(255,255,255,0.3)" tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 10 }} tickLine={false} />
                                            <YAxis stroke="rgba(255,255,255,0.3)" tickFormatter={formatAxis} tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 10 }} tickLine={false} axisLine={false} />
                                            <Tooltip
                                                formatter={(value: number) => formatINR(value)}
                                                labelFormatter={(label) => `Year ${label}`}
                                                contentStyle={{ backgroundColor: '#002244', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                                            />
                                            <Area type="monotone" dataKey="Invested" stackId="1" stroke="#ffffff" fill="rgba(255,255,255,0.1)" strokeWidth={2} />
                                            <Area type="monotone" dataKey="Value" stackId="2" stroke="#FFD700" fill="url(#colorValue)" strokeWidth={2} />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>

                            <Link
                                href="/contact-us"
                                className="mt-8 text-center bg-gold text-navy py-4 rounded-xl font-bold hover:bg-yellow-400 transition-colors shadow-lg hover:shadow-xl relative z-10"
                            >
                                Plan this Portfolio with Us
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}
