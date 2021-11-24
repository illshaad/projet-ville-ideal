const Axios = require("axios");

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
    const recoveryPostalCode = dataCommune.data.map((e) =>
      e.code.split("", 2).join("")
    );

    res
      .status(200)
      .json({ commun: dataCommune.data, departement: dataDepartement.data });
  } catch (error) {
    console.log(error);
    res.status(400).send("oups erreur");
  }
};

module.exports = { getDataIleDeFrance };
