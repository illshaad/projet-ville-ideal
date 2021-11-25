const mongoose = require("mongoose");

const avisSchema = mongoose.Schema({
  Commerce: String,
  Culture: String,
  Enseignement: String,
  Environement: String,
  QualiterdeVie: String,
  Sante: String,
  Securite: String,
  SportetLoisir: String,
  Transports: String,
  textarea: String,
});

const dataModelAvis = mongoose.model("avis", avisSchema);

module.exports = dataModelAvis;
