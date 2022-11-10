const { signUp } = require("../../controlar/auth");

const signRouter = require("express").Router();

signRouter.post("/", signUp);

module.exports = signRouter;
