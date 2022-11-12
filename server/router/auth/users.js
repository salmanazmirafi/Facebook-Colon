const {
  updateUser,
  delteUser,
  findUser,
  userFlow,
  userUnFlow,
} = require("../../controlar/auth");
const { userMiddliewars } = require("../../middlewares/userMiddliewars");

const userRoute = require("express").Router();
// Account Update
userRoute.put("/:id", userMiddliewars, updateUser);
// Account Delete
userRoute.delete("/:id", userMiddliewars, delteUser);
// Find User And All User
userRoute.get("/all", findUser);
// Account Flowing
userRoute.put("/:id/follow", userFlow);
userRoute.put("/:id/Unfollow", userUnFlow);
module.exports = userRoute;

// Account UnFlowing
