'use client'

import { useState } from 'react'

import { motion, AnimatePresence } from 'framer-motion'

import Link from 'next/link'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const services = [

    { name: 'Investment Portfolio', href: '/investment-portfolio' },

    { name: 'Insurance Policies', href: '/insurance-planning' },

    { name: 'Wealth Basket', href: '/wealth-management-0' },

    { name: 'Targeted Investment', href: '/targeted-investment' },

    { name: 'Tax Optimization', href: '/tax-planning' },

  ]

  const products = [

    { name: 'Mutual Funds', href: '/mutual-fund' },

    { name: 'Insurance', href: '/general-insurance' },

    { name: 'PMS / AIF', href: '/pms' },

    { name: 'Direct Equity', href: '/unlisted-equity' },

    { name: 'Fixed Deposit', href: '/fixed-deposit' },

    { name: 'Bonds', href: '/bonds' },

    { name: 'Smallcase', href: '/smallcase' },

    { name: 'LiquiLoans', href: '/liquiloans' },

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

  return (

    <nav className="fixed top-0 w-full bg-primary-navy/90 backdrop-blur-md z-50 transition-all duration-300">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center h-16">

          <Link href="/" className="text-gold text-2xl font-bold">SK FS</Link>

          <div className="hidden md:flex space-x-8">

            <div className="relative" onMouseEnter={() => setActiveDropdown('services')} onMouseLeave={() => setActiveDropdown(null)}>

              <button className="text-white hover:text-gold transition-colors">Services</button>

              <AnimatePresence>

                {activeDropdown === 'services' && (

                  <motion.div

                    initial={{ opacity: 0, y: -10 }}

                    animate={{ opacity: 1, y: 0 }}

                    exit={{ opacity: 0, y: -10 }}

                    className="absolute top-full left-0 bg-white shadow-lg rounded-md p-4 w-96 grid grid-cols-2 gap-4"

                  >

                    {services.map((service) => (

                      <Link key={service.name} href={service.href} className="flex items-center p-3 hover:bg-light-gray rounded-md group">

                        <div className="w-8 h-8 bg-gold rounded-full mr-3 group-hover:scale-110 transition-transform"></div>

                        <span className="text-primary-navy group-hover:text-gold">{service.name}</span>

                      </Link>

                    ))}

                  </motion.div>

                )}

              </AnimatePresence>

            </div>

            <div className="relative" onMouseEnter={() => setActiveDropdown('products')} onMouseLeave={() => setActiveDropdown(null)}>

              <button className="text-white hover:text-gold transition-colors">Products</button>

              <AnimatePresence>

                {activeDropdown === 'products' && (

                  <motion.div

                    initial={{ opacity: 0, y: -10 }}

                    animate={{ opacity: 1, y: 0 }}

                    exit={{ opacity: 0, y: -10 }}

                    className="absolute top-full left-0 bg-white shadow-lg rounded-md p-4 w-96 grid grid-cols-2 gap-4"

                  >

                    {products.map((product) => (

                      <Link key={product.name} href={product.href} className="flex items-center p-3 hover:bg-light-gray rounded-md group">

                        <div className="w-8 h-8 bg-gold rounded-full mr-3 group-hover:scale-110 transition-transform"></div>

                        <span className="text-primary-navy group-hover:text-gold">{product.name}</span>

                      </Link>

                    ))}

                  </motion.div>

                )}

              </AnimatePresence>

            </div>

            <div className="relative" onMouseEnter={() => setActiveDropdown('downloads')} onMouseLeave={() => setActiveDropdown(null)}>

              <button className="text-white hover:text-gold transition-colors">Downloads</button>

              <AnimatePresence>

                {activeDropdown === 'downloads' && (

                  <motion.div

                    initial={{ opacity: 0, y: -10 }}

                    animate={{ opacity: 1, y: 0 }}

                    exit={{ opacity: 0, y: -10 }}

                    className="absolute top-full left-0 bg-white shadow-lg rounded-md p-4 w-64"

                  >

                    {downloads.map((download) => (

                      <a key={download.name} href={download.href} className="block py-2 text-primary-navy hover:text-gold">

                        {download.name}

                      </a>

                    ))}

                  </motion.div>

                )}

              </AnimatePresence>

            </div>

            <Link href="/calculator" className="text-white hover:text-gold transition-colors">Calculator</Link>

            <Link href="/blog" className="text-white hover:text-gold transition-colors">Blog</Link>

            <Link href="/gallery" className="text-white hover:text-gold transition-colors">Gallery</Link>

            <Link href="/contact-us" className="text-white hover:text-gold transition-colors">Contact</Link>

            <Link href="/LoginPage" className="bg-gold text-primary-navy px-4 py-2 rounded-full hover:bg-yellow-400 transition-colors">Login</Link>

          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">

            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">

              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />

            </svg>

          </button>

        </div>

      </div>

      <AnimatePresence>

        {isOpen && (

          <motion.div

            initial={{ opacity: 0, height: 0 }}

            animate={{ opacity: 1, height: 'auto' }}

            exit={{ opacity: 0, height: 0 }}

            className="md:hidden bg-primary-navy"

          >

            <div className="px-4 py-4 space-y-4">

              <div>

                <button onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')} className="text-white">Services</button>

                <AnimatePresence>

                  {activeDropdown === 'services' && (

                    <motion.div

                      initial={{ opacity: 0, height: 0 }}

                      animate={{ opacity: 1, height: 'auto' }}

                      exit={{ opacity: 0, height: 0 }}

                      className="ml-4 mt-2 space-y-2"

                    >

                      {services.map((service) => (

                        <Link key={service.name} href={service.href} className="block text-gray-300 hover:text-gold">

                          {service.name}

                        </Link>

                      ))}

                    </motion.div>

                  )}

                </AnimatePresence>

              </div>

              {/* Similar for products and downloads */}

              <Link href="/calculator" className="block text-gray-300 hover:text-gold">Calculator</Link>

              <Link href="/blog" className="block text-gray-300 hover:text-gold">Blog</Link>

              <Link href="/gallery" className="block text-gray-300 hover:text-gold">Gallery</Link>

              <Link href="/contact-us" className="block text-gray-300 hover:text-gold">Contact</Link>

              <Link href="/LoginPage" className="block bg-gold text-primary-navy px-4 py-2 rounded-full text-center">Login</Link>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </nav>

  )

}

export default Navbar