'use strict';
var router = require('express').Router(),
    request = require('request'),
    forEach = require('lodash.foreach'),
    pick = require('lodash.pick');

module.exports = router;

router.get('/get-films', getPopularFilms);

function getPopularFilms(req, res) {
  var popularFilms = {results: []};
  const MOVIE_DB_POPULAR_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=' + process.env.MOVIE_DB_API_KEY; 
  const BASE_POSTER_PATH = 'https://image.tmdb.org/t/p/original';

  request({
    method: 'GET',
    uri: MOVIE_DB_POPULAR_URL,
    json: true
  }, (error, response, body) => {
    if (error) {
      res.send(error);
    }
    else {
      response.body.results.slice(0,3).forEach(value => {
        let filmMetadata = pick(value, [
              'id', 
              'original_title', 
              'poster_path', 
              'title'
        ]);

        filmMetadata.poster_path = BASE_POSTER_PATH + filmMetadata.poster_path; 
        popularFilms.results.push(filmMetadata);
      });

      res.send(popularResults);
    }
  });
}
