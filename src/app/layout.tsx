import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroll'

export const metadata: Metadata = {
  title: 'SK Financial Services',
  description: 'Helping You To Grow Your Wealth',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-light-gray text-navy antialiased min-h-screen flex flex-col`}>
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow flex flex-col pt-16">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}