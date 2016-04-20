var routes = require('../routes'),
    request = require('request'),
    nock = require('nock'),
    should = require('should'),
    popularFilmsResponse = require('./fixtures/popular-films-response'),
    popularFilmsExpected = require('./fixtures/popular-films-expected');

describe('API routes', () => {
  const BASE_URL = 'https://api.themoviedb.org/3';
  const MOVIE_DB_POPULAR_PATH = '/movie/popular';
  const API_KEY = process.env.MOVIE_DB_API_KEY;

  describe('getFilms', () => {
    it('should retrieve a list of the most popular films', () => {
      nock(BASE_URL)
        .get(MOVIE_DB_POPULAR_PATH + '?api_key=' + API_KEY)
        .reply(200, popularFilmsResponse)

      return request(BASE_URL + MOVIE_DB_POPULAR_PATH + '?api_key=' + API_KEY, (error, response, body) => {
        response.body.should.containEql(popularFilmsResponse); 
      });
    });

  })

})

