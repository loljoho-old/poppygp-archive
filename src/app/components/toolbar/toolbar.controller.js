(function() {
  'use strict';

  angular
    .module('poppyGP.components')
    .controller('ToolbarController', ToolbarController);


  /** @ngInject */
  function ToolbarController(moment, $mdUtil, $mdSidenav, $timeout, $log) {
    var vm = this;

    // "vm.creation" is avaible by directive option "bindToController: true"

    vm.datetime = moment().format('D MMM HH:mm');

    vm.toggleLeft = buildToggler('left');

    function buildToggler(navID) {
      return $mdUtil.debounce(function() {
        $mdSidenav('left').toggle().then(function() {
          $log.debug('Toggle ' + navID + ' is done');
        });
      }, 300);
    }

    activate();

    function activate() {
      $log.info('ToolbarController activated');
    }

  }
    
})();