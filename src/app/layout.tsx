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
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-light-gray text-navy antialiased min-h-screen flex flex-col relative`}>
        {/* Modern gradient background mesh */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-accent/10 to-light-gray/80" />
          <div className="absolute top-[20%] left-[10%] w-[60vw] h-[60vw] bg-accent/20 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-[10%] right-[10%] w-[40vw] h-[40vw] bg-primary/10 rounded-full blur-2xl opacity-20" />
        </div>
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow flex flex-col pt-16 relative z-10">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}