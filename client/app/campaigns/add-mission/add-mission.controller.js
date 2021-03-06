'use strict';
(function(){

    class AddMissionComponent {
        constructor($stateParams, $http, $scope, MessagesService, Auth) {
            this.$stateParams = $stateParams;
            this.$http = $http;
            this.messagesService = MessagesService;
            this.currentUser = Auth.getCurrentUser();

            this.campaignId = this.$stateParams.id;
            this.maxDatePlay = new Date();
            this.missionCard = null;
            this.missionCards = [];
            this.itemCards = [];
            this.heroCards = [];
            this.empireClassCards = [];
            this.agendaCards = [];
            this.allyCards = [];

            if (this.$stateParams.campaign === null) {
                this.$http.get('/api/campaigns/' + this.currentUser.email + '/' + this.campaignId)
                .then(response => {
                    this.campaign = response.data;
                    this.mission = this._getEmptyMissionModel();
                    this._subscribeWatchers($scope);
                });
            } else {
                this.campaign = this.$stateParams.campaign;
                this.mission = this._getEmptyMissionModel();
                this._subscribeWatchers($scope);
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

            this.$http.get('/api/ally-cards')
            .then(response => {
                this.allyCards = response.data;
            });
        }

        submitMission(scope) {
            this.messagesService.removeAllMessages();
            if(!scope.addMissionForm.$valid) {
                this.messagesService.addMessage('Form filled with errors.', 'error');
                return;
            }
            this.mission = this._fillMissionFieldsFromMissionCardModel();
            this.campaign.missions.push(this.mission);

            this.$http.put('/api/campaigns/' + this.campaign._id, this.campaign)
                .then(() => {
                    this.messagesService.addMessage('New mission has been added.', 'success');
                    this.clearForm(scope);
                });
        }

        clearForm(scope) {
            this.mission = this._getEmptyMissionModel();
            this.messagesService.removeAllMessages();
            scope.addMissionForm.$setPristine();
            scope.addMissionForm.$setUntouched();
        }

        _subscribeWatchers($scope) {
            $scope.$watch(() => {
                return this.mission.rebelion.itemsSold;
            }, (newVal) => {
                this.mission.rebelion.itemsPossessed = _.difference(this.mission.rebelion.itemsPossessed, newVal);
            });

            $scope.$watch(() => {
                return this.mission._id;
            }, (newVal) => {
                this.missionCard = _.filter(this.missionCards, {'_id': newVal})[0] || null;
                if (this.mission.winner) {
                    this._updateInMissionValues();
                }
            });

            $scope.$watch(() => {
                return this.mission.winner;
            }, () => {
                if (this.mission._id) {
                    this._updateInMissionValues();
                }
            });
        }

        _updateInMissionValues() {
            switch (this.mission.winner) {
                case 'rebelion':
                    this.mission.rebelion.expInMission = this.missionCard.rebelVictoryBonus.exp + this.missionCard.additionalRewards.exp;
                    this.mission.rebelion.creditsInMission = (this.missionCard.rebelVictoryBonus.credits + this.missionCard.additionalRewards.credits) * this.mission.rebelion.players.length;
                    this.mission.empire.expInMission = this.missionCard.additionalRewards.exp;
                    this.mission.empire.influenceInMission = this.missionCard.additionalRewards.influence;
                    break;
                case 'empire':
                    this.mission.rebelion.expInMission = this.missionCard.additionalRewards.exp;
                    this.mission.rebelion.creditsInMission = this.missionCard.additionalRewards.credits * this.mission.rebelion.players.length;
                    this.mission.empire.expInMission = this.missionCard.empireVictoryBonus.exp + this.missionCard.additionalRewards.exp;
                    this.mission.empire.influenceInMission = this.missionCard.empireVictoryBonus.influence + this.missionCard.additionalRewards.influence;
                    break;
            }
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
                    influence: this._getEmpireInfluenceFromLastMission(),
                    influenceInMission: null,
                    expInMission: null,
                    exp: this._getEmpireExpFromLastMission(),
                    classCards: this._getEmpireClassCardsPossessed(),
                    allies: this._getEmpireAlliesFromLastMission()
                },
                rebelion: {
                    creditsInMission: null,
                    credits: this._getRebelionCreditsFromLastMission(),
                    expInMission: null,
                    allies: this._getRebelionAlliesFromLastMission(),
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

        _getRebelionAlliesFromLastMission() {
            if(!this.campaign.missions.length) {
                return [];
            }
            return this.campaign.missions[this.campaign.missions.length - 1].rebelion.allies;
        }

        _getRebelionCreditsFromLastMission() {
            if(!this.campaign.missions.length) {
                return null;
            }
            return this.campaign.missions[this.campaign.missions.length - 1].rebelion.credits;
        }

        _getEmpireExpFromLastMission() {
            if(!this.campaign.missions.length) {
                return null;
            }
            return this.campaign.missions[this.campaign.missions.length - 1].empire.exp;
        }

        _getEmpireInfluenceFromLastMission() {
            if(!this.campaign.missions.length) {
                return null;
            }
            return this.campaign.missions[this.campaign.missions.length - 1].empire.influence;
        }

        _getEmpireAlliesFromLastMission() {
            if(!this.campaign.missions.length) {
                return [];
            }
            return this.campaign.missions[this.campaign.missions.length - 1].empire.allies;
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
