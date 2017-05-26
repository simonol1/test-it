
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('technologies').del()
    .then(function () {
      // Inserts seed entries
      return knex('technologies').insert([
        {id: 1, technologies_name: 'HTML', tests: 'Cheerio'},
        {id: 2, technologies_name: 'React', tests: 'Enzyme, Ava'},
        {id: 3, technologies_name: 'Handlebars', tests: 'Cheerio'},
        {id: 4, technologies_name: 'API/Servers', tests: 'Supertest'}
      ]);
    });
};
