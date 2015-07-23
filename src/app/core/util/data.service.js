(function() {
  'use strict';
  
  angular.module('poppyGP.core')
    .factory('dataservice', dataservice);

  /* @ngInject */
  function dataservice($resource) {
    var service = {
      getXspf     : getXspf
    };
    return service;

    function getXspf() {
      return $resource('./api/playlist.xspf');
    }
  }

})();