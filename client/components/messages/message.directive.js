'use strict';

angular.module('imperialAssaultApp.messages')
  .directive('messageNotification', () => {
      return {
          templateUrl: 'components/messages/message.html',
          restrict: 'E',
          controller: 'MessageController',
          controllerAs: 'ctrl'
      };
  });
