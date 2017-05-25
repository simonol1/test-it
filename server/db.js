module.exports = {
  getTests: getTests,
  getLanguages
}

function getTests (connection) {
  return connection('tests')
}

function getLanguages (connection) {
  return connection('languages')
}
