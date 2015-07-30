(function() {
  'use strict';

  angular.module('poppyGP.core')
    .config(httpConfig)
    .config(mdIconConfig)
    .config(mdThemeConfig)
    .run(runBlock);


  function httpConfig($httpProvider) {
    $httpProvider.interceptors.push('xmlHttpInterceptor');
  }


  function mdIconConfig($mdIconProvider) {
    $mdIconProvider
      .icon('close',            './assets/svg/material/ic_close_white_24px.svg')
      .icon('arrow-left',       './assets/svg/material/ic_arrow_back_white_24px.svg')
      .icon('arrow-right',      './assets/svg/material/ic_arrow_forward_white_24px.svg')
      .icon('menu-bars',        './assets/svg/material/ic_menu_white_24px.svg')
      .icon('chevron-up',       './assets/svg/material/ic_expand_less_black_24px.svg')
      .icon('chevron-down',     './assets/svg/material/ic_expand_more_black_24px.svg')
      .icon('fullscreen',       './assets/svg/material/ic_fullscreen_black_24px.svg')
      .icon('fullscreen-exit',  './assets/svg/material/ic_fullscreen_exit_black_24px.svg')
      .icon('more-vert',        './assets/svg/material/ic_more_vert_black_24px.svg')
      .icon('more-horiz',       './assets/svg/material/ic_more_horiz_black_24px.svg');
  }


  function mdThemeConfig($mdThemingProvider) {

    var gpGreyMap = $mdThemingProvider
      .extendPalette('grey', {
        '300' : 'e5e5e5',
        '500' : '333333',
        '800' : '424242',
        'A100': 'd3d3d3',
        'contrastDefaultColor'  : 'light',
        'contrastDarkColors'    : ['300', 'A100']
      });

    var gpRedMap = $mdThemingProvider
      .extendPalette('red', {
        '300' : 'ff2e2e',
        '500' : 'e90000',
        '800' : '910000',
        'A100': 'ff5a5a',
        'contrastDefaultColor'  : 'light',
        'contrastDarkColors'    : ['300', 'A100']
      });

    var gpOrangeMap = $mdThemingProvider
      .extendPalette('orange', {
        '300' : 'feb360',
        '500' : 'e89538',
        '800' : '9f5605',
        'A100': 'ffc889',
        'contrastDefaultColor' : 'light',
        'contrastDarkColors'   : ['300', 'A100']
      });

    $mdThemingProvider
      .definePalette('gpGrey',    gpGreyMap)
      .definePalette('gpRed',     gpRedMap)
      .definePalette('gpOrange',  gpOrangeMap);

    $mdThemingProvider.theme('default')
      .primaryPalette('gpGrey')
      .accentPalette('gpRed')
      .warnPalette('gpOrange');
  }



  function runBlock($log) {
    $log.info('runBlock() complete');
  }




})();
