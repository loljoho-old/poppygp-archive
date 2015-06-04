(function() {
'use strict';

angular.module('poppyGP.core')
  .factory('coreService', coreService);

/* @ngInject */
function coreService($resource) {

  // Default URL Template String
  // ------------------------
  var url = 'assets/data/:file.json';

  // Default URL Parameters
  // ------------------------
  var params  = { 
    file: '@file'
  };

  // Custom HTTP Actions
  // ------------------------
  var actions = {
    'ustream': {
      method: 'GET',
      url: 'assets/data/streams.json',
      isArray: false,
      cache: false
    }
  };

  // Return
  // ------------------------
  return $resource(url, params, actions);
}

})();