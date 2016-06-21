'use strict';
(function(){

class MissionComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('imperialAssaultApp')
  .component('mission', {
    templateUrl: 'app/campaigns/mission/mission.html',
    controller: MissionComponent
  });

})();
