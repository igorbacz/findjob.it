const Offer = require("../models/offers");

exports.getAllOffers = async (req, res, next) => {
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
    mainStack: req.body.mainStack,
    adminEmail: req.body.adminEmail,
  });
  try {
    const newOffer = await offer.save();
    res.status(201).json(newOffer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteUserOffer = async (req, res) => {
  try {
    await Offer.findByIdAndDelete(req.params._id);
    return res.status(200).json({ success: true, msg: "Offer Deleted" });
  } catch (error) {
    console.log(error);
  }
};
