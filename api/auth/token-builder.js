const JWT_SECRET = require("../../config");
const jwt = require("jsonwebtoken");

module.exports = function buildToken(user) {
  const payload = {
    subject: user.user_id,
    username: user.username,
    role: user.role_type,
  };
  const options = {
    expiresIn: "1d",
  };
  return jwt.sign(payload, JWT_SECRET, options);
};
