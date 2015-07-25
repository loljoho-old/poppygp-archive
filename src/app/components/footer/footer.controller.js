(function() {
  'use strict';

  angular
    .module('poppyGP')
    .controller('FooterController', FooterController)
    .controller('DialogController', DialogController);

    /** @ngInject */
    function FooterController($mdDialog) {

      var vm = this;
      vm.alert = '';

      vm.showDialog = showDialog;


      // Append dialog to document body
      function showDialog(param) {
        var confirm = $mdDialog.confirm()
          .title('Launching external link...')
          .content('You\'ve clicked on an external link, which will launch in a new window or tab.  Is that okay?')
          .ariaLabel('External link')
          .ok('Confirm')
          .clickOutsideToClose(true)
          .cancel('Cancel');

      $mdDialog.show(confirm).then(function() {
          vm.alert = 'Confirm ' + param;
          // Confirm
        }, function() {
          vm.alert = 'Cancel';
          // Cancel
        });
      }
    }

    /** @ngInject */
    function DialogController($mdDialog) {
      var vm = this;

      vm.hide = function() {
        $mdDialog.hide();
      };

      vm.cancel = function() {
        $mdDialog.cancel();
      };
    }

})();