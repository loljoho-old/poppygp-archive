(function() {
    'use strict';

    angular
        .module('gpApp.playlist')
        .controller('Schedule', Schedule);

    Schedule.$inject = ['dataservice', '$log', '$q'];
    function Schedule(dataservice, $log, $q) {
        var vm = this;
        vm.schedule = [];
        vm.timeNow = moment();
        vm.playTime = vm.timeNow;
        vm.setTime = setTime;

        activate();

        ////////////

        function activate() {
            return dataservice.schedule()
            .then(function(response) {
                vm.schedule = response;
                return vm.schedule;
            });
        }

        function setTime(duration) {
            vm.playTime = vm.timeNow.add(duration, 'seconds');
            return vm.playTime;
        }

        //activate();

        ////////////

/*
        function activate() {
            return getSchedule.then(function() {
                $log.info('Activated Schedule view...');
            });
        }

        function getSchedule() {
            return dataservice.getSchedule().then(function(response) {
                vm.schedule = response;
                return vm.schedule;
            })
        }
*/

    }
})();