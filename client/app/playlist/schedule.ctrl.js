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
                name: 'San Marino Grand Prix',
                type: 'Race',
                time: '14:45'   },
            {   year: '1984',
                name: 'Monaco Grand Prix',
                type: 'Race',
                time: '17:21'   },
            {   year: '2007',
                name: 'European Grand Prix',
                type: 'Qualifying',
                time: '18:01'   },
            {   year: '2007',
                name: 'European Grand Prix',
                type: 'Race',
                time: '20:41'   }];

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