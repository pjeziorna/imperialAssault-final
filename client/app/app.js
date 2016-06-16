'use strict';

angular.module('imperialAssaultApp', ['imperialAssaultApp.auth', 'imperialAssaultApp.admin',
    'imperialAssaultApp.constants', 'ngCookies', 'ngResource', 'ngSanitize', 'btford.socket-io',
    'ui.router', 'validation.match'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
