(function() {
    'use strict';

    angular.module('gpApp.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$resource'];
    function dataservice($resource) {
        var service = {
            schedule    : getSchedule,
            current     : getCurrentTrack
        };
        return service;

        function getSchedule() {
            return $resource('./data/playlist/').get().$promise.then(function(response) {
                return response;
            }, function(errorMsg) {
                return errorMsg;
            });
        }
        function getCurrentTrack() {
            return $resource('./data/playlist/').get().$promise.then(function(response) {
                return response[0];
            }, function(errorMsg) {
                return errorMsg;
            });
        }
    }

})();