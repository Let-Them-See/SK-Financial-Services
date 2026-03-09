import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'SK Financial Services | Expert Financial Advisory Since 2005',
  description:
    'SK Financial Services - AMFI certified Mutual Fund distributor & IRDA certified Insurance Consultant. 19+ years of experience, 1000+ clients, 200Cr+ AUM. Your trusted partner for financial growth.',
  keywords: 'financial advisor, mutual funds, insurance, wealth management, tax optimization, NRI portfolio, AMFI certified, IRDA certified',
}

export const viewport = {
  themeColor: '#1a2744',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
