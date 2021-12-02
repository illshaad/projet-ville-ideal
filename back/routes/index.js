const express = require("express");
const router = express.Router();
const cityCtrl = require("../controller/city-ctrl");
const ratingCtrl = require("../controller/rating-ctrl");
const userCtrl = require("../controller/user-ctrl");
router.get("/city", cityCtrl.getDataIleDeFrance);
router.post("/rating", ratingCtrl.createRating);
router.post("/user", userCtrl.createUser);
module.exports = router;
