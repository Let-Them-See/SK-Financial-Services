"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Planning Tools", href: "#tools" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2">
          <div className={`flex flex-col ${isScrolled ? "text-foreground" : "text-card"}`}>
            <span className="font-serif text-xl font-bold leading-tight tracking-tight">
              SK Financial
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] opacity-70">
              Services
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:opacity-80 ${
                isScrolled ? "text-foreground" : "text-card"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+919876543210"
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              isScrolled ? "text-foreground" : "text-card"
            }`}
          >
            <Phone className="h-4 w-4" />
            <span className="sr-only">Call us</span>
          </a>
          <Button
            asChild
            size="sm"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
          >
            <a href="#contact">Book Consultation</a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden ${isScrolled ? "text-foreground" : "text-card"}`}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="bg-card/98 backdrop-blur-md border-t border-border lg:hidden">
          <div className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground text-sm font-medium py-2 border-b border-border/50 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              className="mt-2 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
            >
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Book Consultation
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
