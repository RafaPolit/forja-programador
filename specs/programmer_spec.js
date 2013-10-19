'use strict';

describe('The Programmer', function() {

  var programmer;

  beforeEach(function() {
    programmer = require('../forge/programmer.js')();
  })

  it('should have an array of the 6 actions to take for each cry (and combos) and the time it takes to resolve them', function() {
    expect(programmer.actions.length).toBe(6);
    expect(programmer.actions[2].takes).toBe(65);
    expect(programmer.actions[4].with).toBe('Pañal');
    expect(programmer.actions[5].attend).toEqual(/Gua/g);
  });
});