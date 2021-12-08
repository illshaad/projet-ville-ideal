const jwt = require('jsonwebtoken');

const JWT_SECRET = '8181f8sfsfsfsfzezfzef1z01f8z1f8dsdf1sf51sf1sffzf8ef1ze8fza' ;
const generateTokenUser = (userData) => {
    return jwt.sign({
        id : userData.id,
        isAdmin : userData.isAdmin,
    },
    JWT_SECRET,{
      expiresIn : '1h'
    })
}



module.exports = { generateTokenUser  };

//Mettre id a un utilisateur crée