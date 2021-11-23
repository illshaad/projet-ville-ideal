const Axios = require("axios");

const getDataIleDeFrance = async (req, res) => {
  try {
    const dataAll = await Axios.get(
      `https://geo.api.gouv.fr/communes?codeRegion=11&fields=nom,code,codesPostaux,population,codeDepartement,centre&format=json&geometry=centre`
    );

    res.status(200).json(dataAll.data);
  } catch (error) {
    console.log(error);
    res.status(400).send("oups erreur");
  }
};

module.exports = { getDataIleDeFrance };
