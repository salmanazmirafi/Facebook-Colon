const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    desc: {
      type: String,
      require: true,
    },
    image: {
      type: String,
    },
    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const postModels = mongoose.model("posts", postSchema);
module.exports = postModels;
