const bcrypt = require('bcrypt')
const User = require("../modal/user");
const JwtUtils = require('../utils/jwt.utils');

const createUser = async (req, res) => {
  try {
    const email = req.body.email;
    const passwordToFront = req.body.password;
    if(email === null || passwordToFront === null){
      return res.status(400).json('parametre manquante...')
    }
    const emailExist = await User.findOne({'email' : email});
      if(!emailExist) {
        let hashpassword = await bcrypt.hash(passwordToFront,await bcrypt.genSalt(10));
        const saveUser = User.create({
          email: email,
          password : hashpassword,
          isAdmin : email === 'shaddlove5@gmail.com' ? 1 : 0,
        });
        res.status(201).json({ ...saveUser , message :'utilisateur enregistrer'})
      } else {
        return res.status(409).json('utilisateur existe dans la bdd')
    }
  } catch (error) {
    console.log(error);
    res.status(400).send("oups erreur");
  }
};

const loginUser = async ( req , res) => {
  try {
    const email = req.body.email;
    const passwordToFront = req.body.password;
    if(email === null || passwordToFront === null){
      return res.status(400).json('parametre manquante...')
    }
    const emailExist = await User.findOne({'email' : email});
      if(emailExist) {
        let compare = await bcrypt.compare(passwordToFront, emailExist.password);
        if(compare) {
          return res.status(200).json({
            email,
            'token' : JwtUtils.generateTokenUser(emailExist)
          })
        }
      } else {
        return res.status(403).json('mots de passe pas valide ou email pas valide')
    }
  } catch (error) {
    console.log(error);
    res.status(400).send("oups erreur");
  }
}

module.exports = { createUser , loginUser };
