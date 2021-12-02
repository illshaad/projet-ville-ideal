const mongoose = require("mongoose");

const ratingsSchema = mongoose.Schema({
  nameCity: String,
  nameDepartement: String,
  commerce: String,
  culture: String,
  enseignement: String,
  environement: String,
  quality: String,
  sante: String,
  security: String,
  sportandleisure: String,
  transports: String,
  remarkPositive: String,
  remarkNegative: String,
  textarea: String,
});

const dataModelRating = mongoose.model("ratings", ratingsSchema);

module.exports = dataModelRating;
