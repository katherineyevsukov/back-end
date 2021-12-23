const Users = require("../users/users-model");

async function checkUsernameAvailable(req, res, next) {
  try {
    const user = await Users.getBy({ username: req.body.username });
    user ? res.status(400).json({ message: "username taken" }) : next();
  } catch (err) {
    next(err);
  }
}

function validateSignup(req, res, next) {
  if (
    !req.body.username ||
    !req.body.username.trim() ||
    !req.body.password ||
    !req.body.password.trim() ||
    !req.body.role_type ||
    !req.body.role_type.trim()
  ) {
    res
      .status(400)
      .json({ message: "username, password and role type are required" });
  } else if (req.body.username.length < 3 || req.body.username.length > 30) {
    res
      .status(400)
      .json({ message: "username does not meet length requirements" });
  } else if (req.body.password.length < 5 || req.body.password.length > 200) {
    res
      .status(400)
      .json({ message: "password does not meet length requirements" });
  } else if (
    req.body.role_type !== "client" &&
    req.body.role_type !== "instructor"
  ) {
    res.status(400).json({ message: "role type must be client or instructor" });
  } else {
    next();
  }
}

module.exports = {
  checkUsernameAvailable,
  validateSignup,
};
