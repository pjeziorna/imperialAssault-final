'use strict';

describe('Component: AddMissionComponent', function () {

  // load the controller's module
  beforeEach(module('imperialAssaultApp'));

  var AddMissionComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    AddMissionComponent = $componentController('AddMissionComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
