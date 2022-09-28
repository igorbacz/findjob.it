const mongoose = require("mongoose");

const offerSchema = new mongoose.Schema(
  {
    dateAdded: {
      type: String,
    },
    remote: {
      type: Boolean,
    },
    title: {
      type: String,
    },
    amount: {
      type: String,
    },
    city: {
      type: String,
    },
    companyName: {
      type: String,
    },
    logo: {
      type: String,
    },
    techStack: {
      type: Object,
      stackName: {
        type: String,
      },
      stackLvl: {
        type: String,
      },
      value: {
        type: Number,
      },
    },
    adress: {
      type: String,
    },
    companySize: {
      type: String,
    },
    exp: {
      type: String,
    },
    description: {
      type: String,
    },
    geolocation: {
      type: Object,
      latitiude: {
        type: String | Number,
      },
      longitiude: {
        type: String | Number,
      },
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Offer", offerSchema);
