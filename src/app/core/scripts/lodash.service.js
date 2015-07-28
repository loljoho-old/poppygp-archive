(function() {
  'use strict';
  
  var core = angular.module('poppyGP.core');

  core.factory('_', lodash);

  /* @ngInject */  
  function lodash($window) {
    return $window._.noConflict();
  }


})();