(function() {
  'use strict';

  /** 
   * @ngdoc config
   * @name firebaseConfig
   * @module poppyGP.core
   * @description
   * Core application configuration parameters
   *
   */  
  var core = angular.module('poppyGP.core');

  core.config(firebaseConfig);

    /* @ngInject */
    function firebaseConfig() {
      
    }

  // http://stackoverflow.com/questions/27367289/firebase-3-way-data-binding-with-controlleras-syntax/27368048#27368048

  // FireBase URL Constant
  core.constant('FBURL', 'https://sweltering-inferno-4582.firebaseio.com/');


})();