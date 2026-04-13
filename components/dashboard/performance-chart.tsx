"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts"

const data = [
  { month: "Jan", value: 42000 },
  { month: "Feb", value: 44500 },
  { month: "Mar", value: 43000 },
  { month: "Apr", value: 47000 },
  { month: "May", value: 45500 },
  { month: "Jun", value: 48000 },
  { month: "Jul", value: 50000 },
]

export function PerformanceChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Portfolio Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="oklch(0.65 0.2 145)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="oklch(0.65 0.2 145)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.28 0.015 250)" vertical={false} />
              <XAxis 
                dataKey="month" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'oklch(0.65 0 0)', fontSize: 12 }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'oklch(0.65 0 0)', fontSize: 12 }}
                tickFormatter={(value) => `₹${value / 1000}k`}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'oklch(0.18 0.015 250)',
                  border: '1px solid oklch(0.28 0.015 250)',
                  borderRadius: '8px',
                  color: 'oklch(0.98 0 0)'
                }}
                formatter={(value: number) => [`₹${value.toLocaleString()}`, 'Value']}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="oklch(0.65 0.2 145)"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorValue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
