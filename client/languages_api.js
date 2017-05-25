import request from 'superagent'

var languageUrl = 'http://localhost:3000/languages'

module.exports = {
  getLanguages: getLanguages,
  appendLanguage: appendLanguage
}

function getLanguages (callback) {
  request
    .get(languageUrl)
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
    .post(languageUrl)
    .send(language)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null)
      }
    })
}
