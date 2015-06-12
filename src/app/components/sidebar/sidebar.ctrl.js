(function() {
'use strict';

angular.module('poppyGP.components')
  .controller('SidebarCtrl', SidebarCtrl);

/* @ngInject */
function SidebarCtrl($mdSidenav, $log) {
  var self = this;
  self.sidenavIsOpen = true;

  activate();

  function activate() {
    return $mdSidenav('right').open().then(function() {
      $log.info('Right Sidenav Opened');
    });
  }
}
})();