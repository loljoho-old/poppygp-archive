(function() {
  'use strict';

  angular.module('poppyGP.playlist')
    .controller('ClockController', ClockController);

    /** @ngInject */
    function ClockController(moment, $timeout) {
      var vm = this;
      vm.currentTime = moment().format('HH:mm:ss');

      function updateTime() {
        vm.currentTime = moment().format('HH:mm:ss');
        $timeout(updateTime(), 1000);
      }
    }

})();