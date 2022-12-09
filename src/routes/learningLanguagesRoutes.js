const controller = require("../controllers/learningLanguagesController");
const express = require("express");

const router = express.Router();

router.get("/all", controller.findAllLanguages);

router.get("/language/:id", controller.findLanguageById);

router.post("/add", controller.addNewLanguage);

router.patch("/language/:id", controller.updateLanguage);

router.delete("/language/:id", controller.deleteLanguage);

module.exports = router; 