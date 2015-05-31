(function() {
'use strict';

/**
 * @ngdoc     factory
 * @name      pathService
 * @module    poppyGP.core
 * @requires  ngResource
 * @desc      Retrieves URL strings for iframe embedded elements
 */
angular.module('poppyGP.core')
  .factory('embedService', embedService);

  /* @ngInject */
  function embedService($resource) {
    var url = 'assets/data/paths.json';
    var params = {};
    var actions = {};
    return $resource(url, params, actions);
  }

}();