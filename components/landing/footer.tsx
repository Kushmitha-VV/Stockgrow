import { TrendingUp } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="size-8 rounded-lg bg-primary flex items-center justify-center">
              <TrendingUp className="size-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg">StockGrow</span>
          </Link>
          
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Dashboard
            </Link>
            <Link href="/portfolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Portfolio
            </Link>
          </nav>
          
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} StockGrow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
