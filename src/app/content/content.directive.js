(function() {
  'use strict';

  angular
    .module('poppyGP.content')
    .directive('gpContent', gpContentDirective);

  /* @ngInject */
  function gpContentDirective() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/content/content.html',
      controller: 'ContentController',
      controllerAs: 'vmm'
    };
    return directive;

  }

})();
