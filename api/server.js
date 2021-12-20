const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const db = require('./data/db-config')
const classesRouter = require('./classes/classes-router')

function getAllUsers() { return db('users') }

async function getById(user_id){
  const [user] = await db('users').where("user_id", user_id)
  return user
}

async function insertUser(user) {
  // WITH POSTGRES WE CAN PASS A "RETURNING ARRAY" AS 2ND ARGUMENT TO knex.insert/update
  // AND OBTAIN WHATEVER COLUMNS WE NEED FROM THE NEWLY CREATED/UPDATED RECORD
  // UNLIKE SQLITE WHICH FORCES US DO DO A 2ND DB CALL
  const [newUserObject] = await db('users').insert(user, ['user_id', 'username', 'password'])
  return newUserObject // { user_id: 7, username: 'foo', password: 'xxxxxxx' }
}

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/classes', classesRouter)

server.get('/api/users', async (req, res) => {
  res.json(await getAllUsers())
})

server.get('/api/users/:user_id', async (req, res, next) => {
   try{
     const user = await getById(req.params.user_id)
     res.status(200).json(user)
   } catch(err){
     next(err)
   }
})

server.post('/api/users', async (req, res) => {
  res.status(201).json(await insertUser(req.body))
})

module.exports = server
