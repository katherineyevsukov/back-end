const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const classesRouter = require('./classes/classes-router')
const usersRouter = require('./users/users-router')
const authRouter = require('./auth/auth-router')
const restricted = require('./auth/restricted-middleware')

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/classes', restricted, classesRouter)
server.use('/api/users', restricted, usersRouter)
server.use('/api/auth', authRouter)

server.get('/', async (req, res) => {
  res.json('Welcome!')
})
server.get('/api', async (req, res) => {
  res.json("add /users to url to see all users")
})

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message, stack: err.stack})
})


module.exports = server
