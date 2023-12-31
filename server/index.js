const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const { User } = require("./models/user.js");
const auth = require("./middleware/auth");


const config = require("./config/key");



mongoose
  .connect(config.mongoURI, {dbName: "SingUp"}, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB connected HERE HEREHERE"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({hello: "hello sire"});
})

app.get("/api/users/auth", auth, (req, res) => {
  res.status(200).json({
    _id: req._id,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
  });
});

app.post("/api/users/register", (req, res) => {
  const user = new User(req.body);

  user.save((err, userData) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

app.post("/api/users/login", (req, res) => {
  //find the email

  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSucess: false,
        message: "Auth failed, email not found",
      });
    }
    //Compare the Password
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch) {
        return res.json({ loginSucess: false, message: "Wrong password" });
      }
      //generateToken
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        res.cookie("x_auth", user.token).status(200).json({
          loginSucess: true,
        });
      });
    });
  });
});

app.get("/api/users/logout", auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).send({ success: true });
  });
});



const port = process.env.PORT || 5000

app.listen(port,() => {
  console.log(`Server Running at ${port}`)
});


