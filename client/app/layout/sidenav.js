(function() {
    'use strict';

    angular
        .module('cvApp.layout')
        .controller('Sidenav', Sidenav);

    Sidenav.$inject = ['dataservice', '$mdSidenav', '$log'];

    function Sidenav(dataservice, $mdSidenav, $log) {
        var vm = this;
        vm.items = ['Home', 'Webchat', 'Schedule', 'Posts'];
        vm.closeSidenav = closeSidenav;

        activate();

        /////////////

        function activate() {
            $log.info('Sidenav Controller activated...');
            
        }

        function getSections() {
        }

        function closeSidenav() {
            return $mdSidenav('left').close().then(function() {
                $log.debug('Sidenav closed.');
            });
        }
    }
})();