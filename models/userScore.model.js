const mongoose = require("mongoose");

const UserScoreSchema = new mongoose.Schema(
  {
    score: {
      type: Number,
      required: [true, "Please provide a score"],
    },
    userName: {
      type: String,
      required: [true, "Please provide a user name"],
    },
  },
  {
    timestamps: true,
  }
);

const UserScore = mongoose.model("UserScore", UserScoreSchema);

module.exports = UserScore;
