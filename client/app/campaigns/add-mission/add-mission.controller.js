'use strict';
(function(){

class AddMissionComponent {
  constructor($stateParams, $http, messagesNotify) {
      this.$stateParams = $stateParams;
      this.$http = $http;
      this.messagesNotify = messagesNotify;

      this.campaignId = this.$stateParams.id;
      this.message = messagesNotify.getMessage();


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
      console.log('get players from campaign obj');
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
