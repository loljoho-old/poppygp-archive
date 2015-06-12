(function() {
'use strict';

  var core = angular.module('poppyGP.core');

  /**
   * @ngdoc     config
   * @name      routeConfig
   * @module    poppyGP.core
   * @requires  ui.router
   * @desc      Configuration for base routes
   * @link      https://github.com/johnpapa/angular-styleguide#style-y270
   */
  core.config(routeConfig);

  /* @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/core/view.html',
        controller: 'ViewCtrl',
        controllerAs: 'vm'
      })
      .state('cinema', {
        url: '/',
        templateUrl: 'app/core/cinema.html',
        controller: 'Cinema',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');

  }

  var config = {
    appErrorPrefix: '[NG-Modular Error] ', //Configure the exceptionHandler decorator
    appTitle: 'Angular Modular Demo',
    version: '1.0.0'
  };

  core.value('config', config);

})();