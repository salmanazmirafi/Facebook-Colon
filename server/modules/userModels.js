const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      require: true,
      trim: true,
      min: 6,
    },
    profile: {
      type: String,
      default: "profile.png",
    },
    coverPhoto: {
      type: String,
      default: "profile.png",
    },
    followers: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },
    isadmin: {
      type: Boolean,
      default: false,
    },
    desc: {
      type: String,
      max: 80,
    },
    city: {
      type: String,
    },
    from: {
      type: String,
    },
    relation: {
      type: Number,
      enum: [1, 2, 3],
    },
  },
  {
    timestamps: true,
  }
);

const userModels = mongoose.model("users", userSchema);
module.exports = userModels;
