const Receipe = require("../models/receipe");
const User = require("../models/user");

const getAllReceipe = async (req, res) => {
  try {
    const allReceipe = await Receipe.find();
    return res.status(200).json({
      message: "Success",
      allReceipe,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const getReceipeById = async (req, res) => {
  try {
    const receipe = await Receipe.findById(req.params.id);
    if (!receipe) {
      return res.status(400).json({
        message: "Can not find the Receipe",
      });
    } else {
      return res.status(200).json({
        message: "Success",
        receipe,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Something happen",
    });
  }
};

const postReceipe = async (req, res) => {
  try {
    const user = await User.findById(req.userID.id);
    const newReceipe = await Receipe.create({ author: user.name, ...req.body });
    console.log(newReceipe)
    return res.status(200).json({
      message: "Receipe Created Successfully",
      newReceipe,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = { postReceipe, getAllReceipe, getReceipeById };
