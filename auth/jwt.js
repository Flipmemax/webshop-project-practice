const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET || "L23[]P9&^1xV239sw*7e)asR345%%$24j,g";

function toJWT(data) {
  return jwt.sign(data, secret, { expiresIn: "2h" });
}

function toData(token) {
  return jwt.verify(token, secret);
}

module.exports = { toJWT, toData };
