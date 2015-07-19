(function() {
  'use strict';

  angular
    .module('poppyGP.playlist')
    .factory('ergastService', ergastService);

  /* @ngInject */
  function ergastService($http, $log, $q) {
    var urlBase = 'http://ergast.com/api/f1/';

    var service = {
      getInfo:  getInfo
    };

    return service;

    function getInfo(year, round) {
      return $http.get(urlBase + '/' + year + '/' + round + 'races.json')
        .then(function(response) {
          return response.data;
        }, function(errorMsg) {
          $log.error('XHR Failed for getInfo.\n' + angular.toJson(errorMsg.data, true));
          return errorMsg;
        });
    }
  }

})();