'use strict';

angular.module('imperialAssaultApp')
    /**
     * Filter chooses those missions which wasn't played
     */
    .filter('emptyField', function() {
        return function(item) {
            if(_.isUndefined(item) || !item.length) {
                return '-';
            }
            return item;
        }
    })
