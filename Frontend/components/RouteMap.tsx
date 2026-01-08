"use client"

import { MapContainer, TileLayer, Polyline, Marker, useMap } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import { useEffect } from "react"

/* Fix Leaflet default marker icons */
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
})

type RoutePoint = {
  lat: number
  lng: number
}

type Props = {
  route: RoutePoint[]
}

/* Safely set map view AFTER mount */
function SetView({ center }: { center: [number, number] }) {
  const map = useMap()

  useEffect(() => {
    map.setView(center, 15)
  }, [center, map])

  return null
}

export default function RouteMap({ route }: Props) {
  if (!route || route.length === 0) return null

  const center: [number, number] = [route[0].lat, route[0].lng]
  const polyline: [number, number][] = route.map(p => [p.lat, p.lng])

  return (
    <MapContainer
      {...({
        zoom: 15,
        scrollWheelZoom: true,
        style: { height: "400px", width: "100%" },
      } as any)}
    >
      <SetView center={center} />

      <TileLayer
        {...({
          url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
          attribution: "&copy; OpenStreetMap contributors",
        } as any)}
      />

      <Polyline positions={polyline} pathOptions={{ color: "red" }} />

      {route.map((p, i) => (
        <Marker key={i} position={[p.lat, p.lng]} />
      ))}
    </MapContainer>
  )
}
