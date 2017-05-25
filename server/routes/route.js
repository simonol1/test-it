var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  res.json(db.getTestLib())
})

router.post('/', function (req, res) {
  db.saveTestLib(req.body)
  res.sendStatus(200)
})

module.exports = router
