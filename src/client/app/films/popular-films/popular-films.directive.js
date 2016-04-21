(function() {
  'use strict';

  angular
    .module('seen.popularFilms')
    .directive('popularFilms', popularFilms);

  /* @ngInject */
  function popularFilms() {
    var directive = {
      bindToController: true,
      controller: PopularFilmsController,
      controllerAs: 'vm',
      scope: {},
      templateUrl: 'app/films/popular-films/popular-films.html'
    };
    return directive;
  }

  /* @ngInject */
  function PopularFilmsController($http) {
    var vm = this;

    vm.films = {};
    vm.numResults = 4;
    
    activate();

    function activate() {
      $http.get('/api/get-popular-films', {params: {"numResults": vm.numResults}})
      .then(function(res) {
        vm.films = res.data.results;
      }, function(err) {
        console.log(err);
      });
    }
  }
})();
