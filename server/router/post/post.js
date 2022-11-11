const {
  postCrate,
  updatePost,
  deletePost,
  postLike,
  singlePost,
  timelinePost,
} = require("../../controlar/postCon");

const postRoute = require("express").Router();

// postCrate
postRoute.post("/", postCrate);
// post delete
postRoute.delete("/:id", deletePost);
// post update
postRoute.put("/:id", updatePost);
// Post Like Dislike
postRoute.put("/:id/like", postLike);
// get single post
postRoute.get("/:id", singlePost);
// get Timeline Post
postRoute.get("/timeline", timelinePost);

module.exports = postRoute;
