(function() {
    'use strict';

    angular
        .module('gpApp.layout')
        .controller('View', View);

    View.$inject = ['$mdSidenav', '$sce', '$log', '$q'];
    function View($mdSidenav, $sce, $log, $q) {
        var vm = this;
        vm.showDonate = true;
        vm.toggleSidenav = toggleSidenav;
        vm.showDonate = showDonate;

        activate();

        ////////////
        function activate() {
            
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