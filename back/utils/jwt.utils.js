const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

const generateTokenUser = (userData) => {
  return jwt.sign(
    {
      userId: userData._id,
      isAdmin: userData.isAdmin,
    },
    JWT_SECRET,
    {
      expiresIn: "3h",
    }
  );
};

const parseAuthorizaion = (authorization) =>
  authorization !== null && authorization.split(" ")[1];

const getUser = (authorization) => {
  try {
    const token = parseAuthorizaion(authorization);
    const jwtToken = jwt.verify(token, JWT_SECRET);
    if (jwtToken !== null) return jwtToken.userId;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { generateTokenUser, getUser };
