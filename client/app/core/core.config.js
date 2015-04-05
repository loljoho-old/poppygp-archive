(function() {
    'use strict';

    angular
        .module('pgp.core')
        .config(ThemeConfig)
        .run(IconFetch)
        .value('config', config);


    var config = {
        title: 'Page Title'   
    };
    
    /**
     * Configuration for Angular Material
     *
     * @param   $mdThemingProvider
     * @param   $mdIconProvider
     */
    function ThemeConfig($mdThemingProvider, $mdIconProvider) {
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

        $mdIconProvider
            .defaultIconSet('./bower_components/ionicons/fonts/ionicons.svg');
    }

    function IconFetch($http, $templateCache) {
        var baseUrl = './bower_components/ionicons/';
        var fontUrl = 'fonts/ionicons.svg';
        var iconUrl = 'src/';
        var icons = [
            iconUrl + 'ion-android-expand.svg',
            iconUrl + 'ion-android-open.svg',
            iconUrl + 'ion-android-more-horizontal.svg',
            iconUrl + 'ion-android-more-vertical.svg'];
        var urls = [fontUrl];
        urls.concat(icons);
        angular.forEach(urls, function(url) {
            $http.get(baseUrl + url, {cache: $templateCache});
        });
    }
        
})();