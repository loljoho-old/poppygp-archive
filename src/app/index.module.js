(function() {
    'use strict';

    /**
     * Main Module File
     */
    angular
        .module('poppyGP', [

            // Core Modules
            'poppyGP.core', 'poppyGP.layout',

            // Feature Area Modules
            'poppyGP.playlist', 'poppyGP.content'
        ]);
})();