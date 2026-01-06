"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Navigation } from "lucide-react"

const ambulances = [
  { id: "AMB-01", status: "en-route", location: "Downtown Plaza", eta: "3 min", crew: 2 },
  { id: "AMB-03", status: "on-scene", location: "Central Station", eta: "On scene", crew: 2 },
  { id: "AMB-05", status: "en-route", location: "Harbor Park", eta: "5 min", crew: 2 },
  { id: "AMB-07", status: "available", location: "Station 2", eta: "Idle", crew: 2 },
  { id: "AMB-09", status: "en-route", location: "Highway 101", eta: "4 min", crew: 2 },
  { id: "AMB-11", status: "hospital", location: "Central Medical", eta: "Unloading", crew: 2 },
]

const statusColors = {
  "en-route": "bg-blue-500/20 text-blue-600 border-blue-500/50",
  "on-scene": "bg-orange-500/20 text-orange-600 border-orange-500/50",
  hospital: "bg-cyan-500/20 text-cyan-600 border-cyan-500/50",
  available: "bg-green-500/20 text-green-600 border-green-500/50",
}

export default function AmbulanceMap() {
  return (
    <Card className="bg-card/50 border-border/50">
      <CardHeader className="border-b border-border/50">
        <CardTitle className="flex items-center gap-2">
          <Navigation className="w-5 h-5 text-blue-500" />
          Ambulance Routing
        </CardTitle>
        <p className="text-sm text-muted-foreground mt-1">Fleet status and deployment tracking</p>
      </CardHeader>

      <CardContent className="p-4">
        {/* Map Placeholder */}
        <div className="w-full h-64 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-lg border border-border/50 mb-4 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

          {/* Ambulance Markers */}
          <svg className="w-full h-full" viewBox="0 0 400 300">
            {/* Routes */}
            <line
              x1="200"
              y1="100"
              x2="250"
              y2="150"
              stroke="rgba(59, 130, 246, 0.3)"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
            <line
              x1="200"
              y1="100"
              x2="150"
              y2="120"
              stroke="rgba(59, 130, 246, 0.3)"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
            <line
              x1="200"
              y1="100"
              x2="180"
              y2="200"
              stroke="rgba(59, 130, 246, 0.3)"
              strokeWidth="2"
              strokeDasharray="5,5"
            />

            {/* Marker Points */}
            <circle cx="200" cy="100" r="8" fill="rgba(239, 68, 68, 0.6)" />
            <circle cx="250" cy="150" r="6" fill="rgba(59, 130, 246, 0.6)" />
            <circle cx="150" cy="120" r="6" fill="rgba(59, 130, 246, 0.6)" />
            <circle cx="180" cy="200" r="6" fill="rgba(34, 197, 94, 0.6)" />
          </svg>

          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
            <div className="text-center">
              <p className="mb-2">Live Map Visualization</p>
              <p className="text-xs">Real-time GPS tracking enabled</p>
            </div>
          </div>
        </div>

        {/* Ambulance List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {ambulances.map((ambulance) => (
            <div
              key={ambulance.id}
              className="p-3 rounded-lg border border-border/50 hover:border-border transition-colors bg-card/30"
            >
              <div className="flex items-start justify-between mb-2">
                <p className="font-semibold text-foreground text-sm">{ambulance.id}</p>
                <Badge className={statusColors[ambulance.status as keyof typeof statusColors]}>
                  {ambulance.status.replace("-", " ")}
                </Badge>
              </div>

              <div className="space-y-1 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3 h-3" />
                  {ambulance.location}
                </div>
                <p>ETA: {ambulance.eta}</p>
                <p>Crew: {ambulance.crew} personnel</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
