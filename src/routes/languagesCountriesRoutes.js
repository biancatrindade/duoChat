const controller = require("../controllers/languagesCountriesController");
const express = require("express");

const router = express.Router();

router.get("/all", controller.findAllCountries);

router.get("/countries/:id", controller.findCountryById);

router.get("/countries/:languages", controller.findCountryByLanguage);

router.post("/add", controller.addNewCountry);

router.patch("/country/:id", controller.updateCountry);

router.delete("/coutry/:id", controller.deleteCountry);

module.exports = router; 