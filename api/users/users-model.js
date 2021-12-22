const db = require("../data/db-config");

function getAllUsers() {
  return db("users");
}

async function getById(user_id) {
  const [user] = await db("users").where("user_id", user_id);
  return user;
}

async function getBy(filter) {
  const [user] = await db("users").where(filter);

  return user;
}

async function insertUser(user) {
  const [newUserObject] = await db("users").insert(user, [
    "user_id",
    "username",
    "password",
    "role_type",
  ]);
  return newUserObject; 
}

module.exports = { getAllUsers, getById, insertUser, getBy };
