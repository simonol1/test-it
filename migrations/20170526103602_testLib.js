exports.up = function (knex, Promise) {
  return knex.schema.createTable('testLib', function (table) {
    table.increments('id').primary()
    table.string('test_name')
    table.string('img_url')
    table.text('description')
    table.text('installation')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('testLib')
}
