(function() {
  'use strict';

  angular
    .module('poppyGP')
    .directive('gpPlayer', gpPlayerDirective);

  /* @ngInject */
  function gpPlayerDirective() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/player/player.html'
    };

  }

})();