const UserScore = require("../models/userScore.model");

const getUserScores = async (req, res) => {
  try {
    const userScores = await UserScore.find();
    res.status(200).json(userScores);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createUserScore = async (req, res) => {
  try {
    const userScore = await UserScore.create(req.body);
    res.status(200).json(userScore);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getUserScores,
  createUserScore,
};
