const Users = require('../users/users-model')

async function checkUsernameAvailable(req, res, next){
    try{
        const user = await Users.getBy({ username: req.body.username })
        user ? res.status(400).json({ message: "username taken"}) : 
        next()
    }catch(err){
        next(err)
    }
}
module.exports = {
    checkUsernameAvailable
}
