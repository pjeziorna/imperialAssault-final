'use strict';

describe('Component: AddCampaignComponent', function () {

  // load the controller's module
  beforeEach(module('imperialAssaultApp'));

  var AddCampaignComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    AddCampaignComponent = $componentController('AddCampaignComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
