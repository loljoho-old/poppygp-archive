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
  function coreConfig() {
    
  }


  core.run(runBlock);

  function runBlock($log) {
    $log.info('runBlock() complete');
  }


  // http://stackoverflow.com/questions/27367289/firebase-3-way-data-binding-with-controlleras-syntax/27368048#27368048

  // FireBase URL Constant
  core.constant('FBURL', 'https://sweltering-inferno-4582.firebaseio.com/');



})();