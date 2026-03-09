'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Menu, X, ChevronDown, Phone,
  Briefcase, ShieldCheck, PieChart, Target, FileText,
  TrendingUp, Umbrella, Award, BarChart3, Landmark, FileBadge, Box, Activity
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from "@/components/ui/button"

const services = [
  { name: 'Investment Portfolio', href: '/investment-portfolio', icon: Briefcase, desc: 'Strategic investment planning' },
  { name: 'Insurance Policies', href: '/insurance-planning', icon: ShieldCheck, desc: 'Comprehensive risk management' },
  { name: 'Wealth Basket', href: '/wealth-management-0', icon: PieChart, desc: 'Diversified wealth-building' },
  { name: 'Targeted Investment', href: '/targeted-investment', icon: Target, desc: 'Goal-oriented strategies' },
  { name: 'Tax Optimization', href: '/tax-planning', icon: FileText, desc: 'Smart tax planning' },
]

const products = [
  { name: 'Mutual Funds', href: '/mutual-fund', icon: TrendingUp },
  { name: 'Insurance', href: '/general-insurance', icon: Umbrella },
  { name: 'PMS / AIF', href: '/pms', icon: Award },
  { name: 'Direct Equity', href: '/unlisted-equity', icon: BarChart3 },
  { name: 'Fixed Deposit', href: '/fixed-deposit', icon: Landmark },
  { name: 'Bonds', href: '/bonds', icon: FileBadge },
  { name: 'Smallcase', href: '/smallcase', icon: Box },
  { name: 'LiquiLoans', href: '/liquiloans', icon: Activity },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  const megaMenuVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.98, display: 'none' },
    visible: { opacity: 1, y: 0, scale: 1, display: 'block', transition: { duration: 0.2, ease: "easeOut" } },
    exit: { opacity: 0, y: 10, scale: 0.98, transition: { duration: 0.15, ease: "easeIn" }, transitionEnd: { display: 'none' } }
  }

  // Determine text color based on scroll and current route.
  // We want White when at top of Homepage. Dark when scrolled or on other pages for contrast against bg-background.
  const isDarkBg = pathname === '/' && !isScrolled
  const textColorClass = isDarkBg ? "text-white" : "text-foreground"
  const hoverColorClass = isDarkBg ? "text-white/80" : "text-foreground/80"

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || pathname !== '/'
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border py-2"
          : "bg-transparent py-4"
        }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="relative z-50 flex items-center gap-2 group p-2 rounded-xl transition-transform hover:scale-105">
          <img src="/logo.jpg" alt="SK Financial Services" className="h-[65px] w-auto object-contain rounded bg-white shadow-sm p-1" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8 relative">

          <Link href="/" className={`text-sm font-semibold transition-colors ${hoverColorClass} hover:opacity-80`}>
            Home
          </Link>

          <Link href="/AboutPage" className={`text-sm font-semibold transition-colors ${hoverColorClass} hover:opacity-80`}>
            About Us
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative py-4"
            onMouseEnter={() => setActiveDropdown('services')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className={`flex items-center gap-1 text-sm font-semibold transition-colors ${hoverColorClass} hover:opacity-80 outline-none`}>
              Services
              <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", activeDropdown === 'services' && "rotate-180")} />
            </button>

            <AnimatePresence>
              {activeDropdown === 'services' && (
                <motion.div
                  variants={megaMenuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-card border border-border shadow-xl rounded-2xl p-6 overflow-hidden z-50"
                >
                  <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="group flex gap-4 p-3 rounded-xl hover:bg-accent/5 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/5 group-hover:bg-accent/20 flex items-center justify-center shrink-0 transition-colors">
                          <service.icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
                        </div>
                        <div>
                          <div className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">{service.name}</div>
                          <div className="text-muted-foreground text-xs mt-1 leading-relaxed">{service.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Products Dropdown */}
          <div
            className="relative py-4"
            onMouseEnter={() => setActiveDropdown('products')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className={`flex items-center gap-1 text-sm font-semibold transition-colors ${hoverColorClass} hover:opacity-80 outline-none`}>
              Products
              <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", activeDropdown === 'products' && "rotate-180")} />
            </button>

            <AnimatePresence>
              {activeDropdown === 'products' && (
                <motion.div
                  variants={megaMenuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[500px] bg-card border border-border shadow-xl rounded-2xl p-6 overflow-hidden z-50"
                >
                  <div className="grid grid-cols-2 gap-3">
                    {products.map((product) => (
                      <Link
                        key={product.name}
                        href={product.href}
                        className="group flex items-center gap-3 p-3 rounded-xl hover:bg-accent/5 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-md bg-primary/5 group-hover:bg-accent/20 flex items-center justify-center shrink-0 transition-colors">
                          <product.icon className="w-4 h-4 text-primary group-hover:text-accent transition-colors" />
                        </div>
                        <span className="font-medium text-foreground text-sm group-hover:text-primary transition-colors">{product.name}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/calculators" className={`text-sm font-semibold transition-colors ${hoverColorClass} hover:opacity-80`}>
            Calculators
          </Link>

          <Link href="/blog" className={`text-sm font-semibold transition-colors ${hoverColorClass} hover:opacity-80`}>
            Knowledge Center
          </Link>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-4 z-50">
          <a
            href="tel:+917506715835"
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${hoverColorClass} hover:opacity-80`}
          >
            <Phone className="h-4 w-4" />
            <span className="font-bold">+91 7506715835</span>
          </a>
          <Button
            asChild
            size="sm"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold rounded-full px-6"
          >
            <Link href="/contact-us">Contact Us</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`lg:hidden p-2 relative z-50 ${textColorClass}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-card border-b border-border shadow-xl lg:hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="px-6 py-4 flex flex-col space-y-4">
              <Link href="/" className="text-foreground font-semibold py-2 border-b border-border/50">Home</Link>
              <Link href="/AboutPage" className="text-foreground font-semibold py-2 border-b border-border/50">About Us</Link>

              <div className="py-2 border-b border-border/50">
                <span className="text-muted-foreground font-bold text-xs uppercase tracking-wider mb-2 block">Services</span>
                <div className="grid grid-cols-1 gap-2 pl-2">
                  {services.map(s => (
                    <Link key={s.name} href={s.href} className="text-foreground text-sm font-medium py-1">{s.name}</Link>
                  ))}
                </div>
              </div>

              <div className="py-2 border-b border-border/50">
                <span className="text-muted-foreground font-bold text-xs uppercase tracking-wider mb-2 block">Products</span>
                <div className="grid grid-cols-2 gap-2 pl-2">
                  {products.map(p => (
                    <Link key={p.name} href={p.href} className="text-foreground text-sm font-medium py-1">{p.name}</Link>
                  ))}
                </div>
              </div>

              <Link href="/calculators" className="text-foreground font-semibold py-2 border-b border-border/50">Calculators</Link>
              <Link href="/blog" className="text-foreground font-semibold py-2 border-b border-border/50">Knowledge Center</Link>

              <div className="pt-4 pb-6 flex flex-col gap-3">
                <Button asChild className="w-full bg-accent text-accent-foreground rounded-full font-bold">
                  <Link href="/contact-us">Contact Us</Link>
                </Button>
                <Button asChild variant="outline" className="w-full rounded-full font-bold">
                  <Link href="/auth/login">Client Login</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}