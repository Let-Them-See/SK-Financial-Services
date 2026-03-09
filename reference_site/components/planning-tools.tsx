import {
  GraduationCap,
  Heart,
  Home,
  Car,
  Plane,
  Sunset,
  Crosshair,
  Calculator,
} from "lucide-react"

const tools = [
  {
    icon: GraduationCap,
    title: "Child's Education",
    description: "Plan and secure funds for your child's higher education goals.",
  },
  {
    icon: Heart,
    title: "Child's Wedding",
    description: "Build a dedicated corpus for your child's dream wedding.",
  },
  {
    icon: Home,
    title: "Dream Home",
    description: "Calculate how to accumulate the down payment for your ideal home.",
  },
  {
    icon: Car,
    title: "Dream Car",
    description: "Set a target and timeline to drive home your dream vehicle.",
  },
  {
    icon: Plane,
    title: "Dream Vacation",
    description: "Plan savings for unforgettable family travel experiences.",
  },
  {
    icon: Sunset,
    title: "Retirement Planning",
    description: "Ensure a comfortable and financially secure retirement life.",
  },
  {
    icon: Crosshair,
    title: "Custom Goal",
    description: "Create personalized plans for any unique financial milestone.",
  },
  {
    icon: Calculator,
    title: "SIP Calculator",
    description: "Estimate returns on your systematic investment plans.",
  },
]

export function PlanningTools() {
  return (
    <section id="tools" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Financial Planning
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground lg:text-4xl text-balance">
            Tools to Shape Your Financial Future
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            Use our comprehensive suite of financial planning tools to set clear
            goals and map the path to achieving them.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool) => (
            <div
              key={tool.title}
              className="group cursor-pointer rounded-lg border border-border bg-card p-6 text-center transition-all duration-300 hover:shadow-md hover:border-accent/40"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/5 transition-colors group-hover:bg-accent/15">
                <tool.icon className="h-6 w-6 text-primary transition-colors group-hover:text-accent" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{tool.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {tool.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
