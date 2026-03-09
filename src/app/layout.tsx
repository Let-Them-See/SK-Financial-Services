import type { Metadata } from 'next'

import { DM_Sans, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans', weight: ['300','400','500','600','700'] })
const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-cormorant', weight: ['300','400','500','600','700'] })

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroll'

export const metadata: Metadata = {
  title: 'SK Financial Services | Expert Financial Advisory',
  description: 'Expert financial advisory with 19+ years of experience. 1,000+ satisfied clients. ₹200Cr+ assets managed.',
  themeColor: '#001F3E',
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${cormorant.variable} font-sans min-h-screen flex flex-col antialiased`}>
        {children}
      </body>
    </html>
  )
}