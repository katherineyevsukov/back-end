const bcrypt = require("bcryptjs");

const hash = bcrypt.hashSync("password", 8);

exports.seed = function(knex, Promise) {
  return knex('users').insert([   
    { username: 'bob', password: hash, role_type: 'instructor'},
    { username: 'sam', password: hash, role_type: 'instructor'},
    { username: 'kat', password: hash, role_type: 'client'},
    { username: 'joe', password: hash, role_type: 'client'},
  ]);
};
