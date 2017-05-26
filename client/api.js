import request from 'superagent'

var testLibUrl = '/testLib'
var technologiesUrl = '/technologies'

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
