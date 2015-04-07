(function() {
    'use strict';

    /**
     * Core Module
     */
    angular
        .module('gpApp.core', ['ngMaterial', 'ngSanitize'])
        .factory('Coreservice', Coreservice)
        .config(mdIconConfig);

    /**
     * Icon Config
     */
    mdIconConfig.$inject = ['$mdIconProvider'];
    function mdIconConfig($mdIconProvider)  {
        $mdIconProvider
            .icon('more-h',         'client/assets/icons/more-h.svg')
            .icon('more-v',         'client/assets/icons/more-v.svg')
            .icon('webchat',        'client/assets/icons/webchat.svg')
            .icon('grid',           'client/assets/icons/grid.svg')
            .icon('navbar',         'client/assets/icons/navbar-icon.svg')
            .icon('chevron-left',   'client/assets/icons/chevron-left.svg')
            .icon('chevron-right',  'client/assets/icons/chevron-right.svg')
            .icon('arrow-left',     'client/assets/icons/arrow-left.svg')
            .icon('arrow-right',    'client/assets/icons/arrow-right.svg');
    }

    /**
     * Core Dataservice
     */
    Coreservice.$inject = ['$resource', '$log', '$q'];
    function Coreservice($resource, $log, $q) {
        var service = {
            getItems    :   getItems
        };
        return service;
    }

})();