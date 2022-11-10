const User = require("../modules/userModels");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// signUp users
exports.signUp = async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 11);
    const { username, email, password, profile, coverPhoto } = req.body;

    const createUser = await User.create({
      username,
      email,
      password,
      profile,
      coverPhoto,
    });
    res.status(201).json({
      message: "User Create Successful",
      createUser,
    });
  } catch (error) {
    res.status(401).json({
      message: "Somthing went wong",
    });
  }
};

// login
exports.logIn = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      res.status(400).json({
        message: "User Not Found",
      });
    }
    const validated = await bcrypt.compare(password, user.password);
    if (!validated) {
      res.status(400).json({
        message: "Password Is Worng",
      });
    }
    const token = await jwt.sign(
      { username, _id: user._id },
      process.env.PRIVET_KEY,
      { expiresIn: "24h" }
    );
    res.status(200).json({
      message: "Login Successful",
      user,
      token,
    });
  } catch (error) {
    res.status(401).json({
      message: "Somthing went wong",
    });
  }
};

// Account Update
exports.updateUser = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findById(userId);
    if (!user) {
      res.status(403).json({
        message: "You Can Update Your Profile",
      });
    }
    req.body.password = await bcrypt.hash(req.body.password, 11);
    const userUpdate = await User.findOneAndUpdate(userId, req.body, {
      new: true,
    });
    res.status(200).json({
      message: "Update Successful",
      userUpdate,
    });
  } catch (error) {
    res.status(401).json({
      message: "Somthing went wong",
    });
  }
};

// Account Delete

exports.delteUser = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findById(userId);
    if (!user) {
      res.status(402).json({
        message: "Worng User ",
      });
    }
    await User.findByIdAndDelete(userId);
    res.status(200).json({
      message: "User Delete Success",
    });
  } catch (error) {
    res.status(401).json({
      message: "Somthing went wong",
      error,
    });
  }
};
// Find User And All User
exports.findUser = async (req, res) => {
  const { username } = req.query;
  try {
    let findU;
    if (username) {
      findU = await User.find({ username });
    } else {
      findU = await User.find();
    }
    res.status(200).json({
      message: "Find Result",
      findU,
    });
  } catch (error) {
    res.status(401).json({
      message: "Somthing went wong",
      error,
    });
  }
};
// Account Flowing
exports.userFlow = async (req, res) => {
  const users = req.params.id;
  try {
    const user = await User.findById(users);
    const curentUser = await User.findById(req.body.userId);
    if (!user.followers.includes(req.body.userId)) {
      await user.updateOne({ $push: { followers: req.body.userId } });
      await curentUser.updateOne({ $push: { following: req.params.id } });
      res.status(200).json({
        message: "User has been followed",
      });
    } else {
      res.status(403).json({
        message: "You allready follow this user",
      });
    }
  } catch (error) {
    res.status(401).json({
      message: "Somthing went wong",
      error,
    });
  }
};
// Account UnFlowing
exports.userUnFlow = async (req, res) => {
  const users = req.params.id;
  try {
    const user = await User.findById(users);
    const curentUser = await User.findById(req.body.userId);
    if (user.followers.includes(req.body.userId)) {
      await user.updateOne({ $pull: { followers: req.body.userId } });
      await curentUser.updateOne({ $pull: { following: req.params.id } });
      res.status(200).json({
        message: "User has been unfollowed",
      });
    } else {
      res.status(403).json({
        message: "You d'nt follow this user",
      });
    }
  } catch (error) {
    res.status(401).json({
      message: "Somthing went wong",
      error,
    });
  }
};
