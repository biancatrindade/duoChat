const controller = require("../controllers/learningLanguagesController");
const express = require("express");

const router = express.Router();

router.get("/all", controller.findAllLanguages);

router.get("/:id", controller.findLanguageById);

router.get("/", controller.findLanguageByLevel);

router.post("/", controller.addNewLanguage);

router.patch("/:id", controller.updateLanguage);

router.delete("/:id", controller.deleteLanguage);

module.exports = router; 