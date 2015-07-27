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
        .icon('close',          './assets/svg/ic_close_white_24px.svg')
        .icon('arrow-left',     './assets/svg/ic_arrow_back_white_24px.svg')
        .icon('arrow-right',    './assets/svg/ic_arrow_forward_white_24px.svg');
        //.icon('more-h',         './assets/svg/more-h.svg')
        //.icon('more-v',         './assets/svg/more-v.svg')
        //.icon('webchat',        './assets/svg/webchat.svg')
        //.icon('grid',           './assets/svg/grid.svg')
        //.icon('navbar',         './assets/svg/navbar-icon.svg')
        //.icon('chevron-left',   './assets/svg/chevron-left.svg')
        //.icon('chevron-right',  './assets/svg/chevron-right.svg')
        //.icon('arrow-left',     './assets/svg/arrow-left.svg')
        //.icon('arrow-right',    './assets/svg/arrow-right.svg')
        //.icon('donate',         './assets/svg/donate.svg'); 
    }


})();