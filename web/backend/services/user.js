const Offer = require("../models/offers");

exports.deleteOffer = async (id) => {
  const offer = await Offer.findById({ _id: id });
  if (!offer) {
    throw new Error("Offer doesn't exist");
  }
  await Offer.deleteOne({ _id: id });
  return true;
};
