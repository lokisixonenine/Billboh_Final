const jwt = require("jsonwebtoken");
const SECRET = "puppy";
const ONE_DAY = "1d";

module.exports = {
  secret: SECRET,
  sign: payload => jwt.sign(payload, SECRET, { expiresIn: ONE_DAY })
};
