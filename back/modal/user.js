const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  pseudo: String,
  password: String,
});

const dataModelUser = mongoose.model("user", userSchema);

module.exports = dataModelUser;
