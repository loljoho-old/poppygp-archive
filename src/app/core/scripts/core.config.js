(function() {
  'use strict';

  /** 
   * @ngdoc config
   * @name coreConfig
   * @module poppyGP.core
   * @description
   * Core application configuration parameters
   *
   */  
  var core = angular.module('poppyGP.core');
  
  core.config(coreConfig);

  /* @ngInject */
  function coreConfig($httpProvider) {
    $httpProvider.interceptors.push('xmlHttpInterceptor');
  }


  core.run(runBlock);

  function runBlock($log) {
    $log.info('runBlock() complete');
  }




})();