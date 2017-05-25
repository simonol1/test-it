
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tests').del()
    .then(function () {
      // Inserts seed entries
      return knex('tests').insert([
        {id: 1, test_name: 'Ava', img_url: 'https://raw.githubusercontent.com/avajs/ava/master/media/header.png', description: '', installation: ''},
        {id: 2, test_name: 'Enzyme', img_url: '', description: '', installation: ''},
        {id: 3, test_name: 'Tape', img_url: '', description: '', installation: ''},
        {id: 4, test_name: 'Supertest', img_url: '', description: '', installation: ''},
        {id: 5, test_name: 'Cheerio', img_url: '', description: '', installation: ''}
      ]);
    });
};
