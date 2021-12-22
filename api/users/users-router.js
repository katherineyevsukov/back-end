const router = require("express").Router();
const Users = require("./users-model");

router.get("/", async (req, res, next) => {
  try{
    const users = await Users.getAllUsers()
    res.json(users)
  }catch(next){
    next(err)
  }
  // res.json(await Users.getAllUsers());
});

router.get("/:user_id", async (req, res, next) => {
  try {
    const user = await Users.getById(req.params.user_id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
});



module.exports = router;
