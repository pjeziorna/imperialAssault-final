'use strict';

angular.module('imperialAssaultApp')
    /**
     * Filter chooses those missions which wasn't played
     */
    .filter('missionsAvailable', function() {
        return function(items, missionsInCampaign) {
            return _.differenceBy(items, missionsInCampaign, '_id');
        }
    })

    /**
     * Filter chooses those items which are not on soldItems list
     */
    .filter('itemsPossessed', function() {
        return function(items, itemsSold) {
            let filtered = [];
            _.forEach(itemsSold, (item) => {
                filtered.push({'_id':item});
            });
            return _.differenceBy(items, filtered, '_id');
        }
    })

    /**
     * Filter blocks those items which were sold in previous mission
     */
    .filter('blockItemsSold', function() {
        return function(items, campaignMissions) {
            if(_.isUndefined(campaignMissions) || !campaignMissions.length) {
                return items;
            }
            let soldItems = campaignMissions[campaignMissions.length - 1].rebelion.itemsSold;
            _.forEach(items, (item) => {
                if(_.includes(soldItems, item._id)) {
                    item.sold = true;
                }
            });
            return items;
        }
    })

    /**
     * Filter chooses those missions which are side missions
     */
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

    /**
     * Filter chooses those missions which are story missions
     */
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

    /**
     * Filter chooses those class cards for chosen hero
     */
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

    /**
     * Filter chooses those class cards from chosen empire class set
     */
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
