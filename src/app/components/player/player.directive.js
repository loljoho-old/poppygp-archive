(function() {
  'use strict';

  angular
    .module('poppyGP.components')
    .directive('gpPlayer', gpPlayerDirective);

  /* @ngInject */
  function gpPlayerDirective() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/player/player.html'
    };

  }

})();