"use client"

import { MapContainer, TileLayer, Polyline, Marker } from "react-leaflet"
import "leaflet/dist/leaflet.css"

type RoutePoint = {
  lat: number
  lng: number
}

export default function RouteMap({ route }: { route: RoutePoint[] }) {
  if (route.length === 0) return null

  return (
    <MapContainer
      center={[route[0].lat, route[0].lng]}   // ✅ correct
      zoom={15}                               // ✅ REQUIRED (this fixes error)
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Polyline
        positions={route.map(p => [p.lat, p.lng])}
        pathOptions={{ color: "red" }}
      />

      {route.map((p, i) => (
        <Marker key={i} position={[p.lat, p.lng]} />
      ))}
    </MapContainer>
  )
}