(function() {
'use strict';

angular
  .module('poppyGP.core')
  .controller('ViewCtrl', ViewCtrl);

  /* @ngInject */
  function ViewCtrl($log, $q) {
    
    activate();

    function activate() {
      $log.info('Hi!');
      return true;
    }
  }

})();