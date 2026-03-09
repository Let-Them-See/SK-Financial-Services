import type { Metadata } from 'next'


import { DM_Sans, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'], variable: '--font-dm-sans',
  weight: ['300','400','500','600','700'], display: 'swap'
})
const cormorant = Cormorant_Garamond({
  subsets: ['latin'], variable: '--font-cormorant',
  weight: ['400','500','600','700'], display: 'swap'
})


export const metadata: Metadata = {
  title: { default: 'SK Financial Services | Expert Financial Advisory', template: '%s | SK Financial Services' },
  description: 'AMFI certified Mutual Fund distributor & IRDA certified Insurance Consultant. 19+ years, 1000+ clients, ₹200Cr+ AUM. Mumbai-based wealth management experts.',
  keywords: 'financial advisor Mumbai, mutual funds, insurance planning, wealth management, tax optimization, NRI portfolio, AMFI certified, IRDA certified, Sheetal Khanna',
}
export const viewport = { themeColor: '#001F3E' }


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${cormorant.variable}`}
        style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", background: '#001F3E', color: '#FFFFFF' }}>
        {children}
      </body>
    </html>
  )
}