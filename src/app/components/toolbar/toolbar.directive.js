(function() {
  'use strict';

  angular
    .module('poppyGP')
    .directive('gpToolbar', gpToolbarDirective);

  /** @ngInject */
  function gpToolbarDirective() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/toolbar/toolbar.html',
      controller: 'ToolbarController',
      controllerAs: 'vmm'
    };

    return directive;

  }

})();