'use strict';

angular.module('imperialAssaultApp.auth', ['imperialAssaultApp.constants',
    'imperialAssaultApp.util', 'ngCookies', 'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
