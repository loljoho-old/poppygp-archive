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
                    templateUrl: './app/content/tabHome.html'
                    // action: home
                },
                {
                    title: 'Chat',
                    icon: './assets/icons/webchat.svg',
                    templateUrl: './app/content/tabChat.html'
                    // communication: chat
                },
                {
                    title: 'Help',
                    icon: './assets/icons/help.svg',
                    templateUrl: './app/content/tabHelp.html'
                    // action: help
                },
                {
                    title: 'Contact',
                    icon: './assets/icons/contact.svg',
                    templateUrl: './app/content/tabContact.html'
                    // action: settings
                },
                {
                    title: 'About',
                    icon: './assets/icons/about.svg',
                    templateUrl: './app/content/tabAbout.html'
                    // action: settings
                }
            ];
            return vm.tabs;
        }
    }
})();