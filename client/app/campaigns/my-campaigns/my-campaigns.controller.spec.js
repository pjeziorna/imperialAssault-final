'use strict';

describe('Component: MyCampaignsComponent', function () {

  // load the controller's module
  beforeEach(module('imperialAssaultApp'));

  var MyCampaignsComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    MyCampaignsComponent = $componentController('MyCampaignsComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
