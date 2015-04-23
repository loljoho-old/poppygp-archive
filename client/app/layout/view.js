(function() {
    'use strict';

    angular
        .module('gpApp.layout')
        .controller('View', View);

    View.$inject = ['$mdSidenav', '$sce', '$log', '$q'];
    function View($mdSidenav, $sce, $log, $q) {
        var vm = this;
        vm.showSidenav = true;
        vm.toggleSidenav = toggleSidenav;
        vm.closeSidenav  = closeSidenav;
        vm.openSidenav   = openSidenav;

        activate();

        ////////////
        function activate() {
            
        }

        function toggleSidenav() {
            $mdSidenav('right').toggle().then(function() {
                $log.debug('Sidenav toggled.');
            });
        }

        function closeSidenav() {
            $mdSidenav('right').close().then(function() {
                $log.debug('Sidenav closed.');
            });
        }

        function openSidenav() {
            $mdSidenav('right').open().then(function() {
                $log.debug('Sidenav opened.');
            });
        }
    }
})();