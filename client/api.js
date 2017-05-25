import request from 'superagent'

var testUrl = 'http://localhost:3000/tests'

module.exports = {
  getTestLib: getTestLib,
  appendTestLib: appendTestLib
}

function getTestLib (callback) {
  request
    .get(testUrl)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })
}

function appendTestLib (test, callback) {
  request
    .post(testUrl)
    .send(test)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null)
      }
    })
}
