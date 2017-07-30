import test from 'ava'
import request from 'supertest'

import app from '../../server/server'

var setupDb = require('./setup-db')

setupDb(test, function(db) {
  app.set('knex',db)
})

test.serial.cb('GET /', t => {
  request(app)
    .get('/technologies')
    .expect(200)
    .end((err,res) => {
      t.is(res.body.length, 4)
      t.end()
    })
})
