(function() {
  'use strict';

  angular
    .module('poppyGP.core')
    .controller('View', View);

  // @ngInject
  function View($mdSidenav, $mdMedia, $mdUtil, dataservice) {
    var vm = this;
    vm.title = '';


    activate();

    ////////////

    function activate() {
      return dataservice.current().then(function(response) {
          vm.title = response.year + ' ' + response.title;
          return vm.title;
        }, function(errorMsg) {
          vm.title = errorMsg;
          return vm.title;
        });
    }
  }
})();