(function() {
    'use strict';

    angular.module('gpApp.layout')
        .controller('Video', Video);

    Video.$inject = ['$log', '$q'];
    function Video($log, $q) {
        var vm = this;
        vm.openMenu     = openMenu;
        
        vm.menuOptions  = [
            { title: 'Option 1',  val: '1' },
            { title: 'Option 2',  val: '2' },
            { title: 'Option 3',  val: '3' },
            { title: 'Option 4',  val: '4' }]; 

        activate();

        function activate() {

        }

        
        function openMenu() {
            $log.debug('Hacked dropdown menu opened.');
        }
    }  

})();