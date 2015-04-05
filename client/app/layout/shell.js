(function() {
    'use strict';

    /**
     * Layout Controller
     */
    angular
        .module('cvApp.layout')
        .controller('Shell', Shell);
        
    Shell.$inject = ['dataservice', '$mdSidenav', '$mdBottomSheet'];
    function Shell(dataservice, $mdSidenav, $mdBottomSheet) {
        var vm = this;
        vm.colours = [];
        vm.toggleSidenav = toggleSidenav;
        vm.togglePlaylist = togglePlaylist;

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
         * Toggle Playlist mdSidenav Element
         */
        function togglePlaylist() {
            //var pending = $mdBottomSheet.hide() || $q.when(true);
            //pending.then(function() {
                $mdSidenav('right').toggle();
            //});
        }

    }
})();