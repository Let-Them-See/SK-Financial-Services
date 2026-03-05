'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

const headlines = [
  "Make your personal finance easy with us",
  "Helping You To Grow Your Wealth"
]

const services = [
  {
    name: 'Investment Portfolio',
    description: 'Whenever you think of making investment, three things should come on top of your mind',
    href: '/investment-portfolio'
  },
  {
    name: 'Insurance Policies',
    description: 'Insurance is an important risk management tool that can protect you and your family from financial hardship',
    href: '/insurance-planning'
  },
  {
    name: 'Wealth Basket',
    description: 'Wealth is an abundance of variable material resources. The meaning of wealth is not straightforward.',
    href: '/wealth-management-0'
  },
  {
    name: 'Tax Optimization',
    description: 'Tax planning involves optimizing your wealth creation and protecting your health, life and assets',
    href: '/tax-planning'
  },
  {
    name: 'Targeted Investment',
    description: 'Making holistic investment choice is always preferred than making random investments.',
    href: '/targeted-investment'
  }
]

const testimonials = [
  {
    name: 'Mr. Pulkit Shah',
    designation: 'Country Manager – Emeraude Polymers',
    text: 'I knew Sheetal Khanna a couple of years before I approached her to manage my portfolio. I was not doing any serious financial planning, But She gave us a thought and explained us in very proper manner...',
    image: 'https://skfinservices.com/media/images/home/pulkit.jpg'
  },
  {
    name: 'Mr. Gaurav Sharma',
    designation: 'Director, Sales – Kellogg India',
    text: 'Professionally, She is competent, knowledgeable and has a holistic approach to financial planning. She listens well to her client’s needs and is able to recommend products accordingly...',
    image: 'https://skfinservices.com/media/images/home/guarav.jpg'
  }
]

export default function Home() {
  const [currentHeadline, setCurrentHeadline] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-[#001f3f] to-[#001122] overflow-hidden">
        {/* Fixed SVG URL: Replaced double quotes with single quotes and escaped properly */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2760%27 height=%2760%27 viewBox=%270 0 60 60%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg fill=%27%23FFD700%27 fill-opacity=%270.1%27%3E%3Ccircle cx=%2730%27 cy=%2730%27 r=%272%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="text-center z-10 px-4">
          <div className="h-32 md:h-40 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentHeadline}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-serif text-white max-w-4xl"
              >
                {headlines[currentHeadline]}
              </motion.h1>
            </AnimatePresence>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/investment-portfolio" className="bg-[#FFD700] text-[#001f3f] px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors">
              Read More
            </Link>
            <Link href="/contact-us" className="border-2 border-[#FFD700] text-[#FFD700] px-8 py-3 rounded-full font-semibold hover:bg-[#FFD700] hover:text-[#001f3f] transition-colors">
              Contact Us
            </Link>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#FFD700] text-2xl"
        >
          ↓
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#001122] py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: 'Years Experience', val: '19+' },
            { label: 'Satisfied Clients', val: '1,000+' },
            { label: 'Assets Managed', val: '₹200Cr+' },
            { label: 'Certified', val: 'AMFI & IRDA' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-[#FFD700]"
            >
              <div className="text-3xl font-bold">{stat.val}</div>
              <div className="text-white text-sm uppercase tracking-wider mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-4 border-[#FFD700] rounded-lg -z-10"></div>
              <img src="https://skfinservices.com/media/images/home/about.jpg" alt="About Sheetal Khanna" className="rounded-lg shadow-xl w-full" />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-1 bg-[#FFD700] mb-6"></div>
            <h2 className="text-4xl font-serif text-[#001f3f] mb-6">About Us</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Welcome to SK Financial Services, where expertise meets excellence in financial advisory. 
              Founded by Sheetal Khanna, we cater to 1,000+ satisfied clients, manage 200Cr+ in assets, 
              and specialize in NRI portfolios. We are your trusted partner for achieving financial stability and growth.
            </p>
            <Link href="/AboutPage" className="inline-block bg-[#001f3f] text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all">
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-serif text-[#001f3f] text-center mb-16">Our Specialized Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-t-[#FFD700]"
              >
                <h3 className="text-xl font-bold text-[#001f3f] mb-4">{service.name}</h3>
                <p className="text-gray-600 mb-6 line-clamp-3">{service.description}</p>
                <Link href={service.href} className="text-[#001f3f] font-bold inline-flex items-center group">
                  Explore Service <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#001f3f] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
          <h2 className="text-4xl font-serif text-white">What Our Clients Say</h2>
        </div>
        
        <div className="flex">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="flex gap-8 whitespace-nowrap"
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 w-[450px] whitespace-normal shadow-2xl flex-shrink-0">
                <div className="text-[#FFD700] text-5xl mb-4 font-serif">“</div>
                <p className="text-gray-700 italic mb-8">{t.text}</p>
                <div className="flex items-center gap-4">
                  <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-[#FFD700]" />
                  <div>
                    <div className="font-bold text-[#001f3f]">{t.name}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-tighter">{t.designation}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#001122] text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-[#FFD700] text-xl font-bold mb-6">SK Financial</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Achieving financial excellence through customized investment strategies and expert advisory for over 19 years.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="/" className="hover:text-[#FFD700]">Home</Link></li>
              <li><Link href="/AboutPage" className="hover:text-[#FFD700]">About Us</Link></li>
              <li><Link href="/contact-us" className="hover:text-[#FFD700]">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6">Contact Info</h3>
            <p className="text-gray-400 text-sm mb-4">Borivali West, Mumbai, MH</p>
            <p className="text-gray-400 text-sm">7506715835</p>
            <p className="text-gray-400 text-sm">sheetal@skfinservices.com</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6">Compliance</h3>
            <Link href="/PrivacyPolicy" className="block text-gray-400 text-sm hover:text-[#FFD700] mb-4">Privacy Policy</Link>
            <Link href="/TermsConditions" className="block text-gray-400 text-sm hover:text-[#FFD700]">Terms & Conditions</Link>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-xs">
          © 2026 SK Financial Services. Registered AMFI Mutual Fund Distributor.
        </div>
      </footer>
    </div>
  )
}