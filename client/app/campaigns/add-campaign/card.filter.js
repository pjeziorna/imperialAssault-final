'use strict';

angular.module('imperialAssaultApp')
    .filter('empireClassSetName', function() {
        return function(items) {
            return _.uniqBy(items, 'classSet');
        };
    })

    .filter('empireAgendaSetName', function() {
        return function(items) {
            return _.uniqBy(items, 'agendaSet');
        };
    })

    .filter('agendaSet', function() {
        return function(items, agendaSets) {
            let filtered = [];
            angular.forEach(agendaSets, function(agenda) {
                filtered = _.union(filtered, _.filter(items, {'agendaSet': agenda}));
            });
            return filtered;
        };
    });
