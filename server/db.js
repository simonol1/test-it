module.exports = {
  getTestLib: getTestLib,
  getTechnologies: getTechnologies
}

function getTestLib (connection) {
  return connection('testLib')
}


function getTechnologies (connection) {
  return connection('technologies')
}
