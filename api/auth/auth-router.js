const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../users/users-model");
const router = express.Router();

router.post("/register", async (req, res, next) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 8);
  user.password = hash;
  try {
    const newUser = await User.insertUser(user);
    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
});
