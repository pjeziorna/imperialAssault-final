'use strict';
(function(){

    class AddMissionComponent {
        constructor($stateParams, $http, $scope, messagesNotify, Auth) {
            this.$stateParams = $stateParams;
            this.$http = $http;
            this.messagesNotify = messagesNotify;
            this.currentUser = Auth.getCurrentUser();

            this.campaignId = this.$stateParams.id;
            this.message = messagesNotify.getMessage();
            this.maxDatePlay = new Date();
            this.missionCards = [];
            this.itemCards = [];
            this.heroCards = [];
            this.empireClassCards = [];
            this.agendaCards = [];

            if (this.$stateParams.campaign === null) {
                this.$http.get('/api/campaigns/' + this.currentUser.email + '/' + this.campaignId)
                .then(response => {
                    this.campaign = response.data;
                    this.mission = this._getEmptyMissionModel();
                    this._subscribeWatchers($scope);
                    console.log('campaign', this.campaign);
                });
            } else {
                this.campaign = this.$stateParams.campaign;
                this.mission = this._getEmptyMissionModel();
                this._subscribeWatchers($scope);
                console.log('campaign', this.campaign);
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
            this.mission = this._fillMissionFieldsFromMissionCardModel();
            console.log('this.mission', this.mission);
            return;
            if(!scope.addMissionForm.$valid) {
                return;
            }
            this.mission = this._fillMissionFieldsFromMissionCardModel();
            this.campaign.missions.push(this.mission);

            this.$http.put('/api/campaigns/' + this.campaign._id, this.campaign)
                .then(response => {
                    this.messagesNotify.showMessageWithTimeout('New mission has been added.', 5);
                    this._clearForm();
                });
        }

        _subscribeWatchers($scope) {
            $scope.$watch(() => {
                return this.mission.rebelion.itemsSold;
            }, (newVal, oldVal) => {
                this.mission.rebelion.itemsPossessed = _.difference(this.mission.rebelion.itemsPossessed, newVal);
            });
        }

        _fillMissionFieldsFromMissionCardModel() {
            let mission = this.mission;
            let missionCard;

            missionCard = _.find(this.missionCards, {_id: mission._id});

            mission = _.assignIn(mission, {
                title: missionCard.title,
                deckType: missionCard.deckType,
                missionType: missionCard.missionType,
                empireVictoryBonus: missionCard.empireVictoryBonus,
                rebelVictoryBonus: missionCard.rebelVictoryBonus,
                additionalRewards: missionCard.additionalRewards
            });

            return mission;
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
                    exp: null,
                    classCards: this._getEmpireClassCardsPossessed()
                },
                rebelion: {
                    creditsInMission: null,
                    credits: null,
                    expInMission: null,
                    allys: [],
                    players: this._getPlayersFromCampaignObject(),
                    itemsSold: this._getRebelionItemsSoldFromLastMission(),
                    itemsPossessed: this._getRebelionItemsPossessedFromLastMission()
                },
                availableSideMissions: [],
                nextStoryMission: null,
                winner: null,
                playDate: null
            };
        }

        _getPlayersFromCampaignObject() {
            if(!this.campaign.missions.length) {
                var players = angular.copy(this.campaign.rebelion);
                _.forEach(players, function(player) {
                    player.heroClassCards = {
                        possessed: [],
                        sold: []
                    };
                    player.exp = null;
                });
                return players;
            }
            return this.campaign.missions[this.campaign.missions.length - 1].rebelion.players;
        }

        _getEmpireClassCardsPossessed() {
            if(!this.campaign.missions.length) {
                return [];
            }
            return this.campaign.missions[this.campaign.missions.length - 1].empire.classCards;
        }

        _getRebelionItemsPossessedFromLastMission() {
            if(!this.campaign.missions.length) {
                return [];
            }
            return this.campaign.missions[this.campaign.missions.length - 1].rebelion.itemsPossessed;
        }

        _getRebelionItemsSoldFromLastMission() {
            if(!this.campaign.missions.length) {
                return [];
            }
            return this.campaign.missions[this.campaign.missions.length - 1].rebelion.itemsSold;
        }

        _clearForm() {
            this.mission = {};
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
