// backend/server.js
const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = 5000;

app.get("/api/google-reviews", async (req, res) => {
  const placeId = "ChIJMx4uw4HXCDkRinON_66BRcQ"; // <-- place id
  const apiKey = "AIzaSyCm67_p5zkcByJn3Zddxt1IQilGZo5pPxE"; // <-- api key
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json({ reviews: data.result.reviews || [] });
  } catch (error) {
    res.status(500).json({ reviews: [], error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});