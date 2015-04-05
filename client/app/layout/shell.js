(function() {
    'use strict';

    /**
     * Layout Controller
     */
    angular
        .module('pgp.layout')
        .controller('Shell', Shell);
        
    Shell.$inject = ['dataservice', '$mdSidenav', '$mdBottomSheet'];
    function Shell(dataservice, $mdSidenav, $mdBottomSheet) {
        var vm = this;
        vm.colours = [];
        vm.toggleSidenav = toggleSidenav;

        activate();

        ////////////

        function activate() {
            //return dataservice.getData().then(function() {
            //    $log.info('Shell Controller activated...');
            //});
        }
        function getData() {
            return dataservice.getData().then(function(data) {
                vm.colours = data;
                return vm.colours;
            });
        }

        /**
         * Toggle mdSidenav Element
         */
        function toggleSidenav() {
            //var pending = $mdBottomSheet.hide() || $q.when(true);
            //pending.then(function() {
                $mdSidenav('left').toggle();
            //});
        }


        /**
         * Toggle Cinema Mode
         */
        function modeCinema() {
        }

    }
})();