'use strict';
(function(){

class MyCampaignsComponent {
  constructor($http, Auth) {
    this.campaigns = [];
    this.$http = $http;
    this.user = Auth.getCurrentUser();
  }

  $onInit() {
      console.log('user', this.user);
      this.$http.get('/api/campaigns/' + this.user.email + '/' , {
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
