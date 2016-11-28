'use strict';

angular.module('imperialAssaultApp')
    .config(($mdThemingProvider, $mdDateLocaleProvider) => {
        $mdThemingProvider.definePalette('imperialAssaultPalette', {
            '50': 'ffebee',
            '100': 'ffcdd2',
            '200': 'ef9a9a',
            '300': '796f53',
            '400': '343025',
            '500': 'ffc000', // selected
            '600': 'ffcd35', // focus
            '700': 'd32f2f',
            '800': 'c62828',
            '900': 'b71c1c',
            'A100': 'ff8a80',
            'A200': 'ff5252',
            'A400': 'ff1744',
            'A700': 'd50000',
            'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                                // on this palette should be dark or light
            'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
             '200', '300', '400', 'A100'],
            'contrastLightColors': undefined    // could also specify this if default was 'dark'
        });
        $mdThemingProvider.theme('imperial')
            .primaryPalette('imperialAssaultPalette')
            .dark();
        $mdThemingProvider.setDefaultTheme('imperial');

        $mdDateLocaleProvider.formatDate = (date) => {
            return date ? moment(date).format('DD.MM.YYYY') : '';
        };
    });
