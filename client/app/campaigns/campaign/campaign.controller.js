'use strict';
(function(){

    class CampaignComponent {
        constructor($stateParams, $state, $http) {
            this.$http = $http;
            this.$stateParams = $stateParams;
            this.$state = $state;
            this.campaignId = $stateParams.id;

            if ($stateParams.campaign === null) {
                $http.get('/api/campaigns/' + this.campaignId)
                .then(response => {
                    this.campaign = response.data;
                });
            } else {
                this.campaign = $stateParams.campaign;
            }
        }

        deleteCampaign() {
            // TODO here should be used some confirmation component
            var remove = confirm('Are you sure you want to delete this campaign?')
            if (!remove) return;
            this.$http.delete('/api/campaigns/' + this.campaignId)
            .then(response => {
                // TODO here should be message component injected and used.
                console.log('Campaign deleted', this.campaignId);
                this.$state.go('my-campaigns');
            });
        }

        endCampaign() {
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
    }

    angular.module('imperialAssaultApp')
    .component('campaign', {
        templateUrl: 'app/campaigns/campaign/campaign.html',
        controller: CampaignComponent
    });

})();
