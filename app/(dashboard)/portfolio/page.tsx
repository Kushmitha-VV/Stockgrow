import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Wallet, PiggyBank, LineChart } from "lucide-react"
import { cn } from "@/lib/utils"

const portfolioStats = [
  {
    title: "Invested Amount",
    value: "₹40,000",
    icon: Wallet,
    description: "Total capital invested",
  },
  {
    title: "Current Value",
    value: "₹50,000",
    icon: PiggyBank,
    description: "Current portfolio worth",
  },
  {
    title: "Total Profit/Loss",
    value: "+₹10,000",
    icon: LineChart,
    isPositive: true,
    description: "+25% returns",
  },
]

const holdings = [
  {
    symbol: "RELIANCE",
    name: "Reliance Industries Ltd",
    qty: 10,
    avgPrice: 2450.00,
    currentPrice: 2680.50,
    invested: 24500.00,
    currentValue: 26805.00,
    pnl: 2305.00,
    pnlPercent: 9.41,
  },
  {
    symbol: "TCS",
    name: "Tata Consultancy Services",
    qty: 5,
    avgPrice: 3200.00,
    currentPrice: 3450.75,
    invested: 16000.00,
    currentValue: 17253.75,
    pnl: 1253.75,
    pnlPercent: 7.84,
  },
  {
    symbol: "INFY",
    name: "Infosys Ltd",
    qty: 8,
    avgPrice: 1450.00,
    currentPrice: 1380.25,
    invested: 11600.00,
    currentValue: 11042.00,
    pnl: -558.00,
    pnlPercent: -4.81,
  },
  {
    symbol: "HDFC",
    name: "HDFC Bank Ltd",
    qty: 6,
    avgPrice: 1550.00,
    currentPrice: 1625.80,
    invested: 9300.00,
    currentValue: 9754.80,
    pnl: 454.80,
    pnlPercent: 4.89,
  },
  {
    symbol: "WIPRO",
    name: "Wipro Ltd",
    qty: 15,
    avgPrice: 420.00,
    currentPrice: 445.50,
    invested: 6300.00,
    currentValue: 6682.50,
    pnl: 382.50,
    pnlPercent: 6.07,
  },
]

export default function PortfolioPage() {
  return (
    <div className="space-y-8 pt-12 lg:pt-0">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">Portfolio</h1>
        <p className="text-muted-foreground mt-1">Track your investments and holdings</p>
      </div>

      {/* Portfolio Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {portfolioStats.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className={cn(
                    "text-2xl font-bold mt-1",
                    stat.isPositive !== undefined && (stat.isPositive ? "text-primary" : "text-destructive")
                  )}>
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
                </div>
                <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <stat.icon className="size-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Holdings Table */}
      <Card>
        <CardHeader>
          <CardTitle>Your Holdings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Stock</TableHead>
                  <TableHead className="text-right">Qty</TableHead>
                  <TableHead className="text-right">Avg Price</TableHead>
                  <TableHead className="text-right">Current Price</TableHead>
                  <TableHead className="text-right">Invested</TableHead>
                  <TableHead className="text-right">Current Value</TableHead>
                  <TableHead className="text-right">P&L</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {holdings.map((stock) => (
                  <TableRow key={stock.symbol}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{stock.symbol}</p>
                        <p className="text-xs text-muted-foreground">{stock.name}</p>
                      </div>
                    </TableCell>
                    <TableCell className="text-right font-medium">{stock.qty}</TableCell>
                    <TableCell className="text-right">₹{stock.avgPrice.toFixed(2)}</TableCell>
                    <TableCell className="text-right">₹{stock.currentPrice.toFixed(2)}</TableCell>
                    <TableCell className="text-right">₹{stock.invested.toLocaleString()}</TableCell>
                    <TableCell className="text-right font-medium">₹{stock.currentValue.toLocaleString()}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Badge 
                          variant="secondary" 
                          className={cn(
                            "font-medium",
                            stock.pnl >= 0 
                              ? "bg-primary/10 text-primary hover:bg-primary/20" 
                              : "bg-destructive/10 text-destructive hover:bg-destructive/20"
                          )}
                        >
                          {stock.pnl >= 0 ? (
                            <TrendingUp className="size-3 mr-1" />
                          ) : (
                            <TrendingDown className="size-3 mr-1" />
                          )}
                          {stock.pnl >= 0 ? "+" : ""}₹{Math.abs(stock.pnl).toFixed(2)} ({stock.pnlPercent >= 0 ? "+" : ""}{stock.pnlPercent}%)
                        </Badge>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
