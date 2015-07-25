(function() {
  'use strict';

  angular
    .module('poppyGP')
    .controller('ToolbarController', ToolbarController);


  /** @ngInject */
  function ToolbarController(moment, $log) {
    var vm = this;

    // "vm.creation" is avaible by directive option "bindToController: true"

    vm.datetime = moment().format('D MMM HH:mm');

    activate();

    function activate() {
      $log.info('ToolbarController activated');
    }

  }
    
})();