const { Storage } = require("@google-cloud/storage");
const multer = require("multer");

require("dotenv").config();

const storage = new Storage({
  credentials: JSON.parse(process.env.GCP_CREDENTIALS),
});
const bucket = storage.bucket(process.env.GOOGLE_CLOUD_BUCKET_NAME);

const multerUpload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // limit to 5MB
  },
});

const uploadToGCS = (req, res, next) => {
  if (!req.file) {
    res.status(400).send("No file uploaded.");
    return;
  }

  const blob = bucket.file(
    process.env.GOOGLE_CLOUD_BUCKET_FOLDER + req.file.originalname
  );
  const blobStream = blob.createWriteStream();

  blobStream.on("error", (err) => {
    next(err);
  });

  blobStream.on("finish", () => {
    next();
  });

  blobStream.end(req.file.buffer);
};

module.exports = {
  multerUpload,
  uploadToGCS,
};
