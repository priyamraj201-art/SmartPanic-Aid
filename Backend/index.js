import express from "express"
import cors from "cors"

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())

//  Health check (very useful)
app.get("/api/health", (req, res) => {
  res.send("PANIC-AID backend is running")
})

//  Panic alerts API
app.get("/api/alerts", (req, res) => {
  const alerts = [
    {
      message: "High crowd density detected near Gate 3",
      level: "HIGH"
    },
    {
      message: "Sudden movement spike near Exit A",
      level: "MEDIUM"
    }
  ]

  res.json(alerts)
})

//  Emergency route API
app.get("/api/route", (req, res) => {
  const route = [
    { lat: 28.6139, lng: 77.2090 },
    { lat: 28.6145, lng: 77.2102 },
    { lat: 28.6152, lng: 77.2120 }
  ]

  res.json(route)
})

// ▶ Start server
app.listen(PORT, () => {
  console.log(` Backend running at http://localhost:${PORT}`)
})
