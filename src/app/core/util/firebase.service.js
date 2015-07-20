(function() {
  'use strict';
  
  angular.module('poppyGP.core')
    .service('Ref', ['FBURL', Firebase])
    .factory('firebaseService', firebaseService);

  /* @ngInject */
  function firebaseService(Ref, $firebaseArray) {
    return $firebaseArray(Ref);
  }

})();