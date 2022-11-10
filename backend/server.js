require("dotenv").config();
const corse = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = process.env;

mongoose.connect(config.DATABASE_URL, { useNewUrlParser: true });

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(corse());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());

const dataRouter = require("./routes/routes");
app.use("/api/", dataRouter);

const PORT = "https://itjustfind.herokuapp.com";

app.listen(PORT, () => {
  console.log("Server Started");
});
