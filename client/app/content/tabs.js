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
                    templateUrl: './assets/partials/tabs/Home.html'
                    // action: home
                },
                {
                    title: 'Chat',
                    icon: './assets/icons/webchat.svg',
                    templateUrl: './assets/partials/tabs/Chat.html'
                    // communication: chat
                },
                {
                    title: 'Help',
                    icon: './assets/icons/help.svg',
                    templateUrl: './assets/partials/tabs/Help.html'
                    // action: help
                },
                {
                    title: 'Contact',
                    icon: './assets/icons/contact.svg',
                    templateUrl: './assets/partials/tabs/Contact.html'
                    // action: settings
                },
                {
                    title: 'About',
                    icon: './assets/icons/about.svg',
                    templateUrl: './assets/partials/tabs/About.html'
                    // action: settings
                }
            ];
            return vm.tabs;
        }
    }
})();