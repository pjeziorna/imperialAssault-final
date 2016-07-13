'use strict';
(function(){

    class AddCampaignComponent {
        constructor($http, messagesNotify) {
            this.$http = $http;
            this.campaign = this._getEmptyCampaignModel();
            this.messagesNotify = messagesNotify;
            this.message = messagesNotify.getMessage();
            this.empireClassCards = [];
            this.empireAgendaCards = [];
            this.users = [];
            this.empireSearchText = null;
            this.heroes = [];
        }

        $onInit() {
            this.$http.get('/api/empire-class-cards')
                .then(response => {
                    this.empireClassCards = response.data;
                });

            this.$http.get('/api/agenda-cards')
                .then(response => {
                    this.empireAgendaCards = response.data;
                });

            this.$http.get('/api/users/all')
                .then(response => {
                    this.users = response.data;
                });
            this.$http.get('/api/hero-cards')
                .then(response => {
                    this.heroes = response.data;
                });
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
            this.$http.post('/api/campaigns/', this.campaign)
                .then(response => {
                    this.messagesNotify.showMessageWithTimeout('New campaign has been added.', 5);
                    this.clearForm();
                });
        }

        _getEmptyCampaignModel() {
            return {
                name: '',
                owner: '',
                active: true,
                empire: {
                    player: ''
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
