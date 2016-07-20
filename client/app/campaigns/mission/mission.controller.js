'use strict';
(function(){

class MissionComponent {
  constructor($http, $stateParams, Auth) {
      this.$http = $http;
      this.missionId = $stateParams.id;
      this.mission = $stateParams.mission;
      this.campaignId = $stateParams.campaignId;
      this.currentUser = Auth.getCurrentUser();

      if(!this.mission) {
          this.$http.get(`/api/campaigns/${this.currentUser.email}/${this.campaignId}`)
            .then(response => {
                this.mission = _.filter(response.data.missions, (mission) => {
                    return mission._id === this.missionId;
                })[0];
            });
      }
  }
}

angular.module('imperialAssaultApp')
  .component('mission', {
    templateUrl: 'app/campaigns/mission/mission.html',
    controller: MissionComponent
  });

})();
