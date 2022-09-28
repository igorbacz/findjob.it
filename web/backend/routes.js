const express = require("express");
const router = express.Router();
const Offer = require("../backend/models/offers");
const User = require("../backend/models/users");

//Getting all offers
router.get("/", async (req, res) => {
  try {
    const offers = await Offer.find();
    res.json(offers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Creating One offer
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

//Creating One user
router.post("/register", async (req, res) => {
  const user = new User({
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Authenticate User
router.post("/login", (req, res) => {});

module.exports = router;
