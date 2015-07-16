(function() {

    angular
        .module('poppyGP.layout')
        .controller('Toolbar', Toolbar);

    Toolbar.$inject = ['$mdSidenav', '$mdDialog', '$mdSelect', '$log', '$q'];
    function Toolbar($mdSidenav, $mdDialog, $mdSelect, $log, $q) {
        var vm = this;
        vm.openSidenav  = openSidenav;
        vm.openMenu     = openMenu;
        vm.menuOptions  = [
            { title: 'Option 1',  val: '1' },
            { title: 'Option 2',  val: '2' },
            { title: 'Option 3',  val: '3' },
            { title: 'Option 4',  val: '4' }];   

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
        function openMenu() {
            $log.debug('Hacked dropdown menu opened.');
        }
    }
})();