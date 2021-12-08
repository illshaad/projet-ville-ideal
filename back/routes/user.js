const express = require("express");
const router = express.Router();
const userCtrl = require("../controller/user-ctrl");

router.post("/register", userCtrl.createUser); 
router.post("/login", userCtrl.loginUser); 

module.exports = router;
