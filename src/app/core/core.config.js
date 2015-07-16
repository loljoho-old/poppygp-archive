(function() {
    'use strict';

    var core = angular.module('poppyGP.core');
    core
        .config(mdThemeConfig)
        .config(mdIconConfig);
    
    //
    // Configure Angular-Material Theme
    //
    function mdThemeConfig($mdThemingProvider) {

        //
        // Extend Existing Colour Themes
        //  http://paletton.com/
        //
        var gpGreyMap   = $mdThemingProvider.extendPalette('grey', {
            '300':  'e5e5e5',
            '500':  '333333',
            '800':  '424242',
            'A100': 'd3d3d3',
            'contrastDefaultColor': 'light',
            'contrastDarkColors'  : ['300', 'A100']
        });
        var gpRedMap    = $mdThemingProvider.extendPalette('red', {
            '300':  'ff2e2e',
            '500':  'e90000',
            //'800':  'bb0000',
            '800':  '910000',
            'A100': 'ff5a5a',
            'contrastDefaultColor': 'light',
            'contrastDarkColors'  : ['300', 'A100']
        });
        var gpOrangeMap = $mdThemingProvider.extendPalette('orange', {
            '300':  'feb360',
            '500':  'e89538',
            //'800':  'c87415',
            '800':  '9f5605',
            'A100': 'ffc889',
            'contrastDefaultColor': 'light',
            'contrastDarkColors'  : ['300', 'A100']
        });
//      var gpWhiteMap  = $mdThemingProvider.extendPalette('grey', {
//          'A100': ''
//      })

        //
        // Register Colour Palette Maps
        //
        $mdThemingProvider
            .definePalette('gpGrey',    gpGreyMap   )
            .definePalette('gpRed',     gpRedMap    )
            .definePalette('gpOrange',  gpOrangeMap );

        //
        // Configure Default Theme Palettes
        //
        $mdThemingProvider.theme('default')
            .primaryPalette('gpGrey')
            .accentPalette('gpRed')
            .warnPalette('gpOrange');
//          .backgroundPalette('gpWhite');
        /*
        $mdThemingProvider.definePalette('gpqueryPalette', {
            '50':   '2a2a2a',
            '100':  '2a2a2a',
            '200':  'e5e5e5',
            '300':  'e5e5e5',
            '400':  '333333',
            '500':  '333333',   // .md-default-theme
            '600':  '333333',
            '700':  '424242',
            '800':  '424242',
            '900':  '212121',
            'A100': 'e5e5e5',
            'A200': 'd3d3d3',
            'A400': 'bababa',
            'A700': '333333',
            'contrastDefaultColor': 'light'
        });
        $mdThemingProvider.theme('default')
            // Shades: 500, 300, 800, A100
            .primaryPalette('gpqueryPalette')
            // Shades: 400, 300, 800, A100
            .accentPalette('deep-purple')
            // Shades: 500, 300, 800, A100
            .warnPalette('red');
        */
    }

    function mdIconConfig($mdIconProvider) {
        $mdIconProvider
            // Navigation Icons
            .icon('more-h',         './assets/icons/more-h.svg')
            .icon('more-v',         './assets/icons/more-v.svg')
            .icon('webchat',        './assets/icons/webchat.svg')
            .icon('grid',           './assets/icons/grid.svg')
            .icon('navbar',         './assets/icons/navbar-icon.svg')

            // Arrow & Chevrons
            .icon('chevron-left',   './assets/icons/chevron-left.svg')
            .icon('chevron-right',  './assets/icons/chevron-right.svg')
            .icon('arrow-left',     './assets/icons/arrow-left.svg')
            .icon('arrow-right',    './assets/icons/arrow-right.svg')

            // Video Controls
            // Tabs Icons

            // Donation Icons
            .icon('donate',         './assets/icons/donate.svg');
    }
        
})();