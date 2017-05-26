
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('testLib').del()
    .then(function () {
      // Inserts seed entries
      return knex('testLib').insert([
        {id: 1, test_name: 'Ava', img_url: 'https://raw.githubusercontent.com/avajs/ava/master/media/header.png', description: 'Ava is a test runner that runs your tests in parallel - see https://github.com/avajs/ava for more information.', installation: 'https://github.com/avajs/ava#usage'},

        {id: 2, test_name: 'Enzyme', img_url: 'http://code.hootsuite.com/wp-content/uploads/2016/08/enzyme.jpg', description: "Enzyme is a react testing utility that makes it easier to assert, manipulate, and traverse your React Components' output.", installation: 'https://github.com/airbnb/enzyme#installation'},

        {id: 3, test_name: 'Tape', img_url: 'https://camo.githubusercontent.com/50dd49050de38c87a28ab6aa0b09bbe2d042cba1/687474703a2f2f737562737461636b2e6e65742f696d616765732f746170655f64726976652e706e67', description: 'Tape is a tap-producing test harness for node and browsers requiring few APIs. It can be used for unit and integration testing.', installation: 'https://github.com/substack/tape'},

        {id: 4, test_name: 'Supertest', img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUEDfgfO0aHntAJzK4w4dvtLU6OSZwbV1dWDyl73-AYZIYT-k', description: 'Supertest provides a high-level abstraction for testing HTTP, while still allowing you to drop down to the lower-level API provided by superagent.', installation: 'https://github.com/visionmedia/supertest'},

        {id: 5, test_name: 'Cheerio', img_url: 'http://www.stickycomics.com/wp-content/uploads/cheerio_chex.jpg', description: 'Cheerio is a fast, flexible & lean implementation of core jQuery designed specifically for the server.', installation: 'https://github.com/cheeriojs/cheerio'}
      ]);
    });
};
