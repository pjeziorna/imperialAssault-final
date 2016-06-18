'use strict';
(function(){

    class AddCampaignComponent {
        constructor($http) {
            this.$http = $http;
            this.campaign = this._getEmptyCampaignModel();
        }

        addRebelPlayer() {
            this.campaign.rebelion.push({
                player: '',
                hero: ''
            });
        }

        removeRebelPlayer() {
            this.campaign.rebelion.pop();
        }

        clearForm() {
            this.campaign = this._getEmptyCampaignModel();
        }

        submitCampaign() {
            this.$http.post('/api/campaigns/', this.campaign);
        }

        _getEmptyCampaignModel() {
            return {
                name: '',
                owner: '',
                active: true,
                startDate: Date.now(),
                endDate: -1,
                empire: {
                    player: '',
                    hero: ''
                },
                rebelion: [{
                    player: '',
                    hero: ''
                }],
                missions: []
            };
        }
    }

    angular.module('imperialAssaultApp')
    .component('addCampaign', {
        templateUrl: 'app/campaigns/add-campaign/add-campaign.html',
        controller: AddCampaignComponent
    });

})();
