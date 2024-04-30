const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const UserPainting = require("./models/userPainting.model");
const UserScore = require("./models/userScore.model");
const userPaintingRoute = require("./routes/userPainting.route");
const userScoreRoute = require("./routes/userScore.route");
const { multerUpload, uploadToGCS } = require("./storage");

const app = express();

require("dotenv").config();

const port = process.env.PORT || 3000;

// Enable All CORS Requests
app.use(cors());
// app.use(cors({ origin: "http://localhost:8080" }));

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/userPainting", userPaintingRoute);
app.use("/api/userScore", userScoreRoute);

app.get("/", (req, res) => {
  res.send("Hello World from Express");
});

app.post("/upload", multerUpload.single("image"), uploadToGCS, (req, res) => {
  res.status(200).send("File uploaded to Google Cloud Storage");
});

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
