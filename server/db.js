module.exports = {
  getTestLib: getTestLib,
  saveTestLib: saveTestLib
}

var tests = [{
  id: 1,
  name: 'Enzyme',
  installation: 23.45,
  description: 'Acme Inc.',
  image: 4
}, {
  id: 2,
  name: 'Ava',
  installation: 423.47,
  description: 'Acme Inc.',
  image: 8
}, {
  id: 3,
  name: 'Cheerio',
  installation: 123.40,
  description: 'Acme Inc.',
  image: 3
}]

function getTestLib () {
  return tests
}

function saveTestLib (test) {
  test.id = tests.length + 1
  tests.push(tests)
}
