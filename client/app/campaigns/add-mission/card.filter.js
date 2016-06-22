'use strict';

angular.module('imperialAssaultApp')
    .filter('missionsAvailable', function() {
        return function(items, missionsInCampaign) {
            return _.differenceBy(items, missionsInCampaign, '_id');
        }
    })

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
    })

    .filter('empireClassSet', function() {
        return function(items, empireClassSetName) {
            let filtered = [];
            angular.forEach(items, function(item) {
                if(item.classSet.indexOf(empireClassSetName) != -1) {
                    filtered.push(item);
                }
            });
            return filtered;
        }
    });
