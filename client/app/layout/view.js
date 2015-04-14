(function() {
    'use strict';

    angular
        .module('gpApp.layout')
        .controller('View', View);

    View.$inject = ['$mdSidenav', '$sce', '$log', '$q'];
    function View($mdSidenav, $sce, $log, $q) {
        var vm = this;
        vm.showDonate = true;
        vm.tabs = [];
        vm.toggleSidenav = toggleSidenav;
        vm.showDonate = showDonate;

        activate();

        ////////////

        function activate() {
            vm.tabs = [
                {
                    title: 'Home',
                    icon: 'home',
                    templateUrl: 'assets/partials/tabs-home.html'
                    // action: home
                },
                {
                    title: 'Chat',
                    icon: 'webchat',
                    templateUrl: 'assets/partials/tabs-chat.html'
                    // communication: chat
                },
                {
                    title: 'Help',
                    icon: 'request',
                    templateUrl: 'assets/partials/tabs-help.html'
                    // action: help
                },
                {
                    title: 'About',
                    icon: 'settings',
                    templateUrl: 'assets/partials/tabs-about.html'
                    // action: settings
                }
            ];
            return vm.tabs;
        }

        function toggleSidenav(id) {
            $mdSidenav(id).toggle().then(function() {
                $log.debug('Sidenav ' + id + ' toggled.');
            });
        }

        function showDonate() {


        }
    }
})();