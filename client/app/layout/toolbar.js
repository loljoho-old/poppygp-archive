(function() {

    angular
        .module('gpApp.layout')
        .controller('Toolbar', Toolbar);

    Toolbar.$inject = ['$mdSidenav', '$mdDialog', '$log', '$q'];
    function Toolbar($mdSidenav, $mdDialog, $log, $q) {
        var vm = this;
        vm.openSidenav  = openSidenav;

        activate();

        function activate() {

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