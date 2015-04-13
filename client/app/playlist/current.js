(function() {
    'use strict';

    angular
        .module('gpApp.playlist')
        .controller('Current', Current);

    Current.$inject = ['dataservice', '$log', '$q'];
    function Current(dataservice, $log, $q) {
        var vm = this;

        activate();

        function activate() {
        }
    }
})();