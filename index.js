const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const { User } = require("./models/user.js");

const config  = require("./config/key");

console.log("hello " + config.mongoURI, config);

mongoose
  .connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB connected"))
  .catch((err) => console.errror(err));

app.get("/", (req, res) => {
  res.send("Hello Worlsd");
});

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

app.post("/api/users/register", (req, res) => {
  const user = new User(req.body);

  console.log(req.body);

  user.save((err, userData) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

app.listen(5000);
