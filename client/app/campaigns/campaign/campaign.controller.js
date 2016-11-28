'use strict';
(function(){

    class CampaignComponent {
        constructor($stateParams, $state, $http, Auth) {
            this.$http = $http;
            this.$stateParams = $stateParams;
            this.$state = $state;
            this.campaignId = $stateParams.id;
            this.currentUser = Auth.getCurrentUser();

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
            // TODO here should be used some confirmation component
            var remove = confirm('Are you sure you want to delete this campaign?');
            if (!remove) {
                return false;
            }
            this.$http.delete('/api/campaigns/' + this.campaignId)
            .then(() => {
                // TODO here should be message component injected and used.
                console.log('Campaign deleted', this.campaignId);
                this.$state.go('my-campaigns');
            });
        }

        endCampaign() {
            // TODO here should be used some confirmation component
            var remove = confirm('Are you sure you want to end this campaign?');
            if (!remove) {
                return;
            }
            this.campaign.active = false;
            this.$http.patch('/api/campaigns/' + this.campaignId, this.campaign)
                .then(response => {
                    // TODO add message component to notify that update ended correctly
                    if (response.status === 200) {
                        this.campaign = response.data;
                    }
                });
        }

        editMission() {
            console.log('edit mission');
        }

        deleteMission() {
            console.log('delete mission');
        }

        isCampaignOwner() {
            return this.campaign && this.currentUser.email === this.campaign.owner;
        }
    }

    angular.module('imperialAssaultApp')
    .component('campaign', {
        templateUrl: 'app/campaigns/campaign/campaign.html',
        controller: CampaignComponent
    });

})();
