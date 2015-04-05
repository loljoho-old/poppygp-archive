(function() {
    'use strict';

    angular.module('pgp.core')
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

/*
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

})();

    **
     * Application Core Data Service
     *
     * Shared data service for $resource
     *
     * @param   $resource
     * @param   $log
     *
    function dataservice($resource, $log) {

        var urlDir = '../data/';
        var params = {};
        var actions = {
            'get': {method: 'GET'}
        };
        
        var service = {
            getResume : getResume,
            getBasics : getBasics
        };
        return service;

        // *********************************
        // Internal methods
        // *********************************

        function getResume() {
            var url = urlDir + 'resume.json';
            var resource = $resource(url, params, actions);
            return resource.get()
                .$promise.then(function(response) {
                    return response;
                }, function(error) {
                    return error;
                });
        }

        function getBasics() {
            var url = urlDir + 'resume.json';
            var resource = $resource(url, params, actions);
            return resource.get()
                .$promise.then(function(response) {
                    return response.basics;
                }, function(error) {
                    return error;
                });
    
        }
    }

})();*/