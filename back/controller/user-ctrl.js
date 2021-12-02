const createUser = async (req, res) => {
  try {
    const dataToFront = req.body;
    console.log(dataToFront);
    // const saveRating = new Rating({
    //   ...req.body,
    // });
    // saveRating.save();
    // res.status(201).json({
    //   message: "Vous êtes bien enregistrer",
    // });
  } catch (error) {
    console.log(error);
    res.status(400).send("oups erreur");
  }
};

module.exports = { createUser };
