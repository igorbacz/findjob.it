require("dotenv").config();

const corse = require("cors");

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = process.env;

mongoose.connect(config.DATABASE_URL, { useNewUrlParser: true });

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(corse());
app.use(express.json());

const dataRouter = require("./routes");
app.use("/api", dataRouter);

app.listen(4000, () => console.log("Server Started"));
