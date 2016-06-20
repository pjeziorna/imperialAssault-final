'use strict';

angular.module('imperialAssaultApp')
    .filter('sideMissions', function() {
        return function(items) {
            let filtered = [];
            angular.forEach(items, function(item) {
                if(item.missionType.indexOf('Story') === -1 || item.missionType.indexOf('Finale') === -1) {
                    filtered.push(item);
                }
            });
            return filtered;
        }
    })

    .filter('storyMissions', function() {
        return function(items) {
            let filtered = [];
            angular.forEach(items, function(item) {
                if(item.missionType.indexOf('Story') != -1 || item.missionType.indexOf('Finale') != -1) {
                    filtered.push(item);
                }
            });
            return filtered;
        }
    })

    .filter('heroClassCards', function() {
        return function(items, heroName) {
            let filtered = [];
            angular.forEach(items, function(item) {
                if(item.name.indexOf(heroName) != -1) {
                    filtered.push(item);
                    return filtered;
                }
            });
            return filtered;
        }
    });
