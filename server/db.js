module.exports = {
  getTestLib: getTestLib,
  getTechnologies: getTechnologies,
  appendTechnology: appendTechnology,
  appendTest: appendTest
}

function getTestLib (connection) {
  return connection('testLib')
}


function getTechnologies (connection) {
  return connection('technologies')
}


function appendTest (test, connection) {
  return connection('testLib')
    .insert(test)
}

function appendTechnology (data, connection) {
  return connection('technologies')
    .insert(data)

