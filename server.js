const express = require("express");
const mongoose = require("mongoose");
const Mobile = require("./models/mobile");
require("dotenv").config();
// const cros = require('cros');

const app = express();

// app.use(cros());
const uri = process.env.URI;

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("Error connecting to MongoDB");
  }
}

connect();

app.use(express.json());

app.get("/mobile", (req, res) => {
  Mobile.find({}, (err, mobile) => {
    if (err) {
      console.log(err);
    } else {
      res.json(mobile);
    }
  });
});

app.post("/addMobile", async (req, res) => {
  const mobile = new Mobile({
    name: req.body.name,
    price: "LKR " + req.body.price + ".00",
    img: req.body.img,
  });
  const result = await mobile.save();
  res.json(result);
});

app.listen(8000, () => {
  console.log("Server started");
});
