const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const Contact = require("./models/contact.js");
const User = require("./models/users.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://localhost:27017/unscriptBlock", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MONGO CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log("OH NO MONGO CONNECTION ERROR!!!!");
    console.log(err);
  });

app.get("/products", (req, res) => {
  User.find({}).then((data) => {
    console.log("Data", data);
    res.json(data);
  });
});

app.post("/contact", (req, res) => {
  const newMsg = new Contact(req.body);
  newMsg.save((err) => {
    if (err) {
      res.send(err);
    } else {
      res.send({ message: "Successfully message sent" });
    }
  });
});

app.post("/register", (req, res) => {
  const { name } = req.body;
  User.findOne({ name: name }, (err, user) => {
    if (user) {
      res.send("User already registered");
    } else {
      const newUser = new User(req.body);
      console.log(newUser);
      newUser.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Successfully registered" });
        }
      });
    }
  });
});

app.post("/login", (req, res) => {
  const { name, password } = req.body;

  User.findOne({ name: name }, (err, user) => {
    if (user) {

      if (password === user.password) {
        res.send({ message: "Login Successfull", user });
      } else {
        res.send({ message: "Password didn't match" });
      }
    } else {
      res.send({ message: "User not registered" });
    }
  });
});

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
