const express = require("express");
const router = express.Router();

const userPaintingController = require("../controller/userPainting.controller");

router.get("/", userPaintingController.getUserPaintings);
router.post("/", userPaintingController.createUserPainting);

module.exports = router;
