// src/app.ts
import express from "express";
const cityRoute = require("./src/routes/citry.router");
const pricehourRoute = require("./src/routes/pricehour.route");

const PORT = 3000;

// Load environment variables
const app = express();

// Middleware
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// Routes
app.use("/api/cities", cityRoute);
app.use("/api/pricehour", pricehourRoute);

module.exports = app;
