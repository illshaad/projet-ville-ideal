const bcrypt = require("bcrypt");
const User = require("../modal/user");
const JwtUtils = require("../utils/jwt.utils");

const createUser = async (req, res) => {
  try {
    const email = req.body.email;
    const requestpassword = req.body.password;
    if (email == null || requestpassword == null) {
      return res.status(400).json("parametre manquant...");
    }
    const emailExist = await User.findOne({ email: email });
    if (!emailExist) {
      const hashpassword = await bcrypt.hash(
        requestpassword,
        await bcrypt.genSalt(10)
      );
      const toto = await User.create({
        email: email,
        password: hashpassword,
        isAdmin: email === "shaddlove5@gmail.com" ? true : false,
      });

      // Retirer le TOTO c'était pour faire des testes pour l'intégration de nodemail//

      res.status(201).json({ email, message: "Vous êtes bien enregistrer" });
    } else {
      return res
        .status(409)
        .json({ message: "utilisateur existe dans la bdd" });
    }
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const loginUser = async (req, res) => {
  try {
    const email = req.body.email;
    const requestpassword = req.body.password;

    if (email == null || requestpassword == null) {
      return res.status(400).json("parametre manquant...");
    }
    const emailExist = await User.findOne({ email: email });
    if (emailExist) {
      const IsValidPassword = await bcrypt.compare(
        requestpassword,
        emailExist.password
      );
      if (IsValidPassword) {
        return res.status(200).json({
          email,
          token: JwtUtils.generateTokenUser(emailExist),
        });
      }
    } else {
      return res
        .status(403)
        .json("mots de passe pas valide ou email pas valide");
    }
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const getUserProfilByToken = async (req, res) => {
  const headerAuth = req.headers["authorization"];
  const userId = JwtUtils.getUser(headerAuth);
  try {
    const requestInfo = await User.findOne(
      { id: userId },
      {
        _id: 1,
        email: 1,
        isAdmin: 1,
      }
    );
    if (requestInfo) {
      res.status(201).json(requestInfo);
    } else {
      res.status(404).json("vous étes pas dans la bdd");
    }
  } catch (error) {
    res.status(500);
  }
};

module.exports = { createUser, loginUser, getUserProfilByToken };
