const express = require("express");
const router = express.Router();
const userCtrl = require("../controller/user-ctrl");

router.post("/users/register", userCtrl.createUser); 
router.post("/users/login", userCtrl.loginUser); 

module.exports = router;
