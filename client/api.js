import request from 'superagent'

var testLibUrl = 'http://localhost:3000/testLib'
var technologiesUrl = 'http://localhost:3000/technologies'

module.exports = {
  getTestLib,
  getTechnologies
}

function getTestLib (callback) {
  request
    .get(testLibUrl)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })
}

function getTechnologies(callback) {
  request
    .get(technologiesUrl)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
  })
}
