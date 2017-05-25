module.exports = {
  getLanguages: getLanguages,
  saveLanguage: saveLanguage
}

var languages = [{
  id: 1,
  name: 'knex',
  price: 23.45,
  mfg: 'Acme Inc.',
  inStock: 4
}, {
  id: 2,
  name: 'api',
  price: 423.47,
  mfg: 'Acme Inc.',
  inStock: 8
}, {
  id: 3,
  name: 'html',
  price: 123.40,
  mfg: 'Acme Inc.',
  inStock: 3
}]

function getLanguages () {
  return languages
}

function saveLanguage (language) {
  language.id = languages.length + 1
  languages.push(language)
}
