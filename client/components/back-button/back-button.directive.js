'use strict';

angular.module('imperialAssaultApp')
.directive('backButton', function ($window) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.bind('click', () => {
                $window.history.back();
            });
        }
    };
});
