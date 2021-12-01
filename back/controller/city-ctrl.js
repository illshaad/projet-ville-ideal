const Axios = require("axios");
const Rating = require("../modal/rating");
const getDataIleDeFrance = async (req, res) => {
  try {
    const [dataCommune, dataDepartement] = await Axios.all([
      Axios.get(
        `https://geo.api.gouv.fr/communes?codeRegion=11&fields=nom,code,codesPostaux,population,centre&format=json&geometry=centre`
      ),
      Axios.get(
        `https://geo.api.gouv.fr/regions/11/departements?fields=nom,code`
      ),
    ]);

    const recoveryPostalCode = dataCommune.data.map((e) => {
      const departement = dataDepartement.data.find(
        (f) => f.code === e.code.split("", 2).join("")
      );
      return {
        ...e,
        departement,
      };
    });

    res.status(200).json(recoveryPostalCode);
  } catch (error) {
    console.log(error);
    res.status(400).send("oups erreur");
  }
};

const createRating = async (req, res) => {
  try {
    const dataToFront = req.body;
    const transformation = (data) => {
      let array = [];
      for (var number in dataToFront) {
        array.push(parseInt(dataToFront[number]));
      }
      const removeNaN = array.filter((e) => Boolean(e));
      const some = removeNaN.reduce(function (accu, current) {
        return accu + current;
      }, 0);
      const moyenne = some / removeNaN.length;
      const round = moyenne.toFixed(2);
      return parseInt(round);
    };

    const totalRating = transformation(dataToFront);

    const saveRating = new Rating({
      ...req.body,
    });
    saveRating.save();

    res.status(201).json({
      message:
        "Votre avis est bien enregistré nous allons effectuer un contrôle",
      someRating: totalRating,
      ...dataToFront,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send("oups erreur");
  }
};

module.exports = { getDataIleDeFrance, createRating };
