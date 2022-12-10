const controller = require("../controllers/usersController");
const express = require("express");

const router = express.Router();

router.get("/all", controller.findAllUsers);

router.get("/users/:id", controller.findUserById);

router.get("/users/:username", controller.findUserByUsername);

//router.get("/users/:level", controller.findUserByLevel); //como é que vou fazer isso???

router.post("/add", controller.addNewUser);

router.patch("/user/:id", controller.updateUser);

router.delete("/user/:id", controller.deleteUser); 

module.exports = router; 