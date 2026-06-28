import { TrendingUp } from 'lucide-react'
import { dashboardStats } from '@/lib/news-data'

export function StatCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {dashboardStats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-lg border border-border bg-card p-5"
        >
          <p className="text-sm text-muted-foreground">{stat.label}</p>
          <p className="mt-2 font-serif text-3xl font-bold text-foreground">
            {stat.value}
          </p>
          <p className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary">
            <TrendingUp className="size-3.5" />
            {stat.change}
          </p>
        </div>
      ))}
    </div>
  )
}
