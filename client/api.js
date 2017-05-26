import request from 'superagent'

var testLibUrl = '/testLib'
var technologiesUrl = '/technologies'

module.exports = {
  getTestLib,
  getTechnologies,
  appendTest,
  appendTechnology
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

function appendTest (test, callback) {
  request
    .post(testLibUrl)
    .send(test)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null)
      }
    })
}

function appendTechnology (technology, callback) {
  request
    .post(technologiesUrl)
    .send(technology)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null)
      }
    })
}
