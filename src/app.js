require("dotenv-safe").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("./database/dbConnect");
const usersRoutes = require("./routes/usersRoutes");
const languagesCountriesRoutes = require("./routes/languagesCountriesRoutes");
const learningLanguagesRoutes = require("./routes/learningLanguagesRoutes");


const app = express();

app.use(express.json());
app.use(cors());
mongoose.connect();

app.use("/duochat/users", usersRoutes);
app.use("/duochat/countries", languagesCountriesRoutes);
app.use("/duochat/languages", learningLanguagesRoutes);

module.exports = app;