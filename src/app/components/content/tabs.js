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
                    templateUrl: './assets/partials/tabs/home.html'
                },
                {
                    title: 'Chat',
                    icon: './assets/icons/webchat.svg',
                    templateUrl: './assets/partials/tabs/chat.html'
                },
                {
                    title: 'Help',
                    icon: './assets/icons/help.svg',
                    templateUrl: './assets/partials/tabs/help.html'
                },
                {
                    title: 'Contact',
                    icon: './assets/icons/contact.svg',
                    templateUrl: './assets/partials/tabs/contact.html'
                },
                {
                    title: 'About',
                    icon: './assets/icons/about.svg',
                    templateUrl: './assets/partials/tabs/about.html'
                }
            ];
            return vm.tabs;
        }
    }
})();