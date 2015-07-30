(function() {
  'use strict';

  angular
    .module('poppyGP.core')
    .controller('View', View);

  /* @ngInject */
  function View(moment, $mdSidenav, $mdUtil, $mdMedia, $timeout, $log) {
    var vm = this;

    vm.isOpen         = true;
    vm.toggleLeft     = buildToggler('left');

    activate();

    function activate() {
      $mdSidenav('left').then(function(instance) {
        if($mdMedia('gt-md')) {
          instance.open();
          vm.isOpen = true;
        }
        else {
          instance.close();
          vm.isOpen = false;
        }
        //$mdMedia('gt-md') ? instance.open() : instance.close();
      }, function(errorMsg) {
        $log.warn('Did not fetch md-sidenav: ' + errorMsg);
      });
      /*
      $mdSidenav('left').open().then(function() {
        $log.warn('Natürlich ist Hans nass, er steht unter einem Wasserfall.');
      }, function() {
        $log.info('Natürlich ist Hans nass, er steht unter einem Wasserfall.');
      });
      */
    }

    function buildToggler(navID) {
      return $mdUtil.debounce(function() {
        $mdSidenav('left').toggle().then(function() {
          $log.debug('Toggle ' + navID + ' is done');
        });
      }, 300);
    }

    function openSidenav() {
      $mdSidenav('left').open();
      vm.isOpen = true;
    }
    function closeSidenav() {
      $mdSidenav('left').close();
      vm.isOpen = false;
    }

  }

})();
