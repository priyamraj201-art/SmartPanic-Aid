"use client"

import { useEffect, useState } from "react"
import api from "@/lib/api"

type Alert = {
  message: string
  level?: string
}

type RoutePoint = {
  lat: number
  lng: number
}

export default function Page() {
  const [alerts, setAlerts] = useState<Alert[]>([])
  const [route, setRoute] = useState<RoutePoint[]>([])
  const [loading, setLoading] = useState(true)

  // 🔴 PANIC BUTTON ACTION
  const triggerPanic = async () => {
    try {
      await api.post("/panic")
      const alertsResponse = await api.get("/alerts")
      setAlerts(alertsResponse.data)
    } catch (error) {
      console.error("Failed to send panic alert:", error)
    }
  }

  // 🔁 FETCH DATA ON LOAD
  useEffect(() => {
    const fetchData = async () => {
      try {
        const alertsResponse = await api.get("/alerts")
        const routeResponse = await api.get("/route")

        setAlerts(alertsResponse.data)
        setRoute(routeResponse.data)
      } catch (error) {
        console.error("Failed to fetch data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return <div className="p-6">Loading PANIC-AID dashboard...</div>
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">🚨 PANIC-AID Dashboard</h1>

      {/* PANIC BUTTON */}
      <button
        onClick={triggerPanic}
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold"
      >
        🚨 PANIC
      </button>

      {/* PANIC ALERTS */}
      <section>
        <h2 className="text-xl font-semibold">Panic Alerts</h2>
        {alerts.length === 0 ? (
          <p className="text-gray-500">No active alerts</p>
        ) : (
          alerts.map((alert, index) => (
            <div
              key={index}
              className="mt-2 p-3 border rounded bg-red-50 text-red-800"
            >
              {alert.message}
            </div>
          ))
        )}
      </section>

      {/* EMERGENCY ROUTE */}
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
