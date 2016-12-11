'use strict';

angular.module('imperialAssaultApp.admin')
.config(function($stateProvider) {
    $stateProvider.state('admin', {
        abstract: true,
        url: '/admin',
        authenticate: 'admin',
        views: {
            '' : {
                templateUrl: 'app/admin/admin.html',
                controller: 'AdminController',
                controllerAs: 'admin'
            }
        }
    })
    .state('admin.subviews', {
        url: '',
        views: {
            'rebelion' : {
                templateUrl: 'app/admin/rebelion/admin.rebelion.html',
                controller: 'AdminRebelionController',
                controllerAs: 'rebelion'
            },
            'empire' : {
                templateUrl: 'app/admin/empire/admin.empire.html',
                controller: 'AdminEmpireController',
                controllerAs: 'empire'
            },
        }
    });
});
