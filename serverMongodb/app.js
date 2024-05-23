const express = require("express");
const { port } = require("./config/constants");
const app = express();
const { log } = require("console");
const db = require("./config");

app.get("/", (req, res) => {
  res.send(`welcome`);
});

db.then(() => {
  app.listen(port, () => log(`server connect to mongodb and running on port ${port}`));
}).catch((err) => log(err.message));
