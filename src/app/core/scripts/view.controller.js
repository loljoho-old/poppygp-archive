(function() {
  'use strict';

  angular
    .module('poppyGP.core')
    .controller('View', View);

  /* @ngInject */
  function View(moment, $mdSidenav, $mdUtil, $timeout, $log) {
    var vm = this;

    vm.isOpen         = true;

    vm.toggleLeft     = buildToggler('left');

    activate();

    function activate() {
      $log.warn('Natürlich ist Hans nass, er steht unter einem Wasserfall.'); 
    }

    function buildToggler(navID) {
      return $mdUtil.debounce(function() {
        $mdSidenav('left').toggle().then(function() {
          $log.debug('Toggle ' + navID + ' is done');
        });
      }, 300);
    }

  }

})();