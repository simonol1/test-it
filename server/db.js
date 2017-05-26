module.exports = {
  getTestLib: getTestLib,
  getTechnologies: getTechnologies
}

function getTestLib (connection) {
  return connection('testLib')
}

// function saveTestLib (connection) {
//   test.id = tests.length + 1
//   tests.push(tests)
// }

function getTechnologies (connection) {
  return connection('technologies')
}

// function saveTechnologies (test) {
//   test.id = tests.length + 1
//   tests.push(tests)
// }
