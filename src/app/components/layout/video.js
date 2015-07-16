(function() {
    'use strict';

    angular.module('poppyGP.layout')
        .controller('Video', Video);

    Video.$inject = ['$mdDialog', '$log', '$q'];
    function Video($mdDialog, $log, $q) {
        var vm = this;
        vm.openDonate   = openDonate;
        vm.hideDonate   = hideDonate;
        vm.openMenu     = openMenu;
        
        vm.menuOptions  = [
            { title: 'Option 1',  val: '1' },
            { title: 'Option 2',  val: '2' },
            { title: 'Option 3',  val: '3' },
            { title: 'Option 4',  val: '4' }]; 

        activate();

        function activate() {

        }

        function openDonate(event) {
            $mdDialog.show({
                controller: 'Donate',
                controllerAs: 'vm',
                templateUrl: './app/components/layout/donate.html',
                targetEvent: event,
            });
        }
        function hideDonate() {
            $mdDialog.hide();
        }
        
        function openMenu() {
            $log.debug('Hacked dropdown menu opened.');
        }
    }  

})();