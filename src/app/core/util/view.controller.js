(function() {
  'use strict';

  angular
    .module('poppyGP.core')
    .controller('View', View);

  /* @ngInject */
  function View(firebaseService, $mdUtil, $log) {
    var vm = this;
    vm.title = '';

    activate();

    function activate() {
      $log.warn('Natürlich ist Hans nass, er steht unter einem Wasserfall.');
      firebaseService;
    }
      /*
      return dataservice.current().then(function(response) {
          vm.title = response.year + ' ' + response.title;
          return vm.title;
        }, function(errorMsg) {
          vm.title = errorMsg;
          return vm.title;
        });
      */
    

  }
})();