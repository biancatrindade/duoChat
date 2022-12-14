const controller = require("../controllers/languagesCountriesController");
const express = require("express");

const router = express.Router();

router.get("/all", controller.findAllCountries);

router.get("/:id", controller.findCountryById);

router.get("/", controller.findCountryByLanguage);

router.post("/", controller.addNewCountry);

router.patch("/:id", controller.updateCountry);

router.delete("/:id", controller.deleteCountry);

module.exports = router; 