'use strict';

describe('Directive: siteMenu', function () {

  // load the directive's module
  beforeEach(module('angularYoemanLearningApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<site-menu></site-menu>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the siteMenu directive');
  }));
});
