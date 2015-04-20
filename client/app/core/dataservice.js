(function() {
    'use strict';

    angular.module('gpApp.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$resource', '$log', '$q'];
    function dataservice($resource, $log, $q) {
        
        // service raw promise to return
        var service = {
            schedule : getSchedule,
            laps     : getLaps,
            pitStops : getPitStops
        };
        return service;

        // *********************************
        // Internal methods
        // *********************************

        function getSchedule() {
            return $q.when([{"year":"2002","round":"","title":"Melbourne Qualifying","length":"3992"},{"year":"2002","round":"01","title":"Australia","length":"6979"},{"year":"1984","round":"12","title":"Austria Race","length":"1977"},{"year":"1988","round":"15","title":"Japan Race","length":"7288"},{"year":"2004","round":"06","title":"Monaco Qualifying","length":"2720"},{"year":"2004","round":"06","title":"Monaco 1","length":"4496"},{"year":"2004","round":"06","title":"Monaco 2","length":"4668"},{"year":"1984","round":"1","title":"USA Race","length":"2040"},{"year":"2001","round":"01","title":"Australian race Melbourne","length":"7658"},{"year":"1981","round":"09","title":"Great Britain Race","length":"7020"},{"year":"1991","round":"16","title":"Australia Race","length":"2291"},{"year":"1991","round":"16","title":"Australia Race 2","length":"5729"},{"year":"1993","round":"03","title":"Europe Race 1","length":"3926"},{"year":"1993","round":"03","title":"Europe Race 2","length":"5870"},{"year":"1982","round":"11","title":"France Race","length":"6334"},{"year":"1996","round":"01","title":"Australia Qualifying","length":"2771"},{"year":"1996","round":"01","title":"Australia Sunday Warmup","length":"1873"},{"year":"1996","round":"01","title":"Australia Melbourne race","length":"8223"},{"year":"1981","round":"","title":"NC South Africa Race","length":"3622"},{"year":"2009","round":"01","title":"Australia Qualifying","length":"8134"},{"year":"2009","round":"01","title":"Australia Race","length":"10821"},{"year":"1990","round":"16","title":"Australia Race","length":"2041"},{"year":"2002","round":"","title":"Melbourne Qualifying","length":"3992"},{"year":"2002","round":"01","title":"Australia","length":"6979"},{"year":"1984","round":"12","title":"Austria Race","length":"1977"},{"year":"1988","round":"15","title":"Japan Race","length":"7288"},{"year":"2004","round":"06","title":"Monaco Qualifying","length":"2720"},{"year":"2004","round":"06","title":"Monaco 1","length":"4496"},{"year":"2004","round":"06","title":"Monaco 2","length":"4668"},{"year":"1984","round":"1","title":"USA Race","length":"2040"},{"year":"2001","round":"01","title":"Australian race Melbourne","length":"7658"},{"year":"1981","round":"09","title":"Great Britain Race","length":"7020"},{"year":"1991","round":"16","title":"Australia Race","length":"2291"},{"year":"1991","round":"16","title":"Australia Race 2","length":"5729"},{"year":"1993","round":"03","title":"Europe Race 1","length":"3926"},{"year":"1993","round":"03","title":"Europe Race 2","length":"5870"},{"year":"1982","round":"11","title":"France Race","length":"6334"},{"year":"1996","round":"01","title":"Australia Qualifying","length":"2771"},{"year":"1996","round":"01","title":"Australia Sunday Warmup","length":"1873"},{"year":"1996","round":"01","title":"Australia Melbourne race","length":"8223"},{"year":"1981","round":"","title":"NC South Africa Race","length":"3622"},{"year":"2009","round":"01","title":"Australia Qualifying","length":"8134"},{"year":"2009","round":"01","title":"Australia Race","length":"10821"},{"year":"1990","round":"16","title":"Australia Race","length":"2041"}]);
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
