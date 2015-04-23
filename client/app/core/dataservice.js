(function() {
    'use strict';

    angular.module('gpApp.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$resource', '$log', '$q'];
    function dataservice($resource, $log, $q) {
        
        // service raw promise to return
        var service = {
            schedule : getSchedule,
            //schedule : getScheduleTest,
            laps     : getLaps,
            pitStops : getPitStops
        };
        return service;

        // *********************************
        // Internal methods
        // *********************************

        function getSchedule() {
            return $resource('./parser/').get().$promise
                .then(function(response) {
                    return response;
                }, function(errorMsg) {
                    return errorMsg;
                });
        }

        function getScheduleTest() {
            return $q.when([{"year":"2002","round":"","title":"Melbourne Qualifying","seconds":"3992","time":"2015-04-22T13:00:00-0400"},{"year":"2002","round":"01","title":"Australia","seconds":"6979","time":"2015-04-22T14:06:32-0400"},{"year":"1984","round":"12","title":"Austria Race","seconds":"1977","time":"2015-04-22T16:02:51-0400"},{"year":"1988","round":"15","title":"Japan Race","seconds":"7288","time":"2015-04-22T16:35:48-0400"},{"year":"2004","round":"06","title":"Monaco Qualifying","seconds":"2720","time":"2015-04-22T18:37:16-0400"},{"year":"2004","round":"06","title":"Monaco 1","seconds":"4496","time":"2015-04-22T19:22:36-0400"},{"year":"2004","round":"06","title":"Monaco 2","seconds":"4668","time":"2015-04-22T20:37:32-0400"},{"year":"1984","round":"1","title":"USA Race","seconds":"2040","time":"2015-04-22T21:55:20-0400"},{"year":"2001","round":"01","title":"Australian race Melbourne","seconds":"7658","time":"2015-04-22T22:29:20-0400"},{"year":"1981","round":"09","title":"Great Britain Race","seconds":"7020","time":"2015-04-23T00:36:58-0400"},{"year":"1991","round":"16","title":"Australia Race","seconds":"2291","time":"2015-04-23T02:33:58-0400"},{"year":"1991","round":"16","title":"Australia Race 2","seconds":"5729","time":"2015-04-23T03:12:09-0400"},{"year":"1993","round":"03","title":"Europe Race 1","seconds":"3926","time":"2015-04-23T04:47:38-0400"},{"year":"1993","round":"03","title":"Europe Race 2","seconds":"5870","time":"2015-04-23T05:53:04-0400"},{"year":"1982","round":"11","title":"France Race","seconds":"6334","time":"2015-04-23T07:30:54-0400"},{"year":"1996","round":"01","title":"Australia Qualifying","seconds":"2771","time":"2015-04-23T09:16:28-0400"},{"year":"1996","round":"01","title":"Australia Sunday Warmup","seconds":"1873","time":"2015-04-23T10:02:39-0400"},{"year":"1996","round":"01","title":"Australia Melbourne race","seconds":"8223","time":"2015-04-23T10:33:52-0400"},{"year":"1981","round":"","title":"NC South Africa Race","seconds":"3622","time":"2015-04-23T12:50:55-0400"},{"year":"2009","round":"01","title":"Australia Qualifying","seconds":"8134","time":"2015-04-23T13:51:17-0400"},{"year":"2009","round":"01","title":"Australia Race","seconds":"10821","time":"2015-04-23T16:06:51-0400"},{"year":"1990","round":"16","title":"Australia Race","seconds":"2041","time":"2015-04-23T19:07:12-0400"},{"year":"2002","round":"","title":"Melbourne Qualifying","seconds":"3992","time":"2015-04-23T19:41:13-0400"},{"year":"2002","round":"01","title":"Australia","seconds":"6979","time":"2015-04-23T20:47:45-0400"},{"year":"1984","round":"12","title":"Austria Race","seconds":"1977","time":"2015-04-23T22:44:04-0400"},{"year":"1988","round":"15","title":"Japan Race","seconds":"7288","time":"2015-04-23T23:17:01-0400"},{"year":"2004","round":"06","title":"Monaco Qualifying","seconds":"2720","time":"2015-04-24T01:18:29-0400"},{"year":"2004","round":"06","title":"Monaco 1","seconds":"4496","time":"2015-04-24T02:03:49-0400"},{"year":"2004","round":"06","title":"Monaco 2","seconds":"4668","time":"2015-04-24T03:18:45-0400"},{"year":"1984","round":"1","title":"USA Race","seconds":"2040","time":"2015-04-24T04:36:33-0400"},{"year":"2001","round":"01","title":"Australian race Melbourne","seconds":"7658","time":"2015-04-24T05:10:33-0400"},{"year":"1981","round":"09","title":"Great Britain Race","seconds":"7020","time":"2015-04-24T07:18:11-0400"},{"year":"1991","round":"16","title":"Australia Race","seconds":"2291","time":"2015-04-24T09:15:11-0400"},{"year":"1991","round":"16","title":"Australia Race 2","seconds":"5729","time":"2015-04-24T09:53:22-0400"},{"year":"1993","round":"03","title":"Europe Race 1","seconds":"3926","time":"2015-04-24T11:28:51-0400"},{"year":"1993","round":"03","title":"Europe Race 2","seconds":"5870","time":"2015-04-24T12:34:17-0400"},{"year":"1982","round":"11","title":"France Race","seconds":"6334","time":"2015-04-24T14:12:07-0400"},{"year":"1996","round":"01","title":"Australia Qualifying","seconds":"2771","time":"2015-04-24T15:57:41-0400"},{"year":"1996","round":"01","title":"Australia Sunday Warmup","seconds":"1873","time":"2015-04-24T16:43:52-0400"},{"year":"1996","round":"01","title":"Australia Melbourne race","seconds":"8223","time":"2015-04-24T17:15:05-0400"},{"year":"1981","round":"","title":"NC South Africa Race","seconds":"3622","time":"2015-04-24T19:32:08-0400"},{"year":"2009","round":"01","title":"Australia Qualifying","seconds":"8134","time":"2015-04-24T20:32:30-0400"},{"year":"2009","round":"01","title":"Australia Race","seconds":"10821","time":"2015-04-24T22:48:04-0400"},{"year":"1990","round":"16","title":"Australia Race","seconds":"2041","time":"2015-04-25T01:48:25-0400"}]);
        }

        function getRaceInfo() {

        }

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
