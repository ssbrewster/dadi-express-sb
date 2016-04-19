var nock = require('nock'),
    popularFilmsResponse = require('../fixtures/popular-films-response'),
    popularFilmsExpected = require('../fixtures/popular-films-expected');

describe('API routes', function() {
  var baseUrl = 'https://api.themoviedb.org/3',
      apiKey = process.env.MOVIE_DB_API_KEY

  describe('getFilms', function() {
    it('should retrieve a list of the most popular films', function() {
      nock(baseUrl)
        .get('/movie/popular' + '?api_key=' + apiKey)
        .reply(200, popularFilmsResponse)

      return getFilms.getPopularFilms()
        .should.be.fulfilledWith(popularFilms);
    });

  })

})

