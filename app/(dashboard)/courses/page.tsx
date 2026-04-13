import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Target, BookOpen, BarChart2, TrendingUp, PieChart, Shield, ArrowRight, Clock } from "lucide-react"

const courses = [
  {
    title: "Investment Strategy Fundamentals",
    description: "Learn the core principles of building a successful investment strategy",
    icon: Target,
    duration: "4 hours",
    level: "Beginner",
    progress: 65,
  },
  {
    title: "Options Trading Mastery",
    description: "Master the art of options trading with practical examples",
    icon: BarChart2,
    duration: "6 hours",
    level: "Intermediate",
    progress: 30,
  },
  {
    title: "Technical Analysis Deep Dive",
    description: "Read charts like a pro and identify profitable patterns",
    icon: BookOpen,
    duration: "5 hours",
    level: "Intermediate",
    progress: 45,
  },
  {
    title: "Growth Stock Investing",
    description: "Find and analyze high-growth potential companies",
    icon: TrendingUp,
    duration: "3 hours",
    level: "Beginner",
    progress: 0,
  },
  {
    title: "Portfolio Diversification",
    description: "Build a balanced portfolio that minimizes risk",
    icon: PieChart,
    duration: "4 hours",
    level: "Intermediate",
    progress: 0,
  },
  {
    title: "Risk Management Essentials",
    description: "Protect your investments with proven risk management techniques",
    icon: Shield,
    duration: "3 hours",
    level: "Beginner",
    progress: 0,
  },
]

export default function CoursesPage() {
  return (
    <div className="space-y-8 pt-12 lg:pt-0">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">Courses</h1>
        <p className="text-muted-foreground mt-1">Improve your investment skills with expert-led courses</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.title} className="group hover:border-primary/30 transition-all flex flex-col">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <course.icon className="size-6 text-primary" />
                </div>
                <Badge variant="secondary">{course.level}</Badge>
              </div>
              <CardTitle className="text-lg mt-4">{course.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <p className="text-sm text-muted-foreground mb-4 flex-1">{course.description}</p>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Clock className="size-4" />
                {course.duration}
              </div>

              {course.progress > 0 && (
                <div className="mb-4">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="text-primary font-medium">{course.progress}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full transition-all"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
              )}

              <Button 
                variant={course.progress > 0 ? "default" : "outline"} 
                className="w-full"
              >
                {course.progress > 0 ? "Continue" : "Start Course"}
                <ArrowRight className="size-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
