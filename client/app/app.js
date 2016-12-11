'use strict';

angular.module('imperialAssaultApp', ['imperialAssaultApp.auth', 'imperialAssaultApp.admin', 'imperialAssaultApp.constants', 'imperialAssaultApp.messages', 'imperialAssaultApp.popups', 'ngCookies', 'ngMaterial', 'ngMdIcons', 'ngMessages', 'ngResource', 'ngSanitize', 'btford.socket-io', 'ui.router', 'validation.match'
])
.config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
})
.run(function ($rootScope, $state, $window) {
    $rootScope.$on('$stateChangeStart', function (event, next, current) {
        $window.scrollTo(0,0);
        if (next.name === 'campaign' && !current.id.length ) { //!angular.isObject(current.campaign) &&
            event.preventDefault();
            $state.go('my-campaigns');
        }
    });
});
