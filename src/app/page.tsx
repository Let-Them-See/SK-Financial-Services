import Hero from '@/components/home/Hero'
import StatsBar from '@/components/home/StatsBar'
import AboutSection from '@/components/home/AboutSection'
import ServicesSection from '@/components/home/ServicesSection'
import CalculatorsSection from '@/components/home/CalculatorsSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import KnowledgeCenter from '@/components/home/KnowledgeCenter'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Module */}
      <Hero />

      {/* 2. Trust Stats Indicator */}
      <StatsBar />

      {/* 3. About Sheetal Khanna & Firm */}
      <AboutSection />

      {/* 4. Specialized Services Grid */}
      <ServicesSection />

      {/* 5. Financial Tools / Calculators Tabular Map */}
      <CalculatorsSection />

      {/* 6. Blog & Knowledge Insights */}
      <KnowledgeCenter />

      {/* 7. Auto-scrolling Testimonials */}
      <TestimonialsSection />
    </div>
  )
}