(function() {
    'use strict';

    angular
        .module('gpApp.playlist')
        .controller('Current', Current);

    Current.$inject = ['dataservice', '$log', '$q'];
    function Current(dataservice, $log, $q) {
        var vm = this;
        // obtain from core dataservice
        //  current track
        //  next track
        //  previous track

        activate();

        function activate() {
        }
    }
})();