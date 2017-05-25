import test from 'ava'
import request from 'supertest'

import app from '../../server/server'
import language List from '../server/routes/language-list'


test.serial.cb('GET /', t => {
  request(app)
    .get('/language-list')
    .expect(200)
    .end((err,res) => {
      t.is(res.body.length, 3)
      t.end()
    })
})

// test.serial.cb('POST /widgets', t => {
//   request(app)
//     .post('/widgets')
//     .send({name:'test'})
//     .expect(200)
//     .end((err, res) => {
//       request(app)
//         .get('/widgets').end((err, res) => {
//           t.is(res.body.length, 4)
//           t.end()
//         })
//     })
// })
