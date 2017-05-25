
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('languages').del()
    .then(function () {
      // Inserts seed entries
      return knex('languages').insert([
        {id: 1, language_name: 'HTML', tests: 'Cheerio'},
        {id: 2, language_name: 'React', tests: 'Enzyme, Ava'},
        {id: 3, language_name: 'Handlebars', tests: 'Cheerio'},
        {id: 4, language_name: 'API/Servers', tests: 'Supertest'}
      ]);
    });
};
