"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@skfinservices.com",
    href: "mailto:info@skfinservices.com",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Mumbai, Maharashtra, India",
    href: undefined,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon - Sat: 10:00 AM - 7:00 PM",
    href: undefined,
  },
]

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    alert("Thank you for your inquiry! We will get back to you shortly.")
    setFormState({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left Side */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Get In Touch
            </p>
            <h2 className="font-serif text-3xl font-bold text-foreground lg:text-4xl text-balance">
              Start Your Financial Journey Today
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Ready to take control of your financial future? Reach out for a
              free consultation and let us design a personalized plan that works
              for you.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/5">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-1 text-foreground font-medium hover:text-accent transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-foreground font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="rounded-lg border border-border bg-card p-8 lg:p-10">
            <h3 className="text-xl font-semibold text-foreground">
              Book a Free Consultation
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill in your details and we{"'"}ll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
              <div>
                <Label htmlFor="name" className="text-foreground">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  required
                  className="mt-2 bg-background border-border"
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    required
                    className="mt-2 bg-background border-border"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-foreground">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={formState.phone}
                    onChange={(e) =>
                      setFormState({ ...formState, phone: e.target.value })
                    }
                    className="mt-2 bg-background border-border"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="message" className="text-foreground">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your financial goals..."
                  rows={4}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="mt-2 bg-background border-border resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="mt-2 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
              >
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
