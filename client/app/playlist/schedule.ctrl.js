(function() {
    'use strict';

    angular
        .module('gpApp.playlist')
        .controller('Schedule', Schedule);

    Schedule.$inject = ['dataservice', '$log', '$q'];
    function Schedule(dataservice, $log, $q) {
        var vm = this;
        vm.schedule = [
            {   year: '1994',
                name: 'San Marino',
                type: 'Race',
                time: '14:45 Tue 14/04'   },
            {   year: '1984',
                name: 'Monaco',
                type: 'Race',
                time: '17:21 Tue 14/04'   },
            {   year: '2007',
                name: 'European',
                type: 'Qualifying',
                time: '18:01 Tue 14/04'   },
            {   year: '2007',
                name: 'European',
                type: 'Race',
                time: '20:41 Tue 14/04'   }];

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