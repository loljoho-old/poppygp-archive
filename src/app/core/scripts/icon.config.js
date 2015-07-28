(function() {
  'use strict';

  /** 
   * @ngdoc config
   * @name iconConfig
   * @module poppyGP.core
   * @description
   * Configure ngMaterial icons
   *
   */  
  angular
    .module('poppyGP.core')
    .config(iconConfig);

    /* @ngInject */
    function iconConfig($mdIconProvider) {
      // Icons
      // ------------------------------


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


})();