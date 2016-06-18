'use strict';

angular.module('imperialAssaultApp')
  .config(function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.when('/campaign/', '/my-campaigns');
    $stateProvider
      .state('campaign', {
        url: '/campaign/:id',
        template: '<campaign></campaign>',
        authenticate: true,
        params: {
            campaign: null
        }
      });
  });
