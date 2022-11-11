const Post = require("../modules/postModels");

// Crate Post
exports.postCrate = async (req, res) => {
  const { userId, desc, image } = req.body;
  try {
    const createPost = await Post.create({
      userId,
      desc,
      image,
    });
    res.status(200).json({
      message: "Post Create Successful",
      createPost,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
// Update Post
exports.updatePost = async (req, res) => {
  const user = req.params.id;
  try {
    const id = await Post.findById(user);
    if (id.userId === req.body.userId) {
      const update = await Post.findByIdAndUpdate(user, req.body, {
        new: true,
      });
      res.status(201).json({
        message: "Post Update Successful",
        update,
      });
    } else {
      res.status(400).json({
        message: "You Can Update Your Post",
      });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
// Delete Post
exports.deletePost = async (req, res) => {
  const user = req.params.id;
  try {
    const id = await Post.findById(user);
    if (id.userId === req.body.userId) {
      await Post.findByIdAndDelete(user);
      res.status(201).json({
        message: "post Delete Successful",
      });
    } else {
      res.status(400).json({
        message: "You Can Delete only Your Post",
      });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
// Get Like Post
exports.postLike = async (req, res) => {
  const uId = req.params.id;
  try {
    const id = await Post.findById(uId);

    if (!id.likes.includes(req.body.userId)) {
      await id.updateOne({ $push: { likes: req.body.userId } });

      res.status(200).json({
        message: "User has been Like",
      });
    } else {
      await id.updateOne({ $pull: { likes: req.body.userId } });
      res.status(403).json({
        message: "User has been DisLike",
      });
    }
  } catch (error) {
    res.status(401).json({
      message: "Somthing went wong",
      error,
    });
  }
};
// Get Single Post
exports.singlePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const findId = await Post.findById(postId);
    res.status(200).json(findId);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get timeline Post
exports.timelinePost = async (req, res) => {};
