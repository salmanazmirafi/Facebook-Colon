const {
  postCrate,
  updatePost,
  deletePost,
  postLike,
  singlePost,
  timelinePost,
} = require("../../controlar/postCon");
const { userMiddliewars } = require("../../middlewares/userMiddliewars");

const postRoute = require("express").Router();

// postCrate
postRoute.post("/", userMiddliewars, postCrate);
// post delete
postRoute.delete("/:id", userMiddliewars, deletePost);
// post update
postRoute.put("/:id", userMiddliewars, updatePost);
// Post Like Dislike
postRoute.put("/:id/like", postLike);
// get single post
postRoute.get("/:id", singlePost);
// get Timeline Post
postRoute.get("/timeline/all", timelinePost);

module.exports = postRoute;
