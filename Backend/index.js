const express = require("express")
const cors = require("cors")

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Backend is running 🚀")
})

app.get("/api/alerts", (req, res) => {
  res.json([
    { message: "Crowd panic detected near Gate 3", level: "HIGH" },
    { message: "Movement spike at Exit A", level: "MEDIUM" },
    { message: "Normal crowd flow", level: "LOW" }
  ])
})

let alerts = []

app.post("/api/alerts", (req, res) => {
  const { message, level } = req.body

  if (!message) {
    return res.status(400).json({ error: "Message is required" })
  }

  const alert = {
    message,
    level: level || "high",
    time: new Date().toISOString()
  }

  alerts.unshift(alert)
  res.status(201).json(alert)
})

app.get("/api/alerts", (req, res) => {
  res.json(alerts)
})


app.get("/api/route", (req, res) => {
  res.json([
    { lat: 28.6139, lng: 77.2090 },
    { lat: 28.6145, lng: 77.2102 },
    { lat: 28.6152, lng: 77.2120 },
  ])
})

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend running on port ${PORT}`)
})
let panicAlerts = [];

app.post("/api/panic", (req, res) => {
  const alert = {
    id: Date.now(),
    message: "🚨 Panic alert triggered!",
    time: new Date().toISOString(),
  };

  panicAlerts.push(alert);
  res.json({ success: true, alert });
});

app.get("/api/alerts", (req, res) => {
  res.json(panicAlerts);
});
