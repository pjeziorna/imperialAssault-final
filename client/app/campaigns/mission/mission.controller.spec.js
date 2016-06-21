'use strict';

describe('Component: MissionComponent', function () {

  // load the controller's module
  beforeEach(module('imperialAssaultApp'));

  var MissionComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    MissionComponent = $componentController('MissionComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
