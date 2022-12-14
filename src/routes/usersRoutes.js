const controller = require("../controllers/usersController");
const express = require("express");

const router = express.Router();

router.get("/all", controller.findAllUsers);

router.get("/:id", controller.findUserById);

router.get("/", controller.findUserByUsername);

router.post("/login", controller.login);

router.post("/", controller.addNewUser);

router.patch("/:id", controller.updateUser);

router.delete("/:id", controller.deleteUser); 

module.exports = router; 