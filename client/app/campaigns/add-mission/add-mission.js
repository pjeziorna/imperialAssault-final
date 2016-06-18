'use strict';

angular.module('imperialAssaultApp')
  .config(function ($urlRouterProvider, $stateProvider) {
      $urlRouterProvider.when('/add-mission/', '/my-campaigns');
    $stateProvider
      .state('add-mission', {
        url: '/add-mission/:id',
        template: '<add-mission></add-mission>',
        authenticate: true,
        params: {
            campaign: null
        }
      });
  });
