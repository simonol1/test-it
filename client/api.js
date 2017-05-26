import request from 'superagent'

var testItUrl = 'http://localhost:3000/test-it'

module.exports = {
  getTestLib: getTestLib,
  appendTestLib: appendTestLib,
  getLanguages: getLanguages,
  appendLanguage: appendLanguage
}

function getTestLib (callback) {
  request
    .get(testItUrl)
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
    .post(testItUrl)
    .send(test)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null)
      }
    })
}



function getLanguages (callback) {
  request
    .get(testItUrl)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })
}

function appendLanguage (language, callback) {
  request
    .post(testItUrl)
    .send(language)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null)
      }
    })
}
