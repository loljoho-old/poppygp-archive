(function() {
'use strict';

angular
  .module('poppyGP.core')
  .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'app/core/core.html',
          controller: 'CoreCtrl',
          controllerAs: 'vm'
        });

      $urlRouterProvider.otherwise('/');
    });

})();