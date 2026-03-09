"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Mr. Pulkit Shah",
    role: "Country Manager, Emeraude Polymers",
    text: "I was introduced to Sheetal by a friend and I have been with her for the past two years. Professionally, she is competent, knowledgeable and has a holistic approach to financial planning. She listens well to her client's needs and is able to recommend products accordingly. Since knowing her, I have seen growth in my investments.",
  },
  {
    name: "Mr. Gaurav Sharma",
    role: "Director, Sales - Kellogg India",
    text: "She gave us a thought and explained us in very proper manner. I saw in her integrity, trustworthiness, and financial acumen. My portfolio has increased about 14%. Understanding my needs and risk appetite, she was able to recommend the investment accordingly.",
  },
  {
    name: "Mr. Samir Chinoy",
    role: "Joint Managing Partner (CA), Chandabhoy & Jassoobhoy",
    text: "Sheetal has been handling my family's MF related investments for last couple of years. She has a good knowledge of MF industry and suggest investment plans keeping in mind the requirement of the client. She is very efficient and any grievance or clarification gets resolved very promptly.",
  },
  {
    name: "Mr. Nehal Ganatra",
    role: "Export Manager, Bhalaria Metal Craft Pvt Ltd.",
    text: "SK Financial Services was able to explain the various options and I found their advice and insight professional and holistic. Her expertise and domain knowledge is excellent. I work hard, but SK Financial Services makes my money work harder.",
  },
  {
    name: "Mr. Rajesh Shah",
    role: "Secretary, Winding Wire Association",
    text: "With her, you never feel pressured or treated like a sales target. Instead, you feel like you're talking with a trusted friend who offers great solutions for all your financial needs. Her expert knowledge makes planning, protecting and growing one's wealth easily accessible.",
  },
  {
    name: "Mr. Dayakar Shetty",
    role: "Director, Dayakar & Co.",
    text: "It is really refreshing to work with a financial adviser who is truly interested in their client's needs, circumstances and preferences. Your professional, ethical and caring demeanor elicits my trust and respect and I gladly recommend your services whenever possible.",
  },
  {
    name: "Mr. Pramod Jain",
    role: "CA - Practice",
    text: "We are really busy in our work, though I have required knowledge being a Chartered Accountant myself but can't devote much time. I really admire her knowledge in the field. For her, investment amount does not matter, only client matters, which is the best part.",
  },
  {
    name: "Mr. Vijay Bhalaria",
    role: "Export Manager, Bhalaria Metal Craft Pvt Ltd",
    text: "Sheetal Khanna is a brilliant financial planner and she has all of the best qualities of a professional adviser. She is highly client focused and cares deeply about the outcomes her clients achieve. I greatly admire her ability to make complex situations seem simple and clear.",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 3

  const totalPages = Math.ceil(testimonials.length / itemsPerPage)
  const currentPage = Math.floor(currentIndex / itemsPerPage)

  const next = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerPage >= testimonials.length ? 0 : prev + itemsPerPage
    )
  }

  const prev = () => {
    setCurrentIndex((prev) =>
      prev - itemsPerPage < 0
        ? (totalPages - 1) * itemsPerPage
        : prev - itemsPerPage
    )
  }

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + itemsPerPage
  )

  return (
    <section id="testimonials" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Testimonials
            </p>
            <h2 className="font-serif text-3xl font-bold text-foreground lg:text-4xl text-balance">
              What Our Clients Say
            </h2>
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="border-border text-foreground hover:bg-accent/10 hover:text-accent"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="border-border text-foreground hover:bg-accent/10 hover:text-accent"
              aria-label="Next testimonials"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleTestimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col rounded-lg border border-border bg-card p-8"
            >
              <Quote className="h-8 w-8 text-accent/40" />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {`"${testimonial.text}"`}
              </p>
              <div className="mt-6 flex items-center gap-4 border-t border-border pt-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-sm">
                  {testimonial.name
                    .replace("Mr. ", "")
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Page dots */}
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx * itemsPerPage)}
              aria-label={`Go to testimonial page ${idx + 1}`}
              className={`h-2 rounded-full transition-all ${
                currentPage === idx
                  ? "w-8 bg-accent"
                  : "w-2 bg-border hover:bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
