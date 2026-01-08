"use client"

import { useEffect, useState } from "react"
import api from "@/lib/api"
import { MapContainer, TileLayer, Polyline, Marker } from "react-leaflet"

type Alert = {
  message: string
  level: "HIGH" | "MEDIUM" | "LOW"
}

type RoutePoint = {
  lat: number
  lng: number
}

export default function Page() {
  const [alerts, setAlerts] = useState<Alert[]>([])
  const [route, setRoute] = useState<RoutePoint[]>([])
  const [loading, setLoading] = useState(true)

  const triggerPanic = async () => {
    await api.post("/panic")
  }

  useEffect(() => {
    const fetchData = async () => {
      const alertsRes = await api.get("/alerts")
      const routeRes = await api.get("/route")

      setAlerts(alertsRes.data)
      setRoute(routeRes.data)
      setLoading(false)
    }

    fetchData()
    const interval = setInterval(fetchData, 5000)
    return () => clearInterval(interval)
  }, [])

  const getAlertStyle = (level: string) => {
    if (level === "HIGH") return "bg-red-100 text-red-800 border-red-400"
    if (level === "MEDIUM") return "bg-orange-100 text-orange-800 border-orange-400"
    return "bg-green-100 text-green-800 border-green-400"
  }

  if (loading) return <div className="p-6">Loading dashboard...</div>

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">🚨 PANIC-AID Dashboard</h1>

      <button
        onClick={triggerPanic}
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold"
      >
        🚨 PANIC
      </button>

      {/* ALERTS */}
      <section>
        <h2 className="text-xl font-semibold">Panic Alerts</h2>
        {alerts.length === 0 ? (
          <p className="text-gray-500">No active alerts</p>
        ) : (
          alerts.map((alert, i) => (
            <div
              key={i}
              className={`mt-3 p-4 border rounded ${getAlertStyle(alert.level)}`}
            >
              <strong>{alert.level}</strong> — {alert.message}
            </div>
          ))
        )}
      </section>

      {/* MAP */}
      <section>
        <h2 className="text-xl font-semibold">Emergency Route Map</h2>

        {route.length > 0 && (
          <MapContainer
            center={[route[0].lat, route[0].lng]}
            zoom={15}
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Polyline
              positions={route.map(p => [p.lat, p.lng])}
              color="red"
            />

            {route.map((p, i) => (
              <Marker key={i} position={[p.lat, p.lng]} />
            ))}
          </MapContainer>
        )}
      </section>
    </div>
  )
}
