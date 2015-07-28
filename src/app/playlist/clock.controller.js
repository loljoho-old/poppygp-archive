(function() {
  'use strict';

  angular.module('poppyGP.playlist')
    .controller('ClockController', ClockController);

    /** @ngInject */
    function ClockController(moment) {
      var vm = this;
      vm.updateTime = updateTime;
      
      vm.currentTime = moment().format('ddd D MMM HH:mm:ss');

      function updateTime() {
        vm.currentTime = moment().format('ddd D MMM HH:mm:ss');
      }
    }

})();