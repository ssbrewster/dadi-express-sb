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
  function PopularFilmsController() {
    var vm = this;
  }
})();
