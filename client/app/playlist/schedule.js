(function() {
    'use strict';

    angular
        .module('gpApp.playlist')
        .controller('Schedule', Schedule);

    Schedule.$inject = ['dataservice', '$log', '$q'];
    function Schedule(dataservice, $log, $q) {
        var vm = this;
        vm.schedule = [];

        activate();

        ////////////

        function activate() {
            return dataservice.schedule().then(function(response) {
                vm.schedule = response;
                return vm.schedule;
            });
        }
    }
})();