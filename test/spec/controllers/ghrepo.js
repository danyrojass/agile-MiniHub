'use strict';

describe('Controller: GhrepoCtrl', function () {

  // load the controller's module
  beforeEach(module('appApp'));

  var GhrepoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GhrepoCtrl = $controller('GhrepoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GhrepoCtrl.awesomeThings.length).toBe(3);
  });
});
