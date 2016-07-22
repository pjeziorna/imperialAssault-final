'use strict';
(function(){

    class AddCampaignComponent {
        constructor($http, $q, messagesNotify, Auth) {
            this.$http = $http;
            this.$q = $q;
            this.currentUser = Auth.getCurrentUser();
            this.campaign = this._getEmptyCampaignModel();
            this.messagesNotify = messagesNotify;
            this.message = messagesNotify.getMessage();
            this.empireClassCards = [];
            this.empireAgendaCards = [];
            this.users = [];
            this.empireSearchText = null;
            this.rebelSearchText = null;
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


        submitCampaign(scope) {
            if(!scope.addCampaignForm.$valid) {
                this.messagesNotify.showMessageWithTimeout('Form filled with errors.', 5);
                return;
            }
            this.$http.post('/api/campaigns/', this.campaign)
                .then(response => {
                    this.messagesNotify.showMessageWithTimeout('New campaign has been added.', 5);
                    this.clearForm();
                });
        }

        filterUsers(query) {
            return query ? this._getUsersFiltered(query) : this.users;
        }

        _getUsersFiltered(query) {
            let deffered = this.$q.defer();
            this.$http.get(`/api/users/query/${query}`)
                .then(response => {
                    deffered.resolve(response.data);
                });
            return deffered.promise;
        }

        _createFilterFor(query) {
            let lowerQuery = angular.lowercase(query);
            return function filterFn(user) {
                return (user.email.indexOf(lowerQuery) > -1);
            }
        }

        _getEmptyCampaignModel() {
            return {
                name: '',
                owner: this.currentUser.email,
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
