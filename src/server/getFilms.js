'use strict';
var requestPromise = require('request-promise'),
    forEach = require('lodash.foreach'),
    pick = require('lodash.pick');

module.exports = {
  getPopularFilms: (numResults) => {
    const MOVIE_DB_POPULAR_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=' + process.env.MOVIE_DB_API_KEY; 
    const BASE_POSTER_PATH = 'https://image.tmdb.org/t/p/original';
    const requestOptions = {
      method: 'GET',
      uri: MOVIE_DB_POPULAR_URL,
      json: true
    }

    return requestPromise(requestOptions)
      .then((res) => {
        var popularFilms = {results: []};
        res.results.slice(0, numResults).forEach(value => {
          let filmMetadata = pick(value, [
              'id', 
              'original_title', 
              'poster_path', 
              'title',
              'vote_average'
          ]);

          filmMetadata.poster_path = BASE_POSTER_PATH + filmMetadata.poster_path; 
          popularFilms.results.push(filmMetadata);
        });

        return popularFilms;
      })
    .catch((err) => {
       console.log(err);
    }) 
  }
}
