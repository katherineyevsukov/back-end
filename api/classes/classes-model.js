const db = require('./../data/db-config')

async function getAll(){
    const classes = await db('classes')
    return classes
}

async function getById(class_id){
    const [theClass] = await db('classes').where('class_id', class_id)
    return theClass
}

module.exports = { getAll, getById }
