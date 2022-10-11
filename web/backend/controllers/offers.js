const Offer = require("../models/offers");

exports.getAllOgffers = async (req, res, next) => {
  try {
    const offers = await Offer.find();
    res.json(offers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addOffer = async (req, res) => {
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
};

// exports.deleteOffer = async (req, res) => {};

exports.deleteUserOffer = async (req, res, next) => {
  try {
    await deleteOffer(req.params.id);
    res.status(200).json({ message: "Deleted offer" });
  } catch (error) {
    next(error);
  }
};
