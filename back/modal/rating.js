const mongoose = require("mongoose");

const ratingsSchema = mongoose.Schema({
  nameCity: String,
  nameDepartement: String,
  trade: String,
  culture: String,
  education: String,
  environement: String,
  quality: String,
  health: String,
  security: String,
  sportandleisure: String,
  transports: String,
  remarkPositive: String,
  remarkNegative: String,
});

const dataModelRating = mongoose.model("ratings", ratingsSchema);

module.exports = dataModelRating;
