'use strict';

describe('Component: CampaignComponent', function () {

  // load the controller's module
  beforeEach(module('imperialAssaultApp'));

  var CampaignComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    CampaignComponent = $componentController('CampaignComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
