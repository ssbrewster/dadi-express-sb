'use strict';
var router = require('express').Router(),
    getFilms = require('./getFilms');

module.exports = router;

router.get('/get-popular-films', getPopularFilms);

function getPopularFilms(req, res) {
  getFilms.getPopularFilms(req.query.numResults)
    .then(response => res.json(response))
    .catch(err => res.send(err).end());
}
