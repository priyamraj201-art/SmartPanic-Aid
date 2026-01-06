"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, AlertCircle, CheckCircle } from "lucide-react"

const timelineEvents = [
  { time: "14:32", event: "Crowd panic detected at Central Station", status: "active", severity: "critical" },
  { time: "14:28", event: "Fire alarm triggered - Downtown Plaza", status: "active", severity: "critical" },
  { time: "14:25", event: "3 ambulances dispatched", status: "completed", severity: "normal" },
  { time: "14:20", event: "Multi-vehicle accident on Highway 101", status: "active", severity: "high" },
  { time: "14:15", event: "Gas leak reported - Riverside District", status: "active", severity: "high" },
  { time: "14:10", event: "Perimeter established around affected zone", status: "completed", severity: "normal" },
  { time: "14:05", event: "Emergency services notified", status: "completed", severity: "normal" },
]

export default function IncidentTimeline() {
  return (
    <Card className="bg-card/50 border-border/50">
      <CardHeader className="border-b border-border/50">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-orange-500" />
          <CardTitle className="text-lg">Incident Timeline</CardTitle>
        </div>
        <p className="text-sm text-muted-foreground mt-1">Event history (last 30 minutes)</p>
      </CardHeader>

      <CardContent className="p-0 divide-y divide-border/50 max-h-96 overflow-y-auto">
        {timelineEvents.map((item, index) => (
          <div key={index} className="p-4 hover:bg-accent/5 transition-colors flex gap-4">
            <div className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  item.status === "completed" ? "bg-green-500/20" : "bg-orange-500/20 animate-pulse"
                }`}
              >
                {item.status === "completed" ? (
                  <CheckCircle className="w-4 h-4 text-green-500" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-orange-500" />
                )}
              </div>
              {index < timelineEvents.length - 1 && <div className="w-0.5 h-12 bg-border/30 my-1"></div>}
            </div>

            <div className="flex-1 pt-1">
              <p className="text-xs font-mono text-muted-foreground">{item.time}</p>
              <p className="text-sm text-foreground mt-1">{item.event}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
