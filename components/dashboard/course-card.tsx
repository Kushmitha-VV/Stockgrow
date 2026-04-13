import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface CourseCardProps {
  title: string
  description: string
  icon: LucideIcon
  progress?: number
}

export function CourseCard({ title, description, icon: Icon, progress }: CourseCardProps) {
  return (
    <Card className="group hover:border-primary/30 transition-all">
      <CardContent className="pt-6">
        <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
          <Icon className="size-6 text-primary" />
        </div>
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        {progress !== undefined && (
          <div className="mb-4">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-muted-foreground">Progress</span>
              <span className="text-primary font-medium">{progress}%</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
        <Button variant="ghost" size="sm" className="w-full group-hover:bg-primary/10">
          Continue Learning
          <ArrowRight className="size-4 ml-2" />
        </Button>
      </CardContent>
    </Card>
  )
}
