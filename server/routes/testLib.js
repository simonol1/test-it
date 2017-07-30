var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  db.getTestLib(req.app.get('knex'))
    .then((result) => {
      res.json(result)
   })
})


router.post('/', function (req, res) {
  db.appendTest(req.body, req.app.get('knex'))
    .then((response) => {
      res.sendStatus(201)

    })
})

module.exports = router
