const db = require("./../data/db-config");

async function getAll() {
  const classes = await db("classes");
  return classes;
}

async function getById(class_id) {
  const [theClass] = await db("classes").where("class_id", class_id);
  return theClass;
}

async function getUserClasses(user_id) {
  // select u.user_id, u.username, c.*
  // from users as u
  // left join classes_students as cs on cs.student_id = u.user_id
  // join classes as c on c.class_id = cs.class_id
  // where u.user_id = 4
  const classes = await db("users as u")
    .select("u.user_id", "u.username", "c.*")
    .leftJoin("classes_students as cs", "cs.student_id", "u.user_id")
    .join("classes as c", "c.class_id", "cs.class_id")
    .where("user_id", user_id);

  return classes;
}

async function getInstructorClasses(user_id) {
  // select u.user_id, u.username, c.*, count(cs.student_id) as number_registered
  // from users as u
  // left join classes as c on u.user_id = c.class_instructor
  // join classes_students as cs on cs.class_id = c.class_id
  // where u.user_id = 1
  // group by u.user_id, u.username, c.class_id
  const classes = await db("users as u")
    .select("u.username", "c.*")
    .count("cs.student_id", { as: "number_registered" })
    .leftJoin("classes as c", "u.user_id", "c.class_instructor")
    .join("classes_students as cs", "cs.class_id", "c.class_id")
    .where("user_id", user_id)
    .groupBy("u.username", "c.class_id")
    
    classes.forEach(cl => cl.number_registered = parseInt(cl.number_registered))
    return classes
}

async function addClass(newClass){
  const [created] = await db('classes').insert(newClass).returning('*')
  return created
}

async function removeClass(class_id){
  const rowsDeleted = await db('classes').where('class_id', class_id).del()
  return rowsDeleted
}

async function signupForClass({class_id, student_id}){
  const [id] = await db('classes_students').insert({class_id, student_id}).returning('student_id')
  const userClasses = await getUserClasses(id)
  return userClasses
}

module.exports = { getAll, getById, getUserClasses, getInstructorClasses, addClass, removeClass, signupForClass };
