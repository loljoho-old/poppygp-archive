(function() {
    'use strict';

    angular.module('gpApp.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$resource', '$log', '$q'];
    function dataservice($resource, $log, $q) {
        
        // service raw promise to return
        var service = {
            laps     : getLaps,
            pitStops : getPitStops
        };
        return service;

        // *********************************
        // Internal methods
        // *********************************

        function getLaps() {
            return $resource('../data/laps.json').get().$promise
                .then(function(response) {
                    return response.MRData.RaceTable.Races[0].Laps;
                }, function (errorMsg) {
                    return errorMsg;
                });
        }

        function getPitStops() {
            return $resource('../data/pitstops.json').get().$promise
                .then(function(response) {
                    return response.MRData.RaceTable.Races[0].PitStops;
                }, function (errorMsg) {
                    return errorMsg;
                });
        }
    }

})();
    /*
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$resource', '$log'];
    function dataservice($resource, $log) {
        var dataValue = '';

        var service = {
            getData: getValue,
            validate: validate
        };
        return service;

        ////////////

        function getValue() {
            dataValue = 'Hello World!';
            return dataValue;
        }
        function validate() {
            return true;
        }

    }

})();


function dataService() {
    var someValue = '';
    var service = {
        save: save,
        someValue: someValue,
        validate: validate
    };
    return service;

    ////////////

    function save() {
      
    };

    function validate() {
      
    };
}
*/
/*
    function dataservice($resource, $log) {
        var root = './assets/data/';
        var args = {};
        var acts = {
            'get': {
                method: 'GET'
            }
        };

        var service = {
            getResume   : getResume,
            get         : get
        };
        return service;

        // *********************************
        // Internal methods
        // *********************************

        //
        // Retrieve File `resume.json` from `data/`
        // 
        function getResume() {
            var url = root + 'resume.json';
            var res = $resource(url, args, acts);
            return res.get()
                .$promise.then(function(response) {
                    return response;
                }, function(errorMsg) {
                    return errorMsg;
                });
        }

        //
        // Retrieve File from `data/`
        //
        function get(section) {
            var url = root + '/sections/' + section + '.json';
            var res = $resource(url, args, acts);
            return res.get()
                .$promise.then(function(response) {
                    return response;
                }, function(errorMsg) {
                    return errorMsg;
                });
        }
    }

})();*/
