"use client"

import { AlertCircle, MapPin, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const alerts = [
  {
    id: 1,
    type: "Fire",
    severity: "critical",
    location: "Downtown Plaza Building A",
    time: "2 min ago",
    description: "Structure fire, multiple floors affected",
  },
  {
    id: 2,
    type: "Crowd Panic",
    severity: "high",
    location: "Central Station, Platform 3",
    time: "5 min ago",
    description: "Estimated 500+ people, partial evacuation",
  },
  {
    id: 3,
    type: "Traffic Accident",
    severity: "high",
    location: "Highway 101, Exit 42",
    time: "8 min ago",
    description: "Multi-vehicle collision, 2 injuries reported",
  },
  {
    id: 4,
    type: "Medical Emergency",
    severity: "medium",
    location: "Harbor Park Area",
    time: "12 min ago",
    description: "Cardiac event, ambulance dispatched",
  },
  {
    id: 5,
    type: "Gas Leak",
    severity: "high",
    location: "Riverside District",
    time: "15 min ago",
    description: "Potential gas line rupture, evacuating residents",
  },
]

const severityColors = {
  critical: "bg-destructive/20 text-destructive border-destructive/50",
  high: "bg-orange-500/20 text-orange-600 border-orange-500/50",
  medium: "bg-yellow-500/20 text-yellow-600 border-yellow-500/50",
}

export default function AlertsPanel() {
  return (
    <Card className="bg-card/50 border-border/50 h-fit">
      <CardHeader className="border-b border-border/50">
        <div className="flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-destructive" />
          <CardTitle className="text-lg">Active Alerts</CardTitle>
          <Badge className="ml-auto bg-destructive/20 text-destructive border-destructive/50">{alerts.length}</Badge>
        </div>
      </CardHeader>

      <CardContent className="p-0 divide-y divide-border/50 max-h-96 overflow-y-auto">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`p-4 hover:bg-accent/5 transition-colors border-l-4 ${
              alert.severity === "critical"
                ? "border-l-destructive"
                : alert.severity === "high"
                  ? "border-l-orange-500"
                  : "border-l-yellow-500"
            }`}
          >
            <div className="flex items-start justify-between mb-2">
              <Badge className={severityColors[alert.severity as keyof typeof severityColors]}>{alert.type}</Badge>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {alert.time}
              </span>
            </div>

            <p className="text-sm font-medium text-foreground mb-1">{alert.description}</p>

            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="w-3 h-3" />
              {alert.location}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
