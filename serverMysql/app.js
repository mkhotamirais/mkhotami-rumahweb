const express = require("express");
const { port } = require("./config/constants");
const app = express();
const { log } = require("console");
const cors = require("cors");
// const { corsOptions } = require("./config/origin");
const path = require("path");
const conn = require("./config");
// const User = require("./models/userModel");

// (async () => {
//   await conn.sync();
//   await User.sync();
// })();

// app.use(credentials);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(`HALO selamat datang di server mkhotami rumahweb`);
});

app.use("/api/mysql/user", require("./routers/userRouter"));

app.all("/*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) res.sendFile(path.join(__dirname, "views", "404.html"));
  else if (req.accepts("json")) res.json({ message: "404 Not Found" });
  else res.type("txt").send("404 Not Found");
});

app.listen(port, () => log(`server running on port ${port}`));
