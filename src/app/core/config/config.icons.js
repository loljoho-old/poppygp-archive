(function() {
'use strict';

  var core = angular.module('poppyGP.core');


  /*
   * @ngdoc     run
   * @name      iconRun
   * @module    poppyGP.core
   * @requires  $http, $templateCache
   * @desc      Pre-fetches and caches icon sources by URL
   */
  core.run(iconRun);

  /* @ngInject */
  function iconRun($http, $templateCache) {

  }

  /*
   * @ngdoc     config
   * @name      iconsConfig
   * @module    poppyGP.core
   * @requires  ngMaterial
   * @desc      Configuration for $mdIcon and $mdIconProvider
   */
  //core.config(iconsConfig);

  /* @ngInject */
  //function iconsConfig($mdIconProvider, $mdIcon) {
     
  //}

})();