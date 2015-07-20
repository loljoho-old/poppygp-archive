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
        .icon('close',          './assets/icons/ic_close_white_24px.svg')
        .icon('arrow-left',     './assets/icons/ic_arrow_back_white_24px.svg')
        .icon('arrow-right',    './assets/icons/ic_arrow_forward_white_24px.svg');
        //.icon('more-h',         './assets/icons/more-h.svg')
        //.icon('more-v',         './assets/icons/more-v.svg')
        //.icon('webchat',        './assets/icons/webchat.svg')
        //.icon('grid',           './assets/icons/grid.svg')
        //.icon('navbar',         './assets/icons/navbar-icon.svg')
        //.icon('chevron-left',   './assets/icons/chevron-left.svg')
        //.icon('chevron-right',  './assets/icons/chevron-right.svg')
        //.icon('arrow-left',     './assets/icons/arrow-left.svg')
        //.icon('arrow-right',    './assets/icons/arrow-right.svg')
        //.icon('donate',         './assets/icons/donate.svg'); 
    }


})();