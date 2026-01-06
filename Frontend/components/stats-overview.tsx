"use client"

import { TrendingUp, Users, Radio, AlertCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  {
    label: "Active Incidents",
    value: "12",
    icon: AlertCircle,
    color: "from-orange-500 to-red-500",
    trend: "+2 this hour",
  },
  {
    label: "People at Risk",
    value: "2,847",
    icon: Users,
    color: "from-red-500 to-destructive",
    trend: "+345 reported",
  },
  {
    label: "Ambulances Deployed",
    value: "8/12",
    icon: Radio,
    color: "from-blue-500 to-cyan-500",
    trend: "4 en route",
  },
  {
    label: "Response Rate",
    value: "94.2%",
    icon: TrendingUp,
    color: "from-green-500 to-emerald-500",
    trend: "+2.1% vs avg",
  },
]

export default function StatsOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.label} className="bg-card/50 border-border/50 hover:border-border transition-colors">
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-2">{stat.trend}</p>
                </div>
                <div className={`bg-gradient-to-br ${stat.color} p-3 rounded-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
