
var knex = require('knex')
var config = require('../../knexfile').test

module.exports = function(test, cb) {
  // Create a separate in-memory database before each test.
  // In our tests, we can get at the database as `t.context.db`.
  test.beforeEach(function (t) {
    t.context.db = knex(config)
    if (cb) {cb(t.context.db)}
    return t.context.db.migrate.latest()
      .then(function () {
        return t.context.db.seed.run()
      })
  })

  // Destroy the database connection after each test.
  test.afterEach(function (t) {
    t.context.db.destroy()
  })
}
