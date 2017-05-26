var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var path = require('path')

var technologies = require('./routes/technologies')
var testLib = require('./routes/testLib')

var app = express()

app.use(bodyParser.json())
app.use(cors({origin: '*'}))
app.use(express.static(path.join(__dirname, '../public')))
app.use('/testLib', testLib)
app.use('/technologies', technologies)

module.exports = app
