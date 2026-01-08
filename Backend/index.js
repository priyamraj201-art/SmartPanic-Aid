import express from "express"
import cors from "cors"

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use(cors())
app.use(express.json())
app.get("/api/health", (req, res) => {
  res.send("PANIC-AID backend is running")
})


//  Health check (very useful)
app.get("/api/health", (req, res) => {
  res.send("PANIC-AID backend is running")
})

//  Panic alerts API
app.get("/api/alerts", (req, res) => {
  res.json([
    {
      id: 1,
      type: "Panic Button",
      location: "Sector 21, Delhi",
      time: "2 mins ago"
    }
  ]);
});


//  Emergency route API
app.get("/api/route", (req, res) => {
  res.json([
    { lat: 28.6139, lng: 77.2090 },
    { lat: 28.6145, lng: 77.2102 },
    { lat: 28.6152, lng: 77.2120 }
  ]);
});


// ▶ Start server
app.get("/", (req, res) => {
  res.send("Backend is running 🚀")
})

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend running on port ${PORT}`)
})


