"use client"

import { Button } from "@/components/ui/button"
import { TrendingUp, ArrowRight, BarChart3, LineChart } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient and grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Floating chart decorations */}
      <div className="absolute top-20 left-10 opacity-20 animate-pulse">
        <LineChart className="size-24 text-primary" />
      </div>
      <div className="absolute bottom-32 right-16 opacity-20 animate-pulse delay-700">
        <BarChart3 className="size-20 text-primary" />
      </div>
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 right-1/4 size-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/3 size-48 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
          <TrendingUp className="size-4 text-primary" />
          <span className="text-sm text-primary font-medium">Smart Investment Platform</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
          <span className="text-foreground">Maximize Your</span>
          <br />
          <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Stock Market Earnings
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
          Track, analyze, and improve your investment performance with smart insights. 
          Join thousands of investors growing their portfolios.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="h-12 px-8 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all">
            <Link href="/register">
              Get Started
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base font-semibold">
            <Link href="/dashboard">
              View Dashboard
            </Link>
          </Button>
        </div>

        {/* Stats preview */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm">
            <div className="text-3xl font-bold text-primary mb-1">50K+</div>
            <div className="text-sm text-muted-foreground">Active Investors</div>
          </div>
          <div className="p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm">
            <div className="text-3xl font-bold text-primary mb-1">+32%</div>
            <div className="text-sm text-muted-foreground">Avg Profit Increase</div>
          </div>
          <div className="p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm">
            <div className="text-3xl font-bold text-primary mb-1">24/7</div>
            <div className="text-sm text-muted-foreground">Market Insights</div>
          </div>
        </div>
      </div>
    </section>
  )
}
