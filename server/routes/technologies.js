var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  db.getTechnologies(req.app.get('knex'))
    .then((result) => {
      res.json(result)
   })
})

module.exports = router
