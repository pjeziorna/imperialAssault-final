'use strict';

angular.module('imperialAssaultApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('my-campaigns', {
        url: '/my-campaigns',
        template: '<my-campaigns></my-campaigns>',
        authenticate: true
      });
  });
