const { postCrate } = require("../../controlar/postCon");

const postRoute = require("express").Router();

postRoute.post("/", postCrate);

module.exports = postRoute;
