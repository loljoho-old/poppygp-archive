(function() {
    'use strict';

    /**
     * Layout Module
     */
    angular
        .module('gpApp.layout', [])
        .controller('View', View)
        .controller('Left', Left)
        .controller('Right', Right)
        .controller('Tabs', Tabs);

    /**
     * View Controller
     */
    View.$inject = ['$mdSidenav', '$log', '$q'];
    function View($mdSidenav, $log, $q) {
        var vm = this;
        vm.toggleSidenav = toggleSidenav;

        activate();

        ////////////

        function activate() {}

        function toggleSidenav(id) {
            $mdSidenav(id).toggle().then(function() {
                $log.debug('Sidenav ' + id + ' toggled.');
            });
        }
    }

    /**
     * Left Sidenav Controller
     */
    Left.$inject = ['$mdSidenav', '$log', '$q'];
    function Left($mdSidenav, $log, $q) {
        var vm = this;
        vm.toggle = toggle;

        activate();

        ////////////

        function activate() {}

        function toggle() {
            $mdSidenav('left').toggle().then(function() {
                $log.debug('Sidenav left toggled.');
            });
        }
    }


    /**
     * Right Sidenav Controller
     */
    Right.$inject = ['$mdSidenav', '$log', '$q'];
    function Right($mdSidenav, $log, $q) {
        var vm = this;
        vm.toggle = toggle;

        activate();

        ////////////

        function activate() {}

        function toggle() {
            $mdSidenav('right').toggle().then(function() {
                $log.debug('Sidenav right toggled.');
            });
        }
    }


    /**
     * Tabs Controller
     */
    function Tabs() {
        var vm = this;
        vm.currentTab = 0;
        vm.tabs = {
            
        };

        activate();

        ////////////

        function activate() {

        }

    }
    
})();