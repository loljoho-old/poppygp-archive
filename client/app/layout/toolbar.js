(function() {

    angular
        .module('gpApp.layout')
        .controller('Toolbar', Toolbar);

    Toolbar.$inject = ['$mdSidenav', '$mdDialog', '$log', '$q'];
    function Toolbar($mdSidenav, $mdDialog, $log, $q) {
        var vm = this;
        vm.toggleSidenav = toggleSidenav;

        activate();

        function activate() {

        }

        function toggleSidenav() {
            $mdSidenav('right').toggle().then(function() {
                $log.debug('Sidenav right toggled.');
            });
        }
    }
})();