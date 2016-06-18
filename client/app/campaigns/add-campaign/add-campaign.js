'use strict';

angular.module('imperialAssaultApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('add-campaign', {
        url: '/add-campaign',
        template: '<add-campaign></add-campaign>'
      });
  });
