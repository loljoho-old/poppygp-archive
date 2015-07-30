(function() {
  'use strict';

  angular
    .module('poppyGP.core')
    .controller('View', View);

  /** @ngInject */
  function View(moment, $mdSidenav, $mdUtil, $mdMedia, $timeout, $log) {
    var vm = this;

    vm.toggleLeft     = buildToggler('left');
    vm.openLeft       = buildOpener('left');
    vm.closeLeft      = buildCloser('left');

    vm.isOpen         = true;

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
      });
      $log.warn('Natürlich ist Hans nass, er steht unter einem Wasserfall.');
    }


    function buildToggler(navID) {
      return $mdUtil.debounce(function() {
        $mdSidenav(navID).toggle().then(function() {
          vm.isOpen = $mdMedia('gt-md') && vm.isOpen ? false : true;
          $log.debug('Toggled ' + navID);
        });
      }, 300);
    }

    function buildOpener(navID) {
      return $mdUtil.debounce(function() {
        $mdSidenav(navID).open().then(function() {
          vm.isOpen = false;
          $log.debug('Opened ' + navID);
        });
      }, 300);
    }

    function buildCloser(navID) {
      return $mdUtil.debounce(function() {
        $mdSidenav(navID).close().then(function() {
          vm.isOpen = false;
          $log.debug('Closed ' + navID);
        });
      }, 300);
    }
    /*
    function openSidenav() {
      $mdSidenav('left').open();
    }
    function closeSidenav() {
      $mdSidenav('left').close();
      vm.isOpen = false;
    }
    */
  }

})();
