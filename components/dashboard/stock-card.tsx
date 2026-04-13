import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, TrendingDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface StockCardProps {
  name: string
  value: string
  change: number
  isPositive: boolean
}

export function StockCard({ name, value, change, isPositive }: StockCardProps) {
  return (
    <Card className="hover:border-primary/30 transition-colors">
      <CardContent className="pt-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground font-medium">{name}</p>
            <p className="text-2xl font-bold mt-1">{value}</p>
          </div>
          <div className={cn(
            "flex items-center gap-1 px-2.5 py-1 rounded-full text-sm font-medium",
            isPositive ? "bg-primary/10 text-primary" : "bg-destructive/10 text-destructive"
          )}>
            {isPositive ? (
              <TrendingUp className="size-4" />
            ) : (
              <TrendingDown className="size-4" />
            )}
            {isPositive ? "+" : ""}{change}%
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
