'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { GraduationCap, Heart, Home, Car, Plane, Clock, Target, Calculator } from 'lucide-react'

const tools = [
    { id: 'sip', name: 'SIP Calculator', icon: Calculator },
    { id: 'education', name: "Child's Education", icon: GraduationCap },
    { id: 'wedding', name: "Child's Wedding", icon: Heart },
    { id: 'home', name: 'Dream Home', icon: Home },
    { id: 'car', name: 'Dream Car', icon: Car },
    { id: 'vacation', name: 'Dream Vacation', icon: Plane },
    { id: 'retirement', name: 'Retirement Planning', icon: Clock },
    { id: 'custom', name: 'Custom Goal', icon: Target },
]

export default function CalculatorsSection() {
    const [activeTab, setActiveTab] = useState('sip')

    // Basic SIP state
    const [amount, setAmount] = useState(10000)
    const [years, setYears] = useState(10)
    const [rate, setRate] = useState(12)

    // SIP Calculation
    const monthlyRate = rate / 12 / 100
    const months = years * 12
    const futureValue = amount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate)
    const totalInvestment = amount * months
    const estimatedReturns = futureValue - totalInvestment

    const chartData = [
        { name: 'Total Invested', value: totalInvestment, color: '#002244' }, // Navy
        { name: 'Est. Returns', value: estimatedReturns, color: '#FFD700' }, // Gold
    ]

    return (
        <section className="py-24 bg-navy-dark text-white relative overflow-hidden">
            {/* Background styling for dark section */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-navy blur-3xl opacity-50"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-4 mb-4"
                    >
                        <div className="w-12 h-1 bg-gold rounded-full"></div>
                        <span className="text-gold font-bold uppercase tracking-widest text-sm">Plan Ahead</span>
                        <div className="w-12 h-1 bg-gold rounded-full"></div>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6"
                    >
                        Financial Planning Tools
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/70 text-lg"
                    >
                        Use our interactive calculators to map out your specific financial goals.
                    </motion.p>
                </div>

                {/* Tab Selector */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16"
                >
                    {tools.map((tool) => {
                        const isActive = activeTab === tool.id
                        return (
                            <button
                                key={tool.id}
                                onClick={() => setActiveTab(tool.id)}
                                className={`flex flex-col items-center gap-3 p-4 rounded-xl transition-all duration-300 w-28 sm:w-32 ${isActive
                                        ? 'bg-gold text-navy shadow-[0_0_20px_rgba(255,215,0,0.3)] scale-105'
                                        : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                                    }`}
                            >
                                <tool.icon className={`w-8 h-8 ${isActive ? 'text-navy' : 'text-gold'}`} />
                                <span className="text-xs font-bold text-center leading-tight">{tool.name}</span>
                            </button>
                        )
                    })}
                </motion.div>

                {/* Calculator Panel */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4 }}
                        className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl mx-auto max-w-5xl border border-light-gray"
                    >
                        {activeTab === 'sip' ? (
                            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                                {/* Inputs */}
                                <div className="space-y-8">
                                    <h3 className="text-2xl font-playfair font-bold text-navy border-b border-light-gray pb-4">SIP Configurator</h3>

                                    {/* Amount Slider */}
                                    <div>
                                        <div className="flex justify-between items-center mb-4">
                                            <label className="text-gray-700 font-bold text-sm uppercase tracking-wide">Monthly Investment</label>
                                            <div className="bg-light-gray px-4 py-2 rounded-lg font-bold text-navy border border-gray-200">
                                                ₹{amount.toLocaleString('en-IN')}
                                            </div>
                                        </div>
                                        <input
                                            type="range"
                                            min="500" max="100000" step="500"
                                            value={amount}
                                            onChange={(e) => setAmount(Number(e.target.value))}
                                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold"
                                        />
                                        <div className="flex justify-between mt-2 text-xs font-semibold text-gray-400">
                                            <span>₹500</span>
                                            <span>₹1,00,000</span>
                                        </div>
                                    </div>

                                    {/* Years Slider */}
                                    <div>
                                        <div className="flex justify-between items-center mb-4">
                                            <label className="text-gray-700 font-bold text-sm uppercase tracking-wide">Investment Period</label>
                                            <div className="bg-light-gray px-4 py-2 rounded-lg font-bold text-navy border border-gray-200">
                                                {years} Years
                                            </div>
                                        </div>
                                        <input
                                            type="range"
                                            min="1" max="30" step="1"
                                            value={years}
                                            onChange={(e) => setYears(Number(e.target.value))}
                                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold"
                                        />
                                        <div className="flex justify-between mt-2 text-xs font-semibold text-gray-400">
                                            <span>1 Yr</span>
                                            <span>30 Yrs</span>
                                        </div>
                                    </div>

                                    {/* Rate Slider */}
                                    <div>
                                        <div className="flex justify-between items-center mb-4">
                                            <label className="text-gray-700 font-bold text-sm uppercase tracking-wide">Expected Return Rate</label>
                                            <div className="bg-light-gray px-4 py-2 rounded-lg font-bold text-navy border border-gray-200">
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

                                {/* Outputs & Chart */}
                                <div className="flex flex-col items-center">
                                    <div className="h-64 w-full relative mb-8">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <PieChart>
                                                <Pie
                                                    data={chartData}
                                                    innerRadius={70}
                                                    outerRadius={100}
                                                    paddingAngle={5}
                                                    dataKey="value"
                                                >
                                                    {chartData.map((entry, index) => (
                                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                                    ))}
                                                </Pie>
                                                <Tooltip
                                                    formatter={(value: number) => `₹${value.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`}
                                                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
                                                />
                                            </PieChart>
                                        </ResponsiveContainer>
                                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                                            <span className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Total Value</span>
                                            <span className="text-2xl font-bold font-playfair text-navy flex items-baseline">
                                                <span className="text-lg mr-1">₹</span>
                                                {Math.round(futureValue).toLocaleString('en-IN')}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="w-full space-y-4">
                                        <div className="flex justify-between items-center p-4 bg-navy/5 rounded-xl border border-navy/10">
                                            <div className="flex items-center gap-3">
                                                <div className="w-4 h-4 rounded-full bg-navy"></div>
                                                <span className="text-navy font-bold text-sm">Invested Amount</span>
                                            </div>
                                            <span className="text-navy font-bold">₹{totalInvestment.toLocaleString('en-IN')}</span>
                                        </div>
                                        <div className="flex justify-between items-center p-4 bg-gold/10 rounded-xl border border-gold/20">
                                            <div className="flex items-center gap-3">
                                                <div className="w-4 h-4 rounded-full bg-gold"></div>
                                                <span className="text-navy font-bold text-sm">Est. Returns</span>
                                            </div>
                                            <span className="text-navy font-bold">₹{Math.round(estimatedReturns).toLocaleString('en-IN')}</span>
                                        </div>
                                    </div>

                                    <button className="w-full mt-8 bg-navy text-white py-4 rounded-full font-bold hover:bg-gold hover:text-navy transition-colors transform hover:-translate-y-1 shadow-lg">
                                        Start SIP Today
                                    </button>
                                </div>

                            </div>
                        ) : (
                            <div className="text-center py-20 flex flex-col items-center">
                                <Target className="w-20 h-20 text-gold mb-6 opacity-50" />
                                <h3 className="text-2xl font-playfair font-bold text-navy mb-4">Goal Calculator Interface</h3>
                                <p className="text-gray-600 max-w-md">
                                    This interface will be populated with specific fields for the <strong>{tools.find(t => t.id === activeTab)?.name}</strong> goal in the full calculation page. For now, see the SIP configurator to understand the interactive chart layout.
                                </p>
                                <button
                                    onClick={() => setActiveTab('sip')}
                                    className="mt-8 border-2 border-navy text-navy px-8 py-3 rounded-full font-bold hover:bg-navy hover:text-white transition-all"
                                >
                                    Return to SIP Calculator
                                </button>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    )
}
