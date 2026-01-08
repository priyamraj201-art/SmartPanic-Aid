const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.send("PANIC-AID backend is running");
});

app.get("/api/alerts", (req, res) => {
  res.json([]);
});

app.get("/api/route", (req, res) => {
  res.json([
    { lat: 28.6139, lng: 77.2090 },
    { lat: 28.6145, lng: 77.2102 }
  ]);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend running on port ${PORT}`);
});
