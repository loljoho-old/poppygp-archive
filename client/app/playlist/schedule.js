(function() {
    'use strict';

    angular
        .module('gpApp.playlist')
        .controller('Schedule', Schedule);

    Schedule.$inject = ['dataservice', '$log', '$q'];
    function Schedule(dataservice, $log, $q) {
        var vm = this;

        activate();

        function activate() {
        }
    }
})();