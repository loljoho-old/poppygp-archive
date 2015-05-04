(function() {
    'use strict';

    angular
        .module('gpApp.layout')
        .controller('View', View);

    View.$inject = ['$mdSidenav', '$mdMedia', 'dataservice', '$log', '$q'];
    function View($mdSidenav, $mdMedia, dataservice, $log, $q) {
        var vm = this;
        vm.title         = '';
        vm.isFullscreen  = false;
        vm.sidenavLock   = sidenavLock;
        vm.fullscreen    = toggleFullscreen;

        vm.toggleSidenav = toggleSidenav;
        vm.closeSidenav  = closeSidenav;
        vm.openSidenav   = openSidenav;

        activate();

        ////////////
        function activate() {
            return dataservice
                .current()
                .then(function(response) {
                    vm.title = response.year + ' ' + response.title;
                    return vm.title;
                });
        }

        function sidenavLock() {
            return $mdMedia('gt-sm') && !vm.isFullscreen ? true : false;
        }
        function toggleFullscreen() {
            var pending = vm.isFullscreen = !vm.isFullscreen || $q.when(true);
            pending.then(function() {
                $mdSidenav('right').close();
            });
            return vm.isfullscreen;
        }

        function toggleSidenav() {
            $mdSidenav('right')
                .toggle()
                .then(function() {
                    $log.debug('Sidenav toggled.');
                });
        }

        function closeSidenav() {
            $mdSidenav('right')
                .close()
                .then(function() {
                    $log.debug('Sidenav closed.');
                });
        }

        function openSidenav() {
            $mdSidenav('right')
                .open()
                .then(function() {
                    $log.debug('Sidenav opened.');
                });
        }
    }
})();