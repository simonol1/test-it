var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  res.json(db.getTests())
})

// router.post('/', function (req, res) {
//   db.saveLanguage(req.body)
//   res.sendStatus(200)
// })

module.exports = router
