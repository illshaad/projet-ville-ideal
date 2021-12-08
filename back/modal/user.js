const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: String,
  password: String,
  isAdmin : Number,
});

const dataModelUser = mongoose.model("user", userSchema);

module.exports = dataModelUser;
