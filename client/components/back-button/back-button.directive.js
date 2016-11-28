'use strict';

angular.module('imperialAssaultApp')
.directive('backButton', function ($window, $timeout) {
    return {
        restrict: 'A',
        link: function (scope, element) {
            element.bind('click', () => {
                $window.history.back();
                $timeout(function () {
                    $window.scrollTo(0, 0);
                }, 100);
            });
        }
    };
});
