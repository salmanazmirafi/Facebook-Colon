// Input
const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");
const signRouter = require("./router/auth/signUpAuth");
const loginRouter = require("./router/auth/loginAuth");
const userRoute = require("./router/auth/users");
const postRoute = require("./router/post/post");

const app = express();

// Dotenv Config
dotenv.config();
// Database Connect
mongoose.connect(process.env.LOCAL_DATABASE_URI, () => {
  console.log("Database Server Connect 🙂");
});
// Middleware

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// User
app.use("/signup", signRouter);
app.use("/login", loginRouter);
app.use("/user", userRoute);
// Post
app.use("/post", postRoute);
// server run
app.listen(process.env.PROT);
console.log("Backend Server Connect 🙂");
