
exports.up = function (knex, Promise) {
  return knex.schema.createTable('languages', function (table) {
    table.increments('id').primary()
    table.string('language_name')
    table.string('tests')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('languages')
}
