(function() {
  'use strict';

  /** 
   * @ngdoc config
   * @name themeConfig
   * @module poppyGP.core
   * @description
   * Configure ngMaterial themes
   *
   */  
  angular
    .module('poppyGP.core')
    .config(themeConfig);

  /* @ngInject */
  function themeConfig($mdThemingProvider) {
    var gpGreyMap   = $mdThemingProvider.extendPalette('grey', {
      '300' : 'e5e5e5', '500' :  '333333',
      '800' : '424242', 'A100': 'd3d3d3',
      'contrastDefaultColor'  : 'light',
      'contrastDarkColors'    : ['300', 'A100']
    });

    var gpRedMap    = $mdThemingProvider.extendPalette('red', {
      '300' : 'ff2e2e', '500' : 'e90000',
      '800' : '910000', 'A100': 'ff5a5a',
      'contrastDefaultColor'  : 'light',
      'contrastDarkColors'    : ['300', 'A100']
    });

    var gpOrangeMap = $mdThemingProvider.extendPalette('orange', {
      '300' : 'feb360', '500' :  'e89538',
      '800' : '9f5605', 'A100': 'ffc889',
      'contrastDefaultColor' : 'light',
      'contrastDarkColors'   : ['300', 'A100']
    });

    $mdThemingProvider
      .definePalette('gpGrey', gpGreyMap)
      .definePalette('gpRed', gpRedMap)
      .definePalette('gpOrange', gpOrangeMap);
      
    $mdThemingProvider.theme('default')
      .primaryPalette('gpGrey')
      .accentPalette('gpRed')
      .warnPalette('gpOrange');

  }
    
})();