(function() {
  'use strict';

  angular
    .module('poppyGP.core')
    .controller('View', View);

  /* @ngInject */
  function View(dataservice, moment, $mdUtil, $log) {
    var vm = this;
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