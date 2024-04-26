const express = require("express");
const router = express.Router();

const userScoreController = require("../controller/userScore.controller");

router.get("/", userScoreController.getUserScores);
router.post("/", userScoreController.createUserScore);

module.exports = router;
