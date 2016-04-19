(function() {
  'use strict';

  angular
    .module('seen.popularReviews')
    .directive('popularReviews', popularReviews);

  /* @ngInject */
  function popularReviews() {
    var directive = {
      bindToController: true,
      controller: PopularReviewsController,
      controllerAs: 'vm',
      scope: {},
      templateUrl: 'app/reviews/popular-reviews/popular-reviews.html'
    };
    return directive;
  }

  /* @ngInject */
  function PopularReviewsController() {
    var vm = this;
  }
})();
