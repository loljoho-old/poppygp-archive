(function() {
  'use strict';

  /** 
   * @ngdoc module
   * @name poppyGP.core
   * @description
   * Core module registers universal modules for app use.
   *
   */  
  angular
    .module('poppyGP.core', [

      // AngularJS Modules
      // ------------------------------
      'ngAnimate', 
      'ngAria', 
      'ngMaterial',
      'ngResource', 
      'ngSanitize',
      //'ngRoute',
    
      // Third Party & Cross-App Modules
      // ------------------------------
      'foundation.core',
      'foundation.common',
      'xml'
      
    ]); 

})();