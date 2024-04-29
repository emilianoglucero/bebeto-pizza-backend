const mongoose = require("mongoose");

const UserPaintingSchema = new mongoose.Schema(
  {
    paintName: {
      type: String,
      required: [true, "Please provide a paint name"],
    },
    artistName: {
      type: String,
      required: [true, "Please provide a artist name"],
    },
    paintDataUrl: {
      type: String,
      required: [true, "Please provide a paint data url"],
    },
  },
  {
    timestamps: true,
  }
);

const UserPainting = mongoose.model("UserPainting", UserPaintingSchema);

module.exports = UserPainting;
