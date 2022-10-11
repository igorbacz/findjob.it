const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/users");
const config = process.env;

exports.registerUser = async (req, res) => {
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
};

exports.loginUser = async (req, res) => {
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
};
