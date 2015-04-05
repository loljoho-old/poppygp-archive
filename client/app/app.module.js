(function() {
    'use strict';

    /**
     * Main Module File
     *
     * @module  cvApp.core
     * @module  cvApp.layout
     * @module  cvApp.resume
     */
    angular
        .module('cvApp', [

            // Core Modules
            'cvApp.core', 'cvApp.layout',
        //,   'cvApp.widgets'

            // Feature Area Modules
        //,   'cvApp.resume'
              'cvApp.playlist'
        ]);
})();