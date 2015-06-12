(function() {
'use strict';

angular
  .module('poppyGP.core')
  .controller('ViewCtrl', ViewCtrl);

  // @ngInject 
  function ViewCtrl($mdSidenav) {
    var self = this;
    self.isSidenavOpen = true;
    self.toggleLeft = toggleLeft;

    function toggleLeft() {
      $mdSidenav('left').toggle();
    }
  }

})();