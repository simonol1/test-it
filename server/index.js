var knex = require('knex')
var env = process.env.NODE_ENV || 'development'
var config = require('../knexfile')[env]

var server = require('./server')

server.set('knex', knex(config))

var PORT = process.env.PORT || 3000

server.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
