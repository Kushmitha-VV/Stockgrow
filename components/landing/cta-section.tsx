import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="relative rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-background border border-primary/20 p-8 md:p-16 text-center overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 size-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              Start Growing Your Portfolio Today
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8 text-pretty">
              Join thousands of successful investors who have transformed their financial future with StockGrow.
            </p>
            <Button asChild size="lg" className="h-12 px-8 text-base font-semibold shadow-lg shadow-primary/25">
              <Link href="/register">
                Create Free Account
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
