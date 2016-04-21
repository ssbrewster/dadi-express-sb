var nock = require('nock'),
    should = require('should'),
    getFilms = require('../getFilms'),
    popularFilmsResponse = require('./fixtures/popular-films-response'),
    popularFilmsExpected = require('./fixtures/popular-films-expected');

describe('getFilms', () => {
  const BASE_URL = 'https://api.themoviedb.org/3';
  const MOVIE_DB_POPULAR_PATH = '/movie/popular';
  const API_KEY = process.env.MOVIE_DB_API_KEY;

  describe('getPopularFilms', () => {
    it('should retrieve a list of the most popular films', () => {
      nock(BASE_URL)
        .get(MOVIE_DB_POPULAR_PATH)
        .query({api_key: API_KEY})
        .reply(200, popularFilmsResponse)

        const popularFilms =  getFilms.getPopularFilms()
          .should.be.finally.match(popularFilmsExpected);  
    });
  });
});

