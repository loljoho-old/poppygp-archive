(function() {
    'use strict';

    var core = angular.module('gpApp.core');
    core.config(ThemeConfig)
        .config(IconConfig)
        .constant('angularMomentConfig', angularMomentConfig);

    var config = {
        title: 'Page Title'   
    };
    core.value('config', config);

    /**
     * Configuration for Angular Moment
     */
    var angularMomentConfig = {
        //timezone:   'Europe/London'
    };
    
    /**
     * Configuration for Angular Material
     *
     * @param   $mdThemingProvider
     * @param   $mdIconProvider
     */
    function ThemeConfig($mdThemingProvider) {
        $mdThemingProvider.definePalette('gpqueryPalette', {
            '50':   '2a2a2a',
            '100':  '2a2a2a',
            '200':  'e5e5e5',
            '300':  'e5e5e5',
            '400':  '333333',
            '500':  '333333',
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
            .accentPalette('orange')
            // Shades: 500, 300, 800, A100
            .warnPalette('red');
    }

    function IconConfig($mdIconProvider) {
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