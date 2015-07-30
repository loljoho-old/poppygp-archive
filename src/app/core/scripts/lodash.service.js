(function() {
  'use strict';

  angular
    .module('poppyGP.core')
    .factory('_', lodash);

  /** @ngInject */
  function lodash($window) {
    return $window._.noConflict();
  }


})();
