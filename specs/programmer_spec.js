'use strict';

describe('The Programmer', function() {

  var programmer;

  beforeEach(function() {
    programmer = require('../forge/programmer.js')();
  })

  it('should have an array of actions to take for each cry and the time it takes to resolve them', function() {
    expect(programmer.actions).toBeDefined();
  });
});