import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import PlanningTools from "@/components/planning-tools"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Services />
      <PlanningTools />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
