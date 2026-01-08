const express = require("express")
const cors = require("cors")

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())

/* ---------------- HEALTH CHECK ---------------- */
app.get("/", (req, res) => {
  res.send("Backend is running 🚀")
})

app.get("/api/health", (req, res) => {
  res.send("PANIC-AID backend is running")
})

/* ---------------- DATA STORAGE ---------------- */
let alerts = []

/* ---------------- ALERTS ---------------- */
app.get("/api/alerts", (req, res) => {
  res.json(alerts)
})

app.post("/api/alerts", (req, res) => {
  const { message, level } = req.body

  if (!message) {
    return res.status(400).json({ error: "Message is required" })
  }

  const alert = {
    id: Date.now(),
    message,
    level: level || "HIGH",
    time: new Date().toISOString()
  }

  alerts.unshift(alert)
  res.status(201).json(alert)
})

/* ---------------- ROUTE ---------------- */
app.get("/api/route", (req, res) => {
  res.json([
    { lat: 28.6139, lng: 77.2090 },
    { lat: 28.6145, lng: 77.2102 },
    { lat: 28.6152, lng: 77.2120 }
  ])
})

/* ---------------- START SERVER ---------------- */
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend running on port ${PORT}`)
})
