const express = require("express");
const mongoose = require("mongoose");
const UserPainting = require("./models/userPainting.model");
const UserScore = require("./models/userScore.model");
const userPaintingRoute = require("./routes/userPainting.route");
const userScoreRoute = require("./routes/userScore.route");
const app = express();

require("dotenv").config();

const port = process.env.PORT || 3000;

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
    app.listen(port, () => {
      console.log("Server is running");
    });
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB");
    console.error(error);
  });
