const express = require("express");
const router = express.Router();
const offersController = require("../controllers/offers");
const userController = require("../controllers/users");

router.get("/", offersController.getAllOgffers);

router.post("/add-offer", offersController.addOffer);

router.delete("/delete-offer/:_id", offersController.deleteUserOffer);

router.post("/register", userController.registerUser);

router.post("/login", userController.loginUser);

module.exports = router;
