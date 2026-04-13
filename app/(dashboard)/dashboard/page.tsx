import { StockCard } from "@/components/dashboard/stock-card"
import { PerformanceChart } from "@/components/dashboard/performance-chart"
import { CourseCard } from "@/components/dashboard/course-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Target, BookOpen, BarChart2 } from "lucide-react"

const stockData = [
  { name: "NIFTY 50", value: "22,456.80", change: 0.52, isPositive: true },
  { name: "SENSEX", value: "73,892.15", change: 0.23, isPositive: false },
  { name: "Portfolio Value", value: "₹50,000", change: 2.34, isPositive: true },
  { name: "Today's Gain", value: "₹1,170", change: 2.34, isPositive: true },
]

const courses = [
  {
    title: "Improve Strategy",
    description: "Learn advanced portfolio management techniques",
    icon: Target,
    progress: 65,
  },
  {
    title: "Options Trading",
    description: "Master options trading fundamentals",
    icon: BarChart2,
    progress: 30,
  },
  {
    title: "Technical Analysis",
    description: "Read charts and identify patterns",
    icon: BookOpen,
    progress: 45,
  },
]

export default function DashboardPage() {
  return (
    <div className="space-y-8 pt-12 lg:pt-0">
      {/* Welcome Section */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">Welcome back, Investor</h1>
        <p className="text-muted-foreground mt-1">{"Here's"} what{"'s"} happening with your portfolio today.</p>
      </div>

      {/* Stock Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stockData.map((stock) => (
          <StockCard key={stock.name} {...stock} />
        ))}
      </div>

      {/* Chart and Performance Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <PerformanceChart />
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Your Progress</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">Profit Growth</span>
                <span className="font-semibold text-primary">60%</span>
              </div>
              <Progress value={60} className="h-3" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">Portfolio Diversity</span>
                <span className="font-semibold text-primary">75%</span>
              </div>
              <Progress value={75} className="h-3" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">Risk Score</span>
                <span className="font-semibold text-primary">45%</span>
              </div>
              <Progress value={45} className="h-3" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">Learning Progress</span>
                <span className="font-semibold text-primary">82%</span>
              </div>
              <Progress value={82} className="h-3" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Courses Section */}
      <div>
        <h2 className="text-xl font-bold mb-4">Continue Learning</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {courses.map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}
        </div>
      </div>
    </div>
  )
}
