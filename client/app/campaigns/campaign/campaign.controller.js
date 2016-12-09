'use strict';
(function(){

    class CampaignComponent {
        constructor($rootScope, $stateParams, $state, $http, Auth, PopupsService, MessagesService) {
            this.$http = $http;
            this.$stateParams = $stateParams;
            this.$state = $state;
            this.$rootScope = $rootScope;
            this.campaignId = $stateParams.id;
            this.currentUser = Auth.getCurrentUser();
            this.popupsService = PopupsService;
            this.messagesService = MessagesService;

            if ($stateParams.campaign === null) {
                $http.get('/api/campaigns/' + this.currentUser.email + '/' + this.campaignId)
                .then(response => {
                    this.campaign = response.data;
                });
            } else {
                this.campaign = $stateParams.campaign;
            }
        }

        deleteCampaign() {
            this.popupsService.open({
                message: 'Are you sure you want to delete this campaign?',
                cancelBtn: 'Cancel',
                acceptBtn: 'OK'
            })
            .then(() => {
                this.$http.delete('/api/campaigns/' + this.campaignId)
                .then(() => {
                    // TODO here should be message component injected and used.
                    this.$state.go('my-campaigns');
                });
            });
        }

        endCampaign() {
            this.popupsService.open({
                message: 'Are you sure you want to end this campaign?',
                cancelBtn: 'Cancel',
                acceptBtn: 'OK'
            })
            .then(() => {
                this.campaign.active = false;
                this.$http.patch('/api/campaigns/' + this.campaignId, this.campaign)
                    .then(response => {
                        // TODO add message component to notify that update ended correctly
                        if (response.status === 200) {
                            this.campaign = response.data;
                        }
                    });
            });
        }

        editMission() {
            console.log('edit mission');
        }

        deleteMission(id) {
            let index = _.findIndex(this.campaign.missions, {_id: id});
            this.campaign.missions.splice(index, 1);
            this.$http.put(`/api/campaigns/${this.campaignId}/${id}`, this.campaign)
            .then(response => {
                if (response.status === 200) {
                    this.messagesService.addMessage('Mission deleted correctly.', 'success');
                }
            })
            .catch(() => {
                this.messagesService.addMessage('Mission not delete.', 'error');
            });
        }

        isCampaignOwner() {
            return this.campaign && this.currentUser.email === this.campaign.owner;
        }

        _popupSubscribe() {
            this.$rootScope.$on('popup.confirm').then(() => {
                _deleteCampaign();
            });
        }

        _deleteCampaign() {

        }
    }

    angular.module('imperialAssaultApp')
    .component('campaign', {
        templateUrl: 'app/campaigns/campaign/campaign.html',
        controller: CampaignComponent
    });

})();
