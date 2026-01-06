"use client"
import HeaderBar from "@/components/header-bar"
import AlertsPanel from "@/components/alerts-panel"
import HeatmapVisualization from "@/components/heatmap-visualization"
import AmbulanceMap from "@/components/ambulance-map"
import IncidentTimeline from "@/components/incident-timeline"
import StatsOverview from "@/components/stats-overview"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderBar />

      <main className="p-4 md:p-6 max-w-7xl mx-auto">
        {/* Stats Overview */}
        <StatsOverview />

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Left Column - Alerts and Timeline */}
          <div className="lg:col-span-1 space-y-6">
            <AlertsPanel />
            <IncidentTimeline />
          </div>

          {/* Middle Column - Maps and Heatmap */}
          <div className="lg:col-span-2 space-y-6">
            <HeatmapVisualization />
            <AmbulanceMap />
          </div>
        </div>
      </main>
    </div>
  )
}
