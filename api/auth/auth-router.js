const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../users/users-model");
const buildToken = require("./token-builder");
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

router.post("/login", async (req, res, next) => {
  const { username, password } = req.body;
  try{
    const user = await User.getBy({ username })
    if (user && bcrypt.compareSync(password, user.password)){
      const token = buildToken(user)
      res.status(200).json({
        message: `welcome back ${user.username}`,
        role_type: user.role_type,
        token
      })
    } else {
      next({ status: 401, message: 'Invalid Credentials' })
    }
  }catch(err){
    next(err)
  }
});

module.exports = router;
