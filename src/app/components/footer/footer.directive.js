(function() {
  'use strict';

  angular
    .module('poppyGP.components')
    .directive('gpFooter', gpFooterDirective);

  /** @ngInject */
  function gpFooterDirective() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/footer/footer.html',
      controller: 'FooterController',
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;
  }

})();