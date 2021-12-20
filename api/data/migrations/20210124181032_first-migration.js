exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (users) => {
      users.increments('user_id')
      users.string('username', 200).notNullable().unique()
      users.string('password', 200).notNullable()
      users.string('role_type', 100).notNullable()
      users.timestamps(false, true)
    })
    .createTable("classes", (classes) => {
      classes.increments("class_id")
      classes.string("class_name", 128).notNullable()
      classes.string("class_duration", 128).notNullable()
      classes.integer("max_class_size").notNullable()
      classes.date("class_date").notNullable()
      classes.time("start_time").notNullable()
      classes.string("class_location", 128).notNullable()
      classes.string("class_type", 120).notNullable()
      classes.string("class_intensity", 120).notNullable()
      classes.integer("class_instructor").notNullable()
        .unsigned()
        .notNullable()
        .references("user_id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
    })
    .createTable("classes_students", (classes_students) => {
      classes_students.increments("class_student_id")
      classes_students.integer("student_id").notNullable()
      .unsigned()
      .notNullable()
      .references("user_id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE")
      classes_students.integer("class_id").notNullable()
      .unsigned()
      .notNullable()
      .references("class_id")
      .inTable("classes")
      .onUpdate("CASCADE")
      .onDelete("CASCADE")
    })
}

exports.down = async (knex) => {
  return knex.schema
  .dropTableIfExists("classes_students")
  .dropTableIfExists("classes")
  .dropTableIfExists("users")
}
