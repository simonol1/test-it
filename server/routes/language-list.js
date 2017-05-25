var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  res.json(db.getLanguages())
})

// router.post('/', function (req, res) {
//   db.(req.body)
//   res.sendStatus(200)
// })

module.exports = router
