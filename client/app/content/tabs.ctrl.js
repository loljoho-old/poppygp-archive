(function() {
    'use strict';

    angular
        .module('gpApp.content')
        .controller('Tabs', Tabs);

    Tabs.$inject = ['$log', '$q'];
    function Tabs($log, $q) {
        var vm = this;
        vm.tabs = [];

        activate();

        ////////////

        function activate() {
            vm.tabs = [
                {
                    title: 'Home',
                    icon: 'home',
                    templateUrl: './app/content/tab1.html'
                    // action: home
                },
                {
                    title: 'Chat',
                    icon: 'chat',
                    templateUrl: './app/content/tab2.html'
                    // communication: chat
                },
                {
                    title: 'Help',
                    icon: 'help',
                    templateUrl: './app/content/tab3.html'
                    // action: help
                },
                {
                    title: 'About',
                    icon: 'about',
                    templateUrl: './app/content/tab4.html'
                    // action: settings
                }
            ];
            return vm.tabs;
        }
    }
})();