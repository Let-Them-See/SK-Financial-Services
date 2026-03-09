
import PageNavigation from '@/components/shared/PageNavigation'
import HeroSection from '@/components/homepage/HeroSection'
import StatsBar from '@/components/homepage/StatsBar'
import AboutSection from '@/components/homepage/AboutSection'
import ServicesSection from '@/components/homepage/ServicesSection'
import PlanningToolsSection from '@/components/homepage/PlanningToolsSection'
import TestimonialsSection from '@/components/homepage/TestimonialsSection'
import CTABanner from '@/components/homepage/CTABanner'
import PageFooter from '@/components/shared/PageFooter'

export default function Home() {
  return (
    <main style={{ background: '#001F3E' }}>
      <PageNavigation />
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <ServicesSection />
      <PlanningToolsSection />
      <TestimonialsSection />
      <CTABanner />
      <PageFooter />
    </main>
  )
}