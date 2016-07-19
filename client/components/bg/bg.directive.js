'use strict';

angular.module('imperialAssaultApp')
.directive('bgImg', function ($compile) {
    return {
        restrict: 'E',
        link: function (scope, element, attrs) {
            var rand = Math.floor(Math.random() * 4) + 1;
            var img = attrs.img || 'bg-' + rand + '.jpg';
            var template = '<div class="bg-alt"><img src="../assets/images/bg/'+img+'"/></div>';
            console.log('bg-img', template, img);
            element.replaceWith($compile(template)(scope));
        }
    };
});
