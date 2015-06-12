(function() {
'use strict';

angular
  .module('poppyGP.core')
  .controller('Cinema', Cinema);

  // @ngInject 
  function Cinema($mdSidenav) {
    var self = this;
    self.isSidenavOpen = true;
    self.toggleLeft = toggleLeft;

    function toggleLeft() {
      $mdSidenav('left').toggle();
    }
  }

})();