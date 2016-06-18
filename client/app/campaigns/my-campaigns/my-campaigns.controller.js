'use strict';
(function(){

class MyCampaignsComponent {
  constructor($http, Auth) {
    this.campaigns = [];
    this.$http = $http;
    this.user = Auth.getCurrentUser();
  }

  $onInit() {
      this.$http.get('/api/campaigns/', {
          userId: this.user._id
      })
      .then(response => {
          console.log('my-campaigns controller onInit', response);
          this.campaigns = response.data;
      });
  }
}

angular.module('imperialAssaultApp')
  .component('myCampaigns', {
    templateUrl: 'app/campaigns/my-campaigns/my-campaigns.html',
    controller: MyCampaignsComponent
  });

})();
