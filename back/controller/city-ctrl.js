const Axios = require("axios");
const Avis = require("../modal/avis");
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

const saveAvis = async (req, res) => {
  const dataToFront = req.body;
  console.log(dataToFront);

  res
    .status(200)
    .json("Votre avis est bien enregistrée nous allons effectuer un controle");
  // try {
  //   const avis = new Avis({
  //     ...req.body,
  //   });
  //   avis.save();
  //   res
  //     .status(201)
  //     .json(
  //       "Votre avis est bien enregistrée nous allons effectuer un controle"
  //     );
  // } catch (error) {
  //   console.log(error);
  //   res.status(400).send("oups erreur");
  // }
};

module.exports = { getDataIleDeFrance, saveAvis };
