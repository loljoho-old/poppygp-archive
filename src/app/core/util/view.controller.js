(function() {
  'use strict';

  angular
    .module('poppyGP.core')
    .controller('View', View);

  /* @ngInject */
  function View(dataservice, moment, $mdSidenav, $mdUtil, $timeout, $log) {
    var vm = this;


    function toggleLeft() {
      $mdSidenav('left').open();
    }

    vm.title = '';
    vm.playlist = '';
    

    activate();

    function activate() {
      $log.warn('Natürlich ist Hans nass, er steht unter einem Wasserfall.'); 
      vm.playlist = getXspf();
    }
    function getXspf() {
      return dataservice.getXspf();
    }

  }

})();