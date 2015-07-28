(function() {
  'use strict';

  angular
    .module('poppyGP.components')
    .directive('gpToolbar', gpToolbarDirective);

  /** @ngInject */
  function gpToolbarDirective() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/toolbar/toolbar.html'
    };

    return directive;

  }

})();