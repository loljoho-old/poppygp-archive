(function() {
  'use strict';

  /** 
   * @ngdoc module
   * @name poppyGP
   * @description
   * Base module configures all submodules
   *
   */  
  angular
    .module('poppyGP', [


      // Core Modules
      // ------------------------------

      'poppyGP.core',


      // Feature Area Modules
      // ------------------------------

      //'poppyGP.playlist',
      'poppyGP.sidebar',

    ]);

})();