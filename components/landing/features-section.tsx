import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, PieChart, Lightbulb, BarChart3, Shield, Zap } from "lucide-react"

const features = [
  {
    icon: TrendingUp,
    title: "Real-time Market Insights",
    description: "Get live updates on market trends, stock movements, and investment opportunities as they happen."
  },
  {
    icon: PieChart,
    title: "Portfolio Growth Tracking",
    description: "Monitor your portfolio performance with detailed analytics and growth projections over time."
  },
  {
    icon: Lightbulb,
    title: "Smart Investment Strategies",
    description: "Access expert-curated strategies and personalized recommendations based on your goals."
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Deep dive into comprehensive charts, patterns, and technical analysis tools."
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Understand and manage your portfolio risk with intelligent alerts and suggestions."
  },
  {
    icon: Zap,
    title: "Quick Actions",
    description: "Execute trades and manage your investments with streamlined, efficient workflows."
  }
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Everything You Need to
            <span className="text-primary"> Succeed</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Powerful tools and insights designed to help you make smarter investment decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card 
              key={feature.title} 
              className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <CardContent className="pt-6">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="size-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
