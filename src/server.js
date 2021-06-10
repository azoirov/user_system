const express = require("express");
const glob = require("glob");
const cors = require("cors");
const path = require("path");
const postgres = require("../data-model/postgres")();

const { PORT, PSQL } = require("../config");

const app = express();

app.listen(PORT, () => console.log("SERVER READY"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(async (req, res, next) => {
  req.psql = await postgres;
  next();
});

glob("src/routes/*Route.js", (err, files) => {
  if (files) {
    files.forEach((file) => {
      const Route = require(path.join(__dirname, "..", file));

      if (Route.path && Route.router) app.use(Route.path, Route.router);
    });
  }
});
