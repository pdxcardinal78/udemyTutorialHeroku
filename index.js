// Import required packages
const express = require("express");

// Create express app
const app = express();

app.get("/", (req, res) => {
  res.send({ greetings: "human" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
