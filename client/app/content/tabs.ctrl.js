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
                    icon: './assets/icons/home.svg',
                    templateUrl: './app/content/tab1.html'
                    // action: home
                },
                {
                    title: 'Chat',
                    icon: './assets/icons/webchat.svg',
                    templateUrl: './app/content/tab2.html'
                    // communication: chat
                },
                {
                    title: 'Help',
                    icon: './assets/icons/help.svg',
                    templateUrl: './app/content/tab3.html'
                    // action: help
                },
                {
                    title: 'About',
                    icon: './assets/icons/about.svg',
                    templateUrl: './app/content/tab4.html'
                    // action: settings
                }
            ];
            return vm.tabs;
        }
    }
})();