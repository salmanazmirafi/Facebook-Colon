const { logIn } = require("../../controlar/auth");
const loginRouter = require("express").Router();

loginRouter.post("/", logIn);

module.exports = loginRouter;
