"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const heatmapData = [
  { zone: "Zone A", crowdDensity: 950, panicLevel: 8.5, injuries: 12 },
  { zone: "Zone B", crowdDensity: 780, panicLevel: 6.2, injuries: 5 },
  { zone: "Zone C", crowdDensity: 1240, panicLevel: 9.1, injuries: 18 },
  { zone: "Zone D", crowdDensity: 450, panicLevel: 3.8, injuries: 2 },
  { zone: "Zone E", crowdDensity: 890, panicLevel: 7.3, injuries: 8 },
  { zone: "Zone F", crowdDensity: 650, panicLevel: 5.1, injuries: 4 },
]

export default function HeatmapVisualization() {
  return (
    <Card className="bg-card/50 border-border/50">
      <CardHeader className="border-b border-border/50">
        <CardTitle className="flex items-center gap-2">
          <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
          Crowd Panic Heatmap
        </CardTitle>
        <p className="text-sm text-muted-foreground mt-1">Real-time density and panic levels across zones</p>
      </CardHeader>

      <CardContent className="p-4">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={heatmapData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis dataKey="zone" stroke="var(--color-muted-foreground)" />
            <YAxis stroke="var(--color-muted-foreground)" />
            <Tooltip
              contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)" }}
              labelStyle={{ color: "var(--color-foreground)" }}
            />
            <Legend wrapperStyle={{ paddingTop: "20px" }} />
            <Bar dataKey="crowdDensity" fill="#f97316" name="Crowd Density" radius={[8, 8, 0, 0]} />
            <Bar dataKey="panicLevel" fill="#ef4444" name="Panic Level (0-10)" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>

        {/* Mini Heatmap Grid */}
        <div className="mt-6 grid grid-cols-3 gap-2">
          {heatmapData.map((zone) => (
            <div
              key={zone.zone}
              className="text-center p-3 rounded-lg border border-border/50 hover:border-border transition-colors"
            >
              <p className="text-xs font-semibold text-foreground mb-1">{zone.zone}</p>
              <div
                className={`w-full h-12 rounded mb-2 ${
                  zone.panicLevel > 8
                    ? "bg-destructive/30"
                    : zone.panicLevel > 6
                      ? "bg-orange-500/30"
                      : zone.panicLevel > 4
                        ? "bg-yellow-500/30"
                        : "bg-green-500/30"
                }`}
              ></div>
              <p className="text-xs text-muted-foreground">Panic: {zone.panicLevel.toFixed(1)}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
