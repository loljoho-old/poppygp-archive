(function() {
  'use strict';

  angular
    .module('poppyGP.sidebar')
    .controller('SidebarController', SidebarController);


    /** @ngInject */
    function SidebarController($sce) {

      var vm  = this;
      vm.tabs         = [];
      vm.activeTab    = 0;

      activate();

      function activate() {
        vm.tabs = setTabConfig();
      }

      function setTabConfig() {
        return [{
          name: 'Webchat',
          icon: 'ion-chatboxes',
          body: getHtmlTrust('<iframe class="webchat" flex src="https://kiwiirc.com/client/irc.snoonet.org/?nick=poppyGP|?&theme=mini#f1"></iframe>')
        }, {
          name: 'Reddit',
          icon: 'ion-social-reddit',
          body: ''
        }, {
          name: 'Twitter',
          icon: 'ion-social-twitter',
          body: ''
        }];
      }

      function getHtmlTrust(code) {
        return $sce.trustAsHtml(code);
      }

    }

})();