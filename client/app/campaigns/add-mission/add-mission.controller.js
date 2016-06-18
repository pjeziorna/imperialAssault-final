'use strict';
(function(){

class AddMissionComponent {
  constructor($stateParams, $http) {
      this.$stateParams = $stateParams;
      this.$http = $http;
      this.campaignId = this.$stateParams.id;
      if (this.$stateParams.campaign === null) {
          this.$http.get('/api/campaigns/' + this.campaignId)
            .then(response => {
                this.campaign = response.data;
                console.log('campaign', this.campaign);
            });
      } else {
          this.campaign = this.$stateParams.campaign;
          console.log('campaign', this.campaign);
      }
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
