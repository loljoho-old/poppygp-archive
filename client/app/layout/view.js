(function() {
    'use strict';

    angular
        .module('gpApp.layout')
        .controller('View', View);

    View.$inject = ['$mdSidenav', '$sce', '$log', '$q'];
    function View($mdSidenav, $sce, $log, $q) {
        var vm = this;
        vm.tabs = [];
        vm.toggleSidenav = toggleSidenav;

        activate();

        ////////////

        function activate() {
            vm.tabs = [
                {
                    title: 'Webchat',
                    icon: 'webchat',
                    templateUrl: 'assets/partials/tabs-webchat.html'
                },
                {
                    title: 'Reddit',
                    icon: 'reddit',
                    templateUrl: 'assets/partials/tabs-reddit.html'
                },
                {
                    title: 'Request',
                    icon: 'request',
                    templateUrl: 'assets/partials/tabs-request.html'
                },
                {
                    title: 'Settings',
                    icon: 'settings',
                    templateUrl: 'assets/partials/tabs-settings.html'
                }
            ];
            return vm.tabs;
        }

        function toggleSidenav(id) {
            $mdSidenav(id).toggle().then(function() {
                $log.debug('Sidenav ' + id + ' toggled.');
            });
        }
    }
})();