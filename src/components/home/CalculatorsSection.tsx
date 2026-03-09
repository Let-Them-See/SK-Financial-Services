'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { GraduationCap, Heart, Home, Car, Plane, Clock, Target, Calculator } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

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
        { name: 'Total Invested', value: totalInvestment, color: 'hsl(var(--primary))' },
        { name: 'Est. Returns', value: estimatedReturns, color: 'hsl(var(--accent))' },
    ]

    return (
        <section id="tools" className="py-24 lg:py-32 bg-background">
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                        Financial Planning
                    </p>
                    <h2 className="font-serif text-3xl font-bold text-foreground lg:text-4xl text-balance">
                        Tools to Shape Your Financial Future
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                        Use our interactive calculators to map out your specific financial goals and map the path to achieving them.
                    </p>
                </div>

                {/* Tab Selector matched to Planning Tools reference */}
                <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 mb-16">
                    {tools.map((tool) => {
                        const isActive = activeTab === tool.id
                        return (
                            <div
                                key={tool.id}
                                onClick={() => setActiveTab(tool.id)}
                                className={`group cursor-pointer rounded-lg border p-4 text-center transition-all duration-300 hover:shadow-md ${isActive ? 'border-accent bg-accent/5 shadow-sm' : 'border-border bg-card hover:border-accent/40'}`}
                            >
                                <div className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full transition-colors ${isActive ? 'bg-accent/20' : 'bg-primary/5 group-hover:bg-accent/15'}`}>
                                    <tool.icon className={`h-6 w-6 transition-colors ${isActive ? 'text-accent' : 'text-primary group-hover:text-accent'}`} />
                                </div>
                                <h3 className={`mt-3 text-xs font-semibold ${isActive ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'}`}>
                                    {tool.name}
                                </h3>
                            </div>
                        )
                    })}
                </div>

                {/* Calculator Panel */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Card className="border-border shadow-lg mx-auto max-w-5xl overflow-hidden">
                            <CardContent className="p-8 lg:p-12">
                                {activeTab === 'sip' ? (
                                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                                        {/* Inputs */}
                                        <div className="space-y-8">
                                            <h3 className="text-2xl font-serif font-bold text-foreground border-b border-border pb-4">SIP Configurator</h3>

                                            {/* Amount Slider */}
                                            <div>
                                                <div className="flex justify-between items-center mb-4">
                                                    <label className="text-muted-foreground font-semibold text-xs tracking-wide">Monthly Investment</label>
                                                    <div className="bg-muted px-4 py-2 rounded-lg font-bold text-foreground border border-border">
                                                        ₹{amount.toLocaleString('en-IN')}
                                                    </div>
                                                </div>
                                                <input
                                                    type="range"
                                                    min="500" max="100000" step="500"
                                                    value={amount}
                                                    onChange={(e) => setAmount(Number(e.target.value))}
                                                    className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary hover:accent-accent transition-colors"
                                                />
                                            </div>

                                            {/* Years Slider */}
                                            <div>
                                                <div className="flex justify-between items-center mb-4">
                                                    <label className="text-muted-foreground font-semibold text-xs tracking-wide">Investment Period</label>
                                                    <div className="bg-muted px-4 py-2 rounded-lg font-bold text-foreground border border-border">
                                                        {years} Years
                                                    </div>
                                                </div>
                                                <input
                                                    type="range"
                                                    min="1" max="30" step="1"
                                                    value={years}
                                                    onChange={(e) => setYears(Number(e.target.value))}
                                                    className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary hover:accent-accent transition-colors"
                                                />
                                            </div>

                                            {/* Rate Slider */}
                                            <div>
                                                <div className="flex justify-between items-center mb-4">
                                                    <label className="text-muted-foreground font-semibold text-xs tracking-wide">Expected Return Rate</label>
                                                    <div className="bg-muted px-4 py-2 rounded-lg font-bold text-foreground border border-border">
                                                        {rate}%
                                                    </div>
                                                </div>
                                                <input
                                                    type="range"
                                                    min="1" max="30" step="1"
                                                    value={rate}
                                                    onChange={(e) => setRate(Number(e.target.value))}
                                                    className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary hover:accent-accent transition-colors"
                                                />
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
                                                            contentStyle={{ borderRadius: '12px', border: '1px solid hsl(var(--border))', background: 'hsl(var(--card))' }}
                                                        />
                                                    </PieChart>
                                                </ResponsiveContainer>
                                                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                                                    <span className="text-muted-foreground text-xs font-semibold uppercase tracking-widest mb-1">Total Value</span>
                                                    <span className="text-2xl font-bold font-serif text-foreground flex items-baseline">
                                                        <span className="text-lg mr-1 text-primary">₹</span>
                                                        {Math.round(futureValue).toLocaleString('en-IN')}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="w-full space-y-4">
                                                <div className="flex justify-between items-center p-4 bg-primary/5 rounded-xl border border-primary/10">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-4 h-4 rounded-full bg-primary border bg-[hsl(var(--primary))]"></div>
                                                        <span className="text-foreground font-semibold text-sm">Invested Amount</span>
                                                    </div>
                                                    <span className="text-foreground font-bold">₹{totalInvestment.toLocaleString('en-IN')}</span>
                                                </div>
                                                <div className="flex justify-between items-center p-4 bg-accent/10 rounded-xl border border-accent/20">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-4 h-4 rounded-full bg-accent border bg-[hsl(var(--accent))]"></div>
                                                        <span className="text-foreground font-semibold text-sm">Est. Returns</span>
                                                    </div>
                                                    <span className="text-foreground font-bold">₹{Math.round(estimatedReturns).toLocaleString('en-IN')}</span>
                                                </div>
                                            </div>

                                            <Button className="w-full mt-8 h-12 text-base rounded-full shadow-md bg-accent text-accent-foreground hover:bg-accent/90 focus-visible:ring-accent font-semibold transition-all">
                                                Start SIP Today
                                            </Button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-center py-20 flex flex-col items-center">
                                        <Target className="w-20 h-20 text-muted-foreground mb-6 opacity-50" />
                                        <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Goal Calculator Interface</h3>
                                        <p className="text-muted-foreground max-w-md">
                                            This interface will be populated with specific fields for the <strong>{tools.find(t => t.id === activeTab)?.name}</strong> goal. See the SIP configurator to understand the interactive chart layout.
                                        </p>
                                        <Button
                                            onClick={() => setActiveTab('sip')}
                                            variant="outline"
                                            className="mt-8 rounded-full border-primary/20 text-primary hover:bg-primary/5 h-12 px-8"
                                        >
                                            Return to SIP Calculator
                                        </Button>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    )
}
