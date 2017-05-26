
exports.up = function (knex, Promise) {
  return knex.schema.createTable('technologies', function (table) {
    table.increments('id').primary()
    table.string('technologies_name')
    table.string('tests')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('technologies')
}
