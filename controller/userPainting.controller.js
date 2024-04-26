const UserPainting = require("../models/userPainting.model");

const getUserPaintings = async (req, res) => {
  try {
    const userPaintings = await UserPainting.find();
    res.status(200).json(userPaintings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createUserPainting = async (req, res) => {
  try {
    const userPainting = await UserPainting.create(req.body);
    res.status(200).json(userPainting);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getUserPaintings,
  createUserPainting,
};
