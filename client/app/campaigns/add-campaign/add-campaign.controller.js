'use strict';
(function(){

    class AddCampaignComponent {
        constructor($http, $q, MessagesService, Auth) {
            this.$http = $http;
            this.$q = $q;
            this.currentUser = Auth.getCurrentUser();
            this.campaign = this._getEmptyCampaignModel();
            this.messagesService = MessagesService;
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

        clearForm(scope) {
            this.campaign = this._getEmptyCampaignModel();
            this.messagesService.removeAllMessages();
            scope.addCampaignForm.$setPristine();
            scope.addCampaignForm.$setUntouched();
        }


        submitCampaign(scope) {
            this.messagesService.removeAllMessages();
            if(!scope.addCampaignForm.$valid) {
                this.messagesService.addMessage('Form filled with errors.', 'error');
                return;
            }
            this.$http.post('/api/campaigns/', this.campaign)
                .then(() => {
                    this.messagesService.addMessage('New campaign has been added.', 'success');
                    this.clearForm(scope);
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
            };
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
