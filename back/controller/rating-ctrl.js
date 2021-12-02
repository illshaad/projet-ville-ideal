const createRating = async (req, res) => {
  try {
    const dataToFront = req.body;
    console.log(dataToFront);
    const formatAverageNumber = (data) => {
      let array = [];
      for (var number in dataToFront) {
        array.push(parseInt(dataToFront[number]));
      }
      const removeNaN = array.filter((e) => Boolean(e));
      const some = removeNaN.reduce(
        (previousValue, currentValue) => previousValue + currentValue
      );
      const moyenne = some / removeNaN.length;
      const round = moyenne.toFixed(2);
      return parseInt(round);
    };

    const totalRating = formatAverageNumber(dataToFront);

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

module.exports = { createRating };
