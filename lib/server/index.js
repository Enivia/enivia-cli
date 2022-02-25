const express = require("express");
const chalk = require("chalk");
const { resolve } = require("path");

const DIST = "dist";
const PORT = 8080;

module.exports = function server(options) {
  const app = express();
  const config = options || {};
  const dist = config.dist || DIST;
  const port = config.port || PORT;

  app.use(express.static(dist));
  app.get("*", (req, res) => {
    res.sendFile(resolve(dist, "index.html"));
  });
  app.listen(port, () => {
    console.log(chalk.blue(`succeed: http://localhost:${port}`));
  });
};
