const express = require("express");
const mongoose = require("mongoose");
const UserPainting = require("./models/userPainting.model");
const UserScore = require("./models/userScore.model");
const userPaintingRoute = require("./routes/userPainting.route");
const userScoreRoute = require("./routes/userScore.route");
const app = express();

require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hello World from Express");
});

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/userPainting", userPaintingRoute);
app.use("/api/userScore", userScoreRoute);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB");
    console.error(error);
  });
