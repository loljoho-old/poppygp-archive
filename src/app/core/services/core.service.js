(function() {
'use strict';

angular.module('poppyGP.core')
  .factory('coreService', coreService);

/* @ngInject */
function coreService($resource) {

  // Default URL Template String
  // ------------------------
  var url = 'assets/data/data.json';

  // Default URL Parameters
  // ------------------------
  var params  = { 
    
  };

  // Custom HTTP Actions
  // ------------------------
  var actions = {};

  // Return
  // ------------------------
  return $resource(url, params, actions);
}

})();