const db = require('./../data/db-config')

async function getAll(){
    const classes = await db('classes')
    return classes
}

async function getById(class_id){
    const [theClass] = await db('classes').where('class_id', class_id)
    return theClass
}

async function getUserClasses(user_id){
    // select u.user_id, u.username, c.* 
    // from users as u 
    // left join classes_students as cs on cs.student_id = u.user_id
    // join classes as c on c.class_id = cs.class_id
    // where u.user_id = 4
    const classes = await db("users as u")
    .select("u.user_id", "u.username", "c.*")
    .leftJoin("classes_students as cs", "cs.student_id", "u.user_id")
    .join("classes as c", "c.class_id", "cs.class_id")
    .where("user_id", user_id)

    return classes
}


async function getInstructorClasses(){

}

module.exports = { getAll, getById, getUserClasses, getInstructorClasses }
