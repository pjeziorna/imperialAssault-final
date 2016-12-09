'use strict';

angular.module('imperialAssaultApp.popups')
  .directive('popup', () => {
      return {
          templateUrl: 'components/popups/popup.html',
          restrict: 'E',
          controller: 'PopupController',
          controllerAs: 'popupCtrl'
      };
  });
