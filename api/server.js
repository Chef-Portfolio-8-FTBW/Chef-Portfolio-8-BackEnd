require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require(`morgan`);

const authRouter = require("../auth/authRouter.js");
//const usersRouter = require('../users/users-router.js');

const server = express();

server.use(helmet());
server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use("/api/auth", authRouter);
//server.use('/api/users', usersRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "up", dbenv: process.env.DB_ENV });
});

module.exports = server;
