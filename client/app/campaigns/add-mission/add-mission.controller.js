'use strict';
(function(){

    class AddMissionComponent {
        constructor($stateParams, $http, messagesNotify) {
            this.$stateParams = $stateParams;
            this.$http = $http;
            this.messagesNotify = messagesNotify;

            this.campaignId = this.$stateParams.id;
            this.message = messagesNotify.getMessage();
            this.missionCards = [];
            this.itemCards = [];
            this.heroCards = [];
            this.empireClassCards = [];
            this.agendaCards = [];

            if (this.$stateParams.campaign === null) {
                this.$http.get('/api/campaigns/' + this.campaignId)
                .then(response => {
                    this.campaign = response.data;
                    this.mission = this._getEmptyMissionModel();
                });
            } else {
                this.campaign = this.$stateParams.campaign;
                this.mission = this._getEmptyMissionModel();
            }
        }

        $onInit() {
            this.$http.get('/api/mission-cards')
            .then(response => {
                this.missionCards = response.data;
            });

            this.$http.get('/api/item-cards')
            .then(response => {
                this.itemCards = response.data;
            });

            this.$http.get('/api/hero-cards')
            .then(response => {
                this.heroCards = response.data;
            });

            this.$http.get('/api/empire-class-cards')
            .then(response => {
                this.empireClassCards = response.data;
            });

            this.$http.get('/api/agenda-cards')
            .then(response => {
                this.agendaCards = response.data;
            });
        }

        submitMission(scope) {
            console.log('submit mission', this.mission);
            if(!scope.addMissionForm.$valid) {
                return;
            }
        }

        _getEmptyMissionModel() {
            return {
                title: null,
                deckType: null,
                missionType: null,
                campaign_id: this.campaignId,
                empire: {
                    influence: null,
                    influenceInMission: null,
                    expInMission: null,
                    exp: null
                },
                rebelion: {
                    creditsInMission: null,
                    credits: null,
                    expInMission: null,
                    allys: [],
                    players: this._getPlayersFromCampaignObject(),
                    itemsSold: [],
                    itemsPossessed: []
                },
                availableSideMissions: [],
                nextStoryMission: null,
                winner: null,
                playDate: null
            };
        }

        _getPlayersFromCampaignObject() {
            return this.campaign.rebelion;
        }
    }

    angular.module('imperialAssaultApp')
    .component('addMission', {
        templateUrl: 'app/campaigns/add-mission/add-mission.html',
        controller: AddMissionComponent,
        params: {
            campaign: null
        }
    });

})();
