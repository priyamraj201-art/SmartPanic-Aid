"use client"

import { useEffect, useState } from "react"
import api from "@/lib/api"

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
    try {
      await api.post("/panic")
    } catch (error) {
      console.error("Panic failed:", error)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const alertsRes = await api.get("/alerts")
        const routeRes = await api.get("/route")

        setAlerts(alertsRes.data)
        setRoute(routeRes.data)
      } catch (error) {
        console.error("Fetch error:", error)
      } finally {
        setLoading(false)
      }
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

  if (loading) {
    return <div className="p-6">Loading PANIC-AID dashboard...</div>
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">🚨 PANIC-AID Dashboard</h1>

      <button
        onClick={triggerPanic}
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold"
      >
        🚨 PANIC
      </button>

      <section>
        <h2 className="text-xl font-semibold">Panic Alerts</h2>

        {alerts.length === 0 ? (
          <p className="text-gray-500">No active alerts</p>
        ) : (
          alerts.map((alert, index) => (
            <div
              key={index}
              className={`mt-3 p-4 border rounded ${getAlertStyle(alert.level)}`}
            >
              <strong>{alert.level}</strong> — {alert.message}
            </div>
          ))
        )}
      </section>

      <section>
        <h2 className="text-xl font-semibold">Emergency Route</h2>
        {route.length === 0 ? (
          <p className="text-gray-500">No route available</p>
        ) : (
          <ul className="list-disc ml-6">
            {route.map((point, index) => (
              <li key={index}>
                Lat: {point.lat}, Lng: {point.lng}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}
