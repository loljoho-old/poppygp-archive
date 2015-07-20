(function() {
  'use strict';
  
  angular.module('poppyGP.core')
    .factory('dataservice', dataservice);

  /* @ngInject */
  function dataservice($resource) {
    var service = {
      schedule    : getSchedule,
      current     : getCurrent,
      getPrevious : getPrevious
    };
    return service;

    function getSchedule() {
      return $resource('./data/playlist/').get().$promise.then(function(response) {
        return response;
      }, function(errorMsg) {
        return errorMsg;
      });
    }
    function getCurrent() {
      return $resource('./data/playlist/').get().$promise.then(function(response) {
        return response[0];
      }, function(errorMsg) {
        return errorMsg;
      });
    }
    function getPrevious() {
      return $resource('./data/playlist/').get().$promise.then(function(response) {
        return response[-1];
      }, function(errorMsg) {
        return errorMsg;
      });
    }
  }

})();