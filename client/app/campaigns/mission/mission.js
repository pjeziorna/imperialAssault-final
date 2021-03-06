'use strict';

angular.module('imperialAssaultApp')
  .config(function ($urlRouterProvider, $stateProvider) {
      $urlRouterProvider.when('/mission/', '/my-campaigns');
    $stateProvider
      .state('mission', {
        url: '/mission/:campaignId/:id',
        template: '<mission></mission>',
        authenticate: true,
        params: {
            mission: null,
            campaignId: null
        }
      });
  });
