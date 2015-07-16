(function() {
    'use strict';

    angular
        .module('gpApp.playlist')
        .controller('Playlist', Playlist);

    Playlist.$inject = ['dataservice', '$log', '$q'];
    function Playlist(dataservice, $log, $q) {
        var vm = this;
        vm.playlist = [];

        activate();

        ////////////

        function activate() {
            return dataservice.schedule().then(function(response) {
                vm.playlist = response;
                return vm.playlist;
            });
        }
    }
})();