(function() {
    'use strict';

    angular.module('ergast')
        .factory('Race', Race);

    /**
     * Data Service for queries by Race
     *
     * Requests Ergast API for response data to queries filtered with season/round:
     * Qualifying, Results, Standings...
     *
     * Usage:
     * ```
     * // Configure `data` object parameter
     * var data = { season: 2012, round: 1, query: 'results', limit: 10 };
     * 
     * // Call `Race` service to send `GET` request to URL:
     * //   http://ergast.com/api/f1/2012/1/results.json?limit=10&offset=0
     * var results = Race.results(data);
     * ```
     */
    Race.$inject = ['$resource', '$log', '$q'];
    function Race($resource, $log, $q) {
        
        // Parameterised URL to which requests are sent
        var url = 'http://ergast.com/api/:series/:season/:round/:query.json';

        // Default values for `url` parameters, can be overriden in `actions`
        var paramDefaults = {
            series: 'f1',
            season: '@season',
            round:  '@round',
            query:  '@query',
            limit:  '30',           // api default: 30
            offset: '0'             // api default: 0
        };

        /**
         * Configure Custom Action Declarations
         *
         */
        var actions = {

            // Race.results(data)
            results: { 
                method:     'GET',
                isArray:    true,
                cache:      true,
                timeout:    1000,     // {number|Promise}
                interceptor: {
                    response: function(response) {
                        $log.info('Resource responded successfully: ' + response);
                        return response.MRData;
                    }
                    responseError: function(errorMsg) {
                        $log.warn('Resource responded with error: ' + errorMsg);
                        return errorMsg;
                    }
                }
            }

        };
        
        return $resource(url, paramDefaults, actions);
        

})();