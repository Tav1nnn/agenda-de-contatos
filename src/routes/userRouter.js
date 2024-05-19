const express = require("express");
const router = express.Router();
const {createUser, loginUser} = require("../controllers/userController");

router.post("/v1/register", createUser);
router.post("/v1/login", loginUser);

module.exports = {
    router
}