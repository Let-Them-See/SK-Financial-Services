'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Menu, X, ChevronDown,
  Briefcase, ShieldCheck, PieChart, Target, FileText,
  TrendingUp, Umbrella, Award, BarChart3, Landmark, FileBadge, Box, Activity
} from 'lucide-react'
import { cn } from '@/lib/utils'

const services = [
  { name: 'Investment Portfolio', href: '/investment-portfolio', icon: Briefcase, desc: 'Customized investment strategies' },
  { name: 'Insurance Policies', href: '/insurance-planning', icon: ShieldCheck, desc: 'Protect your family and assets' },
  { name: 'Wealth Basket', href: '/wealth-management-0', icon: PieChart, desc: 'Holistic wealth management' },
  { name: 'Targeted Investment', href: '/targeted-investment', icon: Target, desc: 'Goal-based financial planning' },
  { name: 'Tax Optimization', href: '/tax-planning', icon: FileText, desc: 'Smart tax saving strategies' },
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

const downloads = [
  { name: 'Common Application Form', href: 'https://prudentcorporate.com/' },
  { name: 'FMP', href: 'https://prudentcorporate.com/' },
  { name: 'NFO', href: 'https://prudentcorporate.com/' },
  { name: 'FD', href: 'https://prudentcorporate.com/' },
  { name: 'KYC', href: 'https://prudentcorporate.com/' },
  { name: 'Income Tax Forms', href: 'https://prudentcorporate.com/' },
  { name: 'FATCA', href: 'https://prudentcorporate.com/' },
  { name: 'Transaction Slip', href: 'https://prudentcorporate.com/' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initialize on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  const staggerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: 'easeOut'
      }
    })
  }

  const megaMenuVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.98, pointerEvents: 'none' as any },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      pointerEvents: 'auto' as any,
      transition: { duration: 0.2, ease: 'easeOut' }
    },
    exit: {
      opacity: 0,
      y: 10,
      scale: 0.98,
      pointerEvents: 'none' as any,
      transition: { duration: 0.15, ease: 'easeIn' }
    }
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-in-out',
          isScrolled
            ? 'bg-navy/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-50 flex items-center gap-2 group">
              {/* Replace with actual image tag once logo is sourced, using text placeholder styled beautifully for now */}
              <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-navy font-playfair font-bold text-xl drop-shadow-md group-hover:scale-105 transition-transform">
                SK
              </div>
              <div className="flex flex-col">
                <span className="text-white font-playfair font-bold text-lg leading-none tracking-wide">Financial</span>
                <span className="text-gold font-sans text-xs font-semibold tracking-widest uppercase">Services</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {/* Home */}
              <Link href="/" className="relative group text-white font-medium text-sm tracking-wide">
                <span>Home</span>
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full",
                  pathname === '/' ? "w-full" : ""
                )} />
              </Link>

              {/* About Us */}
              <Link href="/AboutPage" className="relative group text-white font-medium text-sm tracking-wide">
                <span>About Us</span>
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full",
                  pathname === '/AboutPage' ? "w-full" : ""
                )} />
              </Link>

              {/* Services Mega Menu */}
              <div
                className="relative py-2"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 text-white font-medium text-sm tracking-wide group outline-none">
                  Services
                  <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", activeDropdown === 'services' && "rotate-180 text-gold")} />
                  <span className={cn(
                    "absolute bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300",
                    activeDropdown === 'services' ? "w-full" : ""
                  )} />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'services' && (
                    <motion.div
                      variants={megaMenuVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute top-full -left-[150px] mt-2 w-[600px] bg-white rounded-2xl shadow-2xl border border-light-gray overflow-hidden origin-top"
                    >
                      <div className="p-6 grid grid-cols-2 gap-4">
                        {services.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="group flex gap-4 p-3 rounded-xl hover:bg-light-gray transition-colors"
                          >
                            <div className="flex-shrink-0 w-12 h-12 bg-navy/5 text-navy rounded-full flex items-center justify-center group-hover:bg-gold group-hover:text-navy transition-colors">
                              <item.icon className="w-6 h-6" />
                            </div>
                            <div>
                              <h4 className="text-navy font-bold text-sm mb-1 group-hover:text-gold transition-colors">{item.name}</h4>
                              <p className="text-navy/60 text-xs leading-snug">{item.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="bg-light-gray px-6 py-4 flex justify-between items-center border-t border-gray-100">
                        <span className="text-xs text-navy/70 font-medium">Looking for customized advice?</span>
                        <Link href="/contact-us" className="text-xs font-bold text-navy hover:text-gold flex items-center gap-1">
                          Book Consultation &rarr;
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Products Mega Menu */}
              <div
                className="relative py-2"
                onMouseEnter={() => setActiveDropdown('products')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 text-white font-medium text-sm tracking-wide group outline-none">
                  Products
                  <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", activeDropdown === 'products' && "rotate-180 text-gold")} />
                  <span className={cn(
                    "absolute bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300",
                    activeDropdown === 'products' ? "w-full" : ""
                  )} />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'products' && (
                    <motion.div
                      variants={megaMenuVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute top-full -left-[200px] mt-2 w-[550px] bg-white rounded-2xl shadow-2xl border border-light-gray p-6 origin-top"
                    >
                      <h3 className="text-xs font-bold text-gold uppercase tracking-wider mb-4 px-2">Investment Instruments</h3>
                      <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                        {products.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="group flex items-center gap-3 p-2.5 rounded-lg hover:bg-light-gray transition-all"
                          >
                            <span className="w-8 h-8 rounded-full bg-navy/5 text-navy flex items-center justify-center group-hover:bg-gold group-hover:text-navy transition-colors">
                              <item.icon className="w-4 h-4" />
                            </span>
                            <span className="text-navy font-medium text-sm group-hover:text-gold transition-colors">{item.name}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Downloads Dropdown */}
              <div
                className="relative py-2"
                onMouseEnter={() => setActiveDropdown('downloads')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 text-white font-medium text-sm tracking-wide group outline-none">
                  Downloads
                  <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", activeDropdown === 'downloads' && "rotate-180 text-gold")} />
                  <span className={cn(
                    "absolute bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300",
                    activeDropdown === 'downloads' ? "w-full" : ""
                  )} />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'downloads' && (
                    <motion.div
                      variants={megaMenuVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute top-full right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-light-gray py-2 origin-top"
                    >
                      {downloads.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-5 py-2.5 text-sm text-navy hover:bg-light-gray hover:text-gold transition-colors font-medium"
                        >
                          {item.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/calculator" className="relative group text-white font-medium text-sm tracking-wide">
                <span>Calculators</span>
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full",
                  pathname === '/calculator' ? "w-full" : ""
                )} />
              </Link>

              <Link href="/blog" className="relative group text-white font-medium text-sm tracking-wide">
                <span>Blog</span>
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full",
                  pathname === '/blog' ? "w-full" : ""
                )} />
              </Link>
            </nav>

            {/* Desktop CTA & Login */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/contact-us"
                className="text-white font-medium text-sm hover:text-gold transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/LoginPage"
                className="bg-gold text-navy hover:bg-yellow-400 font-bold text-sm px-6 py-2.5 rounded-full shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:shadow-[0_0_20px_rgba(255,215,0,0.5)] hover:scale-105 transition-all duration-300"
              >
                Login
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden relative z-50 p-2 text-white hover:text-gold transition-colors outline-none"
              aria-label="Open Menu"
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-navy/60 backdrop-blur-sm z-[60]"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[90%] max-w-sm bg-navy border-l border-gold/20 z-[70] shadow-2xl overflow-y-auto"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-gold font-playfair font-bold text-xl">Menu</span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-white/70 hover:text-gold bg-white/5 rounded-full transition-all hover:bg-white/10"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex flex-col space-y-2 flex-grow">
                  <motion.div custom={1} variants={staggerVariants} initial="hidden" animate="visible">
                    <Link href="/" className="block py-3 text-lg text-white font-medium border-b border-white/5 hover:text-gold">Home</Link>
                  </motion.div>

                  <motion.div custom={2} variants={staggerVariants} initial="hidden" animate="visible">
                    <Link href="/AboutPage" className="block py-3 text-lg text-white font-medium border-b border-white/5 hover:text-gold">About Us</Link>
                  </motion.div>

                  <motion.div custom={3} variants={staggerVariants} initial="hidden" animate="visible">
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === 'mobile-services' ? null : 'mobile-services')}
                      className="w-full flex items-center justify-between py-3 text-lg text-white font-medium border-b border-white/5 hover:text-gold outline-none"
                    >
                      Services
                      <ChevronDown className={cn("w-5 h-5 transition-transform duration-300", activeDropdown === 'mobile-services' && "rotate-180 text-gold")} />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === 'mobile-services' && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden bg-navy-dark rounded-xl mt-2"
                        >
                          <div className="p-2 flex flex-col">
                            {services.map(item => (
                              <Link key={item.name} href={item.href} className="px-4 py-2.5 text-white/80 hover:text-gold text-sm font-medium rounded-lg hover:bg-white/5">
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  <motion.div custom={4} variants={staggerVariants} initial="hidden" animate="visible">
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === 'mobile-products' ? null : 'mobile-products')}
                      className="w-full flex items-center justify-between py-3 text-lg text-white font-medium border-b border-white/5 hover:text-gold outline-none"
                    >
                      Products
                      <ChevronDown className={cn("w-5 h-5 transition-transform duration-300", activeDropdown === 'mobile-products' && "rotate-180 text-gold")} />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === 'mobile-products' && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden bg-navy-dark rounded-xl mt-2"
                        >
                          <div className="p-2 flex flex-col">
                            {products.map(item => (
                              <Link key={item.name} href={item.href} className="px-4 py-2.5 text-white/80 hover:text-gold text-sm font-medium rounded-lg hover:bg-white/5">
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  <motion.div custom={5} variants={staggerVariants} initial="hidden" animate="visible">
                    <Link href="/calculator" className="block py-3 text-lg text-white font-medium border-b border-white/5 hover:text-gold">Calculators</Link>
                  </motion.div>

                  <motion.div custom={6} variants={staggerVariants} initial="hidden" animate="visible">
                    <Link href="/blog" className="block py-3 text-lg text-white font-medium border-b border-white/5 hover:text-gold">Blog</Link>
                  </motion.div>

                  <motion.div custom={7} variants={staggerVariants} initial="hidden" animate="visible">
                    <Link href="/gallery" className="block py-3 text-lg text-white font-medium border-b border-white/5 hover:text-gold">Gallery</Link>
                  </motion.div>

                  <motion.div custom={8} variants={staggerVariants} initial="hidden" animate="visible">
                    <Link href="/contact-us" className="block py-3 text-lg text-white font-medium border-b border-white/5 hover:text-gold">Contact</Link>
                  </motion.div>
                </div>

                <motion.div custom={9} variants={staggerVariants} initial="hidden" animate="visible" className="mt-8 pt-6 border-t border-white/10">
                  <Link
                    href="/LoginPage"
                    className="block w-full text-center bg-gold text-navy hover:bg-yellow-400 font-bold text-lg px-6 py-3.5 rounded-full transition-colors"
                  >
                    Client Login
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}