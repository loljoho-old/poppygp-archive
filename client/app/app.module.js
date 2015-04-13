(function() {
    'use strict';

    /**
     * Main Module File
     */
    angular
        .module('gpApp', [

            // Core Modules
            'gpApp.core', 'gpApp.layout',

            // Feature Area Modules
            'gpApp.playlist'
        ]);
})();