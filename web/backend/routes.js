const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const bcrypt = require("bcrypt");
const Offer = require("../backend/models/offers");
const User = require("../backend/models/users");

const config = process.env;

router.get("/", async (req, res) => {
  try {
    const offers = await Offer.find();
    res.json(offers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/add-offer", async (req, res) => {
  const offer = new Offer({
    dateAdded: req.body.dateAdded,
    remote: req.body.remote,
    title: req.body.title,
    amount: req.body.amount,
    city: req.body.city,
    companyName: req.body.companyName,
    logo: req.body.logo,
    adress: req.body.adress,
    companySize: req.body.companySize,
    exp: req.body.exp,
    description: req.body.description,
    geolocation: req.body.geolocation,
    techStack: req.body.techStack,
  });
  try {
    const newOffer = await offer.save();
    res.status(201).json(newOffer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/register", async (req, res) => {
  const body = req.body;
  const oldUser = await User.findOne({ email: body.email });
  if (!oldUser) {
    if (!(body.email && body.password)) {
      res.status(400).send({ error: "Data not formatted properly" });
    }
    const user = new User(body);
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    user.save().then((doc) => res.status(201).send(doc));
  } else {
    res.status(409).send("User Already Exist. Please Login.");
  }
});

router.post("/login", async (req, res) => {
  const body = req.body;
  const user = await User.findOne({ email: body.email });
  if (user) {
    const validPassword = await bcrypt.compare(body.password, user.password);
    if (validPassword) {
      const token = jwt.sign({ email: user.email }, config.TOKEN_KEY, {
        expiresIn: "2h",
      });
      user.token = token;
      res.status(200).json(user);
    } else {
      res.status(400).json({ error: "Invalid Password" });
    }
  } else {
    res.status(401).json({ error: "User does not exist" });
  }
});

module.exports = router;
